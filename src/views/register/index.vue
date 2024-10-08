<template>
  <layout>
    <v-container class="form-header-container">
      <div class="form-header-logo">
        <v-img height="60" :src="getLogo('trackingly')"></v-img>
      </div>
      <h2 class="text-secondary form-header-title">Sign up</h2>
      <h4 v-if="false" class="text-disabled form-header-subtitle">
        {{ titles.registerTitle }}
      </h4>
    </v-container>
    <v-container v-if="social.length" class="ma-0 px-0 pt-5 pb-5">
      <v-btn
        v-for="item in social"
        :key="item.alias"
        block
        color="primary"
        variant="outlined"
        class="text-lightText mt-3 form-social-btn"
        @click="redirectTo(getUrl(item.loginUrl))"
      >
        <img
          :src="getIcon(item.alias)"
          :alt="item.displayName"
          style="height: 22px; width: 22px"
        />
        <span class="ml-2">Sign up with {{ item.displayName }}</span></v-btn
      >
    </v-container>
    <v-row v-if="social.length">
      <v-col class="d-flex align-center">
        <v-divider class="custom-devider" />
        <v-btn
          variant="outlined"
          class="orbtn"
          rounded="md"
          size="small"
          readonly
          >OR</v-btn
        >
        <v-divider class="custom-devider" />
      </v-col>
    </v-row>
    <h5 v-if="social.length" class="form-sign-title-hint text-center my-4 mb-8">
      Sign up with email address
    </h5>
    <Form
      :validation-schema="schema"
      :action="getUrl(urls.registrationAction)"
      method="post"
      class="mt-7 signup-form"
      v-slot="{ isSubmitting }"
    >
      <v-row>
        <v-col cols="12" sm="6">
          <text-input
            name="firstName"
            type="text"
            :label="labels.firstName"
            :value="forms.registerFirstName"
          >
          </text-input>
        </v-col>
        <v-col cols="12" sm="6">
          <text-input
            name="lastName"
            type="text"
            :label="labels.lastName"
            :value="forms.registerLastName"
          >
          </text-input>
        </v-col>
      </v-row>
      <text-input
        name="email"
        type="text"
        :label="labels.email"
        class="mt-4 mb-4"
        required
        :value="forms.registerEmail"
      >
      </text-input>
      <text-input
        v-if="!permissions.registrationEmailAsUsername"
        name="username"
        type="text"
        :label="labels.username"
        class="mt-4 mb-4"
        required
        :value="forms.registerUsername"
      >
      </text-input>
      <text-input
        name="password"
        type="password"
        :label="labels.password"
        class="mt-4 mb-4"
        required
        enable-pwd-text-toggle
      >
      </text-input>
      <text-input
        name="password-confirm"
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
          v-model="agreeTerms"
          name="terms_and_conditions"
          :rules="[(v: any) => !!v || 'You must agree to continue!']"
          label="Agree with?"
          required
          color="primary"
          class="ms-n2"
          hide-details
        ></v-checkbox>
        <a href="#" class="ml-1 text-lightText">Terms and Condition</a>
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
        {{ labels.doRegister }}</v-btn
      >
      <div v-if="message.sumary" class="mt-2">
        <v-alert :color="message.type">{{ message.sumary }}</v-alert>
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
import { ref } from 'vue'
import { Form } from 'vee-validate'
import * as Yup from 'yup'

export default defineComponent({
  name: 'Register',
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
    const baseSchema = {
      firstName: Yup.string().default(''),
      lastName: Yup.string().default(''),
      email: Yup.string().email().required(),
      password: Yup.string().min(8).required(),
      'password-confirm': Yup.string()
        .oneOf([Yup.ref('password'), ''], 'Passwords must match')
        .required("Password confirmation can't be empty"),
      terms_and_conditions: Yup.boolean().oneOf(
        [true],
        'You must agree to continue!'
      ),
      username: Yup.string().notRequired()
    }
    if (!defaultValues.permissions.value.registrationEmailAsUsername) {
      baseSchema.username = Yup.string().min(5).required()
    }
    return {
      ...defaultValues,
      schema: Yup.object().shape(baseSchema),
      agreeTerms: ref(false),
      redirectTo
    }
  },
  mounted() {}
})
</script>
