import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Origin Golf Admin Tools',
  description: 'For Origin Golf',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-cool-grey-100">{children}</body>
    </html>
  )
}
