import { ServiceDetail } from '../components/sections/ServiceDetail'
import { CtaBanner } from '../components/sections/CtaBanner'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
import { services } from '../data/services'

export function ServicesPage() {
  return (
    <>
      <section className="py-20 sm:py-28" aria-labelledby="services-page-heading" data-testid="services-page-section">
        <Container className="flex flex-col gap-16">
          <SectionHeading
            as="h1"
            eyebrow="Services"
            title="Everything you need to ship AI software"
            subtitle="We work across the full lifecycle — from picking the right problem to keeping the system healthy in production."
            id="services-page-heading"
          />
          <div className="flex flex-col gap-6">
            {services.map((service) => (
              <ServiceDetail key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Not sure which service fits?"
        subtitle="Tell us where you're stuck and we'll recommend a starting point in one call."
      />
    </>
  )
}
