import traser_weide_gride from '../../../assets/media/images/teaser_weide_gride.png'
import instagram_gride from '../../../assets/media/images/instgram_traser_grid.png'
import gride_01 from '../../../assets/media/images/gride_1.png'
import gride_02 from '../../../assets/media/images/gride_2.png'
import gride_03 from '../../../assets/media/images/gride_3.png'
import gride_04 from '../../../assets/media/images/gride_4.png'
import gride_05 from '../../../assets/media/images/gride_5.png'
import gride_06 from '../../../assets/media/images/gride_6.png'
import gride_07 from '../../../assets/media/images/gride_7.png'

import './TheGridsOf3.css'

const gridsOf3 = {
  teaserWide: traser_weide_gride,
  teaserDark: instagram_gride,
  rows: [
    gride_01,
    gride_02,
    gride_03,
    gride_04,
    gride_05,
    gride_06,
  ],
  highlight: gride_07,
}

export default function TheGridsOf3() {
  return (
    <article className="media-case grids-of-3 reveal">

      <h3 className="media-case__title">
        ✦ The Grids of 3 for insta handles
      </h3>

      <p className="media-case__desc">
        Your Instagram grid is the digital face of your brand. At QPIC Media,
        we design visually cohesive feeds that reflect your brand identity
        while maintaining consistency across every post. From strategic
        layouts and premium creatives to content planning and ongoing
        management, we ensure your profile leaves a lasting first impression
        and builds a recognizable brand presence.
      </p>

      {/* TOP PREVIEW */}
      <div className="grids-of-3__teaser">
        <div className="grids-of-3__teaser-wide">
          <img
            src={gridsOf3.teaserWide}
            alt="Instagram grid layout wide preview"
          />
        </div>
        <div className="grids-of-3__teaser-dark">
          <img src={gridsOf3.teaserDark} alt="Instagram grid layout portrait preview"/>
        </div>
      </div>

      {/* MAIN GRID IMAGES */}
      <div className="grids-of-3__images">
        {gridsOf3.rows.map((src, i) => (
          <div className="grids-of-3__row"
            key={`grid-${i}`}
          >
            <img
              src={src}
              alt={`Instagram grid post ${i + 1}`}
            />
          </div>
        ))}

        {/* HIGHLIGHT */}
        <div className="grids-of-3__row grids-of-3__row--highlight">
          <img src={gridsOf3.highlight} alt="Instagram campaign highlight" />
        </div>
      </div>
    </article>
  )
}