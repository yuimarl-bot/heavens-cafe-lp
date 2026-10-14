export type MenuCategory = 'signatures' | 'sides' | 'togo'

export type PriceOption = {
  label?: string // サイズ・個数など（例: '9inch'）
  price: number
}

export type MenuItem = {
  id: string
  category: MenuCategory
  name: string
  description: string
  prices?: PriceOption[] // 未設定の間は「価格調整中」と表示する
  priceNote?: string // 価格の代わりに出す説明（例: 種類で価格が違う）。あれば「価格調整中」は出さない
  pairing: string // 空文字の間は表示しない
  imageSrc?: string // 未配置・未指定ならプレースホルダー（幅1200px）
  imageSrcSmall?: string // 幅800px版。あれば srcset で出し分ける
  imageAlt?: string
  // 'ai' の画像には「※イメージ画像（AI生成）」を表示する。実物の写真なら 'photo'
  imageKind?: 'photo' | 'ai'
}

// 価格はオーナー確認済み（ブリトー・タコス・タコライス）。ナチョス・ドリンクは未確定。To-Go はセットではなく単品の組み合わせ
export const menuItems: MenuItem[] = [
  {
    id: 'sig-01',
    category: 'signatures',
    name: 'ブリトー',
    description: 'ハーブチキンやスーチカー（豚肉の塩漬け）など、具材の種類が豊富。手ごね生地で包みます。Bowlもあります。',
    prices: [
      { label: '9inch', price: 800 },
      { label: '12inch', price: 1400 },
      { label: 'Bowl（スモール）', price: 800 },
      { label: 'Bowl', price: 1400 },
    ],
    pairing: '',
    imageSrc: '/images/craft-burrito.jpg',
    imageSrcSmall: '/images/craft-burrito-800.jpg',
    imageAlt: '手ごねトルティーヤで包み、半分に切ったブリトー',
    imageKind: 'ai',
  },
  {
    id: 'sig-02',
    category: 'signatures',
    name: 'タコス',
    description: '油で揚げた生地で包む、食べやすいタコス。',
    prices: [{ label: '2ピース', price: 600 }],
    pairing: '',
    imageSrc: '/images/menu-tacos.jpg',
    imageSrcSmall: '/images/menu-tacos-800.jpg',
    imageAlt: '揚げた生地で包んだタコス',
    imageKind: 'ai',
  },
  {
    id: 'sig-03',
    category: 'signatures',
    name: 'タコライス',
    description: '沖縄ならではの一皿を、ヘブンズカフェ流に。',
    prices: [{ price: 600 }],
    pairing: '',
    imageSrc: '/images/menu-taco-rice.jpg',
    imageSrcSmall: '/images/menu-taco-rice-800.jpg',
    imageAlt: '沖縄名物タコライス',
    imageKind: 'ai',
  },
  {
    id: 'side-01',
    category: 'sides',
    name: 'ナチョス',
    description: '食感を楽しむ、シェアしやすいおつまみ。',
    pairing: '',
    imageSrc: '/images/menu-nachos.jpg',
    imageSrcSmall: '/images/menu-nachos-800.jpg',
    imageAlt: 'チーズたっぷりのナチョス',
  },
  {
    id: 'side-02',
    category: 'sides',
    name: 'ドリンク各種',
    description: '料理に合わせて選べるドリンク。ソフトドリンクとアルコールをご用意しています。',
    priceNote: 'ソフトドリンクとアルコールで価格が異なります。', // 【要確認】各ドリンクの価格
    pairing: '',
    imageSrc: '/images/menu-drinks.jpg',
    imageSrcSmall: '/images/menu-drinks-800.jpg',
    imageAlt: '冷えたビールとテキーラが並ぶテーブル',
    imageKind: 'ai',
  },
  {
    id: 'togo-01',
    category: 'togo',
    name: 'お好みの組み合わせで',
    description: 'ブリトー、タコス、タコライス、ナチョスなど、単品を組み合わせてテイクアウトできます。',
    priceNote: 'お代は、選んだ単品の価格になります。', // 【要確認】セット割引などがないか
    pairing: '',
    imageSrc: '/images/menu-togo.jpg',
    imageSrcSmall: '/images/menu-togo-800.jpg',
    imageAlt: 'ブリトー、ナチョス、ビールなど、単品を組み合わせたイメージ',
    imageKind: 'ai',
  },
]
