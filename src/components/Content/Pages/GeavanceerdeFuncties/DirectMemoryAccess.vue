<template>
   <div>


   </div>
</template>

<script>
import titleMixin from "@/components/Helpers/titleMixin";
import DefRef from "@/components/Helpers/DefRef";

export default {
   name: "DirectMemoryAccess",
   title: "DMA",
   components: {
      DefRef
   },
   mixins: [titleMixin]
}
</script>

<style scoped>
.spimode-table tr > * {
   text-align: center;
}

</style>