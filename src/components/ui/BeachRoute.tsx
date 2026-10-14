import { accessCopy } from '../../data/copy'

// 店から名護湾ビーチまでの位置関係を示す簡易イメージ図（実際の道のりではない）
// 狭い画面でも読めるよう、文字は viewBox 基準で大きめにしている
export default function BeachRoute() {
  const { route } = accessCopy
  return (
    <figure className="rounded-lg bg-base p-4">
      <svg viewBox="0 0 400 150" role="img" aria-label={route.ariaLabel} className="h-auto w-full">
        {/* 海 */}
        <path d="M285 0 H400 V150 H285 C310 105 260 60 285 0 Z" className="fill-ocean/25" />
        <path
          d="M320 38 q10 -8 20 0 t20 0 M325 108 q10 -8 20 0 t20 0"
          className="fill-none stroke-ocean"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* 道 */}
        <path
          d="M90 100 C140 50 200 130 265 80"
          className="fill-none stroke-terracotta-dark"
          strokeWidth="4"
          strokeDasharray="2 10"
          strokeLinecap="round"
        />
        {/* 店 */}
        <circle cx="90" cy="100" r="10" className="fill-terracotta-dark" />
        <text x="90" y="136" textAnchor="middle" className="fill-ink text-[22px] font-bold">
          {route.shop}
        </text>
        {/* ビーチ */}
        <circle cx="265" cy="80" r="10" className="fill-sunset" />
        <text x="250" y="58" textAnchor="middle" className="fill-ink text-[22px] font-bold">
          {route.beach}
        </text>
        <text x="160" y="28" textAnchor="middle" className="fill-terracotta-dark text-[24px] font-bold">
          {route.time}
        </text>
      </svg>
      <figcaption className="mt-2 text-small text-ink-muted">{route.note}</figcaption>
    </figure>
  )
}
