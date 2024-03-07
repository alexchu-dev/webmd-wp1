/*
Author: Alex Chu up2244885
University of Portsmouth
*/
import { Zen_Kaku_Gothic_New, Arvo } from "next/font/google"
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter"
import { ThemeProvider } from "@mui/material/styles"
import theme from "../theme"
import "./globals.css"
import Header from "./components/Header"
import Providers from "./providers.js"
import Footer from "./components/Footer"

const zen = Zen_Kaku_Gothic_New({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
})
const arvo = Arvo({ weight: ["400", "700"], subsets: ["latin"] })

export const metadata = {
  title: "Ports Travel | Best Travel Agency in Portsmouth and Beyond",
  description:
    "The best travel agency in Portsmouth and beyond, providing best options for your next trip since 2024. © Alex Chu 2024",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${zen.className}`}>
        <AppRouterCacheProvider>
          <Providers>
            <ThemeProvider theme={theme}>
              <Header font={arvo.className} />
              {children}
              <Footer />
            </ThemeProvider>
          </Providers>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
