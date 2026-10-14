import { useEffect, useRef, useState } from 'react'
import { headerCopy } from '../../data/copy'
import { shop } from '../../data/shop'
import Button from '../ui/Button'
import Logo from '../ui/Logo'
import StatusBadge from './StatusBadge'

const FOCUSABLE = 'a[href], button:not([disabled])'
// メニューを開いている間、操作できなくする領域（ヘッダー以外）
const BACKGROUND = 'main, footer, [data-callbar]'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const skipFocusRestore = useRef(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // 画面幅がPC幅に広がったら、開いたメニューを閉じる
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const onChange = () => mq.matches && setOpen(false)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  // メニュー表示中: Escで閉じる / フォーカスをパネル内で循環 / 背景スクロール停止 / 背景を操作不可に
  useEffect(() => {
    if (!open) return
    const toggle = toggleRef.current
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const background = document.querySelectorAll(BACKGROUND)
    background.forEach((el) => el.setAttribute('inert', ''))

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        return
      }
      if (e.key !== 'Tab' || !headerRef.current) return
      const items = Array.from(headerRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
        (el) => el.offsetParent !== null,
      )
      const first = items[0]
      const last = items[items.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = prevOverflow
      background.forEach((el) => el.removeAttribute('inert'))
      // リンクを押して閉じたときは、移動先を優先してトグルへ戻さない
      if (!skipFocusRestore.current) toggle?.focus()
      skipFocusRestore.current = false
    }
  }, [open])

  const dark = !scrolled || open // 透過中・パネル表示中は明るい文字色
  const closeByLink = () => {
    skipFocusRestore.current = true
    setOpen(false)
  }

  return (
    <header
      ref={headerRef}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
        dark ? 'on-dark text-base' : 'text-ink shadow-header'
      } ${scrolled && !open ? 'bg-base/[0.96] backdrop-blur-md supports-[backdrop-filter]:bg-base/80' : ''}`}
    >
      {!scrolled && !open && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/55 to-transparent"
        />
      )}
      <div className="relative z-10 mx-auto flex h-16 max-w-container items-center justify-between px-5 md:h-20 md:px-8">
        <Logo tone={dark ? 'light' : 'dark'} />
        <nav aria-label="メインナビゲーション" className="hidden items-center gap-8 md:flex">
          {headerCopy.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="py-2 underline-offset-[6px] decoration-2 decoration-terracotta hover:underline"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          {/* 1280px以上のみヘッダー内に置く。それ未満は下の行に回す */}
          <StatusBadge className="hidden xl:inline-flex" />
          <Button href={shop.telHref} aria-label={headerCopy.ctaAria}>
            {headerCopy.ctaLabel}
          </Button>
        </div>
        <button
          ref={toggleRef}
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? headerCopy.menuCloseAria : headerCopy.menuOpenAria}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-full md:hidden"
        >
          <span aria-hidden="true" className="text-2xl leading-none">
            {open ? '✕' : '☰'}
          </span>
        </button>
      </div>
      <div className="relative z-10 px-5 pb-2 md:px-8 xl:hidden">
        <div className="mx-auto max-w-container">
          <StatusBadge />
        </div>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="on-dark fixed inset-0 z-0 flex flex-col bg-ink px-5 pt-28 text-base md:hidden"
        >
          <nav aria-label="モバイルナビゲーション">
            <ul>
              {headerCopy.nav.map((item) => (
                <li key={item.href} className="border-b border-on-dark/20">
                  <a href={item.href} onClick={closeByLink} className="flex h-14 items-center font-heading text-h3">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-8 flex flex-col gap-3">
            <Button href={shop.telHref} className="h-14">
              {headerCopy.ctaLabel}（{shop.tel}）
            </Button>
            {shop.lineUrl && (
              <Button href={shop.lineUrl} variant="outline-light" className="h-14">
                {headerCopy.lineLabel}
              </Button>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
