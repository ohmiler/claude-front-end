import type { IconName } from './icons'

export interface NavLink {
  label: string
  to: string
}

export interface Service {
  slug: string
  title: string
  summary: string
  description: string
  icon: IconName
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
  icon: IconName
}

export interface Faq {
  question: string
  answer: string
}
