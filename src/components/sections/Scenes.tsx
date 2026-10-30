import { useState } from 'react'
import { scenesCopy, type SceneId } from '../../data/scenes'
import { shop } from '../../data/shop'
import SectionHeading from '../ui/SectionHeading'
import Tabs from '../ui/Tabs'
import { panelId, tabId } from '../ui/tabIds'

const PREFIX = 'scenes'

export default function Scenes() {
  const [active, setActive] = useState<SceneId>('lunch')

  return (
    <section id="scenes" className="bg-sand py-16 md:py-28">
      <div className="mx-auto max-w-container px-5 md:px-8">
        <SectionHeading eyebrow={scenesCopy.eyebrow} title={scenesCopy.heading} lead={scenesCopy.lead} />

        <Tabs
          idPrefix={PREFIX}
          ariaLabel={scenesCopy.tablistAria}
          value={active}
          onChange={(id) => setActive(id as SceneId)}
          className="mt-8"
          tabs={scenesCopy.scenes.map((s) => ({ id: s.id, label: s.label, underline: s.underline }))}
        />

        {/* 全パネルを描画し、選択中以外は hidden にする（aria-controls の参照先を常に存在させる） */}
        {scenesCopy.scenes.map((scene) => (
          <div
            key={scene.id}
            role="tabpanel"
            id={panelId(PREFIX, scene.id)}
            aria-labelledby={tabId(PREFIX, scene.id)}
            hidden={active !== scene.id}
            tabIndex={0}
            className="mt-8 rounded-md border border-line bg-base p-6 md:p-10"
          >
            <p className="font-latin text-sm font-semibold tracking-[0.12em] text-ink-muted">{scene.timeLabel}</p>
            <h3 className="mt-2 font-heading text-h3 font-bold">{scene.title}</h3>
            <p className="mt-4 max-w-prose text-body">{scene.body}</p>
            {scene.id === 'night' && <p className="mt-4 text-small text-ink-muted">{scenesCopy.alcoholNote}</p>}
          </div>
        ))}

        <p className="mt-6 text-small text-ink-muted">
          <a
            href={shop.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
          >
            {scenesCopy.cta}
          </a>
        </p>
      </div>
    </section>
  )
}
