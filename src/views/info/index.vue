<template>
  <layout>
    <v-container class="form-header-container pa-0">
      <div class="form-header-logo">
        <v-img height="36" :src="getLogo('main-logo')"></v-img>
      </div>
      <h2 class="text-secondary form-header-title">
        {{ titles.messageHeader }}
      </h2>
      <h4 v-if="titles.messageHeader != message.sumary" class="text-disabled form-header-subtitle font-weight-regular">
        {{ message.sumary }}
      </h4>
    </v-container>
    <div v-for="(action, i) in actions" :key="i" class="mt-2">
      <v-alert type="info" :text="action" closable variant="tonal" />
    </div>
    <div v-if="urls.clientBaseUrl" class="mt-5 text-right">
      <v-divider />
      <v-btn
        variant="plain"
        class="mt-2 text-capitalize mr-n2"
        @click="redirectTo(getUrl(urls.clientBaseUrl))"
        >{{ labels.backToApplication }}</v-btn
      >
    </div>
  </layout>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Layout from '~/components/Layout.vue'
import { useLogin } from '~/hooks'

export default defineComponent({
  name: 'Info',
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
