<template>
  <div>
     <h1>Een nieuw project maken</h1>
     <hr>

     <h2>Handmatig</h2>

     <p>
        Een nieuw project aanmaken is niet heel moeilijk in de STM32CubeIDE. Als we gebruik willen maken van CLion,
        een debugger en van de Fondant Library zijn er nog wel wat extra stappen nodig. In de subonderdelen van dit hoofdstuk nemen we de
        stappen door om het project handmatig aan te maken. Hierbij zet je zelf alle instellingen goed, zodat de software
        tools goed onderling werken tijdens het ontwikkelen. Begin hiervoor bij <router-link to="/Voorbereiding/NieuwProject/STMProject">STM Project aanmaken</router-link>
     </p>



     <hr class="spacer">
     <h2>Templates</h2>
     <p>
        Het is aan te raden om dit handmatige proces minimaal één keer door te lopen, om te begrijpen welke uitdagingen
        er zijn bij het aanmaken hiervan. Hierna kan ook altijd een template-repository gebruikt worden. Hierin zijn al
        deze handelingen al uitgevoerd voor één specifieke processor. Er zullen template repositories aangemaakt worden
        voor een aantal veelgebruikte processoren.
     </p>
     <ul>
        <li>TODO templates</li>
     </ul>
  </div>
</template>

<script>
import titleMixin from "@/components/Helpers/titleMixin";

export default {
  name: "NieuwProjectHandmatig",
  components: {
  },
   title: "Nieuw project (Handmatig)",
   mixins: [titleMixin]
}
</script>

<style scoped>

</style>