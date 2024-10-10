import localFont from 'next/font/local';
import './globals.css';
// import '@/components/components.css';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { Toaster } from '@/components/ui/Elements/toaster';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata = {
  title: 'Insoft It',
  description: 'Innovative Solution',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-screen-2xl px-1 mx-auto `}
      >
        <Navbar />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
