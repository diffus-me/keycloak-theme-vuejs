import { type fieldError } from '~/types/common'

export const extractFieldsErros = (
  validations: EnvValidation
): fieldError[] => {
  let errors: fieldError[] = []
  for (const key in validations) {
    if (validations[key]) {
      errors.push({
        field: key,
        message: validations[key]
      })
    }
  }
  return errors
}
