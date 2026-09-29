import { useEffect, useRef, useState } from 'react'

import all_icon from '../../../assets/common/icons/All.svg'
import services_icon from '../../../assets/common/icons/Services.svg'
import work_icon from '../../../assets/common/icons/Work.svg'
import contact_icon from '../../../assets/common/icons/Free_social_audit.svg'

import './MediaBottomNav.css'

const icons = {
  top: all_icon,
  services: services_icon,
  work: work_icon,
  contact: contact_icon,
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
  const scrollTimer = useRef(null)

  useEffect(() => {
    const targets = ['services', 'work', 'contact']
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (!targets.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (skipObserver.current) return

        /*
         * Only activate a section when it is actually
         * inside the center area of the viewport.
         */
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-45% 0px -45% 0px',
        threshold: 0,
      }
    )

    targets.forEach((el) => observer.observe(el))

    const onScroll = () => {
      /*
       * Don't allow the scroll handler to fight
       * with the smooth navigation.
       */
      if (skipObserver.current) return

      if (window.scrollY < window.innerHeight * 0.6) {
        setActiveId('top')
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)

      if (scrollTimer.current) {
        clearTimeout(scrollTimer.current)
      }
    }
  }, [])

  const handleClick = (id) => (e) => {
    e.preventDefault()

    /*
     * Immediately show the clicked active item.
     */
    setActiveId(id)

    /*
     * Temporarily disable IntersectionObserver
     * while smooth scrolling.
     */
    skipObserver.current = true

    if (scrollTimer.current) {
      clearTimeout(scrollTimer.current)
    }

    if (id === 'top') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    } else {
      const target = document.getElementById(id)

      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    }

    /*
     * Give smooth scroll enough time to finish.
     * 700ms was too short especially for All -> Services.
     */
    scrollTimer.current = window.setTimeout(() => {
      skipObserver.current = false
    }, 1200)
  }

  return (
    <nav
      className="prod-bottom-nav"
      aria-label="Productions page sections"
    >
      {items.map((item, i) => {
        const active = activeId === item.id

        return (
          <span
            className="prod-bottom-nav__group"
            key={item.id}
          >
            <a
              href={`#${item.id}`}
              className={`prod-bottom-nav__item ${
                active
                  ? 'prod-bottom-nav__item--active'
                  : ''
              }`}
              aria-current={active ? 'true' : undefined}
              onClick={handleClick(item.id)}
            >
              {active && (
                <span className="prod-bottom-nav__icon">
                  <img
                    src={icons[item.id]}
                    alt=""
                  />
                </span>
              )}

              {item.label}
            </a>

            {i > 0 && i < items.length - 1 && (
              <span className="prod-bottom-nav__divider" />
            )}
          </span>
        )
      })}
    </nav>
  )
}