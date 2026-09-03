import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'

// =====================================================
// EXISTING SVG ICONS
// =====================================================

import homeIcon from '../../assets/common/icons/home.svg'
import productionsIcon from '../../assets/common/icons/production.svg'
import mediaIcon from '../../assets/common/icons/media .svg'
import aboutIcon from '../../assets/common/icons/about_us.svg'


// =====================================================
// NAVIGATION
// =====================================================

const links = [
  {
    to: '/',
    label: 'Home',
    sectionId: 'home',
    icon: homeIcon,
  },
  {
    to: '/productions',
    label: 'Productions',
    sectionId: 'productions',
    icon: productionsIcon,
  },
  {
    to: '/media',
    label: 'Media',
    sectionId: 'media',
    icon: mediaIcon,
  },
  {
    to: '/about',
    label: 'About Us',
    sectionId: 'about',
    icon: aboutIcon,
  },
]


export default function Navbar({ onContactClick }) {
  const location = useLocation()

  const [menuOpen, setMenuOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  const navRef = useRef(null)
  const itemRefs = useRef([])
  const indicatorRef = useRef(null)

  const firstRender = useRef(true)


  // =====================================================
  // FIND ACTIVE ROUTE
  // =====================================================

  useEffect(() => {
    const index = links.findIndex((link) => {
      if (link.to === '/') {
        return location.pathname === '/'
      }

      return (
        location.pathname === link.to ||
        location.pathname.startsWith(`${link.to}/`)
      )
    })

    if (index !== -1) {
      setActiveIndex(index)
    }
  }, [location.pathname])


  // =====================================================
  // UPDATE ACTIVE SECTION WHILE SCROLLING
  // =====================================================

  useEffect(() => {
    const sections = links
      .map((link, index) => {
        const element = document.getElementById(link.sectionId)

        if (!element) {
          return null
        }

        return {
          element,
          index,
        }
      })
      .filter(Boolean)

    // No sections on this page
    if (!sections.length) {
      return
    }

    let ticking = false

    const updateActiveSection = () => {
      const scrollPosition =
        window.scrollY + window.innerHeight * 0.35

      let currentIndex = sections[0].index

      sections.forEach(({ element, index }) => {
        if (scrollPosition >= element.offsetTop) {
          currentIndex = index
        }
      })

      setActiveIndex(currentIndex)

      ticking = false
    }


    const handleScroll = () => {
      if (ticking) {
        return
      }

      ticking = true

      requestAnimationFrame(updateActiveSection)
    }


    window.addEventListener(
      'scroll',
      handleScroll,
      { passive: true }
    )

    updateActiveSection()


    return () => {
      window.removeEventListener(
        'scroll',
        handleScroll
      )
    }
  }, [location.pathname])


  // =====================================================
  // MOVE BLACK ACTIVE BAR
  // =====================================================

  const updateIndicator = () => {
    const nav = navRef.current
    const indicator = indicatorRef.current
    const activeItem = itemRefs.current[activeIndex]

    if (!nav || !indicator || !activeItem) {
      return
    }

    const navRect = nav.getBoundingClientRect()
    const itemRect = activeItem.getBoundingClientRect()

    const left =
      itemRect.left - navRect.left

    const top =
      itemRect.top - navRect.top


    indicator.style.width =
      `${itemRect.width}px`

    indicator.style.height =
      `${itemRect.height}px`

    indicator.style.transform =
      `translate3d(${left}px, ${top}px, 0)`
  }


  // =====================================================
  // UPDATE INDICATOR AFTER ACTIVE ITEM CHANGES
  // =====================================================

  useLayoutEffect(() => {
    /*
     * Wait until React has finished rendering
     * the active icon state.
     */
    const frame = requestAnimationFrame(() => {
      updateIndicator()
    })

    return () => {
      cancelAnimationFrame(frame)
    }
  }, [activeIndex])


  // =====================================================
  // UPDATE ON RESIZE
  // =====================================================

  useEffect(() => {
    const handleResize = () => {
      updateIndicator()
    }

    window.addEventListener(
      'resize',
      handleResize
    )

    return () => {
      window.removeEventListener(
        'resize',
        handleResize
      )
    }
  }, [activeIndex])


  // =====================================================
  // NAVIGATION CLICK
  // =====================================================

  const handleNavigation = (index, link) => {
    setActiveIndex(index)
    setMenuOpen(false)

    const section =
      document.getElementById(link.sectionId)


    /*
     * Same page section:
     * smoothly scroll to section.
     */
    if (
      section &&
      location.pathname === link.to
    ) {
      const navbarOffset = 100

      const top =
        section.getBoundingClientRect().top +
        window.scrollY -
        navbarOffset

      window.scrollTo({
        top,
        behavior: 'smooth',
      })
    }
  }


  // =====================================================
  // CONTACT
  // =====================================================

  const handleContactClick = () => {
    setMenuOpen(false)
    onContactClick?.()
  }


  // =====================================================
  // JSX
  // =====================================================

  return (
    <header className="navbar">

      <div className="navbar__inner">


        {/* =================================================
            LOGO
        ================================================= */}

        <div className="navbar__logo">
          QPIC STUDIO
        </div>


        {/* =================================================
            DESKTOP NAVIGATION
        ================================================= */}

        <nav
          ref={navRef}
          className="navbar__links"
          aria-label="Primary"
        >

          {/* -----------------------------------------------
              MOVING BLACK ACTIVE BAR
          ------------------------------------------------ */}

          <span
            ref={indicatorRef}
            className="navbar__active-indicator"
            aria-hidden="true"
          />


          {/* -----------------------------------------------
              NAV ITEMS
          ------------------------------------------------ */}

          {links.map((link, index) => {
            const isActive =
              activeIndex === index

            return (
              <NavLink
                key={link.to}
                ref={(element) => {
                  itemRefs.current[index] = element
                }}
                to={link.to}
                end={link.to === '/'}
                onClick={() =>
                  handleNavigation(index, link)
                }
                className={`navbar__link ${
                  isActive
                    ? 'navbar__link--active'
                    : ''
                }`}
              >

                {/* Icon space is ALWAYS reserved.
                    This prevents layout jumping. */}

                <span className="navbar__icon-space">

                  <img
                    src={link.icon}
                    alt=""
                    className="navbar__link-icon"
                    aria-hidden="true"
                  />

                </span>


                {/* Text */}

                <span className="navbar__link-text">
                  {link.label}
                </span>

              </NavLink>
            )
          })}

        </nav>


        {/* =================================================
            CONTACT BUTTON
        ================================================= */}

        <button
          className="navbar__cta"
          type="button"
          onClick={handleContactClick}
        >
          <span
            className="navbar__cta-icon"
            aria-hidden="true"
          >
            ✦
          </span>

          Contact Us
        </button>


        {/* =================================================
            MOBILE HAMBURGER
        ================================================= */}

        <button
          className={`navbar__hamburger ${
            menuOpen
              ? 'navbar__hamburger--open'
              : ''
          }`}
          type="button"
          onClick={() =>
            setMenuOpen((value) => !value)
          }
          aria-label={
            menuOpen
              ? 'Close menu'
              : 'Open menu'
          }
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>


        {/* =================================================
            MOBILE MENU
        ================================================= */}

        <div
          className={`navbar__mobile-menu ${
            menuOpen
              ? 'navbar__mobile-menu--open'
              : ''
          }`}
        >

          <nav
            className="navbar__mobile-links"
            aria-label="Mobile"
          >

            {links.map((link, index) => {
              const isActive =
                activeIndex === index

              return (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() =>
                    handleNavigation(index, link)
                  }
                  className={`navbar__mobile-link ${
                    isActive
                      ? 'navbar__mobile-link--active'
                      : ''
                  }`}
                >

                  <span
                    className={`navbar__mobile-icon-space ${
                      isActive
                        ? 'navbar__mobile-icon-space--active'
                        : ''
                    }`}
                  >
                    <img
                      src={link.icon}
                      alt=""
                      className="navbar__mobile-link-icon"
                      aria-hidden="true"
                    />
                  </span>

                  <span>
                    {link.label}
                  </span>

                </NavLink>
              )
            })}

          </nav>


          {/* Mobile Contact */}

          <button
            className="navbar__mobile-cta"
            type="button"
            onClick={handleContactClick}
          >
            <span aria-hidden="true">
              ✦
            </span>

            Contact Us
          </button>

        </div>

      </div>

    </header>
  )
}