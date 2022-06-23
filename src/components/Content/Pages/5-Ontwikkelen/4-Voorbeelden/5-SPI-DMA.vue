<template>
   <div>
      <h1>SPI met DMA</h1>
      <hr>
      <p>
         We hebben in het vorige voorbeeld een paar bytes verstuurd via SPI. Vaak zal je in toepassingen niet een paar bytes
         versturen, maar honderden of zelfs duizenden bytes.
      </p>

      <p>
         Om te zorgen  dat je code niet te lang onderbroken wordt tijdens het versturen van deze bytes kan je gebruik maken van
         DMA. Hierbij geef je alleen aan waar de data staat die je wil versturen, en waar eventuele terugkomende data
         naartoe geschreven kan worden. De DMA-peripheral van de microcontroller zal dit dan doen.
      </p>

      <p>
         Voor dit voorbeeld heb je dus alleen de bluepill, de STlink en een logic analyser nodig.
      </p>

      <div class="alert alert-warning">
         De beschreven werkwijze voor SPI is grotendeels hetzelfde voor I2C en UART. Hierom gaan we in het Voorbeelden-
         hoofdstuk niet verder op deze andere communicatiemethoden in. In de repository van FondantLib kan je
         voorbeelden
         vinden voor I2C en UART.
      </div>

      <hr class="spacer">
      <h2>IDE Instellingen</h2>

      <ImageCarousel>
         <CarouselImage :src="require(`@/assets/Voorbeelden/SPIInstellenDMA-1.png`)" alt="PinOut" title="">
            Klik onder SPI1 op DMA Settings, en druk op Add om een nieuw DMA-kanaal toe te voegen.
         </CarouselImage>
         <CarouselImage :src="require(`@/assets/Voorbeelden/SPIInstellenDMA-2.png`)" alt="PinOut done" title="">
            Je kan nu voor zowel RX (ontvangen) als TX (versturen) kiezen of je een kanaal wil toevoegen.
         </CarouselImage>
      </ImageCarousel>


      <p>
         In de IDE moet je DMA-kanalen toevoegen aan de SPIbus om dit te laten werken. Hierboven zie je de stappen daarvoor.
      </p>


      <hr class="spacer">
      <h2 id="DeCode">De Code</h2>

      <p>
         Als DMA is ingesteld in de IDE, dan is het enige verschil met de niet-DMA code voor SPI dat je de dma-vlag op true zet.
         Als je de onderstaande code uitvoert, en het resultaat bekijkt in Pulseview kan je deze vlag op false zetten om
         te zien wat het verschil is in snelheid bij het gebruik van DMA.
      </p>

      <CodeFragment type="cpp"><pre>
// Include voor fd_main omleiding
#include &lt;fd/fondant_main.hpp&gt;

// Include de GPIO module
#include &lt;fd/gpio.hpp&gt;

// Include de SPI module. Deze zorgt automatisch dat platformspecifieke onderdelen geladen worden
#include &lt;fd/spi.hpp&gt;

// Verwijzing naar de automatisch aangemaakte SPI-handle (door CubeIDE)
extern SPI_HandleTypeDef hspi1;

int fd_main() {
   // LET OP: voordat een pin_out of pin_in werkt moet deze al ingesteld zijn op de microcontroller als pin_out (dus in de STM32 IDE)
   auto cs_pin = fd::stm32_hal::pin_out{GPIOA, GPIO_PIN_4};


   // Maak een SPIbus-object aan
   auto bus = fd::stm32_hal::spi(&hspi1, true, 1000, cs_pin);

   uint8_t data[50] = {0};

   uint8_t j = 0;


   while (true) {
      // Verstuur de data
      bus.transmit(data,50);

      // Pas de data aan. We doen dit 5 keer om wat extra tijd te overbruggen om het verschil in snelheid duidelijker te maken
      // In een normale toepassing zou je hier bijvoorbeeld alle schermobjecten renderen voor je deze naar het scherm stuurt
      for(uint8_t i = 0; i &lt; 5; i++) {
          for (auto &d: data) {
              d += j;
              j++;
          }
      }

      // Wacht totdat de SPI-peripheral klaar is zodat we niet meerdere transacties tegelijk proberen te doen
      bus.wait();
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