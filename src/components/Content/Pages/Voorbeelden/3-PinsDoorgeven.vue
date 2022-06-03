<template>
   <div>
      <h1>Pins doorgeven</h1>
      <hr>
      <p>
         Je hebt nu pins aan kunnen maken via fd::stm32_hal::pin_*. Om pins mee te kunnen geven aan functies, of aan klassen
         gebruiken we echter een andere pin_klasse. De reden hiervoor is dat een GPIO pin eigenlijk altijd grotendeels dezelfde
         functies heeft. Door een basisklasse te gebruiken blijft de code algemeen, en kan deze mogelijk ook op een ander
         platform gebruikt worden.
      </p>

      <div class="alert alert-info">Ditzelfde geldt ook voor andere modules, zoals SPI en I2C. Zoek dus bij het doorgeven
         van objecten altijd eerst naar een juiste baseklasse. Deze staat altijd direct in de namespace fd:: en eindigt
         op _base
      </div>

      <p>
         Om dit voorbeeld te gebruiken heb je alleen de bluepill, de STlink en een jumper wire nodig. Als je wil kan je
         ook nog een knop aansluiten, maar dit is niet verplicht.
      </p>



      <hr class="spacer">
      <h2 id="DeCode">De Code</h2>

      <CodeFragment type="cpp"><pre>
// Include voor fd_main omleiding
#include &lt;fd/fondant_main.hpp&gt;

// Include de GPIO module
#include &lt;fd/gpio.hpp&gt;

// Gebruik de pin_out_base en pin_in_base klassen om nauwe koppeling met een specifiek platform te vermijden
// Bij het wisselen van platform hoeft nu alleen de constructie van pins in fd_main() aangepast te worden
// Let erop dat objecten altijd by reference of by pointer worden meegegeven. By value werkt niet met inheritance
void neem_pin_over(fd::pin_out_base &amp;outputPin, fd::pin_in_base &amp;inputPin) {
   outputPin.write(inputPin.read());
}

int fd_main() {
   // LET OP: voordat een pin_out of pin_in werkt moet deze al ingesteld zijn op de microcontroller als pin_out (dus in de STM32 IDE)

   // Maak een pin_out aan voor PC13
   auto led_pin = fd::stm32_hal::pin_out(GPIOC, GPIO_PIN_13);

   // Maak een pin_in voor PA15
   auto in_pin = fd::stm32_hal::pin_in(GPIOA, GPIO_PIN_15);

   while (true) {
      // Lees de input pin en schrijf de waarde naar de interne LED
      neem_pin_over(led_pin, in_pin);
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

export default {
   name: "FondantInstellen",
   components: {
      CodeFragment,
   },
   title: "Fondant Instellen",
   mixins: [titleMixin]
}
</script>

<style scoped>

</style>