import { useEffect, useRef, useState } from 'react'
import { Viewer } from '@photo-sphere-viewer/core'
import '@photo-sphere-viewer/core/index.css'
import './App.css'

const driveUrl = 'https://drive.google.com/drive/folders/1vshOZCRxXkgY5Yj5CDcST13iDoHaBT_-'
const panoramaDriveUrl = 'https://drive.google.com/drive/folders/1Lmq-Mm2LeH1wKD7c_UPMNCVp0P4N8Fo_'
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

const panoramaScenes = [
  {
    src: '360/scene-01.webp',
    thumb: '360/thumb-01.webp',
    label: 'Scene 01',
    detail: 'Waterfront prototype panorama',
    alt: 'Interactive 360 degree view of the ALIVE prototype from the waterfront panorama folder',
  },
  {
    src: '360/scene-02.webp',
    thumb: '360/thumb-02.webp',
    label: 'Scene 02',
    detail: 'Starboard angle and dock context',
    alt: 'Interactive 360 degree view of ALIVE from a starboard-side panorama angle',
  },
  {
    src: '360/scene-03.webp',
    thumb: '360/thumb-03.webp',
    label: 'Scene 03',
    detail: 'Prototype scale beside water',
    alt: 'Interactive 360 degree view showing the ALIVE prototype scale near water',
  },
  {
    src: '360/scene-04.webp',
    thumb: '360/thumb-04.webp',
    label: 'Scene 04',
    detail: 'Deck and rescue-orange profile',
    alt: 'Interactive 360 degree view highlighting the orange ALIVE prototype deck profile',
  },
  {
    src: '360/scene-05.webp',
    thumb: '360/thumb-05.webp',
    label: 'Scene 05',
    detail: 'Open-air field evidence',
    alt: 'Interactive 360 degree view of the ALIVE field evidence panorama',
  },
  {
    src: '360/scene-06.webp',
    thumb: '360/thumb-06.webp',
    label: 'Scene 06',
    detail: 'Final full-environment sweep',
    alt: 'Interactive 360 degree view of the ALIVE prototype environment sweep',
  },
]

const initialBoatYaw = 209
const initialBoatPitch = -14
const initialBoatZoom = 55
const initialBoatScene = panoramaScenes[0]
const initialBoatPanoramaSrc = asset(initialBoatScene.src)
const initialBoatCaption = `${initialBoatScene.label} · ${initialBoatScene.detail}`

const wrapDegrees = (value: number) => ((value % 360) + 360) % 360

function View360() {
  const [sceneIndex, setSceneIndex] = useState(0)
  const [bearing, setBearing] = useState(initialBoatYaw)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const viewerShellRef = useRef<HTMLDivElement | null>(null)
  const photoSphereRef = useRef<HTMLDivElement | null>(null)
  const viewerRef = useRef<Viewer | null>(null)
  const bearingRef = useRef(initialBoatYaw)
  const activeScene = panoramaScenes[sceneIndex]
  const activePanoramaSrc = asset(activeScene.src)

  useEffect(() => {
    bearingRef.current = bearing
  }, [bearing])

  useEffect(() => {
    if (import.meta.env.MODE === 'test' || !photoSphereRef.current || viewerRef.current) {
      return
    }

    const viewer = new Viewer({
      container: photoSphereRef.current,
      panorama: initialBoatPanoramaSrc,
      caption: initialBoatCaption,
      defaultYaw: `${initialBoatYaw}deg`,
      defaultPitch: `${initialBoatPitch}deg`,
      defaultZoomLvl: initialBoatZoom,
      mousewheelCtrlKey: false,
      touchmoveTwoFingers: false,
      navbar: ['zoom', 'move', 'caption', 'fullscreen'],
    })

    viewerRef.current = viewer

    return () => {
      viewerRef.current = null
      viewer.destroy()
    }
  }, [])

  useEffect(() => {
    const viewer = viewerRef.current

    if (!viewer) {
      return
    }

    void viewer
      .setPanorama(activePanoramaSrc, {
        caption: `${activeScene.label} · ${activeScene.detail}`,
        position: {
          yaw: `${bearingRef.current}deg`,
          pitch: `${initialBoatPitch}deg`,
        },
        zoom: initialBoatZoom,
        transition: {
          speed: 650,
          effect: 'fade',
          rotation: false,
        },
        showLoader: true,
      })
      .catch((error: unknown) => {
        console.error('Failed to switch ALIVE boat 360 panorama', error)
      })
  }, [activePanoramaSrc, activeScene.detail, activeScene.label])

  useEffect(() => {
    const syncNativeFullscreen = () => {
      setIsFullscreen(document.fullscreenElement === viewerShellRef.current)
      window.requestAnimationFrame(() => viewerRef.current?.autoSize())
    }

    document.addEventListener('fullscreenchange', syncNativeFullscreen)
    window.addEventListener('resize', syncNativeFullscreen)

    return () => {
      document.removeEventListener('fullscreenchange', syncNativeFullscreen)
      window.removeEventListener('resize', syncNativeFullscreen)
    }
  }, [])

  useEffect(() => {
    document.body.classList.toggle('viewer-fullscreen-open', isFullscreen)
    window.requestAnimationFrame(() => viewerRef.current?.autoSize())

    return () => {
      document.body.classList.remove('viewer-fullscreen-open')
    }
  }, [isFullscreen])

  useEffect(() => {
    const exitFallbackFullscreen = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isFullscreen && !document.fullscreenElement) {
        setIsFullscreen(false)
      }
    }

    window.addEventListener('keydown', exitFallbackFullscreen)

    return () => {
      window.removeEventListener('keydown', exitFallbackFullscreen)
    }
  }, [isFullscreen])

  const rotateCameraBy = (amount: number) => {
    setBearing((current) => {
      const nextBearing = wrapDegrees(current + amount)
      bearingRef.current = nextBearing
      viewerRef.current?.rotate({ yaw: `${nextBearing}deg`, pitch: `${initialBoatPitch}deg` })
      return nextBearing
    })
  }

  const selectScene = (index: number) => {
    bearingRef.current = initialBoatYaw
    setBearing(initialBoatYaw)
    setSceneIndex(index)
  }

  const toggleFullscreen = async () => {
    const shell = viewerShellRef.current
    if (!shell) return

    if (isFullscreen) {
      if (document.fullscreenElement && typeof document.exitFullscreen === 'function') {
        await document.exitFullscreen()
      }
      setIsFullscreen(false)
      return
    }

    if (document.fullscreenEnabled && typeof shell.requestFullscreen === 'function') {
      setIsFullscreen(true)
      try {
        await shell.requestFullscreen()
        return
      } catch {
        setIsFullscreen(true)
        return
      }
    }

    setIsFullscreen(true)
  }

  return (
    <section className="section view360-section" id="view360" aria-labelledby="view360-title">
      <div className="view360-copy">
        <p className="eyebrow">Immersive evidence · Photo Sphere boat viewer</p>
        <h2 id="view360-title">360° Product View</h2>
        <p>
          The dedicated 360° Drive folder now renders as a true photo-sphere viewer like the previous
          working museum 360 experience. Drag directly inside the viewer to look around the ALIVE boat,
          use the camera controls, or switch source scenes to inspect each field panorama.
        </p>
        <div className="view360-stats" aria-label="360 panorama details">
          <span>6 equirectangular panoramas</span>
          <span>Photo Sphere Viewer</span>
          <span>True drag-to-rotate 360°</span>
        </div>
        <a className="button button-ghost view360-source" href={panoramaDriveUrl} target="_blank" rel="noreferrer">
          Open 360° source folder
        </a>
      </div>

      <div className={`viewer-shell${isFullscreen ? ' viewer-shell-fullscreen' : ''}`} ref={viewerShellRef}>
        <div className="viewer-topline">
          <span>ALIVE / BOAT 360</span>
          <div className="viewer-topline-actions">
            <strong>{activeScene.label}</strong>
            <button
              type="button"
              className="fullscreen-toggle"
              onClick={() => void toggleFullscreen()}
              aria-label={isFullscreen ? 'Exit fullscreen 360 viewer' : 'Enter fullscreen 360 viewer'}
              aria-pressed={isFullscreen}
            >
              {isFullscreen ? 'Exit fullscreen' : 'Fullscreen'}
            </button>
          </div>
        </div>
        <div
          className="panorama-window photo-sphere-window"
          data-testid="boat-photo-sphere-viewer"
          data-panorama-src={activePanoramaSrc}
          data-active-scene={activeScene.label}
          aria-label="ALIVE boat 360 viewer powered by Photo Sphere Viewer"
        >
          <div ref={photoSphereRef} className="photo-sphere-mount" />
          <div className="viewer-glass" aria-hidden="true" />
          <div className="viewer-reticle" aria-hidden="true" />
          <div className="drag-hint">Drag to explore the real 360° scene</div>
          <div className="scene-caption">
            <span>{activeScene.detail}</span>
            <small>{Math.round(bearing)}° camera heading</small>
          </div>
        </div>

        <div className="viewer-controls" aria-label="360 viewer camera controls">
          <button type="button" onClick={() => rotateCameraBy(-28)} aria-label="Rotate 360 camera left">
            ←
          </button>
          <div className="rotation-meter" aria-hidden="true">
            <span style={{ transform: `translateX(${(bearing / 360) * 100}%)` }} />
          </div>
          <button type="button" onClick={() => rotateCameraBy(28)} aria-label="Rotate 360 camera right">
            →
          </button>
        </div>

        <div className="scene-strip" aria-label="360 source frames">
          {panoramaScenes.map((scene, index) => (
            <button
              type="button"
              key={scene.src}
              className={index === sceneIndex ? 'active' : undefined}
              onClick={() => selectScene(index)}
              aria-pressed={index === sceneIndex}
            >
              <img src={asset(scene.thumb)} alt="" />
              <span>{scene.label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

function App() {
  return (
    <main className="site-shell">
      <nav className="topbar" aria-label="Primary navigation">
        <a className="brand" href="#hero" aria-label="ALIVE home">
          <img src={asset('logo.png')} alt="ALIVE logo" />
        </a>
        <div className="nav-links">
          <a href="#system">System</a>
          <a href="#view360">View 360</a>
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
            <a className="button button-primary" href="#view360">
              Explore 360°
            </a>
            <a className="button button-ghost" href="#testing">
              See validation
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

      <View360 />

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
