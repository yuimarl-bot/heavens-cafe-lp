import { accessCopy } from '../../data/copy'
import { hours } from '../../data/hours'
import { mapsUrl, shop } from '../../data/shop'
import { summarizeHours } from '../../lib/hoursText'
import { openInstagram } from '../../lib/instagram'

const { labels, hoursText, holidayText, holidayVariableNote, variableNote, variableLinks } = accessCopy.table
const linkClass = 'text-terracotta-dark underline underline-offset-4 hover:text-terracotta'
const { hoursLabel, holidayLabel } = summarizeHours()

// 営業時間が未確定（hours.confirmed が false）の間は、数字を出さず Instagram への案内にする
const rows: { label: string; value: React.ReactNode }[] = [
  { label: labels.name, value: shop.name },
  { label: labels.address, value: `〒${shop.postalCode} ${shop.address}` },
  {
    label: labels.tel,
    value: (
      <a href={shop.telHref} className="text-terracotta underline underline-offset-4 hover:text-terracotta-dark">
        {shop.tel}
      </a>
    ),
  },
  {
    label: labels.hours,
    value: !hours.confirmed ? (
      hoursText
    ) : hours.variable ? (
      <>
        {hoursLabel}
        <br />
        {variableNote}
        <a
          href={shop.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={openInstagram}
          className={linkClass}
        >
          {variableLinks.instagram}
        </a>
        または
        <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
          {variableLinks.google}
        </a>
        {variableLinks.tail}
      </>
    ) : (
      hoursLabel
    ),
  },
  {
    label: labels.holiday,
    value: !hours.confirmed ? holidayText : hours.variable ? `${holidayLabel}${holidayVariableNote}` : holidayLabel,
  },
  { label: labels.payment, value: shop.payment },
  { label: labels.seats, value: shop.seats },
  { label: labels.parking, value: shop.parking },
]

export default function InfoTable() {
  return (
    <dl className="divide-y divide-line rounded-md border border-line bg-white/60">
      {rows.map((row) => (
        <div key={row.label} className="grid grid-cols-[6rem_1fr] gap-3 px-4 py-3 md:grid-cols-[7rem_1fr]">
          <dt className="font-bold">{row.label}</dt>
          <dd className="text-ink-muted">{row.value}</dd>
        </div>
      ))}
    </dl>
  )
}
