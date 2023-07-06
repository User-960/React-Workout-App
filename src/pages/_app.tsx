import type { AppProps } from 'next/app'

import '@/assets/styles/index.scss'
import { TypeComponentAuthFields } from '@/interfaces/page.interface'

type TypeApp = AppProps & TypeComponentAuthFields

export default function App({ Component, pageProps }: TypeApp) {
	return <Component {...pageProps} />
}
