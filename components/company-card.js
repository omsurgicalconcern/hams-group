import { asset, companyPath } from '../lib/businesses';
import Arrow from './arrow';

export default function CompanyCard({ company }) {
  return <a href={companyPath(company)} className="company-card">
    <div className={`company-card-image${company.imageMode ? ` is-${company.imageMode}` : ''}`}><img src={asset(company.image)} alt={company.imageAlt} width="700" height="500" loading="lazy" /><span className="company-card-arrow"><Arrow diagonal /></span></div>
    <div className="company-card-copy"><h3>{company.name}</h3><p>{company.summary}</p><span className="card-link">Discover company <Arrow /></span></div>
  </a>;
}
