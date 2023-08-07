import Header from '@/components/Header';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import PromptInput from '@/components/PromptInput';
import ClientProvider from '@/components/ClientProvider';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI art Generator',
  description: 'Yanos Productions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ClientProvider>

          <Header />

          <PromptInput />

        </ClientProvider>
        {children}
      </body>
    </html>
  )
}
