import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Sultan Al-Failakawi — Filmmaking Portfolio',
  description: 'Bilingual portfolio of Sultan Al-Failakawi, filmmaking student at the American University of Kuwait. Coursework short films, personal documentaries, and festival screenings.',
  openGraph: {
    title: 'Sultan Al-Failakawi — Filmmaking Portfolio',
    description: 'Bilingual portfolio of Sultan Al-Failakawi, filmmaking student at the American University of Kuwait. Coursework short films, personal documentaries, and festival screenings.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sultan Al-Failakawi — Filmmaking Portfolio',
    description: 'Bilingual portfolio of Sultan Al-Failakawi, filmmaking student at the American University of Kuwait. Coursework short films, personal documentaries, and festival screenings.',
  },
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
