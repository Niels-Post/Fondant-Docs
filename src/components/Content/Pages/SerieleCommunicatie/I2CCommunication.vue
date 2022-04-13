<template>
   <div>
      <h1>I<sup>2</sup>C</h1>
      <hr>
      <p>
         <DefRef n="I2C"/> staat voor Inter-Integrated Circuit, ook wel Two-Wire Interface (<DefRef n="TWI"/>). Dit
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
         Het apparaat wat de transmissie initiëert is tijdens deze transmissie altijd de controller, en het apparaat
         waarmee hij communiceert is de peripheral

      </p>

      <p>
         In de praktijk zal je zien dat de meeste I2C sensoren/apparaten  zelf geen transmissies initiëren, maar dat je dat
         vanuit de microcontroller moet doen.
      </p>

      <p>
         Omdat alle apparaten hun data verzenden op dezelfde verbinding, zou er een risico zijn op kortsluiting.
         Beide pins zijn bij I2C ingesteld als <DefRef n="open collector"/> pins. Hierdoor is er geen risico op kortsluiting.
         Wanneer er geen transmissie bezig is, zijn beide pins in alle apparaten op de bus aangesloten op een <DefRef n="pull-up weerstand"/>.
      </p>

      <p>

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

      <h4>Extra opties</h4>
      <h5>Herhaalde start</h5>
      <p>
         Soms is het belangrijk dat een controller meerdere berichten achter elkaar stuurt. Hiervoor kan deze een
         <DefRef n="repeated start"/>
         uitvoeren.
         Hierbij verstuurt de controller aan het einde van de transmissie geen stop-conditie. Door dit te doen houdt de
         controller
         langer de macht over de bus, waardoor andere apparaten geen transmissie kunnen starten. Vervolgens kan de
         controller
         met een start-conditie een nieuwe transmissie starten.
      </p>

      <p>
         Omdat de controller in het nieuwe frame wel een start-conditie stuurt, zal dit frame door de peripheral
         weer als adresframe worden opgevat, en niet als nog een dataframe.
      </p>

      <h5>10-bit Adres</h5>
      <p>
         Om meer verschillende apparaten te kunnen ondersteunen is het mogelijk om 10 bits te gebruiken voor het adres.
         De controller verstuurt dan 2 adresframes in plaats van 1 adresframes. Het is mogelijk om 7 bits en 10 bits apparaten
         op dezelfde bus te hebben zonder problemen.
      </p>

      <h3>Visueel</h3>

      <div class="alert alert-warning">
         In de volgende voorbeelden is de SDA lijn opgesplitst. Dit is om duidelijk te maken welk apparaat de lijn omlaagtrekt.
         Let wel dat dit wel dezelfde verbinding is. De elektrische lijn zal naar laag getrokken worden als minimaal één
         van
         de apparaten deze naar laag trekt. De SCL lijn wordt alleen maar door de controller beïnvloedt.
      </div>

      <h4>Adres (7 bits)</h4>

      <WaveDrom fullwidth>
         {
         signal: [
         {
         name: 'SDA_Controller',
         wave: '10.4..4..4..4..4..4..4..3..1...',
         data: ['A6','A5','A4','A3','A2','A1','A0','RW']
         },
         {
         name: 'SCL',
         wave: '1.0.10.10.10.10.10.10.10.10.10.'
         },
         {
         name: 'SDA_Peripheral',
         wave: '1...........................01.',
         data: ['A6','A5','A4','A3','A2','A1','A0','RW']
         },
         {
         name: 'Betekenis',
         wave: 'x3.4....................5..6..x',
         data: ["START", "ADRES", "READ-WRITE", "ACK-NACK"]
         }
         ],
         config: {hscale: 1}
         }
      </WaveDrom>

      <p>
         In dit diagram zie je een standaard 7-bit adresframe. Afhankelijk van of de R/W bit 1 of 0 is, zal dit frame
         opgevolgd worden met een lees of een schrijf frame.
      </p>

      <h4>Adres (10 bits)</h4>

      <WaveDrom fullwidth>
         {
         signal: [
         {
         name: 'SDA_Controller',
         wave: '10.2..2..2..2..2..4..4..3..1...',
         data: ['1','1','1','1','0','A9','A8','RW']
         },
         {
         name: 'SCL',
         wave: '1.0.10.10.10.10.10.10.10.10.10.'
         },
         {
         name: 'SDA_Peripheral',
         wave: '1...........................01.',
         data: ['A6','A5','A4','A3','A2','A1','A0','RW']
         },
         {
         name: 'Betekenis',
         wave: 'x3.4....................5..6..x',
         data: ["START", "ADRES", "READ-WRITE", "ACK-NACK"]
         }
         ],
         config: {hscale: 1}
         }
      </WaveDrom>


      <hr>
      <WaveDrom fullwidth>
         {
         signal: [
         {
         name: 'SDA_Controller',
         wave: '10.4..4..4..4..4..4..4..4..1...',
         data: ['A7','A6','A5','A4','A3','A2','A1','A0']
         },
         {
         name: 'SCL',
         wave: '0...10.10.10.10.10.10.10.10.10.'
         },
         {
         name: 'SDA_Peripheral',
         wave: '1...........................01.',
         },
         {
         name: 'Betekenis',
         wave: 'x..4.......................6..x',
         data: [ "ADRES", "ACK-NACK"]
         }
         ],
         config: {hscale: 1}
         }
      </WaveDrom>
      <p>
         Deze twee frames worden verstuurd bij 10-bit adressering. De eerste 5 bits in het eerste frame moeten altijd
         11110 zijn. Hiermee geef je aan dat je aan 10-bit adressering doet. Als dit frame wordt gelezen als een
         7-bit adres geeft dit namelijk een ongeldig adres, waardoor peripherals niet per abuis reageren.
      </p>

      <p>
         Na deze twee frames volgt een data frame. Afhankelijk van de R/W bit is dit een lees of een schrijf dataframe.
      </p>


      <h4>Dataframe</h4>
      <h5>Schrijven</h5>
      <WaveDrom fullwidth>
         {
         signal: [
         {
         name: 'SDA_Controller',
         wave: '10.7..7..7..7..7..7..7..7..1...',
         data: ['D7','D6','D5','D4','D3','D2','D1','D0']
         },
         {
         name: 'SCL',
         wave: '0...10.10.10.10.10.10.10.10.10.'
         },
         {
         name: 'SDA_Peripheral',
         wave: '1...........................01.'
         },
         {
         name: 'Betekenis',
         wave: 'x..7.......................6..x',
         data: [ "DATA", "ACK-NACK"]
         }
         ],
         config: {hscale: 1}
         }
      </WaveDrom>

      <p>
         Dit is een standaard dataframe voor het verzenden van data van controller naar peripheral. Dit frame kan worden opgevolgd
         door nog een schrijfframe, of een schrijfframe met stopconditie. Er kan geen leesframe volgen na een schrijfframe.
      </p>

      <h5>Schrijven met stop-conditie</h5>
      <WaveDrom fullwidth>
         {
         signal: [
         {
         name: 'SDA_Controller',
         wave: '10.7..7..7..7..7..7..7..7..1..0.1.',
         data: ['D7','D6','D5','D4','D3','D2','D1','D0']
         },
         {
         name: 'SCL',
         wave: '0...10.10.10.10.10.10.10.10.10.1..'
         },
         {
         name: 'SDA_Peripheral',
         wave: '1...........................01....'
         },
         {
         name: 'Betekenis',
         wave: 'x..7.......................6..8..x',
         data: [ "DATA", "ACK-NACK", "STOP"]
         }
         ],
         config: {hscale: 1}
         }
      </WaveDrom>

      <p>
         Dit frame is grotendeels gelijk aan een normaal schrijfframe. Het enige verschil is dat de controller
         aan het einde <DefRef n="SDA" pin/> naar laagtrekt, vervolgens <DefRef n="SCL" pin/> omhoog trekt,
         en als laatste ook <DefRef n="SDA" pin/> weer hoog trekt om de stop-conditie te vormen. Na dit frame is
         de datatransmissie afgelopen.
      </p>

      <h5>Lezen</h5>
      <WaveDrom fullwidth>
         {
         signal: [
         {
         name: 'SDA_Controller',
         wave: '1...........................01.'
         },
         {
         name: 'SCL',
         wave: '0...10.10.10.10.10.10.10.10.10.'
         },
         {
         name: 'SDA_Peripheral',
         wave: '1..7..7..7..7..7..7..7..7..1...',
         data: ['D7','D6','D5','D4','D3','D2','D1','D0']
         },
         {
         name: 'Betekenis',
         wave: 'x..7.......................6..x',
         data: [ "DATA", "ACK-NACK"]
         }
         ],
         config: {hscale: 1}
         }
      </WaveDrom>
      <p>
         Dit is een standaard leesframe voor het lezen van data vanuit een peripheral. Dit frame kan alleen gevolgd worden
         door een leesframe (met of zonder stop-conditie)
      </p>

      <h5>Lezen met Stop-conditie</h5>
      <WaveDrom fullwidth>
         {
         signal: [
         {
         name: 'SDA_Controller',
         wave: '1...........................0...1.'
         },
         {
         name: 'SCL',
         wave: '0...10.10.10.10.10.10.10.10.10.1..'
         },
         {
         name: 'SDA_Peripheral',
         wave: '1..7..7..7..7..7..7..7..7..1......',
         data: ['D7','D6','D5','D4','D3','D2','D1','D0']
         },
         {
         name: 'Betekenis',
         wave: 'x..7.......................6..8..x',
         data: [ "DATA", "ACK-NACK", "STOP"]
         }
         ],
         config: {hscale: 1}
         }
      </WaveDrom>
      <p>
         Ook bij leesframes verandert er niet veel door de stop-conditie. De controller houdt na de ACK de <DefRef n="SDA" pin/>-lijn langer
         omlaag, trekt dan <DefRef n="SCL" pin/> omhoog, en trekt als laatste ook <DefRef n="SDA" pin/> weer omhoog. Na dit frame
         is de datatransmissie afgelopen.
      </p>





      <hr class="spacer">

      <h2>Uitdagingen</h2>
      <table class="table table-striped">
         <tbody>
         <tr>
            <th scope="row">Synchronisatie</th>
            <td>
               Bij I2C wordt de snelheid door de controller bepaald, door middel van het <DefRef n="SCL" pin/>-signaal.
               De enige voorwaarde is dat de peripheral zelf een kloksnelheid heeft, die snel genoeg is om de data
               te verwerken. Vaak is de maximum SPI-snelheid van een onderdeel aangegeven in de datasheet.
            </td>
         </tr>
         <tr>
            <th scope="row">Integriteit</th>
            <td>
               Door middel van de ACK bit kan de peripheral aangeven of een transmissie volledig is overgekomen. Als dit niet het geval
               is kan de controller de transmissie opnieuw starten. Dit beschermt niet tegen informatie die verkeerd overkomt.
            </td>
         </tr>
         <tr>
            <th scope="row">Apparaatscheiding</th>
            <td>
               Bij I2C zitten alle apparaten op dezelfde bus aangesloten. Een controller geeft aan door middel van 1 of 2
               adresframes met welke peripheral hij wil praten
            </td>
         </tr>
         <tr>
            <th scope="row">Initiatief</th>
            <td>
               Het initiatief van een transmissie kan bij elk apparaat liggen. Vanaf dat moment tot het einde van de transmissie
               is dit apparaat de controller, en geeft deze de transmissiesnelheid aan door middel van <DefRef n="SCL" pin/>
            </td>
         </tr>
         </tbody>
      </table>

   </div>
</template>

<script>
import titleMixin from "@/components/Helpers/titleMixin";
import DefRef from "@/components/Helpers/DefRef";
import WaveDrom from "@/components/Helpers/WaveDrom";

export default {
   name: "I2CCommunication",
   title: "I2C",
   components: {
      DefRef,
      WaveDrom
   },
   mixins: [titleMixin]
}
</script>

<style scoped>
.spimode-table tr > * {
   text-align: center;
}

</style>