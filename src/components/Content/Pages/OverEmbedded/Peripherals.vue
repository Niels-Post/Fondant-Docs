<template>
  <div>
    <p>
      Nu we de algemene informatie hebben doorgenomen is het tijd voor het technische verhaal. In dit hoofdstuk
      bespreken we de opbouw van een microcontroller, en leggen we uit <span
        class="fix">hoe deze in het algemeen werkt</span>.
    </p>

    <p>
      Omdat we deze cursus werken met de microprocessoren van ST, zullen we dit hoofdstuk aan de hand van een STM32
      processor werken. We gebruiken de <a
        href="https://www.st.com/en/microcontrollers-microprocessors/stm32f103c8.html">STM32F103C8</a>. Dit is de MCU
      die in de
      veelgebruikte <a href="https://stm32-base.org/boards/STM32F103C8T6-Blue-Pill.html">STM32 BluePill</a> zit.
    </p>

  </div>
</template>

<script>

import titleMixin from "@/components/Helpers/titleMixin";

export default {
  name: "MicrocontrollerOnderdelen",
   title: "Peripherals",
   mixins: [titleMixin]

}
</script>

<style scoped>

</style>