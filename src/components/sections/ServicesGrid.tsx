import type { Service } from '../../lib/types'
import { iconMap } from '../../lib/icons'
import { Card } from '../ui/Card'

interface ServicesGridProps {
  services: Service[]
}

export function ServicesGrid({ services }: ServicesGridProps) {
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" data-testid="services-grid">
      {services.map((service) => {
        const Icon = iconMap[service.icon]
        return (
          <li key={service.slug}>
            <Card className="flex h-full flex-col gap-4" data-testid={`service-card-${service.slug}`}>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-bg-elevated text-accent-cyan">
                {Icon && <Icon size={22} aria-hidden="true" />}
              </div>
              <h3 className="text-lg font-semibold text-text-primary">{service.title}</h3>
              <p className="text-sm text-text-secondary">{service.summary}</p>
            </Card>
          </li>
        )
      })}
    </ul>
  )
}
