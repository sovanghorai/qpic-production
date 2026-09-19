import useReveal from '../../hooks/useReveal.js'
import ContactForm from '../../components/ContactForm/ContactForm.jsx'
import ProductionBottomNav from './components/ProductionBottomNav.jsx'
import FeaturedLinks from './components/FeaturedLinks.jsx'
import ProductionVideoSlider from './components/ProductionVideoSlider.jsx'
import ProductionHeroVideo from '../../assets/production/videos/Productions_hero.mp4'
import heroScreenBg from '../../assets/production/videos/music_video.mp4'
import cinematicShowcase from '../../assets/media/videos/Chandan_Ji_video.mp4'
import {
  heroScreenThumb,
  carouselCardPhoto, carouselTrendIcon, spark, serviceVideos,
  workAvatar, workLinkIcon, workArrowIcon,
} from '../../assets/production/index.js'
import './Productions.css'

// ===== Video section DIRECTLY BELOW the Hero — completely independent of
// the Hero video. `ProductionHeroVideo` must never appear in this array;
// it belongs only to the Hero's own <video> element. Fully data-driven via
// ProductionVideoSlider — add more objects (video or image type) and the
// slider adapts automatically, including prev/next arrows. With exactly
// one entry the arrows render disabled rather than faking a loop. =====
const featuredVideos = [
  {
    type: 'video',
    src: heroScreenBg,
    title: '3 PISTOL',
    subtitle: 'RANA | Latest Punjabi Songs 2026 | New Punjabi Song',
    views: '236K',
    tags: '#PunjabiSongs #2026 #QPICProductions',
    preview: heroScreenThumb,
  },
]

// ===== Our Work — nested array structure. Each inner array belongs to one
// work item; index 0 of that inner array is the main video, the rest are
// the additional thumbnails. Only 2 entries populated for now — more can
// be appended later without any JSX changes.
//
// NOTE: real distinct clips for these 8 slots aren't available yet, so the
// existing 6 service-preview images are reused/combined as placeholders
// (some repeats) until real Our-Work-specific assets are supplied. =====
const workVideos = [
  [serviceVideos[0], serviceVideos[1], serviceVideos[2], serviceVideos[3]],
  [serviceVideos[4], serviceVideos[5], serviceVideos[0], serviceVideos[1]],
  [serviceVideos[2], serviceVideos[3], serviceVideos[4], serviceVideos[1]],
  [serviceVideos[3], serviceVideos[4], serviceVideos[1], serviceVideos[2]],
]

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

function WorkCard({ card, videos, reverse }) {
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
        <FeaturedLinks videos={videos} alt={card.title} />
      </div>
    </article>
  )
}

export default function Productions() {
  useReveal()

  return (
    <div className="production">
      {/* HERO — ProductionHeroVideo plays directly here and ONLY here.
          The video already contains its own animated text ("It's / QPIC /
          Jaipur / Productions"), so there is no text overlay, no badge, and
          no separate CSS/React entrance animation layered on top of it. */}
      <section className="prod-hero">
        <video className="prod-hero__video" src={ProductionHeroVideo} autoPlay muted loop playsInline />
      </section>

      {/* VIDEO SECTION DIRECTLY BELOW HERO — a completely separate section
          from the Hero above. Uses its own independent data (featuredVideos)
          and its own ProductionVideoSlider instance; the Hero video is never
          passed in here. */}
      <div className="prod-featured-section">
        <ProductionVideoSlider items={featuredVideos} />
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
          <h2
            className="section-title reveal"
            style={{
              color: '#fff',
              marginBottom: 48,
            }}
          >
            Services Offered
          </h2>

          <div className="prod-services">
            {services.map((service, i) => (
              <article
                className={`prod-service-row reveal ${
                  i % 2 === 1 ? 'prod-service-row--reverse' : ''
                }`}
                key={service.title}
              >
                {/* Service description */}
                <div className="prod-service-row__text">
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </div>

                {/* Service video */}
                <div className="prod-service-row__video">
                  <video
                    key={serviceVideos[i % serviceVideos.length]}
                    src={serviceVideos[i % serviceVideos.length]}
                    className="prod-service-row__media"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* OUR WORK — driven by the `workVideos` nested array; only as many
          cards render as there are entries in workVideos (2 for now). Add
          more inner arrays to workVideos and they'll appear automatically,
          no JSX changes needed. */}
      <section className="section" id="work">
        <div className="container">
          <h2 className="section-title reveal" style={{ color: '#fff', marginBottom: 24 }}>Our Work</h2>
          <img src={spark} alt="" className="prod-spark" />
          <div className="prod-work">
            {workVideos.map((videos, i) => (
              <WorkCard
                card={workCards[i % workCards.length]}
                videos={videos}
                reverse={i % 2 === 1}
                key={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Cinematic showcase */}
      <div className="prod-showcase reveal">
        <video
          src={cinematicShowcase}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="QPIC cinematic website showcase"
        />
      </div>
      
      <p className="prod-tagline reveal">
        Every frame has the power to inspire, influence, and be remembered. Let's create visuals that don't just
        tell your story—they define your brand.
        <br />
        Welcome to the future of production with <em>QPIC Productions.</em>
      </p>
      
      {/* CONTACT — reuses shared ContactForm */}
      <section className="section" id="contact">
        <div className="container">
          <h2 className="section-title prod-contact-title reveal">Contact us</h2>
          <div className="reveal">
            <ContactForm />
          </div>
        </div>
      </section>

      

      {/* Page-local floating bottom nav, unique to the Productions page */}
      <ProductionBottomNav />
    </div>
  )
}
