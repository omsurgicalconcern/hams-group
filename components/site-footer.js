import { asset, categories, sitePath } from '../lib/businesses';

export default function SiteFooter() {
  return <footer><div className="shell"><div className="footer-main"><a href={sitePath('/')} className="footer-logo" aria-label="HAMS Group home"><img src={asset('hams-logo.svg')} alt="HAMS Group" width="210" height="73" /></a><p>Many businesses.<br />One human purpose.</p><nav aria-label="Footer navigation"><a href={sitePath('/about/')}>About HAMS</a><a href={sitePath('/board-members/')}>Board Members</a>{categories.map(category => <a key={category.slug} href={sitePath(`/${category.slug}/`)}>{category.name}</a>)}</nav><a href="#" className="back-top">Back to top <span>↑</span></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} HAMS Group.</span><span>Moving Life Forward.</span><span>Nepal</span></div></div></footer>;
}

