import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import clsx from 'clsx'
import type { Faq } from '../../lib/types'

interface FaqAccordionProps {
  faqs: Faq[]
}

export function FaqAccordion({ faqs }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="flex flex-col divide-y divide-border rounded-2xl border border-border bg-surface" data-testid="faq-accordion">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index
        const panelId = `faq-panel-${index}`
        const buttonId = `faq-button-${index}`

        return (
          <div key={faq.question}>
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                data-testid={`faq-question-${index}`}
              >
                <span className="font-medium text-text-primary">{faq.question}</span>
                <ChevronDown
                  size={20}
                  aria-hidden="true"
                  className={clsx(
                    'shrink-0 text-text-muted transition-transform duration-200',
                    isOpen && 'rotate-180',
                  )}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-6 pb-5 text-sm text-text-secondary"
            >
              {faq.answer}
            </div>
          </div>
        )
      })}
    </div>
  )
}
