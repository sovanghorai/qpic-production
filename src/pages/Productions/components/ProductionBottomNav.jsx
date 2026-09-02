import { useEffect, useRef, useState } from 'react'
import { infinityIcon } from '../../../assets/production/index.js'
import './ProductionBottomNav.css'

// Small inline icons per section — Figma's exported bottom nav only shows
// an icon on the "All" item (gg:infinity); these keep the same visual
// weight for the other items so the active state reads clearly.
const icons = {
  all: <img src={infinityIcon} alt="" />,
  services: (
    <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
      <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4L12 2z" fill="currentColor" />
    </svg>
  ),
  work: (
    <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
      <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  ),
  contact: (
    <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  ),
}

const items = [
  { id: 'top', label: 'All' },
  { id: 'services', label: 'Services' },
  { id: 'work', label: 'Work' },
  { id: 'contact', label: 'Contact' },
]

export default function ProductionBottomNav() {
  const [activeId, setActiveId] = useState('top')
  const skipObserver = useRef(false)

  useEffect(() => {
    const targets = ['services', 'work', 'contact']
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (!targets.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (skipObserver.current) return
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    )

    targets.forEach((el) => observer.observe(el))

    const onScroll = () => {
      if (window.scrollY < window.innerHeight * 0.6) setActiveId('top')
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const handleClick = (id) => (e) => {
    e.preventDefault()
    setActiveId(id)
    // Briefly ignore the scroll-spy observer so the click target we picked
    // doesn't get immediately overridden by whatever it scrolls past.
    skipObserver.current = true
    window.setTimeout(() => { skipObserver.current = false }, 700)

    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav className="prod-bottom-nav" aria-label="Productions page sections">
      {items.map((item, i) => {
        const active = activeId === item.id
        return (
          <span className="prod-bottom-nav__group" key={item.id}>
            <a
              href={`#${item.id}`}
              className={`prod-bottom-nav__item ${active ? 'prod-bottom-nav__item--active' : ''}`}
              aria-current={active ? 'true' : undefined}
              onClick={handleClick(item.id)}
            >
              {active && <span className="prod-bottom-nav__icon">{icons[item.id]}</span>}
              {item.label}
            </a>
            {i > 0 && i < items.length - 1 && <span className="prod-bottom-nav__divider" />}
          </span>
        )
      })}
    </nav>
  )
}
