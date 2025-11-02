import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { Poppins } from 'next/font/google'
import './globals.css'

// Importar la fuente Poppins desde Google Fonts
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'], // pesos comunes
  variable: '--font-poppins',   
})

export const metadata: Metadata = {
  title: 'CREACIONPAGFRAMEWORK',
  description: 'Creado por Bryan Rico',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${poppins.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
