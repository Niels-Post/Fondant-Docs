<template>
    <div class="carousel slide" data-bs-wrap="false" :id="carousel_id" data-bs-interval="false">
        <div class="carousel-indicators" ref="carouselIndicators">

        </div>
        <div class="carousel-inner" ref="carouselSlot">
            <slot></slot>
        </div>
        <button class="carousel-control-prev" type="button"  :data-bs-target="`#${carousel_id}`" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" :data-bs-target="`#${carousel_id}`" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<script>
    import {Carousel} from "bootstrap";

    let current_id = 0;

    export default {
        name: "ImageCarousel",
        data() {
            return {
                carousel_index: 0,
                carousel_object: null
            }
        },
        computed: {
            carousel_id() {
                return `carousel_i_${this.carousel_index}`
            }
        },
        mounted() {
            this.carousel_index = current_id
            current_id += 1
            console.log(this.$refs.carouselSlot.children)
            let i =0;
            for(let carouselItem of this.$refs.carouselSlot.children) {
                console.log(carouselItem)
                if(i === 0) {
                    carouselItem.classList.add("active");
                }
                this.$refs.carouselIndicators.innerHTML += `<button type="button" ${i===0 ? "class='active'":""} data-bs-target="#${this.carousel_id}" data-bs-slide-to="${i}" aria-label="Slide ${i}"></button>`
                i++;
            }

            this.carousel_object = new Carousel(document.getElementById(this.carousel_id), {
                interval: false
            })
        }
    }
</script>

<style scoped>
    .carousel {
        background: rgba(0,0,0,0.8);
        border-radius: 10px;
        padding-top: 25px;
        padding-bottom: 25px;
    }
</style>