import { useState } from 'react'
import './ContactForm.css'

const contactDetails = [
  { icon: '📞', label: 'Call us', value: '+91 1234567890' },
  { icon: '✉️', label: 'Mail Address', value: 'info@qpicproductions.com' },
  { icon: '📍', label: 'Google Map Address', value: 'Under Hotel Alexa, QPIC Productions...' },
]

export default function ContactForm({ variant = 'section', onClose }) {
  const [form, setForm] = useState({ name: '', mobile: '', email: '', social: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className={`contact-form ${variant === 'popup' ? 'contact-form--popup' : ''}`}>
      {variant === 'popup' && (
        <button className="contact-form__close" onClick={onClose} aria-label="Close contact form">
          ✕
        </button>
      )}

      <div className="contact-form__left">
        <div className="contact-form__badge">
          <span className="contact-form__badge-icon">✉️</span>
          Contact
        </div>
        <h3 className="contact-form__title">Get in touch</h3>
        <p className="contact-form__subtitle">
          Have questions or ready to transform your business with super performance...
        </p>

        <ul className="contact-form__details">
          {contactDetails.map((item) => (
            <li key={item.label} className="contact-form__detail">
              <span className="contact-form__detail-icon">{item.icon}</span>
              <div>
                <p className="contact-form__detail-label">{item.label}</p>
                <p className="contact-form__detail-value">{item.value}</p>
              </div>
              <span className="contact-form__detail-arrow">↗</span>
            </li>
          ))}
        </ul>
      </div>

      <form className="contact-form__right" onSubmit={handleSubmit}>
        <input
          className="contact-form__input"
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <div className="contact-form__row">
          <input
            className="contact-form__input"
            type="tel"
            name="mobile"
            placeholder="Mobile No."
            value={form.mobile}
            onChange={handleChange}
            required
          />
          <input
            className="contact-form__input"
            type="email"
            name="email"
            placeholder="Mail Add."
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <input
          className="contact-form__input"
          type="text"
          name="social"
          placeholder="Social Media Link"
          value={form.social}
          onChange={handleChange}
        />
        <textarea
          className="contact-form__input contact-form__textarea"
          name="message"
          placeholder="Message"
          rows={4}
          value={form.message}
          onChange={handleChange}
        />
        <button className="contact-form__submit" type="submit">
          {submitted ? 'Thank you!' : 'Submit'}
        </button>
      </form>
    </div>
  )
}
