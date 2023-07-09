import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'

import '@/assets/styles/index.scss'
import { TypeComponentAuthFields } from '@/interfaces/page.interface'

type TypeApp = AppProps & TypeComponentAuthFields

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

export default function App({ Component, pageProps }: TypeApp) {
	return (
		<QueryClientProvider client={queryClient}>
			<Component {...pageProps} />
		</QueryClientProvider>
	)
}
