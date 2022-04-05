<template>
    <div class="col-8">
        <h1>Seriële communicatie</h1>
        <hr>
        <p>
            Een enkel hoog/laag signaal is prima als je alleen een enkel onderdeel aan of uit wil zetten, zoals een LED,
            maar zodra je meer data wil overdragen
            zal dit al gauw niet meer genoeg zijn. Hiervoor wordt meestal seriële communicatie gebruikt. Hierbij wordt
            de data opgedeeld in een aantal
            bits, die vervolgens één voor één op de pin/draad worden verstuurd. Voor seriële communicatie zijn een
            aantal standaarden, die aangeven
            op welke manier deze data verstuurd word.
        </p>

        <p>
            Tijdens het versturen van data moet je rekening houden met een aantal aanpassingen. Door gewoon signalen op
            een draad
            te zetten zul je namelijk tegen een aantal problemen aanlopen.
        </p>
        <ul>
            <li>
                <span class="emph">Synchronisatie</span> Hoe weet je de snelheid waarmee de communicatie zal plaatsvinden? Als
                wij per seconde 4 bits versturen,
                maar de chip aan de andere kant leest 8 keer per seconde een bitje uit, dan zal de data aan de andere
                kant
                onbruikbaar zijn.
            </li>
            <li><span class="emph">Integriteit</span>
                Hoe weten we dat de data correct is overgekomen? Als er een signaalstoring is, of één chip valt tijdens
                de transmissie uit, moeten we kunnen bevestigen
                dat de data goed is overgekomen.
            </li>
            <li>
                <span class="emph">Apparaatscheiding</span>
                Vaak wil je meerdere chips aansluiten op je microcontroller. Hoe kan je dit snel doen, zonder dat je voor
                elke chip een aantal extra pins op je microcontroller nodig hebt?
            </li>
            <li>
                <span class="emph">Initiatief</span>
                Als twee chips tegelijkertijd op dezelfde verbinding aan het "praten" zijn, zal er niks van de data te maken zijn, en mogelijk
                ontstaat er zelfs kortsluiting. Hoe zorg je dat dit niet gebeurt.
            </li>
        </ul>




        <hr class="spacer">
        <div>
            <h2>UART</h2>


            <h3>Eigenschappen</h3>


            <WaveDrom>
                { signal: [
                { name: "pclk", wave: 'p.......' },
                { name: "Pclk", wave: 'P.......' },
                { name: "nclk", wave: 'n.......' },
                { name: "Nclk", wave: 'N.......' },
                {},
                { name: 'clk0', wave: 'phnlPHNL' },
                { name: 'clk1', wave: 'xhlhLHl.' },
                { name: 'clk2', wave: 'hpHplnLn' },
                { name: 'clk3', wave: 'nhNhplPl' },
                { name: 'clk4', wave: 'xlh.L.Hx' },
                ]}
            </WaveDrom>
        </div>


    </div>
</template>

<script>
    import WaveDrom from "@/components/Helpers/WaveDrom";

    export default {
        name: "SerialCommunication",
        components: {
            WaveDrom
        }
    }
</script>

<style scoped>

</style>