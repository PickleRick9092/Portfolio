import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Mohammad Kalateh | Web Designer & SEO Expert",
  description:
    "I am Mohammad Kalateh 😊, a Web Designer & SEO Expert 🚀. I help businesses grow and get noticed online 🌐 through stunning websites and smart SEO strategies",
  other: {
    "google-site-verification": "Z_NpTA0NCoh4XwtdPm_j5G_PaTtVr9-HX2ocqHKdSic",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
