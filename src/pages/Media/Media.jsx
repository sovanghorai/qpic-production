import useReveal from '../../hooks/useReveal.js'
import ContactForm from '../../components/ContactForm/ContactForm.jsx'
import { brandLogos } from '../../assets/common/logos/index.js'
import {
  heroGlow, scrollPhones, cinematicShowcase, icons, instagramUrl,
} from '../../assets/media/index.js'
import TheGridsOf3 from './sections/TheGridsOf3.jsx'
import SaleDrivenMultiGrid from './sections/SaleDrivenMultiGrid.jsx'
import D2CBranding from './sections/D2CBranding.jsx'
import './Media.css'

const services = [
  {
    title: '✦ Social Media Marketing',
    desc: "At QPIC Media, social media marketing is more than posting content—it's about building influence that drives measurable business growth. We combine audience psychology, data-driven strategy, premium content production, and performance-focused execution to transform brands into industry leaders. Every campaign is designed to increase visibility, strengthen brand authority, and turn attention into loyal customers.",
  },
  {
    title: '✦ Performance Marketing',
    desc: 'At QPIC Media, performance marketing is built around one goal—delivering measurable results. We create data-driven campaigns across leading digital platforms, continuously optimizing every ad, audience, and creative to maximize ROI. From generating high-quality leads to scaling profitable sales, our strategies ensure every marketing dollar works harder for your business.',
  },
  {
    title: '✦ Content Creation',
    desc: "Great content doesn't just look impressive—it creates impact. At QPIC Media, we produce visually compelling, platform-native content that captures attention within seconds and keeps audiences engaged. Every photo, video, reel, and creative asset is crafted to tell your brand's story, strengthen its identity, and inspire action.",
  },
  {
    title: '✦ Branding',
    desc: "A powerful brand is more than a logo—it's the perception people remember. At QPIC Media, we craft distinctive brand identities that communicate your vision, build trust, and create lasting emotional connections. From strategy and positioning to visual identity and messaging, we shape brands that stand out in competitive markets.",
  },
  {
    title: '✦ UI/UX & Development',
    desc: 'Exceptional digital experiences begin with thoughtful design and flawless execution. At QPIC Media, we blend intuitive UI/UX design with modern web and app development to create fast, responsive, and user-focused digital products that engage users and turn visitors into loyal customers.',
  },
]

const socialIconLayout = [
  { icon: icons.linkedin, style: { left: '9%', top: '58%' } },
  { icon: icons.pinterest, style: { left: '27%', top: '80%' } },
  { icon: icons.whatsapp, style: { left: '17%', top: '25%' } },
  { icon: icons.facebook, style: { left: '73%', top: '80%' } },
  { icon: icons.instagram, style: { left: '58%', top: '5%' } },
]

function ServiceIconPanel() {
  return (
    <div className="media-service-card__icon">
      {socialIconLayout.map((s, i) => (
        <img key={i} src={s.icon} alt="" className="media-social-icon" style={s.style} />
      ))}
      <div className="media-service-card__ring" />
      <p className="media-service-card__center-label">Your<br />Socials</p>
      <div className="media-service-card__cursor" style={{ left: '46%', top: '46%' }}>
        <img src={icons.handPointer} alt="" />
        <span className="media-service-card__cursor-tag">QPIC</span>
      </div>
      <div className="media-service-card__glow" style={{ background: 'radial-gradient(circle, #999, transparent 70%)' }} />
    </div>
  )
}

export default function Media() {
  useReveal()

  return (
    <div className="media">
      {/* HERO — full-bleed blurred video, pulled up behind the transparent navbar */}
      <section className="media-hero">
        <div className="media-hero__media" style={{ backgroundImage: `url(${heroGlow})` }} />
        <div className="media-hero__fade" />
      </section>

      <section className="media-intro reveal">
        <p className="media-intro__kicker">Welcome to our Social Media Arm</p>
        <h1 className="media-intro__title">QPIC Media</h1>
      </section>

      <section className="section">
        <div className="container">
          <p className="media-subtitle reveal">
            Content that stops the scroll. Strategy that dominates the market. We transform brands into category
            leaders through world-class social media. Built for the <em>top 1%,</em> not the average.
          </p>
        </div>
      </section>

      {/* Brand logo marquee — verified 45s linear infinite loop */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="media-logo-ribbon reveal">
            <div className="media-logo-track">
              {[...brandLogos, ...brandLogos].map((logo, i) => (
                <img key={i} src={logo} alt="" loading="lazy" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OUR SERVICES */}
      <section className="section" id="services">
        <div className="container">
          <h2 className="section-title reveal" style={{ marginBottom: 40 }}>Our Services</h2>
          <div className="media-services-panel reveal">
            {services.map((service, i) => (
              <article className={`media-service-card ${i % 2 === 1 ? 'media-service-card--reverse' : ''}`} key={service.title}>
                <div className="media-service-card__text">
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </div>
                <ServiceIconPanel />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* OUR WORK */}
      <section className="section" id="work">
        <div className="container">
          <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, marginBottom: 40 }}>
            <h2 className="section-title" style={{ textAlign: 'left', margin: 0 }}>Our Work</h2>
            <span className="section-title" style={{ fontSize: 'clamp(1.25rem,2.5vw,2.25rem)', margin: 0 }}>◻ From Artboards</span>
          </div>

          <div className="media-work-panel">
            <TheGridsOf3 />
            <SaleDrivenMultiGrid />
            <D2CBranding />

            {/* Case study 4 — Social Media Aesthetics: user-controlled scroll, no auto-scroll */}
            <article className="media-case reveal">
              <h3 className="media-case__title">✦ Social Media Aesthetics</h3>
              <p className="media-case__desc">
                A strong social media presence begins with a recognizable visual identity. At QPIC Media, we
                curate cohesive themes and premium aesthetics that make every post feel like part of a bigger
                brand story — consistent color palettes, refined layouts, and platform-specific design.
              </p>
              <div className="media-phones">
                {scrollPhones.map((phone, i) => (
                  <div className="media-phone" key={phone.name}>
                    <div className="media-phone__frame">
                      <div className="media-phone__scroll">
                        <img src={phone.image} alt={`${phone.name} Instagram feed preview`} loading="lazy" />
                      </div>
                    </div>
                    <a
                      className="media-phone__cta"
                      href={instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={icons.instagram} alt="" />
                      Check Social
                    </a>
                  </div>
                ))}
              </div>
              <p className="media-case__label">List Goes and Goes and Goes...</p>
            </article>
          </div>
        </div>
      </section>

      {/* Second logo marquee (closing bracket, same as Figma) */}
      <section className="section">
        <div className="container">
          <div className="media-logo-ribbon reveal">
            <div className="media-logo-track">
              {[...brandLogos, ...brandLogos].map((logo, i) => (
                <img key={i} src={logo} alt="" loading="lazy" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Text ribbon */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="media-text-ribbon reveal">
            <div className="media-text-track">
              {Array(3).fill('✦ Social Media Marketing ✦ Performance Marketing ✦ Content Creation ✦ Branding ✦ UI/UX & Development ').map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cinematic showcase */}
      <section className="section">
        <div className="container">
          <div className="media-showcase reveal">
            <img src={cinematicShowcase} alt="QPIC cinematic website showcase" loading="lazy" />
          </div>
        </div>
      </section>

      {/* FREE SOCIAL AUDIT — reuses shared ContactForm */}
      <section className="section" id="contact">
        <div className="container">
          <h2 className="section-title media-audit-title reveal">Free Social Audit</h2>
          <div className="reveal">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Page-local floating bottom nav, unique to the Media page */}
      <nav className="media-bottom-nav" aria-label="Media page sections">
        <a href="#top" className="media-bottom-nav__all" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
          <img src={icons.infinity} alt="" />
          All
        </a>
        <a href="#services" className="media-bottom-nav__link">Services</a>
        <span className="media-bottom-nav__divider" />
        <a href="#work" className="media-bottom-nav__link">Work</a>
        <span className="media-bottom-nav__divider" />
        <a href="#contact" className="media-bottom-nav__link">Free Social Audit</a>
      </nav>
    </div>
  )
}
