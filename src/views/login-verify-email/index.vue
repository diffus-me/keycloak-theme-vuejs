<template>
  <layout>
    <v-container class="form-header-container pa-0">
      <div class="form-header-logo">
        <v-img height="36" :src="getLogo('main-logo')"></v-img>
      </div>
      <h2 class="text-secondary form-header-title">
        {{ titles.emailVerifyTitle }}
      </h2>
      <h4 class="text-disabled form-header-subtitle font-weight-regular">
        {{ instruction.emailVerifyInstruction1 }} {{ user.email }}.
      </h4>
    </v-container>
    <div class="mt-7">
      <div class="my-4 font-weight-regular text-medium-emphasis">
        <p v-html="instruction.emailVerifyInstruction2"></p>
        <br />
        <a :href="getUrl(urls.loginAction)">{{ labels.doClickHere }}</a>
        <p v-html="instruction.emailVerifyInstruction3"></p>
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
    Layout,
  },
  setup() {
    const redirectTo = (url: string) => {
      window.location.href = url
    }
    return {
      ...useLogin(),
      redirectTo
    }
  },
  mounted() {}
})
</script>
