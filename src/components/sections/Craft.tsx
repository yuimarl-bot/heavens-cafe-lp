import { useState } from 'react'
import { craftCopy, menuCopy } from '../../data/copy'
import { asset } from '../../lib/asset'
import SectionHeading from '../ui/SectionHeading'

export default function Craft() {
  // 画像ファイルが未配置の間は、色のプレースホルダーだけを表示する
  const [imageOk, setImageOk] = useState(true)

  return (
    <section id="craft" className="bg-sand py-16 md:py-28">
      <div className="mx-auto grid max-w-container items-center gap-10 px-5 md:grid-cols-2 md:gap-16 md:px-8">
        <div className="relative md:order-first">
          {/* 背景のずらしブロック */}
          <div aria-hidden="true" className="absolute -bottom-4 -left-4 h-full w-full rounded-lg bg-terracotta/15 md:-bottom-6 md:-left-6" />
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gradient-to-br from-terracotta to-sunset">
            {imageOk && (
              <img
                src={asset(craftCopy.imageSrc)}
                srcSet={`${asset(craftCopy.imageSrcSmall)} 800w, ${asset(craftCopy.imageSrc)} 1200w`}
                sizes="(min-width: 1024px) 496px, (min-width: 768px) 45vw, 92vw"
                alt={craftCopy.imageAlt}
                width={1200}
                height={896}
                loading="lazy"
                onError={() => setImageOk(false)}
                className="h-full w-full object-cover"
              />
            )}
          </div>
          {imageOk && craftCopy.imageKind === 'ai' && (
            <p className="relative mt-6 text-right text-[12px] text-ink-muted md:mt-8">{menuCopy.aiCaption}</p>
          )}
        </div>

        <div>
          <SectionHeading eyebrow={craftCopy.eyebrow} title={craftCopy.heading} lead={craftCopy.lead} />
          <ol className="mt-8 space-y-6">
            {craftCopy.points.map((point, i) => (
              <li key={point.title} className="flex gap-4">
                <span aria-hidden="true" className="font-latin text-[32px] font-bold leading-none text-terracotta">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-heading text-h3 font-bold">{point.title}</h3>
                  <p className="mt-2 text-body text-ink-muted">{point.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
