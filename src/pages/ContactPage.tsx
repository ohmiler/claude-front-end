import { ContactForm } from '../components/sections/ContactForm'
import { ContactInfo } from '../components/sections/ContactInfo'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'

export function ContactPage() {
  return (
    <section className="py-20 sm:py-28" aria-labelledby="contact-heading" data-testid="contact-page-section">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          as="h1"
          eyebrow="Contact"
          title="Tell us about your project"
          subtitle="Share a few details and we'll get back to you within one business day."
          id="contact-heading"
        />
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <ContactForm />
          <ContactInfo />
        </div>
      </Container>
    </section>
  )
}
