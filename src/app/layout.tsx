import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { PreloadProvider } from "@/context/PreloadContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SM-Reconcile",
  description: "SM-Reconcile Environment Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="white">
      <body
        className={cn(
          "min-h-screen font-sans antialiased grainy",
          inter.className
        )}
      >
        <PreloadProvider>{children}</PreloadProvider>
      </body>
    </html>
  );
}
