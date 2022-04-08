<template>
   <div class="wavedrom-configurator p-2 border border-dark rounded bg-light ">


      <form class="row  g-3 align-items-center">
         <div class="col-12 col-md-4 form-floating">
               <select class="form-select " v-model="CPOL">
                  <option value="0">0 (actief hoog)</option>
                  <option value="1">1 (actief laag)</option>
               </select>
               <label>CPOL (Clock Polarity)</label>
         </div>
         <div class="col-12  col-md-4 ">
            <div class="form-floating">
               <select class="form-select " v-model="CPHA">
                  <option value="0">0 (lees op trailing, schrijf op leading)</option>
                  <option value="1">1 (lees op leading, schrijf op trailing)</option>
               </select>
               <label>CPHA (Clock Phase)</label>
            </div>
         </div>

         <div class="col-12  col-md-4 ">
            <div class="form-floating">
               <input disabled type="text" class="form-control" v-model="spiMode">
               <label>SPI Mode</label>
            </div>
         </div>


         <div class="col-12  col-md-4 ">
            <div class="form-floating">
               <input type="text" class="form-control" v-model="mosiData">
               <label>MOSI Data</label>
            </div>
         </div>

         <div class="col-12  col-md-4 ">
            <div class="form-floating">
               <input type="text" class="form-control" v-model="misoData">
               <label>MISO Data</label>
            </div>
         </div>

         <div class="col-12  col-md-4">
            <div class="form-floating">
               <input disabled type="text" class="form-control" v-model="CKE">
               <label>CKE (Clock Edge)</label>
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

function to_binary(data, numBits, lsbFirst = false, bitSize = 1) {
   let binary = (parseInt(data) >>> 0).toString(2)
   if (binary.length > numBits) {
      return null
   }

   binary = "0".repeat(numBits - binary.length) + binary;

   if (lsbFirst) {
      binary = binary.split("").reverse().join("")
   }

   return binary.split("").join(".".repeat(bitSize)) + ".".repeat(bitSize)
}

export default {
   name: "WaveDromSPI",
   data() {
      return {
         CPOL: '0',
         CPHA: '1',
         misoData: '10',
         mosiData: '15'
      }
   },
   computed: {
      wavedrom_url() {
         return `https://svg.wavedrom.com/${encodeURIComponent(JSON.stringify(this.wavedrom_data))}`;
      },
      spiMode() {
         return parseInt(this.CPOL) * 2 + parseInt(this.CPHA)
      },
      CKE() {
         return 1 - this.CPHA;
      },
      cs_signal() {
         let data = `10${".".repeat(16)}1.`
         return {
            name: "CS",
            wave: data,
            data: []
         }
      },
      sck_signal() {
         let lead = this.CPOL === "0" ? "h" : "l";
         let trail = this.CPOL === "0" ? "l" : "h";
         if(this.CPHA === "1") {
            lead = lead.toUpperCase()
         } else {
            trail = trail.toUpperCase()
         }

         let data = `${trail}.${(lead + trail).repeat(8)}..`
         return {
            name: "SCK",
            wave: data,
            data: []
         }
      },
      mosi_signal() {
         let leading_spacer = ".".repeat(this.CKE);
         let trailing_spacer = ".".repeat(this.CPHA);

         return {
            name: "MOSI",
            wave: "x" + leading_spacer +  clean_wavedrom_binary(to_binary(this.mosiData, 8)) + trailing_spacer + "x.",
            data: []
         }
      },
      miso_signal() {
         let leading_spacer = ".".repeat(this.CKE);
         let trailing_spacer = ".".repeat(this.CPHA);

         return {
            name: "MISO",
            wave: "x" + leading_spacer + clean_wavedrom_binary(to_binary(this.misoData, 8)) + trailing_spacer + "x.",
            data: []
         }
      },
      wavedrom_data() {
         console.log({
            signal: [
               this.cs_signal,
               this.sck_signal,
               this.mosi_signal,
               this.miso_signal
            ],
            config: {hscale: 1}
         })
         return {
            signal: [
               this.cs_signal,
               this.sck_signal,
               this.mosi_signal,
               this.miso_signal
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