<template>
  <v-row class="h-screen" no-gutters>
    <!---Left Part-->
    <v-col
      cols="12"
      lg="6"
      xl="5"
      class="d-flex align-center"
      style="background-color: #eef2f6 !important"
    >
      <PerfectScrollbar class="d-flex align-center">
        <v-container>
          <div class="pa-0 pa-sm-12">
            <v-row justify="center">
              <v-col cols="12" lg="10" xl="8" md="9">
                <v-card elevation="0" class="loginBox">
                  <v-card variant="outlined" class="formBox">
                    <v-card-text class="pa-9">

                      <!---Left Part Form-->
                      <slot></slot>
                      <!---Left Part Form-->
                    </v-card-text>
                  </v-card>
                </v-card>
              </v-col>
            </v-row>
          </div>
        </v-container>
      </PerfectScrollbar>
    </v-col>
    <!---Left Part-->
    <!---Right Part-->
    <v-col
      cols="12"
      lg="6"
      xl="7"
      class="d-none d-lg-flex align-end justify-center bgpattern position-relative"
    >
      <v-container>
        <div class="pa-10">
          <v-row justify="center">
            <v-col cols="12" xl="11">
              <div class="cardAnimation" />
              <text-slider />
            </v-col>
          </v-row>
        </div>
      </v-container>
    </v-col>
    <!---Right Part-->
  </v-row>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import TextSlider from './TextSlider.vue'
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/style.css';

export default defineComponent({
  name: 'Layout',
  components: {
    TextSlider,
    PerfectScrollbar
  },
  setup() {}
})
</script>
<style lang="scss">
@import '~/src/scss/base/variables';
.loginBox {
  max-width: 475px;
  margin: 0 auto;
  border-radius: 12px !important;
}
.formBox {
  border-radius: 12px !important;
  border-width: 0 !important;
}
.bgpattern {
  background: $main-background;
  background-size: cover;
}
.ps {
  width: 100%;
  height: 100vh;
}
</style>
