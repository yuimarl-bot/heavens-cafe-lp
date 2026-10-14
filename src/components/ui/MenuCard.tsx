import { useState } from 'react'
import { menuCopy } from '../../data/copy'
import type { MenuItem } from '../../data/menu'
import { asset } from '../../lib/asset'

const yen = (price: number) => `¥${price.toLocaleString()}`

export default function MenuCard({ item }: { item: MenuItem }) {
  // 画像ファイルが未配置の間は、グラデーションのプレースホルダーを表示する
  const [imageOk, setImageOk] = useState(true)
  const showImage = item.imageSrc && imageOk

  return (
    <li className="flex flex-col overflow-hidden rounded-md border border-line bg-white/60 shadow-card transition hover:-translate-y-0.5 hover:shadow-cardHover">
      <div className="relative aspect-[4/3] bg-gradient-to-br from-terracotta to-sunset">
        {showImage && (
          <img
            src={asset(item.imageSrc!)}
            srcSet={
              item.imageSrcSmall ? `${asset(item.imageSrcSmall)} 800w, ${asset(item.imageSrc!)} 1200w` : undefined
            }
            sizes="(min-width: 1024px) 340px, (min-width: 768px) 45vw, 92vw"
            alt={item.imageAlt ?? item.name}
            width={1200}
            height={900}
            loading="lazy"
            onError={() => setImageOk(false)}
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
      </div>
      {showImage && item.imageKind === 'ai' && (
        <p className="px-4 pt-1 text-right text-[12px] text-ink-muted">{menuCopy.aiCaption}</p>
      )}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-heading text-h3 font-bold">{item.name}</h3>
          {/* 価格が未設定、またはラベルなしの1種類だけのときは、見出しの横に出す */}
          {!item.priceNote && (!item.prices || (item.prices.length === 1 && !item.prices[0].label)) && (
            <p className="shrink-0 font-latin text-base font-semibold text-terracotta-dark">
              {item.prices ? yen(item.prices[0].price) : menuCopy.pricePending}
            </p>
          )}
        </div>
        <p className="mt-2 text-small text-ink-muted">{item.description}</p>
        {item.priceNote && <p className="mt-3 text-small font-bold text-terracotta-dark">{item.priceNote}</p>}
        {item.prices && (item.prices.length > 1 || item.prices[0].label) && (
          <dl className="mt-3 divide-y divide-line border-y border-line text-small">
            {item.prices.map((option) => (
              <div key={option.label} className="flex items-baseline justify-between py-1.5">
                <dt>{option.label}</dt>
                <dd className="font-latin text-base font-semibold text-terracotta-dark">{yen(option.price)}</dd>
              </div>
            ))}
          </dl>
        )}
        {item.pairing && (
          <p className="mt-3 text-small">
            <span className="font-bold">{menuCopy.pairingLabel}：</span> {item.pairing}
          </p>
        )}
      </div>
    </li>
  )
}
