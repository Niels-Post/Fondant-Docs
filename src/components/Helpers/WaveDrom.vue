<template>
    <div >
       <object  :class="widthClasses" :data="wavedrom_url"></object>
        <div class="hidden" ref="wavedrom_script">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "WaveDrom",
        data() {
            return {
                wavedrom_url: ""
            }
        },
       props: {
            fullwidth: Boolean
       },
       computed: {
            widthClasses() {
               return {
                  'col-12': true,
                  'col-xl-8': !this.fullwidth
               }
            }
       },
        mounted() {
            let content = this.$refs.wavedrom_script.innerHTML;

            this.wavedrom_url = `https://svg.wavedrom.com/${encodeURIComponent(content)}`;
        }
    }
</script>

<style scoped>
    .hidden {
        display: none;
    }
</style>