<template>
   <div>
      <h1>Digitale logica</h1>
      <hr>

      <p>
         Tijdens het programmeren van microcontrollers zal je veel gebruik maken van digitale signalen. Hierbij wordt er
         bij
         het meten maar één waarde gemeten: Of het signaal <span class="emph">hoog</span> of <span
            class="emph">laag</span> is.
      </p>

      <h2 class="mt-5" id="Basis">Basis</h2>
      <hr>
      <h4>Hoog/Laag</h4>

      <p>
         Wat een hoog of laag signaal is, is afhankelijk van het systeem, maar over het algemeen geldt dat een laag
         signaal op hetzelfde
         spanningsniveau zit als de GROUND van de schakeling, en een hoog signaal op een hogere waarde zit. In STM32
         processoren
         is het
         <DefRef n="logic level"/>
         meestal gelijk aan 3.3V. Dan is een laag signaal dus 0V, en een hoog signaal 3.3V (ten opzichte van GND).
      </p>

      <p>
         Wanneer je een pin op een microcontroller instelt als
         <DefRef n="input pin"/>
         , zal je bij het uitlezen in je programma een waarde terugkrijgen van
         1 (hoog) of 0 (laag).
      </p>

      <h4>Floating</h4>
      <p>
         Wat nou als een pin niet actief is aangestuurd naar hoog of laag? Dit kan bijvoorbeeld gebeuren als een draadje
         niet aangesloten is, of als een onderdeel
         in de schakeling kapot is. We spreken dan van een
         <DefRef n="floating pin"/>
         . Deze geven vaak problemen in schakelingen die heel lastig
         te debuggen zijn. Loop dus altijd goed je schakelingen en instellingen na om te controleren of dit het geval
         is.
      </p>

      <p>
         De reden dat het debuggen van een
         <DefRef n="floating pin"/>
         erg lastig is, is omdat het gedrag van je schakeling erg onvoorstelbaar wordt.
         Je zou verwachten dat een niet aangesloten pin altijd een lage waarde meegeeft maar dit is niet zo. In de
         praktijk hebben floating pins heel erg "last"
         van de omgeving. Als jij bijvoorbeeld statisch geladen bent, en met je hand dichtbij een floating pin komt, is
         er een goede kans dat deze ineens een andere
         meetwaarde heeft dan eerst.
      </p>

      <hr class="spacer">

      <h2>GPIO In MicroControllers</h2>

      <p>
         De meeste microcontrollers hebben een GPIO-module (General Purpose Input Output), waarmee geinteracteerd kan
         worden
         met fysieke pins op de microcontroller.
         Hiermee kunnen pins aangestuurd en uitgelezen worden.
      </p>

      <h3 class="mt-5" id="OutputPin">Output Pin (Push/Pull)</h3>
      <hr>

      <p>
         Een pin kan ingesteld worden als Output pin. Als een pin is ingesteld als output kan 1 naar een bijbehorend register
         schrijven. De microcontroller verbindt de pin dan intern aan een voltage door middel van transistoren. Als je een
         0 schrijft, zal de pin met de Ground verbonden worden.
      </p>

      <div class="col-12 col-xl-8">
         <object :data="require('@/assets/DigitaleLogica/OutputLED.svg')" class="img-fluid"></object>
      </div>

      <p>
         In het bovenstaande voorbeeld sturen we een LED aan met een Output pin. Wanneer we 1 naar het register van de
         pin schrijven, zal de led aangaan. Om te zorgen dat de stroom door de microcontroller niet te hoog is, gebruiken
         we een weerstand om deze te beperken.
      </p>

      <h3 class="mt-5" id="InputPin">Input pin</h3>
      <hr>
      <p>
         Een pin kan ook ingesteld worden als Input pin. Je kan dan een bijbehorend register van de pin uitlezen, om te
         zien of er een hoog signaal(1) of een laag signaal(0) op de pin staat.
      </p>

      <div class="col-12 col-xl-8">
         <object :data="require('@/assets/DigitaleLogica/InputSwitch.svg')" class="img-fluid"></object>
      </div>

      <p>
         In dit voorbeeld sluiten we een schakelaar aan op pin 1. Als deze schakelaar naar de kant met 3.3V staat
         zal de registerwaarde van de pin gelijk zijn aan 1. Als de schakelaar naar GND staat is deze 0.
      </p>

      <h4>Pull-Ups / Pull-Downs</h4>

      <h6>Algemeen</h6>
      <div class="col-12 col-xl-8">
         <object :data="require('@/assets/DigitaleLogica/InputKnopGeenWeerstand.svg')" class="img-fluid"></object>
      </div>

      <p>
         Met alleen het uitlezen ben je er nog niet. In het bovenstaande voorbeeld hebben we een drukknop aangesloten op een microcontroller.
         We stellen Pin 1 in als Input pin. Als de knop nu ingedrukt wordt, komt er 3.3V op de pin te staan, en zal deze lezen
         als hoog.
      </p>

      <p>
         Maar wat als de knop niet ingedrukt is? Pin 1 is dan met niks verbonden; De pin is <DefRef n="floating"/>.
         Hierdoor zou het zomaar kunnen zijn dat het lezen van de pin hoog geeft, terwijl de knop niet ingedrukt is.
      </p>

      <div class="col-12 col-xl-8">
         <object :data="require('@/assets/DigitaleLogica/InputKnopGND.svg')" class="img-fluid"></object>
      </div>

      <p>
         Opgelost! Door de pin ook te verbinden met GND is de pin niet meer floating, en staat deze standaard op laag.
      </p>

      <p>
         Alleen ontstaat er nu een ander probleem. Wanneer de knop wel wordt ingedrukt, wordt de pin voor 3.3V direct verbonden
         met die voor GND. Er ontstaat nu kortsluiting...
      </p>

      <div class="col-12 col-xl-8">
         <object :data="require('@/assets/DigitaleLogica/InputKnopPullDown.svg')" class="img-fluid"></object>
      </div>

      <p>
         We voegen een weerstand toe aan de schakeling. Wanneer de knop nu ingedrukt wordt, loopt de stroom door deze weerstand,
         waardoor er geen korstluiting is. Omdat we het niveau van de pin hiermee omlaag trekken noemen wij dit een
         <DefRef n="pull-down weerstand"/>
      </p>

      <div class="col-12 col-xl-8">
         <object :data="require('@/assets/DigitaleLogica/InputKnopPullUp.svg')" class="img-fluid"></object>
      </div>

      <p>
         Het omgekeerde scenario kan ook. Hierbij sluiten we een <DefRef n="pull-up weerstand"/> aan naar de 3.3V verbinding.
         De waarde van pin 1 is nu standaard hoog. Wanneer we de knop indrukken, wordt de waarde laag.
      </p>

      <h6>Interne pull-ups / Pull-downs</h6>
      <p>
         Gelukkig helpen de ontwikkelaars van microcontrollers hiermee. In veel microcontrollers kan je een interne
         pull-up of pull-down weerstand activeren op een input-pin. Hierdoor hoef je niet voor elke knop een aparte externe
         weerstand aan te sluiten.
      </p>

      <div class="col-12 col-xl-8">
         <object :data="require('@/assets/DigitaleLogica/InputKnopGeenWeerstand.svg')" class="img-fluid"></object>
      </div>

      <p>
         Deze interne weerstanden kan je activeren door een register op de microcontroller in te stellen. In het bovenstaande
         voorbeeld zou je een interne Pull-Down weerstand activeren, om pin 1 standaard op laag niveau te krijgen.
      </p>


      <h3 class="mt-5" id="OpenCollectorPin">Open Collector / Open Drain</h3>
      <hr>
      <p>
         In specifieke situaties is het soms niet handig om een standaard Push-Pull Output pin te hebben. Gelukkig
         bieden de interne pull-ups van microcontrollers hier ook een oplossing
      </p>

      <div class="col-12 col-xl-8">
         <object :data="require('@/assets/DigitaleLogica/AlarmSysteemUnConnected.svg')" class="img-fluid"></object>
      </div>

      <p>
         In dit voorbeeld proberen we een alarmsysteem af te maken. Het bovenstaande systeem heeft 3 microcontrollers.
         Elke microcontroller heeft 1 alarmsensor en 1 sirene. Wanneer de sensor een indringer detecteert, zal zijn sirene
         afgaan.
      </p>

      <p>
         We willen zorgen dat bij het detecteren van een indringer alle sensoren afgaan, en niet alleen één. We hebben
         alleen op elke microcontroller nog maar één pin over, en we kunnen dus niet één microcontroller met de 2 anderen
         tegelijk verbinden. De enige optie is om pin 1 van alle microcontrollers te verbinden.
      </p>

      <div class="col-12 col-xl-8">
         <object :data="require('@/assets/DigitaleLogica/AlarmSysteemConnected.svg')" class="img-fluid"></object>
      </div>

      <p>
         In deze schakeling kunnen we geen normale Output pins gebruiken. Als microcontroller 1 namelijk zijn pin hoog zet,
         en microcontrollers 2 en 3 staan nog op laag zal er sprake zijn van kortsluiting.
      </p>

      <p>
         Om dit te voorkomen kunnen we op alle microcontrollers pin 1 instellen als input met een pull-up. Bij het uitlezen
         van de pin zullen alle microcontrollers dan hoog teruggeven. Als er een inbreker word gedetecteerd, wisselt de
         betreffende microcontroller zijn input pin naar een output-pin, en zet deze op laag.
      </p>

      <p>
         Doordat de andere microcontrollers hun pin via een weerstand op 3.3V hebben aangesloten ontstaat er geen kortsluiting.
         De microcontrollers waarvan de pin nog op input staat zullen nu laag lezen, en weten dat ze hun sirene aan moeten zetten.
      </p>

      <p>
         Als de inbreker is weggejaagd, zet de microcontroller zijn pin weer op input-pullup. De meting van de overige
         microcontrollers zal weer naar hoog gaan, en ze kunnen hun sirene uitzetten.
      </p>

      <p>
         Deze pin-configuratie heet een open-drain, of open-collector pin (drain als de transistor in de microcontroller een
         MOSFET is, en collector wanneer het een transistor is). Dit kan ook andersom uitgevoerd worden. Alle input
         pins worden dan ingesteld met een pull-down, en de output pin wordt op high gezet.
      </p>

   </div>
</template>

<script>

import DefRef from "@/components/Helpers/DefRef";
import titleMixin from "@/components/Helpers/titleMixin";

export default {
   name: "DigitaleLogica",
   components: {
      DefRef
   },
   title: "Digitale Logica",
   mixins: [titleMixin]
}
</script>

<style scoped>

</style>