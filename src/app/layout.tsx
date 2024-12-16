"use client";

import Footer from "@/components/Footer";
import HeaderSwitcher from "@/components/Header/HeaderSwitcher";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import { usePathname } from 'next/navigation'

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname()

  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <link rel="icon" href="/favicon_io/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png" />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />
        <meta
          property="og:image"
          content="https://glensias.ma/preview.png"
        />
        <meta property="og:title" content="GL ENSIAS" />
        <meta
          property="og:description"
          content="GL ENSIAS Website"
        />
        <meta property="og:site_name" content="GL ENSIAS" />
        <meta property="og:url" content="https://glensias.ma" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta name="keywords" content="ENSIAS, GL, Software, Engineering, Genie, Logiciel" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GL ENSIAS" />
        <meta
          name="twitter:description"
          content="GL ENSIAS Website"
        />
        <meta
          name="twitter:image"
          content="https://glensias.ma/preview.png"
        />
      </head>
      {pathName.startsWith("/dashboard") ? (
        <body>
          {children}
        </body>
      ) : (
        <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
          <Providers>
            <HeaderSwitcher />
            {children}
            <Footer />
            <ScrollToTop />
          </Providers>
        </body>
      )}
    </html>
  )
}

import { Providers } from "./providers";
