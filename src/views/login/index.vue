<template>
  <layout>
    <v-container class="form-header-container">
      <div class="form-header-logo">
        <v-img height="60" :src="getLogo('trackingly')"></v-img>
      </div>
      <h2 class="text-secondary form-header-title">Hi, Welcome Back</h2>
      <h4 class="text-disabled form-header-subtitle">
        {{ titles.loginAccountTitle }}
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
        <span class="ml-2">Sign in with {{ item.displayName }}</span></v-btn
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
      Sign in with Email address
    </h5>
    <!--<div v-if="message.sumary" :class="`alert-${message.type}`">
      <span v-html="getIcon(message.type)"></span>
      <span>{{ message.sumary }}</span>
    </div>-->
    <Form
      :validation-schema="schema"
      :action="getUrl(urls.loginAction)"
      method="post"
      class="mt-7 login-form"
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
      <text-input
        name="password"
        type="password"
        :label="labels.password"
        class="pwdInput"
        required
        enable-pwd-text-toggle
      >
      </text-input>

      <div class="d-sm-flex align-center mt-2 mb-7 mb-sm-0">
        <v-checkbox
          v-if="permissions.rememberMe && !permissions.usernameEditDisabled"
          v-model="rememberMe"
          name="rememberMe"
          label="Remember me?"
          color="primary"
          class="ms-n2"
          hide-details
        ></v-checkbox>
        <div v-if="permissions.resetPasswordAllowed" class="ml-auto">
          <a
            :href="getUrl(urls.loginResetCredentials)"
            class="text-primary text-decoration-none"
            >Forgot password?</a
          >
        </div>
      </div>
      <input
        type="hidden"
        name="credentialId"
        :value="forms.selectedCredential"
        style="display: none"
      />
      <v-btn
        color="secondary"
        :loading="isSubmitting"
        block
        class="mt-2"
        variant="flat"
        size="large"
        type="submit"
      >
        {{ labels.doLogIn }}</v-btn
      >
      <div v-if="message.sumary" class="mt-2">
        <v-alert :type="message.type" :text="message.sumary" closable variant="tonal" />
      </div>
    </Form>
    <div
      v-if="
        permissions.password &&
        permissions.registrationAllowed &&
        !permissions.registrationDisabled
      "
      class="mt-5 text-right"
    >
      <v-divider />
      <v-btn
        variant="plain"
        class="mt-2 text-capitalize mr-n2"
        @click="redirectTo(getUrl(urls.registration))"
        >{{ labels.noAccount }} {{ labels.doRegister }}</v-btn
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
  name: 'Login',
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

    return {
      ...defaultValues,
      schema: Yup.object().shape({
        username: Yup.string().email().required(),
        password: Yup.string().min(8).required()
      }),
      rememberMe: ref(false || defaultValues.forms.value.loginRememberMe),
      redirectTo
    }
  },
  mounted() {}
})
</script>
