import { ArrowRight, Sparkles } from 'lucide-react'
import { Container } from '../ui/Container'
import { Button } from '../ui/Button'

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(134,59,255,0.25),transparent_60%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"
      />

      <Container className="relative flex flex-col items-center gap-8 py-24 text-center sm:py-32">
        <span className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-bg-elevated px-4 py-1.5 text-sm font-medium text-text-secondary">
          <Sparkles size={16} className="text-accent-cyan" aria-hidden="true" />
          AI-native software, engineered for production
        </span>

        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-text-primary sm:text-6xl">
          We build the AI software your product roadmap is waiting on
        </h1>

        <p className="max-w-2xl text-lg text-text-secondary sm:text-xl">
          Astra AI Software Studio designs, builds, and ships production-grade AI
          applications, copilots, and agents for teams who need to move past the demo
          stage.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Button to="/contact" size="lg" data-testid="hero-primary-cta">
            Start a project
            <ArrowRight size={18} aria-hidden="true" />
          </Button>
          <Button to="/case-studies" size="lg" variant="secondary" data-testid="hero-secondary-cta">
            See our work
          </Button>
        </div>
      </Container>
    </section>
  )
}
