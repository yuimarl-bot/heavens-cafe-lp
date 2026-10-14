import { useState } from 'react'
import { heroCopy } from '../../data/copy'
import { shop } from '../../data/shop'
import { asset } from '../../lib/asset'
import Button from '../ui/Button'

export default function Hero() {
  // 画像ファイルが未配置の間は、CSSグラデーションの背景だけを表示する
  const [imageOk, setImageOk] = useState(true)

  return (
    <section
      id="hero"
      className="on-dark relative flex min-h-[100svh] items-end overflow-hidden bg-gradient-to-b from-ocean via-[#7a4a3a] to-sunset text-base md:min-h-[80vh] md:items-center"
    >
      {imageOk && (
        <img
          src={asset(heroCopy.imageSrc)}
          alt={heroCopy.imageAlt}
          width={1600}
          height={678}
          fetchPriority="high"
          onError={() => setImageOk(false)}
          className="absolute inset-0 h-full w-full object-cover object-[30%_50%] [filter:sepia(0.18)_saturate(1.05)]"
        />
      )}
      {/* 文字の可読性用の暗い膜 + 夕景に寄せる暖色の膜 */}
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-ink/65 via-ink/65 to-ink/85" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-sunset/40 to-transparent mix-blend-soft-light" />

      {/* 透かしロゴ（装飾） */}
      <img
        src={asset('/images/logo-heavens-cream.png')}
        alt=""
        aria-hidden="true"
        width={506}
        height={112}
        className="pointer-events-none absolute right-5 top-36 w-[55%] max-w-none select-none opacity-[0.14] md:right-8 md:top-1/2 md:w-[30%] md:-translate-y-1/2"
      />

      <div className="relative mx-auto w-full max-w-container px-5 pb-24 pt-36 md:px-8 md:pb-20 md:pt-32">
        <div className="hero-fade max-w-2xl">
          <p className="font-latin text-sm font-semibold tracking-[0.12em]">{heroCopy.eyebrow}</p>
          <h1 className="mt-4 font-heading text-display font-bold">{heroCopy.title}</h1>
          <p className="mt-4 font-latin text-lg italic">{heroCopy.subtitle}</p>
          <p className="mt-6 text-body text-on-dark">{heroCopy.lead}</p>

          <div className="mt-8 flex flex-col gap-3 md:flex-row">
            <Button href="#menu" className="h-[52px] md:h-12">
              {heroCopy.primaryCta}
            </Button>
            <Button href={shop.telHref} variant="outline-light" className="h-[52px] md:h-12">
              {heroCopy.secondaryCta}
              <span className="hidden whitespace-nowrap md:inline">（{shop.tel}）</span>
            </Button>
          </div>
          <p className="mt-4 text-small text-on-dark">{heroCopy.note}</p>
        </div>
      </div>
    </section>
  )
}
