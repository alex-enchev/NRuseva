import "@/styles/globals.css";
import React from "react";
import { Providers } from "./providers";
import { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import { Sansation } from "next/font/google";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

const sansation = Sansation({
  weight: ["300", "400", "700"],
  subsets: ["cyrillic", "latin"],
  fallback: ["system-ui", "sans-serif"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="bg">
      <body className={`${sansation.className} antialiased`}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
