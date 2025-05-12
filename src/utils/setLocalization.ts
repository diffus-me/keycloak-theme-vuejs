import Cookies from 'js-cookie'

function getRootDomain(domain: string): string {
  const parts = domain.split('.').reverse()
  if (parts.length >= 2) {
    return `${parts[1]}.${parts[0]}`
  }
  return domain
}

export const setLocalizationWithBrowserLanguage = () => {
  const cookieLanguage = Cookies.get('localization')
  if (cookieLanguage && cookieLanguage.toLowerCase() !== 'none') {
    return
  }
  const availableLanguages = [
    'en_US',
    'ja_JP',
    'de_DE',
    'fr_FR',
    'pl_PL',
    'it_IT',
    'es_ES',
    'ko_KR',
    'zh_TW',
    'pt_BR',
    'fi_FI',
    'no_NO',
    'ru_RU',
    'tr_TR',
    'zh_CN',
  ]
  const navigatorLanguages = navigator.languages.map(item => {
    return item.replaceAll('-', '_')
  })
  let preferredLanguage = 'None'
  for (const userLanguage of navigatorLanguages) {
    for (const supportLanguage of availableLanguages) {
      if (supportLanguage.toLowerCase().includes(userLanguage.toLowerCase())) {
        preferredLanguage = supportLanguage
        break
      }
    }
    if (preferredLanguage !== 'None') {
      break
    }
  }
  const currentDomain = window.location.hostname
  const rootDomain = getRootDomain(currentDomain)
  Cookies.set('localization', preferredLanguage, {
    domain: rootDomain,
    path: '/',
    expires: 365
  })
}
