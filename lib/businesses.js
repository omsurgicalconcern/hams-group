export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
export const sitePath = (path = '/') => `${basePath}${path}`;
export const asset = (name) => sitePath(`/images/${name.split('/').map(encodeURIComponent).join('/')}`);
export const companyPath = (company) => sitePath(`/${company.category}/${company.slug}/`);

export const categories = [
  { slug: 'hospital', name: 'Hospitals', number: '01', message: 'Better Health. Humanly Delivered.', headline: 'Care begins with people.', description: 'Our hospitals bring together clinical expertise, technology and compassionate care. Explore the institutions connecting people and communities with healthcare.', focus: ['People-centred care', 'Clinical expertise', 'Community connection'] },
  { slug: 'automobile', name: 'Automobiles', number: '02', message: 'Greater Mobility. More Possibility.', headline: 'More freedom. More possibility.', description: 'From electric passenger transport to motorcycles, our mobility businesses connect people with new possibilities on the road.', focus: ['Electric mobility', 'Motorcycling', 'Service and support'] },
  { slug: 'medical-devices', name: 'Medical Devices', number: '03', message: 'Better Tools. Better Decisions.', headline: 'The tools behind better care.', description: 'Our medical supply businesses connect healthcare professionals with diagnostic technology, laboratory solutions and everyday care essentials.', focus: ['Diagnostic technology', 'Medical equipment', 'Healthcare supplies'] },
  { slug: 'it-ites', name: 'IT & ITES', number: '04', message: 'Smarter Technology. Stronger Business.', headline: 'Ideas, built into progress.', description: 'Our digital business brings design, development and automation together to solve practical business challenges.', focus: ['Digital experiences', 'Business software', 'AI and automation'] },
];

export const companies = [
  {
    category: 'hospital', slug: 'hams', name: 'HAMS Hospital', shortName: 'HAMS Hospital',
    image: 'Hospital/HAMS/Hams-hosptal.jpg', imageAlt: 'HAMS Hospital building in Kathmandu',
    tagline: 'Evidence-based medicine. Human-centred care.',
    summary: 'Multidisciplinary tertiary care in Dhumbarahi, Kathmandu.',
    description: 'Hospital for Advanced Medicine & Surgery brings specialist teams, nursing care and medical technology together in Dhumbarahi, Kathmandu. The hospital places safe, evidence-based practice and ethical care at the centre of its work.',
    services: ['Specialist consultations', 'Cardiology and cardiovascular surgery', 'Pulmonary and critical care', 'Diagnostics and radiology', 'Emergency and ambulance services', 'HAMS at Home'],
    website: 'https://hamshospital.com/', source: 'https://hamshospital.com/introduction/',
    address: 'Mandikhatar Road, Dhumbarahi, Kathmandu, Nepal', phone: '01-4377404', email: 'info@hamshospital.com',
    action: 'Explore hospital services',
  },
  {
    category: 'hospital', slug: 'nagarik', name: 'Nagarik Community Teaching Hospital', shortName: 'Nagarik Hospital',
    image: 'Hospital/Nagarik/nagarik.jpg', imageAlt: 'Nagarik Community Teaching Hospital building',
    tagline: 'Compassion, capability and community.',
    summary: 'Multispecialty healthcare in Gatthaghar, Bhaktapur.',
    description: 'Managed by HAMS Hospital, Nagarik Community Teaching Hospital combines patient care with medical education. Its multidisciplinary services span emergency medicine, surgery, maternal and child health, and diagnostics, with an emphasis on compassion and patient safety.',
    services: ['Emergency care', 'General surgery', 'Cardiology', 'Gynaecology and paediatrics', 'Orthopaedics', 'Laboratory and radiology'],
    website: 'https://www.nagarikhospital.com.np/', source: 'https://www.nagarikhospital.com.np/about-us/',
    address: 'Gatthaghar, Bhaktapur, Nepal', phone: '+977-1-6637700', action: 'Explore hospital services',
  },
  {
    category: 'hospital', slug: 'sindhu-sadabahar', name: 'Sindhu Sadabahar Hospital', shortName: 'Sindhu Sadabahar',
    image: 'Hospital/Sindhu Sadabahar/hospital.webp', imageAlt: 'Sindhu Sadabahar Hospital courtyard and care team',
    tagline: 'Healthcare connected to community.',
    summary: 'A community hospital in Sindhupalchowk.',
    description: 'Established by Dr. R.S. Bhandari in his home district of Sindhupalchowk, Sindhu Sadabahar Hospital provides medical services to the local community. It extends the group’s healthcare presence beyond Kathmandu.',
    services: [], source: 'https://www.omsurgicalconcern.com/about', address: 'Sindhupalchowk, Nepal',
  },
  {
    category: 'automobile', slug: 'hams-motors', name: 'HAMs Motors', shortName: 'HAMs Motors',
    image: 'Automobile/HAMs Motor/showroom.webp', imageAlt: 'HAMs Motors electric vehicle showroom',
    logo: 'Automobile/HAMs Motor/Hams-motor-logo-hq-primary 1.png',
    tagline: 'Electric mobility for the road ahead.',
    summary: 'Electric passenger and commercial mobility in Nepal.',
    description: 'HAMs Motors brings electric vehicle solutions to Nepal through Kawei, Naveco and Iveco. Its focus covers passenger routes, commercial transport and fleet operations, supported by servicing, spare parts and charging guidance.',
    services: ['Electric passenger vehicles', 'Commercial mobility', 'Fleet solutions', 'Service and maintenance', 'Spare parts', 'Charging support'],
    website: 'https://hams.com.np/', source: 'https://hams.com.np/', action: 'Explore electric vehicles',
  },
  {
    category: 'automobile', slug: 'qj-motor', name: 'QJMOTOR Nepal', shortName: 'QJMOTOR Nepal',
    image: 'Automobile/QJ Motor/showroom.webp', imageAlt: 'QJMOTOR Nepal motorcycle showroom', logo: 'Automobile/QJ Motor/qjmotor-logo.png',
    tagline: 'A new chapter on two wheels.',
    summary: 'QJMOTOR motorcycles, model discovery and test rides.',
    description: 'QJMOTOR Nepal is the official distributor of QJMOTOR motorcycles in Nepal. Riders can explore the current model lineup, visit the showroom and arrange a test ride with the local team.',
    services: ['Motorcycle model lineup', 'Showroom visits', 'Test-ride enquiries'],
    website: 'https://www.qjmotornepal.com/', source: 'https://www.qjmotornepal.com/',
    address: 'Teku-11, Kathmandu, Nepal', phone: '+977-1-4978671', email: 'info@hams.com.np', action: 'Explore motorcycles',
  },
  {
    category: 'medical-devices', slug: 'om-surgical', name: 'Om Surgical Concern', shortName: 'Om Surgical Concern',
    image: 'Medical-devices/OM Surgical/OMSC-logoWithoutBg.png', imageAlt: 'Om Surgical Concern company logo', logo: 'Medical-devices/OM Surgical/OMSC-logoWithoutBg.png', imageMode: 'logo',
    tagline: 'Strengthening the science behind care.',
    summary: 'In-vitro diagnostics and laboratory solutions across Nepal.',
    description: 'Founded in 2001, Om Surgical Concern supplies diagnostic equipment and supports laboratory establishment in Nepal. Its offering brings together instruments, reagents, installation and technical support for healthcare institutions.',
    services: ['Diagnostic equipment', 'Laboratory setup', 'Installation support', 'Reagents and diagnostic kits', 'Preventive maintenance', 'Technical support'],
    website: 'https://www.omsurgicalconcern.com/', source: 'https://www.omsurgicalconcern.com/',
    address: 'Dhumbarahi-04, Kathmandu, Nepal', phone: '+977-1-4538354', email: 'admin@omsurgicalconcern.com', action: 'Explore diagnostic solutions',
  },
  {
    category: 'medical-devices', slug: 'bhandari-surgical', name: 'Bhandari Surgical House', shortName: 'Bhandari Surgical House',
    image: 'Medical-devices/Bhandari Surgical/logo.png', imageAlt: 'Bhandari Surgical House company logo', logo: 'Medical-devices/Bhandari Surgical/logo.png', imageMode: 'logo',
    tagline: 'Equipping everyday healthcare.',
    summary: 'Medical equipment, surgical supplies and home healthcare.',
    description: 'Bhandari Surgical House supplies equipment and essentials for clinical, laboratory and home healthcare settings. Its catalogue spans diagnostic devices, hospital furniture, surgical instruments, reagents and products that support care at home.',
    services: ['Diagnostic equipment', 'Home healthcare products', 'Hospital furniture', 'Laboratory equipment', 'Reagents and kits', 'Surgical equipment and instruments'],
    website: 'https://www.bhandarisurgicalhouse.com/', source: 'https://www.bhandarisurgicalhouse.com/',
    phone: '+977-1-5352144', action: 'Explore healthcare products',
  },
  {
    category: 'it-ites', slug: 'omnitrident-ai', name: 'OmniTrident AI', shortName: 'OmniTrident AI',
    image: 'IT/software-development.webp', imageAlt: 'Software development workspace from OmniTrident AI', logo: 'IT/omnitrident-logo.png',
    tagline: 'Digital ideas, built for business.',
    summary: 'Websites, software, digital marketing and AI workflows.',
    description: 'OmniTrident AI builds digital experiences and business tools within the HAMS Group ecosystem. Its team connects website development, software, digital marketing and AI automation around practical business needs, from customer journeys to everyday workflows.',
    services: ['Website development', 'Custom software', 'Digital marketing', 'AI automation', 'Chatbots and lead handling', 'Workflow automation'],
    website: 'https://www.omnitridentai.com.np/', source: 'https://www.omnitridentai.com.np/',
    address: 'Dhumbarahi-04, Kathmandu, Nepal', phone: '+977-9861447517', email: 'omnitridentai@gmail.com', action: 'Explore digital services',
  },
];

export const companiesIn = (category) => companies.filter(company => company.category === category);
