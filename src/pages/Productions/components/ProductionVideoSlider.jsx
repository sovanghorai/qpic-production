import { useState } from 'react'
import heroArrowLeft from '../../../assets/common/icons/Services.svg'
import heroArrowRight from '../../../assets/common/icons/Services.svg'
import heroMuteIcon from '../../../assets/common/icons/instagram.svg'
import { heroEyeIcon } from '../../../assets/production/index.js'
import './ProductionVideoSlider.css'

/**
 * items: [{ type: 'video' | 'image', src, title, subtitle, views, tags, preview? }]
 * Fully data-driven — add/remove items and the slider adapts automatically.
 * With exactly one item, the prev/next arrows render disabled (per spec:
 * "handle only one video" rather than faking a loop with duplicate data).
 * With 2+, arrows wrap around (loop) in both directions.
 */
export default function ProductionVideoSlider({ items }) {
  const [index, setIndex] = useState(0)
  const [muted, setMuted] = useState(true)
  const multiple = items.length > 1
  const current = items[index]
  const nextPreview = multiple ? items[(index + 1) % items.length] : null

  const goPrev = () => {
    if (!multiple) return
    setIndex((i) => (i - 1 + items.length) % items.length)
  }
  const goNext = () => {
    if (!multiple) return
    setIndex((i) => (i + 1) % items.length)
  }

  return (
    <div className="pvs">
      <div className="pvs__stage">
        {current.type === 'video' ? (
          <video
            key={current.src}
            className="pvs__media"
            autoPlay
            muted={muted}
            loop
            playsInline
          >
            <source src={current.src} type="video/mp4" />
          </video>
        ) : (
          <img key={current.src} className="pvs__media" src={current.src} alt={current.title || ''} />
        )}

        <div className="pvs__overlay">
          {current.title && <p className="pvs__title">{current.title}</p>}
          {current.subtitle && <p className="pvs__subtitle">{current.subtitle}</p>}
          {current.views && (
            <div className="pvs__views">
              <img src={heroEyeIcon} alt="" />
              {current.views}
            </div>
          )}
          
        {current.tags && (
        <div className="pvs__tags">
            {current.tags
            .split(/\s+/)
            .filter(Boolean)
            .map((tag, i) => (
                <span key={i}>{tag}</span>
            ))}
        </div>
        )}
        </div>

        {nextPreview && (
          <button
            type="button"
            className="pvs__next-preview"
            onClick={goNext}
            aria-label={`Next: ${nextPreview.title || 'video'}`}
          >
            <img src={nextPreview.preview || nextPreview.src} alt="" />
          </button>
        )}

        
        {current.type === 'video' && (
        <button
            type="button"
            className="pvs__mute"
            onClick={() => setMuted((m) => !m)}
            aria-label={muted ? 'Unmute video' : 'Mute video'}
            title={muted ? 'Unmute video' : 'Mute video'}
        >
            <img
            src={heroMuteIcon}
            alt=""
            />
        </button>
        )}

        <div className="pvs__controls">
          <button
            type="button"
            className="pvs__arrow"
            onClick={goPrev}
            disabled={!multiple}
            aria-label="Previous video"
          >
            <img src={heroArrowLeft} alt="" />
          </button>
          <button
            type="button"
            className="pvs__arrow"
            onClick={goNext}
            disabled={!multiple}
            aria-label="Next video"
          >
            <img src={heroArrowRight} alt="" />
          </button>
        </div>
      </div>
    </div>
  )
}
