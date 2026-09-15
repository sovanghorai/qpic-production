import { useEffect, useRef, useState } from 'react'
import './FloatingSectionNav.css'

export default function FloatingSectionNav({
  items = [],
  className = '',
  topLabel = 'All',
  topIcon = null,
}) {
  const [activeId, setActiveId] = useState('top')
  const animationRef = useRef(null)

  /*
   * =========================================================
   * SMOOTH SCROLL
   * =========================================================
   */
  const smoothScrollTo = (targetY, duration = 750) => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current)
    }

    const startY = window.scrollY
    const distance = targetY - startY
    const startTime = performance.now()

    const easeInOutCubic = (t) => {
      return t < 0.5
        ? 4 * t * t * t
        : 1 - Math.pow(-2 * t + 2, 3) / 2
    }

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime

      const progress = Math.min(
        elapsed / duration,
        1
      )

      const eased = easeInOutCubic(progress)

      window.scrollTo(
        0,
        startY + distance * eased
      )

      if (progress < 1) {
        animationRef.current =
          requestAnimationFrame(animate)
      } else {
        animationRef.current = null
      }
    }

    animationRef.current =
      requestAnimationFrame(animate)
  }


  /*
   * =========================================================
   * ACTIVE SECTION DETECTION
   * =========================================================
   */
  useEffect(() => {
    const sections = items
      .map((item) => ({
        ...item,
        element: document.getElementById(item.id),
      }))
      .filter((item) => item.element)

    if (!sections.length) {
      setActiveId('top')
      return
    }

    let ticking = false

    const updateActiveSection = () => {
      if (ticking) return

      ticking = true

      requestAnimationFrame(() => {
        /*
         * ALL when near page top
         */
        if (window.scrollY < 100) {
          setActiveId('top')
          ticking = false
          return
        }

        /*
         * Activation line
         *
         * This point decides which section is active.
         */
        const activationPoint =
          window.scrollY +
          window.innerHeight * 0.40

        let activeSection = null

        /*
         * IMPORTANT:
         * Follow items array order.
         */
        for (const item of sections) {
          const sectionTop =
            item.element.getBoundingClientRect().top +
            window.scrollY

          if (sectionTop <= activationPoint) {
            activeSection = item
          }
        }

        if (activeSection) {
          setActiveId(activeSection.id)
        } else {
          setActiveId('top')
        }

        ticking = false
      })
    }

    updateActiveSection()

    window.addEventListener(
      'scroll',
      updateActiveSection,
      { passive: true }
    )

    window.addEventListener(
      'resize',
      updateActiveSection
    )

    return () => {
      window.removeEventListener(
        'scroll',
        updateActiveSection
      )

      window.removeEventListener(
        'resize',
        updateActiveSection
      )
    }
  }, [items])


  /*
   * =========================================================
   * ALL
   * =========================================================
   */
  const handleTopClick = (e) => {
    e.preventDefault()

    setActiveId('top')

    smoothScrollTo(0, 850)
  }


  /*
   * =========================================================
   * SECTION CLICK
   * =========================================================
   */
  const handleSectionClick = (e, id) => {
    e.preventDefault()

    const section =
      document.getElementById(id)

    if (!section) return

    /*
     * Exact document position
     */
    const sectionTop =
      section.getBoundingClientRect().top +
      window.scrollY

    const offset = 12

    const targetY = Math.max(
      0,
      sectionTop - offset
    )

    /*
     * Change active immediately
     */
    setActiveId(id)

    /*
     * Smooth scroll
     */
    smoothScrollTo(targetY, 850)
  }


  /*
   * =========================================================
   * JSX
   * =========================================================
   */
  return (
    <nav
      className={`floating-section-nav ${className}`}
      aria-label="Page sections"
    >

      {/* ALL */}
      <a
        href="#top"
        className={`floating-section-nav__item ${
          activeId === 'top'
            ? 'floating-section-nav__item--active'
            : ''
        }`}
        onClick={handleTopClick}
      >
        {activeId === 'top' && topIcon && (
          <img
            src={topIcon}
            alt=""
            aria-hidden="true"
          />
        )}

        <span>{topLabel}</span>
      </a>


      {/* SECTIONS */}
      {items.map((item, index) => {
        const isActive =
          activeId === item.id

        return (
          <div
            className="floating-section-nav__group"
            key={item.id}
          >

            {index > 0 && (
              <span
                className="floating-section-nav__divider"
                aria-hidden="true"
              />
            )}

            <a
              href={`#${item.id}`}
              className={`floating-section-nav__item ${
                isActive
                  ? 'floating-section-nav__item--active'
                  : ''
              }`}
              onClick={(e) =>
                handleSectionClick(
                  e,
                  item.id
                )
              }
            >

              {isActive && item.icon && (
                <img
                  src={item.icon}
                  alt=""
                  aria-hidden="true"
                />
              )}

              <span>{item.label}</span>

            </a>

          </div>
        )
      })}

    </nav>
  )
}