import type { ProcessStep } from '../lib/types'

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: 'Discover',
    description:
      'We audit your data, systems, and workflows to find where AI creates real, defensible leverage — not just where it sounds good in a deck.',
    icon: 'Search',
  },
  {
    step: 2,
    title: 'Design',
    description:
      'We scope a concrete architecture and roadmap, choosing models, tooling, and interaction patterns suited to your constraints and risk tolerance.',
    icon: 'PenTool',
  },
  {
    step: 3,
    title: 'Build',
    description:
      'Senior engineers ship in tight iterations, using AI-assisted development workflows to move fast without sacrificing code quality or test coverage.',
    icon: 'Hammer',
  },
  {
    step: 4,
    title: 'Launch',
    description:
      'We roll out with staged rollouts, monitoring, and evaluation harnesses in place, so you know the system performs before it reaches every user.',
    icon: 'Rocket',
  },
  {
    step: 5,
    title: 'Iterate',
    description:
      'AI systems drift as data and usage change. We stay on to monitor accuracy, cost, and performance, and tune the system as your product evolves.',
    icon: 'RefreshCw',
  },
]
