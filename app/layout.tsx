import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Sibi Antony",
  description:
    "Forward-thinking and solution-oriented developer with a strong foundation in problem-solving, creativity, and collaboration.",
  generator: "v0.app",
  icons: {
    icon: "/icon-v2.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.cdnfonts.com/css/belania" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/skomelr-quantum" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/kaelie" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/dec-terminal-modern" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/magnetic-2" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/goodlight-boredom" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/zalamandercaps" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/lushgunin-bolditalic" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/tempest-apache" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/thegoodmonolith" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/allan-2" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
