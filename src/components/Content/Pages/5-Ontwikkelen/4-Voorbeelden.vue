<template>
<div>
   <h1>Voorbeelden</h1>

   <p>
      In dit hoofdstuk vind je een aantal toegelichte voorbeelden van het gebruik van Fondant. Uitvoerbare versies van
      deze voorbeelden zijn te vinden in de voorbeeld-repository. Hier zijn ook nog een aantal andere voorbeelden te
      vinden, die de lezer kan uitproberen.
   </p>

   <p>
      Alle voorbeelden zijn geïmplementeerd voor STM32 bluepill, en zijn hier ook op getest.
   </p>

   <hr class="spacer">
   <h6><router-link to="/Ontwikkelen/Voorbeelden/HelloWorld">Hello World</router-link></h6>
   <p>
      Introductie. Laat zien hoe je de onboard LED op de bluepill periodiek kan laten knipperen.
   </p>

   <h6>
      <router-link to="/Ontwikkelen/Voorbeelden/PinInPinOut">Pin In + Pin Out</router-link>
   </h6>
   <p>
      Laat zien hoe een input-pin ingesteld moet worden, en hoe de waarde van een input-pin gelezen en gebruikt kan worden.
   </p>

   <h6>
      <router-link to="/Ontwikkelen/Voorbeelden/PinInPinOut">Pins doorgeven</router-link>
   </h6>
   <p>
      Je maakt als programmeur vaak functies om routines herhaalbaar te maken. Dit voorbeeld laat zien hoe je het beste
      pins door kan geven aan deze functies.
   </p>


   <h6>
      <router-link to="/Ontwikkelen/Voorbeelden/SPI">SPI</router-link>
   </h6>
   <p>
      Een simpel voorbeeld van het gebruik van een SPI-bus, en hoe je hier data over verstuurt.
   </p>

   <h6>
      <router-link to="/Ontwikkelen/Voorbeelden/SPIDMA">SPI met DMA</router-link>
   </h6>
   <p>
      Door DMA te gebruiken kan je datatransmissies een stuk sneller maken. Dit voorbeeld laat zien hoe je DMA toepast in
      Fondant, en laat het verschil in snelheid zien tussen een transmissie met DMA en een transmissie zonder DMA.
   </p>

   <h6>
      <router-link to="/Ontwikkelen/Voorbeelden/Interrupts">Interrupts</router-link>
   </h6>
   <p>
      Interrupts kunnen gebruikt worden om heel snel acties uit te voeren wanneer een bepaalde gebeurtenis optreedt.
      Dit voorbeeld laat zien hoe je interrupts kan gebruiken om te reageren op het voltageniveau van een pin.
   </p>


</div>
</template>

<script>
export default {
   name: "4-Voorbeelden"
}
</script>

<style scoped>

</style>