export const siteUrl = 'https://www.hamsgroup.com.np';

export function pageMetadata(title, description, path, keywords = []) {
  const url = `${siteUrl}${path}`;
  return {
    title,
    description,
    keywords: ['HAMS', 'HAMS Group', 'HAMS Group Nepal', ...keywords],
    alternates: { canonical: url },
    openGraph: {
      type: 'website', siteName: 'HAMS Group', title, description, url, locale: 'en_NP',
      images: [{ url: `${siteUrl}/images/himalayan-sunrise.png`, alt: 'Himalayan sunrise — HAMS Group Nepal' }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [`${siteUrl}/images/himalayan-sunrise.png`] },
  };
}

export const categorySeo = {
  hospital: {
    title: 'HAMS Hospital & Nagarik Hospital | HAMS Group Nepal',
    description: 'Explore HAMS Hospital in Dhumbarahi, Kathmandu, and Nagarik Community Teaching Hospital in Gatthaghar, Bhaktapur: specialist and multispecialty care.',
    keywords: ['HAMS Hospital', 'Nagarik Hospital', 'hospitals in Kathmandu', 'hospitals in Bhaktapur'],
  },
  automobile: {
    title: 'HAMs Motors & QJMOTOR Nepal | HAMS Group',
    description: 'Explore HAMs Motors electric passenger and commercial vehicles, plus QJMOTOR Nepal motorcycles, showroom visits and test rides through HAMS Group.',
    keywords: ['Hams Motor', 'HAMs Motors', 'QJ Motor', 'QJMOTOR Nepal', 'electric vehicles Nepal'],
  },
};

export const companySeo = {
  hams: {
    title: 'HAMS Hospital, Kathmandu | HAMS Group Nepal',
    description: 'Discover HAMS Hospital in Dhumbarahi, Kathmandu: specialist consultations, cardiology, diagnostics, emergency services and multidisciplinary care.',
    keywords: ['HAMS Hospital', 'Hospital for Advanced Medicine & Surgery', 'HAMS Kathmandu'],
  },
  nagarik: {
    title: 'Nagarik Hospital, Bhaktapur | HAMS Group Nepal',
    description: 'Nagarik Community Teaching Hospital in Gatthaghar, Bhaktapur, managed by HAMS Hospital. Explore multispecialty services and hospital contact details.',
    keywords: ['Nagarik Hospital', 'Nagarik Community Teaching Hospital', 'Nagarik Hospital Bhaktapur'],
  },
  'hams-motors': {
    title: 'HAMs Motors Nepal | Electric Vehicles | HAMS Group',
    description: 'Discover HAMs Motors in Nepal: electric passenger and commercial vehicles, fleet solutions, servicing and spare parts for Kawei, Naveco and Iveco.',
    keywords: ['Hams Motor', 'HAMs Motors', 'HAMS electric vehicles', 'Kawei Nepal', 'Naveco Nepal', 'Iveco Nepal'],
  },
  'qj-motor': {
    title: 'QJMOTOR Nepal | Motorcycles & Test Rides | HAMS Group',
    description: 'Explore QJMOTOR Nepal through HAMS Group: discover motorcycles, visit the Teku, Kathmandu showroom and connect with the team to arrange a test ride.',
    keywords: ['QJ Motor', 'QJMOTOR', 'QJMOTOR Nepal', 'QJ Motor Nepal', 'motorcycles Nepal'],
  },
};
