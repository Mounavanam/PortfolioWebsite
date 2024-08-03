import React from 'react'
import { Headings } from '../../core/headings/headings'
import {
  Github,
  LinkedIn,
  socialLinks,
} from '../../../library'
import './style.css'

const Socials = React.forwardRef<HTMLDivElement>((props, ref) => {
  // 🎨 Mapping icons to components for dynamic rendering
  const icons = { Github, LinkedIn }

  return (
    <div ref={ref} className="socials">
      <Headings title="On The Web" subtitle="What I'm Working On" />

      <div className="socials-wrapper">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            className="socials-link"
            href={link.url}
            target="_blank"
            rel="noreferrer"
          >
            {/* Display the icon associated with each link */}
            {React.createElement(icons[link.icon as keyof typeof icons])}
            <span className="socials-name">{link.name}</span>
          </a>
        ))}
      </div>
    </div>
  )
})

Socials.displayName = 'Socials'

export { Socials }
