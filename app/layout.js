import './globals.css';
import localFont from 'next/font/local';

const inter = localFont({ src: '../public/images/InterVariable.woff2', display: 'swap' });

export const metadata = {
  title: 'HAMS Group | Moving Life Forward',
  description: 'One human purpose. Explore HAMS Group across healthcare, mobility, medical technology and digital services.',
};

export default function RootLayout({ children }) {
  return <html lang="en"><body className={inter.className}>{children}</body></html>;
}
