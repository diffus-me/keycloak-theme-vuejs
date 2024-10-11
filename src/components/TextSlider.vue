<script setup lang="ts">
import { ref } from 'vue'
import { slideType } from '~/types/common';
import { useConfig } from '~/hooks';

const { slides } = useConfig();

const slideItems = ref<slideType[]>(slides);
</script>
<template>
  <v-carousel cycle height="190" hide-delimiter-background class="custom-delimiter"
    :show-arrows="false">
    <v-carousel-item v-for="(slide, i) in slideItems" :key="i">
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
  color: rgba(var(--v-theme-carousel-title-color)) !important;
}

.custom-slider-subheader {
  color: #e6e6e6cc !important;
  color: rgba(var(--v-theme-carousel-subtitle-color)) !important;
}

.custom-delimiter {
  .v-btn {
    font-size: 5px;
    color: rgba(var(--v-theme-carousel-dot-color)) !important;
  }
}
</style>
