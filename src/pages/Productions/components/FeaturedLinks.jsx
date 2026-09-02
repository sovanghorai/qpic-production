import { useState } from 'react'
import './FeaturedLinks.css'

/**
 * Matches Figma's VideoFrameTest component: one main video (rounded-50,
 * glass) plus 3 thumbnail cards (rounded-24) below it. Figma applies a
 * different mirror transform to each thumbnail (horizontal flip, vertical
 * flip, 180° rotation) — reproduced exactly rather than left plain.
 * Clicking a thumbnail swaps it into the main slot (common video-player
 * pattern), with a cross-fade/scale transition.
 */
export default function FeaturedLinks({ videos, alt }) {
  const [order, setOrder] = useState([0, 1, 2, 3]) // index into `videos`; order[0] = main

  const mirrors = ['none', 'scaleX(-1)', 'scaleY(-1)', 'rotate(180deg)']

  const promote = (position) => {
    if (position === 0) return
    setOrder((prev) => {
      const next = [...prev]
      const [picked] = next.splice(position, 1)
      next.unshift(picked)
      return next
    })
  }

  return (
    <div className="featured-links">
      <div className="featured-links__main" key={`main-${order[0]}`}>
        <img src={videos[order[0]]} alt={`${alt} — main preview`} loading="lazy" />
      </div>
      <div className="featured-links__row">
        {order.slice(1).map((videoIndex, i) => (
          <button
            type="button"
            key={videoIndex}
            className="featured-links__thumb"
            style={{ '--mirror': mirrors[i + 1] }}
            onClick={() => promote(i + 1)}
            aria-label={`Play ${alt} clip ${i + 1}`}
          >
            <img src={videos[videoIndex]} alt="" loading="lazy" />
          </button>
        ))}
      </div>
    </div>
  )
}
