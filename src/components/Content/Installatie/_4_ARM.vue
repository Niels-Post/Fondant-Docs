<template>
  <h3 >arm-none-eabi  <a href="https://developer.arm.com/tools-and-software/open-source-software/developer-tools/gnu-toolchain/gnu-rm/downloads" class="small text-muted text-decoration-none">[developer.arm.com]</a></h3>

  <img class="float-end" src="https://upload.wikimedia.org/wikipedia/commons/6/60/ARM_logo.svg" alt="ARM Logo">


  <p>
    Dit is de compiler toolchain voor ARM embedded chips. In deze toolchain vind je alles wat je nodig hebt om C/C++
    code
    om te zetten naar een bin-bestand wat geschikt is voor microcontrollers.
  </p>
  
  <div>
    De naam van veel toolchains is opgebouwd als <span class="emph">ARCH-VENDOR-OS</span>

  </div>

  <div class="ms-1 mt-0 mb-3">
    <div><span class="emph font-monospace">ARCH</span> De processorarchitectuur waarvoor de toolchain werkt.</div>
    <div><span class="emph font-monospace">VENDOR</span> De uitgever van de toolchain</div>
    <div><span class="emph font-monospace">OS</span> Besturingssysteem waarvoor de toolchain werkt</div>
  </div>


  ARM-none-eabi is een toolchain die gemaakt is voor ARM-processoren. Omdat het open source software is, is er geen
  specifieke vendor (none). Omdat het gaat om embedded apparaten, die geen OS hebben, is het OS ook none. Het stukje wat
  erachter staat (EABI) betekent dat de toolchain compatible is met de Arm Embedded ABI.

  Dit is de toolchain die je gebruikt voor de meeste Arm-gebaseerde embedded systemen


  Installatie
  Download: https://www.st.com/en/development-tools/stm32cubeide.html
  Voordat je mag downloaden moet je van ST eerst een account aanmaken of je email invullen. De setup verloopt niet, dus
  deze kan je op meerdere apparaten gebruiken.
  Onderstaand de installatiestappen.

</template>

<script>
export default {
  name: "4_ARM"
}
</script>

<style scoped>

</style>