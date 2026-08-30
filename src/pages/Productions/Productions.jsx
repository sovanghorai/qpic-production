import useReveal from '../../hooks/useReveal.js'
import ContactForm from '../../components/ContactForm/ContactForm.jsx'
import './Productions.css'

const heroTags = ['Client Shoot', 'Music Shoot', 'Short-Film Shoot', 'Podcast Shoot', 'Event Shoot', 'UGC Model Shoot', 'Product Shoot']

const services = [
  {
    title: 'Client Shoot',
    desc: 'Tailored commercial shoots built around your brand story — from concept and styling to final color grade.',
  },
  {
    title: 'Music Shoot',
    desc: 'Cinematic music videos and artist visuals with mood-driven lighting, movement, and premium color treatment.',
  },
  {
    title: 'Short-Film Shoot',
    desc: 'Narrative-led short films — full pre-production, direction, and post to bring a story to the screen.',
  },
  {
    title: 'Podcast Shoot',
    desc: 'Multi-cam podcast production, from studio setup to episode-ready edits for every platform.',
  },
  {
    title: 'Event Shoot',
    desc: 'Full-coverage event photography and videography that captures every key moment, live and unscripted.',
  },
  {
    title: 'UGC Model Shoot',
    desc: 'Authentic, scroll-stopping UGC content shot with real talent for ad-ready social performance.',
  },
  {
    title: 'Product Shoot',
    desc: 'Studio-grade product photography and video that make every detail, texture, and finish pop.',
  },
]

const projects = [
  { title: 'Music Video Shoot' },
  { title: 'Short Film Shoot' },
  { title: 'Shoot for Client' },
  { title: 'Podcast Shoot' },
  { title: 'UGC Model Shoot' },
  { title: 'Product Shoot' },
  { title: 'Shoot For Event' },
]

export default function Productions() {
  useReveal()

  return (
    <div className="productions">
      <section className="prod-hero">
        <div className="prod-hero__bg" />
        <div className="container prod-hero__content reveal">
          <span className="prod-hero__kicker">That's what we do at</span>
          <h1 className="prod-hero__title">QPIC Productions</h1>
        </div>
        <div className="marquee-ribbon prod-hero__ribbon">
          <div className="marquee-track">
            {[...heroTags, ...heroTags].map((tag, i) => (
              <span key={i}>✦ {tag}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title reveal">Explore our Services</h2>
          <p className="body-copy prod-quality reveal">Outstanding Quality</p>

          <div className="prod-phones reveal">
            <div className="prod-phone prod-phone--side">
              <div className="prod-phone__screen prod-phone__screen--a" />
            </div>
            <div className="prod-phone prod-phone--center">
              <div className="prod-phone__screen prod-phone__screen--b" />
            </div>
            <div className="prod-phone prod-phone--side">
              <div className="prod-phone__screen prod-phone__screen--c" />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title reveal" style={{ marginBottom: 48 }}>Services Offered</h2>
          <div className="prod-services">
            {services.map((service, i) => (
              <article
                className={`prod-service-card reveal ${i % 2 === 1 ? 'prod-service-card--reverse' : ''}`}
                key={service.title}
              >
                <div className="prod-service-card__media" aria-hidden="true">
                  <div className={`prod-service-card__gradient prod-gradient-${i % 5}`} />
                </div>
                <div className="prod-service-card__body">
                  <h3>✦ {service.title}</h3>
                  <p>{service.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title reveal" style={{ marginBottom: 48 }}>Our Work</h2>
          <div className="prod-projects">
            {projects.map((project, i) => (
              <article className="prod-project-card reveal" key={project.title}>
                <div className="prod-project-card__header">
                  <h3>✦ {project.title}</h3>
                  <span className="prod-project-card__badge">QPIC Productions</span>
                </div>
                <div className="prod-project-card__gallery">
                  <div className={`prod-gradient-${i % 5} prod-project-card__thumb prod-project-card__thumb--lg`} />
                  <div className={`prod-gradient-${(i + 1) % 5} prod-project-card__thumb`} />
                  <div className={`prod-gradient-${(i + 2) % 5} prod-project-card__thumb`} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <blockquote className="prod-testimonial reveal">
            <div className="prod-testimonial__portrait" aria-hidden="true" />
            <p>
              "Every frame we produce carries the same standard: purpose, precision, and craft. That's the
              QPIC Productions promise — from the first take to the final delivery."
            </p>
          </blockquote>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="container">
          <h2 className="section-title reveal" style={{ marginBottom: 40 }}>Contact us</h2>
          <div className="reveal">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}
