<template>
  <div>
    <h1>Wat is een microcontroller?</h1>
    <hr>
    <p>
      Tijdens de cursus ben je waarschijnlijk al een aantal keren tegen begrippen zoals microcontroller en embedded
      aangelopen,
      maar wat betekent dit eigenlijk precies? In dit hoofdstuk gaan we in op de verschillen tussen standaard computers
      en embedded systemen,
      en nemen we door hoe een microcontroller in het algemeen werkt.
    </p>

    <hr class="spacer">

    <!-- MPU's -->
    <div>
      <h2 id="Microprocessors">Microprocessors</h2>
      <p>
        Tot nu toe heb je waarschijnlijk vooral gewerkt met laptops en/of desktops. Hierin zit meestal een
        microprocessor.
        Dit is één enkele chip (dus zonder printplaat). Deze doet alle berekeningen die nodig zijn voor het draaien van
        het besturingssysteem en
        alle software die daarop geïnstalleerd is.
      </p>

      <p>
        Deze microprocessoren zijn meestal opgebouwd met de <a href="https://nl.wikipedia.org/wiki/Von_Neumann-architectuur">Von Neumann Architectuur</a> in gedachten. Hieronder staat deze
        architectuur kort beschreven.
      </p>

      <div class="col-12 col-xl-8">
        <img src="@/assets/DeMicrocontroller/VonNeumannArchitecture.png" class="img-fluid" alt="De Von Neumann Architecture">
      </div>

      <p>De microprocessor bestaat meestal uit 3 onderdelen</p>
      <ul>
        <li>
          <span class="emph">De rekenkundig-logische eenheid (Arithmetic logic unit, ALU) </span><br>
          Voert berekeningen uit. Hierin zitten elektrische schakelingen die bijvoorbeeld: XOR-operaties uitvoeren,
          optellen, aftrekken.
        </li>
        <li>
          <span class="emph">De registerreeks (Register Array, RA) </span><br>
          Een reeks geheugenregisters waar de processor informatie tijdelijk in kan opslaan. Door de locatie
          zijn ze extreem snel toegankelijk, maar hebben ze maar een beperkte opslagcapaciteit.
        </li>
        <li>
          <span class="emph">Controle-eenheid (Control Unit, CU) </span><br>
          Stuurt de processor aan; De CU haalt instructies op uit het geheugen, en vertaalt deze naar elektrische
          signalen voor de RA en de ALU om de instructie uit te voeren.
        </li>
      </ul>
    </div>

    <hr class="spacer">

    <!-- MPU vs MCU -->
    <div>
      <h2 id="MicroProcessorsVsMicroControllers">Microprocessors vs. Microcontrollers</h2>

      <p>In deze lesmodule gaan we werken met microcontrollers van het merk ST. Microcontrollers zijn
        een stuk goedkoper dan microprocessoren, kleiner, en bovendien energiezuiniger. Hier tegenover staat
        dat ze ook een stuk minder snel zijn, en minder geavanceerde functies bevatten. Complexe berekeningen kan
        je dus nog steeds het best gewoon op een computer met een microprocessor doen.
      </p>

      <h3>Opbouw</h3>
      <p>
        Microprocessoren zijn over het algemeen opgebouwd met de
        <a href="https://en.wikipedia.org/wiki/Harvard_architecture">Harvard-Architecture</a> in gedachten. Deze lijkt
        erg
        op de Von Neumann architectuur maar heeft een belangrijk verschil.
      </p>

       <div class="col-12 col-xl-8">
        <img src="@/assets/DeMicrocontroller/HarvardArchitecture.png" class="img-fluid" alt="De Harvard Architecture">
      </div>

      <p>
        Zoals je kan zien is bij de Harvard architectuur het geheugen opgesplitst in 2 delen. Het
        Instructiegeheugen bevat alle programma-instructies, en het datageheugen bevat alle gegevens die
        tijdens het uitvoeren van het programma gebruikt worden. Vaak is het zo dat het instructiegeheugen niet
        kan worden aangepast tijdens het draaien van het programma, waar in het datageheugen vrij geschreven kan worden.
      </p>

      <p class="fst-italic">Let op: Instructiegeheugen/Datageheugen zijn niet hetzelfde als ROM/RAM. Hierover meer in
        het onderdeel ROM/RAM</p>


      <h3>Verschillen</h3>

      <h4>Zelfstandigheid</h4>
      <p>
        In de vorige onderdelen heb je kunnen zien dat een microprocessor en microcontroller in
        processor-architectuur erg veel op elkaar lijken. Toch is er een belangrijk verschil in de uiteindelijke chip.
        In een microcontroller zit in het silicone niet alleen de processor, maar ook het instructiegeheugen, het
        datageheugen en peripherals (deze komen later nog aan bod).
      </p>

      <p>
        Waar een microprocessor dus afhankelijk is van externe onderdelen en elektrische verbindingen  heeft een
        microcontroller deze niet nodig.
      </p>

      <p>
        Als je een microcontroller waar een programma op staat aansluit op een stroombron, en bijvoorbeeld een knop en
        een karakter-lcd, kan de microcontroller deze aansturen volgens de geschreven programmalogica.
      </p>

      <p>
        Voordat een microprocessor ditzelfde kan doen heeft deze in ieder geval een extern geheugen nodig (waar de
        programmacode opstaat), en mogelijk ook een i/o onderdeel wat de karakter-lcd kan aansturen.
      </p>

      <h4>Energieverbruik</h4>
      <p>
        Zoals eerder genoemd zijn microcontrollers vaak een stuk zuiniger dan microprocessoren. Hierdoor kunnen
        microcontrollers gebruikt worden op kleine batterijen en accu’s (gelijk in capaciteit aan bijvoorbeeld AA/AAA
        batterijen). Ook hebben microcontrollers vaak een energiebesparende stand waar ze naartoe kunnen schakelen
        wanneer ze niet aan hoeven te staan.
      </p>

      <h4>Peripherals</h4>
      <p>
        Microcontrollers hebben vaak ingebouwd ook een aantal peripherals zitten. Dit zijn stukjes hardware die
        voor specifieke berekeningen/handelingen zorgen. Denk bijvoorbeeld aan een ethernet-controller, een
        SPI-communicatiebus of een timer die in te stellen is om precies 120 keer per seconde een signaaltje te sturen.
        Bij een standaard computer is het gebruikelijker dat dit soort onderdelen op het moederbord aanwezig zijn in
        plaats van in de processor-chip.
      </p>

      <h4>Complexe berekeningen</h4>
      <p>
        Omdat microcontrollers een simpele instructieset hebben zijn complexe berekeningen vaak een stuk langzamer. Op
        heel veel microcontrollers is er bijvoorbeeld geen kommagetalleneenheid (Floating Point Unit, FPU). Tijdens het
        programmeren met kommagetallen zal je hier weinig
        van merken, maar tijdens het compileren van de code past de compiler veel trucjes toe om de berekeningen te
        kunnen doen zonder FPU. Hier zijn in de praktijk vaak erg veel losse instructies voor nodig, waardoor de
        resulterende code dus significant langzamer draait dan wanneer deze geen kommagetallen zou gebruiken.
      </p>

      <p>
        Hiernaast zal je rekening moeten houden met het langzamer tikken van de processor. Waar een computer-processor
        vaak werkt met snelheden van 2 GhZ of meer, moet je bij microcontrollers eerder denken aan een snelheid van ongeveer 80mHz. Dit
        zorgt ervoor dat inefficiente software al snel een grote invloed heeft op het aantal berekeningen wat je per
        seconde kan uitvoeren.
      </p>

    </div>

    <hr class="spacer">

    <!-- Embedded Systemen -->
    <div>
      <h2 id="EmbeddedSystemen">Embedded systemen</h2>
      <p>
        Wanneer je bezig bent met onderwerpen zoals Microcontrollers, Raspberry Pi en Arduino, zal je heel vaak de term
        Embedded tegenkomen. Maar wat betekent dit eigenlijk?
      </p>

      <p>
        We gebruiken de term Embedded (Ingebed) om een computersysteem aan te duiden wat in een product/voorwerp is
        ingebouwd. Het doel hiervan is om het voorwerp extra “slim gedrag” te geven, wat het van zichzelf niet kan.
      </p>

      <p>
        Het kan hierbij om iets simpels gaan als een chip in een koelkast die de temperatuur op een slimme manier regelt
        op basis van een aantal sensoren. Maar in diezelfde koelkast zou ook een chip kunnen zitten die detecteert
        hoeveel melk er nog is, en bijbestelt als het bijna op is. Beiden zijn voorbeelden van een Embedded systeem, al
        zal er in de laatste waarschijnlijk een stuk uitgebreidere software, en een stuk meer elektronica zitten.
      </p>

      <p>
        Doordat Embedded systemen vaak klein moeten zijn, en uitgerust zijn voor één specifiek doel, wordt er door
        fabrikanten meestal gekozen om microcontrollers hiervoor te gebruiken. Toch hoeft dit niet altijd zo te zijn.
        Het computersysteem van een Smart TV is een voorbeeld van een Embedded Systeem wat vaak gebouwd is met een
        Microprocessor.
      </p>

      <p>
        Het onderscheid tussen embedded en niet-embedded zal niet altijd zwart-wit zijn. De makkelijkste manier om
        embedded systemen te onderscheiden is waarschijnlijk op basis van de volgende criteria;
      </p>
      <ol>
        <li>Het systeem is deel van een groter geheel (het smart-gedeelte is deel van de TV)</li>
        <li>Het systeem is ontworpen voor een specifiek doeleinde (Een TV-besturingssysteem)</li>
      </ol>
    </div>


  </div>
</template>

<script>
import titleMixin from "@/components/Helpers/titleMixin";

export default {
  name: "WatIsEenMicrocontroller",
   title: "Wat is een Microcontroller",
   mixins: [titleMixin]
}
</script>

<style scoped>

</style>