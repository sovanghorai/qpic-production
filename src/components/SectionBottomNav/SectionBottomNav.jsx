import { useEffect, useRef, useState } from 'react'
import './SectionBottomNav.css'

/**
 * items: [{ id, label, icon? }] — icon only needs to be supplied for items
 * that should show one when active (pass the existing project icon asset,
 * e.g. `icons.infinity`). Items without an `icon` just show their label.
 * The first item is treated as the "top" item — clicking it scrolls to the
 * top of the page instead of to an element with that id.
 *
 * theme: 'light' | 'dark' — matches the active-pill contrast to the page
 * (dark pages like Productions want a white-on-black pill inverted from
 * light pages like Media). Defaults to 'light'.
 */
export default function SectionBottomNav({ items, theme = 'light' }) {
  const [activeId, setActiveId] = useState(items[0]?.id)
  const skipObserver = useRef(false)

  useEffect(() => {
    const [topItem, ...rest] = items
    const targets = rest.map((item) => document.getElementById(item.id)).filter(Boolean)
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
      if (window.scrollY < window.innerHeight * 0.6) setActiveId(topItem?.id)
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items])

  const handleClick = (item, isTop) => (e) => {
    e.preventDefault()
    setActiveId(item.id)
    skipObserver.current = true
    window.setTimeout(() => { skipObserver.current = false }, 700)

    if (isTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav className={`section-bottom-nav section-bottom-nav--${theme}`} aria-label="Page sections">
      {items.map((item, i) => {
        const active = activeId === item.id
        return (
          <span className="section-bottom-nav__group" key={item.id}>
            <a
              href={`#${item.id}`}
              className={`section-bottom-nav__item ${active ? 'section-bottom-nav__item--active' : ''}`}
              aria-current={active ? 'true' : undefined}
              onClick={handleClick(item, i === 0)}
            >
              {active && item.icon && (
                <span className="section-bottom-nav__icon">
                  <img src={item.icon} alt="" />
                </span>
              )}
              {item.label}
            </a>
            {i > 0 && i < items.length - 1 && <span className="section-bottom-nav__divider" />}
          </span>
        )
      })}
    </nav>
  )
}
