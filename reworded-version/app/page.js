import SiteHeader from '../components/site-header';
import SiteFooter from '../components/site-footer';
import { CinematicHero, BusinessExplorer, ChairpersonStatement } from '../components/home-experience';
import Arrow from '../components/arrow';
import { asset, sitePath } from '../lib/businesses';

export default function Home() {
  return <><SiteHeader/><main id="main"><CinematicHero/><ChairpersonStatement/><BusinessExplorer/>
    <section className="progress-stories" aria-label="What moves us">
      {[{label:'Human first',title:<>Progress with<br/>people at its heart.</>,image:'Hospital/hams-team-upscaled.webp',text:'Our measure of progress is what becomes possible for people, organisations and communities.',link:'/about/',action:'Our shared purpose'}, {label:'Build for tomorrow',title:<>A stronger<br/>tomorrow.</>,image:'Automobile/banner.png',text:'Invest in people and capabilities that create lasting value.',link:'/about/#values',action:'What moves us'}, {label:'One HAMS',title:<>Different businesses.<br/>Shared standards.</>,image:'IT/coding-laptop.jpg',text:'People + Technology + Execution. Moving forward together.',link:'/board-members/',action:'Meet our leadership'}].map((story,index)=><article className="progress-story" key={story.label}><img src={asset(story.image)} alt="" loading="lazy"/><div className="story-shade"/><div className="shell story-copy"><p className="eyebrow">0{index+1} / {story.label}</p><h2>{story.title}</h2><p>{story.text}</p><a className="outline-link" href={sitePath(story.link)}>{story.action}<Arrow/></a></div></article>)}
    </section>
    <section id="people" className="people-section section-space"><div className="shell"><div className="people-heading"><p className="eyebrow">Grow with purpose</p><h2>People who move<br/>us forward<span>.</span></h2><p>Meaningful work starts with people who care about what they build. Our culture brings together curiosity, responsibility and the ambition to keep raising the standard.</p></div><div className="people-grid">{[{title:'Our values',image:'Hospital/hams-team-upscaled.webp',href:'/about/#values'},{title:'A shared ambition',image:'technology.jpg',href:'/about/'},{title:'Our leadership',image:'leadership/ajay-bhardwaj.webp',href:'/board-members/'}].map(item=><a href={sitePath(item.href)} key={item.title}><img src={asset(item.image)} alt="" loading="lazy"/><span>{item.title}<Arrow diagonal/></span></a>)}</div></div></section>
    <section className="closing-section"><div className="shell"><p className="eyebrow">The next chapter</p><h2>Building a better<br/>tomorrow, together<span>.</span></h2><a className="round-link" href="#businesses" aria-label="Explore our businesses"><Arrow diagonal/></a></div></section>
  </main><SiteFooter/></>;
}
