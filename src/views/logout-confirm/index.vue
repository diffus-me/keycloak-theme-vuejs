<template>
  <layout>
    <v-container class="form-header-container pa-0">
      <div class="form-header-logo">
        <v-img height="36" :src="getLogo('main-logo')"></v-img>
      </div>
      <h2 class="text-secondary form-header-title">
        {{ titles.logoutConfirmTitle }}
      </h2>
      <h4 class="form-text-subtitle form-header-subtitle font-weight-regular">
        {{ labels.logoutConfirmHeader}}
      </h4>
    </v-container>
    <Form
      :action="getUrl(urls.logoutConfirmAction)"
      method="post"
      class="mt-7 signup-form"
      v-slot="{ isSubmitting }"
    >
      <input type="hidden" name="session_code" :value="forms.logoutConfirmCode" style="display: none"/>
      <v-btn
        color="secondary"
        :loading="isSubmitting"
        block
        class="mt-2"
        variant="flat"
        size="large"
        type="submit"
        name="confirmLogout"
        :value="labels.doLogout"
        id="kc-logout"
      >
        {{ labels.doLogout }}</v-btn
      >
      <div v-if="message.sumary" class="mt-2">
        <v-alert :type="message.type" :text="message.sumary" closable variant="tonal" />
      </div>
    </Form>
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
import { Form } from 'vee-validate'

export default defineComponent({
  name: 'LogoutConfirm',
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
