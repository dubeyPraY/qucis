import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'QuCIS',
  description: 'This is Quantum Computing Research Laboratory headed by Mr. Ankur Raina.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  )
}
