import React from 'react'
import { Headings } from '../../core/headings/headings'
import './style.css'

const About = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="about-section">
      <Headings title="About" subtitle="Hi, I'm Mouna." />{' '}
      <p className="about-text">
        I&apos;m a 22-year-old software developer with a keen interest in creating engaging, accessible, and user-centric experiences.
        As a software engineer, I combine technical expertise with a strong design aesthetic to develop scalable and visually appealing applications. The excitement of bringing my ideas to life and overcoming new challenges is what I enjoy about coding.
        I'm also deeply involved in machine learning, where I explore algorithms and develop projects that enhance my skills in this exciting field. Unlike most developers, I do not rely on coffee or tea to fuel my day!

      </p>
    </div>
  )
})

About.displayName = 'About'

export { About }
