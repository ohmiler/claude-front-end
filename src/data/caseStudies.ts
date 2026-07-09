import type { CaseStudy } from '../lib/types'

export const caseStudies: CaseStudy[] = [
  {
    slug: 'northwind-logistics',
    client: 'Northwind Logistics',
    title: 'Cutting dispatch decision time from hours to minutes',
    summary:
      'Built an AI-powered dispatch copilot that analyzes live fleet, weather, and demand data to recommend optimal routing — replacing a spreadsheet-driven process.',
    industry: 'Logistics & Supply Chain',
    tags: ['LLM Agents', 'RAG', 'React', 'Python'],
    metrics: [
      { label: 'Dispatch time', value: '-82%' },
      { label: 'Time to launch', value: '9 weeks' },
      { label: 'Fuel cost reduction', value: '14%' },
    ],
    featured: true,
  },
  {
    slug: 'harborview-health',
    client: 'Harborview Health',
    title: 'A clinical documentation assistant clinicians actually trust',
    summary:
      'Designed and shipped an ambient scribe that drafts structured clinical notes in real time, with a human-in-the-loop review flow built for compliance.',
    industry: 'Healthcare',
    tags: ['LLM Agents', 'HIPAA-aligned', 'Next.js', 'Vector Search'],
    metrics: [
      { label: 'Documentation time', value: '-61%' },
      { label: 'Clinician adoption', value: '94%' },
      { label: 'Time to launch', value: '12 weeks' },
    ],
    featured: true,
  },
  {
    slug: 'ledgerly-fintech',
    client: 'Ledgerly',
    title: 'Automating reconciliation for a fintech scaling 5x',
    summary:
      'Replaced a manual reconciliation team of 6 with an AI pipeline that flags anomalies and auto-resolves routine mismatches, with full audit trails.',
    industry: 'Fintech',
    tags: ['MLOps', 'Anomaly Detection', 'Go', 'PostgreSQL'],
    metrics: [
      { label: 'Manual review volume', value: '-77%' },
      { label: 'Reconciliation accuracy', value: '99.6%' },
      { label: 'Time to launch', value: '10 weeks' },
    ],
    featured: true,
  },
  {
    slug: 'fieldpoint-retail',
    client: 'Fieldpoint Retail',
    title: 'A merchandising copilot for a 400-store retail chain',
    summary:
      'Built an internal tool that lets category managers query inventory, sales, and trend data in natural language, replacing a backlog of ad-hoc BI requests.',
    industry: 'Retail',
    tags: ['RAG', 'Data Engineering', 'React', 'Snowflake'],
    metrics: [
      { label: 'BI request backlog', value: '-90%' },
      { label: 'Weekly active users', value: '340+' },
      { label: 'Time to launch', value: '8 weeks' },
    ],
  },
]
