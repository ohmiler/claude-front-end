import type { Faq } from '../lib/types'

export const faqs: Faq[] = [
  {
    question: 'What engagement models do you offer?',
    answer:
      'We work as a fixed-scope project team, an embedded pod augmenting your in-house engineers, or a retained partner for ongoing support and optimization. Most clients start with a scoped project and shift to a retained model post-launch.',
  },
  {
    question: 'How long does a typical engagement take?',
    answer:
      'Most projects launch a first production version in 6 to 12 weeks, depending on scope and integration complexity. We favor shipping a focused version fast and iterating, over long pre-launch cycles.',
  },
  {
    question: 'What does your tech stack look like?',
    answer:
      'We are pragmatic about stack choice and match it to your existing systems. Common tools include React/Next.js and Python/Go on the application side, and a mix of hosted and open-source models with vector databases for AI workloads.',
  },
  {
    question: 'How do you price engagements?',
    answer:
      'Scoped projects are priced fixed-fee based on discovery findings. Embedded teams and retained support are billed monthly. We always share a detailed estimate before any commitment.',
  },
  {
    question: 'Do you provide support after launch?',
    answer:
      'Yes. AI systems require ongoing monitoring and tuning as usage and data change. Every engagement can transition into a retained support plan covering monitoring, evaluation, and incident response.',
  },
  {
    question: 'How do you handle data security and compliance?',
    answer:
      'We design with least-privilege access, encryption in transit and at rest, and audit logging by default, and can work within HIPAA, SOC 2, and similar compliance frameworks depending on your industry.',
  },
  {
    question: 'Can you work with our existing engineering team?',
    answer:
      'Yes — this is one of our most common engagement types. We embed senior engineers directly into your team and transfer knowledge throughout, so your team can own and extend the system after we step back.',
  },
]
