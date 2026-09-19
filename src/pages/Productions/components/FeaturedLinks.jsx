
import { useState } from 'react'
import './FeaturedLinks.css'

/**
 * Figma VideoFrameTest:
 * - One main video
 * - Three thumbnail videos
 * - Thumbnail mirror effects
 * - Click a thumbnail to promote it to the main video
 * - Supports any number of videos
 */
export default function FeaturedLinks({ videos = [], alt = 'Featured video' }) {
  const [order, setOrder] = useState(() =>
    videos.map((_, i) => i)
  )

  const mirrors = [
    'none',
    'scaleX(-1)',
    'scaleY(-1)',
    'rotate(180deg)',
  ]

  const promote = (position) => {
    if (position === 0) return

    setOrder((prev) => {
      const next = [...prev]
      const [picked] = next.splice(position, 1)

      next.unshift(picked)

      return next
    })
  }

  if (!videos.length) {
    return null
  }

  const mainVideo = videos[order[0]]

  return (
    <div className="featured-links">

      {/* Main video */}
      <div
        className="featured-links__main"
        key={`main-${order[0]}`}
      >
        <video
          className="featured-links__main-video"
          src={mainVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={`${alt} — main video`}
        />
      </div>

      {/* Thumbnail videos */}
      {order.length > 1 && (
        <div className="featured-links__row">

          {order.slice(1).map((videoIndex, i) => (
            <button
              type="button"
              key={videoIndex}
              className="featured-links__thumb"
              style={{
                '--mirror': mirrors[(i + 1) % mirrors.length],
              }}
              onClick={() => promote(i + 1)}
              aria-label={`Play ${alt} clip ${i + 1}`}
            >
              <video
                className="featured-links__thumb-video"
                src={videos[videoIndex]}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                tabIndex={-1}
                aria-hidden="true"
              />
            </button>
          ))}

        </div>
      )}

    </div>
  )
}