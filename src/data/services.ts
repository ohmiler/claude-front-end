import type { Service } from '../lib/types'

export const services: Service[] = [
  {
    slug: 'ai-product-strategy',
    title: 'AI Product Strategy',
    summary: 'Turn ambiguous AI ambitions into a shippable roadmap.',
    description:
      'We embed with your team to identify where AI creates real leverage, scope a defensible product roadmap, and de-risk the build before a single line of code ships.',
    icon: 'Compass',
    capabilities: [
      'Opportunity discovery & feasibility audits',
      'Model & vendor evaluation',
      'Roadmap and build-vs-buy recommendations',
      'ROI and risk modeling',
    ],
  },
  {
    slug: 'custom-ai-applications',
    title: 'Custom AI Application Development',
    summary: 'Production-grade applications built around AI from day one.',
    description:
      'From internal tools to customer-facing products, we design and build full-stack applications with AI woven into the core experience, not bolted on afterward.',
    icon: 'Code2',
    capabilities: [
      'Full-stack web & mobile development',
      'AI-native UX and interaction design',
      'API and data architecture',
      'Performance and scalability engineering',
    ],
  },
  {
    slug: 'llm-agent-integration',
    title: 'LLM & Agent Integration',
    summary: 'Ship reliable copilots, assistants, and autonomous agents.',
    description:
      'We design agentic systems and LLM-powered features that are grounded, observable, and safe to run in production — with evaluation baked in from the start.',
    icon: 'Bot',
    capabilities: [
      'Retrieval-augmented generation (RAG) pipelines',
      'Tool-use and multi-agent orchestration',
      'Prompt engineering & evaluation harnesses',
      'Guardrails, monitoring, and observability',
    ],
  },
  {
    slug: 'mlops-infrastructure',
    title: 'MLOps & Infrastructure',
    summary: 'The plumbing that keeps AI systems fast, cheap, and reliable.',
    description:
      'We build the infrastructure layer — model serving, data pipelines, cost controls, and CI/CD — so your AI features stay reliable as usage scales.',
    icon: 'Server',
    capabilities: [
      'Model serving & inference optimization',
      'Data pipeline & vector store architecture',
      'Cost monitoring and token budgeting',
      'CI/CD for ML and LLM workflows',
    ],
  },
  {
    slug: 'ai-augmented-teams',
    title: 'AI-Augmented Engineering Teams',
    summary: 'Embedded engineers who ship faster with AI-native workflows.',
    description:
      'Extend your team with senior engineers who use AI-assisted development as a default, cutting delivery time without cutting code quality.',
    icon: 'Users',
    capabilities: [
      'Embedded senior engineering pods',
      'AI-assisted development workflows',
      'Code review and quality standards',
      'Knowledge transfer to your in-house team',
    ],
  },
  {
    slug: 'support-optimization',
    title: 'Ongoing Support & Optimization',
    summary: 'Keep AI systems accurate, fast, and cost-efficient over time.',
    description:
      'AI systems drift. We provide ongoing monitoring, evaluation, and tuning so accuracy and performance hold up as your data and usage evolve.',
    icon: 'RefreshCw',
    capabilities: [
      'Model performance monitoring',
      'Continuous evaluation & regression testing',
      'Cost and latency optimization',
      'Incident response and on-call support',
    ],
  },
]
