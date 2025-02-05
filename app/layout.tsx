import type React from "react"
import "./globals.css"
import { Nunito } from "next/font/google"
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const nunito = Nunito({ subsets: ["latin"] })

export const metadata = {
  title: "All Season Sauna",
  description: "Graded Unit Website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${nunito.className} font-sans`}>{children}</body>
    </html>
  )
}

