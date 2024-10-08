<template>
  <layout>
    <v-container class="form-header-container">
      <div class="form-header-logo">
        <v-img height="36" :src="getLogo('main-logo')"></v-img>
      </div>
      <h2 class="text-secondary form-header-title">
        {{ titles.confirmLinkIdpTitle }}
      </h2>
      <h4 class="text-disabled form-header-subtitle font-weight-regular">
        Please check your email inbox for further instructions.
      </h4>
    </v-container>
    <Form
      :action="getUrl(urls.loginAction)"
      method="post"
      class="mt-7 signup-form"
      v-slot="{ isSubmitting }"
    >
      <v-btn
        color="secondary"
        :loading="isSubmitting"
        block
        class="mt-2"
        variant="flat"
        size="large"
        type="submit"
        name="submitAction"
        value="linkAccount"
      >
        {{ labels.confirmLinkIdpContinue }}</v-btn
      >
      <div v-if="message.sumary" class="mt-2">
        <v-alert :type="message.type" :text="message.sumary" closable variant="tonal" />
      </div>
    </Form>
    <div class="mt-5 text-right">
      <v-divider />
      <v-btn
        variant="plain"
        class="mt-2 text-capitalize mr-n2"
        @click="redirectTo(getUrl(urls.login))"
        >{{ labels.backToLogin }}</v-btn
      >
    </div>
  </layout>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Layout from '~/components/Layout.vue'
import { useLogin } from '~/hooks'
import { Form } from 'vee-validate'

export default defineComponent({
  name: 'LoginIdpLinkConfirm',
  components: {
    Layout,
    Form,
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
  mounted() {
  }
})
</script>
