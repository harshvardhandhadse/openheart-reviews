import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OpenHeart Reviews - Privacy-First Review Platform',
  description: 'Share honest reviews anonymously. Better than MouthShut.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <a href="/" className="text-2xl font-bold text-red-600">
                  🫀 OpenHeart
                </a>
              </div>
            </div>
          </div>
        </nav>
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-gray-800 text-white mt-20">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="text-center text-gray-400">
              <p>© 2025 OpenHeart Reviews. Made with ❤️ for honest reviews.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
