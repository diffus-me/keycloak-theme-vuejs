import type { ThemeTypes } from '~/types/themeTypes/ThemeType'
import { useConfig } from '~/hooks'

const { backgroundImages, mainLogoSize } = useConfig()
const randomIndex = Math.floor(Math.random() * backgroundImages.length)
const backgroundImage = backgroundImages[randomIndex]

const OrangeTheme: ThemeTypes = {
  name: 'OrangeTheme',
  dark: false,
  variables: {
    'border-color': '#1e88e5',
    'high-opacity': 1,
    'light-opacity': 0.12,
    'logo-image-size': `${mainLogoSize}px`,
    'background-image-main': `url("${backgroundImage}")`
  },
  colors: {
    primary: '#04adbf',
    secondary: '#fa5a0c',
    surface: '#fff',
    background: '#eef2f6',
    'subtitle-text-color': '#000000',
    'carousel-dot-color': '#ffffff',
    'carousel-title-color': '#ffffff',
    'carousel-subtitle-color': '#e6e6e6cc',
    info: '#03c9d7',
    success: '#00c853',
    accent: '#FFAB91',
    warning: '#ffc107',
    error: '#f44336',
    lightprimary: '#cff5fe',
    lightsecondary: '#ffcd90',
    lightsuccess: '#b9f6ca',
    lighterror: '#ef9a9a',
    lightwarning: '#fff8e1',
    darkprimary: '#0388a6',
    darksecondary: '#d9042b',
    darkText: '#212121',
    lightText: '#616161',
    borderLight: '#90caf9',
    inputBorder: '#787878',
    containerBg: '#e3ebeb',
    'on-surface-variant': '#fff',
    facebook: '#4267b2',
    twitter: '#1da1f2',
    linkedin: '#0e76a8',
    gray100: '#fafafa',
    primary200: '#8bacad',
    secondary200: '#e3bf91'
  }
}

export { OrangeTheme, backgroundImage }
