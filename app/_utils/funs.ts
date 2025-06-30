// utils/theme-utils.ts
import Cookies from 'js-cookie'

export const getThemeFromCookie = () => Cookies.get('theme') || 'dark'
export const setThemeInCookie = (theme: string) =>
    Cookies.set('theme', theme, { expires: 365 })
