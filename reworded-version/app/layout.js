import './globals.css';
import './redesign.css';
import localFont from 'next/font/local';
import ScrollReveal from '../components/scroll-reveal';
import SmoothScroll from '../components/smooth-scroll';

const inter = localFont({ src: '../public/images/InterVariable.woff2', display: 'swap' });

export const metadata = {
  title: 'HAMS Group | Moving Life Forward',
  description: 'One human purpose. Explore HAMS Group across healthcare, mobility, medical technology and digital services.',
};

export default function RootLayout({ children }) {
  return <html lang="en"><body className={inter.className}>{children}<ScrollReveal /><SmoothScroll /></body></html>;
}
