import { type fieldError } from '~/types/common'

export const extractFieldsErros = (
  validations: EnvValidation
): fieldError[] => {
  let errors: fieldError[] = []
  let messages = []
  for (const key in validations) {
    if (validations[key]) {
      if (!messages.includes(validations[key])) {
        errors.push({
          field: key,
          message: validations[key]
        })
        messages.push(validations[key])
      }
    }
  }
  return errors
}
