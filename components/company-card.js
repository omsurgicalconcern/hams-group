import { asset, companyPath } from '../lib/businesses';
import Arrow from './arrow';
import CompanySocials from './company-socials';

export default function CompanyCard({ company }) {
  return <article className="company-card"><a href={companyPath(company)} className="company-card-main">
    <div className={`company-card-image${company.imageMode ? ` is-${company.imageMode}` : ''}`}><img src={asset(company.image)} alt={company.imageAlt} width="700" height="500" loading="lazy" /><span className="company-card-arrow"><Arrow diagonal /></span></div>
    <div className="company-card-copy"><h3>{company.name}</h3><p>{company.summary}</p><span className="card-link">Discover company <Arrow /></span></div>
  </a><CompanySocials company={company} /></article>;
}
