import { CaseStudyGrid } from '../components/sections/CaseStudyGrid'
import { CtaBanner } from '../components/sections/CtaBanner'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
import { caseStudies } from '../data/caseStudies'

export function CaseStudiesPage() {
  return (
    <>
      <section className="py-20 sm:py-28" aria-labelledby="case-studies-page-heading" data-testid="case-studies-page-section">
        <Container className="flex flex-col gap-16">
          <SectionHeading
            as="h1"
            eyebrow="Case studies"
            title="Production AI systems, not demos"
            subtitle="A look at how we've helped teams across logistics, healthcare, fintech, and retail ship real AI products."
            id="case-studies-page-heading"
          />
          <CaseStudyGrid caseStudies={caseStudies} />
        </Container>
      </section>

      <CtaBanner
        title="Want results like these?"
        subtitle="Let's talk about what an AI system could do for your product."
      />
    </>
  )
}
