
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navber";
import Footer from "./components/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NUR.Dev — Frontend Web Developer",
  description:
    "Hi, I'm Abdun Nur — a passionate Frontend Web Developer specializing in modern web technologies like React, Next.js, and Tailwind CSS. I build fast, responsive, and user-friendly websites.",
  keywords: [
    "Abdun Nur",
    "NUR.Dev",
    "Frontend Developer",
    "Web Developer",
    "React Developer",
    "Next.js Portfolio",
    "Tailwind CSS",
    "JavaScript Developer",
    "Bangladesh Developer",
  ],
  authors: [{ name: "Abdun Nur", url: "https://nurdev.netlify.app/" }],
  openGraph: {
    title: "NUR.Dev — Frontend Web Developer",
    description:
      "Crafting beautiful and interactive web experiences using React, Next.js, and Tailwind CSS.",
    url: "https://nurdev.netlify.app/",
    siteName: "NUR.Dev",
    images: [
      {
        url: "/preview-cover.png",
        width: 1200,
        height: 630,
        alt: "NUR.Dev Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NUR.Dev — Frontend Web Developer",
    description:
      "Hi, I'm Abdun Nur — a passionate Frontend Web Developer who builds modern web apps using React, Next.js, and Tailwind CSS.",
    images: ["/preview-cover.png"],
    creator: "@nur_dev",
  },
  metadataBase: new URL("https://nurdev.netlify.app/"),
  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black`}>

        <Navbar />

        <main className="py-20 px-5 md:px-10 lg:px-20 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
