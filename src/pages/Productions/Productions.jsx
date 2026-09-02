import useReveal from '../../hooks/useReveal.js'
import ContactForm from '../../components/ContactForm/ContactForm.jsx'
import ProductionBottomNav from './components/ProductionBottomNav.jsx'
import FeaturedLinks from './components/FeaturedLinks.jsx'
import {
  heroLight, heroLocationIcon, heroBlob, heroScreenBg, heroEyeIcon,
  carouselCardPhoto, carouselTrendIcon, spark, serviceVideos,
  workAvatar, workLinkIcon, workArrowIcon, cinematicShowcase,
} from '../../assets/production/index.js'
import './Productions.css'

const carouselCards = [
  'Podcast Shoot', 'Short Film Shoot', 'Client Shoot', 'Music Shoot',
  'Product Shoot', 'Event Shoot', 'UGC Shoot',
]
// Repeated to fill the ring, matching the Figma's ~19 hand-placed instances
const ringCards = Array.from({ length: 19 }, (_, i) => carouselCards[i % carouselCards.length])

const services = [
  {
    title: '✦  Client Shoot',
    desc: 'From products and services to founders and teams, we execute professional client shoots tailored for advertising, social media, websites, and digital campaigns. Every frame is crafted to communicate your brand with clarity, quality, and impact.',
  },
  {
    title: '✦  Music Shoot',
    desc: 'Turn sound into a visual experience. At QPIC Productions, we create cinematic music videos with compelling storytelling, creative direction, and high-end production quality. Every frame is designed to amplify your music and bring your artistic vision to life.',
  },
  {
    title: '✦  Short Film Shoot',
    desc: 'Every story deserves to be told with purpose. At QPIC Productions, we create cinematic short films that blend compelling storytelling with high-end visuals and emotional depth, from concept development to final production.',
  },
  {
    title: '✦  Podcast Shoot',
    desc: 'Professional podcasts deserve a professional production. At QPIC Productions, we deliver high-quality podcast shoots with cinematic multi-camera setups, crystal-clear audio, and refined lighting, ready for every platform.',
  },
  {
    title: '✦  Event Shoot',
    desc: 'Every event tells a story worth remembering. At QPIC Productions, we capture conferences, launches, celebrations, and live experiences with cinematic precision — from candid moments to grand highlights.',
  },
  {
    title: '✦  UGC Model Shoot',
    desc: "Authenticity drives engagement, and that's exactly what our UGC model shoots deliver. We create natural, relatable, and high-converting content with carefully selected creators tailored to your brand.",
  },
  {
    title: '✦  Product Shoot',
    desc: 'A great product deserves exceptional presentation. At QPIC Productions, we create premium product photography and cinematic product films that highlight every detail, texture, and feature with precision.',
  },
]

const workCards = [
  {
    title: 'Music video shoot',
    desc: 'From products and services to founders and teams, we execute professional client shoots tailored for advertising, social media, websites, and digital campaigns. Every frame is crafted to communicate your brand with clarity, quality, and impact.',
  },
  {
    title: 'Short Film Shoot',
    desc: 'Every great story begins with a powerful vision. At QPIC Productions, we craft cinematic short films that combine compelling narratives, immersive visuals, and exceptional production quality, from concept to final cut.',
  },
  {
    title: 'Shoot for Client',
    desc: 'From products and services to founders and teams, we execute professional client shoots tailored for advertising, social media, websites, and digital campaigns. Every frame is crafted to communicate your brand with clarity, quality, and impact.',
  },
  {
    title: 'Podcast Shoot',
    desc: 'From insightful conversations to professional productions, we create podcast shoots that look as good as they sound — with cinematic visuals, studio-quality audio, and polished editing for every platform.',
  },
  {
    title: 'UGC Model Shoot',
    desc: 'Real people create real connections. Our UGC model shoots deliver authentic, relatable content that builds trust and showcases your products in everyday moments, crafted for social platforms.',
  },
  {
    title: 'Product Shoot',
    desc: 'Make every product impossible to overlook. At QPIC Productions, we create premium product shoots that showcase every detail with precision, creativity, and refined lighting — for e-commerce and advertising alike.',
  },
  {
    title: 'Shoot For Event',
    desc: 'From intimate gatherings to grand-scale celebrations, we capture every moment with cinematic precision — preserving the energy, emotions, and highlights of your occasion for years to come.',
  },
]

function CircularCarousel() {
  const radius = 50 // % of ring container
  return (
    <div className="prod-carousel reveal">
      <h2 className="prod-carousel__title">Outstanding Quality</h2>
      <div className="prod-carousel__ring-viewport">
        <div className="prod-carousel__ring">
          {ringCards.map((title, i) => {
            const angle = (i / ringCards.length) * 360
            const rad = (angle * Math.PI) / 180
            const x = 50 + radius * Math.sin(rad)
            const y = 50 - radius * Math.cos(rad)
            return (
              <div
                className="prod-carousel__card"
                key={i}
                style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
              >
                <div
                  className="prod-carousel__card-photo"
                  style={{ backgroundImage: `url(${carouselCardPhoto})`, backgroundSize: 'cover' }}
                />
                <div className="prod-carousel__card-badge">
                  <img src={carouselTrendIcon} alt="" />
                  Trending
                </div>
                <p className="prod-carousel__card-title">{title}</p>
                <span className="prod-carousel__card-cta">Checkout</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function WorkCard({ card, reverse }) {
  return (
    <article className={`prod-work-card reveal ${reverse ? 'prod-work-card--reverse' : ''}`}>
      <div className="prod-work-card__blob" />
      <div className="prod-work-card__text">
        <h3>✦ {card.title}</h3>
        <p>{card.desc}</p>
        <div className="prod-work-card__featured">
          <div className="prod-work-card__featured-label">
            <img src={workLinkIcon} alt="" />
            Featured links
          </div>
          <div className="prod-work-card__link">
            <div className="prod-work-card__link-left">
              <img src={workAvatar} alt="" className="prod-work-card__link-avatar" />
              <div>
                <p className="prod-work-card__link-name">QPIC Productions</p>
                <div className="prod-work-card__link-tags">
                  <span className="prod-work-card__link-tag prod-work-card__link-tag--red">Youtube Channel</span>
                  <span className="prod-work-card__link-tag prod-work-card__link-tag--green">Video Link Attached</span>
                </div>
              </div>
            </div>
            <div className="prod-work-card__link-arrow">
              <img src={workArrowIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="prod-work-card__video">
        <FeaturedLinks videos={serviceVideos.slice(0, 4)} alt={card.title} />
      </div>
    </article>
  )
}

export default function Productions() {
  useReveal()

  return (
    <div className="production">
      {/* HERO — pulled up behind the transparent sticky navbar */}
      <section className="prod-hero">
        <div className="prod-hero__panel">
          <div className="prod-hero__light" style={{ backgroundImage: `url(${heroLight})` }} />
          <p className="prod-hero__its">It's</p>
          <p className="prod-hero__qpic">QPIC</p>
          <div className="prod-hero__location">
            <img src={heroLocationIcon} alt="" />
            <span>Jaipur</span>
          </div>
          <h1 className="prod-hero__title">Productions</h1>
        </div>
      </section>

      {/* "YouTube mockup" video showcase */}
      <div className="prod-hero__screen" style={{ backgroundImage: `url(${heroScreenBg})` }}>
        <div className="prod-hero__screen-overlay">
          <p className="prod-hero__screen-title">3 PISTOL</p>
          <p className="prod-hero__screen-sub">RANA | Latest Punjabi Songs 2026 | New Punjabi Song</p>
          <div className="prod-hero__screen-views">
            <img src={heroEyeIcon} alt="" />
            236K
          </div>
          <p className="prod-hero__screen-tags">#PunjabiSongs #2026 #QPICProductions</p>
        </div>
      </div>

      <div className="prod-blob" style={{ left: '25%', top: '40px' }} />

      <section className="prod-intro reveal">
        <p className="prod-intro__kicker">That what we do at</p>
        <h2 className="prod-intro__title">QPIC Productions</h2>
      </section>

      <div className="prod-ribbon">
        <div className="prod-ribbon__track">
          {Array(3).fill('✦ Client Shoot   ✦ Music Shoot   ✦ Short-Film Shoot   ✦ Podcast Shoot   ✦ Event Shoot   ✦ UGC Model Shoot   ✦ Product Shoot   ').map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>
      </div>

      <section className="section" style={{ position: 'relative' }}>
        <div className="prod-blob" style={{ left: '25%', top: '80px' }} />
        <CircularCarousel />
        <img src={spark} alt="" className="prod-spark" />
      </section>

      {/* SERVICES OFFERED */}
      <section className="section" id="services">
        <div className="container">
          <h2 className="section-title reveal" style={{ color: '#fff', marginBottom: 48 }}>Services Offered</h2>
          <div className="prod-services">
            {services.map((service, i) => (
              <article className={`prod-service-row reveal ${i % 2 === 1 ? 'prod-service-row--reverse' : ''}`} key={service.title}>
                <div className="prod-service-row__text">
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </div>
                <div className="prod-service-row__video">
                  <img src={serviceVideos[i % serviceVideos.length]} alt={`${service.title} preview`} loading="lazy" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* OUR WORK */}
      <section className="section" id="work">
        <div className="container">
          <h2 className="section-title reveal" style={{ color: '#fff', marginBottom: 24 }}>Our Work</h2>
          <img src={spark} alt="" className="prod-spark" />
          <div className="prod-work">
            {workCards.map((card, i) => (
              <WorkCard
                card={card}
                reverse={i % 2 === 1}
                key={card.title}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Cinematic showcase */}
      <div className="prod-showcase reveal">
        <img src={cinematicShowcase} alt="QPIC cinematic website showcase" loading="lazy" />
      </div>

      {/* CONTACT — reuses shared ContactForm */}
      <section className="section" id="contact">
        <div className="container">
          <h2 className="section-title prod-contact-title reveal">Contact us</h2>
          <div className="reveal">
            <ContactForm />
          </div>
        </div>
      </section>

      <p className="prod-tagline reveal">
        Every frame has the power to inspire, influence, and be remembered. Let's create visuals that don't just
        tell your story—they define your brand.
        <br />
        Welcome to the future of production with <em>QPIC Productions.</em>
      </p>

      {/* Page-local floating bottom nav, unique to the Productions page */}
      <ProductionBottomNav />
    </div>
  )
}
