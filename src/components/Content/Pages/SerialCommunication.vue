<template>
   <div class="col-8">
      <h1>Seriële communicatie</h1>
      <hr>
      <p>
         Een enkel hoog/laag signaal is prima als je alleen een enkel onderdeel aan of uit wil zetten, zoals een LED,
         maar zodra je meer data wil overdragen
         zal dit al gauw niet meer genoeg zijn. Hiervoor wordt meestal seriële communicatie gebruikt. Hierbij wordt
         de data opgedeeld in een aantal
         bits, die vervolgens één voor één op de pin/draad worden verstuurd.
      </p>

      <p>
         Voor seriële communicatie zijn een aantal standaarden, die aangeven op welke manier deze data verstuurd word.
         In dit hoofdstuk nemen we de meest gebruikte standaarden door, en leggen we uit wat de verschillen zijn.
      </p>

      <h4>Uitdagingen</h4>

      <p>
         Tijdens het versturen van data moet je rekening houden met een aantal aanpassingen. Door gewoon signalen op
         een draad
         te zetten zul je namelijk tegen een aantal problemen aanlopen.
      </p>


      <table class="table table-striped">
         <tbody>
         <tr>
            <th scope="row">Synchronisatie</th>
            <td>
               Als wij per seconde 4 bits versturen, maar de chip aan de andere kant leest 8 keer per seconde een bitje
               uit, dan zal de data aan de andere kant onbruikbaar zijn.
            </td>
         </tr>
         <tr>
            <th scope="row">Integriteit</th>
            <td>
               Hoe weten we dat de data correct is overgekomen? Als er een signaalstoring is, of één chip valt tijdens
               de transmissie uit, moeten we kunnen bevestigen dat de data goed is overgekomen.
            </td>
         </tr>
         <tr>
            <th scope="row">Apparaatscheiding</th>
            <td>
               Vaak wil je meerdere chips aansluiten op je microcontroller. Hoe kan je dit snel doen, zonder dat je voor
               elke chip een aantal extra pins op je microcontroller nodig hebt?
            </td>
         </tr>
         <tr>
            <th scope="row">Initiatief</th>
            <td>
               Als twee chips tegelijkertijd op dezelfde verbinding aan het "praten" zijn, zal er niks van de data te
               maken zijn, en mogelijk ontstaat er zelfs kortsluiting. Hoe zorg je dat dit niet gebeurt.
            </td>
         </tr>
         </tbody>
      </table>

      <h4>Parameters</h4>
      In dit hoofdstuk zal je zien dat elke standaard

      <hr class="spacer">
      <div>
         <h2>UART</h2>


         <h4>Eigenschappen</h4>
         <p>
            <DefRef n="UART"/>
            staat voor Universal Asynchronous Receiver-Transmitter. Een UART verbinding is vaak te herkennen
            aan de pinlabels <span class="emph">TX</span> en <span class="emph">RX</span>. Wanneer je een
            UART-verbinding maakt
            tussen twee chips, verbind je altijd de TX van het ene apparaat met de RX van de ander, en vice-versa.
         </p>

         <p>
            Een apparaat gebruikt bij UART zijn eigen <span class="emph">TX</span> om data te versturen. Deze data komt
            dus bij de andere kant
            aan op <span class="emph">RX</span>. Dit geldt ook de andere kant op. Als
            een apparaat alleen data hoeft te ontvangen, of alleen data hoeft te versturen, kan het zijn dat <span
               class="emph">TX</span>
            of <span class="emph">RX</span> ontbreken.
         </p>

         <p>
            UART werkt alleen voor 1 op 1 communicatie. Dus als je meerdere chips op één microcontroller wil aansluiten,
            zul je elk apparaat op een aparte <span class="emph">TX</span> en <span class="emph">RX</span> moeten
            aansluiten
            op de microcontroller.
         </p>

         <h4>Werking</h4>

         <WaveDromUART></WaveDromUART>

         <WaveDrom>

         </WaveDrom>

         <p>
            Hierboven zie je een voorbeeld van een UART-transmissie. Hierbij worden er 5 bits aan data verstuurd.
         </p>


         <h4>Parameters</h4>

         <h4>Uitdagingen</h4>

         <table class="table table-striped">
            <tbody>
            <tr>
               <th scope="row">Synchronisatie</th>
               <td>
                  Bij UART moeten beiden apparaten ingesteld staan op dezelfde snelheid. Zij hebben hierover vooraf
                  geen communicatie, dus de ontwikkelaar moet dit instellen. Deze snelheidsinstelling heet meestal
                  <DefRef n="baudrate"/>
                  en er zijn een aantal specifieke veel gebruikte waarden hiervoor.
               </td>
            </tr>
            <tr>
               <th scope="row">Integriteit</th>
               <td>

               </td>
            </tr>
            <tr>
               <th scope="row">Apparaatscheiding</th>
               <td>
                  UART heeft geen specifieke oplossing om meerdere apparaten in te sturen. Hier zul je meerdere
                  UART-verbindingen
                  voor moeten aanleggen.
               </td>
            </tr>
            <tr>
               <th scope="row">Initiatief</th>
               <td>
                  Bij UART is het verzenden en ontvangen van data gescheiden van elkaar. Omdat beiden apparaten een
                  eigen
                  verbinding hebben om te verzenden (de TX-verbinding) is er geen conflict. Midden in een transmissie
                  van
                  apparaat 1 kan apparaat 2 een transmissie starten zonder de eerste te storen.
               </td>
            </tr>
            </tbody>
         </table>


      </div>


   </div>
</template>

<script>
import WaveDrom from "@/components/Helpers/WaveDrom";
import DefRef from "@/components/Helpers/DefRef";
import WaveDromUART from "@/components/Helpers/WaveDromUART";

export default {
   name: "SerialCommunication",
   components: {
      WaveDrom,
      DefRef,
      WaveDromUART
   }
}
</script>

<style scoped>

</style>