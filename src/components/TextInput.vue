<script setup lang="ts">
import { ref, toRef } from 'vue';
import { useField } from 'vee-validate';
import { mdiEye, mdiEyeOff } from '@mdi/js';

const props = defineProps({
  type: {
    type: String,
    default: 'text'
  },
  value: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    required: true
  },
  label: {
    type: String,
    default: ''
  },
  required: {
    type: Boolean,
    default: null
  },
  successMessage: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  enablePwdTextToggle: {
    type: Boolean,
    default: false
  },
});

// use `toRef` to create reactive references to `name` prop which is passed to `useField`
// this is important because vee-validte needs to know if the field name changes
// https://vee-validate.logaretm.com/v4/guide/composition-api/caveats
const name = toRef(props, 'name');

// we don't provide any rules here because we are using form-level validation
// https://vee-validate.logaretm.com/v4/guide/validation#form-level-validation
const {
  value: inputValue,
  errorMessage,
  handleBlur,
  handleChange,
  meta
} = useField(name, undefined, {
  initialValue: props.value
});

const showPassword = ref(false);

</script>
<template>
  <div class="TextInput" :class="{ 'has-error': !!errorMessage, success: meta.valid }">
    <v-text-field
      :v-model="inputValue"
      :label="label"
      :id="name"
      :name="name"
      :type="(props.enablePwdTextToggle && props.type === 'password')? (showPassword ? 'text' : 'password'): props.type"
      density="comfortable"
      hide-details="auto"
      variant="outlined"
      :required="props.required"
      :valid="meta.valid"
      :class="$attrs.class"
      :color="meta.valid ? 'success' : ''"
      :error-messages="errorMessage"
      :append-inner-icon="(props.enablePwdTextToggle && props.type === 'password')? (showPassword ? mdiEye : mdiEyeOff): null"
      @input="handleChange"
      @blur="handleBlur"
      @click:append-inner="showPassword = !showPassword"
    />
  </div>
</template>
