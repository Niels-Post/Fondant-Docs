<template>
  <div class="col-8">
    <h1>Vereisten installeren</h1>
    <p>
      Er komt nogal wat kijken bij het werken met microcontrollers. Niet alleen heb je een speciale cross-compiler nodig
      voor je C++ code, een programma om de code te “uploaden” naar je microcontroller, en om je programma tijdens het
      uitvoeren te debuggen. In dit hoofdstuk installeren we alle software die je nodig hebt om te ontwikkelen voor het
      STM32 platform. Dit omvat de platform-specifieke tools voor ontwikkeling, maar ook algemenere software die je zal
      helpen met het debuggen van je applicatie.
    </p>

    <h4>Compatibiliteit</h4>
    <p>
      De software in dit hoofdstuk is getest en werkend op een blanco Windows-10 (Home) VM en zou dus moeten werken op
      Windows-10/11 gebaseerde systemen.
    </p>
    <p>
      Alle gebruikte software heeft versies beschikbaar voor andere besturingssystemen, maar mogelijk zijn hiervoor de
      installatie- en instelstappen anders dan die voor Windows.
    </p>

    <hr>


    <!-- STM32 Cube IDE -->
    <div>
      <h2 id="CubeIDE">STM32 Cube IDE <a href="https://www.st.com/en/development-tools/stm32cubeide.html"
                                         class="small text-muted text-decoration-none">[st.com]</a></h2>

      <p>
        De CubeIDE gebruik je om de parameters van de STM32 in te stellen. In deze IDE kan je informatie vinden over de
        meeste STM32 microcontrollers.
        Hierin kan je aangeven op welke manier je de processor gaat gebruiken; Welke pins gebruik je voor welke doelen,
        welke peripherals wil je aansturen,
        hoe moet de klok ingesteld worden, en nog veel meer!
      </p>

      <p>
        De IDE genereert op basis van je keuzes een C/C++ project waarin al je keuzes worden ingesteld, en de
        main-functie
        daarna wordt aangeroepen. In je main functie heb je dan toegang tot allerlei makkelijke variabelen en functies
        die je
        kan gebruiken om de microcontroller te besturen.
      </p>


      Installatie
      Download: https://www.st.com/en/development-tools/stm32cubeide.html
      Voordat je mag downloaden moet je van ST eerst een account aanmaken of je email invullen. De setup verloopt niet,
      dus
      deze kan je op meerdere apparaten gebruiken.
      Onderstaand de installatiestappen.

    </div>

    <hr>

    <!-- CLion -->
    <div>
      <h2 id="CLion">CLion <a href="https://www.jetbrains.com/clion/" class="small text-muted text-decoration-none">[jetbrains.com]</a>
      </h2>

      <img class="float-end"
           src="https://resources.jetbrains.com/storage/products/clion/img/meta/clion_logo_300x300.png"
           alt="CLion Logo">


      <p>
        Helaas is de CubeIDE nog niet op het niveau van veel andere IDE’s als het gaat om features en code-assistentie.
        Hierom gebruiken we in deze module CLion.
      </p>

      <p>
        CLion is van dezelfde IDE-familie als PyCharm, en de interface zal dus bekend voorkomen.
        Een groot voordeel is dat er een ingebouwde integratie is met Cube-projecten. Zodra de chip geconfigureerd is in
        de CubeIDE,
        kan je het grootste deel van je werk dus in CLion verder doen.
      </p>

      <p>
        Andere IDE’s kunnen ook werken met projecten van Cube, maar misschien zijn hier meer instelstappen voor nodig.
      </p>

      <div class="fs-4">Installatiestappen</div>
      <div class="fs-5">Educatielicentie</div>
      Voor PyCharm kan je gebruik maken van de Community Edition, die gratis is. Zo’n editie is er helaas voor CLion
      niet.
      Gelukkig kan je als student gratis gebruik maken van alle IDE’s uit deze familie. Ga hiervoor naar
      https://www.jetbrains.com/shop/eform/students.
      Hier kan je een account aanmaken en je aanmelden met je HU-email.

      <div class="fs-5">Installlatie</div>
      Ga hierna naar https://www.jetbrains.com/clion/ om CLion te downloaden.

    </div>

    <hr>

    <!-- OpenOCD -->
    <div>
      <h2 id="OpenOCD">OpenOCD <a href="https://openocd.org"
                                  class="small text-muted text-decoration-none">[openocd.org]</a></h2>
      <p>
        OpenOCD is een open-source toolchain die je kan gebruiken om code te uploaden naar microcontrollers, en om
        programma’s op microcontrollers te debuggen.
      </p>

      <p>
        Als je alleen gebruik gaat maken van CubeIDE heb je deze niet nodig.
      </p>

      <h3>
        Installatie
      </h3>

      <p>
        OpenOCD is te downloaden via github. https://github.com/openocd-org/openocd/releases.
      </p>
    </div>

    <hr>

    <!-- Arm-None-Eabi -->
    <div>
      <h2 id="ARM">ARM (arm-none-eabi) <a
          href="https://developer.arm.com/tools-and-software/open-source-software/developer-tools/gnu-toolchain/gnu-rm/downloads"
          class="small text-muted text-decoration-none">[developer.arm.com]</a></h2>

      <img class="float-end" src="https://upload.wikimedia.org/wikipedia/commons/6/60/ARM_logo.svg" alt="ARM Logo">


      <p>
        Dit is de compiler toolchain voor ARM embedded chips. In deze toolchain vind je alles wat je nodig hebt om C/C++
        code
        om te zetten naar een bin-bestand wat geschikt is voor microcontrollers.
      </p>

      <div>
        De naam van veel toolchains is opgebouwd als <span class="emph">ARCH-VENDOR-OS</span>

      </div>

      <div class="ms-1 mt-0 mb-3">
        <div><span class="emph font-monospace">ARCH</span> De processorarchitectuur waarvoor de toolchain werkt.</div>
        <div><span class="emph font-monospace">VENDOR</span> De uitgever van de toolchain</div>
        <div><span class="emph font-monospace">OS</span> Besturingssysteem waarvoor de toolchain werkt</div>
      </div>


      ARM-none-eabi is een toolchain die gemaakt is voor ARM-processoren. Omdat het open source software is, is er geen
      specifieke vendor (none). Omdat het gaat om embedded apparaten, die geen OS hebben, is het OS ook none. Het stukje
      wat
      erachter staat (EABI) betekent dat de toolchain compatible is met de Arm Embedded ABI.

      Dit is de toolchain die je gebruikt voor de meeste Arm-gebaseerde embedded systemen


      Installatie
      Download: https://www.st.com/en/development-tools/stm32cubeide.html
      Voordat je mag downloaden moet je van ST eerst een account aanmaken of je email invullen. De setup verloopt niet,
      dus
      deze kan je op meerdere apparaten gebruiken.
      Onderstaand de installatiestappen.

    </div>


  </div>
</template>

<script>
export default {
  name: "VereistenInstalleren"
}
</script>

<style scoped>

</style>