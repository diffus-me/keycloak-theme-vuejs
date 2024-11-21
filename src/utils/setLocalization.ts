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
    'de_DE',
    'es_ES',
    'fi_FI',
    'it_IT',
    'ja_JP',
    'ko_KR',
    'no_NO',
    'pt_BR',
    'ru_RU',
    'tr_TR',
    'zh_CN',
    'zh_TW'
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
