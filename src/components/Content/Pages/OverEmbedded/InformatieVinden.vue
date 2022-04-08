<template>
  <div>
    <h1>Informatie Vinden</h1>


    <hr class="headerline">

    <!-- Inleiding -->
    <div>
      <p>
        Bij het schrijven van software voor "gewone" computers heb je waarschijnlijk veel informatie(en vooral
        voorbeelden) hebben gevonden in tutorials
        en op sites zoals Stackoverflow. Bij het schrijven van software voor Embedded Systemen zul je merken dat je vaak
        niet
        zomaar de juiste informatie kan vinden, en dat je vaak in technische documenten, zoals een
        <DefRef n="datasheet"/>
        moet zoeken.
      </p>

      <p>
        Een probleem is dat deze documenten vaak erg lang zijn, en moeilijk geschreven zijn. In dit onderdeel nemen we
        de technische
        documentatie van de STM32 BluePill door. We laten zien waar de informatie te vinden is, en hoe deze is
        opgebouwd.
      </p>

      <p>
        Veel van de documenten die in dit hoofdstuk genoemd worden zul je tijdens deze lesmodule niet/nauwelijks
        gebruiken.
        Desondanks is het belangrijk om te weten op welke manier de informatie is opgebouwd, zodat je dit kan opzoeken
        bij specifieke use cases.
      </p>

      <div class="alert alert-warning">
        Deze informatie is gebaseerd op STM32 chips. Mogelijk hebben andere leveranciers een andere manier om informatie
        op te bouwen
      </div>
    </div>


    <hr class="spacer">

    <h2 id="OpsplitsingDocumentatie">Opsplitsing documentatie</h2>
    <div>
      <p>
        Het is belangrijk om te beseffen dat het ontwikkelproces van een systeem niet in de handen van één bedrijf ligt.
        Hierdoor zul je niet alle informatie in één document kunnen vinden. Voor verschillende onderdelen van het
        systeem,
        zul je verschillende bronnen moeten gebruiken.
      </p>

      <ExtImage :src="require(`@/assets/InformatieVinden/BluePillComponents.png`)"
                source="https://commons.wikimedia.org/wiki/File:BluePillMPU6050.png"/>

      <p>
        Hierboven zie je een elektronisch schema voor een STM32 Bluepill die aangesloten is op een
        <DefRef n="MPU6050"/>-module.
        Hierin zijn 4 onderdelen aangegeven met een cijfer. In dit voorbeeld zul je voor elk van deze onderdelen aparte
        documentatie kunnen vinden.
        Welke documentatie je het meest nodig hebt zal afhangen van de manier waarop je de onderdelen gebruikt.
      </p>
    </div>

    <hr class="spacer">
    <h2 id="HetDevBoard">Het (development) Board</h2>
    <div>
      <ExtImage class="float-end" :src="require(`@/assets/InformatieVinden/1DevBoard.png`)"
                source="https://commons.wikimedia.org/wiki/File:BluePillMPU6050.png"/>

      <p>
        In dit voorbeeld is de BluePill het board (ook wel development board). Hierop zitten een aantal chips en
        onderdelen die de
        microcontroller nodig heeft om te werken, zoals een klokkristal, en diverse weerstanden en capacitors. Hiernaast
        zitten er een paar pins, knopjes en een usb poort op, die het voor jou als ontwikkelaar makkelijker maken om
        toepassingen
        te ontwikkelen.
      </p>


      <h4>Pinout</h4>
      <p>
        Het document wat je voor het board over het algemeen het meest gebruikt is de
        <DefRef n="pinout"/>
        . Hierin zie je
        welke fysieke pins zijn aangesloten op welk interne pinnummer. Vaak kan je hierin ook zien welke extra functies
        bepaalde pins hebben. De pinout van de BluePill is te vinden op <ExtLink to="https://solovjov.net/reblag.dk/The-Generic-STM32F103-Pinout-Diagram.jpg">solovjev.net</ExtLink>
      </p>

      <h4>Datasheet / Gegevenspagina</h4>
      <p>
        Dit soort development boards worden vaak door hobbyisten ontworpen, en hebben daarom vaak geen officiële
        datasheet.
        Naast de pinout zijn de meeste gegevens vaak te vinden op de verkooppagina van het board, of op een andere
        aparte pagina.
        Voor de BluePill is er een redelijk compleet overzicht te vinden op
        <ExtLink to="https://stm32-base.org/boards/STM32F103C8T6-Blue-Pill.html"/>
        .
      </p>
    </div>


    <hr class="spacer">

    <h2 id="DeMicrocontroller">De microcontroller</h2>
    <div>
      <ExtImage class="float-end" :src="require(`@/assets/InformatieVinden/2MCU.png`)"
                source="https://commons.wikimedia.org/wiki/File:BluePillMPU6050.png"/>


      <p>

        Hierop zal jouw code uiteindelijk opgeslagen worden en draaien. Hierover zal je het meeste informatie kunnen
        vinden.
        Deze chips worden door grote bedrijven ontwikkeld en uitgegeven, en de documentatie ervoor is ook erg
        uitgebreid.
      </p>


      <h4>Datasheet</h4>
      <p>
        De microcontroller heeft vaak een datasheet met honderden pagina's. Tijdens het ontwikkelen voor de
        <DefRef n="MCU"/>
        zul je deze datasheet niet veel gebruiken. Deze is meer bedoeld om te helpen bij het uitzoeken van de juiste
        <DefRef n="MCU"/>
        .
        Hierin staan gegevens over de functionaliteiten van de
        <DefRef n="MCU"/>
        en de minimale- en maximale operatie-omstandigheden.
      </p>
      <p>
        De datasheet van de STM32F103C8 (de microcontroller die meestal in de BluePill zit) is te vinden op
        <ExtLink to="https://www.st.com/resource/en/datasheet/stm32f103c8.pdf"/>
        .
      </p>

      <h4>Reference manual</h4>
      <p>
        Het bedrijf ST, de maker van de STM32 microcontrollers heeft voor elke serie microcontrollers een aparte
        reference manual.
        Dit zijn intimiderende documenten van vaak wel 1000 of meer pagina's. Hierin staat informatie over de werking
        van
        alle onderdelen van de microcontroller.
      </p>

      <p>
        Ook vind je hierin de opbouw van het geheugen, en welke adressen gekoppeld zijn aan bepaalde functies. Als je
        dus graag
        wil weten welk bitje je op 1 moet zetten om pin A14 op HIGH te zetten. Maar wees gewaarschuwd, vaak hebben
        functies
        een setup-proces waar je doorheen moet lopen (bijvoorbeeld stroom op de peripheral zetten, een klok juist
        instellen, de pin in de juiste modus zetten).
        Het is helaas niet altijd duidelijk wat het volledige proces is hiervoor, maar vaak is er wel een forumpost te
        vinden hierover!
      </p>

      <p>
        De reference manual voor de STM32F1* serie van microcontrollers is te vinden op
        <ExtLink
            to="https://www.st.com/resource/en/reference_manual/cd00171190-stm32f101xx-stm32f102xx-stm32f103xx-stm32f105xx-and-stm32f107xx-advanced-arm-based-32-bit-mcus-stmicroelectronics.pdf"/>
      </p>

      <div class="alert alert-warning">
        In deze module maken we gebruik van de STM32
        <DefRef n="HAL"/>
        . Dit is een C/C++ library die veel van het setupproces
        van onderdelen voor je doet. Voor de meeste handelingen zijn er in deze library functies ingebouwd, en het zal
        dus weinig voorkomen
        dat je werkelijk handmatig bitjes aan het setten/resetten bent.
      </div>
    </div>

    <hr class="spacer">

    <h2 id="HetSensorBoard">Het sensor-board</h2>
    <div>
      <ExtImage class="float-end" :src="require(`@/assets/InformatieVinden/3SensorBoard.png`)"
                source="https://commons.wikimedia.org/wiki/File:BluePillMPU6050.png"/>

      <p>
        Als je in een webwinkel zoekt naar een MPU6050 zul je vaak deze <DefRef n="PCB"/> zien. De term MPU6050 verwijst
        echter naar de processor (4) op deze printplaat, en niet naar de hele printplaat (3). Als je goed doorzoekt zal je zien dat
        het typenummer van de module eigenlijk de GY-521 is.
      </p>

      <p>
        Dit is iets wat in de wereld van embedded wel vaker voorkomt. De processor/sensor doet uiteindelijk het meeste werk, dus
        daarvan wordt de naam gebruikt. Toch is het belangrijk om te weten hoe de PCB is opgebouwd. De datasheet van de sensor/processor
        geeft misschien aan dat je ergens een weerstand van 10 kilo-ohm moet plaatsen. Wat je niet ziet is dat deze op de PCB al is toegevoegd.
        Als je deze zelf ook toevoegt dan is er dus ineens een weerstand van 20 kilo-ohm op die plek, en zijn je metingen
        compleet verkeerd.
      </p>

      <h3>Schemadiagram</h3>
      <p>
        Het is dus belangrijk om te weten dat door op de chipnaam te zoeken, je niet altijd alle informatie hebt. Om te weten hoe deze module
        werkt kan je het beste kijken naar het schemadiagram. Hierop kan je alle elektrische verbindingen en componenten zien die
        op de printplaat aanwezig zijn.
      </p>
      
      <p>Het schemadiagram van de GY-521 is bijvoorbeeld te vinden op <ExtLink to="http://www.haoyuelectronics.com/Attachment/GY-521/GY-521-SCH.jpg"/></p>

    </div>

    <hr class="spacer">
    <h2 id="DeSensorProcessor">De sensor-processor</h2>
    <div>
      <ExtImage class="float-end" :src="require(`@/assets/InformatieVinden/4SensorProcessor.png`)"
                source="https://commons.wikimedia.org/wiki/File:BluePillMPU6050.png"/>

      <p>
        Het onderdeel wat je uiteindelijk zal aansturen in deze toepassing is de MPU-6050. Dit is een processor,
        maar het kan ook goed zijn dat een sensor een "dom" onderdeel is waarvan je een waarde zelf moet uitlezen.
        Denk aan een <DefRef n="LDR"/> of een <DefRef n="potentiometer"/>.
      </p>

      <h3>Datasheet</h3>
      <p>
        In beide gevallen is in de datasheet meestal precies te vinden hoe je het onderdeel uitleest. Hierin staan alle handelingen
        die je moet verrichten om een waarde te krijgen, en als je geluk hebt zelfs een voorbeeldschakeling of een stuk voorbeeldcode.

      </p>

      <h4>De juiste informatie</h4>
      <p>
        Vaak zijn deze datasheets erg uitgebreid, en technisch opgesteld. Gelukkig hoef je meestal maar een klein stukje van de datasheet
        te lezen om gebruik te maken van het onderdeel. In de datasheet wil je op zoek gaan naar kopjes zoals "Digital communication",
        "Serial interface" of "Method of Operation" in het geval van een sensor met een processor en een seriële interface.
        Ook kan het vaak handig zijn om naar de "Pin Descriptions" of "Pinout" te kijken
      </p>

      <p>
        In het geval van analoge sensoren of andere sensoren zonder processor, zal je vaker alleen kijken naar de pin descriptions.
        Ook is er meestal een rekenwijzer, waarin de berekening staat die je kan gebruiken om de meetwaarden van de sensor om
        te zetten in een nuttige eenheid.
      </p>

    </div>

    <hr class="spacer">


  </div>
</template>

<script>
import DefRef from "@/components/Helpers/DefRef";
import ExtImage from "@/components/Helpers/ExtImage";
import ExtLink from "@/components/Helpers/ExtLink";
import titleMixin from "@/components/Helpers/titleMixin";

export default {
  name: "InformatieVinden",
  components: {
    DefRef,
    ExtImage,
    ExtLink
  },
   title: "Informatie Vinden",
   mixins: [titleMixin]
}
</script>

<style scoped>
</style>