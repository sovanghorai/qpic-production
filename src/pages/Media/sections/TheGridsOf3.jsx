import { gridsOf3 } from '../../../assets/media/index.js'
import './TheGridsOf3.css'

export default function TheGridsOf3() {
  return (
    <article className="media-case grids-of-3 reveal">
      <h3 className="media-case__title">✦ The Grids of 3 for insta handles</h3>
      <p className="media-case__desc">
        Your Instagram grid is the digital face of your brand. At QPIC Media, we design visually cohesive feeds
        that reflect your brand identity while maintaining consistency across every post. From strategic layouts
        and premium creatives to content planning and ongoing management, we ensure your profile leaves a lasting
        first impression and builds a recognizable brand presence.
      </p>

      <div className="grids-of-3__teaser">
        <div className="grids-of-3__teaser-wide">
          <img src={gridsOf3.teaserWide} alt="Instagram grid layout, wide preview" loading="lazy" />
        </div>
        <div className="grids-of-3__teaser-dark">
          <img src={gridsOf3.teaserDark} alt="Instagram grid layout, portrait detail" loading="lazy" />
        </div>
      </div>

      {gridsOf3.rows.map((src, i) => (
        <div className="grids-of-3__row" key={i}>
          <img src={src} alt={`Instagram grid post ${i + 1}`} loading="lazy" />
        </div>
      ))}

      <div className="grids-of-3__row grids-of-3__row--highlight">
        <img src={gridsOf3.highlight} alt="Instagram grid campaign highlight" loading="lazy" />
      </div>
    </article>
  )
}
