"use client"
import { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Inter } from 'next/font/google'
import '@/styles/globals.css';
import '@/styles/cards.css';
const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
 
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
