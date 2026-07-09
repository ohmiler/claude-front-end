export interface NavLink {
  label: string
  to: string
}

export interface Service {
  slug: string
  title: string
  summary: string
  description: string
  icon: string
  capabilities: string[]
}

export interface CaseStudyMetric {
  label: string
  value: string
}

export interface CaseStudy {
  slug: string
  client: string
  title: string
  summary: string
  industry: string
  tags: string[]
  metrics: CaseStudyMetric[]
  featured?: boolean
}

export interface ProcessStep {
  step: number
  title: string
  description: string
  icon: string
}

export interface Faq {
  question: string
  answer: string
}
