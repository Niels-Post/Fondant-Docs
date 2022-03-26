<template>
  <a :href="to" :class="{'small': small}" class="text-muted font-monospace text-decoration-none">{{ cleanLink }}</a>
</template>

<script>
export default {
  name: "ExtLink",
  props: {
    to: String,
    brackets: {
      type: Boolean,
      default: true
    },
    removePath: {
      type: Boolean,
      default: false
    },
    removeQuery: {
      type: Boolean,
      default: true
    },
    small: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    cleanLink() {
      let clean = this.to.replace(/https?:\/\/(www.)?/, "");
      if(this.removePath) {
        clean = clean.replace(/\/[^?]*/, "")
      }
      if(this.removeQuery) {
        clean = clean.replace(/\?.*$/, "")
      }
      if(this.brackets) {
        clean = "[" + clean + "]";
      }
      return clean;
    }
  }
}
</script>

<style scoped>

</style>