<template>
  <layout>
    <v-container class="form-header-container pa-0">
      <div class="form-header-logo">
        <v-img height="36" :src="getLogo('main-logo')"></v-img>
      </div>
      <h2 class="text-secondary form-header-title">
        {{ titles.emailLinkIdpTitle }}
      </h2>
      <p class="text-disabled font-weight-regular">
        {{ instruction.emailLinkIdp1 }}
      </p>
      <p class="text-disabled font-weight-regular">
        {{ instruction.emailLinkIdp2 }}
        <a :href="getUrl(urls.loginAction)">{{ labels.doClickHere }}</a>
        {{ instruction.emailLinkIdp3 }}
      </p>
      <p class="text-disabled font-weight-regular">
        {{ instruction.emailLinkIdp4 }}
        <a :href="getUrl(urls.loginAction)">{{ labels.doClickHere }}</a>
        {{ instruction.emailLinkIdp5 }}
      </p>
    </v-container>
    <div v-if="message.sumary" class="mt-2">
      <v-alert
        :type="message.type"
        :text="message.sumary"
        closable
        variant="tonal"
      />
    </div>
  </layout>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Layout from '~/components/Layout.vue'
import { useLogin } from '~/hooks'

export default defineComponent({
  name: 'LoginIdpLinkEmail',
  components: {
    Layout
  },
  setup() {
    return useLogin()
  },
  mounted() {
    console.log('LoginIdpLinkEmail')
  }
})
</script>
