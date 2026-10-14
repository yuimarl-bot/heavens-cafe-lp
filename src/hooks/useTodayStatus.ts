import { useEffect, useState } from 'react'
import { hours } from '../data/hours'
import { statusCopy } from '../data/copy'

export type TodayStatus = {
  kind: 'unconfirmed' | 'open' | 'closing-soon' | 'before-open' | 'closed' | 'holiday'
  label: string
}

const toMinutes = (hhmm: string) => {
  const [h, m] = hhmm.split(':').map(Number)
  return h * 60 + m
}

const dateKey = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`

export function getTodayStatus(now: Date): TodayStatus {
  // 営業時間が未確定、または日によって変動する間は、自動判定せず Instagram での確認を案内する
  if (!hours.confirmed || hours.variable) return { kind: 'unconfirmed', label: statusCopy.unconfirmed }

  const key = dateKey(now)
  const isException = key in hours.exceptions
  const today = isException ? hours.exceptions[key] : hours.weekly[now.getDay()]
  if (!today) {
    return {
      kind: 'holiday',
      label: isException ? statusCopy.temporaryHoliday : statusCopy.holiday,
    }
  }

  const [open, close] = today
  const nowMin = now.getHours() * 60 + now.getMinutes()
  if (nowMin < toMinutes(open)) return { kind: 'before-open', label: statusCopy.beforeOpen(open) }
  if (nowMin >= toMinutes(close)) return { kind: 'closed', label: statusCopy.closedToday }
  if (toMinutes(close) - nowMin <= 30) {
    return { kind: 'closing-soon', label: statusCopy.closingSoon(close) }
  }
  return { kind: 'open', label: statusCopy.open(close) }
}

// 1分ごとに再判定する
export function useTodayStatus(): TodayStatus {
  const [status, setStatus] = useState(() => getTodayStatus(new Date()))
  useEffect(() => {
    // 自動判定しない間（未確定・変動あり）は、再判定の必要がない
    if (!hours.confirmed || hours.variable) return
    const id = window.setInterval(() => setStatus(getTodayStatus(new Date())), 60_000)
    return () => window.clearInterval(id)
  }, [])
  return status
}
