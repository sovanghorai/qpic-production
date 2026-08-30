
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const links = [
  { to: '/', label: 'Home' },
  { to: '/productions', label: 'Productions' },
  { to: '/media', label: 'Media' },
  { to: '/about', label: 'About Us' },
]

export default function Navbar({ onContactClick }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleContactClick = () => {
    setMenuOpen(false)
    onContactClick?.()
  }

  return (
    <header className="navbar">
      <div className="navbar__inner">

        <div className="navbar__logo">
          QPIC STUDIO
        </div>

        {/* Desktop navigation */}
        <nav className="navbar__links" aria-label="Primary">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                'navbar__link' +
                (isActive ? ' navbar__link--active' : '')
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop contact button */}
        <button
          className="navbar__cta"
          onClick={onContactClick}
        >
          <span className="navbar__cta-icon" aria-hidden="true">
            ✦
          </span>
          Contact Us
        </button>

        {/* Mobile hamburger */}
        <button
          className={`navbar__hamburger ${
            menuOpen ? 'navbar__hamburger--open' : ''
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile menu */}
        <div
          className={`navbar__mobile-menu ${
            menuOpen ? 'navbar__mobile-menu--open' : ''
          }`}
        >
          <nav className="navbar__mobile-links" aria-label="Mobile">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  'navbar__mobile-link' +
                  (isActive ? ' navbar__mobile-link--active' : '')
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <button
            className="navbar__mobile-cta"
            onClick={handleContactClick}
          >
            <span aria-hidden="true">✦</span>
            Contact Us
          </button>
        </div>

      </div>
    </header>
  )
}

