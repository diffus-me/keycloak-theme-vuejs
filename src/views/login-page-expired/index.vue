<template>
  <layout>
    <v-container class="form-header-container pa-0">
      <div class="form-header-logo">
        <v-img class="main-logo-image" :src="getLogo('main-logo')"></v-img>
      </div>
      <h2 class="text-secondary form-header-title">
        {{ titles.pageExpiredTitle }}
      </h2>
      <h4 class="form-text-subtitle form-header-subtitle font-weight-regular">
        Your session has expired. Please decide what you would like to do next
      </h4>
    </v-container>
    <v-row class="mt-7">
      <v-btn
        color="secondary"
        class="mt-2"
        variant="flat"
        size="large"
        @click="redirectTo(getUrl(urls.loginRestartFlowUrl))"
      >
        {{ instruction.pageExpiredMsg1 }}</v-btn
      >
      <v-spacer></v-spacer>
      <v-btn
        color="secondary"
        class="mt-2"
        variant="flat"
        size="large"
        @click="redirectTo(getUrl(urls.loginAction))"
      >
        {{ instruction.pageExpiredMsg2 }}</v-btn
      >
    </v-row>
  </layout>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Layout from '~/components/Layout.vue'
import { useLogin } from '~/hooks'

export default defineComponent({
  name: 'ResetPassword',
  components: {
    Layout,
  },
  setup() {
    const defaultValues = useLogin()
    const redirectTo = (url: string) => {
      window.location.href = url
    }
    return {
      ...defaultValues,
      redirectTo
    }
  },
  mounted() {}
})
</script>
