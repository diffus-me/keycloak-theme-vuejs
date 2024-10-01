<script setup lang="ts">
import { ref } from 'vue'

type slideType = {
  title: string
  description: string
}

const slides = ref<slideType[]>([
  {
    title: 'A suite of powerful tools to grow your business',
    description:
      'From tracking to reporting, we have everything you need to manage your business'
  },
  {
    title: 'Automate growth with AI',
    description:
      'State of the art AI models to make sure you are ahead of the competition'
  },
  {
    title: 'Beautiful and easy to use',
    description:
      'Our tools are designed to be easy to use and beautiful to look at'
  }
])
</script>
<template>
  <v-carousel
    color="darkText"
    cycle
    height="190"
    hide-delimiter-background
    class="custom-delimiter"
    :show-arrows="false"
  >
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <div class="text-center">
        <h1 class="custom-slider-header">{{ slide.title }}</h1>
        <p class="text-subtitle-1 custom-slider-subheader">
          {{ slide.description }}
        </p>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<style lang="scss">
.custom-slider-header {
  font-size: 2.125rem !important;
  font-weight: 700;
  line-height: 3.5rem;
  letter-spacing: -0.015625em !important;
  font-family: inherit;
  text-transform: none !important;
  color: #ffffff !important;
}
.custom-slider-subheader {
  color: #e6e6e6cc !important;
}
.custom-delimiter {
  .v-btn {
    font-size: 5px;
    color: #ffffff !important;
  }
}
</style>
