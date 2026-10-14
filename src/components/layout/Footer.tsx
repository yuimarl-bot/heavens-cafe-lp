import { footerCopy } from '../../data/copy'
import { shop } from '../../data/shop'
import { openInstagram } from '../../lib/instagram'
import Logo from '../ui/Logo'

const year = new Date().getFullYear()

// 下の余白は、モバイルの電話固定バー(高さ56px)に隠れないようにするため
export default function Footer() {
  return (
    <footer className="on-dark bg-ink pb-24 pt-12 text-on-dark md:pb-10">
      <div className="mx-auto flex max-w-container flex-col items-center gap-6 px-5 text-center md:flex-row md:items-start md:justify-between md:px-8 md:text-left">
        <div className="flex flex-col items-center gap-3 md:items-start">
          <Logo tone="light" />
          <p className="font-latin text-small italic">{footerCopy.tagline}</p>
          <address className="text-small not-italic">
            〒{shop.postalCode} {shop.address}
            <br />
            電話{' '}
            <a href={shop.telHref} className="underline underline-offset-4 hover:text-base">
              {shop.tel}
            </a>
          </address>
        </div>

        <a
          href={shop.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={openInstagram}
          aria-label={footerCopy.instagramAria}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-on-dark/40 transition-colors hover:bg-base hover:text-ink"
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
          </svg>
        </a>
      </div>

      <div className="mx-auto mt-8 max-w-container border-t border-on-dark/20 px-5 pt-6 md:px-8">
        <ul className="space-y-1 text-small">
          {footerCopy.notices.map((text) => (
            <li key={text}>{text}</li>
          ))}
        </ul>
        <p className="mt-4 text-small">
          © {year} {shop.name}
        </p>
      </div>
    </footer>
  )
}
