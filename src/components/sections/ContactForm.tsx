import { useState, type FormEvent } from 'react'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  function validate(): FormErrors {
    const nextErrors: FormErrors = {}
    if (!name.trim()) nextErrors.name = 'Please enter your name.'
    if (!email.trim()) {
      nextErrors.email = 'Please enter your email.'
    } else if (!EMAIL_PATTERN.test(email.trim())) {
      nextErrors.email = 'Please enter a valid email address.'
    }
    if (!message.trim()) nextErrors.message = 'Please tell us a bit about your project.'
    return nextErrors
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    const subject = encodeURIComponent(`Project inquiry from ${name}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company || 'N/A'}\n\n${message}`,
    )
    window.location.href = `mailto:hello@astraaisoftware.studio?subject=${subject}&body=${body}`
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <Card hoverable={false} className="flex flex-col gap-3" data-testid="contact-success">
        <h3 className="text-lg font-semibold text-text-primary">Thanks — message ready to send</h3>
        <p className="text-sm text-text-secondary">
          Your email client should have opened with your message pre-filled. If it
          didn't, email us directly at{' '}
          <a href="mailto:hello@astraaisoftware.studio" className="text-accent-cyan">
            hello@astraaisoftware.studio
          </a>
          .
        </p>
      </Card>
    )
  }

  return (
    <Card hoverable={false}>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit} noValidate data-testid="contact-form">
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-name" className="text-sm font-medium text-text-primary">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'contact-name-error' : undefined}
            className="rounded-lg border border-border bg-bg-elevated px-4 py-2.5 text-text-primary placeholder:text-text-muted focus:border-accent-cyan focus:outline-none"
            data-testid="contact-name-input"
          />
          {errors.name && (
            <p id="contact-name-error" className="text-sm text-red-400">
              {errors.name}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="contact-email" className="text-sm font-medium text-text-primary">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'contact-email-error' : undefined}
            className="rounded-lg border border-border bg-bg-elevated px-4 py-2.5 text-text-primary placeholder:text-text-muted focus:border-accent-cyan focus:outline-none"
            data-testid="contact-email-input"
          />
          {errors.email && (
            <p id="contact-email-error" className="text-sm text-red-400">
              {errors.email}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="contact-company" className="text-sm font-medium text-text-primary">
            Company <span className="text-text-muted">(optional)</span>
          </label>
          <input
            id="contact-company"
            name="company"
            type="text"
            value={company}
            onChange={(event) => setCompany(event.target.value)}
            className="rounded-lg border border-border bg-bg-elevated px-4 py-2.5 text-text-primary placeholder:text-text-muted focus:border-accent-cyan focus:outline-none"
            data-testid="contact-company-input"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="contact-message" className="text-sm font-medium text-text-primary">
            Project details
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'contact-message-error' : undefined}
            className="resize-none rounded-lg border border-border bg-bg-elevated px-4 py-2.5 text-text-primary placeholder:text-text-muted focus:border-accent-cyan focus:outline-none"
            data-testid="contact-message-input"
          />
          {errors.message && (
            <p id="contact-message-error" className="text-sm text-red-400">
              {errors.message}
            </p>
          )}
        </div>

        <Button type="submit" size="lg" data-testid="contact-submit">
          Send message
        </Button>
      </form>
    </Card>
  )
}
