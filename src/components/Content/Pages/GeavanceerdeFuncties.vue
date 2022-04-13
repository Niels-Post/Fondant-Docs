<template>
   <div>
      <h1>Geavanceerde functies</h1>
      <hr>

      <p>
         We hebben inmiddels een paar functies besproken die mogelijk aanwezig zijn in een microcontroller. Denk aan
         <DefRef n="GPIO"/>
         en
         <DefRef n="SPI"/>
         . Er zijn vaak nog veel meer functies waar je in je software gebruik
         van kan maken. Dit zijn er veel te veel om allemaal in deze module te bespreken, maar in dit hoofdstuk nemen
         we een paar belangrijke functies door.
      </p>

      <div class="alert alert-warning">
         Mogelijk hebben een aantal van deze functies andere namen bij andere productlijnen/fabrikanten.
      </div>


      <hr class="spacer">

      <h2 id="DMA">DMA </h2>

      <h3>Zonder DMA</h3>
      <p>
         Bij het programmeren van microcontrollers ben je vaak bezig met het kopiëren/overzetten van gegevens van plek 1
         naar plek 2. Je schrijft bijvoorbeeld informatie over de pixels van een scherm naar een SPI-module, om deze
         op het scherm zichtbaar te maken. Deze verwerking zal er ongeveer als volgt uit zien.
      </p>

      <div class="col-12">
         <object :data="require('@/assets/GeavanceerdeFuncties/FlowChartSPINoDMA.svg')" class="img-fluid"
                 alt="SPI zonder DMA"></object>
      </div>

      <p>
         Als de data een paar bytes groot is, is dit niet zo'n probleem, maar in het voorbeeld van pixels voor een
         scherm
         zal de data al gauw enkele duizenden bytes bevatten. Het probleem hiermee is dat de processor voor elke byte
         handelingen moet verrichten, en deze dus geen andere handelingen kan verrichten tijdens de verwerking van de
         schermdata, zonder de transmissie te onderbreken.
      </p>

      <h3>Met DMA</h3>
      <p>
         Om hier slim mee om te gaan kan je de DMA-module van de processor gebruiken.
         <DefRef n="DMA"/>
         staat voor Direct
         Memory Access. Het doel van deze module is om lees- en schrijfbewerkingen van het geheugen te kunnen uitvoeren
         zonder dat de uitvoering van het programma op de processor onderbroken wordt.
      </p>

      <p>
         Om DMA te gebruiken stel je de module in op een bron en bestemming. Bij het voorbeeld van het scherm zou je
         de bron instellen op een adres in het geheugen van je programma, en de bestemming op de SPI-module van de
         processor.
         Je geeft hierbij ook aan hoe lang de data is. DMA zal nu de databytes één voor één naar de SPI-peripheral
         schrijven,
         tot de aangegeven lengte is bereikt. Hierna geeft DMA een signaal af dat de transmissie voltooid is. Terwijl
         de transmissie bezig is kan je in je programma andere handelingen verrichten. De flowchart hiervan zal
         er ongeveer zo uitzien.
      </p>

      <div class="col-12">
         <object :data="require('@/assets/GeavanceerdeFuncties/FlowChartSPIDMA.svg')" class="img-fluid"
                 alt="SPI met DMA"></object>
      </div>

      <p>
         In het bovenstaande diagram worden alle handelingen onder de stippellijn automatisch uitgevoerd door DMA.
         Tijdens
         de transmissie is de processor vrij om andere berekeningen uit te voeren. Omdat de SPI transactie automatisch
         wordt
         afgerond aan het einde van de data, hoeft de code eigenlijk niet eens te controleren of de transactie afgelopen
         is.
         (Dit is wel aan te raden om te zien of de transactie succesvol was).
      </p>

      <hr class="spacer">

      <h2 id="Timers">Timers</h2>
      <p>
         Een <DefRef n="timer"/> kan je gebruiken om een groot aantal tijdgerelateerde taken uit te voeren. Timers zijn
         hele veelzijdige onderdelen, en hebben erg veel configuratie-opties. Een aantal hiervan leggen we uit, maar er zijn
         er veel meer mogelijk.
      </p>

      <p>
         Een Timer heeft een ingebouwd counter-register. Hierin wordt een waarde bijgehouden, die door de timer periodiek
         kan worden opgehoogd/verlaagd. Hoe lang deze periode is, is afhankelijk van de instellingen van de Timer. Op
         basis van de waarde van dit register kunnen er handelingen door de timer uitgevoerd worden.
      </p>

      <h3>PWM-signaal</h3>
      <p>
         Een Timer kan je gebruiken om een PWM-signaal te genereren. Je stelt dan een waarde in, waarop de timer moet
         resetten. Je stelt een waarde in waar boven/onder de timer een output-pin op hoog moet zetten.
      </p>

      <p>
         Voorbeeld van een mogelijke instelling:
         De timer verhoogt de counter elke milliseconde. Op een waarde van 1000 wordt deze teruggezet naar 0. Je stelt
         in dat de timer een pin A2 naar hoog zet wanneer de counter-waarde boven de 400 is.
      </p>

      <p>
         Als je pin A2 nu met een oscilloscoop uitmeet, zal je zien dat deze steeds 400 ms op laag staat, en vervolgens
         600 ms op hoog. Door de reset-waarde(1000) en de meetwaarde(400) in te stellen kan je de eigenschappen van het
         PWM-signaal aanpassen. Dit kan bijvoorbeeld nuttig zijn als je een LED-lampje wil dimmen, of als je een motortje
         wil aansturen.
      </p>

<!--      <h3>Meting van een tijd</h3>-->
<!--      <p>-->

<!--      </p>-->

      <hr class="spacer">

      <h2 id="Watchdogs">Watchdogs</h2>
      <p>
         Gerelateerd aan de timers zijn de Watchdogs. Dit zijn onderdelen die je helpen om te detecteren wanneer je software
         is vastgelopen. In STM32 processoren vind je meestal 2 watchdogs; De IWDG (Independent WatchDog) en de WWDG (Window
         Watch Dog). Zij kunnen de processor opnieuw opstarten op het moment dat er een softwarefout wordt gedetecteerd.
      </p>

      <h3>IWDG</h3>
      <p>
         De Independent Watchdog houdt, net zoals een timer een tijd bij. Als je de IWDG activeert, moet je deze in je
         programma periodiek resetten. Als je dit te lang niet doet, zal de IWDG aannemen dat je programma is vastgelopen
         en de processor opnieuw opstarten.
      </p>

      <h4>WWDG</h4>
      <p>
         De Window Watchdog werkt ongeveer hetzelfde als de IWDG, met als enige verschil dat deze een extra conditie
         controleert. Er is bij gebruik van de WWDG niet alleen een maximumtijd waarin je deze mag resetten, maar ook
         een minimumtijd. Als je programma de WWDG te snel reset zal de processor dus ook herstarten. Dit is handig
         voor applicaties die altijd in een bepaald tijdframe moeten reageren, maar is in het algemeen niet nodig.
      </p>

      <hr class="spacer">

      <h2 id="Debugging">Debugging</h2>
      <p>
          Tijdens het programmeren van een microcontroller zal je meestal niet direct een perfect programma schrijven.
         Misschien klopt de data die je ergens verstuurt niet helemaal, of blijft je programma ergens hangen. Bij
         microcontrollers kan het dan heel lastig zijn om te vinden waar het probleem zit.
      </p>

      <p>
         Om te kunnen zien wat er precies gebeurt tijdens het uitvoeren van je programma kan je de debugger gebruiken.
         Dit is vaak een aparte poort/verbinding waarmee je de microcontroller aan een USB-poort van je computer kan
         aansluiten.
      </p>

      <p>
         Na het aansluiten kan je de microcontroller opdracht geven om het programma uit te voeren. Hierbij kan je op je
         computer aangeven dat de uitvoering van het programma moet pauzeren op specifieke locaties in je code. Deze punten
         heten breakpoints. Wanneer het programma gepauzeerd is op een plek krijg je dit te zien op je computer, en kan
         je de staat van variabelen in je programma zien, maar kan je ook bijvoorbeeld de inhoud van een geheugenlocatie
         opvragen, en nog veel meer! Hierdoor kan je veel sneller zien waar een fout in je programma zit, en dit oplossen.
      </p>

      <div class="alert alert-secondary">
         De debugger is vaak ook hoe je de software op je microcontroller zal uploaden. Dit heet ook wel <DefRef n="flashen"/>.
      </div>
   </div>
</template>

<script>

import DefRef from "@/components/Helpers/DefRef";
import titleMixin from "@/components/Helpers/titleMixin";

export default {
   name: "GeavanceerdeFuncties",
   components: {
      DefRef
   },
   title: "Geavanceerde Functies",
   mixins: [titleMixin]
}
</script>

<style scoped>

</style>