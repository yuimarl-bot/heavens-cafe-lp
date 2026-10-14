import { shop } from '../../data/shop'
import { headerCopy } from '../../data/copy'

// モバイル下部の電話固定バー（md以上は非表示）。iPhoneの下端の安全領域に対応
export default function CallBar() {
  return (
    <a
      data-callbar
      href={shop.telHref}
      className="fixed inset-x-0 bottom-0 z-40 flex h-[calc(3.5rem+env(safe-area-inset-bottom))] items-center justify-center bg-terracotta pb-[env(safe-area-inset-bottom)] font-bold text-white transition-colors hover:bg-terracotta-dark focus-visible:[outline-color:#fff] focus-visible:[outline-offset:-4px] md:hidden"
    >
      {headerCopy.ctaLabel}（{shop.tel}）
    </a>
  )
}
