import content from '../content.json'
import { Section } from './Section'

export function Contact() {
  return (
    <Section id="contact" title="Contact" subtitle="Let’s collaborate.">
      <div className="flex flex-wrap items-center gap-2 md:gap-4 text-sm">
        <a className="button-cta" style={{ backgroundColor: '#B79DC6', color: '#17313E' }} href={`mailto:${content.contact.email}`}>Email me <span className="badge-arrow">✉</span></a>
        <a className="button-pill" href={content.contact.github} target="_blank">GitHub</a>
        <a className="button-pill" href={content.contact.linkedin} target="_blank">LinkedIn</a>
      </div>
    </Section>
  )
}