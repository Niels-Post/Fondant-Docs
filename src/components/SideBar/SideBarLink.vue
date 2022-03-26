<template>
  <router-link :to="link" class="counter_before nav-link text-light" :class="{active: is_active}" ><slot></slot></router-link>

</template>

<script>
export default {
  name: "SideBarLink",
  props: {
    link: String,
    title: String
  },
  computed: {
    is_active() {
      return (this.$route.path + this.$route.hash) === this.link;
    }
  }
}
</script>

<style scoped>

</style>