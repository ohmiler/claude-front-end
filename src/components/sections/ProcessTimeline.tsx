import type { ProcessStep } from '../../lib/types'
import { iconMap } from '../../lib/icons'
import clsx from 'clsx'

interface ProcessTimelineProps {
  steps: ProcessStep[]
  variant?: 'condensed' | 'full'
}

export function ProcessTimeline({ steps, variant = 'full' }: ProcessTimelineProps) {
  return (
    <ol
      className={clsx(
        'grid grid-cols-1 gap-6',
        variant === 'full' ? 'sm:grid-cols-2 lg:grid-cols-5' : 'sm:grid-cols-2 lg:grid-cols-5',
      )}
      data-testid="process-timeline"
    >
      {steps.map((step) => {
        const Icon = iconMap[step.icon]
        return (
          <li
            key={step.step}
            className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6"
            data-testid={`process-step-${step.step}`}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-bg-elevated text-accent-cyan">
                {Icon && <Icon size={20} aria-hidden="true" />}
              </div>
              <span className="text-sm font-semibold text-text-muted">
                Step {step.step}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-text-primary">{step.title}</h3>
            {variant === 'full' && (
              <p className="text-sm text-text-secondary">{step.description}</p>
            )}
          </li>
        )
      })}
    </ol>
  )
}
