import { useRef, type KeyboardEvent } from 'react'
import { panelId, tabId } from './tabIds'

export type TabItem = {
  id: string
  label: string
  underline?: string // 選択中の下線の色クラス（例: 'border-sunset'）
}

type Props = {
  idPrefix: string
  tabs: TabItem[]
  value: string
  onChange: (id: string) => void
  ariaLabel: string
  className?: string
}

// ARIA tablist パターン。左右矢印・Home・End で移動、選択中のみ tabIndex=0
export default function Tabs({ idPrefix, tabs, value, onChange, ariaLabel, className = '' }: Props) {
  const refs = useRef<Record<string, HTMLButtonElement | null>>({})

  const move = (index: number) => {
    const next = tabs[(index + tabs.length) % tabs.length]
    onChange(next.id)
    refs.current[next.id]?.focus()
  }

  const onKeyDown = (e: KeyboardEvent, index: number) => {
    if (e.key === 'ArrowRight') move(index + 1)
    else if (e.key === 'ArrowLeft') move(index - 1)
    else if (e.key === 'Home') move(0)
    else if (e.key === 'End') move(tabs.length - 1)
    else return
    e.preventDefault()
  }

  return (
    <div role="tablist" aria-label={ariaLabel} className={`flex ${className}`}>
      {tabs.map((tab, i) => {
        const selected = tab.id === value
        return (
          <button
            key={tab.id}
            ref={(el) => {
              refs.current[tab.id] = el
            }}
            id={tabId(idPrefix, tab.id)}
            role="tab"
            type="button"
            aria-selected={selected}
            aria-controls={panelId(idPrefix, tab.id)}
            tabIndex={selected ? 0 : -1}
            onClick={() => onChange(tab.id)}
            onKeyDown={(e) => onKeyDown(e, i)}
            className={`min-h-12 flex-1 border-b-[3px] px-3 font-latin tracking-[0.08em] transition-colors ${
              selected
                ? `font-bold text-ink ${tab.underline ?? 'border-terracotta'}`
                : 'border-line text-ink-muted hover:text-ink'
            }`}
          >
            {tab.label}
          </button>
        )
      })}
    </div>
  )
}
