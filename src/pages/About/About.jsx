import useReveal from '../../hooks/useReveal.js'
import ContactForm from '../../components/ContactForm/ContactForm.jsx'
import {brandLogos, icons } from '../../assets/about/index.js'
import './About.css'
import personPhoto from '../../assets/about/images/Chandan_Ji_Photo.png'
import teamGroupPhoto from '../../assets/about/images/Group_Photo.png'
const team = [
  { name: 'Chandan Singh', roleLine1: 'Founder and CEO of QPIC', roleLine2: 'with expertise in everything' },
  { name: 'Chandan Singh', roleLine1: 'Founder and CEO of QPIC', roleLine2: 'with expertise in everything' },
  { name: 'Chandan Singh', roleLine1: 'Founder and CEO of QPIC', roleLine2: 'with expertise in everything' },
  { name: 'Chandan Singh', roleLine1: 'Founder and CEO of QPIC', roleLine2: 'with expertise in everything' },
]

export default function About() {
  useReveal()

  return (
    <div className="about">
      {/* HERO — pulled up behind the transparent sticky navbar, two blurred
          radial blobs + huge mix-blend-mode gradient "ABOUT US" headline */}
      <section className="about-hero">
        <div className="about-hero__blob-wrap about-hero__blob-wrap--tl">
          <div className="about-hero__blob-scale">
            <div className="about-hero__blob about-hero__blob--tl" />
          </div>
        </div>
        <div className="about-hero__blob-wrap about-hero__blob-wrap--br">
          <div className="about-hero__blob-scale">
            <div className="about-hero__blob about-hero__blob--br" />
          </div>
        </div>
        <h1 className="about-hero__title about-hero__title--enter">ABOUT US</h1>
        <p className="about-hero__intro about-hero__intro--enter">
          The best ideas come from great collaboration.
          <br />
          Meet the creative minds behind every QPIC success story.
        </p>
      </section>

      {/* WHO WE ARE — comes BEFORE the team section in the Figma */}
      <section className="section">
        <div className="container">
          <div className="who-we-are reveal">
            <h2 className="section-title">Who We Are ?</h2>
            <p className="body-copy">
              QPic is a team of filmmakers, photographers, designers, marketers, editors, and creative strategists
              passionate about building brands through compelling visual storytelling. We believe great content
              isn't just beautiful—it connects, influences, and converts.
            </p>
            <p className="body-copy">
              Whether you're launching a new product, growing your online presence, or creating your next big
              campaign, we bring the expertise and creativity needed to make it happen.
            </p>
          </div>
        </div>
      </section>

      {/* MEET OUR TEAM */}
      <section className="section">
        <div className="container">
          <div className="eyebrow-pill about-team__badge reveal">
            <h2 className="section-title solid" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3rem)' }}>
              Meet our Team QPIC
            </h2>
          </div>

          <div className="about-team__grid reveal">
            {team.map((member, i) => (
              <div className="team-card" key={i}>
                <img src={personPhoto} alt={member.name} className="team-card__img" loading="lazy" />
                <div className="team-card__overlay">
                  <div className="team-card__socials">
                    <span>Socials</span>
                    <img src={icons.linkedin} alt="LinkedIn" />
                    <img src={icons.instagram} alt="Instagram" />
                  </div>
                  <div className="team-card__meta">
                    <p className="team-card__name">
                      {member.name}
                      <img src={icons.verifiedCheck} alt="" className="team-card__verified" />
                    </p>
                    <p className="team-card__role">
                      {member.roleLine1}
                      <br />
                      {member.roleLine2}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="about-team__photo glass-card reveal">
            <img src={teamGroupPhoto} alt="The QPIC Studio team" loading="lazy" />
          </div>

          <p className="body-copy about-team__copy reveal">
            Our team is fueled by creativity, powered by innovation, and always excited to take on what's next.
            Whether you're building a new brand or scaling an existing one, we're ready to partner with you, grow
            alongside your vision, and create work that makes a lasting impact.
          </p>
        </div>
      </section>

      {/* TRUSTED BRANDS */}
      <section className="section">
        <div className="container">
          <h2 className="section-title reveal" style={{ marginBottom: 48 }}>Our Trusted Brands</h2>

          <div className="brand-panel reveal">
            <div className="brand-panel__blob brand-panel__blob--red" />
            <div className="brand-panel__blob brand-panel__blob--blue" />
            <div className="brand-grid">
              {brandLogos.map((logo, i) => (
                <div className="brand-grid__cell" key={i}>
                  <img src={logo} alt="Trusted brand logo" loading="lazy" />
                </div>
              ))}
            </div>
          </div>

          <p className="body-copy about-industries reveal">
            At QPic, we've had the privilege of partnering with brands across a <strong>wide range of industries</strong>,
            each with its own unique challenges, audiences, and goals. From fashion, jewellery, hospitality, real
            estate, healthcare, education, and automotive to lifestyle, technology, FMCG, e-commerce, and personal
            brands, our experience spans diverse markets and business models.
            <br /><br />
            Working across multiple niches has given us the ability to adapt quickly, understand different consumer
            behaviors, and create tailored strategies that resonate with the right audience. Every project is
            approached with fresh thinking, industry-specific insights, and a commitment to delivering creative
            solutions that drive measurable results.
            <br /><br />
            No matter the industry, our focus remains the same—building impactful brand experiences through
            exceptional storytelling, premium production, and performance-driven marketing.
          </p>
        </div>
      </section>

      {/* CONTACT — reuses the shared ContactForm component */}
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
