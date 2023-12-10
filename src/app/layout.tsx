import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import styles from './globals.module.css'
import Navbar from "@/comps/navbar";
import Footer from "@/comps/footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Robert V's Personal Website",
  description: 'Created through the Hack4Impact Bootcamp',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={styles.layout}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
