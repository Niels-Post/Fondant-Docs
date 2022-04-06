<template>
  <div class="col-8">
    <h1>Vereisten installeren</h1>
    <hr>
    <p>
      Er komt nogal wat kijken bij het werken met microcontrollers. Niet alleen heb je een speciale cross-compiler nodig
      voor je C++ code, een programma om de code te “uploaden” naar je microcontroller, en om je programma tijdens het
      uitvoeren te debuggen. In dit hoofdstuk installeren we alle software die je nodig hebt om te ontwikkelen voor het
      <DefRef n="STM32"/> platform. Dit omvat de platform-specifieke tools voor ontwikkeling, maar ook algemenere software die je zal
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

    <hr class="spacer">


    <!-- STM32 Cube IDE -->
    <div>

      <h2 id="CubeIDE">STM32 Cube IDE
        <ExtLink to="https://www.st.com/en/development-tools/stm32cubeide.html" remove-path small/></h2>

      <p>
        De CubeIDE gebruik je om de parameters van de <DefRef n="STM32"/> in te stellen. In deze <DefRef n="IDE"/> kan je informatie vinden over de
        meeste <DefRef n="STM32"/> microcontrollers.
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




      <h4>Installatie</h4>
      <a href="https://www.st.com/en/development-tools/stm32cubeide.html" class="text-muted font-monospace text-decoration-none">[st.com/en/development-tools/stm32cubeide.html]</a>


      <div class="alert alert-warning">
        Voordat je mag downloaden moet je van ST eerst een account aanmaken of je email invullen.
        In het tweede geval krijg je een link toegestuurd. Deze setup verloopt niet,
        dus deze kan je op meerdere apparaten gebruiken. Onderstaand de installatiestappen.
      </div>


      <ImageCarousel>
        <CarouselImage :src="require(`@/assets/Installatie/STM32/1.png`)" alt="Start STM32 Setup" title="">Start</CarouselImage>
        <CarouselImage :src="require(`@/assets/Installatie/STM32/2.png`)" alt="License Agreement" title="">Licentieovereenkomst</CarouselImage>
        <CarouselImage :src="require(`@/assets/Installatie/STM32/3.png`)" alt="Installatielocatie" title="">Pas zonodig de installatielocatie aan naar wens</CarouselImage>
        <CarouselImage :src="require(`@/assets/Installatie/STM32/4.png`)" alt="ALT" title="">Kies drivers om te installeren. Voor deze module zijn alleen de ST-link drivers nodig</CarouselImage>
        <CarouselImage :src="require(`@/assets/Installatie/STM32/5.png`)" alt="ALT" title="">Installeer de driverbestanden</CarouselImage>
      </ImageCarousel>



      <p>

      </p>


    </div>

    <hr class="spacer">

    <!-- CLion -->
    <div>
      <h2 id="CLion">CLion <ExtLink to="https://www.jetbrains.com/clion/" remove-path small/>
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

      <h3>Installatie</h3>

      <ExtLink to="https://www.jetbrains.com/clion"/>
      <div class="alert alert-warning">
        Voor PyCharm kan je gebruik maken van de Community Edition, die gratis is. Zo’n editie is er helaas voor CLion
        niet.
        Gelukkig kan je als student gratis gebruik maken van alle IDE’s uit deze familie. Ga hiervoor naar
        <ExtLink to="https://www.jetbrains.com/shop/eform/students"/>
        Hier kan je een account aanmaken en je aanmelden met je HU-email.
      </div>

      <ImageCarousel>
        <CarouselImage :src="require(`@/assets/Installatie/CLion/1.png`)" alt="Start CLion Setup" title="">Start</CarouselImage>
        <CarouselImage :src="require(`@/assets/Installatie/CLion/2.png`)" alt="Clion License Agreement" title="">Installatielocatie</CarouselImage>
        <CarouselImage :src="require(`@/assets/Installatie/CLion/3.png`)" alt="Opties" title="">Kies de opties voor de installatie. CLion zal je vaak vanuit je project gebruiken, dus de bestandsassociaties zijn niet nodig.</CarouselImage>
        <CarouselImage :src="require(`@/assets/Installatie/CLion/4.png`)" alt="ALT" title="">Kies een map in het startmenu om snelkoppelingen voor CLion in te zetten</CarouselImage>
        <CarouselImage :src="require(`@/assets/Installatie/CLion/5.png`)" alt="ALT" title="">Einde setup</CarouselImage>
      </ImageCarousel>

    </div>

    <hr class="spacer">

    <!-- OpenOCD -->
    <div>
      <h2 id="OpenOCD">OpenOCD <ExtLink to="https://openocd.org" small remove-path/></h2>
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
        <ExtLink to="https://github.com/openocd-org/openocd/releases"/>
      </p>

      <ImageCarousel>
        <CarouselImage :src="require(`@/assets/Installatie/OpenOCD/1.png`)" alt="OpenOCD ZIP contents" title="">De uitgepakte .zip van OpenOCD heeft deze inhoud</CarouselImage>
        <CarouselImage :src="require(`@/assets/Installatie/OpenOCD/2.png`)" alt="OpenOCD kopieren" title="">
          Kopiëer deze hele map naar een centrale map (Bijvoorbeeld <span class="emph">C:\Program Files</span>). Je hebt hier mogelijk administratortoegang voor nodig.

          <p>
            De bin-map zal zich bevinden op de locatie <span class="emph">C:\Program Files\OpenOCD\bin</span>
          </p>
           </CarouselImage>
        <CarouselImage :src="require(`@/assets/Installatie/OpenOCD/3.png`)" alt="Sysdm.cpl" title="">Zoek in het startmenu naar <span class="emph">sysdm.cpl</span></CarouselImage>
        <CarouselImage :src="require(`@/assets/Installatie/OpenOCD/4.png`)" alt="ALT" title="">Selecteer <span class="emph">Environment variables</span> of <span class="emph">Omgevingsvariabelen</span> </CarouselImage>
        <CarouselImage :src="require(`@/assets/Installatie/OpenOCD/5.png`)" alt="ALT" title="">Druk op <span class="emph">PATH</span> onder <span class="emph">user variables</span> en druk <span class="emph">edit</span></CarouselImage>
        <CarouselImage :src="require(`@/assets/Installatie/OpenOCD/6.png`)" alt="ALT" title="">Druk nu op <span class="emph">new</span> en voer het pad naar de bin-map van OpenOCD in</CarouselImage>
        <CarouselImage :src="require(`@/assets/Installatie/OpenOCD/7.png`)" alt="ALT" title="">Door het aanpassen van de omgevingsvariabelen kan je nu op alle terminals in Windows een aanroep aan openocd doen. Dit kan je controleren door in een powershell venster <span class="emph">openocd --version</span> te typen</CarouselImage>
      </ImageCarousel>
    </div>

    <hr class="spacer">

    <!-- Arm-None-Eabi -->
    <div>
      <h2 id="ARM">ARM (arm-none-eabi)
      <ExtLink to="https://developer.arm.com/tools-and-software/open-source-software/developer-tools/gnu-toolchain/gnu-rm/downloads" small remove-path/></h2>

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

      <h3>Installatie</h3>
      <ExtLink to="https://developer.arm.com/tools-and-software/open-source-software/developer-tools/gnu-toolchain/gnu-rm/downloads"/>


      <ImageCarousel>
        <CarouselImage :src="require(`@/assets/Installatie/ARM/1.png`)" alt="Start ARM Setup" title="">Start</CarouselImage>
        <CarouselImage :src="require(`@/assets/Installatie/ARM/2.png`)" alt="ARM License Agreement" title="">Licentieovereenkomst</CarouselImage>
        <CarouselImage :src="require(`@/assets/Installatie/ARM/3.png`)" alt="ARM Install location" title="">Installatielocatie</CarouselImage>
        <CarouselImage :src="require(`@/assets/Installatie/ARM/4.png`)" alt="ALT" title="">Opties voor de installatie. Zorg ervoor dat <span class="emph">Add path to environment variable</span> aangevinkt is. Hierdoor hoef je later niet naar het installatiepad van ARM te zoeken</CarouselImage>
        <CarouselImage :src="require(`@/assets/Installatie/ARM/5.png`)" alt="ALT" title="">Einde setup</CarouselImage>
      </ImageCarousel>

    </div>


  </div>
</template>

<script>
import DefRef from "@/components/Helpers/DefRef";
import ExtLink from "@/components/Helpers/ExtLink";
import ImageCarousel from "@/components/Carousel/ImageCarousel";
import CarouselImage from "@/components/Carousel/CarouselImage";

export default {
  name: "VereistenInstalleren",
  components: {
    DefRef,
    ExtLink,
    ImageCarousel,
    CarouselImage
  }
}
</script>

<style scoped>

</style>