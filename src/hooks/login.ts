import { inject, computed } from 'vue'

export const useLogin = () => {
  const env = inject('environment') as Environment

  const getUrl = (url: string) => {
    if (url === "terms_and_conditions") {
      return "https://www.trackingly.ai/terms/";
    }
    return url.replace(/(&amp;)/g, '&')
  }
  const getUsernameLabel = () => {
    if (!env.permissions.loginWithEmailAllowed) {
      return env.labels.username
    }
    if (!env.permissions.registrationEmailAsUsername) {
      return env.labels.usernameOrEmail
    }
    return env.labels.email
  }

  const getIcon = (type: string | undefined) => {
    if (type === 'info') {
      return '<i class="fas fa-info-circle"></i>'
    }
    if (type === 'error') {
      return '<i class="fas fa-times-circle"></i>'
    }
    if (type === 'warning') {
      return '<i class="fas fa-exclamation-triangle"></i>'
    }
    if (type === 'success') {
      return '<i class="fas fa-check-circle"></i>'
    }
    if (type === 'github') {
      return 'https://diffus-public-static-assets.s3.amazonaws.com/keycloak/trackingly/assets/images/social/logos/github-logo-icon.svg'
    }
    if (type === 'google') {
      return 'https://diffus-public-static-assets.s3.amazonaws.com/keycloak/trackingly/assets/images/social/logos/google-logo-icon.svg'
    }
    if (type === 'microsoft') {
      return 'https://diffus-public-static-assets.s3.amazonaws.com/keycloak/trackingly/assets/images/social/logos/microsoft-logo-icon.svg'
    }
    if (type === 'apple') {
      return 'https://diffus-public-static-assets.s3.amazonaws.com/keycloak/trackingly/assets/images/social/logos/apple-logo-icon.svg'
    }
    if (type === 'facebook') {
      return 'https://diffus-public-static-assets.s3.amazonaws.com/keycloak/trackingly/assets/images/social/logos/facebook-logo-icon.svg'
    }
    if (type === 'twitter') {
      return 'https://diffus-public-static-assets.s3.amazonaws.com/keycloak/trackingly/assets/images/social/logos/twitter-logo-icon.svg'
    }
    return '<i></i>'
  }

  const getLogo = (type: string | undefined) => {
    if (type === 'main-logo') {
      return 'https://diffus-public-static-assets.s3.amazonaws.com/keycloak/trackingly/assets/images/logos/trackingly_logo_pth.svg';
    }
    return '';
  }

  const getSumary = (message: string) => {
    return message.replace(/(&#64;)/g, '@')
  }

  return {
    urls: computed(() => env.urls as EnvUrl),
    titles: computed(() => env.titles as EnvTitle),
    permissions: computed(() => env.permissions as EnvPermission),
    labels: computed(() => env.labels as EnvLabel),
    forms: computed(() => env.forms as EnvForm),
    user: computed(() => env.user as EnvUser),
    validations: computed(() => env.validations as EnvValidation),
    message: computed(() => env.message as EnvMessage),
    social: computed(() => env.social as EnvSocial[]),
    instruction: computed(() => env.instruction as EnvInstruction),
    getUrl,
    getUsernameLabel,
    getIcon,
    getLogo,
    getSumary
  }
}
