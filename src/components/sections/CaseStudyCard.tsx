import type { CaseStudy } from '../../lib/types'
import { Card } from '../ui/Card'
import { Badge } from '../ui/Badge'

interface CaseStudyCardProps {
  caseStudy: CaseStudy
}

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <Card className="flex h-full flex-col gap-5" data-testid={`case-study-card-${caseStudy.slug}`}>
      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium text-accent-cyan">{caseStudy.industry}</span>
        <h3 className="text-xl font-semibold text-text-primary">{caseStudy.title}</h3>
        <p className="text-sm text-text-secondary">{caseStudy.summary}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {caseStudy.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>

      <dl className="mt-auto grid grid-cols-3 gap-4 border-t border-border pt-5">
        {caseStudy.metrics.map((metric) => (
          <div key={metric.label} className="flex flex-col gap-1">
            <dt className="text-xs text-text-muted">{metric.label}</dt>
            <dd className="text-lg font-semibold text-text-primary">{metric.value}</dd>
          </div>
        ))}
      </dl>
    </Card>
  )
}
