<template>
   <div class="wavedrom-configurator p-2 border border-dark rounded bg-light ">


      <form class="row  g-3 align-items-center">
         <div class="col-12 col-md-4 form-floating">
               <select class="form-select " v-model="selectDataBits">
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
               </select>
               <label>Aantal data bits</label>
         </div>
         <div class="col-12  col-md-4 ">
            <div class="form-floating">
               <select class="form-select " v-model="selectParityBits">
                  <option value="0">0</option>
                  <option value="1">1</option>
               </select>
               <label>Aantal parity bits</label>
            </div>
         </div>


         <div class="col-12  col-md-4 ">
            <div class="form-floating">
               <select class="form-select " v-model="selectStopBits">
                  <option value="1" selected>1</option>
                  <option value="2">2</option>
               </select>
               <label>Aantal stop bits</label>
            </div>
         </div>


         <div class="col-12  col-md-4 ">
            <div class="form-floating">
               <select class="form-select" v-model="selectBitOrder">
                  <option value="msbfirst" selected>msb eerst</option>
                  <option value="lsbfirst">lsb eerst</option>
               </select>
               <label>Bitvolgorde</label>
            </div>
         </div>

         <div class="col-12  col-md-4 ">
            <div class="form-floating">
               <select class="form-select " v-model="selectParityMode">
                  <option value="even" selected>even</option>
                  <option value="odd">oneven</option>
               </select>
               <label>Parity modus</label>
            </div>
         </div>

         <div class="col-12  col-md-4 ">
            <div class="form-floating">
               <input type="text" class="form-control" v-model="inputData">
               <label>Data</label>
            </div>
         </div>

      </form>
      <hr>

      <div class="row container">
         <div class="alert alert-danger" v-if="error">{{ error }}</div>
      </div>
      <div v-if="!error" class="row">
         <object :data="wavedrom_url"></object>

      </div>

   </div>
</template>

<script>
function clean_wavedrom_binary(binary) {
   let last_char = ''
   for (let idx = 0; idx < binary.length; idx++) {
      let this_char = binary[idx]
      if (this_char === last_char) {
         binary = binary.substring(0, idx) + '.' + binary.substring(idx + 1);
      }

      if(this_char !== ".") {
         last_char = this_char
      }
   }
   return binary
}

export default {
   name: "WaveDromUART",
   data() {
      return {
         selectDataBits: '5',
         selectParityBits: '1',
         selectStopBits: '1',
         selectParityMode: 'even',
         selectBitOrder: 'lsbfirst',
         inputData: '10'
      }
   },
   computed: {
      wavedrom_url() {
         return `https://svg.wavedrom.com/${encodeURIComponent(JSON.stringify(this.wavedrom_data))}`;
      },
      tx_signal() {
         let base = {
            name: "tx",
            wave: clean_wavedrom_binary("1.0" + this.tx_data + "1".repeat(this.selectStopBits) + "1."),
            data: []
         }
         for (let i = 1; i <= this.selectDataBits; i++) {
            base.data.push(`D${i}`)
         }
         if (this.selectParityBits === "1") {
            base.data.push("DP")
         }
         return base
      },
      tx_data() {
         let binary = (parseInt(this.inputData) >>> 0).toString(2)
         if(binary.length > this.selectDataBits) {
            return {}
         }

         binary = "0".repeat(this.selectDataBits - binary.length) + binary;

         if(this.selectBitOrder === "lsbfirst") {
            binary = binary.split("").reverse().join("")
         }

         if(this.selectParityBits === "1") {
            let num_ones = 0;
            for (const char of binary) {
               if (char === '1') {
                  num_ones++;
               }
            }
            let num_is_even = (num_ones % 2) === 0

            if(this.selectParityMode === "even") {
               binary += num_is_even ? "1": "0"
            } else {
               binary += !num_is_even ? "1" : "0"
            }
         }

         return binary
      },
      data_signal() {
         let base = {
            name: "data",
            wave: "x.34" + ".".repeat(this.selectDataBits - 1) + "5".repeat(this.selectParityBits) + "6" + ".".repeat(this.selectStopBits - 1) + "x.",
            data: ["start", "data bits"]
         }

         if (this.selectParityBits === "1") {
            base.data.push("parity")
         }
         base.data.push("stop")
         return base
      },

      wavedrom_data() {
         return {
            signal: [
               this.tx_signal,
               this.data_signal
            ],
            config: {hscale: 1}
         }
      },
      error() {
         let base_binary =  (parseInt(this.inputData) >>> 0).toString(2)
         if (this.selectDataBits === '9' && this.selectParityBits == '1') {
            return "Als er 1 parity bit is, kunnen er maximaal 8 data bits zijn"
         } else if(base_binary.length > this.selectDataBits) {
            return `Data ${this.inputData} past niet in het data frame van ${this.selectDataBits} bits`
         } else {
            return null;
         }
      }
   }
}
</script>

<style scoped>
.wavedrom-configurator {
   background: rgba(0, 0, 0, 0.5);
}
</style>