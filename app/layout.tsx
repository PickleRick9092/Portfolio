import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Head from "next/head";
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
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mohammad Kalateh",
    "url": "https://mohammadkalateh.com/",
    "sameAs": [
      "https://www.linkedin.com/in/mohammad-kalateh-46b65a239/",
      "https://github.com/PickleRick9092"
    ],
    "jobTitle": "SEO Expert & Web Designer",
    "worksFor": {
      "@type": "Organization",
      "name": "Mohammad Kalateh"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Mohammad Kalateh",
    "url": "https://mohammadkalateh.com/",
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </Head>
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