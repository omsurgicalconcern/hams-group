import './globals.css';

export const metadata = {
  title: 'HAMS Group | Moving Life Forward',
  description: 'One human purpose. Explore HAMS Group across healthcare, mobility, medical technology and digital services.',
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
