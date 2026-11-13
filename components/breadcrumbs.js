import { basePath } from '../lib/businesses';
import { siteUrl } from '../lib/seo';
import StructuredData from './structured-data';

export default function Breadcrumbs({ items }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: new URL(basePath && item.href.startsWith(`${basePath}/`) ? item.href.slice(basePath.length) : item.href, siteUrl).href } : {}),
    })),
  };
  return <><StructuredData data={schema} /><nav className="breadcrumbs" aria-label="Breadcrumb"><ol>{items.map((item, index) => <li key={item.label}>{index > 0 && <span aria-hidden="true">/</span>}{item.href ? <a href={item.href}>{item.label}</a> : <span aria-current="page">{item.label}</span>}</li>)}</ol></nav></>;
}
