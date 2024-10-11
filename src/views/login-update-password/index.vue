<template>
  <layout>
    <v-container class="form-header-container pa-0">
      <div class="form-header-logo">
        <v-img height="36" :src="getLogo('main-logo')"></v-img>
      </div>
      <h2 class="text-secondary form-header-title">
        {{ titles.updatePasswordTitle }}
      </h2>
      <h4 class="form-text-subtitle form-header-subtitle">
        Enter your new password below
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
        name="password-new"
        id="password-new"
        type="password"
        :label="labels.passwordNew"
        class="mt-4 mb-4"
        required
        enable-pwd-text-toggle
      >
      </text-input>
      <text-input
        name="password-confirm"
        id="password-confirm"
        type="password"
        :label="labels.passwordConfirm"
        required
        enable-pwd-text-toggle
      >
      </text-input>
      <input
        type="hidden"
        name="credentialId"
        :value="forms.selectedCredential"
        style="display: none"
      />

      <div
        class="d-sm-inline-flex align-center mt-2 mb-7 mb-sm-0 font-weight-bold"
      >
        <v-checkbox
          v-model="signoutOtherSession"
          name="logout-sessions"
          label="Sign out from other devices?"
          color="primary"
          class="ms-n2"
          hide-details
          value="on"
        ></v-checkbox>
      </div>
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
        <v-alert
          :type="message.type"
          :text="message.sumary"
          closable
          variant="tonal"
        />
      </div>
      <div
        v-for="fieldError in fieldErrors"
        :key="fieldError.field"
        class="mt-2"
      >
        <v-alert
          type="error"
          :text="fieldError.message"
          closable
          variant="tonal"
        />
      </div>
    </Form>
  </layout>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Layout from '~/components/Layout.vue'
import TextInput from '~/components/TextInput.vue'
import { useLogin } from '~/hooks'
import { extractFieldsErros } from '~/utils/common'
import { ref } from 'vue'
import { Form } from 'vee-validate'
import * as Yup from 'yup'
import YupPassword from 'yup-password'
YupPassword(Yup)

export default defineComponent({
  name: 'LoginUpdatePassword',
  components: {
    Layout,
    Form,
    TextInput,
  },
  setup() {
    const defaultValues = useLogin()
    const redirectTo = (url: string) => {
      window.location.href = url
    }
    const baseSchema = {
      'password-new': Yup.string()
        .min(8)
        .minLowercase(1, 'password must contain at least 1 lower case letter')
        .minUppercase(1, 'password must contain at least 1 upper case letter')
        .minNumbers(1, 'password must contain at least 1 number')
        .minSymbols(1, 'password must contain at least 1 special character')
        .required(),
      'password-confirm': Yup.string()
        .oneOf([Yup.ref('password-new'), ''], 'Passwords must match')
        .required("Password confirmation can't be empty"),
    }
    const fieldErrors = extractFieldsErros(defaultValues.validations.value)
    return {
      ...defaultValues,
      schema: Yup.object().shape(baseSchema),
      signoutOtherSession: ref("on"),
      fieldErrors: fieldErrors,
      redirectTo
    }
  },
  mounted() {}
})
</script>
