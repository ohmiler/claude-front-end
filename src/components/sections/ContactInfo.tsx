import { Mail, MapPin, Clock } from 'lucide-react'
import { Card } from '../ui/Card'

const infoItems = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@astraaisoftware.studio',
    href: 'mailto:hello@astraaisoftware.studio',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Remote-first, with hubs in Austin & Berlin',
  },
  {
    icon: Clock,
    label: 'Response time',
    value: 'Within one business day',
  },
]

export function ContactInfo() {
  return (
    <Card hoverable={false} className="flex flex-col gap-6" data-testid="contact-info">
      <h3 className="text-lg font-semibold text-text-primary">Contact details</h3>
      <ul className="flex flex-col gap-5">
        {infoItems.map((item) => (
          <li key={item.label} className="flex items-start gap-3">
            <item.icon size={20} className="mt-0.5 shrink-0 text-accent-cyan" aria-hidden="true" />
            <div className="flex flex-col gap-0.5">
              <span className="text-xs text-text-muted">{item.label}</span>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-sm text-text-primary transition-colors duration-200 hover:text-accent-cyan"
                >
                  {item.value}
                </a>
              ) : (
                <span className="text-sm text-text-primary">{item.value}</span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Card>
  )
}
