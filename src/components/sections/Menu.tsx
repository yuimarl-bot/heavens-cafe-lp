import { useState } from 'react'
import { menuCopy } from '../../data/copy'
import { menuItems, type MenuCategory } from '../../data/menu'
import { shop } from '../../data/shop'
import Button from '../ui/Button'
import MenuCard from '../ui/MenuCard'
import SectionHeading from '../ui/SectionHeading'
import Tabs from '../ui/Tabs'
import { panelId, tabId } from '../ui/tabIds'

const PREFIX = 'menu'

export default function Menu() {
  const [active, setActive] = useState<MenuCategory>('signatures')

  return (
    <section id="menu" className="bg-base py-16 md:py-28">
      <div className="mx-auto max-w-container px-5 md:px-8">
        <SectionHeading eyebrow={menuCopy.eyebrow} title={menuCopy.heading} lead={menuCopy.lead} />

        <ul className="mt-8 space-y-1 rounded-md border border-line bg-sand p-5 text-body">
          {menuCopy.announcements.map((text) => (
            <li key={text}>{text}</li>
          ))}
        </ul>

        <Tabs
          idPrefix={PREFIX}
          ariaLabel={menuCopy.tablistAria}
          value={active}
          onChange={(id) => setActive(id as MenuCategory)}
          className="mt-8"
          tabs={menuCopy.categories.map((c) => ({ id: c.id, label: c.label }))}
        />

        {/* 全パネルを描画し、選択中以外は hidden にする（aria-controls の参照先を常に存在させる） */}
        {menuCopy.categories.map((category) => (
          <div
            key={category.id}
            role="tabpanel"
            id={panelId(PREFIX, category.id)}
            aria-labelledby={tabId(PREFIX, category.id)}
            hidden={active !== category.id}
            tabIndex={0}
            className="mt-6"
          >
            <p className="text-body text-ink-muted">{category.desc}</p>
            <ul className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {menuItems
                .filter((item) => item.category === category.id)
                .map((item) => (
                  <MenuCard key={item.id} item={item} />
                ))}
            </ul>
            {category.id === 'sides' && <p className="mt-6 text-small text-ink-muted">{menuCopy.alcoholNote}</p>}
          </div>
        ))}

        <div className="mt-10 rounded-md border border-line bg-sand p-5">
          <h3 className="font-heading text-h3 font-bold">{menuCopy.options.heading}</h3>
          <p className="mt-2 text-body">
            {menuCopy.options.choosable.join('、')}を{menuCopy.options.chooseLabel}。
          </p>
          <p className="mt-1 text-body">{menuCopy.options.toppings}</p>
        </div>

        <div className="mt-6 space-y-1 text-small text-ink-muted">
          <p>{menuCopy.priceNote}</p>
          <p>{menuCopy.allergyNote}</p>
        </div>

        <Button href={shop.telHref} className="mt-8 w-full md:w-auto">
          {menuCopy.cta}
          <span className="hidden whitespace-nowrap md:inline">（{shop.tel}）</span>
        </Button>
      </div>
    </section>
  )
}
