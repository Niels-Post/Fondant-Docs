<template>
   <div>
      <h1>Hello World! </h1>
      <hr>
      <p>
         We hebben nu een ingesteld STM32/CLion/Fondant project wat ingesteld is voor de STM32 bluepill. Het wordt tijd
         dat we de blue pill echt wat laten doen! Waar het binnen andere disciplines de gewoonte is om een programma te maken
         wat "Hello World!" laten we bij embedded meestal een LEDje knipperen.
      </p>

      <p>
         Op de bluepill is een onboard-LED aanwezig. Door deze te gebruiken hoeven we geen externe LED aan te sluiten. Deze LED
         is aangesloten op pin <span class="emph">PC13</span>. Als we dus pin PC13 steeds aan- en uitzetten, zou de LED moeten knipperen.
      </p>


      <p>
         Voor dit voorbeeld heb je alleen de bluepill en de ST-link programmer nodig. Sluit de bluepill op de ST-link aan met
         4 jumper wires. Gebruik hiervoor de pins aan het uiteinde van de bluepill met de labels <span class="emph">SWDIO</span>
         <span class="emph">SWCK</span><span class="emph">GND</span> en <span class="emph">3V3</span>.
      </p>

      <hr class="spacer">
      <h2 id="PinInstellen">Pin instellen</h2>

      <p class="mt-3">
         Om de pin te kunnen laten knipperen moeten we deze eerst in de IDE instellen. Volg hiervoor de onderstaande
         stappen.
         Druk na het wijzigen van de configuratie altijd even op opslaan/ctrl+s. Hierdoor wordt de configuratie
         toegepast op de
         code in het project.
      </p>

      <ImageCarousel>
         <CarouselImage :src="require(`@/assets/HelloWorld/12-PinOut.png`)" alt="PinOut" title="">
            Klik in de pinconfiguratieweergave op de pin (PC13) en selecteer GPIO_Output
         </CarouselImage>
         <CarouselImage :src="require(`@/assets/HelloWorld/13-PinOutDone.png`)" alt="PinOut done" title="">
            Je zal zien dat het label nu groen wordt, en het label aangeeft dat het een GPIO_Output is.
         </CarouselImage>
      </ImageCarousel>



      <hr class="spacer">
      <h2 id="DeCode">De Code</h2>

      <CodeFragment type="cpp"><pre>
// Include voor fd_main omleiding
#include &lt;fd/fondant_main.hpp&gt;

// Include basisfuncties van fondant (nodig voor fd::sleep)
#include &lt;fd/fondant.hpp&gt;

// Include de GPIO module
#include &lt;fd/gpio.hpp&gt;

int fd_main() {
   // LET OP: voordat een pin_out werkt moet deze al ingesteld zijn op de microcontroller als pin_out (dus in de STM32 IDE)

   // Maak een pin_out aan voor GPIOC pin 13
   fd::stm32_hal::pin_out internal_led(GPIOC, GPIO_PIN_13);

   while(true) {
      // Wacht 1 seconde
      fd::sleep(1000);

      // Toggle de LED
      internal_led.toggle();
   }

   return 0;
}



     </pre>
      </CodeFragment>
   </div>
</template>

<script>
import titleMixin from "@/components/Helpers/titleMixin";
import CodeFragment from "@/components/Helpers/CodeFragment";
import ImageCarousel from "@/components/Carousel/ImageCarousel";
import CarouselImage from "@/components/Carousel/CarouselImage";

export default {
   name: "1HelloWorld",
   components: {
      CodeFragment,
      ImageCarousel,
      CarouselImage
   },
   title: "Fondant Instellen",
   mixins: [titleMixin]
}
</script>

<style scoped>

</style>