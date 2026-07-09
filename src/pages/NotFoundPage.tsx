import { Container } from '../components/ui/Container'
import { Button } from '../components/ui/Button'

export function NotFoundPage() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center gap-6 py-24 text-center">
      <span className="text-sm font-semibold uppercase tracking-widest text-accent-cyan">
        404
      </span>
      <h1 className="text-4xl font-semibold tracking-tight text-text-primary">
        This page doesn't exist
      </h1>
      <p className="max-w-md text-lg text-text-secondary">
        The page you're looking for may have moved or never existed. Let's get you
        back on track.
      </p>
      <Button to="/" size="lg" data-testid="not-found-home-link">
        Back to home
      </Button>
    </Container>
  )
}
