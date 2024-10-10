<script setup lang="ts">
import { ref, toRef } from 'vue'
import { useField } from 'vee-validate'

const props = defineProps({
  value: {
    type: Boolean,
    default: false
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
  }
})

// use `toRef` to create reactive references to `name` prop which is passed to `useField`
// this is important because vee-validte needs to know if the field name changes
// https://vee-validate.logaretm.com/v4/guide/composition-api/caveats
const name = toRef(props, 'name')

// we don't provide any rules here because we are using form-level validation
// https://vee-validate.logaretm.com/v4/guide/validation#form-level-validation
const { checked, errorMessage, handleChange } = useField(
  name,
  undefined,
  {
    type: 'checkbox',
    checkedValue: true,
    uncheckedValue: false,
    initialValue: props.value
  }
)

const boxChecked = ref(checked)
</script>
<template>
  <v-checkbox
    v-model="boxChecked"
    :label="props.label"
    :id="name"
    :name="name"
    :color="$attrs.color"
    :class="$attrs.class"
    :required="props.required"
    hide-details
    :error-messages="errorMessage"
    @update:model-value="handleChange"
  >
  </v-checkbox>
</template>
