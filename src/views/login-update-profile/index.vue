<template>
  <layout>
    <v-container class="form-header-container">
      <div class="form-header-logo">
        <v-img height="36" :src="getLogo('main-logo')"></v-img>
      </div>
      <h2 class="text-secondary form-header-title">
        {{ titles.loginProfileTitle }}
      </h2>
      <h4 v-if="false" class="text-disabled form-header-subtitle">
        Please fill out your updated profile information.
      </h4>
    </v-container>
    <Form
      :validation-schema="schema"
      :action="getUrl(urls.loginAction)"
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
            :value="user.firstName"
          >
          </text-input>
        </v-col>
        <v-col cols="12" sm="6">
          <text-input
            name="lastName"
            type="text"
            :label="labels.lastName"
            :value="user.lastName"
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
        :value="user.email"
      >
      </text-input>
      <text-input
        v-if="!permissions.registrationEmailAsUsername"
        name="username"
        type="text"
        :label="labels.username"
        class="mt-4 mb-8"
        required
        :value="user.username"
      >
      </text-input>
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
    </Form>
  </layout>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Layout from '~/components/Layout.vue'
import TextInput from '~/components/TextInput.vue'
import { useLogin } from '~/hooks'
import { Form } from 'vee-validate'
import * as Yup from 'yup'

export default defineComponent({
  name: 'LoginUpdateProfile',
  components: {
    Layout,
    Form,
    TextInput
  },
  setup() {
    const defaultValues = useLogin();
    const baseSchema = {
      firstName: Yup.string().default(''),
      lastName: Yup.string().default(''),
      email: Yup.string().email().required(),
      username: Yup.string().notRequired()
    }
    if (!defaultValues.permissions.value.registrationEmailAsUsername) {
      baseSchema.username = Yup.string().min(5).required()
    }
    return {
      ...defaultValues,
      schema: Yup.object().shape(baseSchema),
    }
  },
  mounted() {
  }
})
</script>
