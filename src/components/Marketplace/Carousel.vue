<template>
    <div class="q-pa-md no-padding">
      <q-carousel 
        arrows
        animated
        v-model="slide"
        height="400px"
        width="100%"
      >
        <q-carousel-slide name="first" img-src="../../assets/girl2.jpg" >
          <div class="absolute-bottom custom-caption">
            <div class="text-h2">WANT TO BUY HANDICRAFTS?</div>
            <div class="text-subtitle1">LOWEST PRODUCT FARES ARE HERE...</div>
            <q-btn
          color="white"
          text-color="black"
          label="SHOP NOW"
          size="70%"
          class="text-weight-bold"
        />
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="second" img-src="https://cdn.quasar.dev/img/parallax1.jpg" >
          <div class="absolute-bottom custom-caption">
            <div class="text-h2">Second stop</div>
            <div class="text-subtitle1">Famous City</div>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  
  export default {
    name: 'CarouselElement',
    setup () {
      return {
        slide: ref('first')
      }
    }
  }
  </script>
  
  <style lang="sass" scoped>
  .custom-caption
    text-align: center
    padding: 12px
    color: white
    background-color: rgba(0, 0, 0, .3)

.no-padding 
  padding: 0
  margin: 0


  </style>
  