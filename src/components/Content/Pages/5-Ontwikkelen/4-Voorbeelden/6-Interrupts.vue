<template>
   <div>
      <h1>Interrupts</h1>
      <hr>
      <p>
         Interrupts zijn een manier om heel snel te reageren op bepaalde gebeurtenissen in een microcontroller. Via
         Fondant is het mogelijk om aan een aantal interrupts te koppelen met je eigen functie. Dit voorbeeld laat zien
         hoe je gebruik maakt van een <DefRef n="External Interrupt"/>. Deze "gaat af" wanneer een specifieke pin van
         staat wisselt. In dit voorbeeld gebruiken we dit om een led te laten togglen wanneer dit gebeurt.
      </p>

      <p>
         Voor dit voorbeeld heb je dus alleen de bluepill en de STlink.
      </p>

      <div class="alert alert-warning">
         Interruptfuncties kunnen andere uitvoerende code onderbreken. Om de impact te minimaliseren is het belangrijk
         om interrupt functies zo kort mogelijk te houden. Doe dus geen uitgebreide IO handelingen in deze functies.
      </div>

      <hr class="spacer">
      <h2>IDE Instellingen</h2>

      <ImageCarousel>
         <CarouselImage :src="require(`@/assets/Voorbeelden/ExtiInstellen-1.png`)" alt="PinOut" title="">
            Selecteer de pin (in dit geval PB0) en stel deze in op de modus GPIO_EXTI0
         </CarouselImage>
         <CarouselImage :src="require(`@/assets/Voorbeelden/ExtiInstellen-2.png`)" alt="PinOut" title="">
            Zoek de pin nu in het linkermenu op onder System Core->GPIO. Selecteer deze, en stel een interne pull-up in
         </CarouselImage>
         <CarouselImage :src="require(`@/assets/Voorbeelden/ExtiInstellen-3.png`)" alt="PinOut" title="">
            Stell nu de NVIC in via System Core->NVIC.Enable hierbij de "EXTI line0 interrupt"
         </CarouselImage>
      </ImageCarousel>


      <p>
         In de IDE moet je DMA-kanalen toevoegen aan de SPIbus om dit te laten werken. Hierboven zie je de stappen daarvoor.
      </p>


      <hr class="spacer">
      <h2 id="DeCode">De Code</h2>

      <p>
         Het enige verschil met de niet-DMA code voor SPI is dat je de dma-vlag op true zet. Als je de onderstaande code
         uitvoert, en het resultaat bekijkt in Pulseview kan je deze vlag op false zetten om te zien wat het verschil
         is in snelheid bij het gebruik van DMA.
      </p>

      <CodeFragment type="cpp"><pre>
// Include voor fd_main omleiding
#include &lt;fd/fondant_main.hpp&gt;

// Include voor fd::sleep
#include &lt;fd/fondant.hpp&gt;

// Include de GPIO module
#include &lt;fd/gpio.hpp&gt;

// Include de interrupt module. Deze zorgt automatisch dat platformspecifieke onderdelen geladen worden
#include &lt;fd/interrupt.hpp&gt;

int fd_main() {
   // Maak een pin_out aan voor de Onboard LED
   auto pinOut = fd::stm32_hal::pin_out{GPIOC, GPIO_PIN_13};

   // Deze lambda functie togglet de pin
   // [&pinOut] zorgt ervoor dat de pin by reference beschikbaar is in de functie
   auto func = [&pinOut](fd::stm32_hal::interrupt_data data) {

      // We controleren of de interrupt wel aangeroepen is op pin 0
      // Alle pins zijn gegroepeerd op nummer in de interrupt controller. (niet op poort)
      // Hierdoor is er geen onderscheid mogelijk tussen een interrupt op A0 en een interrupt op B0.
      // Vandaar dat we alleen op het pin nummer selecteren
      if(data.data0 != GPIO_PIN_0) {
         return;
      }

      // Het keyword static geeft aan de variabele last_ticks bewaard moet blijven tussen uitvoeringen van de functie
      // Deze wordt dus alleen de eerste keer dat de functie uitgevoerd wordt op 0 gezet
      static uint32_t last_ticks = 0;

      // Haal de nieuwe "tijd" op
      uint32_t new_ticks = fd::stm32_hal::get_current_ticks();

      // Als er meer dan 500 ticks voorbij zijn sinds de laatste toggle
      if((new_ticks - last_ticks) > 500) {
          // Toggle de LED
          pinOut.toggle();
          // Ververs de last_ticks variabele
          last_ticks = new_ticks;
      }
   };

   // Omdat de EXTI interrupt al ingesteld is in de IDE hoeven we alleen maar een listener toe te voegen op ExternalInterrupt

   fd::stm32_hal::interrupt_handler.registerListener(fd::stm32_hal::interrupts::ExternalInterrupt, func );


   while (true) {
      // Omdat een interrupt in hardware wordt aangeroepen hoeven we in deze loop niks meer te doen
      fd::sleep(100);
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
import CarouselImage from "@/components/Carousel/CarouselImage";
import ImageCarousel from "@/components/Carousel/ImageCarousel";

export default {
   name: "4SPI",
   components: {
      CodeFragment,
      CarouselImage,
      ImageCarousel
   },
   title: "Fondant Instellen",
   mixins: [titleMixin]
}
</script>

<style scoped>

</style>