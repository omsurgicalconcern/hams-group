import { asset } from '../lib/businesses';
import medicalBrands from '../lib/medical-brands.json';

const motorBrands = [
  { name: 'Kawei', image: 'Automobile/Kawei Logo Blue.png' },
  { name: 'QJ Motor', image: 'Automobile/QJ Motor/qjmotor-logo.png' },
  { name: 'Naveco', image: 'Automobile/Naveco Logo blue.png' },
];

export default function BrandAlliances({ category }) {
  const medical = category === 'medical-devices';
  const brands = medical ? medicalBrands : motorBrands;
  return <section className="brand-alliances section-space" aria-labelledby="alliance-title">
    <div className="shell alliance-heading">
      <p className="eyebrow">Global alliances</p>
      <h2 id="alliance-title">Brands we offer<span className="gold-dot">.</span></h2>
      <p className="alliance-description">{medical ? 'Global medical technology brands offered through Om Surgical Concern.' : 'Kawei, QJ Motor and Naveco. More possibilities on the road.'}</p>
    </div>
    {medical ? <div className="alliance-marquee">
      <div className="alliance-track" aria-hidden="true">
        {[0, 1].map(copy => <div className="alliance-group" key={copy}>{brands.map((brand, index) => <div className="alliance-logo" key={`${brand.name}-${index}`}>
          {brand.image ? <img src={asset(brand.image)} alt="" width="180" height="100" loading="lazy" /> : <span className="alliance-wordmark">{brand.name}</span>}
        </div>)}</div>)}
      </div>
    </div> : <div className="shell alliance-static">{brands.map(brand => <div className="alliance-logo" key={brand.name}><img src={asset(brand.image)} alt={brand.name} width="180" height="100" loading="lazy" /></div>)}</div>}
    {medical && <ul className="sr-only" aria-label="Brands we offer">{brands.map(brand => <li key={brand.name}>{brand.name}</li>)}</ul>}
  </section>;
}
