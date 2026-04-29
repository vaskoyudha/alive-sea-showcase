import { aliveMediaTotals, aliveSections } from '../data/aliveMedia'
import { Icon } from './Icon'
import { SiteNav } from './SiteNav'

type EvidenceIndexPageProps = {
  logoSrc: string
  sourceDriveUrl: string
}

export function EvidenceIndexPage({ logoSrc, sourceDriveUrl }: EvidenceIndexPageProps) {
  return (
    <main className="site-shell evidence-index-shell">
      <SiteNav
        ariaLabel="Showcase collection navigation"
        className="detail-route-nav"
        logoSrc={logoSrc}
        sourceDriveUrl={sourceDriveUrl}
      />

      <section
        className="section-detail-hero evidence-index-hero"
        aria-labelledby="evidence-index-title"
        data-nav-expanded-zone
      >
        <div className="section-detail-copy">
          <p className="eyebrow">Complete ALIVE media showcase</p>
          <h1 id="evidence-index-title">ALIVE Showcase Collection</h1>
          <p>
            The project media is arranged into polished showcase sections so visitors can move from design intent to
            field testing, performance, vision AI, safety validation, and the immersive 360 view without losing context.
          </p>
        </div>
        <div className="section-detail-stats" aria-label="Complete media coverage">
          <article>
            <strong>{aliveMediaTotals.total}</strong>
            <span>Media assets</span>
            <p>Every project capture is represented.</p>
          </article>
          <article>
            <strong>{aliveMediaTotals.images}</strong>
            <span>Stills</span>
            <p>Presented full-frame for inspection.</p>
          </article>
          <article>
            <strong>{aliveMediaTotals.videos}</strong>
            <span>Motion</span>
            <p>Presented with native playback controls.</p>
          </article>
        </div>
      </section>

      <section className="evidence-page-grid-section" id="evidence-pages" aria-labelledby="evidence-pages-title">
        <div className="section-heading center-heading">
          <p className="eyebrow">Showcase sections</p>
          <h2 id="evidence-pages-title">Explore the project story</h2>
          <p>
            Each section frames the media as part of a public-facing product story: what was designed, what was tested,
            what was measured, and why it matters for the ALIVE flood-evacuation prototype.
          </p>
        </div>
        <div className="evidence-page-grid">
          {aliveSections.map((section) => (
            <article className="evidence-page-card" key={section.id}>
              <span>{section.eyebrow}</span>
              <h3>{section.title}</h3>
              <p>{section.summary}</p>
              <div className="evidence-page-card-counts" aria-label={`${section.title} counts`}>
                <strong>{section.mediaCount} showcase assets</strong>
                <small>{section.imageCount} stills · {section.videoCount} motion clips</small>
              </div>
              <a className="button button-ghost" href={section.route}>
                <Icon
                  name={
                    section.id === 'design'
                      ? 'layers'
                      : section.id === 'documentation-testing'
                        ? 'waves'
                        : section.id === 'object-detection'
                          ? 'target'
                          : section.id === 'functional-testing'
                            ? 'gauge'
                            : section.id === 'basic-safety'
                              ? 'shield'
                              : 'compass'
                  }
                />
                {section.ctaLabel}
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
