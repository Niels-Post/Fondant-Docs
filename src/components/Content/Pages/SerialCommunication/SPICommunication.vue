<template>
   <div>
      <h1>SPI</h1>
      <hr>
      <p>
         <DefRef n="SPI"/>
         is een communicatiewijze waarbij één controller vaak meerdere peripherals aanstuurt.
         De SPI interface is te herkennen aan de pins
         <DefRef n="CS" pin/>
         (ook wel
         <DefRef n="SS" pin/>
         ),
         <DefRef n="SCK" pin/>
         ,
         <DefRef n="MISO" pin/>
         en
         <DefRef n="MOSI" pin/>
         .
         De laatste twee heten soms ook
         <DefRef n="CIPO" pin/>
         en
         <DefRef n="COPI" pin/>
         .
      </p>

      <ExtImage src="https://upload.wikimedia.org/wikipedia/commons/f/fc/SPI_three_slaves.svg"
                source="https://upload.wikimedia.org/wikipedia/commons/f/fc/SPI_three_slaves.svg"/>

      <p>
         Een controller gebruikt
         <DefRef n="MISO" pin/>
         om data te ontvangen van peripherals, en
         <DefRef n="MOSI" pin/>
         om data te versturen.
         <DefRef n="SCK" pin/>
         zorgt voor de synchronisatie van de signalen. Hierdoor hoeft de klok van de controller niet precies gelijk
         te tikken met die van de peripherals. Hierdoor is SPI een
         <DefRef n="synchrone interface"/>
      </p>

      <p>
         Bij SPI is het mogelijk om een aantal instellingen te bepalen voor
         <DefRef n="SCK" pin/>
         . Hierdoor
         kan de polariteit van het signaal wisselen, of wordt de data op een ander moment uitgelezen. Bij
         <DefRef n="SCK" pin/>
         hebben we het daarom over actief en inactief, in plaats van hoog en laag.
         Over de betekenis hiervan hebben we het in het stuk over Parameters.
      </p>

      <p>
         Zoals je in de bovenstaande afbeelding ziet zijn de beiden data-lijnen
         echter op meerdere peripherals aangesloten. Om te zorgen dat maar één peripheral data ontvangt en
         terugverstuurt
         gebruikt de controller de
         <DefRef n="SS" pin/>
         -lijnen. Deze zijn wel per peripheral apart
         aangesloten.
         De controller trekt de
         <DefRef n="SS" pin/>
         van de peripheral waarmee hij wil praten naar
         laag.
         Die van andere peripherals laat hij op hoog staan. Deze weten dan dat de transmissie niet voor hen bedoeld is.
      </p>


      <hr class="spacer">

      <h2>Werking</h2>

      <p>
         Voor een SPI transmissie is
         <DefRef n="SCK" pin/>
         actief, en
         <DefRef n="CS" pin/>
         hoog.
         <DefRef n="MISO" pin/>
         en
         <DefRef n="MOSI" pin/>
         hoeven geen specifieke waarde te hebben. Elke SPI-transmissie start wanneer de controller
         <DefRef n="CS" pin/>
         naar laag trekt. De Peripheral weet nu dat er een transmissie zal starten.
      </p>

      <p>
         De controller begint nu met het versturen van data. De controller bepaalt de lengte van de transmissie.
         Zolang deze de
         <DefRef n="CS"/>
         van de peripheral actief houdt kan hij data blijven versturen.
      </p>

      <p>
         De controller plaatst de eerste bit van de data op
         <DefRef n="MOSI" pin/>,
         en zet <DefRef n="SCK" pin/> naar actief en inactief
      </p>

      <p>
         Ondertussen heeft de peripheral ook zijn data op <DefRef n="MISO" pin/> geplaatst. Deze leest de controller
         ook uit.
      </p>

      <p>
         Wanneer de data precies gelezen en geplaatst zal worden is afhankelijk van de configuratieparameters.
         Zie voor meer informatie <DefRef n="CPOL"/> en <DefRef n="CPHA"/>
      </p>

      <p>
         Het bovenstaande scenario (vanaf "De controller begint nu met het versturen van data") herhaalt zich voor elke
         bit
         in de data. Zodra alle data verstuurd is, brengt de controller het
         <DefRef n="CS" pin/>
         signaal weer naar hoog.
      </p>

      <hr class="spacer">

      <h2>Parameters</h2>

      <p>
         Bij SPI zijn er een aantal parameters mogelijk. Voor elke gangbare combinatie van parameters is er een getal
         bepaald
         om deze aan te duiden. Dit getal heet de SPI mode. Vaak kun je in microcontrollers in één keer de SPI
         parameters
         instellen door dit getal ergens in te voeren.
      </p>

      <div class="table-responsive">
         <table class="table w-auto table-sm table-bordered border-dark table-striped spimode-table">
            <thead>
            <tr>
               <th></th>
               <th>Clock Polarity</th>
               <th>Clock Phase</th>
               <th>Clock Edge</th>
            </tr>
            <tr>
               <th>SPI Mode</th>
               <th>(CPOL/CKP)</th>
               <th>(CPHA)</th>
               <th>(CKE/NCPHA)</th>
            </tr>
            </thead>
            <tbody>
            <tr>
               <th scope="row">0</th>
               <td>0</td>
               <td>0</td>
               <td>1</td>
            </tr>
            <tr>
               <th scope="row">1</th>
               <td>0</td>
               <td>1</td>
               <td>0</td>
            </tr>
            <tr>
               <th scope="row">2</th>
               <td>1</td>
               <td>0</td>
               <td>1</td>
            </tr>
            <tr>
               <th scope="row">3</th>
               <td>1</td>
               <td>1</td>
               <td>0</td>
            </tr>
            </tbody>
         </table>
      </div>

      <h4>Clock Polarity</h4>
      <p>
         De polariteit bepaalt of de klok actief laag, of actief hoog is.
      </p>
      <p>
         Wanneer CPOL=0, dan is
         <DefRef n="SCK" pin/>
         laag wanneer
         inactief. Bij het verzenden van een bit zet de controller
         <DefRef n="SCK" pin/>
         op hoog en dan op laag.
         De leading edge is hierbij een
         <DefRef n="raising edge"/>
         , en de trailing edge is een
         <DefRef n="falling edge"/>
         .
      </p>

      <p>
         Wanneer CPOL=1, dan is
         <DefRef n="SCK" pin/>
         hoog wanneer
         inactief. Bij het verzenden van een bit zet de controller
         <DefRef n="SCK" pin/>
         op laag en dan op hoog.
         De leading edge is hierbij een
         <DefRef n="falling edge"/>
         , en de trailing edge is een
         <DefRef n="raising edge"/>
         .
      </p>

      <h4>Clock Phase / Clock Edge</h4>
      <p>
         Deze 2 parameters zijn de inverse van elkaar. Afhankelijk van de documentatie die je leest zal één van beiden
         gebruikt worden. Als <DefRef n="CPHA"/> dus 1 is, is <DefRef n="CKE"/> altijd 0, en andersom. In dit stuk bespreken
         we alleen <DefRef n="CPHA"/>
      </p>

      <p>
         <DefRef n="CPHA"/> bepaalt of data gelezen word op de leading edge van een signaal of op een trailing edge. beiden apparaten
         plaatsen de data dan op de andere edge. Als data gelezen wordt op de leading edge, dan plaatsen beiden
         apparaten de data op de trailing edge en andersom.
      </p>

      <p>
         Wanner CPHA=0, dan wordt de data gelezen op de leading edge, en geplaatst op de trailing edge. Omdat er geen
         trailing edge is voor de eerste leading edge, moet de eerste bit geplaatst worden door beiden apparaten wanneer
         de CS naar laag gebracht wordt.
      </p>

      <p>
         Wanner CPHA=1, dan wordt de data gelezen op de trailing edge, en geplaatst op de leading edge.
      </p>

      <hr class="spacer">
      <h2>Try it out!</h2>

      <p>
         In de onderstaande configurator kan je zien welk effect het aanpassen van de SPI modus heeft op het signaal bij
         het versturen van 1 byte.
         In het kloksignaal zie je pijltjes, deze wijzen het moment aan waarop de data door beiden chips gelezen zal worden.
         Hier zal je ook zien dat bij CPHA=1, de data al geplaatst wordt op de lijn wanneer CS naar laag gaat.

      </p>

      <WaveDromSPI></WaveDromSPI>

      <hr class="spacer">

      <h2>Uitdagingen</h2>
      <table class="table table-striped">
         <tbody>
         <tr>
            <th scope="row">Synchronisatie</th>
            <td>
               Bij SPI wordt de snelheid uitsluitend door de controller bepaald, door middel van het <DefRef n="SCK" pin/>-signaal.
               De enige voorwaarde is dat de peripheral zelf een kloksnelheid heeft, die snel genoeg is om de data
               te verwerken. Vaak is de maximum SPI-snelheid van een onderdeel aangegeven in de datasheet.
            </td>
         </tr>
         <tr>
            <th scope="row">Integriteit</th>
            <td>
               SPI heeft geen manier ingebouwd om te controleren of data goed overgekomen is. Soms hebben onderdelen wel
               iets ingebouwd in het communicatieprotocol om dit te bevestigen.
            </td>
         </tr>
         <tr>
            <th scope="row">Apparaatscheiding</th>
            <td>
               Bij SPI is het makkelijk om meerdere apparaten op dezelfde bus aan te sluiten. De <DefRef n="SCK" pin/>,
               <DefRef n="MISO" pin/> en <DefRef n="MOSI" pin/> kunnen allemaal doorgelust worden naar andere peripherals.
               Voor elke peripheral moet er een eigen verbinding komen naar <DefRef n="CS" pin/>. Hiermee kan de controller
               aangeven met welke peripheral hij wil communiceren.
            </td>
         </tr>
         <tr>
            <th scope="row">Initiatief</th>
            <td>
               Het initiatief van transmissie ligt bij SPI altijd bij de controller. De peripherals kunnen niet zelf een
               transmissie starten, en kunnen alleen data terugsturen tijdens een transmissie van de controller.
            </td>
         </tr>
         </tbody>
      </table>

   </div>
</template>

<script>
import titleMixin from "@/components/Helpers/titleMixin";
import DefRef from "@/components/Helpers/DefRef";
import ExtImage from "@/components/Helpers/ExtImage";
import WaveDromSPI from "@/components/Helpers/WaveDromSPI";

export default {
   name: "SPICommunication",
   title: "SPI",
   components: {
      DefRef,
      ExtImage,
      WaveDromSPI
   },
   mixins: [titleMixin]
}
</script>

<style scoped>
.spimode-table tr > * {
   text-align: center;
}

</style>