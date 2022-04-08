<template>
    <div>
        <h1>Digitale logica</h1>
        <hr>

        <p>
            Tijdens het programmeren van microcontrollers zal je veel gebruik maken van digitale signalen. Hierbij wordt er bij
            het meten maar één waarde gemeten: Of het signaal <span class="emph">hoog</span> of <span class="emph">laag</span> is.
        </p>

        <h4>Hoog/Laag</h4>

        <p>
            Wat een hoog of laag signaal is, is afhankelijk van het systeem, maar over het algemeen geldt dat een laag signaal op hetzelfde
            spanningsniveau zit als de GROUND van de schakeling, en een hoog signaal op een hogere waarde zit. In STM32 processoren
            is het <DefRef n="logic level"/> meestal gelijk aan 3.3V. Dan is een laag signaal dus 0V, en een hoog signaal 3.3V (ten opzichte van GND).
        </p>

        <p>
            Wanneer je een pin op een microcontroller instelt als <DefRef n="input pin"/>, zal je bij het uitlezen in je programma een waarde terugkrijgen van
            1 (hoog) of 0 (laag).
        </p>

        <h4>Floating</h4>
        <p>
            Wat nou als een pin niet actief is aangestuurd naar hoog of laag? Dit kan bijvoorbeeld gebeuren als een draadje niet aangesloten is, of als een onderdeel
            in de schakeling kapot is. We spreken dan van een <DefRef n="floating pin"/>. Deze geven vaak problemen in schakelingen die heel lastig
            te debuggen zijn. Loop dus altijd goed je schakelingen en instellingen na om te controleren of dit het geval is.
        </p>

        <p>
            De reden dat het debuggen van een <DefRef n="floating pin"/> erg lastig is, is omdat het gedrag van je schakeling erg onvoorstelbaar wordt.
            Je zou verwachten dat een niet aangesloten pin altijd een lage waarde meegeeft maar dit is niet zo. In de praktijk hebben floating pins heel erg "last"
            van de omgeving. Als jij bijvoorbeeld statisch geladen bent, en met je hand dichtbij een floating pin komt, is er een goede kans dat deze ineens een andere
            meetwaarde heeft dan eerst.
        </p>




    </div>
</template>

<script>

    import DefRef from "@/components/Helpers/DefRef";
    import titleMixin from "@/components/Helpers/titleMixin";

    export default {
        name: "DigitaleLogica",
        components: {
            DefRef
        },
       title: "Digitale Logica",
       mixins: [titleMixin]
    }
</script>

<style scoped>

</style>