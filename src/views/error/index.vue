<template>
  <layout>
    <v-container class="form-header-container pa-0">
      <div class="form-header-logo">
        <v-img height="36" :src="getLogo('main-logo')"></v-img>
      </div>
      <h2 class="text-secondary form-header-title">
        {{ titles.errorTitle }}
      </h2>
      <h4 class="text-disabled form-header-subtitle font-weight-regular">
        {{ message.sumary }}
      </h4>
    </v-container>
    <div class="mt-5 text-right">
      <v-divider />
      <v-btn
        v-if="urls.clientBaseUrl"
        variant="plain"
        class="mt-2 text-capitalize mr-n2"
        @click="redirectTo(getUrl(urls.clientBaseUrl))"
        >{{ labels.backToApplication }}</v-btn
      >
      <v-btn
        v-else
        variant="plain"
        class="mt-2 text-capitalize mr-n2"
        @click="redirectTo(getUrl(urls.loginRestartFlowUrl))"
        >{{ labels.backToLogin }}</v-btn
      >
    </div>
  </layout>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Layout from '~/components/Layout.vue'
import { useLogin } from '~/hooks'

export default defineComponent({
  name: 'Error',
  components: {
    Layout
  },
  setup() {
    const defaultValues = useLogin()
    const redirectTo = (url: string) => {
      window.location.href = url
    }
    return {
      ...defaultValues,
      redirectTo,
    }
  },
  mounted() {}
})
</script>
