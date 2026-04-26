import './App.css'

const driveUrl = 'https://drive.google.com/drive/folders/1vshOZCRxXkgY5Yj5CDcST13iDoHaBT_-'
const asset = (fileName: string) => `/alive/${fileName}`

const evidenceMetrics = [
  {
    value: '97.6%',
    label: 'best mAP50',
    detail: 'YOLOv11n object detection peak at epoch 86',
  },
  {
    value: '60.8%',
    label: 'mAP50-95',
    detail: 'best measured precision across stricter IoU thresholds',
  },
  {
    value: '3',
    label: 'model variants',
    detail: 'YOLOv11n, YOLOv8n 640, and YOLOv8n 240×120 compared',
  },
  {
    value: '5+',
    label: 'field test sets',
    detail: 'prototype, safety, speed, responsiveness, and vision evidence',
  },
]

const systemFeatures = [
  {
    kicker: 'Detect',
    title: 'Computer vision first response',
    body: 'A webcam and Raspberry Pi pipeline identify people or objects in flood scenarios so the boat can support faster situational awareness.',
  },
  {
    kicker: 'Navigate',
    title: 'Twin-thruster surface control',
    body: 'A high-visibility catamaran body keeps the rescue platform stable while the thrusters handle forward movement, turns, and return paths.',
  },
  {
    kicker: 'Deliver',
    title: 'Safer reach before rescuers arrive',
    body: 'ALIVE is designed as a compact unmanned support craft that can move toward people in water while reducing direct rescuer exposure.',
  },
]

const galleryImages = [
  {
    src: 'dock-prototype.webp',
    alt: 'ALIVE prototype on a wooden dock beside water',
    caption: 'Prototype assembled and photographed in field conditions.',
  },
  {
    src: 'water-drone.webp',
    alt: 'Aerial view of the orange ALIVE prototype floating on water',
    caption: 'Drone-perspective water deployment evidence.',
  },
  {
    src: 'sensor-closeup.webp',
    alt: 'Close-up of the ALIVE camera and sensor hardware',
    caption: 'Camera and electronics module for object detection.',
  },
]

function App() {
  return (
    <main className="site-shell">
      <nav className="topbar" aria-label="Primary navigation">
        <a className="brand" href="#hero" aria-label="ALIVE home">
          <img src={asset('logo.png')} alt="ALIVE logo" />
        </a>
        <div className="nav-links">
          <a href="#system">System</a>
          <a href="#testing">Testing</a>
          <a href="#vision">Vision AI</a>
          <a href="#impact">Impact</a>
        </div>
        <a className="nav-cta" href={driveUrl} target="_blank" rel="noreferrer">
          Source Drive
        </a>
      </nav>

      <section className="hero-section" id="hero">
        <div className="hero-copy">
          <p className="eyebrow">Student innovation · flood evacuation · intelligent surface craft</p>
          <h1>ALIVE: Advanced Lifeboat for Flood Evacuation</h1>
          <p className="hero-lede">
            A professional showcase for an object-detection lifeboat prototype built to make
            flood response faster, safer, and more coordinated from the first minutes of an emergency.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#testing">
              See validation
            </a>
            <a className="button button-ghost" href="#system">
              How it works
            </a>
          </div>
          <div className="mission-tagline" aria-label="Project tagline">
            Faster Evacuation, More Lives Safely
          </div>
        </div>

        <div className="hero-visual" aria-label="ALIVE product render over a sea-inspired interface">
          <div className="sonar-card">
            <div className="sonar-grid" aria-hidden="true" />
            <img
              className="hero-product"
              src={asset('hero-render.webp')}
              alt="Orange ALIVE smart lifeboat render with twin pontoons"
            />
            <div className="status-chip chip-top">Raspberry Pi + Webcam</div>
            <div className="status-chip chip-bottom">Twin-thruster rescue platform</div>
          </div>
        </div>
      </section>

      <section className="evidence-strip" aria-label="Project evidence metrics" data-testid="evidence-metrics">
        {evidenceMetrics.map((metric) => (
          <article className="metric-card" key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
            <p>{metric.detail}</p>
          </article>
        ))}
      </section>

      <section className="section split-section" id="system">
        <div className="section-copy">
          <p className="eyebrow">System architecture</p>
          <h2>How ALIVE Works</h2>
          <p>
            ALIVE combines buoyant mechanical design, visible rescue-orange hardware, onboard electronics,
            remote control, and object detection into one compact water-response prototype.
          </p>
        </div>
        <div className="feature-stack">
          {systemFeatures.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <span>{feature.kicker}</span>
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="design-board" aria-label="ALIVE design views">
        <div className="board-header">
          <p className="eyebrow">Industrial design language</p>
          <h2>Sea-ready shape, rescue-grade visibility.</h2>
        </div>
        <div className="render-grid">
          <figure className="render-card large-render">
            <img src={asset('render-top.webp')} alt="Top view render of ALIVE lifeboat design" />
            <figcaption>Top deck layout for buoyancy, payload, and sensor placement.</figcaption>
          </figure>
          <figure className="render-card">
            <img src={asset('render-front.webp')} alt="Front view render of ALIVE lifeboat" />
            <figcaption>Front-facing rescue profile with wide pontoon stability.</figcaption>
          </figure>
          <figure className="render-card">
            <img src={asset('render-side.webp')} alt="Side view render of ALIVE lifeboat" />
            <figcaption>Low-slung side profile for smooth water movement.</figcaption>
          </figure>
        </div>
      </section>

      <section className="section testing-section" id="testing">
        <div className="section-heading center-heading">
          <p className="eyebrow">Prototype proof</p>
          <h2>Validated in the Water</h2>
          <p>
            The Drive evidence includes design renders, prototype assembly, water deployment, rescue simulation,
            safety checks, speed and responsiveness testing, and object-detection results.
          </p>
        </div>
        <div className="gallery-grid">
          {galleryImages.map((item) => (
            <figure className="gallery-card" key={item.src}>
              <img src={asset(item.src)} alt={item.alt} />
              <figcaption>{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section vision-section" id="vision">
        <div className="vision-copy">
          <p className="eyebrow">Detection model evidence</p>
          <h2>Object Detection Results</h2>
          <p>
            Training artifacts from the project compare YOLO model variants. The strongest recorded checkpoint
            reached 97.6% mAP50, supporting ALIVE’s core idea: smart vision can help a small rescue craft
            understand the flood environment around it.
          </p>
          <div className="model-list" aria-label="Compared object detection models">
            <span>YOLOv11n</span>
            <span>YOLOv8n 640×640</span>
            <span>YOLOv8n 240×120</span>
          </div>
        </div>
        <div className="result-panels">
          <img src={asset('yolov11-results.webp')} alt="YOLOv11n training results chart" />
          <img src={asset('yolov8-results.webp')} alt="YOLOv8n training results chart" />
        </div>
      </section>

      <section className="section impact-section" id="impact">
        <div className="poster-card">
          <img src={asset('poster.webp')} alt="ALIVE competition poster with research methodology and findings" />
        </div>
        <div className="impact-copy">
          <p className="eyebrow">Human impact</p>
          <h2>Aligned with SDG 3 and SDG 11</h2>
          <p>
            ALIVE supports Good Health and Well-Being by targeting faster emergency response, and Sustainable
            Cities and Communities by proposing a practical flood-evacuation technology for disaster-prone areas.
          </p>
          <div className="impact-cards">
            <article>
              <span>SDG 3</span>
              <strong>Health and safety</strong>
              <p>Reduce drowning risk by extending rescue reach during flood events.</p>
            </article>
            <article>
              <span>SDG 11</span>
              <strong>Resilient communities</strong>
              <p>Improve readiness for urban and community-scale flood emergencies.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="team-section" aria-label="ALIVE team and prototype">
        <img src={asset('team.webp')} alt="ALIVE student team with prototype beside the water" />
        <div>
          <p className="eyebrow">Built by young innovators</p>
          <h2>From classroom research to water-tested prototype.</h2>
          <p>
            The project was developed by students from Al Falah Darussalam Junior High School, Indonesia,
            and prepared for the International Student Project Excellence Award 2026.
          </p>
        </div>
      </section>
    </main>
  )
}

export default App
