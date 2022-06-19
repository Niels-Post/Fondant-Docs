<template>
   <div>
      <h1>SPI</h1>
      <hr>
      <p>
         We gaan nu aan de slag met digitale communicatie. Als eerste bekijken we een voorbeeld met een SPI-bus.
         Deze communiceert niet echt met een peripheral, maar zet gewoon data op een bus. Om dit voorbeeld te controleren
         kan je het best een logic analyzer aansluiten op de pins van de SPI-bus.
      </p>

      <p>
         Voor dit voorbeeld heb je dus alleen de bluepill, de STlink en een logic analyser nodig.
      </p>

      <div class="alert alert-warning">
         De beschreven werkwijze voor SPI is grotendeels hetzelfde voor I2C en UART. Hierom gaan we in het Voorbeelden-
         hoofdstuk niet verder op deze andere communicatiemethoden in. In de repository van FondantLib kan je voorbeelden
         vinden voor I2C en UART.
      </div>

      <hr class="spacer">
      <h2>IDE Instellingen</h2>

      <ImageCarousel>
         <CarouselImage :src="require(`@/assets/Voorbeelden/SPIInstellen-1.png`)" alt="PinOut" title="">
            Selecteer de SPI-bus en stel deze in op Duplex Master
         </CarouselImage>
         <CarouselImage :src="require(`@/assets/Voorbeelden/SPIInstellen-2.png`)" alt="PinOut done" title="">
            De bijbehorende pins zullen nu automatisch goed ingesteld worden
         </CarouselImage>
      </ImageCarousel>


      <p>
         In de IDE moet een SPI-bus ingesteld worden. We maken voor dit voorbeeld gebruik van SPI1. Hierboven zie je de
         stappen die hiervoor nodig zijn.
      </p>

      <div class="alert alert-danger">
         Als je geen enkele SPI-bus instelt zal de code voor het gebruik van SPI niet gegenereerd
         worden. Hierdoor zullen de hardware SPI functies van Fondant ook niet werken, en zal je een compile error
         krijgen als je deze toch gebruikt.
      </div>

      <p>
         Hiernaast is het ook nodig om de Chip select pin voor SPI in te stellen. In dit voorbeeld gebruiken we PA4. Stel
         deze in als pin out.
      </p>




      <hr class="spacer">
      <h2 id="DeCode">De Code</h2>

      <p>
         De onderstaande code stuurt steeds een transmissie over een SPI bus van 4 bytes. De eerste byte wordt elke keer
         opgehoogd met 1. Om dit te zien kan je een Logic analyser aansluiten op pins PA4-7 en een SPI-decoder instellen
         in PulseView.
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

   // Maak een SPI-busobject aan
   // Hierbij houden we DMA uit, en stellen we de timeout in op 1000 ms
   auto bus = fd::stm32_hal::spi(&hspi1, false, 1000, cs_pin);


   // Stel 4 bytes aan data op
   uint8_t data[] = {0, 5, 0, 10};

   while (true) {
      // Verzend de 4 bytes en wacht tot deze voltooid is
      bus.transmit_wait(data, 4);

      // Voor de vorm veranderen we 1 byte
      data[0]++;
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