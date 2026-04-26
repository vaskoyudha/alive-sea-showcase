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
    label: 'mAP50 terbaik',
    detail: 'Puncak deteksi objek YOLOv11n pada epoch 86',
  },
  {
    value: '60.8%',
    label: 'mAP50-95',
    detail: 'Presisi terbaik pada ambang IoU yang lebih ketat',
  },
  {
    value: '3',
    label: 'varian model',
    detail: 'Perbandingan YOLOv11n, YOLOv8n 640, dan YOLOv8n 240×120',
  },
  {
    value: '5+',
    label: 'set uji lapangan',
    detail: 'Bukti prototipe, keselamatan, kecepatan, respons, dan visi AI',
  },
]

const systemFeatures = [
  {
    kicker: 'Deteksi',
    title: 'Respons awal berbasis visi komputer',
    body: 'Alur kerja webcam dan Raspberry Pi mengenali manusia atau objek di skenario banjir agar tim penyelamat mendapat gambaran situasi lebih cepat.',
  },
  {
    kicker: 'Navigasi',
    title: 'Kendali permukaan dua pendorong',
    body: 'Bodi katamaran berwarna oranye penyelamat menjaga platform tetap stabil, sementara dua pendorong menangani laju maju, belok, dan rute kembali.',
  },
  {
    kicker: 'Jangkau',
    title: 'Akses lebih aman sebelum penyelamat tiba',
    body: 'ALIVE dirancang sebagai wahana bantu tanpa awak yang dapat bergerak menuju korban di air sekaligus mengurangi paparan risiko bagi penyelamat.',
  },
]

const galleryImages = [
  {
    src: 'dock-prototype.webp',
    alt: 'Prototipe ALIVE di atas dermaga kayu dekat perairan',
    caption: 'Prototipe dirakit dan dipotret dalam kondisi lapangan.',
  },
  {
    src: 'water-drone.webp',
    alt: 'Tampilan udara prototipe ALIVE berwarna oranye mengapung di air',
    caption: 'Bukti uji penerapan di air dari perspektif drone.',
  },
  {
    src: 'sensor-closeup.webp',
    alt: 'Close-up kamera dan perangkat sensor ALIVE',
    caption: 'Modul kamera dan elektronik untuk deteksi objek.',
  },
]

const panoramaScenes = [
  {
    src: '360/scene-01.webp',
    thumb: '360/thumb-01.webp',
    label: 'Sudut 01',
    detail: 'Panorama prototipe di area waterfront',
    alt: 'Tampilan panorama 360 derajat prototipe ALIVE dari folder panorama waterfront',
  },
  {
    src: '360/scene-02.webp',
    thumb: '360/thumb-02.webp',
    label: 'Sudut 02',
    detail: 'Konteks dermaga dan sisi starboard',
    alt: 'Tampilan panorama 360 derajat ALIVE dari sudut sisi starboard',
  },
  {
    src: '360/scene-03.webp',
    thumb: '360/thumb-03.webp',
    label: 'Sudut 03',
    detail: 'Skala prototipe di tepi air',
    alt: 'Tampilan panorama 360 derajat yang menunjukkan skala prototipe ALIVE dekat air',
  },
  {
    src: '360/scene-04.webp',
    thumb: '360/thumb-04.webp',
    label: 'Sudut 04',
    detail: 'Dek dan profil rescue-orange',
    alt: 'Tampilan panorama 360 derajat yang menyorot profil dek oranye ALIVE',
  },
  {
    src: '360/scene-05.webp',
    thumb: '360/thumb-05.webp',
    label: 'Sudut 05',
    detail: 'Bukti lapangan terbuka',
    alt: 'Tampilan panorama 360 derajat bukti lapangan ALIVE',
  },
  {
    src: '360/scene-06.webp',
    thumb: '360/thumb-06.webp',
    label: 'Sudut 06',
    detail: 'Sapuan lingkungan penuh',
    alt: 'Tampilan panorama 360 derajat sapuan lingkungan prototipe ALIVE',
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
        <p className="eyebrow">Bukti imersif · Photo Sphere boat viewer</p>
        <h2 id="view360-title">Panorama 360° ALIVE</h2>
        <p>
          Folder 360° dari Drive kini dirender sebagai viewer bola penuh seperti sesi museum 360 sebelumnya.
          Seret langsung di area viewer untuk melihat sekeliling prototipe boat, gunakan kontrol kamera, atau pilih
          sudut sumber untuk berpindah antar panorama lapangan ALIVE.
        </p>
        <div className="view360-stats" aria-label="Detail panorama 360">
          <span>6 panorama equirectangular</span>
          <span>Photo Sphere Viewer</span>
          <span>Drag 360° asli</span>
        </div>
        <a className="button button-ghost view360-source" href={panoramaDriveUrl} target="_blank" rel="noreferrer">
          Buka folder sumber 360°
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
              aria-label={isFullscreen ? 'Keluar dari mode layar penuh viewer 360' : 'Masuk mode layar penuh viewer 360'}
              aria-pressed={isFullscreen}
            >
              {isFullscreen ? 'Keluar layar penuh' : 'Layar penuh'}
            </button>
          </div>
        </div>
        <div
          className="panorama-window photo-sphere-window"
          data-testid="boat-photo-sphere-viewer"
          data-panorama-src={activePanoramaSrc}
          data-active-scene={activeScene.label}
          aria-label="Viewer 360 boat ALIVE memakai Photo Sphere Viewer"
        >
          <div ref={photoSphereRef} className="photo-sphere-mount" />
          <div className="viewer-glass" aria-hidden="true" />
          <div className="viewer-reticle" aria-hidden="true" />
          <div className="drag-hint">Drag langsung untuk melihat 360°</div>
          <div className="scene-caption">
            <span>{activeScene.detail}</span>
            <small>{Math.round(bearing)}° arah kamera</small>
          </div>
        </div>

        <div className="viewer-controls" aria-label="Kontrol kamera viewer 360">
          <button type="button" onClick={() => rotateCameraBy(-28)} aria-label="Putar kamera 360 ke kiri">
            ←
          </button>
          <div className="rotation-meter" aria-hidden="true">
            <span style={{ transform: `translateX(${(bearing / 360) * 100}%)` }} />
          </div>
          <button type="button" onClick={() => rotateCameraBy(28)} aria-label="Putar kamera 360 ke kanan">
            →
          </button>
        </div>

        <div className="scene-strip" aria-label="Frame sumber 360">
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
      <nav className="topbar" aria-label="Navigasi utama">
        <a className="brand" href="#hero" aria-label="Beranda ALIVE">
          <img src={asset('logo.png')} alt="Logo ALIVE" />
        </a>
        <div className="nav-links">
          <a href="#system">Sistem</a>
          <a href="#view360">Panorama 360</a>
          <a href="#testing">Pengujian</a>
          <a href="#vision">Visi AI</a>
          <a href="#impact">Dampak</a>
        </div>
        <a className="nav-cta" href={driveUrl} target="_blank" rel="noreferrer">
          Sumber Drive
        </a>
      </nav>

      <section className="hero-section" id="hero">
        <div className="hero-copy">
          <p className="eyebrow">Inovasi pelajar · evakuasi banjir · wahana permukaan pintar</p>
          <h1>ALIVE: Sekoci Pintar untuk Evakuasi Banjir</h1>
          <p className="hero-lede">
            Sebuah presentasi profesional untuk prototipe sekoci pintar berbasis deteksi objek yang dirancang
            agar respons banjir menjadi lebih cepat, aman, dan terkoordinasi sejak menit pertama keadaan darurat.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#view360">
              Jelajahi 360°
            </a>
            <a className="button button-ghost" href="#testing">
              Lihat validasi
            </a>
          </div>
          <div className="mission-tagline" aria-label="Tagline proyek">
            Evakuasi Lebih Cepat, Lebih Banyak Nyawa Selamat
          </div>
        </div>

        <div className="hero-visual" aria-label="Render produk ALIVE di atas antarmuka laut premium">
          <div className="sonar-card">
            <div className="sonar-grid" aria-hidden="true" />
            <img
              className="hero-product"
              src={asset('hero-render.webp')}
              alt="Render sekoci pintar ALIVE berwarna oranye dengan dua ponton"
            />
            <div className="status-chip chip-top">Raspberry Pi + Webcam</div>
            <div className="status-chip chip-bottom">Platform dua pendorong penyelamat</div>
          </div>
        </div>
      </section>

      <section className="evidence-strip" aria-label="Metrik bukti proyek" data-testid="evidence-metrics">
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
          <p className="eyebrow">Arsitektur sistem</p>
          <h2>Cara Kerja ALIVE</h2>
          <p>
            ALIVE menggabungkan desain mekanik apung, bodi oranye penyelamat yang mudah terlihat, elektronik tertanam,
            kendali jarak jauh, dan deteksi objek ke dalam satu prototipe respons air yang ringkas.
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

      <section className="design-board" aria-label="Tampilan desain ALIVE">
        <div className="board-header">
          <p className="eyebrow">Bahasa desain industrial</p>
          <h2>Bentuk siap laut, visibilitas kelas penyelamat.</h2>
        </div>
        <div className="render-grid">
          <figure className="render-card large-render">
            <img src={asset('render-top.webp')} alt="Render tampak atas desain sekoci ALIVE" />
            <figcaption>Layout dek atas untuk buoyancy, payload, dan penempatan sensor.</figcaption>
          </figure>
          <figure className="render-card">
            <img src={asset('render-front.webp')} alt="Render tampak depan sekoci ALIVE" />
            <figcaption>Profil penyelamat dari depan dengan stabilitas ponton lebar.</figcaption>
          </figure>
          <figure className="render-card">
            <img src={asset('render-side.webp')} alt="Render tampak samping sekoci ALIVE" />
            <figcaption>Profil samping rendah untuk pergerakan yang lebih halus di air.</figcaption>
          </figure>
        </div>
      </section>

      <View360 />

      <section className="section testing-section" id="testing">
        <div className="section-heading center-heading">
          <p className="eyebrow">Bukti prototipe</p>
          <h2>Tervalidasi di Air</h2>
          <p>
            Bukti di Drive mencakup render desain, perakitan prototipe, uji penerapan di air, simulasi penyelamatan,
            pengecekan keamanan, uji kecepatan dan respons, serta hasil deteksi objek.
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
          <p className="eyebrow">Bukti model deteksi</p>
          <h2>Hasil Deteksi Objek</h2>
          <p>
            Artefak pelatihan proyek membandingkan beberapa varian YOLO. Titik model terbaik yang tercatat mencapai
            97.6% mAP50, mendukung gagasan utama ALIVE: visi pintar dapat membantu wahana penyelamat kecil memahami
            lingkungan banjir di sekitarnya.
          </p>
          <div className="model-list" aria-label="Model deteksi objek yang dibandingkan">
            <span>YOLOv11n</span>
            <span>YOLOv8n 640×640</span>
            <span>YOLOv8n 240×120</span>
          </div>
        </div>
        <div className="result-panels">
          <img src={asset('yolov11-results.webp')} alt="Grafik hasil training YOLOv11n" />
          <img src={asset('yolov8-results.webp')} alt="Grafik hasil training YOLOv8n" />
        </div>
      </section>

      <section className="section impact-section" id="impact">
        <div className="poster-card">
          <img src={asset('poster.webp')} alt="Poster kompetisi ALIVE dengan metodologi dan temuan riset" />
        </div>
        <div className="impact-copy">
          <p className="eyebrow">Dampak manusia</p>
          <h2>Selaras dengan SDG 3 dan SDG 11</h2>
          <p>
            ALIVE mendukung kesehatan dan kesejahteraan melalui respons darurat yang lebih cepat, serta kota dan komunitas
            berkelanjutan dengan menawarkan teknologi evakuasi banjir yang praktis untuk wilayah rawan bencana.
          </p>
          <div className="impact-cards">
            <article>
              <span>SDG 3</span>
              <strong>Kesehatan dan keselamatan</strong>
              <p>Mengurangi risiko tenggelam dengan memperluas jangkauan bantuan saat banjir.</p>
            </article>
            <article>
              <span>SDG 11</span>
              <strong>Komunitas tangguh</strong>
              <p>Meningkatkan kesiapan untuk keadaan darurat banjir di skala kota maupun komunitas.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="team-section" aria-label="Tim ALIVE dan prototipe">
        <img src={asset('team.webp')} alt="Tim pelajar ALIVE bersama prototipe di dekat perairan" />
        <div>
          <p className="eyebrow">Dibangun oleh inovator muda</p>
          <h2>Dari riset kelas menuju prototipe yang diuji di air.</h2>
          <p>
            Proyek ini dikembangkan oleh siswa SMP Al Falah Darussalam, Indonesia, dan disiapkan untuk
            International Student Project Excellence Award 2026.
          </p>
        </div>
      </section>
    </main>
  )
}

export default App
