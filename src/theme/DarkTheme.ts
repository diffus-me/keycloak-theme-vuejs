import type { ThemeTypes } from '~/types/themeTypes/ThemeType'

const DarkOrangeTheme: ThemeTypes = {
  name: 'DarkOrangeTheme',
  dark: true,
  colors: {
    primary: '#04adbf',
    secondary: '#fa5a0c',
    info: '#03c9d7',
    success: '#00c853',
    accent: '#FFAB91',
    warning: '#ffc107',
    error: '#f44336',
    lightprimary: '#cff5fe',
    lightsecondary: '#ffcd90',
    lightsuccess: '#143c33',
    lighterror: '#f9d8d8',
    lightwarning: '#fff8e1',
    darkprimary: '#0388a6',
    darksecondary: '#d9042b',
    darkText: '#d7dcec',
    lightText: '#d5d9e9',
    borderLight: '#404968',
    inputBorder: '#5f698d',
    containerBg: '#010606',
    surface: '#010f17',
    background: '#010f17',
    'on-surface-variant': '#010f17',
    facebook: '#4267b2',
    twitter: '#1da1f2',
    linkedin: '#0e76a8',
    gray100: '#010606',
    primary200: '#8bacad',
    secondary200: '#e3bf91'
  }
}

const DarkPurpleTheme: ThemeTypes = {
  name: 'DarkPurpleTheme',
  dark: true,
  variables: {
    'high-opacity': 1,
    'light-opacity': 0.12
  },
  colors: {
    primary: '#cccccc',
    secondary: '#4353ff',
    surface: '#121212',
    background: '#000000',
    'subtitle-text-color': '#ffffff',
    'carousel-dot-color': '#ffffff',
    'carousel-title-color': '#ffffff',
    'carousel-subtitle-color': '#e6e6e6cc',
    info: '#03c9d7',
    success: '#05b187',
    accent: '#fc4b6c',
    warning: '#fec90f',
    error: '#fc4b6c',
    lightprimary: '#ffffff',
    lightsecondary: '#6e7aff',
    lightsuccess: '#143c33',
    lighterror: '#f9d8d8',
    lightwarning: '#fff8e1',
    darkprimary: '#555555',
    darksecondary: '#293189',
    darkText: '#d7dcec',
    lightText: '#ffffff80',
    borderLight: '#404968',
    inputBorder: '#5f698d',
    containerBg: '#1a223f',
    'on-surface-variant': '#111936',
    facebook: '#4267b2',
    twitter: '#1da1f2',
    linkedin: '#0e76a8',
    gray100: '#19203c',
    primary200: '#90caf9',
    secondary200: '#b39ddb'
  }
}

const DarkWhiteTheme: ThemeTypes = {
  name: 'DarkWhiteTheme',
  dark: true,
  variables: {
    'high-opacity': 1,
    'light-opacity': 0.12
  },
  colors: {
    primary: '#4353ff',
    secondary: '#ffffff',
    surface: '#121212',
    background: '#000000',
    'subtitle-text-color': '#ffffff',
    'carousel-dot-color': '#ffffff',
    'carousel-title-color': '#ffffff',
    'carousel-subtitle-color': '#e6e6e6cc',
    info: '#03c9d7',
    success: '#05b187',
    accent: '#fc4b6c',
    warning: '#fec90f',
    error: '#fc4b6c',
    lightprimary: '#6e7aff',
    lightsecondary: '#ffffff',
    lightsuccess: '#143c33',
    lighterror: '#f9d8d8',
    lightwarning: '#fff8e1',
    darkprimary: '#293189',
    darksecondary: '#555555',
    darkText: '#444444',
    lightText: '#ffffff80',
    borderLight: '#404968',
    inputBorder: '#5f698d',
    containerBg: '#1a223f',
    'on-surface-variant': '#111936',
    facebook: '#4267b2',
    twitter: '#1da1f2',
    linkedin: '#0e76a8',
    gray100: '#19203c',
    primary200: '#90caf9',
    secondary200: '#b39ddb'
  }
}

export { DarkOrangeTheme, DarkPurpleTheme, DarkWhiteTheme }
