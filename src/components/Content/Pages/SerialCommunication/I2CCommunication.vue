<template>
   <div>
      <h1>I<sup>2</sup>C</h1>
      <hr>
      <p>
         <DefRef n="I2C"/> staat voor Inter-Integrated Circuit, ook wel Two-Wire Interface (<DefRef n="TWI"/>).
         is een communicatiebus, waarbij een aantal apparaten op één bus comuniceren. De interface gebruikt hiervoor
         een kloksignaal (<DefRef n="SCL" pin/>) en een data-signaal (<DefRef n="SDA" pin/>).
      </p>

      <div class="col-12 col-xl-8">
         <object :data="require('@/assets/SerialCommunication/I2CDiagram.svg')" class="img-fluid"></object>
      </div>

      <p>
         Bij I2C is er niet één component wat het initiatief heeft. Elk apparaat op de bus kan een transmissie starten
         naar elk andere apparaat. In het bovenstaande voorbeeld zou
         het bijvoorbeeld kunnen dat Sensor 2 een bericht aan Sensor 1 stuurt.
         In de transmissie
         wordt een adres gestuurd om te bepalen welk andere apparaat moet reageren.
      </p>

      <p>
         Omdat alle apparaten hun data verzenden op dezelfde verbinding, zou er een risico zijn op kortsluiting.
         Beide pins zijn bij I2C ingesteld als <DefRef n="open collector"/> pins. Hierdoor is er geen risico op kortsluiting.
         Wanneer er geen transmissie bezig is, zijn beide pins in alle apparaten op de bus aangesloten op een <DefRef n="pull-up weerstand"/>.
      </p>

      <p>
         Als we in dit hoofdstuk praten over pins op hoog zetten, gebeurt dit dus altijd door middel van een Open Collector.
      </p>






      <hr class="spacer">

      <h2>Adressen</h2>

      <p>
         In I2C bepaal je wie de bedoelde ontvanger van een bericht is met het adres. Dit is een waarde van 6 of 10 bits.
         Elk apparaat op de bus dient een ander adres te hebben, om te voorkomen dat meerdere apparaten reageren.
      </p>

      <h2>Werking</h2>

      <h3>Algemeen</h3>
      <p>
         Het versturen van bits gebeurt als volgt: Voor elke databit wordt de bit eerst op
         <DefRef n="SDA" pin/>
         gezet, waarna
         <DefRef n="SCL" pin/>
         naar hoog, en
         vervolgens naar laag wordt getrokken.
      </p>

      <p>
         Een I2C transmissie begint met het naar laag trekken van <DefRef n="SDA" pin/>, terwijl <DefRef n="SCL" pin/>
         hoog blijft. Dit heet de start-conditie.
      </p>

      <p>
         Hierna worden de 7 bits van het adres op de lijn geplaatst.
      </p>

      <p>
         Na het adres wordt er een Read/Write bit geplaatst. Hiermee geeft de controller aan of hij wil lezen of schrijven
         uit de peripheral. 1 betekent read, 0 betekent write
      </p>

      <p>
         Na de overdracht van 8 bits krijgt de peripheral de kans om aan te geven of het pakket is ontvangen. De controller
         zet <DefRef n="SDA" pin/> op hoog. Hierdoor krijgt de peripheral de kans om deze naar laag te trekken als het bericht
         goed is ontvangen. Is dit niet het geval? Dan kan de controller nu de transactie afbreken, en eventueel opnieuw proberen.
         Dit heet ACK/NACK.
      </p>

      <p>
         Afhankelijk van de Read/Write bit kan er nu data gelezen of geschreven worden van/naar de peripheral. <DefRef n="SDA" pin/>
         wordt weer hoog. Er worden steeds 8 bits verstuurd, waarna de ander tijd krijgt om een ACK te sturen. Bij een read operation
         zal de data verstuurd worden door de peripheral, en zal de ACK dus komen van de controller.
      </p>

      <p>
         Aan het einde van de transmissie stopt de controller de transmissie. Dit doet hij door eerst <DefRef n="SCL" pin/>
         hoog te trekken, en vervolgens <DefRef n="SDA" pin/>. Dit heet de stop-conditie.
      </p>

      <p>

      </p>

      <h3>Herhaalde start</h3>
      <p>
         Soms is het belangrijk dat een controller meerdere berichten achter elkaar stuurt. Hiervoor kan deze een <DefRef n="repeated start"/> uitvoeren.
         Hierbij verstuurt de controller aan het einde van de transmissie geen stop-conditie. Door dit te doen houdt de controller
         langer de macht over de bus, waardoor andere apparaten geen transmissie kunnen starten. Vervolgens kan de controller
         met een start-conditie een nieuwe transmissie starten.
      </p>



      <hr class="spacer">


      <WaveDromSPI></WaveDromSPI>

      <hr class="spacer">

      <h2>Uitdagingen</h2>
      <table class="table table-striped">
         <tbody>
         <tr>
            <th scope="row">Synchronisatie</th>
            <td>
               Bij SPI wordt de snelheid uitsluitend door de controller bepaald, door middel van het <DefRef n="SCK" pin/>-signaal.
               De enige voorwaarde is dat de peripheral zelf een kloksnelheid heeft, die snel genoeg is om de data
               te verwerken. Vaak is de maximum SPI-snelheid van een onderdeel aangegeven in de datasheet.
            </td>
         </tr>
         <tr>
            <th scope="row">Integriteit</th>
            <td>
               SPI heeft geen manier ingebouwd om te controleren of data goed overgekomen is. Soms hebben onderdelen wel
               iets ingebouwd in het communicatieprotocol om dit te bevestigen.
            </td>
         </tr>
         <tr>
            <th scope="row">Apparaatscheiding</th>
            <td>
               Bij SPI is het makkelijk om meerdere apparaten op dezelfde bus aan te sluiten. De <DefRef n="SCK" pin/>,
               <DefRef n="MISO" pin/> en <DefRef n="MOSI" pin/> kunnen allemaal doorgelust worden naar andere peripherals.
               Voor elke peripheral moet er een eigen verbinding komen naar <DefRef n="CS" pin/>. Hiermee kan de controller
               aangeven met welke peripheral hij wil communiceren.
            </td>
         </tr>
         <tr>
            <th scope="row">Initiatief</th>
            <td>
               Het initiatief van transmissie ligt bij SPI altijd bij de controller. De peripherals kunnen niet zelf een
               transmissie starten, en kunnen alleen data terugsturen tijdens een transmissie van de controller.
            </td>
         </tr>
         </tbody>
      </table>

   </div>
</template>

<script>
import titleMixin from "@/components/Helpers/titleMixin";
import DefRef from "@/components/Helpers/DefRef";
import WaveDromSPI from "@/components/Helpers/WaveDromSPI";

export default {
   name: "I2CCommunication",
   title: "I2C",
   components: {
      DefRef,
      WaveDromSPI
   },
   mixins: [titleMixin]
}
</script>

<style scoped>
.spimode-table tr > * {
   text-align: center;
}

</style>