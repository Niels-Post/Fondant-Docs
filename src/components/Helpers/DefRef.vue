<template>
  <span class="definition_reference" data-bs-toggle="tooltip" :title="definition">{{n}}</span>
</template>

<script>
import useDefinitions from "@/components/Helpers/useDefinitions";
import {Tooltip} from "bootstrap";
export default {
  name: "DefRef",
  props: {
    n: String
  },
  computed: {
      definition() {
        return useDefinitions().value[this.n]
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
  font-style: italic;
  cursor:pointer;
}
</style>