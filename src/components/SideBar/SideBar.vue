<template>
   <div class="d-flex">
      <div ref="sidebar" class="sidebar d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
           :class="{'side-navbar-opened': isOpen}">


         <h4 class="d-flex align-items-center mb-3 mb-md-0 me-md-auto">
            <a class="d-inline text-white d-xl-none" href="#" @click="closeSidebar">
               <i class="bi bi-x-circle"></i>
            </a>
            <router-link :to="link" class=" text-white text-decoration-none ms-2">
               {{ title }}
            </router-link>
         </h4>

         <hr>
         <ol class="nav sidebar_list nav nav-pills flex-column mb-auto">
            <slot name="sidebar"></slot>
         </ol>
      </div>

      <div class="sidebarOpenButton opacity-50  align-self-start bg-dark d-xl-none d-inline rounded-end" :class="{'sidebarOpenButtonHidden': isOpen}">
         <a class="btn text-white" id="menu-btn" @click="openSidebar">
            <i class="bi bi-list"></i>
         </a>
      </div>

      <div class="p-2 p-xl-4 container-fluid content-container" ref="container" style="height: 100vh; overflow: auto;">
         <slot name="content" class=" col-12 col-lg-8"></slot>
      </div>


      <!--      <div class="container-fluid ms-1 p-4 content-container" id="content-container"-->
      <!--           style="background: #e0e4e8; height: 100vh; overflow: auto">-->
      <!--         -->
      <!--      </div>-->
   </div>


</template>

<script>
export default {
   name: 'SideBar',
   data() {
      return {
         isOpen: false
      }
   },
   props: {
      title: String,
      link: {
         type: String,
         default: "/"
      }
   },
   methods: {
      openSidebar() {
         this.isOpen = true
      },
      closeSidebar() {
         this.isOpen = false
      }
   },
   watch: {
      $route() {
         this.isOpen = false;
      }
   },
   components: {}
}


</script>

<style>
body {
   min-height: 100vh;
   min-height: -webkit-fill-available;
}

html {
   height: -webkit-fill-available;
}

main {
   display: flex;
   flex-wrap: nowrap;
   height: 100vh;
   height: -webkit-fill-available;
   max-height: 100vh;
   overflow-x: auto;
   overflow-y: hidden;
}

.sidebar_list {
   counter-reset: sidebar_main;
}

.sidebar_list .counter_before:not(.sidebar_sub *)::before {
   counter-increment: sidebar_main;
   content: counter(sidebar_main) ". "
}

.sidebar {
   transition: 0.5s;
   z-index: 1000;
   max-width: 100vh;
   overflow: hidden;
   overflow-y: auto;
   padding-bottom: 100px;
}

.content-container {
   background: #e0e4e8;
}

.sidebarOpenButton {
   position: fixed;
   top: 100px;
   left: 0;
   z-index: 1000;
   transition: 0.5s;
}

.sidebarOpenButtonHidden {
   margin-left: -100px;
}

@media only screen and (max-width: 1200px) {
   .sidebar {
      height: 100%;
      width: 100%;
      position: fixed;

      margin-left: -100%;
   }

   .side-navbar-opened {
      margin-left: 0;
   }


}

@media only screen and (min-width: 1200px) {
   .sidebarOpenButton {
      display: none;
   }
}


</style>


