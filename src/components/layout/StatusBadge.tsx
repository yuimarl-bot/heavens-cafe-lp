import { useTodayStatus } from '../../hooks/useTodayStatus'
import { openInstagram } from '../../lib/instagram'
import { shop } from '../../data/shop'

// 色だけで伝えず、文字とアイコン（●/○）を併用する
// 営業状況を自動判定しない間（unconfirmed）は、Instagram へのリンクにする
export default function StatusBadge({ className = '' }: { className?: string }) {
  const { kind, label } = useTodayStatus()
  const isOpen = kind === 'open' || kind === 'closing-soon'
  const base = `inline-flex items-center gap-2 rounded-full bg-sand px-3 py-1 text-small text-ink ${
    isOpen ? 'border border-ocean' : 'border border-transparent'
  } ${className}`

  if (kind === 'unconfirmed') {
    return (
      <a
        href={shop.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={openInstagram}
        className={`${base} underline-offset-4 hover:underline`}
      >
        <span aria-hidden="true">○</span>
        <span>{label}</span>
        <span className="sr-only">（Instagramを開きます）</span>
      </a>
    )
  }

  return (
    <p className={base}>
      <span aria-hidden="true">{isOpen ? '●' : '○'}</span>
      <span>{label}</span>
    </p>
  )
}
