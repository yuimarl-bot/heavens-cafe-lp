import type { AnchorHTMLAttributes } from 'react'

type Variant = 'primary' | 'secondary' | 'outline-light'

const variants: Record<Variant, string> = {
  primary: 'bg-terracotta text-white hover:bg-terracotta-dark',
  secondary:
    'border-2 border-terracotta-dark text-terracotta-dark hover:bg-terracotta-dark hover:text-white',
  'outline-light': 'border-2 border-base text-base hover:bg-base hover:text-ink',
}

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant }

// タップ領域は高さ48px以上（モバイルの主要CTAは size を大きくする）
export default function Button({ variant = 'primary', className = '', ...rest }: Props) {
  return (
    <a
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 font-bold transition-colors duration-150 ${variants[variant]} ${className}`}
      {...rest}
    />
  )
}
