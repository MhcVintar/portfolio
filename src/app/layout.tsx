import Footer from "@/components/footer";
import Header from "@/components/header";
import ThemeSwitcher from "@/components/theme-switcher";
import ActiveSectionContextProvider from "@/context/active-section-context";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Miha Vintar | Portfolio Website",
  description:
    "A protfolio website made with Next.js, Tailwind and Framer Motion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} flex justify-center
        bg-blue-200 bg-circuit-board text-slate-900
        dark:bg-gray-800 dark:bg-circuit-board-dark dark:text-gray-50`}
      >
        <ActiveSectionContextProvider>
          <div
            className="relative flex w-full flex-col items-center
            bg-white pb-4 dark:bg-gray-900 md:py-4 lg:my-16 lg:w-[initial]
            lg:rounded-2xl lg:px-16 xl:my-32 xl:px-20 2xl:my-40 2xl:px-40"
          >
            <Header />
            {children}
            <Footer />
          </div>
        </ActiveSectionContextProvider>
        <ThemeSwitcher />
      </body>
    </html>
  );
}
