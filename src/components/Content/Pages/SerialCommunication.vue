<template>
   <div>
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
      <p>
         In dit hoofdstuk zal je zien dat de meeste van deze communicatiestandaarden ook nog configuratie-parameters
         hebben.
         Deze parameters bepalen vaak dingen zoals het aantal verstuurde bytes, de snelheid of de polariteit van
         signalen.
         Om te zorgen dat data-transmissie goed gaat is het belangrijk om te zorgen dat deze parameters aan beiden
         kanten van
         de communicatie hetzelfde staan ingesteld.
      </p>

      <p>
         Voor de meeste chips staat in de datasheet beschreven welke parameterwaarden er gelden voor de communicatie.
         In sommige gevallen zal je dit aan beide kanten moeten instellen.
      </p>


      <hr class="spacer">
      <div>
         <h2>UART</h2>


         <h4>Eigenschappen</h4>
         <hr>
         <p>
            <DefRef n="UART"/>
            staat voor Universal Asynchronous Receiver-Transmitter. Een UART verbinding is vaak te herkennen
            aan de pinlabels <span class="emph">TX</span> en <span class="emph">RX</span>. Wanneer je een
            UART-verbinding maakt
            tussen twee chips, verbind je altijd de TX van het ene apparaat met de RX van de ander, en vice-versa. Officiëel
            verwijst UART naar de elektrische tranceivers die de communicatie mogelijk maken, en niet naar het communicatieprotocol.
            Omdat hiervoor altijd hetzelfde communicatieprotocol wordt gebruikt, wordt ermee nu vaak ook naar dit protocol verwezen.

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

         <h4>Werking en parameters</h4>


         <hr>
         <p>
            Elke UART transmissie heeft een start-bit, minimaal één stop-bit en een aantal(5-9) data bits. Hiernaast kan
            een
            transmissie een parity bit bevatten. In dit stuk leggen we uit wat al deze dingen beteken.
            In de tool hierboven kan je alle parameters instellen om te zien hoe een UART transmissie verandert door
            elke instelling.
         </p>

         <h5>Snelheid</h5>
         <p>
            De snelheid van UART wordt vooraf bepaald en ingevoerd in beide communicerende systemen. De snelheidseenheid
            hiervoor heet de
            <DefRef n="baudrate"/>
            . De baudrate geeft het aantal "bauds" aan wat er per seconde gecommuniceerd
            kan worden. Een baud is een vooraf bepaalde hoeveelheid data.
         </p>

         <p>
            Bij UART is een baud meestal gelijk aan 1 bit. Hierdoor is de baudrate hetzelfde als de bitrate (eg. het
            aantal bits per seconde).
            LET OP: Dit is niet overal zo zijn. Ga er dus niet vanuit dat baudrate hetzelfde is als bitrate, maar
            controleer
            naar hoeveel data één baud verwijst.
         </p>

         <p>
            De baudrate bepaalt hoe lang elk bitje op de transmissielijn wordt geplaatst. Dit geldt voor alle bits, dus
            ook de start,stop en parity bits.
         </p>

         <h5>Start-bit</h5>
         <p>
            Wanneer er geen transmissie bezig is, hoort een UART-pin hoog te zijn. Een apparaat begint de transmissie
            door
            deze lijn naar laag te trekken. Het ontvangende apparaat weet dan dat het een transmissie moet gaan lezen.
         </p>

         <h5>Data bits</h5>
         <p>
            Na de startbit stuurt het apparaat tussen de 5 en 9 bits met data erin. Dit aantal is (net zoals de
            baudrate) vooraf
            bepaald en ingesteld op beiden apparaten. Als de parity bit ingeschakeld is, dan kan het dataframe niet meer
            dan 8 bits bevatten.
         </p>

         <p>
            De volgorde van de data bits is bepaald door de <span class="emph">data order</span>. Als dit <span
               class="emph">msb first</span>
            is, wordt de
            <DefRef n="most significant bit"/>
            als eerste geplaatst. Is dit <span class="emph">lsb first</span>?
            Dan wordt de
            <DefRef n="least significant bit"/>
            als eerste geplaatst.
         </p>

         <h5>Parity bit</h5>
         <p>
            Om te controleren of de data goed is overgekomen kan je er voor kiezen om een parity bit mee te sturen.
            Dit is een soort van controle bitje wat gebaseerd is op alle data bits samen.
         </p>

         <p>
            De parity bit wordt berekend op basis van het aantal 1'en in de data bits. De parity kan op 2 manieren
            geconfigureerd
            worden. In beiden gevallen wordt gecontroleerd of het totaal aantal 1'en even of oneven is.


         </p>

         <ul>
            <li><span class="emph">even parity (even pariteit)</span>
               De parity bit is 1 bij een even aantal 1'en en 0 bij een oneven aantal
            </li>
            <li><span class="emph">odd parity (oneven pariteit)</span>
               De parity bit is 1 bij een oneven aantal 1'en en 0 bij een even aantal
            </li>
         </ul>

         <h4>Try it out!</h4>
         <hr>
         <p>
            In de onderstaande configurator kan je de parameters van UART aanpassen, en zien hoe deze het
            signaal beïnvloeden.
         </p>

         <WaveDromUART/>


         <h4 class="mt-3">Uitdagingen</h4>
         <hr>
         <table class="table table-striped">
            <tbody>
            <tr>
               <th scope="row">Synchronisatie</th>
               <td>
                  Bij UART moeten beiden apparaten ingesteld staan op dezelfde snelheid. Zij hebben hierover vooraf
                  geen communicatie, dus de ontwikkelaar moet de
                  <DefRef n="baudrate"/>
                  goed instellen.
               </td>
            </tr>
            <tr>
               <th scope="row">Integriteit</th>
               <td>
               Bij UART kan de ontvangener met de parity bit controleren of data in een transmissie geldig is.
                  De verzender krijgt hier geen bevestiging van, dus de verzender weet niet of de data goed aangekomen is.
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

      <hr class="spacer">
      <div>
         <h2>SPI</h2>
      </div>


   </div>
</template>

<script>
import DefRef from "@/components/Helpers/DefRef";
import WaveDromUART from "@/components/Helpers/WaveDromUART";

export default {
   name: "SerialCommunication",
   components: {
      DefRef,
      WaveDromUART
   }
}
</script>

<style scoped>

</style>