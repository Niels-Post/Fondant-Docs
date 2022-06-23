<template>
  <div>
     <h1>Fondant</h1>

     <p>
         Welkom bij de Fondant lesmodule. Het doel van Fondant is om de lezer een introductie te geven in het werken met
        microcontrollers, in het specifiek de STM32 processorserie. Aan het einde van de module hebben we kennisgemaakt met
        een aantal veelgebruikte digitale technieken en microcontrollerfuncties, en hoe deze in de praktijk toegepast worden.
     </p>

     <p>
        Om een zo duidelijk mogelijk beeld te geven van het hele proces bestaat Fondant uit 2 onderdelen. Het eerste onderdeel
        is een reader in websitevorm, waarop alle theorie te vinden is (deze lees je nu). Daarnaast heeft Fondant een
        lightweight C++-library voor STM32, waarmee de behandelde onderdelen van de STM32 processoren aangestuurd kunnen worden.
        Hiermee kan de lezer na het doornemen van de theorie direct mee aan de slag om deze toe te passen.
     </p>


     <h2 id="DeDocumentatie">De documentatie</h2>
     <p>
        De documentatie is zo opgebouwd dat de onderwerpen in de zijbalk het beste van boven naar beneden doorgenomen kunnen
        worden. Hierna volgt een korte omschrijving van de onderdelen die hierbij aan bod komen
     </p>

     <h5>Theorie</h5>
     <p>
        Dit onderdeel bespreekt een aantal veelgebruikte Embedded-technieken in het algemeen. Hierbij wordt er nog weinig
        ingegaan op de specifieke werking van de STM32. Veel van de informatie uit dit onderdeel is dus ook van toepassing
        op microcontrollers van andere fabrikanten.
     </p>

     <h5>Voorbereiding</h5>
     <p>
        Dit onderdeel helpt de lezer met het instellen van een ontwikkelomgeving voor het STM32 platform. Hierin staan ook
        de stappen om een nieuw project aan te maken en wat er nodig is om de Fondant library hier aan toe te voegen
     </p>

     <h5>Ontwikkelen</h5>
     <p>
        Een beeld in hoe de ontwikkelworkflow in de eerder opgezette werkomgeving is. Hierin wordt de structuur van de
        Fondant library uitgelegd, en worden tips gegeven voor het debuggen van een programma. Een aantal van de voorbeelden
        in de Fondant library zijn toegelicht, om context te geven voor bepaalde keuzes.
     </p>

     <h2 id="DeLibrary">De Library</h2>
     <p>
         De Fondant Library is bedoeld als uitgangspunt om met de geleerde theorie aan de slag te gaan. De library is gebouwd
        op de standaard STM32 Hardware Abstraction Layer, met als toevoeging dat de functies van de processor op een
        objectgeörienteerde wijze worden aangeroepen, en waarbij een aantal toevoegingen gedaan zijn om het debuggen
        van het programma transparanter en makkelijker te maken.
     </p>

     <p>
        De library is bedoeld voor gebruik in een IDE met slimme code assistentie. Door middel van code-completion in de IDE
        kunnen functies van de library makkelijk gevonden. Het commentaar van functies is bovendien gericht op een beginnende
        embedded-ontwikkelaar, en licht waar nodig risico's en gebruikswijzen van functies toe.
     </p>

     <h2 id="DeNaam">De naam "Fondant"</h2>
     <p>
        De fondant-library is expliciet niet bedoeld voor gebruik in productie-omgevingen en professionele projecten. Het doel ervan
        is om de werking van de microcontroller op een duidelijke manier weer te geven, zodat de programmeur niet alleen
        kan leren hoe de library werkt, maar ook wat voor aansturing de microcontroller nodig heeft.
     </p>

     <p>
        Hieruit is dan ook de naam Fondant ontstaan. Net zoals de fondant die een bakker op zijn taarten legt/smeert voegt
        de library vooral een uiterlijk aspect toe.  De library ziet er leuk uit, maar alle functies die erin opgenomen
        zijn zou je ook direct kunnen aanroepen via de HAL van STM32. Dit zou bovendien iets sneller zijn, aangezien er minder
        functie-aanroepen nodig zouden zijn.
     </p>


  </div>
</template>

<script>
import titleMixin from "@/components/Helpers/titleMixin";

export default {
  name: "WatIsFondant",
   title: "Wat is Fondant",
   mixins: [titleMixin]
}
</script>

<style scoped>

</style>