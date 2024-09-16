import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "../provider/provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Techtonic Community",
  description: "A Community fo all.",
  icons: {
    icon: ["./favicon.ico"],
    apple: ["./favicon.ico"],
    shortcut: ["./favicon.ico"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-gray-900 dark !scroll-smooth">
      <body className={`${inter.className} dark:bg-gray-900 dark:text-white`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
