import { ArrowRight } from 'lucide-react'
import { Container } from '../ui/Container'
import { Button } from '../ui/Button'

interface CtaBannerProps {
  title?: string
  subtitle?: string
}

export function CtaBanner({
  title = "Let's build something that actually ships",
  subtitle = 'Tell us about your product. We usually reply within one business day with next steps.',
}: CtaBannerProps) {
  return (
    <section className="border-t border-border bg-bg-elevated">
      <Container className="flex flex-col items-center gap-6 py-20 text-center">
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
          {title}
        </h2>
        <p className="max-w-xl text-lg text-text-secondary">{subtitle}</p>
        <Button to="/contact" size="lg" data-testid="cta-banner-button">
          Start a project
          <ArrowRight size={18} aria-hidden="true" />
        </Button>
      </Container>
    </section>
  )
}
