<template>
   <span class="definition_reference" :class="{'pin': pin}" data-bs-toggle="tooltip" :title="definition">{{ n }}</span>
</template>

<script>
import useDefinitions from "@/components/Helpers/useDefinitions";
import {Tooltip} from "bootstrap";

export default {
   name: "DefRef",
   props: {
      n: String,
      pin: {
         type: Boolean,
         default: false
      }
   },
   computed: {
      definition() {
         console.log(this)
         let value = useDefinitions().value[this.n]
         if (!value) {
            console.log(`Unknown definition: ${this.n}`)
         }

         return value
      }
   },
   mounted() {
      new Tooltip(this.$el)
   }
}
</script>

<style scoped>
.definition_reference {
   color: #3b95ee;
   font-weight: bold;
   cursor: pointer;
}

.definition_reference:not(.pin) {
   font-style: italic;
}

.definition_reference.pin {
   color: #324386;
   display: inline-block;
   font-family: monospace ;
   border: 1px solid black ;
   line-height: 1em;
   border-radius: 2px;
}
</style>