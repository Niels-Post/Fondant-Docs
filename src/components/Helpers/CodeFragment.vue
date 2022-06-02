<template>
   <div>
      <pre v-highlightjs="sourcecode" class="bordered-code" ><code :class="type">{{ code_string }}</code></pre>
      <div class="hidden" ref="code_content"><slot ></slot></div>
   </div>
</template>

<script>
export default {
   name: "CodeFragment",
   props: {
      type: String
   },
   data(){
      return {
         code_string: ""
      }
   },
   mounted() {
      this.code_string = this.$refs.code_content.children[0].innerText.trim()
   }
}
</script>

<style scoped>
.bordered-code {
   border-radius: 5px;
   border: 1px solid #c0c0c0;
}

.hidden {
   display:none
}
</style>