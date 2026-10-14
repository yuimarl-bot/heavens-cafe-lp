import { accessCopy } from '../../data/copy'
import { instagramHandle, mapsUrl, shop } from '../../data/shop'
import { openInstagram } from '../../lib/instagram'
import BeachRoute from '../ui/BeachRoute'
import Button from '../ui/Button'
import InfoTable from '../ui/InfoTable'
import MapEmbed from '../ui/MapEmbed'
import SectionHeading from '../ui/SectionHeading'

export default function Access() {
  return (
    <section id="access" className="bg-sand py-16 md:py-28">
      <div className="mx-auto max-w-container px-5 md:px-8">
        <SectionHeading eyebrow={accessCopy.eyebrow} title={accessCopy.heading} lead={accessCopy.lead} />

        <div className="mt-10 grid gap-10 lg:grid-cols-[5fr_7fr] lg:gap-12">
          <div className="space-y-8">
            <div className="rounded-md border border-line bg-base p-5">
              <h3 className="font-heading text-h3 font-bold">{accessCopy.schedule.heading}</h3>
              <p className="mt-2 text-body text-ink-muted">{accessCopy.schedule.body}</p>
              <div className="mt-4 flex flex-col gap-3 md:flex-row">
                <Button
                  href={shop.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={openInstagram}
                  className="w-full md:w-auto"
                >
                  {accessCopy.schedule.cta}
                  <span className="sr-only">（{instagramHandle}を開きます）</span>
                </Button>
                <Button
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  className="w-full md:w-auto"
                >
                  {accessCopy.schedule.ctaGoogle}
                  <span className="sr-only">（新しいタブで開きます）</span>
                </Button>
              </div>
            </div>

            <div>
              <h3 className="mb-3 font-heading text-h3 font-bold">{accessCopy.table.heading}</h3>
              <InfoTable />
            </div>
          </div>

          <div className="space-y-8">
            <MapEmbed />
            <BeachRoute />
          </div>
        </div>
      </div>
    </section>
  )
}
