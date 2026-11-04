import './globals.css';
import './redesign.css';
import localFont from 'next/font/local';
import ScrollReveal from '../components/scroll-reveal';
import SmoothScroll from '../components/smooth-scroll';
import { siteUrl } from '../lib/seo';

const inter = localFont({ src: '../public/images/InterVariable.woff2', display: 'swap' });

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'HAMS Group | Moving Life Forward',
  description: 'One human purpose. Explore HAMS Group across healthcare, mobility, medical technology and digital services.',
  verification: { google: 'AZRo_IxAXgd10-P1HIjwTeENb0A3iWH1TcaWxaLRW9s' },
};

export default function RootLayout({ children }) {
  return <html lang="en"><body className={inter.className}>{children}<ScrollReveal /><SmoothScroll /></body></html>;
}
