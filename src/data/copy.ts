// 文面は copywriter の D2 案。【仮】は確定後に差し替える
export const headerCopy = {
  nav: [
    { label: 'Craft', href: '#craft' },
    { label: '3 Scenes', href: '#scenes' },
    { label: 'Menu', href: '#menu' },
    { label: 'Access', href: '#access' },
  ],
  ctaLabel: 'テイクアウト注文',
  ctaAria: 'テイクアウト注文（電話 0980-59-4358）', // 表示文言を先頭に含める（WCAG 2.5.3）
  lineLabel: 'LINEで注文',
  menuOpenAria: 'メニューを開く',
  menuCloseAria: 'メニューを閉じる',
}

export const heroCopy = {
  eyebrow: '沖縄・名護 名護湾まで徒歩1分',
  title: '手ごね生地の香ばしさと、名護の風を巻き込んで。',
  subtitle: 'Craft Tortilla & Coastal Diner — Nago, Okinawa',
  lead: '自家製の手ごねトルティーヤで包むブリトー。タコス、タコライス、ナチョスも。ランチにも、海辺のテイクアウトにも、夜の一杯にも。',
  primaryCta: 'メニューを見る',
  secondaryCta: '電話でテイクアウト注文',
  note: '電話での事前注文だと、受け取りがスムーズです。',
  imageAlt: '名護湾の青い海と砂浜',
  imageSrc: '/images/hero-nago-bay.jpg',
}

// 「毎朝仕込む」は事実と異なるため使わない。確認済み: 一枚ずつ注文ごとに焼く / 米粉をブレンドした独自配合
export const craftCopy = {
  eyebrow: 'THE CRAFT',
  heading: 'すべては、一枚の生地から。',
  lead: '具材を包むトルティーヤこそ、この店の主役です。生地づくりから自分たちの手で行っています。',
  points: [
    {
      title: '自家製の手ごね生地',
      body: '米粉をブレンドした独自配合の生地を、手ごねで仕込んでいます。包んだ瞬間から、生地そのものの味わいを感じてください。',
    },
    {
      title: '鉄板で一枚ずつ、香ばしく',
      body: '注文ごとに鉄板で焼き上げます。焼き目の香ばしさが、具材の味を引き立てます。',
    },
    {
      title: '冷めても旨い。',
      body: '冷めても食べやすい生地だから、持ち出しにぴったり。海辺でも、ホテルの部屋でも。',
    },
  ],
  imageSrc: '/images/craft-burrito.jpg',
  imageSrcSmall: '/images/craft-burrito-800.jpg',
  imageAlt: '手ごねトルティーヤで包み、半分に切ったブリトー',
  imageKind: 'photo' as 'ai' | 'photo', // 'ai' の間は「イメージ画像」のキャプションを表示する
}

// 価格はブリトー・タコス・タコライスのみ確定（税込）。ナチョス・ドリンクは未確定。menu.ts と合わせて更新する
export const menuCopy = {
  eyebrow: 'MENU',
  heading: 'お気に入りを、選ぶ楽しさ。',
  lead: 'ブリトー、タコス、タコライス、ナチョスなど。',
  announcements: [
    '外窓口からも、ご注文いただけます。',
    '事前に電話でご注文いただくと、受け取りがスムーズです。',
  ],
  tablistAria: 'メニューのカテゴリを切り替える',
  categories: [
    { id: 'signatures', label: 'Signatures', desc: '手ごねトルティーヤのブリトーをはじめ、店の看板メニュー。' },
    { id: 'sides', label: 'Sides & Drinks', desc: '軽くつまめるサイドと、料理に合うドリンク。' },
    { id: 'togo', label: 'To-Go', desc: 'テイクアウトは、セットメニューではなく、単品の組み合わせでご注文いただけます。' },
  ],
  pricePending: '価格調整中',
  pairingLabel: 'おすすめペアリング',
  priceNote: '価格はすべて税込です。内容・価格は変更になる場合があります。',
  options: {
    heading: 'お好みに合わせて',
    choosable: ['ターメリックライス', 'ドレッシング', 'ソース各種', '辛さ'],
    chooseLabel: 'お選びいただけます',
    toppings: 'トッピングも各種ご用意しています。',
  },
  allergyNote: 'アレルギーをお持ちの方は、ご注文前にスタッフへお申し出ください。', // 【要確認】店の対応方針
  alcoholNote: 'お酒は20歳になってから。飲酒運転は法律で禁止されています。',
  aiCaption: '※イメージ画像',
  cta: '電話でテイクアウトを注文する',
}

// 営業時間・定休日は hours.ts が元データ。hoursText / holidayText は hours.confirmed が false の間だけ使う
// 【要確認】駐車場: 近隣の駐車場の案内は確認が取れてから追記する / 徒歩1分は実測を確認する
export const accessCopy = {
  eyebrow: 'INFORMATION & ACCESS',
  heading: '名護湾まで、歩いて1分。',
  lead: '食べたあとは海へ。テイクアウトして、そのまま夕日を見に行けます。',
  schedule: {
    heading: '営業スケジュール',
    body: '営業時間や休みは日によって変わります。最新の情報は、InstagramまたはGoogleマップでご確認ください。',
    cta: 'Instagramで最新情報を見る',
    ctaGoogle: 'Googleマップで営業時間を見る',
  },
  table: {
    heading: '店舗情報',
    hoursText: '営業時間はInstagramでご確認ください',
    holidayText: '不定休（Instagramでご確認ください）',
    holidayVariableNote: '（臨時休業の場合があります）',
    variableNote: '営業時間は日によって変わります。',
    variableLinks: { instagram: 'Instagram', google: 'Googleマップ', tail: 'でご確認ください' },
    labels: {
      name: '店名',
      address: '住所',
      tel: '電話',
      hours: '営業時間',
      holiday: '定休日',
      payment: '支払い方法',
      seats: '席数',
      parking: '駐車場',
    },
  },
  map: {
    title: 'ヘブンズカフェの地図',
    cta: 'Googleマップで開く',
  },
  route: {
    ariaLabel: '店から名護湾ビーチまで徒歩1分のイメージ図',
    shop: 'ヘブンズカフェ',
    beach: '名護湾ビーチ',
    time: '徒歩1分',
    note: '※位置関係を示すイメージ図です。実際の道のりとは異なります。',
  },
}

// 【要確認】注意書きの最終文面は、店舗の方針に合わせて確定する
export const footerCopy = {
  tagline: 'Craft Tortilla & Coastal Diner — Nago, Okinawa',
  instagramAria: 'ヘブンズカフェのInstagramを開く',
  notices: [
    'お酒は20歳になってから。飲酒運転は法律で禁止されています。',
    'アレルギーをお持ちの方は、ご注文前にスタッフへお申し出ください。',
    '「イメージ画像」と表記した写真は、実際の商品とは異なる場合があります。',
  ],
}

export const statusCopy = {
  unconfirmed: '営業時間はInstagramでご確認ください',
  open: (close: string) => `営業中 〜${close}まで`,
  closingSoon: (close: string) => `まもなく終了 ${close}まで`,
  beforeOpen: (open: string) => `準備中 ${open}から営業`,
  closedToday: '本日の営業は終了しました',
  holiday: '本日は定休日です',
  temporaryHoliday: '本日は臨時休業です',
}
