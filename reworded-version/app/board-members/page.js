import SiteHeader from '../../components/site-header';
import SiteFooter from '../../components/site-footer';
import Breadcrumbs from '../../components/breadcrumbs';
import { asset, sitePath } from '../../lib/businesses';

export const metadata = { title: 'Board Members | HAMS Group', description: 'Meet HAMS Group Chairperson Ram Sharan Bhandari and CEO Ajay Bhardwaj.' };

export default function BoardMembersPage() {
  return <><SiteHeader /><main id="main"><section className="editorial-intro"><div className="shell"><Breadcrumbs items={[{label:'Home',href:sitePath('/')},{label:'Board Members'}]} /><p className="eyebrow">Our leadership</p><h1 id="board-heading">Board Members<span>.</span></h1><p className="editorial-lead">The people guiding our shared direction.</p></div></section>
      <section id="board-members" className="board-section section-space" aria-labelledby="board-heading">
        <div className="shell"><div className="leadership-profiles">
            <article className="leadership-profile"><h2 className="leadership-title">Meet our <em>Chairperson</em></h2><div className="leadership-panel"><div className="leadership-portrait"><img src={asset('leadership/ram-sharan-bhandari.jpeg')} alt="Ram Sharan Bhandari, Chairperson" width="600" height="800" loading="lazy" /></div><div className="leadership-copy"><p className="eyebrow">A shared vision</p><h3>Progress with people<br />at its heart.</h3><p>HAMS Group brings diverse businesses together around one human purpose: moving life forward. Better care, greater mobility and useful technology are all expressions of that shared ambition.</p><p>Our direction is grounded in trust, responsible innovation and the belief that growth matters when it improves everyday life.</p><div className="leadership-signature"><span>Ram Sharan Bhandari</span><p>Chairperson</p></div></div></div></article>
            <article className="leadership-profile leadership-reverse"><h2 className="leadership-title">Meet our <em>CEO</em></h2><div className="leadership-panel"><div className="leadership-portrait"><img src={asset('leadership/ajay-bhardwaj.webp')} alt="Ajay Bhardwaj, CEO" width="1000" height="1250" loading="lazy" /></div><div className="leadership-copy"><p className="eyebrow">Moving forward, together</p><h3>One purpose.<br />Everyday progress.</h3><p>Across HAMS, people, technology and disciplined execution come together to turn shared ambition into practical progress.</p><p>Different businesses share the same commitment: putting people first, earning trust, raising the standard and building capabilities for tomorrow.</p><div className="leadership-signature"><span>Ajay Bhardwaj</span><p>CEO</p></div></div></div></article>
          </div>
        </div>
      </section>


  </main><SiteFooter /></>;
}

