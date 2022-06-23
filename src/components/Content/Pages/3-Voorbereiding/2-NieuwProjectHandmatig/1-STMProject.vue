<template>
  <div>
    <h1>STM32 Project maken</h1>
    <hr>
    <p>
      In dit hoofdstuk gaan we aan de slag met het maken van een nieuw project. Hierbij gaan we alle stappen door die nodig
       zijn voor het configureren van de chip voor een simpel programma.
    </p>


     <hr class="spacer">
     <h2 id="NieuwProject">Nieuw Project aanmaken</h2>

     Allereerst maken we in de STM32CubeIDE een project aan. De IDE maakt een standaard-codestructuur aan die al gekoppeld
     is aan een specifieke STM32 Processor. Dit project bevat alle informatie die nodig is om de aansturingscode voor de
     processor te genereren.

     <ImageCarousel>
        <CarouselImage :src="require(`@/assets/HelloWorld/1-NewProject.png`)" alt="Nieuw STM32 Project" title="">
           Klik op nieuw->STM32 Project
        </CarouselImage>
        <CarouselImage :src="require(`@/assets/HelloWorld/2-Boardselector.png`)" alt="Nieuw STM32 Project" title="">
           Dit is de board selector. Hier kan je een processor/board selecteren wat je gebruikt voor het project.
           Als je het typenummer hebt is het het makkelijks om deze gewoon in de zoekbalk in te typen, en dan het
           juiste package te selecteren.
        </CarouselImage>
        <CarouselImage :src="require(`@/assets/HelloWorld/3-Bluepill.png`)" alt="Nieuw STM32 Project" title="">
           Zoek op het typenummer van de processor van de BluePill; STM32F103C8T6. Je kan nu rechtsonderin de juiste versie
           kiezen. In dit geval is dat de bovenste in de rij. Nadat je deze hebt geselecteerd kan je volgende klikken om het
           project aan te maken
        </CarouselImage>
        <CarouselImage :src="require(`@/assets/HelloWorld/4-NewProject.png`)" alt="Nieuw STM32 Project" title="">
           Kies een naam voor het project. De locatie waar het project is opgeslagen hebben we nog nodig, dus onthoud deze!
           <br>Vergeet niet om onder "Targeted Language" te kiezen voor C++
           <br>Klik Finish
        </CarouselImage>
     </ImageCarousel>

     <hr class="spacer">
     <h2 id="KlokBron">Klokbron aanpassen</h2>


<!--     <h3>Weergave</h3>-->

<!--     <ExtImage full-width :src="require(`@/assets/NieuwProject/5-Overview.png`)"></ExtImage>-->
<!--     <p>-->
<!--        Je ziet nu de bovenstaande weergave. In deze weergave kun je de startconfiguratie van je processor bepalen.-->
<!--        Deze startconfiguratie bevat heel veel parameters, bijvoorbeeld:-->

<!--     </p>-->

<!--     <ul>-->
<!--        <li>Pin-configuratie</li>-->
<!--        <li>Kloksnelheden en instellingen</li>-->
<!--        <li>Configuratie van processor-peripherals</li>-->
<!--        <li>Configuratie van extra softwarelibraries zoals FreeRTOS</li>-->
<!--     </ul>-->

<!--     <p>-->
<!--        Aan de linkerkant zie je de onderdelen te configureren zijn, en rechts zie je een schematische weergave van de pins,-->
<!--        en hoe deze geconfigureerd zijn. Zodra je instellingen links aanpast, zal je zien dat dit invloed heeft op hoe de-->
<!--        pins aangegeven staan.-->
<!--     </p>-->

     <p>
        Op de printplaat van de BluePill zit een crystal-oscillator die als kloksignaal voor de processor gebruikt kan worden.
        Om dit te gebruiken moeten we daarvoor wel eerst een paar instellingen aanpassen. Er zit namelijk niet op elk
        development board een crystal-oscillator, dus de processor zal standaard gebruik maken van een interne klok.
     </p>

     <div class="alert alert-warning">
        De STM32 processoren hebben meestal een high speed klok en een low speed klok. <br>
        De interne klokken heten HSI/LSI (High Speed Internal/Low Speed Internal). <br>

        Wanneer externe kristallen worden gebruikt heet dit HSE/LSE (High Speed External/Low Speed External)
     </div>

     <p>
        De reden dat we een apart kristal gebruiken voor de klok is omdat deze over het algemeen een stuk stabieler zijn
        dan de interne klok van de processor. Hierdoor kunnen hogere snelheden behaald worden zonder een systeem onbetrouwbaar
        te maken.
     </p>

     <ImageCarousel>
        <CarouselImage :src="require(`@/assets/HelloWorld/6-Clocks.png`)" alt="Klokweergave" title="">
           Klik in pin-configuratie op RCC. Je ziet deze weergave
        </CarouselImage>
        <CarouselImage :src="require(`@/assets/HelloWorld/7-ClocksSetup.png`)" alt="Klokweergave" title="">
           Dit is de configuratie die we willen. We geven hiermee aan dat voor zowel de low speed klok als de high speed klok
           externe kristal-oscillatoren gebruikt moeten worden

        </CarouselImage>
     </ImageCarousel>

     <hr class="spacer">
     <h2 id="DebugBron" class="mt-3">Debug bron aanpassen</h2>

     <p>
        Tijdens het ontwikkelen van software zal je van de debug-poort van de STM32 gebruik maken om code te uploaden,
        en om je code te debuggen. Deze poort maakt gebruik van 2 standaard-pins voor de verbinding. Omdat de poort niet
        standaard ingesteld staat in een nieuw project moeten we deze eerst instellen.
     </p>

      <ExtImage full-width :src="require('@/assets/HelloWorld/11-Debug.png')"></ExtImage>

      <p>
         Klik in de pin-configurator op SYS, en stel Debug in op "Serial Wire".
      </p>

     <hr class="spacer">




     <h4>Main Code</h4>

     <CodeFragment type="cpp">
        <pre>
#include &lt;fd/fondant_main.hpp&gt;
#include &lt;fd/fondant.hpp&gt;
#include &lt;fd/targets/stm32_hal/gpio.hpp&gt;

int fd_main() {
   fd::stm32_hal::pin_out internal_led(GPIOC, GPIO_PIN_13);

   while(true) {
      fd::sleep(1000);
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
import ExtImage from "@/components/Helpers/ExtImage";

export default {
  name: "STMProject",
  components: {
     CodeFragment,
     ImageCarousel,
     CarouselImage,
     ExtImage
  },
   title: "STM Project",
   mixins: [titleMixin]
}
</script>

<style scoped>

</style>