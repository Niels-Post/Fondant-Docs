<template>

  <li class="nav-item">
    <a href="#" class="nav-link text-muted" @click="toggleVisible()"><i class="bi bi-chevron-right sidebargroup-chevron" :class="{active: children_visible}" ></i> {{title}}</a>

    <transition name="slidefade">
      <ul v-if="children_visible" class="nav nav-pills flex-column mb-auto ms-5">
        <slot></slot>

      </ul>
    </transition>

  </li>
</template>

<script>
export default {
  name: "SideBarGroup",
  data() {
    return {
      children_visible: false
    }
  },

  methods: {
    toggleVisible() {
      this.children_visible = !this.children_visible;
    }
  },
  mounted() {
    setTimeout(function(){
      this.children_visible = this.$router.currentRoute.value.path.startsWith(this.$props.link)
    }.bind(this))
  },
  props: {
    title: String,
    link: String
  }
}
</script>

<style scoped>
.slidefade-enter-active {
  transition: all 0.5s;
}
.slidefade-leave-active {
  transition: all 0.5s;
}

.slidefade-leave-from, .slidefade-enter-to {
  /*max-height: 100%*/
}

.slidefade-leave-to,.slidefade-enter-from {
  /*max-height: 0;*/
  overflow: hidden;
  opacity: 0;
}


.sidebargroup-chevron {
  transition: all 0.5s;
  display: inline-block;
}

.sidebargroup-chevron.active {
  transform: rotate(90deg);
}


</style>