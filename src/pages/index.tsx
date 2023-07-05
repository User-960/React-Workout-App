import { Inter } from 'next/font/google'
import { NextPage } from 'next'
import Home from '@/components/screens/home/Home'

const inter = Inter({ subsets: ['latin'] })

const HomePage: NextPage = () => {
  return <Home />
}

export default HomePage
