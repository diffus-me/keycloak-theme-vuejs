interface EnvUrl {
  registration: string
  loginResetCredentials: string
  login: string
  loginAction: string
  registrationAction: string
  logoutConfirmAction: string
  clientBaseUrl: string
  loginRestartFlowUrl: string
}

interface EnvTitle {
  loginProfileTitle: string
  loginAccountTitle: string
  registerTitle: string
  emailForgotTitle: string
  confirmLinkIdpTitle: string
  emailLinkIdpTitle: string
  emailVerifyTitle: string
  logoutConfirmTitle: string
  errorTitle: string
}

interface EnvPermission {
  usernameEditDisabled: boolean
  loginWithEmailAllowed: boolean
  registrationEmailAsUsername: boolean
  rememberMe: boolean
  resetPasswordAllowed: boolean
  password: boolean
  registrationAllowed: boolean
  registrationDisabled: boolean
  passwordRequired: boolean
}

interface EnvLabel {
  firstName: string
  lastName: string
  username: string
  usernameOrEmail: string
  email: string
  password: string
  passwordConfirm: string
  rememberMe: string
  doForgotPassword: string
  doLogIn: string
  doSubmit: string
  noAccount: string
  doRegister: string
  backToLogin: string
  confirmLinkIdpContinue: string
  doClickHere: string
  doLogout: string
  logoutConfirmHeader: string
  backToApplication: string
}

interface EnvForm {
  loginUsername: string
  loginRememberMe: boolean
  selectedCredential: string
  registerFirstName: string
  registerLastName: string
  registerEmail: string
  registerUsername: string
  logoutConfirmCode: string
}

interface EnvUser {
  username: string
  email: string
  firstName: string
  lastName: string
}

interface EnvValidation {
  firstName: string
  lastName: string
  email: string
  usernameOrPassword: string
  username: string
  password: string
  passwordConfirm: string
}

interface EnvMessage {
  type: string
  sumary: string
}

interface EnvInstruction {
  emailLinkIdp1: string
  emailLinkIdp2: string
  emailLinkIdp3: string
  emailLinkIdp4: string
  emailLinkIdp5: string
  emailVerifyInstruction1: string
  emailVerifyInstruction2: string
  emailVerifyInstruction3: string
}

interface EnvSocial {
  alias: string
  displayName: string
  loginUrl: string
}

interface Environment {
  urls: EnvUrl
  titles: EnvTitle
  permissions: EnvPermission
  labels: EnvLabel
  forms: EnvForm
  user: EnvUser
  validations: EnvValidation
  message: EnvMessage
  social: EnvSocial[]
  instruction: EnvInstruction
}
