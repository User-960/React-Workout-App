import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'

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

const DynamicAuthProvider = dynamic(
	() => import('../components/providers/AuthProvider'),
	{
		ssr: false
	}
)

export default function App({ Component, pageProps }: TypeApp) {
	return (
		<DynamicAuthProvider Component={Component}>
			<QueryClientProvider client={queryClient}>
				<Component {...pageProps} />
			</QueryClientProvider>
		</DynamicAuthProvider>
	)
}
