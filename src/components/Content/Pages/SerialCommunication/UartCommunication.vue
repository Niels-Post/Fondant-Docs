<template>
   <div>
      <h2>UART</h2>
      <hr>

      <p>
         <DefRef n="UART"/>
         staat voor Universal Asynchronous Receiver-Transmitter. Een UART verbinding is vaak te herkennen
         aan de pinlabels <span class="emph">TX</span> en <span class="emph">RX</span>. Wanneer je een
         UART-verbinding maakt
         tussen twee chips, verbind je altijd de TX van het ene apparaat met de RX van de ander, en vice-versa.
         Officiëel
         verwijst UART naar de elektrische tranceivers die de communicatie mogelijk maken, en niet naar de manier waarop
         chips communiceren.
         Echter, omdat hiervoor altijd dezelfde communicatiewijze wordt gebruikt, wordt met de term UART nu vaak ook naar
         deze standaard verwezen.
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

      <p>
         UART is een <DefRef n="asynchrone interface"/>. Dit betekent dat er tussen 2 communicerende UART-apparaten
         geen synchronisatie is van de klok, en je dus maar moet hopen dat de klok van beide apparaten op ongeveer
         dezelfde snelheid tikt.
      </p>

      <hr class="spacer">

      <h2>Werking en parameters</h2>


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

      <hr class="spacer">

      <h2>Try it out!</h2>
      <hr>
      <p>
         In de onderstaande configurator kan je de parameters van UART aanpassen, en zien hoe deze het
         signaal beïnvloeden.
      </p>

      <WaveDromUART/>

      <hr class="spacer">

      <h2>Uitdagingen</h2>
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
</template>

<script>
import WaveDromUART from "@/components/Helpers/WaveDromUART";
import DefRef from "@/components/Helpers/DefRef";
import titleMixin from "@/components/Helpers/titleMixin";

export default {
   name: "UartCommunication",
   components: {
      WaveDromUART,
      DefRef
   },
   title: "UART",
   mixins: [titleMixin]
}
</script>

<style scoped>

</style>