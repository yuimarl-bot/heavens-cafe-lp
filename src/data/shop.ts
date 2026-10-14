export const shop = {
  name: 'ヘブンズカフェ',
  nameEn: 'Heavens CAFE & BAR', // ロゴの表記に合わせた
  tagline: 'Craft Tortilla & Coastal Diner — Nago, Okinawa',
  postalCode: '905-0021',
  address: '沖縄県名護市東江5丁目8-20 宮城ビル101号',
  tel: '0980-59-4358',
  telHref: 'tel:+81980594358',
  lineUrl: '', // 【仮】未確定。空ならLINEボタンは非表示
  instagramUrl: 'https://www.instagram.com/heavens_7535/',
  seats: '15席',
  parking: 'なし',
  payment: '現金・クレジットカード',
} as const

export const instagramHandle = '@heavens_7535'

// Googleマップの店舗ページ（営業時間・臨時休業はここに表示される）。オーナーから受領した共有リンク。
// 空にすると、店名+住所の検索リンクに戻る。
const GOOGLE_MAPS_SHARE_URL = 'https://maps.app.goo.gl/etuALC38fWWz6pNd7'
// Googleマップの「共有」→「地図を埋め込む」の src の URL（店舗ページ付き）。
// 空にすると、住所検索の地図に戻る。
const GOOGLE_MAPS_EMBED_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1458.4819260055795!2d127.98356719452694!3d26.581336767190415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e4550069af8e23%3A0x7c73724d7343cd22!2zSGVhdmVuc--8iOODmOODluODs-OCuu-8iUNBRkUg77yGIEJBUg!5e1!3m2!1sja!2sjp!4v1791962844168!5m2!1sja!2sjp'

export const mapEmbedUrl =
  GOOGLE_MAPS_EMBED_SRC ||
  `https://www.google.com/maps?q=${encodeURIComponent(`${shop.postalCode} ${shop.address}`)}&z=17&output=embed`

export const mapsUrl =
  GOOGLE_MAPS_SHARE_URL ||
  'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(`${shop.name} ${shop.address}`)
