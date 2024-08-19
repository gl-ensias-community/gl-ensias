"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
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

  if (!pathName.startsWith("/dashboard")) {
    return (
      <html suppressHydrationWarning lang="en">
        <head>
          {/* Favicon Links */}
          <link rel="icon" href="/favicon_io/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png" />
          <link rel="manifest" href="/favicon_io/site.webmanifest" />
        </head>

        <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
          <Providers>
            <Header />
            {children}
            <Footer />
            <ScrollToTop />
          </Providers>
        </body>
      </html>
    );
  } else {
    return (
      <html suppressHydrationWarning lang="en">
        <body>
          {children}
        </body>
      </html>
    )
  }
}

import { Providers } from "./providers";
