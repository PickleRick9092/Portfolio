import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Mohammad Kalateh | Web Designer & SEO Expert",
  description:
    "I am Mohammad Kalateh 😊, a Web Designer & SEO Expert 🚀. I help businesses grow and get noticed online 🌐 through stunning websites and smart SEO strategies",
  other: {
    "google-site-verification": "Z_NpTA0NCoh4XwtdPm_j5G_PaTtVr9-HX2ocqHKdSic",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}