import type React from "react"
import { Header } from "@/components/layouts/header"
import { Footer } from "@/components/layouts/footer"
import "./globals.css"
import { Nunito } from "next/font/google"
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const nunito = Nunito({ subsets: ["latin"] })

export const metadata = {
  title: "All Season Sauna",
  creator: "Onat Ustun",
  description: "Graded Unit Website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className={`${nunito.className} min-h-screen bg-background text-foreground font-sans antialised`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
