import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
          <div className="h-screen w-full bg-gradient-to-br
            from-violet-800 via-pink-700 to-orange-700
            flex items-center justify-center">

            <div className="h-96 w-80 bg-gray-200/30 backdrop-blur-lg
              rounded-md border border-gray-200/30 shadow-lg">
            <p className="test-shadow">test</p>
              {children}

            </div>
          </div>

      </body>
    </html>
  );
}
