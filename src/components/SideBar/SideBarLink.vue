<template>
  <router-link :to="link" class="counter_before nav-link text-light" :class="{active: is_active, anchored: is_anchored}" ><slot></slot></router-link>

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
    },
     is_anchored() {
       return this.link.indexOf("#") > -1;
     }
  }
}
</script>

<style scoped>
   .anchored {
      opacity: 0.5;
   }
</style>