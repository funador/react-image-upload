// react-notify-toast has no published types, so this is a minimal
// declaration covering the API this app actually uses (including the
// { background, text } color object passed to the 'custom' toast type).
declare module 'react-notify-toast' {
  import { ComponentType } from 'react'

  type ToastColor = string | { background: string, text: string }
  type ToastFn = (message: string, type?: string, duration?: number, color?: ToastColor) => void

  export const notify: {
    show: ToastFn
    hide: () => void
    createShowQueue: () => ToastFn
  }

  const Notifications: ComponentType<{ options?: object }>
  export default Notifications
}
