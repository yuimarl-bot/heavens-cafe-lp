import { accessCopy } from '../../data/copy'
import { mapEmbedUrl, mapsUrl } from '../../data/shop'
import Button from './Button'

// 画面の近くまで来てから読み込む（loading="lazy"）。外部通信を最小限にする
export default function MapEmbed() {
  return (
    <div>
      <iframe
        title={accessCopy.map.title}
        src={mapEmbedUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-[280px] w-full rounded-lg border border-line md:h-[420px]"
      />
      <Button
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        variant="secondary"
        className="mt-4 w-full md:w-auto"
      >
        {accessCopy.map.cta}
        <span className="sr-only">（新しいタブで開きます）</span>
      </Button>
    </div>
  )
}
