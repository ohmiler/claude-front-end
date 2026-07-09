import clsx from 'clsx'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
  id?: string
  as?: 'h1' | 'h2'
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className,
  id,
  as: HeadingTag = 'h2',
}: SectionHeadingProps) {
  return (
    <div
      className={clsx(
        'flex flex-col gap-4',
        align === 'center' && 'items-center text-center',
        className,
      )}
    >
      {eyebrow && (
        <span className="text-sm font-semibold uppercase tracking-widest text-accent-cyan">
          {eyebrow}
        </span>
      )}
      <HeadingTag
        id={id}
        className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl"
      >
        {title}
      </HeadingTag>
      {subtitle && (
        <p className="max-w-2xl text-lg text-text-secondary">
          {subtitle}
        </p>
      )}
    </div>
  )
}
