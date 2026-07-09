import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router'
import clsx from 'clsx'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'md' | 'lg'

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-accent text-white hover:bg-accent-strong shadow-[0_0_0_1px_rgba(134,59,255,0.4)]',
  secondary:
    'bg-surface text-text-primary border border-border hover:border-border-strong hover:bg-surface-hover',
  ghost: 'text-text-secondary hover:text-text-primary',
}

const sizeClasses: Record<ButtonSize, string> = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
}

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-accent-cyan focus-visible:outline-offset-2'

interface CommonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  children: ReactNode
  className?: string
}

type LinkButtonProps = CommonProps & {
  to: string
  external?: boolean
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'className'>

type NativeButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> & { to?: undefined }

type ButtonProps = LinkButtonProps | NativeButtonProps

export function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', children, className } = props
  const classes = clsx(baseClasses, variantClasses[variant], sizeClasses[size], className)

  if ('to' in props && props.to) {
    const { to, external, children: _children, className: _cn, variant: _v, size: _s, ...rest } = props
    if (external) {
      return (
        <a href={to} className={classes} target="_blank" rel="noopener noreferrer" {...rest}>
          {children}
        </a>
      )
    }
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    )
  }

  const { children: _children2, className: _cn2, variant: _v2, size: _s2, to: _to, ...rest } =
    props as NativeButtonProps
  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  )
}
