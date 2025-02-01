import "./globals.css"
import { Cormorant_Garamond, Lato } from "next/font/google"
import type React from "react"
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-cormorant" })
const lato = Lato({ subsets: ["latin"], weight: ["300", "400", "700"], variable: "--font-lato" })

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
      <body className={`${cormorant.variable} ${lato.variable} font-sans bg-[#eff5ef]`}>{children}</body>
    </html>
  )
}

