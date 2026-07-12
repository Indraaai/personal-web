import type { Metadata } from "next";
import { Roboto_Slab } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Indra Firmansyah",
  description: "Welcome to my personal portfolio website!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${robotoSlab.variable} font-sans antialiased bg-background text-foreground`}
      >
        <SmoothScrollProvider>
          {/* Container utama dengan border neo di sekeliling halaman */}
          <div className="min-h-screen border-4 border-black pt-16">
            {children}
          </div>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}