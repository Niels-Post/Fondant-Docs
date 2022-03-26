<template>
  <router-link id="" v-if="link" :to="link" class="nav-link text-light" :class="{active: is_active}"
               @click="setVisible($event)"><span><i
      class="bi bi-chevron-right sidebargroup-chevron me-2" ref="chevron_el" :class="{active: children_visible}"></i>
  </span>
    <span class="counter_before">
          {{ title }}

    </span>
  </router-link>

  <a href="#" v-if="!link" class="nav-link text-muted counter_before" @click="toggleVisible()"> {{ title }}</a>

  <li class="nav-item">

    <transition name="slidefade">
      <ol v-if="children_visible" class="sidebar_sub nav nav-pills flex-column mb-auto ms-5">
        <slot></slot>
      </ol>
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
    },
    setVisible(event) {
      if (event.target === this.$refs.chevron_el) {
        console.log("tog")
        this.toggleVisible()
      } else {
        this.children_visible = true;
      }
    }
  },
  mounted() {
    setTimeout(function () {
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
      type: String,
      default: ''
    }
  }
}
</script>

<style>
.slidefade-enter-active {
  transition: all 0.5s;
}

.slidefade-leave-active {
  transition: all 0.5s;
}

.slidefade-leave-from, .slidefade-enter-to {
  /*max-height: 100%*/
}

.slidefade-leave-to, .slidefade-enter-from {
  /*max-height: 0;*/
  opacity: 0;
}


.sidebar_sub {
  counter-reset: sidebar_sub;
}

.sidebar_sub .counter_before::before {
  counter-increment: sidebar_sub;
  content: counter(sidebar_sub) ". "
}


.sidebargroup-chevron {
  transition: all 0.5s;
  display: inline-block;
}

.sidebargroup-chevron.active {
  transform: rotate(90deg);
}


</style>