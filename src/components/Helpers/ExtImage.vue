<template>
  <div class="col-6">
    <img :src="src" ref="ext_image" class="img-fluid"
         :alt="source_fm">
  </div>
</template>

<script>
export default {
  name: "ExtImage",
  props: {
    src: String,
    source: String
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