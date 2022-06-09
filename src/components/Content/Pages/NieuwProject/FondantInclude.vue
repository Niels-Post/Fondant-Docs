<template>
   <div>
      <h1>Fondant toevoegen</h1>
      <hr>
      <p>
         Nu dat we een project hebben in STM32 IDE moeten we deze nog openen in CLion om hierin te kunnen ontwikkelen.
         Helaas is
         de integratie tussen de 2 IDE's niet helemaal perfect, we moeten dus nog een paar stappen doen om dit project
         te laten werken.
      </p>

      <hr class="spacer">
      <h2 id="FondantKopie">Fondant kopiëren</h2>

      <ExtImage :src="require('@/assets/HelloWorld/16-InstallFondant.png')"></ExtImage>
      <p>
         Om Fondant te installeren hoef je alleen 2 mappen toe te voegen. De map fd waar .hpp bestanden instaan, en de map
         fd_src, waar de source bestanden in staan. Deze komen direct onder Core/inc (voor de map fd) en Core/src (voor fd_src).
      </p>

      <p>

      </p>


      <hr class="spacer">
      <h2 id="Main">Omleiden van Main</h2>
      <p>
         STM32IDE heeft een main.c bestand aangemaakt. In deze main worden allerlei
         instellingen aangepast om te zorgen dat de chip op de juiste manier werkt, maar hierdoor is het een erg groot bestand.
         Hierdoor kan het snel heel moeilijk worden om je eigen code te vinden tussen alle overige code.
      </p>

      <p>
         Naast de overzichtelijkheid geeft de .c extensie ook een probleem. Wanneer je nu in je code een #include doet naar
         een C++ library zal je een compile/link error krijgen. Dit is omdat de compiler in een C-context aangeroepen zal worden in plaats
         van in een C++ context.
      </p>

      <h3>Aanpassingen in Main.c</h3>


      <p>
         Om deze complicaties te voorkomen kan Fondant de main-aanroep omleiden naar een apart .cpp bestand. Hiervoor moet je wel
         2 aanpassingen maken in de main.c.
      </p>

      <p>
         Voeg een include toe aan de private includes van main.c:
      </p>

      <CodeFragment type="cpp"><pre>
/* Private includes ----------------------------------------------------------*/
/* USER CODE BEGIN Includes */
#include "fd/fondant_main.h"
/* USER CODE END Includes */
      </pre></CodeFragment>



      <p>
         Voeg nu in de main() een aanroep toe naar fondant:
      </p>

      <CodeFragment type="cpp"><pre>
/* USER CODE BEGIN 2 */
fd_main_caller();
/* USER CODE END 2 */
      </pre></CodeFragment>

      <div class="alert alert-warning">Let op dat je deze codefragmenten altijd tussen <span class="emph">USER CODE BEGIN</span> en
         <span class="emph">USER CODE END</span> zet. Doe je dit niet, dan zal STM32IDE de code weghalen bij de eerst
         volgende configuratie-update van de chip.</div>


      <h3>Aanpassingen in Main.cpp</h3>

      <p>
         De laatste stap is om main.cpp te maken. Dit zal het entrypoint van je toepassing maken, en vanaf hier kan je zoals
         je gewend bent in C++ ook weer andere bestanden includen en gebruiken.
      </p>

      <CodeFragment type="cpp"><pre>
// Regelt het omleiden van main() naar fd_main()
#include &lt;fd/fondant_main.hpp&gt;

// Include de basisfuncties van de fondant library
#include &lt;fd/fondant.hpp&gt;

int fd_main() {
   while(true) {
      // Wacht 10 ms
      fd::sleep(10);
   }

   return 0;
}
      </pre></CodeFragment>

      <p>
         Hierboven zie je een simpel voorbeeld van een main.cpp. Deze doet helemaal niks, maar zal wel compilen en
         geupload kunnen worden.
      </p>

      <p>
         Als je gebruik maakt van de omleiding van de main() functie zal het entrypoint van je applicatie fd_main() heten.
         Deze wordt door Fondant automatisch aangeroepen bij het starten van de microcontroller.
      </p>

      <div class="alert alert-warning">Let op dat je de juiste fondant_main extensie gebruikt bij het includen (.h vanuit main.c en .hpp vanuit main.cpp)</div>

   </div>
</template>

<script>
import titleMixin from "@/components/Helpers/titleMixin";
import ExtImage from "@/components/Helpers/ExtImage";
import CodeFragment from "@/components/Helpers/CodeFragment";

export default {
   name: "FondantInstellen",
   components: {
      ExtImage,
      CodeFragment
   },
   title: "Fondant Instellen",
   mixins: [titleMixin]
}
</script>

<style scoped>

</style>