<template>
  <layout>
    <v-container class="form-header-container pa-0">
      <div class="form-header-logo">
        <v-img height="36" :src="getLogo('main-logo')"></v-img>
      </div>
      <h2 class="text-secondary form-header-title">
        {{ titles.emailVerifyTitle }}
      </h2>
      <h4 class="form-text-subtitle form-header-subtitle font-weight-regular">
        {{ instruction.emailVerifyInstruction1 }} {{ user.email }}.
      </h4>
    </v-container>
    <div class="mt-7">
      <div class="my-4 font-weight-regular text-medium-emphasis" v-html="getHint()">
      </div>
      <div v-if="message.sumary" class="mt-2">
        <v-alert
          :type="message.type"
          :text="message.sumary"
          closable
          variant="tonal"
        />
      </div>
    </div>
    <div class="mt-5 text-right">
      <v-divider />
      <v-btn
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
  name: 'LoginVerifyEmail',
  components: {
    Layout
  },
  setup() {
    const defaultValues = useLogin()
    const redirectTo = (url: string) => {
      window.location.href = url
    }
    const getHint = (): string => {
      const hint1 = defaultValues.instruction.value.emailVerifyInstruction2
      const hint2 = defaultValues.instruction.value.emailVerifyInstruction3
      const loginLink = defaultValues.getUrl(defaultValues.urls.value.loginAction)
      const label = defaultValues.labels.value.doClickHere
      return `${hint1}<br /><a class="resent-code-link" href="${loginLink}">${label}</a> ${hint2}`
    }
    return {
      ...defaultValues,
      redirectTo,
      getHint
    }
  },
  mounted() {}
})
</script>
<style lang="scss">
.resent-code-link {
  color: rgb(var(--v-theme-secondary)) !important;
}
</style>
