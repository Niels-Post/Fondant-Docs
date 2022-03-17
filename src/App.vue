<template>
  <!--  <img alt="Vue logo" src="./assets/logo.png">-->
  <SideBar title="Fondant">
    <SideBarLink link="/">Start</SideBarLink>

    <SideBarGroup title="1. Installatie" link="/Installatie">
      <SideBarLink link="/Installatie/1_CubeIDE">1. STM32CubeIDE</SideBarLink>
      <SideBarLink link="/Installatie/2_CLion">2. CLion</SideBarLink>
      <SideBarLink link="/Installatie/3_OpenOCD">3. OpenOCD</SideBarLink>
      <SideBarLink link="/Installatie/4_ARM">4. ARM</SideBarLink>
    </SideBarGroup>



  </SideBar>

  <div class="container-fluid ms-1 p-4 content-container " style="background: #e0e4e8; height: 100vh; overflow: auto">
    <router-view></router-view>

  </div>

</template>

<script>

import SideBar from "@/components/SideBar/SideBar";
import SideBarLink from "@/components/SideBar/SideBarLink";
import SideBarGroup from "@/components/SideBar/SideBarGroup";

export default {
  name: 'App',
  components: {
    SideBar,
    SideBarLink,
    SideBarGroup
  }
}
</script>

<style>
  #app {
    display: flex;
    height: 100vh;
  }

  .emph {
    display: inline;
    background: #a2a2a2;
    color: #e7e7e7;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 5px;
    font-size: 0.9em;
  }


</style>
