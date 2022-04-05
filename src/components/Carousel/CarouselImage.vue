<template>
    <div class="carousel-item">
        <img :src="src" class="carousel-image" :alt="alt">

        <div class="carousel-caption d-none d-md-block" >
            <h5>{{title}}</h5>
            <p>
                <slot></slot>
            </p>
        </div>

    </div>

</template>

<script>
    export default {
        name: "CarouselImage",
        props: {
            src: String,
            alt: String,
            title: String,
            active: Boolean
        }
    }
</script>

<style scoped>
    .carousel-image {
        display:block;
        width: 80%;
        margin-left: 10%;
        min-height: 300px;
    }
    .carousel-item {
        min-height: 500px
    }
    .carousel-caption {
        background: rgba(00, 00, 00, 0.8);
        color: white;
    }
</style>