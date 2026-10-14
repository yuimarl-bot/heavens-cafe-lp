type Props = {
  eyebrow: string
  title: string
  lead?: string
  className?: string
}

// 各セクション共通の見出し（eyebrow → h2 → リード文）
export default function SectionHeading({ eyebrow, title, lead, className = '' }: Props) {
  return (
    <div className={className}>
      <p className="font-latin text-sm font-semibold tracking-[0.12em] text-terracotta-dark">{eyebrow}</p>
      <h2 className="mt-3 font-heading text-h2 font-bold">{title}</h2>
      {lead && <p className="mt-4 text-body text-ink-muted">{lead}</p>}
    </div>
  )
}
