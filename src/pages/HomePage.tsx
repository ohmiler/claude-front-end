import { Hero } from '../components/sections/Hero'
import { ServicesGrid } from '../components/sections/ServicesGrid'
import { ProcessTimeline } from '../components/sections/ProcessTimeline'
import { CaseStudyGrid } from '../components/sections/CaseStudyGrid'
import { CtaBanner } from '../components/sections/CtaBanner'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Button } from '../components/ui/Button'
import { services } from '../data/services'
import { processSteps } from '../data/processSteps'
import { caseStudies } from '../data/caseStudies'

export function HomePage() {
  const featuredCaseStudies = caseStudies.filter((caseStudy) => caseStudy.featured)

  return (
    <>
      <Hero />

      <section className="py-24" aria-labelledby="services-heading" data-testid="home-services-section">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="What we do"
            title="Full-stack AI product delivery"
            subtitle="From strategy to production infrastructure, we cover the full lifecycle of building AI-native software."
            id="services-heading"
          />
          <ServicesGrid services={services} />
          <div>
            <Button to="/services" variant="secondary" data-testid="home-services-link">
              Explore all services
            </Button>
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-24" aria-labelledby="process-heading" data-testid="home-process-section">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="How we work"
            title="A process built for shipping, not slideware"
            subtitle="Five stages take you from a rough idea to a production system your team can own."
            id="process-heading"
          />
          <ProcessTimeline steps={processSteps} variant="condensed" />
          <div>
            <Button to="/process" variant="secondary" data-testid="home-process-link">
              See our full process
            </Button>
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-24" aria-labelledby="case-studies-heading" data-testid="home-case-studies-section">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="Proof, not promises"
            title="Recent work"
            subtitle="A sample of AI systems we've taken from discovery to production."
            id="case-studies-heading"
          />
          <CaseStudyGrid caseStudies={featuredCaseStudies} />
          <div>
            <Button to="/case-studies" variant="secondary" data-testid="home-case-studies-link">
              View all case studies
            </Button>
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  )
}
