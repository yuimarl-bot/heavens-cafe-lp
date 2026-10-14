import { shop } from '../../data/shop'
import { asset } from '../../lib/asset'

type Props = {
  // light: 暗い背景用（クリーム色） / dark: 明るい背景用（茶色）
  tone?: 'light' | 'dark'
  className?: string
}

const sources = {
  light: '/images/logo-heavens-cream.png',
  dark: '/images/logo-heavens-brown.png',
}

// 店舗ロゴ（文字のみ・背景透過）。背景の明暗に合わせて色違いを切り替える
export default function Logo({ tone = 'dark', className = '' }: Props) {
  return (
    <a
      href="#top"
      className={`block shrink-0 ${className}`}
      aria-label={`${shop.name}（${shop.nameEn}） トップへ`}
    >
      <img src={asset(sources[tone])} alt="" width={506} height={112} className="h-12 w-auto md:h-14" />
    </a>
  )
}
