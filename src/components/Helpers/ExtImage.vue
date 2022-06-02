<template>
  <div :class="{'col-6': !fullWidth, 'col-12': fullWidth}">
    <img :src="src" ref="ext_image" class="img-fluid"
         :alt="source_fm">
  </div>
</template>

<script>
export default {
  name: "ExtImage",
  props: {
    src: String,
    source: String,
     fullWidth: Boolean
  },
  computed: {

    source_fm() {
      return "Bron: " + this.source
    }
  }
}
</script>

<style scoped>

</style>