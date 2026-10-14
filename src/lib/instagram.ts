import type { MouseEvent } from 'react'
import { shop } from '../data/shop'

const USERNAME = 'heavens_7535' // shop.instagramUrl と同じアカウント名

const isAndroid = () => /Android/i.test(navigator.userAgent)
const isIOS = () =>
  /iPhone|iPad|iPod/i.test(navigator.userAgent) ||
  (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) // iPadOS

// スマホでは Instagram アプリで開く。アプリがなければ Web ページに切り替える。PC は通常のリンク動作
export function openInstagram(e: MouseEvent<HTMLAnchorElement>) {
  const web = shop.instagramUrl

  if (isAndroid()) {
    e.preventDefault()
    window.location.href =
      `intent://instagram.com/_u/${USERNAME}/#Intent;package=com.instagram.android;scheme=https;` +
      `S.browser_fallback_url=${encodeURIComponent(web)};end`
    return
  }

  if (isIOS()) {
    e.preventDefault()
    const start = Date.now()
    window.location.href = `instagram://user?username=${USERNAME}`
    // アプリが開けば画面が非表示になる。開かなかった場合だけ Web ページへ
    window.setTimeout(() => {
      if (!document.hidden && Date.now() - start < 2500) window.location.href = web
    }, 1200)
  }
}
