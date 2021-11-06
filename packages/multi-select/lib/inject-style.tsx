import styles from '../src/styles.css'

let styleElement: HTMLStyleElement | undefined

export const injectStyles = () => {
  if (typeof document !== 'undefined' && !styleElement) {
    styleElement = document.createElement('style')
    styleElement.innerHTML = styles

    document.head.appendChild(styleElement)
  }
}
