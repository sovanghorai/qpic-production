import { d2cBranding } from '../../../assets/media/index.js'
import './D2CBranding.css'

export default function D2CBranding() {
  return (
    <article className="media-case d2c-branding reveal">
      <h3 className="media-case__title">✦ D2C Branding From Scratch</h3>
      <p className="media-case__desc">
        Saraswat Veda is a modern D2C Ayurvedic brand built from the ground up by QPIC Media. From crafting a
        distinctive brand identity and logo to designing premium product packaging and labels, we shaped every
        element of the brand with purpose and consistency. Our team managed end-to-end social media marketing,
        high-end product photography, production-level creative shoots, authentic UGC content, e-commerce product
        listings, and a conversion-focused website—creating a seamless brand experience across every customer
        touchpoint.
      </p>

      <div className="d2c-branding__hero">
        <div className="d2c-branding__hero-wide">
          <img src={d2cBranding.heroWide} alt="Saraswat Veda brand identity banner" loading="lazy" />
        </div>
        <div className="d2c-branding__hero-square">
          <img src={d2cBranding.heroSquare} alt="Saraswat Veda logo mark" loading="lazy" />
        </div>
      </div>

      {d2cBranding.rows.map((src, i) => (
        <div className="d2c-branding__row" key={i}>
          <img src={src} alt={`Saraswat Veda campaign visual ${i + 1}`} loading="lazy" />
        </div>
      ))}

      <div className="d2c-branding__products">
        {d2cBranding.productGrid.map((src, i) => {
          const isCol1 = i === 0 || i === 3 // column 1 has the texture backdrop in Figma
          return (
            <div className={`d2c-branding__product ${isCol1 ? 'd2c-branding__product--textured' : ''}`} key={i}>
              {isCol1 && <img src={d2cBranding.bgTexture} alt="" className="d2c-branding__texture" />}
              <img src={src} alt={`Saraswat Veda product shot ${i + 1}`} loading="lazy" />
            </div>
          )
        })}
      </div>
    </article>
  )
}
