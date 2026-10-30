// 3 Scenes の文面。PRD 5.4 の案をもとにした【仮】。
// 営業時間は日によって変わるため、時間帯の目安は「時間帯ラベル」にとどめ、具体的な時刻は載せない。
export type SceneId = 'lunch' | 'sunset' | 'night'

export const scenesCopy = {
  eyebrow: '3 SCENES OF THE DAY',
  heading: '一日のどこでも、ちょうどいい。',
  lead: 'ランチ、夕暮れ、夜。時間帯ごとに違う楽しみ方ができます。',
  tablistAria: '時間帯ごとの過ごし方を切り替える',
  scenes: [
    {
      id: 'lunch' as SceneId,
      label: 'LUNCH',
      timeLabel: '昼',
      underline: 'border-terracotta',
      title: '手軽で贅沢な、ワンハンド。',
      body: '外の窓口からサッと注文して、片手で食べられるブリトーを。ボリュームも満足感も、しっかり。',
    },
    {
      id: 'sunset' as SceneId,
      label: 'SUNSET',
      timeLabel: '夕方',
      underline: 'border-sunset',
      title: '徒歩1分の海辺へ。',
      body: '名護湾の夕日を眺めながら、できたてをその場で。テイクアウトして、そのまま散歩にも。',
    },
    {
      id: 'night' as SceneId,
      label: 'NIGHT',
      timeLabel: '夜',
      underline: 'border-ocean',
      title: '冷えたビールと、香ばしい生地。',
      body: '夜はダイナー＆バーとして。ゆっくり話しながら、お酒と一緒にどうぞ。',
    },
  ],
  alcoholNote: 'お酒は20歳になってから。飲酒運転は法律で禁止されています。',
  cta: '時間帯ごとの営業は、Instagramでご確認ください。',
}
