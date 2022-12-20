import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '@fontsource/inter/';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
