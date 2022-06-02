<template>
   <div>
      <h1>CLion configureren</h1>
      <hr>
      <p>
         Nu dat we een project hebben in STM32 IDE moeten we deze nog openen in CLion om hierin te kunnen ontwikkelen.
         Helaas is
         de integratie tussen de 2 IDE's niet helemaal perfect, we moeten dus nog een paar stappen doen om dit project
         te laten werken.
      </p>

      <hr class="spacer">
      <h2 id="CLionOpenen">Openen in CLion</h2>
      <ExtImage :src="require('@/assets/HelloWorld/14-OpenCLion.png')" full-width></ExtImage>

      <p>
         Allereerst openen we het project in CLion. Selecteer hiervoor het *.ioc bestand in de map waar je het project
         hebt opgeslagen.
      </p>

      <div class="alert alert-warning">Mogelijk zie je nu een IDE error, deze kan je negeren</div>
      <div class="alert alert-warning">Mogelijk krijg je de vraag hoe je het bestand wil openen. Kies hierbij "Open as
         Project" en vervolgens "Trust Project"
      </div>


      <hr class="spacer">
      <h2 id="BoardConfig">Board config file</h2>
      <p>
         Om code te uploaden naar een chip, en om deze te kunnen debuggen heeft OpenOCD een board config file nodig.
         Deze geeft aan wat voor apparaat er gebruikt moet worden, en op welke manier deze ingesteld moet staan.
         Voor heel veel boards/processors zijn deze bestanden online te vinden door te zoeken.
      </p>

      <ExtImage :src="require('@/assets/HelloWorld/15-Boardconfig.png')"></ExtImage>
      <p>
         Een aantal board configs zijn meegeleverd, zo ook die van de Bluepill. Deze kan je kiezen bij het openen van
         het project.
         Hiervoor krijg je als het goed is automatisch de bovenstaande popup. Kies voor de config file van de bluepill,
         en
         klik Copy to Project & Use. Op deze manier kan je deze meenemen in version control, en eventuele aanpassingen
         makkelijk
         overnemen op andere apparaten.
      </p>

      <hr class="spacer">
      <h2 id="LinkerScript">Linker script</h2>

      <p>
         Als je nu op "run" klikt zal je een foutmelding krijgen dat het linkerscript niet geopend kan worden.
         Om te zorgen dat deze makkelijk gevonden kan worden kunnen we deze opnemen in de CMake instellingen.
      </p>

      <h3>CMakeLists.txt</h3>
      <p>
         Dit bestand geeft instructies aan CMake om de code te compilen en te uploaden naar je module. Hierin hoeven we
         alleen
         het linkerscript aan te geven. Dit linkerscript heeft een bestandsextentie *.LD en is als het goed is al
         aanwezig
         in je projectmap.
      </p>

      <p>
         Zoek de volgende regel op en pas deze aan:
      </p>

      <p class="fw-bold">
         Van:
      </p>
      <CodeFragment type="cmake"><pre>
set(LINKER_SCRIPT ${CMAKE_SOURCE_DIR})
        </pre>
      </CodeFragment>

      <p class="fw-bold">
         Naar:
      </p>
      <CodeFragment type="cmake"><pre>
        set(LINKER_SCRIPT ${CMAKE_SOURCE_DIR}/STM32F103C8TX_FLASH.ld)
     </pre>
      </CodeFragment>


      <h3>CMakeLists_template.txt</h3>
      <p>
         Wanneer de STM32 IDE het project opnieuw genereert maakt deze gebruik van het bestand CMakeLists_template.txt.
         Om te zorgen dat de bovenstaande veranderingen blijven bestaan moet dit bestand ook aangepast worden.
      </p>

      <p>
         Zoek de volgende regel op en pas deze aan:
      </p>

      <p class="fw-bold">
         Van:
      </p>
      <CodeFragment type="cmake"><pre>
set(LINKER_SCRIPT $${CMAKE_SOURCE_DIR}/${linkerScript})
        </pre>
      </CodeFragment>

      <p class="fw-bold">
         Naar:
      </p>
      <CodeFragment type="cmake"><pre>
set(LINKER_SCRIPT $${CMAKE_SOURCE_DIR}/STM32F103C8TX_FLASH.ld)
     </pre>
      </CodeFragment>

      <div class="alert alert-warning">De naam van het linkerbestand (*.ld) zal niet altijd hetzelfde zijn afhankelijk
         van de chip die je gebruikt. Zorg dat
         je deze dus gelijk zet aan het bestand wat aanwezig is in het project.
      </div>

      <hr class="spacer">
      <h2 id="Uitvoeren">Uitvoeren!</h2>
      <p>
         Als je alle stappen goed hebt opgevolgd kan je nu het compile-proces testen. Klik hiervoor op het groene
         "run"-pijltje in CLion.
         Wanneer je geen STM32 aangesloten hebt zul je eerst het compileproces zien, en vervolgens een foutmelding voor
         het uploaden:

      </p>

      <ExtImage :src="require('@/assets/HelloWorld/19-UploadFail.png')"></ExtImage>

   </div>


</template>

<script>
import titleMixin from "@/components/Helpers/titleMixin";
import ExtImage from "@/components/Helpers/ExtImage";
import CodeFragment from "@/components/Helpers/CodeFragment";

export default {
   name: "CLion Project",
   components: {
      ExtImage,
      CodeFragment
   },
   title: "Openen in CLion",
   mixins: [titleMixin]
}
</script>

<style scoped>

</style>