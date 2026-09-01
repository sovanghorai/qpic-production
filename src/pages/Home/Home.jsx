import { useState } from 'react'
import { Link } from 'react-router-dom'
import useReveal from '../../hooks/useReveal.js'
import ContactForm from '../../components/ContactForm/ContactForm.jsx'
import heroVideo from '../../assets/home/videos/hero_video.mp4'
import productionsVideo from '../../assets/home/videos/Qpic_Production_Video.mp4'
import mediaVideo from '../../assets/home/videos/Qpic_Media_Video.mp4'
import ChandanVideo from '../../assets/home/videos/Chandan_Ji_video.mp4'
import './Home.css'

const heroBlur = 'https://www.figma.com/api/mcp/asset/a3dc2e0b-9e41-4b01-b34e-d5ee8cffedce.png'
const productionsImg = 'https://www.figma.com/api/mcp/asset/858c0c1b-5034-4689-951c-e1ea0c633c22.png'
const mediaImg = 'https://www.figma.com/api/mcp/asset/624be73f-ae1e-4f6d-9ec6-b815d8f7d8b1.png'
const thirdImg = 'https://www.figma.com/api/mcp/asset/ba2cf0ed-c8b8-4a32-af71-6ce536819019.png'
const arrowIcon = 'https://www.figma.com/api/mcp/asset/ce3bf66e-bd26-4910-ad94-39428819e107.svg'

const productionsTags = ['Client Shoot', 'Music Shoot', 'Short-Film Shoot', 'Podcast Shoot', 'Event Shoot', 'UGC Model Shoot', 'Product Shoot']
const mediaTags = ['Social Media Marketing', 'Performance Marketing', 'Content Creation', 'Branding', 'UI/UX & Development']

export default function Home() {
  useReveal()
  const [showThirdCta] = useState(true)

  return (
    <div className="home">
      {/* HERO VIDEO — full-bleed, sits behind the (transparent) navbar, no text inside it */}
      <section className="home-hero-video" aria-hidden="false">
        <div className="home-hero-video__media">
          <video src={heroVideo} autoPlay muted loop  playsInline />
        </div>
        <div className="home-hero-video__fade" />
      </section>

      {/* "The QPIC Studio" — separate section BELOW the hero video, on normal page background */}
      <section className="home-intro">
        <div className="container home-intro__content reveal">
          <h1 className="home-intro__title">The QPIC Studio</h1>
          <p className="home-intro__desc">
            QPIC Studio is the creative powerhouse that brings together the strategic expertise of QPIC Media
            and the production excellence of QPIC Productions under one unified vision. From brand strategy,
            digital marketing, and design to cinematic productions, commercial photography, podcasts, UGC, and
            premium video content, we deliver end-to-end creative solutions that help brands stand out in today's
            competitive digital landscape. By blending creativity, technology, and storytelling, QPIC Studio
            transforms ideas into impactful experiences that connect, inspire, and drive growth.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <article className="service-showcase reveal">
            <div className="eyebrow-pill service-showcase__badge">
              <h2 className="section-title" style={{ fontSize: 'clamp(1.75rem, 4vw, 3.5rem)' }}>QPIC Productions</h2>
            </div>
            <p className="body-copy service-showcase__desc">
              At <em>QPIC Productions</em>, every frame is crafted with purpose. We specialize in high-end
              commercial filmmaking, brand films, product photography, podcasts, UGC content, and cinematic
              visual storytelling that elevates how brands are seen and remembered. From concept development to
              final delivery, our production team combines creative direction, technical precision, and
              premium-quality execution to create visuals that captivate audiences and leave a lasting impact.
            </p>

            <div className="marquee-ribbon service-showcase__ribbon">
              <div className="marquee-track">
                {[...productionsTags, ...productionsTags].map((tag, i) => (
                  <span key={i}>✦ {tag}</span>
                ))}
              </div>
            </div>

            <div className="service-showcase__media glass-card">
              <video src={productionsVideo} autoPlay muted loop playsInline />
            </div>

            <Link to="/productions" className="btn-pill-light service-showcase__cta">
              Visit Productions
              <img src={arrowIcon} alt="" className="service-showcase__cta-icon" />
            </Link>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <article className="service-showcase reveal">
            <div className="eyebrow-pill service-showcase__badge">
              <h2 className="section-title" style={{ fontSize: 'clamp(1.75rem, 4vw, 3.5rem)' }}>QPIC Media</h2>
            </div>
            <p className="body-copy service-showcase__desc">
              At <em>QPIC Media</em>, we build brands that people notice, remember, and trust. Combining creative
              excellence with strategic thinking, we deliver branding, social media marketing, performance
              marketing, content creation, UI/UX design, and digital experiences that drive measurable business
              growth. Every solution is tailored to help ambitious businesses establish a powerful presence and
              achieve lasting success in the digital world.
            </p>

            <div className="marquee-ribbon service-showcase__ribbon">
              <div className="marquee-track">
                {[...mediaTags, ...mediaTags].map((tag, i) => (
                  <span key={i}>✦ {tag}</span>
                ))}
              </div>
            </div>

            <div className="service-showcase__media glass-card">
              <video src={mediaVideo} autoPlay muted loop playsInline />
            </div>

            <Link to="/media" className="btn-pill-light service-showcase__cta">
              Visit Media
              <img src={arrowIcon} alt="" className="service-showcase__cta-icon" />
            </Link>
          </article>
        </div>
      </section>

      {showThirdCta && (
        <section className="section">
          <div className="container">
            <div className="home-portrait glass-card reveal">
              <video src={ChandanVideo} autoPlay muted loop playsInline />
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container">
          <p className="home-tagline reveal">
            Your next chapter starts with a bold idea—and the right creative partner. Let's build a brand that
            captures attention, earns trust, and delivers lasting impact.
            <br />
            The future of your brand begins with QPIC.
          </p>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="container">
          <div className="eyebrow-pill home-contact__badge reveal">
            <h2 className="section-title" style={{ fontSize: 'clamp(1.75rem, 4vw, 3.5rem)' }}>Contact us</h2>
          </div>
          <div className="reveal">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}
