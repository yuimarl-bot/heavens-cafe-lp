import { hours } from '../data/hours'

const DAY_NAMES = ['日', '月', '火', '水', '木', '金', '土']

// hours.ts の値から、基本情報の表示用テキストを作る（値の重複管理を避ける）
export function summarizeHours() {
  const groups = new Map<string, number[]>() // '11:30〜22:00' -> [曜日...]
  const closed: number[] = []
  for (let day = 0; day < 7; day++) {
    const entry = hours.weekly[day]
    if (!entry) {
      closed.push(day)
      continue
    }
    const key = `${entry[0]}〜${entry[1]}`
    groups.set(key, [...(groups.get(key) ?? []), day])
  }

  // 全営業日が同じ時間なら、時間だけを表示する。違う場合は曜日つきで並べる
  const hoursLabel =
    groups.size === 1
      ? [...groups.keys()][0]
      : [...groups].map(([time, days]) => `${days.map((d) => DAY_NAMES[d]).join('・')} ${time}`).join(' / ')

  const holidayLabel = closed.length ? `${closed.map((d) => DAY_NAMES[d]).join('・')}曜日` : 'なし'
  // 営業時間が日によって変動する場合は「通常」を付け、変動する旨を添える
  return { hoursLabel: hours.variable ? `通常 ${hoursLabel}` : hoursLabel, holidayLabel }
}
