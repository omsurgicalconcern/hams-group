const platforms = [
  ['facebook', 'Facebook'],
  ['instagram', 'Instagram'],
  ['linkedin', 'LinkedIn'],
];

export default function CompanySocials({ company }) {
  const links = platforms.filter(([key]) => company.socials?.[key]);
  if (!links.length) return null;

  return <nav className="company-socials" aria-label={`${company.shortName} social media`}>
    {links.map(([key, label]) => <a key={key} href={company.socials[key]} target="_blank" rel="noopener noreferrer" aria-label={`${company.shortName} on ${label} (opens in a new tab)`}>{label}</a>)}
  </nav>;
}
