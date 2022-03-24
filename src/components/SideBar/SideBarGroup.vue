<template>

  <li class="nav-item">
    <router-link id="" v-if="link" :to="link" class="nav-link text-light"  :class="{active: is_active}"  @click.self="setVisible()"><span @click.prevent="toggleVisible()"><i class="bi bi-chevron-right sidebargroup-chevron me-2" :class="{active: children_visible}" ></i></span>{{title}}</router-link>

    <a href="#" v-if="!link" class="nav-link text-muted" @click="toggleVisible()"> {{title}}</a>

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
      console.log("Toggle")

      this.children_visible = !this.children_visible;
    },
    setVisible() {
      console.log("Set")
        this.children_visible = true;
    }
  },
  mounted() {
    setTimeout(function(){
      this.children_visible = this.$router.currentRoute.value.path.startsWith(this.$props.link)
    }.bind(this))
  },
  computed: {
    is_active() {
      return (this.$route.path + this.$route.hash) === this.link;
    }
  },
  props: {
    title: String,
    link: {
      type:String,
      default:''
    }
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