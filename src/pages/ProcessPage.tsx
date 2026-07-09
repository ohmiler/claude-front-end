import { ProcessTimeline } from '../components/sections/ProcessTimeline'
import { FaqAccordion } from '../components/sections/FaqAccordion'
import { CtaBanner } from '../components/sections/CtaBanner'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
import { processSteps } from '../data/processSteps'
import { faqs } from '../data/faqs'

export function ProcessPage() {
  return (
    <>
      <section className="py-20 sm:py-28" aria-labelledby="process-page-heading" data-testid="process-page-section">
        <Container className="flex flex-col gap-16">
          <SectionHeading
            as="h1"
            eyebrow="Our process"
            title="Five stages, zero guesswork"
            subtitle="A transparent process designed to get a production system in front of real users fast, then keep it healthy."
            id="process-page-heading"
          />
          <ProcessTimeline steps={processSteps} variant="full" />
        </Container>
      </section>

      <section className="border-t border-border py-20 sm:py-28" aria-labelledby="faq-heading" data-testid="process-faq-section">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="FAQ"
            title="Common questions"
            subtitle="Answers to what clients usually ask before kicking off an engagement."
            id="faq-heading"
          />
          <FaqAccordion faqs={faqs} />
        </Container>
      </section>

      <CtaBanner />
    </>
  )
}
