<template>
  <router-link :to="link" class="nav-link text-light" active-class="active"><slot></slot></router-link>

</template>

<script>
export default {
  name: "SideBarLink",
  props: {
    link: String,
    title: String
  }
}
</script>

<style scoped>

</style>