import {
  aliveMediaTotals,
  getGroupedMediaBySection,
  type AliveMediaItem,
  type AliveSection,
} from '../data/aliveMedia'
import { Icon } from './Icon'
import { SiteNav } from './SiteNav'

type SectionDetailPageProps = {
  section: AliveSection
  logoSrc: string
  sourceDriveUrl: string
}

function getMediaLabel(item: AliveMediaItem, section: AliveSection, index: number) {
  return `${section.title} ${item.type === 'video' ? 'motion' : 'visual'} showcase ${index + 1}`
}

function getShowcaseTitle(item: AliveMediaItem, index: number) {
  const mediaKind = item.type === 'video' ? 'Motion study' : 'Visual study'
  return `${item.subsection} · ${mediaKind} ${String(index + 1).padStart(2, '0')}`
}

function getShowcaseCaption(item: AliveMediaItem, section: AliveSection) {
  const mediaKind = item.type === 'video' ? 'motion sequence' : 'visual capture'
  return `Curated ${mediaKind} from ${item.subsection}, presented as part of the ${section.title.toLowerCase()} narrative.`
}

function renderMedia(item: AliveMediaItem, index: number, section: AliveSection) {
  return (
    <figure className={`section-media-card section-media-card-${item.type}`} key={item.id}>
      <div className="section-media-frame">
        {item.type === 'video' ? (
          item.driveEmbedUrl ? (
            <iframe
              src={item.driveEmbedUrl}
              title={getMediaLabel(item, section, index)}
              allow="autoplay; fullscreen"
              allowFullScreen
              loading="lazy"
            />
          ) : (
            <video controls preload="metadata" aria-label={getMediaLabel(item, section, index)}>
              <source src={item.src} type="video/mp4" />
              <a href={item.src}>Open showcase media</a>
            </video>
          )
        ) : (
          <img src={item.src} alt={item.alt} loading="lazy" />
        )}
      </div>
      <figcaption>
        <strong>{getShowcaseTitle(item, index)}</strong>
        <span>{getShowcaseCaption(item, section)}</span>
      </figcaption>
    </figure>
  )
}

function mediaNoun(count: number) {
  return count === 1 ? 'item' : 'items'
}

function slugId(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
}

export function SectionDetailPage({ section, logoSrc, sourceDriveUrl }: SectionDetailPageProps) {
  const groupedMedia = getGroupedMediaBySection(section.id)
  const groups = Object.entries(groupedMedia)

  return (
    <main className="site-shell section-detail-shell">
      <SiteNav
        ariaLabel={`${section.title} navigation`}
        className="detail-route-nav"
        logoSrc={logoSrc}
        sourceDriveUrl={sourceDriveUrl}
      />

      <section className="section-detail-hero" aria-labelledby="section-detail-title" data-nav-expanded-zone>
        <div className="section-detail-copy">
          <p className="eyebrow">{section.eyebrow}</p>
          <h1 id="section-detail-title">{section.title}</h1>
          <p>{section.summary}</p>
          <div className="section-actions">
            <a className="button button-primary" href="#section-media">
              <Icon name="image" />
              View showcase media
            </a>
            <a className="button button-ghost" href="/sections/evidence">
              <Icon name="archive" />
              All showcase pages
            </a>
          </div>
        </div>
        <div className="section-detail-stats" aria-label={`${section.title} media coverage`}>
          <article>
            <strong>{section.mediaCount}</strong>
            <span>Showcase {mediaNoun(section.mediaCount)}</span>
            <p>Presented from this project section.</p>
          </article>
          <article>
            <strong>{section.imageCount}</strong>
            <span>Stills</span>
            <p>Presented full-frame for visual review.</p>
          </article>
          <article>
            <strong>{section.videoCount}</strong>
            <span>Motion</span>
            <p>Presented with direct playback controls.</p>
          </article>
        </div>
      </section>

      <section className="detail-explainer-grid" aria-label={`${section.title} explanation`}>
        <article>
          <span>Showcase focus</span>
          <p>{section.proof}</p>
        </article>
        <article>
          <span>What to look for</span>
          <p>{section.interpretation}</p>
        </article>
        <article>
          <span>Media coverage</span>
          <p>
            This page is part of a complete {aliveMediaTotals.total}-asset showcase collection spanning design,
            field testing, vision AI, performance, safety validation, and immersive 360 presentation.
          </p>
        </article>
      </section>

      <section className="detail-media-section" id="section-media" aria-labelledby="section-media-title">
        <div className="section-heading center-heading">
          <p className="eyebrow">Complete showcase gallery</p>
          <h2 id="section-media-title">{section.title} gallery</h2>
          <p>
            Every visual below is curated into the ALIVE presentation so visitors can inspect the project story without
            breaking the professional showcase flow.
          </p>
        </div>

        <div className="media-group-stack">
          {groups.map(([subsection, items]) => {
            const groupId = `media-group-${slugId(subsection)}`

            return (
              <section className="media-group" key={subsection} aria-labelledby={groupId}>
                <div className="media-group-heading">
                  <div>
                    <span>{items.length} {mediaNoun(items.length)}</span>
                    <h3 id={groupId}>{subsection}</h3>
                  </div>
                  <p>
                    This group keeps the original session context intact so the section feels like a coherent project
                    presentation rather than an internal archive.
                  </p>
                </div>
                <div className="section-media-grid">{items.map((item, index) => renderMedia(item, index, section))}</div>
              </section>
            )
          })}
        </div>
      </section>
    </main>
  )
}
