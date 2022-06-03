<template>
   <div>
      <h1>Pin In + Pin Out</h1>
      <hr>
      <p>
         We kunnen nu een GPIO pin aansturen. De volgende stap is om ook een signaal te ontvangen via een GPIO pin.
      </p>

      <p>
         Om dit voorbeeld te gebruiken heb je alleen de bluepill, de STlink en een jumper wire nodig. Als je wil kan je
         ook nog een knop aansluiten, maar dit is niet verplicht.
      </p>

      <hr class="spacer">
      <h2 id="PinInstellen">Pin instellen</h2>

      <p class="mt-3">
         In dit voorbeeld moeten we iets meer met de pin instellen dan alleen de pin modus. Zoals je hebt gelezen in
         <router-link to="/DigitaleLogica#InputPin">Input Pins</router-link> is het vaak nodig om een pull-up of pull-down
         weerstand toe te voegen voordat een input pin goed kan werken. Hieronder zie je de stappen om dit in te stellen
         in STM32 IDE.
      </p>

      <ImageCarousel>
         <CarouselImage :src="require(`@/assets/Voorbeelden/InputInstellen-1.png`)" alt="InputInstellen1" title="">
            De eerste stap is om de pin in GPIO_Input te zetten. We gebruiken in dit voorbeeld pin PA15
         </CarouselImage>
         <CarouselImage :src="require(`@/assets/Voorbeelden/InputInstellen-2.png`)" alt="InputInstellen2" title="">
            Klik nu in het linkermenu op "System Core"->"GPIO". Hier kunnen we meer instellingen voor alle pins bepalen.
            <br>
            Je ziet hier als het goed is PA15 nu al bij staan
         </CarouselImage>
         <CarouselImage :src="require(`@/assets/Voorbeelden/InputInstellen-3.png`)" alt="InputInstellen3" title="">
            Als je klikt op PA15, zal je zien dat we 3 opties kunnen aanpassen; Modus, Pull-up/pull-downs en het label.
         </CarouselImage>
         <CarouselImage :src="require(`@/assets/Voorbeelden/InputInstellen-4.png`)" alt="InputInstellen4" title="">
            We stellen een pull-up in, en bedenken een mooie naam voor de pin.
            <br>
            Vergeet niet om achteraf op opslaan te drukken om het project te updaten.
         </CarouselImage>
      </ImageCarousel>


      <hr class="spacer">
      <h2 id="DeCode">De Code</h2>

      <CodeFragment type="cpp"><pre>
// Include voor fd_main omleiding
#include &lt;fd/fondant_main.hpp&gt;

// Include de GPIO module
#include &lt;fd/gpio.hpp&gt;

int fd_main() {
   // LET OP: voordat een pin_out of pin_in werkt moet deze al ingesteld zijn op de microcontroller als pin_out (dus in de STM32 IDE)

   // Maak een pin_out aan voor PC13
   auto led_pin = fd::stm32_hal::pin_out(GPIOC, GPIO_PIN_13);

   // Maak een pin_in voor PA15
   auto in_pin = fd::stm32_hal::pin_in(GPIOA, GPIO_PIN_15);

   while (true) {
      // Lees de input pin en schrijf de waarde naar de interne LED
      led_pin.write(in_pin.read());
   }

   return 0;
}



     </pre>
      </CodeFragment>

      <hr class="spacer">

      <h2 id="Omgekeerd">Omgekeerd?</h2>

      <p>
         Als je de code uitvoert zal je zien dat de LED uitblijft. Pas als je PA15 verbindt met GND zal deze aangaan.
         Je zou echter verwachten dat de LED juist standaard aangaat, en uit gaat bij het verbinden met GND. Hoe zit dit?
      </p>

      <p>
         <ExtImage full-width :src="require('@/assets/BluePillPinout.png')" source="https://i.stack.imgur.com/lIPdd.png"></ExtImage>
      </p>

      <p>
         In de pinout van de bluepill zie je een aantal pins staan met een waarschuwingsicoontje. Hier is <span class="emph">PC13</span> er
         één van. De reden hiervoor is omdat deze pins een extreem laag maximaal ampèrage kunnen leveren als output. Hierdoor zijn
         deze als output eigenlijk alleen als signaalpin te gebruiken, en niet om de LED aan te sturen.
      </p>

      <p>
         Om hier omheen te werken is de LED andersom aangesloten. De pin kan namelijk wel een beperkt ampèrage ontvangen (sinken).
         De LED is aan de andere kant aangesloten op 3V3. Hierdoor zal de LED dus juist aangaan wanneer PC13 op laag gezet wordt,
         want zolang de pin hoog is is er geen verschil tussen de poten van de LED.
      </p>
   </div>
</template>

<script>
import titleMixin from "@/components/Helpers/titleMixin";
import CodeFragment from "@/components/Helpers/CodeFragment";
import ImageCarousel from "@/components/Carousel/ImageCarousel";
import CarouselImage from "@/components/Carousel/CarouselImage";
import ExtImage from "@/components/Helpers/ExtImage";

export default {
   name: "FondantInstellen",
   components: {
      CodeFragment,
      ImageCarousel,
      CarouselImage,
      ExtImage
   },
   title: "Fondant Instellen",
   mixins: [titleMixin]
}
</script>

<style scoped>

</style>