import type { HTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  hoverable?: boolean
}

export function Card({ children, className, hoverable = true, ...rest }: CardProps) {
  return (
    <div
      className={clsx(
        'rounded-2xl border border-border bg-surface p-6 sm:p-7',
        hoverable && 'transition-colors duration-200 hover:border-border-strong hover:bg-surface-hover',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  )
}
