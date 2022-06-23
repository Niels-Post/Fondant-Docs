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

      <h4>Grounding</h4>
      <p>
         Voor elke soort seriële communicatie is het essentieel dat de GND van beide componenten aan elkaar is aangesloten.
         Anders kan het zijn dat wat voor de ene kant hoog is, voor de andere kant laag is. Omdat dit standaard is voor
         alle aansluitingen wordt dit in dit hoofdstuk niet expliciet getoond in diagrammen.
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



   </div>
</template>

<script>

import titleMixin from "@/components/Helpers/titleMixin";

export default {
   name: "SerieleCommunicatie",
   title: "Seriële Communicatie",
   mixins: [titleMixin]
}
</script>

<style scoped>

</style>