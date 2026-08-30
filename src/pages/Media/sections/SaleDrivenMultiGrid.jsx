import { saleDrivenGrid } from '../../../assets/media/index.js'
import './SaleDrivenMultiGrid.css'

export default function SaleDrivenMultiGrid() {
  return (
    <article className="media-case sale-grid reveal">
      <h3 className="media-case__title">✦ Sale driven Multi-Grid for insta handles</h3>
      <p className="media-case__desc">
        Turn your Instagram into a storefront that sells. At QPIC Media, we create high-converting, theme-driven
        Instagram creatives designed to showcase products, highlight offers, and drive purchase decisions. Every
        visual is crafted with a consistent brand aesthetic, compelling messaging, and sales-focused design that
        transforms your feed into a powerful marketing asset.
      </p>

      <div className="sale-grid__teaser">
        <div className="sale-grid__teaser-wide">
          <img src={saleDrivenGrid.teaserWide} alt="Sale campaign grid preview" loading="lazy" />
        </div>
        <div className="sale-grid__teaser-dark">
          <img src={saleDrivenGrid.teaserDark} alt="Sale campaign grid detail" loading="lazy" />
        </div>
      </div>

      {/* A single continuous tall banner — not a tiled grid, per Figma */}
      <div className="sale-grid__banner">
        <img src={saleDrivenGrid.tallBanner} alt="Wedding wardrobe sale campaign, full banner" loading="lazy" />
      </div>
    </article>
  )
}
