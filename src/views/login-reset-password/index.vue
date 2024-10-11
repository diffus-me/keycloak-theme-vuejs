<template>
  <layout>
    <v-container class="form-header-container pa-0">
      <div class="form-header-logo">
        <v-img height="36" :src="getLogo('main-logo')"></v-img>
      </div>
      <h2 class="text-secondary form-header-title">
        {{ titles.emailForgotTitle }}
      </h2>
      <h4 class="form-text-subtitle form-header-subtitle font-weight-regular">
        Enter your email address below and we'll send you password reset
        instructions.
      </h4>
    </v-container>
    <Form
      :validation-schema="schema"
      :action="getUrl(urls.loginAction)"
      method="post"
      class="mt-7 signup-form"
      v-slot="{ isSubmitting }"
    >
      <text-input
        name="username"
        type="text"
        :label="getUsernameLabel()"
        class="mt-4 mb-8"
        required
        :value="forms.loginUsername"
      >
      </text-input>
      <v-btn
        color="secondary"
        :loading="isSubmitting"
        block
        class="mt-2"
        variant="flat"
        size="large"
        type="submit"
      >
        {{ labels.doSubmit }}</v-btn
      >
      <div v-if="message.sumary" class="mt-2">
        <v-alert :type="message.type" :text="message.sumary" closable variant="tonal" />
      </div>
      <div v-for="fieldError in fieldErrors" :key="fieldError.field" class="mt-2">
        <v-alert type="error" :text="fieldError.message" closable variant="tonal" />
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
import TextInput from '~/components/TextInput.vue'
import { useLogin } from '~/hooks'
import { Form } from 'vee-validate'
import * as Yup from 'yup'
import { extractFieldsErros } from '~/utils/common'

export default defineComponent({
  name: 'ResetPassword',
  components: {
    Layout,
    Form,
    TextInput
  },
  setup() {
    const defaultValues = useLogin()
    const redirectTo = (url: string) => {
      window.location.href = url
    }
    const fieldErrors = extractFieldsErros(defaultValues.validations.value);
    return {
      ...defaultValues,
      schema: Yup.object().shape({
        username: Yup.string().email().required()
      }),
      fieldErrors: fieldErrors,
      redirectTo
    }
  },
  mounted() {}
})
</script>
