import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bots.Business - Create Your Own Telegram Bot",
  description:
    "Create powerful Telegram bots with ease. Bot development platform with Bot Store, BJS programming, and GitHub integration. Chat Bot Platform as a Service.",
  keywords: [
    "Telegram bot",
    "bot creation",
    "chatbot platform",
    "Bots.Business",
    "bot development",
    "BJS",
  ],
  authors: [{ name: "Bots.Business" }],
  icons: {
    icon: "https://bots.business/images/favicon.png",
  },
  openGraph: {
    title: "Bots.Business - Create Your Own Telegram Bot",
    description:
      "Create powerful Telegram bots with ease. Chat Bot Platform as a Service.",
    url: "https://bots.business",
    siteName: "Bots.Business",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased bg-background text-foreground font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
