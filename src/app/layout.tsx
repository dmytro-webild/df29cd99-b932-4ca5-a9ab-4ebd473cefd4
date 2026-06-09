import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Public_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'Josef Kiermaier Elektroinstallationen | Ihr Partner für Elektroarbeiten',
  description: 'Professionelle Elektroinstallationen, Wartung und Reparaturen für Privat- und Gewerbeobjekte in Ihrer Region. Vertrauen Sie auf Erfahrung und Zuverlässigkeit.',
  openGraph: {
    "title": "Josef Kiermaier Elektroinstallationen",
    "description": "Professionelle Elektroinstallationen, Wartung und Reparaturen für Privat- und Gewerbeobjekte in Ihrer Region.",
    "url": "/",
    "siteName": "Josef Kiermaier Elektroinstallationen",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/male-electrician-works-switchboard-using-electrical-connection-cable_169016-51895.jpg",
        "alt": "Elektriker bei der Arbeit"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Josef Kiermaier Elektroinstallationen",
    "description": "Professionelle Elektroinstallationen, Wartung und Reparaturen für Privat- und Gewerbeobjekte in Ihrer Region.",
    "images": [
      "http://img.b2bpic.net/free-photo/male-electrician-works-switchboard-using-electrical-connection-cable_169016-51895.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const publicSans = Public_Sans({
  variable: "--font-public-sans",  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${publicSans.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
