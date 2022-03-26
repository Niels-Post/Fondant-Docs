<template>
  <div id="sidebar" class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark">
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <span class="fs-4">{{ title }}</span>
    </a>
    <hr>
    <ol class="sidebar_list nav nav-pills flex-column mb-auto">
      <slot></slot>
    </ol>
  </div>

</template>

<script>
export default {
  name: 'SideBar',
  props: {
    title: String
  },
  components: {  }
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


.btn-toggle-nav a {
  display: inline-flex;
  padding: .1875rem .5rem;
  margin-top: .125rem;
  margin-left: 1.25rem;
  text-decoration: none;
}

.btn-toggle-nav a:hover,
.btn-toggle-nav a:focus {
  background-color: #d2f4ea;
}

.scrollarea {
  overflow-y: auto;
}

.fw-semibold {
  font-weight: 600;
}

.lh-tight {
  line-height: 1.25;
}
</style>


