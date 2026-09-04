import D2C_gride_logo from '../../../assets/media/images/D2C_gride_logo.png'
import D2C_gride_thump from '../../../assets/media/images/D2C_gride_thump.png'
import D2C_gride_1 from '../../../assets/media/images/D2C_gride_1.png'
import D2C_gride_2 from '../../../assets/media/images/D2C_gride_2.png'
import D2C_produc_grid_1 from '../../../assets/media/images/D2C_produc_grid_1.png'
import D2C_produc_grid_2 from '../../../assets/media/images/D2C_produc_grid_2.png'
import D2C_produc_grid_3 from '../../../assets/media/images/D2C_produc_grid_3.png'
import D2C_produc_grid_4 from '../../../assets/media/images/D2C_produc_grid_4.png'
import D2C_produc_grid_5 from '../../../assets/media/images/D2C_produc_grid_5.png'
import D2C_produc_grid_6 from '../../../assets/media/images/D2C_produc_grid_6.png'

const d2cBranding = {
  heroWide: D2C_gride_thump,
  heroSquare: D2C_gride_logo,
  rows: [
    D2C_gride_1,
    D2C_gride_2,
  ],
  productGrid: [
    D2C_produc_grid_1,
    D2C_produc_grid_2,
    D2C_produc_grid_3,
    D2C_produc_grid_4,
    D2C_produc_grid_5,
    D2C_produc_grid_6,
  ],
  // bgTexture: 'https://www.figma.com/api/mcp/asset/282ee338-d066-493a-91c9-3c34c78192b6.png',
}

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
