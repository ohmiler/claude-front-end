import { Check } from 'lucide-react'
import type { Service } from '../../lib/types'
import { iconMap } from '../../lib/icons'
import { Card } from '../ui/Card'

interface ServiceDetailProps {
  service: Service
}

export function ServiceDetail({ service }: ServiceDetailProps) {
  const Icon = iconMap[service.icon]

  return (
    <Card
      hoverable={false}
      className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]"
      data-testid={`service-detail-${service.slug}`}
    >
      <div className="flex flex-col gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-bg-elevated text-accent-cyan">
          {Icon && <Icon size={24} aria-hidden="true" />}
        </div>
        <h3 className="text-2xl font-semibold text-text-primary">{service.title}</h3>
        <p className="text-text-secondary">{service.description}</p>
      </div>

      <ul className="flex flex-col gap-3 self-center">
        {service.capabilities.map((capability) => (
          <li key={capability} className="flex items-start gap-3 text-sm text-text-secondary">
            <Check size={18} className="mt-0.5 shrink-0 text-accent-cyan" aria-hidden="true" />
            {capability}
          </li>
        ))}
      </ul>
    </Card>
  )
}
