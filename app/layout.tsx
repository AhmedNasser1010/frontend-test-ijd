import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const AlFontSens = localFont({
  src: '../fonts/alfont_com_AlFont_com_helveticaneueltarabicroman1.ttf',
  variable: '--font-al',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${AlFontSens.variable} antialiased`} dir="rtl">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
