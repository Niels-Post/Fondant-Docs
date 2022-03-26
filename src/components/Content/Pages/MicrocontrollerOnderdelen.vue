<template>
  <div class="col-8">
    <h1>Onderdelen van een microcontroller</h1>
    <p>
      Nu we de algemene informatie hebben doorgenomen is het tijd voor het technische verhaal. In dit hoofdstuk
      bespreken we de opbouw van een microcontroller, en leggen we uit <span class="fix">hoe deze in het algemeen werkt</span>.
    </p>
    
    <p>
      Omdat we deze cursus werken met de microprocessoren van ST, zullen we dit hoofdstuk aan de hand van een STM32 
      processor werken. We gebruiken de <a
        href="https://www.st.com/en/microcontrollers-microprocessors/stm32f103c8.html">STM32F103C8</a>. Dit is de MCU die in de
      veelgebruikte <a href="https://stm32-base.org/boards/STM32F103C8T6-Blue-Pill.html">STM32 BluePill</a> zit.
    </p>

    <hr>

    <!-- Informatie vinden -->
    <div>
      <h2 id="Informatievinden">Informatie vinden</h2>
      <p>
        Bij het schrijven van software voor "gewone" computers heb je waarschijnlijk veel informatie(en vooral voorbeelden) hebben gevonden in tutorials
        en op sites zoals Stackoverflow. Bij het schrijven van software voor Embedded Systemen zul je merken dat je vaak niet
        zomaar de juiste informatie kan vinden, en dat je vaak in technische documenten, zoals een <DefRef n="datasheet"/> moet zoeken.
      </p>

      <p>
        Een probleem is dat deze documenten vaak erg lang zijn, en moeilijk geschreven zijn. In dit onderdeel nemen we de technische
        documentatie van de STM32 BluePill door. We laten zien waar de informatie te vinden is, en hoe deze is opgebouwd.
      </p>

      <div class="alert alert-warning">
        Deze informatie is gebaseerd op STM32 chips. Mogelijk hebben andere leveranciers een andere manier om informatie op te bouwen
      </div>

      <h3>Welke documentatie is er?</h3>

      <p>
        Het is belangrijk om te beseffen dat het ontwikkelproces van een systeem niet in de handen van één bedrijf ligt.
        Hierdoor zul je niet alle informatie in één document kunnen vinden. Voor verschillende onderdelen van het systeem,
        zul je verschillende bronnen moeten gebruiken.
      </p>

      <ExtImage src="../../../assets/MicrocontrollerOnderdelen/BluePillComponents.png" source="https://commons.wikimedia.org/wiki/File:BluePillMPU6050.png"/>

      <h4></h4>
    </div>

    <hr>


  </div>
</template>

<script>

import DefRef from "@/components/Helpers/DefRef";
import ExtImage from "@/components/Helpers/ExtImage";

export default {
  name: "MicrocontrollerOnderdelen",
  components: {
    DefRef,
    ExtImage
  }
}
</script>

<style scoped>

</style>