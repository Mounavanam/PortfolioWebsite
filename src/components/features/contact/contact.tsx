import React from 'react'
import { Headings } from '../../core/headings/headings'
import './style.css'

const Contact = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="contact">
      <Headings title="Contact" subtitle="Look Who's Here" />
      <div className="contact-text">
        The fastest way to get in touch with me is to send me a message on{' '}
        <a
          href="https://www.linkedin.com/in/mouna-vanam-915821169/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>{' '}
        . Whether you have a question or just want to say &quot;Hi,&quot;
        I&apos;ll try my best to get back to you.
      </div>
    </div>
  )
})

Contact.displayName = 'Contact'

export { Contact }
