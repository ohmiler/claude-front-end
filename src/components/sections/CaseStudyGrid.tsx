import type { CaseStudy } from '../../lib/types'
import { CaseStudyCard } from './CaseStudyCard'

interface CaseStudyGridProps {
  caseStudies: CaseStudy[]
  headingLevel?: 'h2' | 'h3'
}

export function CaseStudyGrid({ caseStudies, headingLevel }: CaseStudyGridProps) {
  return (
    <ul className="grid grid-cols-1 gap-6 lg:grid-cols-2" data-testid="case-studies-grid">
      {caseStudies.map((caseStudy) => (
        <li key={caseStudy.slug}>
          <CaseStudyCard caseStudy={caseStudy} headingLevel={headingLevel} />
        </li>
      ))}
    </ul>
  )
}
