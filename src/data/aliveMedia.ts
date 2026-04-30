export type AliveSectionId = 'design' | 'documentation-testing' | 'object-detection' | 'functional-testing' | 'basic-safety' | 'view-360'

export type AliveMediaType = 'image' | 'video'

export type AliveMediaItem = {
  id: string
  sectionId: AliveSectionId
  subsection: string
  type: AliveMediaType
  src: string
  title: string
  alt: string
  caption: string
  sourcePath: string
  driveEmbedUrl?: string
}

export type AliveSection = {
  id: AliveSectionId
  route: string
  eyebrow: string
  title: string
  summary: string
  proof: string
  interpretation: string
  ctaLabel: string
  mediaCount: number
  imageCount: number
  videoCount: number
}

export const aliveSections = [
  {
    "id": "design",
    "route": "/sections/design",
    "eyebrow": "Design showcase",
    "title": "ALIVE Design System",
    "summary": "A polished design dossier for the ALIVE prototype, connecting the visual identity, banner, and render views to the rescue-craft engineering decisions.",
    "proof": "This showcase focuses on how the ALIVE concept is shaped before field testing: high-visibility rescue branding, catamaran-style flotation, sensor placement, deck layout, and a body form intended for stability on water.",
    "interpretation": "View these images as the design baseline. The rendered front, side, top, and orthographic views explain how the floating hull, deck hardware, and camera position are meant to work together before real-water testing.",
    "ctaLabel": "View design details",
    "mediaCount": 6,
    "imageCount": 6,
    "videoCount": 0
  },
  {
    "id": "documentation-testing",
    "route": "/sections/documentation-testing",
    "eyebrow": "Field showcase",
    "title": "Field Testing Showcase",
    "summary": "A professional field-testing presentation for ALIVE, grouped by field trial sessions so the build, launch, observation, and water-operation process can be understood clearly.",
    "proof": "This showcase demonstrates that ALIVE moved beyond render and concept. The media presents repeated field handling, dock preparation, operation near water, prototype observation, and multiple testing sessions with students and mentors around the craft.",
    "interpretation": "Use the field trial groups as a chronological field story. Each group is kept intact so visitors can understand the complete testing context instead of seeing only selected highlights.",
    "ctaLabel": "View testing details",
    "mediaCount": 77,
    "imageCount": 72,
    "videoCount": 5
  },
  {
    "id": "object-detection",
    "route": "/sections/object-detection",
    "eyebrow": "Vision AI showcase",
    "title": "Vision AI Testing Showcase",
    "summary": "A focused vision-AI showcase for the FPS object-detection videos, explaining why model responsiveness matters on a small Raspberry Pi rescue platform.",
    "proof": "This showcase presents the computer-vision work as runtime behavior, not only as a training metric. The FPS clips show how detection speed changes across model and resolution choices.",
    "interpretation": "Watch these clips as deployment context. A rescue craft needs detection that is accurate enough to identify targets and fast enough for operators to respond while the boat is moving.",
    "ctaLabel": "View AI testing",
    "mediaCount": 2,
    "imageCount": 0,
    "videoCount": 2
  },
  {
    "id": "functional-testing",
    "route": "/sections/functional-testing",
    "eyebrow": "Speed and response",
    "title": "Performance Testing Showcase",
    "summary": "A performance showcase presenting the timing records behind ALIVE movement, turn response, stop delay, and straight-line speed.",
    "proof": "This showcase highlights how ALIVE movement was measured with concrete timing records. The stopwatch screenshots and field photos support the functional claims summarized on the homepage.",
    "interpretation": "Read these assets as performance context. The timing images matter because flood response depends on whether the craft can move, turn, and stop predictably under operator control.",
    "ctaLabel": "View speed results",
    "mediaCount": 5,
    "imageCount": 5,
    "videoCount": 0
  },
  {
    "id": "basic-safety",
    "route": "/sections/basic-safety",
    "eyebrow": "Safety validation",
    "title": "Safety Validation Showcase",
    "summary": "A safety showcase for the stability, electrical durability, and return-to-base videos used to evaluate prototype readiness.",
    "proof": "This showcase presents ALIVE against basic safety behavior, including whether it remains stable, survives water-side operation, and can return after deployment.",
    "interpretation": "Treat these videos as safety trials rather than promotional clips. They show the operational risks that must be reduced before a rescue craft becomes suitable for real emergency environments.",
    "ctaLabel": "View safety results",
    "mediaCount": 4,
    "imageCount": 0,
    "videoCount": 4
  },
  {
    "id": "view-360",
    "route": "/view-360",
    "eyebrow": "Immersive showcase",
    "title": "360 Degree Product View",
    "summary": "The original 360 source collection behind the dedicated Photo Sphere route, preserving every panorama as a traceable immersive view.",
    "proof": "This showcase captures the prototype inside a full surrounding environment, giving visitors spatial context beyond isolated still photos.",
    "interpretation": "The optimized Photo Sphere route is the preferred viewing experience, while this collection records the original six panorama files for complete source coverage.",
    "ctaLabel": "Explore 360",
    "mediaCount": 6,
    "imageCount": 6,
    "videoCount": 0
  }
] as const satisfies readonly AliveSection[]

export const aliveMedia = [
  {
    "id": "design-001",
    "sectionId": "design",
    "subsection": "Brand assets",
    "type": "image",
    "src": "/alive/drive-sections/design/brand/design-001-logo-alive.png",
    "title": "Logo Alive",
    "alt": "ALIVE Brand assets showcase image: Logo Alive",
    "caption": "Design showcase media from Brand assets. Original file: Logo Alive.png.",
    "sourcePath": "Logo Alive.png"
  },
  {
    "id": "design-002",
    "sectionId": "design",
    "subsection": "Brand assets",
    "type": "image",
    "src": "/alive/drive-sections/design/brand/design-002-banner-alive.png",
    "title": "Banner Alive",
    "alt": "ALIVE Brand assets showcase image: Banner Alive",
    "caption": "Design showcase media from Brand assets. Original file: Banner Alive.png.",
    "sourcePath": "Banner Alive.png"
  },
  {
    "id": "design-003",
    "sectionId": "design",
    "subsection": "Design renders",
    "type": "image",
    "src": "/alive/drive-sections/design/renders/design-003-render-front.png",
    "title": "Render Front",
    "alt": "ALIVE Design renders showcase image: Render Front",
    "caption": "Design showcase media from Design renders. Original file: render-front.png.",
    "sourcePath": "ALIVE Design/render-front.png"
  },
  {
    "id": "design-004",
    "sectionId": "design",
    "subsection": "Design renders",
    "type": "image",
    "src": "/alive/drive-sections/design/renders/design-004-render-ortho.png",
    "title": "Render Ortho",
    "alt": "ALIVE Design renders showcase image: Render Ortho",
    "caption": "Design showcase media from Design renders. Original file: render-ortho.png.",
    "sourcePath": "ALIVE Design/render-ortho.png"
  },
  {
    "id": "design-005",
    "sectionId": "design",
    "subsection": "Design renders",
    "type": "image",
    "src": "/alive/drive-sections/design/renders/design-005-render-side.png",
    "title": "Render Side",
    "alt": "ALIVE Design renders showcase image: Render Side",
    "caption": "Design showcase media from Design renders. Original file:  render-side.png.",
    "sourcePath": "ALIVE Design/ render-side.png"
  },
  {
    "id": "design-006",
    "sectionId": "design",
    "subsection": "Design renders",
    "type": "image",
    "src": "/alive/drive-sections/design/renders/design-006-render-top.png",
    "title": "Render Top",
    "alt": "ALIVE Design renders showcase image: Render Top",
    "caption": "Design showcase media from Design renders. Original file: render-top.png.",
    "sourcePath": "ALIVE Design/render-top.png"
  },
  {
    "id": "documentation-testing-007",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 1",
    "type": "image",
    "src": "/alive/drive-sections/documentation-testing/field-trial-1/documentation-testing-007-20250905-192935.jpg",
    "title": "20250905 192935",
    "alt": "ALIVE Field Trial 1 showcase image: 20250905 192935",
    "caption": "Field showcase media from Field Trial 1. Original file: Copy of 20250905_192935.jpg.",
    "sourcePath": "Documentation of Testing/Field Trial 1/Copy of 20250905_192935.jpg"
  },
  {
    "id": "documentation-testing-008",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 1",
    "type": "image",
    "src": "/alive/drive-sections/documentation-testing/field-trial-1/documentation-testing-008-20250905-193059.jpg",
    "title": "20250905 193059",
    "alt": "ALIVE Field Trial 1 showcase image: 20250905 193059",
    "caption": "Field showcase media from Field Trial 1. Original file: Copy of 20250905_193059.jpg.",
    "sourcePath": "Documentation of Testing/Field Trial 1/Copy of 20250905_193059.jpg"
  },
  {
    "id": "documentation-testing-009",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 1",
    "type": "image",
    "src": "/alive/drive-sections/documentation-testing/field-trial-1/documentation-testing-009-20250905-201229.jpg",
    "title": "20250905 201229",
    "alt": "ALIVE Field Trial 1 showcase image: 20250905 201229",
    "caption": "Field showcase media from Field Trial 1. Original file: Copy of 20250905_201229.jpg.",
    "sourcePath": "Documentation of Testing/Field Trial 1/Copy of 20250905_201229.jpg"
  },
  {
    "id": "documentation-testing-010",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 1",
    "type": "image",
    "src": "/alive/drive-sections/documentation-testing/field-trial-1/documentation-testing-010-20250905-201236.jpg",
    "title": "20250905 201236",
    "alt": "ALIVE Field Trial 1 showcase image: 20250905 201236",
    "caption": "Field showcase media from Field Trial 1. Original file: Copy of 20250905_201236.jpg.",
    "sourcePath": "Documentation of Testing/Field Trial 1/Copy of 20250905_201236.jpg"
  },
  {
    "id": "documentation-testing-011",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 1",
    "type": "image",
    "src": "/alive/drive-sections/documentation-testing/field-trial-1/documentation-testing-011-20250905-201753.jpg",
    "title": "20250905 201753",
    "alt": "ALIVE Field Trial 1 showcase image: 20250905 201753",
    "caption": "Field showcase media from Field Trial 1. Original file: Copy of 20250905_201753.jpg.",
    "sourcePath": "Documentation of Testing/Field Trial 1/Copy of 20250905_201753.jpg"
  },
  {
    "id": "documentation-testing-012",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 1",
    "type": "image",
    "src": "/alive/drive-sections/documentation-testing/field-trial-1/documentation-testing-012-20250909-163549.jpg",
    "title": "20250909 163549",
    "alt": "ALIVE Field Trial 1 showcase image: 20250909 163549",
    "caption": "Field showcase media from Field Trial 1. Original file: Copy of 20250909_163549.jpg.",
    "sourcePath": "Documentation of Testing/Field Trial 1/Copy of 20250909_163549.jpg"
  },
  {
    "id": "documentation-testing-013",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 1",
    "type": "image",
    "src": "/alive/drive-sections/documentation-testing/field-trial-1/documentation-testing-013-20250909-163613.jpg",
    "title": "20250909 163613",
    "alt": "ALIVE Field Trial 1 showcase image: 20250909 163613",
    "caption": "Field showcase media from Field Trial 1. Original file: Copy of 20250909_163613.jpg.",
    "sourcePath": "Documentation of Testing/Field Trial 1/Copy of 20250909_163613.jpg"
  },
  {
    "id": "documentation-testing-014",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 1",
    "type": "image",
    "src": "/alive/drive-sections/documentation-testing/field-trial-1/documentation-testing-014-20250909-163753.jpg",
    "title": "20250909 163753",
    "alt": "ALIVE Field Trial 1 showcase image: 20250909 163753",
    "caption": "Field showcase media from Field Trial 1. Original file: Copy of 20250909_163753.jpg.",
    "sourcePath": "Documentation of Testing/Field Trial 1/Copy of 20250909_163753.jpg"
  },
  {
    "id": "documentation-testing-015",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 1",
    "type": "image",
    "src": "/alive/drive-sections/documentation-testing/field-trial-1/documentation-testing-015-20250909-164237.jpg",
    "title": "20250909 164237",
    "alt": "ALIVE Field Trial 1 showcase image: 20250909 164237",
    "caption": "Field showcase media from Field Trial 1. Original file: Copy of 20250909_164237.jpg.",
    "sourcePath": "Documentation of Testing/Field Trial 1/Copy of 20250909_164237.jpg"
  },
  {
    "id": "documentation-testing-016",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 1",
    "type": "image",
    "src": "/alive/drive-sections/documentation-testing/field-trial-1/documentation-testing-016-20250909-174240.jpg",
    "title": "20250909 174240",
    "alt": "ALIVE Field Trial 1 showcase image: 20250909 174240",
    "caption": "Field showcase media from Field Trial 1. Original file: Copy of 20250909_174240.jpg.",
    "sourcePath": "Documentation of Testing/Field Trial 1/Copy of 20250909_174240.jpg"
  },
  {
    "id": "documentation-testing-017",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 1",
    "type": "image",
    "src": "/alive/drive-sections/documentation-testing/field-trial-1/documentation-testing-017-20250909-175601.jpg",
    "title": "20250909 175601",
    "alt": "ALIVE Field Trial 1 showcase image: 20250909 175601",
    "caption": "Field showcase media from Field Trial 1. Original file: Copy of 20250909_175601.jpg.",
    "sourcePath": "Documentation of Testing/Field Trial 1/Copy of 20250909_175601.jpg"
  },
  {
    "id": "documentation-testing-018",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 1",
    "type": "image",
    "src": "/alive/drive-sections/documentation-testing/field-trial-1/documentation-testing-018-20250909-175605.jpg",
    "title": "20250909 175605",
    "alt": "ALIVE Field Trial 1 showcase image: 20250909 175605",
    "caption": "Field showcase media from Field Trial 1. Original file: Copy of 20250909_175605.jpg.",
    "sourcePath": "Documentation of Testing/Field Trial 1/Copy of 20250909_175605.jpg"
  },
  {
    "id": "documentation-testing-019",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 1",
    "type": "image",
    "src": "/alive/drive-sections/documentation-testing/field-trial-1/documentation-testing-019-img-20250903-wa0017.jpg",
    "title": "IMG 20250903 WA0017",
    "alt": "ALIVE Field Trial 1 showcase image: IMG 20250903 WA0017",
    "caption": "Field showcase media from Field Trial 1. Original file: Copy of IMG-20250903-WA0017.jpg.",
    "sourcePath": "Documentation of Testing/Field Trial 1/Copy of IMG-20250903-WA0017.jpg"
  },
  {
    "id": "documentation-testing-020",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 1",
    "type": "image",
    "src": "/alive/drive-sections/documentation-testing/field-trial-1/documentation-testing-020-img-20250903-wa0018.jpg",
    "title": "IMG 20250903 WA0018",
    "alt": "ALIVE Field Trial 1 showcase image: IMG 20250903 WA0018",
    "caption": "Field showcase media from Field Trial 1. Original file: Copy of IMG-20250903-WA0018.jpg.",
    "sourcePath": "Documentation of Testing/Field Trial 1/Copy of IMG-20250903-WA0018.jpg"
  },
  {
    "id": "documentation-testing-021",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 1",
    "type": "video",
    "src": "/alive/drive-sections/documentation-testing/field-trial-1/documentation-testing-021-vid-20250903-wa0019.mp4",
    "driveEmbedUrl": "https://drive.google.com/file/d/1Z4dX908kSfgEzS7bXleN37ilE_cQrjDJ/preview",
    "title": "VID 20250903 WA0019",
    "alt": "ALIVE Field Trial 1 showcase video: VID 20250903 WA0019",
    "caption": "Field showcase media from Field Trial 1. Original file: Copy of VID-20250903-WA0019.mp4.",
    "sourcePath": "Documentation of Testing/Field Trial 1/Copy of VID-20250903-WA0019.mp4"
  },
  {
    "id": "documentation-testing-022",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 2",
    "type": "image",
    "src": "/alive/drive-sections/documentation-testing/field-trial-2/documentation-testing-022-20250912-082925.jpg",
    "title": "20250912 082925",
    "alt": "ALIVE Field Trial 2 showcase image: 20250912 082925",
    "caption": "Field showcase media from Field Trial 2. Original file: Copy of 20250912_082925.jpg.",
    "sourcePath": "Documentation of Testing/Field Trial 2/Copy of 20250912_082925.jpg"
  },
  {
    "id": "documentation-testing-023",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 2",
    "type": "video",
    "src": "/alive/drive-sections/documentation-testing/field-trial-2/documentation-testing-023-20250912-084218.mp4",
    "driveEmbedUrl": "https://drive.google.com/file/d/1F906nVL8LVxgwFUsEpK6JzUzy8mMHRc5/preview",
    "title": "20250912 084218",
    "alt": "ALIVE Field Trial 2 showcase video: 20250912 084218",
    "caption": "Field showcase media from Field Trial 2. Original file: Copy of 20250912_084218.mp4.",
    "sourcePath": "Documentation of Testing/Field Trial 2/Copy of 20250912_084218.mp4"
  },
  {
    "id": "documentation-testing-024",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 2",
    "type": "image",
    "src": "/alive/drive-sections/documentation-testing/field-trial-2/documentation-testing-024-20250912-085436.jpg",
    "title": "20250912 085436",
    "alt": "ALIVE Field Trial 2 showcase image: 20250912 085436",
    "caption": "Field showcase media from Field Trial 2. Original file: Copy of 20250912_085436.jpg.",
    "sourcePath": "Documentation of Testing/Field Trial 2/Copy of 20250912_085436.jpg"
  },
  {
    "id": "documentation-testing-025",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 2",
    "type": "image",
    "src": "/alive/drive-sections/documentation-testing/field-trial-2/documentation-testing-025-20250912-090413.jpg",
    "title": "20250912 090413",
    "alt": "ALIVE Field Trial 2 showcase image: 20250912 090413",
    "caption": "Field showcase media from Field Trial 2. Original file: Copy of 20250912_090413.jpg.",
    "sourcePath": "Documentation of Testing/Field Trial 2/Copy of 20250912_090413.jpg"
  },
  {
    "id": "documentation-testing-026",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 2",
    "type": "image",
    "src": "/alive/drive-sections/documentation-testing/field-trial-2/documentation-testing-026-20250912-090415.jpg",
    "title": "20250912 090415",
    "alt": "ALIVE Field Trial 2 showcase image: 20250912 090415",
    "caption": "Field showcase media from Field Trial 2. Original file: Copy of 20250912_090415.jpg.",
    "sourcePath": "Documentation of Testing/Field Trial 2/Copy of 20250912_090415.jpg"
  },
  {
    "id": "documentation-testing-027",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 2",
    "type": "image",
    "src": "/alive/drive-sections/documentation-testing/field-trial-2/documentation-testing-027-20250912-090544.jpg",
    "title": "20250912 090544",
    "alt": "ALIVE Field Trial 2 showcase image: 20250912 090544",
    "caption": "Field showcase media from Field Trial 2. Original file: Copy of 20250912_090544.jpg.",
    "sourcePath": "Documentation of Testing/Field Trial 2/Copy of 20250912_090544.jpg"
  },
  {
    "id": "documentation-testing-028",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 2",
    "type": "image",
    "src": "/alive/drive-sections/documentation-testing/field-trial-2/documentation-testing-028-20250912-090547.jpg",
    "title": "20250912 090547",
    "alt": "ALIVE Field Trial 2 showcase image: 20250912 090547",
    "caption": "Field showcase media from Field Trial 2. Original file: Copy of 20250912_090547.jpg.",
    "sourcePath": "Documentation of Testing/Field Trial 2/Copy of 20250912_090547.jpg"
  },
  {
    "id": "documentation-testing-029",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 2",
    "type": "image",
    "src": "/alive/drive-sections/documentation-testing/field-trial-2/documentation-testing-029-20250912-095635.jpg",
    "title": "20250912 095635",
    "alt": "ALIVE Field Trial 2 showcase image: 20250912 095635",
    "caption": "Field showcase media from Field Trial 2. Original file: Copy of 20250912_095635.jpg.",
    "sourcePath": "Documentation of Testing/Field Trial 2/Copy of 20250912_095635.jpg"
  },
  {
    "id": "documentation-testing-030",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 2",
    "type": "video",
    "src": "/alive/drive-sections/documentation-testing/field-trial-2/documentation-testing-030-20250912-100240.mp4",
    "driveEmbedUrl": "https://drive.google.com/file/d/1adjfappowrnHn4N7GKOojx9A9dbfch3E/preview",
    "title": "20250912 100240",
    "alt": "ALIVE Field Trial 2 showcase video: 20250912 100240",
    "caption": "Field showcase media from Field Trial 2. Original file: Copy of 20250912_100240.mp4.",
    "sourcePath": "Documentation of Testing/Field Trial 2/Copy of 20250912_100240.mp4"
  },
  {
    "id": "documentation-testing-031",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 2",
    "type": "image",
    "src": "/alive/drive-sections/documentation-testing/field-trial-2/documentation-testing-031-20250912-100934.jpg",
    "title": "20250912 100934",
    "alt": "ALIVE Field Trial 2 showcase image: 20250912 100934",
    "caption": "Field showcase media from Field Trial 2. Original file: Copy of 20250912_100934.jpg.",
    "sourcePath": "Documentation of Testing/Field Trial 2/Copy of 20250912_100934.jpg"
  },
  {
    "id": "documentation-testing-032",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 2",
    "type": "video",
    "src": "/alive/drive-sections/documentation-testing/field-trial-2/documentation-testing-032-20250912-101855.mp4",
    "driveEmbedUrl": "https://drive.google.com/file/d/134sIRP6Ce2FW_W4sMxhu6qChsKdP1T1a/preview",
    "title": "20250912 101855",
    "alt": "ALIVE Field Trial 2 showcase video: 20250912 101855",
    "caption": "Field showcase media from Field Trial 2. Original file: Copy of 20250912_101855.mp4.",
    "sourcePath": "Documentation of Testing/Field Trial 2/Copy of 20250912_101855.mp4"
  },
  {
    "id": "documentation-testing-033",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 2",
    "type": "video",
    "src": "/alive/drive-sections/documentation-testing/field-trial-2/documentation-testing-033-20250912-102105.mp4",
    "driveEmbedUrl": "https://drive.google.com/file/d/1Ak3T-IQ1E-Y10D6UXNSSOU_PmbpJJO7s/preview",
    "title": "20250912 102105",
    "alt": "ALIVE Field Trial 2 showcase video: 20250912 102105",
    "caption": "Field showcase media from Field Trial 2. Original file: Copy of 20250912_102105.mp4.",
    "sourcePath": "Documentation of Testing/Field Trial 2/Copy of 20250912_102105.mp4"
  },
  {
    "id": "documentation-testing-034",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 2",
    "type": "image",
    "src": "/alive/drive-sections/documentation-testing/field-trial-2/documentation-testing-034-20250912-102113.jpg",
    "title": "20250912 102113",
    "alt": "ALIVE Field Trial 2 showcase image: 20250912 102113",
    "caption": "Field showcase media from Field Trial 2. Original file: Copy of 20250912_102113.jpg.",
    "sourcePath": "Documentation of Testing/Field Trial 2/Copy of 20250912_102113.jpg"
  },
  {
    "id": "documentation-testing-035",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 2",
    "type": "image",
    "src": "/alive/drive-sections/documentation-testing/field-trial-2/documentation-testing-035-20250912-102115.jpg",
    "title": "20250912 102115",
    "alt": "ALIVE Field Trial 2 showcase image: 20250912 102115",
    "caption": "Field showcase media from Field Trial 2. Original file: Copy of 20250912_102115.jpg.",
    "sourcePath": "Documentation of Testing/Field Trial 2/Copy of 20250912_102115.jpg"
  },
  {
    "id": "documentation-testing-036",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 2",
    "type": "image",
    "src": "/alive/drive-sections/documentation-testing/field-trial-2/documentation-testing-036-20250912-102126.jpg",
    "title": "20250912 102126",
    "alt": "ALIVE Field Trial 2 showcase image: 20250912 102126",
    "caption": "Field showcase media from Field Trial 2. Original file: Copy of 20250912_102126.jpg.",
    "sourcePath": "Documentation of Testing/Field Trial 2/Copy of 20250912_102126.jpg"
  },
  {
    "id": "documentation-testing-037",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 2",
    "type": "image",
    "src": "/alive/drive-sections/documentation-testing/field-trial-2/documentation-testing-037-20250912-102129.jpg",
    "title": "20250912 102129",
    "alt": "ALIVE Field Trial 2 showcase image: 20250912 102129",
    "caption": "Field showcase media from Field Trial 2. Original file: Copy of 20250912_102129.jpg.",
    "sourcePath": "Documentation of Testing/Field Trial 2/Copy of 20250912_102129.jpg"
  },
  {
    "id": "documentation-testing-038",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 2",
    "type": "image",
    "src": "/alive/drive-sections/documentation-testing/field-trial-2/documentation-testing-038-20250912-102130.jpg",
    "title": "20250912 102130",
    "alt": "ALIVE Field Trial 2 showcase image: 20250912 102130",
    "caption": "Field showcase media from Field Trial 2. Original file: Copy of 20250912_102130.jpg.",
    "sourcePath": "Documentation of Testing/Field Trial 2/Copy of 20250912_102130.jpg"
  },
  {
    "id": "documentation-testing-039",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 2",
    "type": "image",
    "src": "/alive/drive-sections/documentation-testing/field-trial-2/documentation-testing-039-20250912-102135.jpg",
    "title": "20250912 102135",
    "alt": "ALIVE Field Trial 2 showcase image: 20250912 102135",
    "caption": "Field showcase media from Field Trial 2. Original file: Copy of 20250912_102135.jpg.",
    "sourcePath": "Documentation of Testing/Field Trial 2/Copy of 20250912_102135.jpg"
  },
  {
    "id": "documentation-testing-040",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 3",
    "type": "image",
    "src": "/alive/drive-sections/documentation-testing/field-trial-3/documentation-testing-040-20250928-161716.jpg",
    "title": "20250928 161716",
    "alt": "ALIVE Field Trial 3 showcase image: 20250928 161716",
    "caption": "Field showcase media from Field Trial 3. Original file: Copy of Copy of 20250928_161716.jpg.",
    "sourcePath": "Documentation of Testing/Field Trial 3/Copy of Copy of 20250928_161716.jpg"
  },
  {
    "id": "documentation-testing-041",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 3",
    "type": "image",
    "src": "/alive/drive-sections/documentation-testing/field-trial-3/documentation-testing-041-20250928-161719.jpg",
    "title": "20250928 161719",
    "alt": "ALIVE Field Trial 3 showcase image: 20250928 161719",
    "caption": "Field showcase media from Field Trial 3. Original file: Copy of Copy of 20250928_161719.jpg.",
    "sourcePath": "Documentation of Testing/Field Trial 3/Copy of Copy of 20250928_161719.jpg"
  },
  {
    "id": "documentation-testing-042",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 3",
    "type": "image",
    "src": "/alive/drive-sections/documentation-testing/field-trial-3/documentation-testing-042-20250928-161747.jpg",
    "title": "20250928 161747",
    "alt": "ALIVE Field Trial 3 showcase image: 20250928 161747",
    "caption": "Field showcase media from Field Trial 3. Original file: Copy of Copy of 20250928_161747.jpg.",
    "sourcePath": "Documentation of Testing/Field Trial 3/Copy of Copy of 20250928_161747.jpg"
  },
  {
    "id": "documentation-testing-043",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 3",
    "type": "image",
    "src": "/alive/drive-sections/documentation-testing/field-trial-3/documentation-testing-043-20250928-161749.jpg",
    "title": "20250928 161749",
    "alt": "ALIVE Field Trial 3 showcase image: 20250928 161749",
    "caption": "Field showcase media from Field Trial 3. Original file: Copy of Copy of 20250928_161749.jpg.",
    "sourcePath": "Documentation of Testing/Field Trial 3/Copy of Copy of 20250928_161749.jpg"
  },
  {
    "id": "documentation-testing-044",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 3",
    "type": "image",
    "src": "/alive/drive-sections/documentation-testing/field-trial-3/documentation-testing-044-20250928-161752.jpg",
    "title": "20250928 161752",
    "alt": "ALIVE Field Trial 3 showcase image: 20250928 161752",
    "caption": "Field showcase media from Field Trial 3. Original file: Copy of Copy of 20250928_161752.jpg.",
    "sourcePath": "Documentation of Testing/Field Trial 3/Copy of Copy of 20250928_161752.jpg"
  },
  {
    "id": "documentation-testing-045",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 3",
    "type": "image",
    "src": "/alive/drive-sections/documentation-testing/field-trial-3/documentation-testing-045-20250928-161754.jpg",
    "title": "20250928 161754",
    "alt": "ALIVE Field Trial 3 showcase image: 20250928 161754",
    "caption": "Field showcase media from Field Trial 3. Original file: Copy of Copy of 20250928_161754.jpg.",
    "sourcePath": "Documentation of Testing/Field Trial 3/Copy of Copy of 20250928_161754.jpg"
  },
  {
    "id": "documentation-testing-046",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 3",
    "type": "image",
    "src": "/alive/drive-sections/documentation-testing/field-trial-3/documentation-testing-046-20250928-162319.jpg",
    "title": "20250928 162319",
    "alt": "ALIVE Field Trial 3 showcase image: 20250928 162319",
    "caption": "Field showcase media from Field Trial 3. Original file: Copy of Copy of 20250928_162319.jpg.",
    "sourcePath": "Documentation of Testing/Field Trial 3/Copy of Copy of 20250928_162319.jpg"
  },
  {
    "id": "documentation-testing-047",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 3",
    "type": "image",
    "src": "/alive/drive-sections/documentation-testing/field-trial-3/documentation-testing-047-20250928-162324.jpg",
    "title": "20250928 162324",
    "alt": "ALIVE Field Trial 3 showcase image: 20250928 162324",
    "caption": "Field showcase media from Field Trial 3. Original file: Copy of Copy of 20250928_162324.jpg.",
    "sourcePath": "Documentation of Testing/Field Trial 3/Copy of Copy of 20250928_162324.jpg"
  },
  {
    "id": "documentation-testing-048",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 3",
    "type": "image",
    "src": "/alive/drive-sections/documentation-testing/field-trial-3/documentation-testing-048-20250928-162447.jpg",
    "title": "20250928 162447",
    "alt": "ALIVE Field Trial 3 showcase image: 20250928 162447",
    "caption": "Field showcase media from Field Trial 3. Original file: Copy of Copy of 20250928_162447.jpg.",
    "sourcePath": "Documentation of Testing/Field Trial 3/Copy of Copy of 20250928_162447.jpg"
  },
  {
    "id": "documentation-testing-049",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 3",
    "type": "image",
    "src": "/alive/drive-sections/documentation-testing/field-trial-3/documentation-testing-049-img-20250928-wa0004.jpg",
    "title": "IMG 20250928 WA0004",
    "alt": "ALIVE Field Trial 3 showcase image: IMG 20250928 WA0004",
    "caption": "Field showcase media from Field Trial 3. Original file: Copy of Copy of IMG-20250928-WA0004.jpg.",
    "sourcePath": "Documentation of Testing/Field Trial 3/Copy of Copy of IMG-20250928-WA0004.jpg"
  },
  {
    "id": "documentation-testing-050",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 3",
    "type": "image",
    "src": "/alive/drive-sections/documentation-testing/field-trial-3/documentation-testing-050-img-20250928-wa0005.jpg",
    "title": "IMG 20250928 WA0005",
    "alt": "ALIVE Field Trial 3 showcase image: IMG 20250928 WA0005",
    "caption": "Field showcase media from Field Trial 3. Original file: Copy of Copy of IMG-20250928-WA0005.jpg.",
    "sourcePath": "Documentation of Testing/Field Trial 3/Copy of Copy of IMG-20250928-WA0005.jpg"
  },
  {
    "id": "documentation-testing-051",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 3",
    "type": "image",
    "src": "/alive/drive-sections/documentation-testing/field-trial-3/documentation-testing-051-img-20250928-wa0016.jpg",
    "title": "IMG 20250928 WA0016",
    "alt": "ALIVE Field Trial 3 showcase image: IMG 20250928 WA0016",
    "caption": "Field showcase media from Field Trial 3. Original file: Copy of Copy of IMG-20250928-WA0016.jpg.",
    "sourcePath": "Documentation of Testing/Field Trial 3/Copy of Copy of IMG-20250928-WA0016.jpg"
  },
  {
    "id": "documentation-testing-052",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 3",
    "type": "image",
    "src": "/alive/drive-sections/documentation-testing/field-trial-3/documentation-testing-052-img-20250928-wa0017.jpg",
    "title": "IMG 20250928 WA0017",
    "alt": "ALIVE Field Trial 3 showcase image: IMG 20250928 WA0017",
    "caption": "Field showcase media from Field Trial 3. Original file: Copy of Copy of IMG-20250928-WA0017.jpg.",
    "sourcePath": "Documentation of Testing/Field Trial 3/Copy of Copy of IMG-20250928-WA0017.jpg"
  },
  {
    "id": "documentation-testing-053",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 3",
    "type": "image",
    "src": "/alive/drive-sections/documentation-testing/field-trial-3/documentation-testing-053-img-20250928-wa0029.jpg",
    "title": "IMG 20250928 WA0029",
    "alt": "ALIVE Field Trial 3 showcase image: IMG 20250928 WA0029",
    "caption": "Field showcase media from Field Trial 3. Original file: Copy of Copy of IMG-20250928-WA0029.jpg.",
    "sourcePath": "Documentation of Testing/Field Trial 3/Copy of Copy of IMG-20250928-WA0029.jpg"
  },
  {
    "id": "documentation-testing-054",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 3",
    "type": "image",
    "src": "/alive/drive-sections/documentation-testing/field-trial-3/documentation-testing-054-img-20250928-wa0030.jpg",
    "title": "IMG 20250928 WA0030",
    "alt": "ALIVE Field Trial 3 showcase image: IMG 20250928 WA0030",
    "caption": "Field showcase media from Field Trial 3. Original file: Copy of Copy of IMG-20250928-WA0030.jpg.",
    "sourcePath": "Documentation of Testing/Field Trial 3/Copy of Copy of IMG-20250928-WA0030.jpg"
  },
  {
    "id": "documentation-testing-055",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 4",
    "type": "image",
    "src": "/alive/drive-sections/documentation-testing/field-trial-4/documentation-testing-055-20250928-162451.jpg",
    "title": "20250928 162451",
    "alt": "ALIVE Field Trial 4 showcase image: 20250928 162451",
    "caption": "Field showcase media from Field Trial 4. Original file: Copy of 20250928_162451.jpg.",
    "sourcePath": "Documentation of Testing/Field Trial 4/Copy of 20250928_162451.jpg"
  },
  {
    "id": "documentation-testing-056",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 4",
    "type": "image",
    "src": "/alive/drive-sections/documentation-testing/field-trial-4/documentation-testing-056-20250928-162503.jpg",
    "title": "20250928 162503",
    "alt": "ALIVE Field Trial 4 showcase image: 20250928 162503",
    "caption": "Field showcase media from Field Trial 4. Original file: Copy of 20250928_162503.jpg.",
    "sourcePath": "Documentation of Testing/Field Trial 4/Copy of 20250928_162503.jpg"
  },
  {
    "id": "documentation-testing-057",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 4",
    "type": "image",
    "src": "/alive/drive-sections/documentation-testing/field-trial-4/documentation-testing-057-20250928-162859.jpg",
    "title": "20250928 162859",
    "alt": "ALIVE Field Trial 4 showcase image: 20250928 162859",
    "caption": "Field showcase media from Field Trial 4. Original file: Copy of 20250928_162859.jpg.",
    "sourcePath": "Documentation of Testing/Field Trial 4/Copy of 20250928_162859.jpg"
  },
  {
    "id": "documentation-testing-058",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 4",
    "type": "image",
    "src": "/alive/drive-sections/documentation-testing/field-trial-4/documentation-testing-058-20250928-162904.jpg",
    "title": "20250928 162904",
    "alt": "ALIVE Field Trial 4 showcase image: 20250928 162904",
    "caption": "Field showcase media from Field Trial 4. Original file: Copy of 20250928_162904.jpg.",
    "sourcePath": "Documentation of Testing/Field Trial 4/Copy of 20250928_162904.jpg"
  },
  {
    "id": "documentation-testing-059",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 4",
    "type": "image",
    "src": "/alive/drive-sections/documentation-testing/field-trial-4/documentation-testing-059-20250928-163206.jpg",
    "title": "20250928 163206",
    "alt": "ALIVE Field Trial 4 showcase image: 20250928 163206",
    "caption": "Field showcase media from Field Trial 4. Original file: Copy of 20250928_163206.jpg.",
    "sourcePath": "Documentation of Testing/Field Trial 4/Copy of 20250928_163206.jpg"
  },
  {
    "id": "documentation-testing-060",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 4",
    "type": "image",
    "src": "/alive/drive-sections/documentation-testing/field-trial-4/documentation-testing-060-20250928-163213.jpg",
    "title": "20250928 163213",
    "alt": "ALIVE Field Trial 4 showcase image: 20250928 163213",
    "caption": "Field showcase media from Field Trial 4. Original file: Copy of 20250928_163213.jpg.",
    "sourcePath": "Documentation of Testing/Field Trial 4/Copy of 20250928_163213.jpg"
  },
  {
    "id": "documentation-testing-061",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 4",
    "type": "image",
    "src": "/alive/drive-sections/documentation-testing/field-trial-4/documentation-testing-061-20250928-163224.jpg",
    "title": "20250928 163224",
    "alt": "ALIVE Field Trial 4 showcase image: 20250928 163224",
    "caption": "Field showcase media from Field Trial 4. Original file: Copy of 20250928_163224.jpg.",
    "sourcePath": "Documentation of Testing/Field Trial 4/Copy of 20250928_163224.jpg"
  },
  {
    "id": "documentation-testing-062",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 4",
    "type": "image",
    "src": "/alive/drive-sections/documentation-testing/field-trial-4/documentation-testing-062-20250928-163226.jpg",
    "title": "20250928 163226",
    "alt": "ALIVE Field Trial 4 showcase image: 20250928 163226",
    "caption": "Field showcase media from Field Trial 4. Original file: Copy of 20250928_163226.jpg.",
    "sourcePath": "Documentation of Testing/Field Trial 4/Copy of 20250928_163226.jpg"
  },
  {
    "id": "documentation-testing-063",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 4",
    "type": "image",
    "src": "/alive/drive-sections/documentation-testing/field-trial-4/documentation-testing-063-img-20250928-wa0010.jpg",
    "title": "IMG 20250928 WA0010",
    "alt": "ALIVE Field Trial 4 showcase image: IMG 20250928 WA0010",
    "caption": "Field showcase media from Field Trial 4. Original file: Copy of IMG-20250928-WA0010.jpg.",
    "sourcePath": "Documentation of Testing/Field Trial 4/Copy of IMG-20250928-WA0010.jpg"
  },
  {
    "id": "documentation-testing-064",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 4",
    "type": "image",
    "src": "/alive/drive-sections/documentation-testing/field-trial-4/documentation-testing-064-img-20250928-wa0013.jpg",
    "title": "IMG 20250928 WA0013",
    "alt": "ALIVE Field Trial 4 showcase image: IMG 20250928 WA0013",
    "caption": "Field showcase media from Field Trial 4. Original file: Copy of IMG-20250928-WA0013.jpg.",
    "sourcePath": "Documentation of Testing/Field Trial 4/Copy of IMG-20250928-WA0013.jpg"
  },
  {
    "id": "documentation-testing-065",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 4",
    "type": "image",
    "src": "/alive/drive-sections/documentation-testing/field-trial-4/documentation-testing-065-img-20250928-wa0014.jpg",
    "title": "IMG 20250928 WA0014",
    "alt": "ALIVE Field Trial 4 showcase image: IMG 20250928 WA0014",
    "caption": "Field showcase media from Field Trial 4. Original file: Copy of IMG-20250928-WA0014.jpg.",
    "sourcePath": "Documentation of Testing/Field Trial 4/Copy of IMG-20250928-WA0014.jpg"
  },
  {
    "id": "documentation-testing-066",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 4",
    "type": "image",
    "src": "/alive/drive-sections/documentation-testing/field-trial-4/documentation-testing-066-img-20250928-wa0015.jpg",
    "title": "IMG 20250928 WA0015",
    "alt": "ALIVE Field Trial 4 showcase image: IMG 20250928 WA0015",
    "caption": "Field showcase media from Field Trial 4. Original file: Copy of IMG-20250928-WA0015.jpg.",
    "sourcePath": "Documentation of Testing/Field Trial 4/Copy of IMG-20250928-WA0015.jpg"
  },
  {
    "id": "documentation-testing-067",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 4",
    "type": "image",
    "src": "/alive/drive-sections/documentation-testing/field-trial-4/documentation-testing-067-img-20250928-wa0018.jpg",
    "title": "IMG 20250928 WA0018",
    "alt": "ALIVE Field Trial 4 showcase image: IMG 20250928 WA0018",
    "caption": "Field showcase media from Field Trial 4. Original file: Copy of IMG-20250928-WA0018.jpg.",
    "sourcePath": "Documentation of Testing/Field Trial 4/Copy of IMG-20250928-WA0018.jpg"
  },
  {
    "id": "documentation-testing-068",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 4",
    "type": "image",
    "src": "/alive/drive-sections/documentation-testing/field-trial-4/documentation-testing-068-img-20250928-wa0019.jpg",
    "title": "IMG 20250928 WA0019",
    "alt": "ALIVE Field Trial 4 showcase image: IMG 20250928 WA0019",
    "caption": "Field showcase media from Field Trial 4. Original file: Copy of IMG-20250928-WA0019.jpg.",
    "sourcePath": "Documentation of Testing/Field Trial 4/Copy of IMG-20250928-WA0019.jpg"
  },
  {
    "id": "documentation-testing-069",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 4",
    "type": "image",
    "src": "/alive/drive-sections/documentation-testing/field-trial-4/documentation-testing-069-img-20250928-wa0020.jpg",
    "title": "IMG 20250928 WA0020",
    "alt": "ALIVE Field Trial 4 showcase image: IMG 20250928 WA0020",
    "caption": "Field showcase media from Field Trial 4. Original file: Copy of IMG-20250928-WA0020.jpg.",
    "sourcePath": "Documentation of Testing/Field Trial 4/Copy of IMG-20250928-WA0020.jpg"
  },
  {
    "id": "documentation-testing-070",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 4",
    "type": "image",
    "src": "/alive/drive-sections/documentation-testing/field-trial-4/documentation-testing-070-img-20250928-wa0021.jpg",
    "title": "IMG 20250928 WA0021",
    "alt": "ALIVE Field Trial 4 showcase image: IMG 20250928 WA0021",
    "caption": "Field showcase media from Field Trial 4. Original file: Copy of IMG-20250928-WA0021.jpg.",
    "sourcePath": "Documentation of Testing/Field Trial 4/Copy of IMG-20250928-WA0021.jpg"
  },
  {
    "id": "documentation-testing-071",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 4",
    "type": "image",
    "src": "/alive/drive-sections/documentation-testing/field-trial-4/documentation-testing-071-img-20250928-wa0023.jpg",
    "title": "IMG 20250928 WA0023",
    "alt": "ALIVE Field Trial 4 showcase image: IMG 20250928 WA0023",
    "caption": "Field showcase media from Field Trial 4. Original file: Copy of IMG-20250928-WA0023.jpg.",
    "sourcePath": "Documentation of Testing/Field Trial 4/Copy of IMG-20250928-WA0023.jpg"
  },
  {
    "id": "documentation-testing-072",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 4",
    "type": "image",
    "src": "/alive/drive-sections/documentation-testing/field-trial-4/documentation-testing-072-img-20250928-wa0026.jpg",
    "title": "IMG 20250928 WA0026",
    "alt": "ALIVE Field Trial 4 showcase image: IMG 20250928 WA0026",
    "caption": "Field showcase media from Field Trial 4. Original file: Copy of IMG-20250928-WA0026.jpg.",
    "sourcePath": "Documentation of Testing/Field Trial 4/Copy of IMG-20250928-WA0026.jpg"
  },
  {
    "id": "documentation-testing-073",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 4",
    "type": "image",
    "src": "/alive/drive-sections/documentation-testing/field-trial-4/documentation-testing-073-img-20250928-wa0027.jpg",
    "title": "IMG 20250928 WA0027",
    "alt": "ALIVE Field Trial 4 showcase image: IMG 20250928 WA0027",
    "caption": "Field showcase media from Field Trial 4. Original file: Copy of IMG-20250928-WA0027.jpg.",
    "sourcePath": "Documentation of Testing/Field Trial 4/Copy of IMG-20250928-WA0027.jpg"
  },
  {
    "id": "documentation-testing-074",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 4",
    "type": "image",
    "src": "/alive/drive-sections/documentation-testing/field-trial-4/documentation-testing-074-img-20250928-wa0028.jpg",
    "title": "IMG 20250928 WA0028",
    "alt": "ALIVE Field Trial 4 showcase image: IMG 20250928 WA0028",
    "caption": "Field showcase media from Field Trial 4. Original file: Copy of IMG-20250928-WA0028.jpg.",
    "sourcePath": "Documentation of Testing/Field Trial 4/Copy of IMG-20250928-WA0028.jpg"
  },
  {
    "id": "documentation-testing-075",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 4",
    "type": "image",
    "src": "/alive/drive-sections/documentation-testing/field-trial-4/documentation-testing-075-img-20250928-wa0034.jpg",
    "title": "IMG 20250928 WA0034",
    "alt": "ALIVE Field Trial 4 showcase image: IMG 20250928 WA0034",
    "caption": "Field showcase media from Field Trial 4. Original file: Copy of IMG-20250928-WA0034.jpg.",
    "sourcePath": "Documentation of Testing/Field Trial 4/Copy of IMG-20250928-WA0034.jpg"
  },
  {
    "id": "documentation-testing-076",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 4",
    "type": "image",
    "src": "/alive/drive-sections/documentation-testing/field-trial-4/documentation-testing-076-img-20250928-wa0035.jpg",
    "title": "IMG 20250928 WA0035",
    "alt": "ALIVE Field Trial 4 showcase image: IMG 20250928 WA0035",
    "caption": "Field showcase media from Field Trial 4. Original file: Copy of IMG-20250928-WA0035.jpg.",
    "sourcePath": "Documentation of Testing/Field Trial 4/Copy of IMG-20250928-WA0035.jpg"
  },
  {
    "id": "documentation-testing-077",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 5",
    "type": "image",
    "src": "/alive/drive-sections/documentation-testing/field-trial-5/documentation-testing-077-img-20250928-wa0020.jpg",
    "title": "IMG 20250928 WA0020",
    "alt": "ALIVE Field Trial 5 showcase image: IMG 20250928 WA0020",
    "caption": "Field showcase media from Field Trial 5. Original file: Copy of IMG-20250928-WA0020.jpg.",
    "sourcePath": "Documentation of Testing/Field Trial 5/Copy of IMG-20250928-WA0020.jpg"
  },
  {
    "id": "documentation-testing-078",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 5",
    "type": "image",
    "src": "/alive/drive-sections/documentation-testing/field-trial-5/documentation-testing-078-img-20250928-wa0026.jpg",
    "title": "IMG 20250928 WA0026",
    "alt": "ALIVE Field Trial 5 showcase image: IMG 20250928 WA0026",
    "caption": "Field showcase media from Field Trial 5. Original file: Copy of IMG-20250928-WA0026.jpg.",
    "sourcePath": "Documentation of Testing/Field Trial 5/Copy of IMG-20250928-WA0026.jpg"
  },
  {
    "id": "documentation-testing-079",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 5",
    "type": "image",
    "src": "/alive/drive-sections/documentation-testing/field-trial-5/documentation-testing-079-img-20250928-wa0027.jpg",
    "title": "IMG 20250928 WA0027",
    "alt": "ALIVE Field Trial 5 showcase image: IMG 20250928 WA0027",
    "caption": "Field showcase media from Field Trial 5. Original file: Copy of IMG-20250928-WA0027.jpg.",
    "sourcePath": "Documentation of Testing/Field Trial 5/Copy of IMG-20250928-WA0027.jpg"
  },
  {
    "id": "documentation-testing-080",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 5",
    "type": "image",
    "src": "/alive/drive-sections/documentation-testing/field-trial-5/documentation-testing-080-img-20250928-wa0028.jpg",
    "title": "IMG 20250928 WA0028",
    "alt": "ALIVE Field Trial 5 showcase image: IMG 20250928 WA0028",
    "caption": "Field showcase media from Field Trial 5. Original file: Copy of IMG-20250928-WA0028.jpg.",
    "sourcePath": "Documentation of Testing/Field Trial 5/Copy of IMG-20250928-WA0028.jpg"
  },
  {
    "id": "documentation-testing-081",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 5",
    "type": "image",
    "src": "/alive/drive-sections/documentation-testing/field-trial-5/documentation-testing-081-img-20250928-wa0030.jpg",
    "title": "IMG 20250928 WA0030",
    "alt": "ALIVE Field Trial 5 showcase image: IMG 20250928 WA0030",
    "caption": "Field showcase media from Field Trial 5. Original file: Copy of IMG-20250928-WA0030.jpg.",
    "sourcePath": "Documentation of Testing/Field Trial 5/Copy of IMG-20250928-WA0030.jpg"
  },
  {
    "id": "documentation-testing-082",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 5",
    "type": "image",
    "src": "/alive/drive-sections/documentation-testing/field-trial-5/documentation-testing-082-img-20250928-wa0032.jpg",
    "title": "IMG 20250928 WA0032",
    "alt": "ALIVE Field Trial 5 showcase image: IMG 20250928 WA0032",
    "caption": "Field showcase media from Field Trial 5. Original file: Copy of IMG-20250928-WA0032.jpg.",
    "sourcePath": "Documentation of Testing/Field Trial 5/Copy of IMG-20250928-WA0032.jpg"
  },
  {
    "id": "documentation-testing-083",
    "sectionId": "documentation-testing",
    "subsection": "Field Trial 5",
    "type": "image",
    "src": "/alive/drive-sections/documentation-testing/field-trial-5/documentation-testing-083-img-20250928-wa0036.jpg",
    "title": "IMG 20250928 WA0036",
    "alt": "ALIVE Field Trial 5 showcase image: IMG 20250928 WA0036",
    "caption": "Field showcase media from Field Trial 5. Original file: Copy of IMG-20250928-WA0036.jpg.",
    "sourcePath": "Documentation of Testing/Field Trial 5/Copy of IMG-20250928-WA0036.jpg"
  },
  {
    "id": "object-detection-084",
    "sectionId": "object-detection",
    "subsection": "FPS",
    "type": "video",
    "src": "/alive/drive-sections/object-detection/fps/object-detection-084-yolov11n.mp4",
    "driveEmbedUrl": "https://drive.google.com/file/d/1HGMj2CD0Ptv3zqOoU5z3WgLWvzLDu0MU/preview",
    "title": "Yolov11n",
    "alt": "ALIVE FPS showcase video: Yolov11n",
    "caption": "Vision AI showcase media from FPS. Original file: Yolov11n.mp4.",
    "sourcePath": "Object Detection Testing Result/FPS/Yolov11n.mp4"
  },
  {
    "id": "object-detection-085",
    "sectionId": "object-detection",
    "subsection": "FPS",
    "type": "video",
    "src": "/alive/drive-sections/object-detection/fps/object-detection-085-yolov8n-res-240x120.mp4",
    "driveEmbedUrl": "https://drive.google.com/file/d/1QrnJrfHCKKU4XYJZj6GL20yPbjbi8-q_/preview",
    "title": "Yolov8n Res 240x120",
    "alt": "ALIVE FPS showcase video: Yolov8n Res 240x120",
    "caption": "Vision AI showcase media from FPS. Original file: Yolov8n res 240x120.mp4.",
    "sourcePath": "Object Detection Testing Result/FPS/Yolov8n res 240x120.mp4"
  },
  {
    "id": "functional-testing-086",
    "sectionId": "functional-testing",
    "subsection": "Speed Testing",
    "type": "image",
    "src": "/alive/drive-sections/functional-testing/speed-testing/functional-testing-086-img-20250912-wa0009.jpg",
    "title": "IMG 20250912 WA0009",
    "alt": "ALIVE Speed Testing showcase image: IMG 20250912 WA0009",
    "caption": "Performance showcase media from Speed Testing. Original file: IMG-20250912-WA0009.jpg.",
    "sourcePath": "Functional Testing Result (Speed and Responsivity)/Speed Testing/IMG-20250912-WA0009.jpg"
  },
  {
    "id": "functional-testing-087",
    "sectionId": "functional-testing",
    "subsection": "Speed Testing",
    "type": "image",
    "src": "/alive/drive-sections/functional-testing/speed-testing/functional-testing-087-img-20250912-wa0010.jpg",
    "title": "IMG 20250912 WA0010",
    "alt": "ALIVE Speed Testing showcase image: IMG 20250912 WA0010",
    "caption": "Performance showcase media from Speed Testing. Original file: IMG-20250912-WA0010.jpg.",
    "sourcePath": "Functional Testing Result (Speed and Responsivity)/Speed Testing/IMG-20250912-WA0010.jpg"
  },
  {
    "id": "functional-testing-088",
    "sectionId": "functional-testing",
    "subsection": "Speed Testing",
    "type": "image",
    "src": "/alive/drive-sections/functional-testing/speed-testing/functional-testing-088-screenshot-20250917-204912-clock.jpg",
    "title": "Screenshot 20250917 204912 Clock",
    "alt": "ALIVE Speed Testing showcase image: Screenshot 20250917 204912 Clock",
    "caption": "Performance showcase media from Speed Testing. Original file: Screenshot_20250917_204912_Clock.jpg.",
    "sourcePath": "Functional Testing Result (Speed and Responsivity)/Speed Testing/Screenshot_20250917_204912_Clock.jpg"
  },
  {
    "id": "functional-testing-089",
    "sectionId": "functional-testing",
    "subsection": "Speed Testing",
    "type": "image",
    "src": "/alive/drive-sections/functional-testing/speed-testing/functional-testing-089-screenshot-20250917-204938-clock.jpg",
    "title": "Screenshot 20250917 204938 Clock",
    "alt": "ALIVE Speed Testing showcase image: Screenshot 20250917 204938 Clock",
    "caption": "Performance showcase media from Speed Testing. Original file: Screenshot_20250917_204938_Clock.jpg.",
    "sourcePath": "Functional Testing Result (Speed and Responsivity)/Speed Testing/Screenshot_20250917_204938_Clock.jpg"
  },
  {
    "id": "functional-testing-090",
    "sectionId": "functional-testing",
    "subsection": "Speed Testing",
    "type": "image",
    "src": "/alive/drive-sections/functional-testing/speed-testing/functional-testing-090-screenshot-20250917-205323-clock.jpg",
    "title": "Screenshot 20250917 205323 Clock",
    "alt": "ALIVE Speed Testing showcase image: Screenshot 20250917 205323 Clock",
    "caption": "Performance showcase media from Speed Testing. Original file: Screenshot_20250917_205323_Clock.jpg.",
    "sourcePath": "Functional Testing Result (Speed and Responsivity)/Speed Testing/Screenshot_20250917_205323_Clock.jpg"
  },
  {
    "id": "basic-safety-091",
    "sectionId": "basic-safety",
    "subsection": "Basic Safety Testing Result",
    "type": "video",
    "src": "/alive/drive-sections/basic-safety/basic-safety-091-20250912-084821.mp4",
    "driveEmbedUrl": "https://drive.google.com/file/d/1g9wo__-IeMREKmnAMiHaE-tRmhFszqZy/preview",
    "title": "20250912 084821",
    "alt": "ALIVE Basic Safety Testing Result showcase video: 20250912 084821",
    "caption": "Safety showcase media from Basic Safety Testing Result. Original file: Copy of 20250912_084821.mp4.",
    "sourcePath": "Basic Safety Testing Result/Copy of 20250912_084821.mp4"
  },
  {
    "id": "basic-safety-092",
    "sectionId": "basic-safety",
    "subsection": "Basic Safety Testing Result",
    "type": "video",
    "src": "/alive/drive-sections/basic-safety/basic-safety-092-20250912-084846.mp4",
    "driveEmbedUrl": "https://drive.google.com/file/d/1JGe33llAol1jai43Sj6sFnzEip_gCqJQ/preview",
    "title": "20250912 084846",
    "alt": "ALIVE Basic Safety Testing Result showcase video: 20250912 084846",
    "caption": "Safety showcase media from Basic Safety Testing Result. Original file: Copy of 20250912_084846.mp4.",
    "sourcePath": "Basic Safety Testing Result/Copy of 20250912_084846.mp4"
  },
  {
    "id": "basic-safety-093",
    "sectionId": "basic-safety",
    "subsection": "Basic Safety Testing Result",
    "type": "video",
    "src": "/alive/drive-sections/basic-safety/basic-safety-093-20250912-094254.mp4",
    "driveEmbedUrl": "https://drive.google.com/file/d/1-eTSKDZkxup-tpi_H7fHHiORofVz0l2N/preview",
    "title": "20250912 094254",
    "alt": "ALIVE Basic Safety Testing Result showcase video: 20250912 094254",
    "caption": "Safety showcase media from Basic Safety Testing Result. Original file: Copy of 20250912_094254.mp4.",
    "sourcePath": "Basic Safety Testing Result/Copy of 20250912_094254.mp4"
  },
  {
    "id": "basic-safety-094",
    "sectionId": "basic-safety",
    "subsection": "Basic Safety Testing Result",
    "type": "video",
    "src": "/alive/drive-sections/basic-safety/basic-safety-094-20250912-095146.mp4",
    "driveEmbedUrl": "https://drive.google.com/file/d/1geY7Yx8ElhSWcyL3o7pVTJ0NhQqpk0-r/preview",
    "title": "20250912 095146",
    "alt": "ALIVE Basic Safety Testing Result showcase video: 20250912 095146",
    "caption": "Safety showcase media from Basic Safety Testing Result. Original file: Copy of 20250912_095146.mp4.",
    "sourcePath": "Basic Safety Testing Result/Copy of 20250912_095146.mp4"
  },
  {
    "id": "view-360-095",
    "sectionId": "view-360",
    "subsection": "360 source panoramas",
    "type": "image",
    "src": "/alive/drive-sections/view-360/originals/view-360-095-20260425-182716-322.jpg",
    "title": "20260425 182716 322",
    "alt": "ALIVE 360 source panoramas showcase image: 20260425 182716 322",
    "caption": "Immersive showcase media from 360 source panoramas. Original file: 20260425_182716_322.jpg.",
    "sourcePath": "360⁰/20260425_182716_322.jpg"
  },
  {
    "id": "view-360-096",
    "sectionId": "view-360",
    "subsection": "360 source panoramas",
    "type": "image",
    "src": "/alive/drive-sections/view-360/originals/view-360-096-20260425-182721-106.jpg",
    "title": "20260425 182721 106",
    "alt": "ALIVE 360 source panoramas showcase image: 20260425 182721 106",
    "caption": "Immersive showcase media from 360 source panoramas. Original file: 20260425_182721_106.jpg.",
    "sourcePath": "360⁰/20260425_182721_106.jpg"
  },
  {
    "id": "view-360-097",
    "sectionId": "view-360",
    "subsection": "360 source panoramas",
    "type": "image",
    "src": "/alive/drive-sections/view-360/originals/view-360-097-20260425-182725-502.jpg",
    "title": "20260425 182725 502",
    "alt": "ALIVE 360 source panoramas showcase image: 20260425 182725 502",
    "caption": "Immersive showcase media from 360 source panoramas. Original file: 20260425_182725_502.jpg.",
    "sourcePath": "360⁰/20260425_182725_502.jpg"
  },
  {
    "id": "view-360-098",
    "sectionId": "view-360",
    "subsection": "360 source panoramas",
    "type": "image",
    "src": "/alive/drive-sections/view-360/originals/view-360-098-20260425-182729-899.jpg",
    "title": "20260425 182729 899",
    "alt": "ALIVE 360 source panoramas showcase image: 20260425 182729 899",
    "caption": "Immersive showcase media from 360 source panoramas. Original file: 20260425_182729_899.jpg.",
    "sourcePath": "360⁰/20260425_182729_899.jpg"
  },
  {
    "id": "view-360-099",
    "sectionId": "view-360",
    "subsection": "360 source panoramas",
    "type": "image",
    "src": "/alive/drive-sections/view-360/originals/view-360-099-20260425-182734-285.jpg",
    "title": "20260425 182734 285",
    "alt": "ALIVE 360 source panoramas showcase image: 20260425 182734 285",
    "caption": "Immersive showcase media from 360 source panoramas. Original file: 20260425_182734_285.jpg.",
    "sourcePath": "360⁰/20260425_182734_285.jpg"
  },
  {
    "id": "view-360-100",
    "sectionId": "view-360",
    "subsection": "360 source panoramas",
    "type": "image",
    "src": "/alive/drive-sections/view-360/originals/view-360-100-20260425-182738-676.jpg",
    "title": "20260425 182738 676",
    "alt": "ALIVE 360 source panoramas showcase image: 20260425 182738 676",
    "caption": "Immersive showcase media from 360 source panoramas. Original file: 20260425_182738_676.jpg.",
    "sourcePath": "360⁰/20260425_182738_676.jpg"
  }
] as const satisfies readonly AliveMediaItem[]

export const aliveMediaTotals = {
  total: aliveMedia.length,
  images: aliveMedia.filter((item) => item.type === 'image').length,
  videos: aliveMedia.filter((item) => item.type === 'video').length,
} as const

export function getSectionByPath(pathname: string) {
  return aliveSections.find((section) => section.route === pathname)
}

export function getSectionById(sectionId: AliveSectionId) {
  return aliveSections.find((section) => section.id === sectionId)
}

export function getMediaBySection(sectionId: AliveSectionId) {
  return aliveMedia.filter((item) => item.sectionId === sectionId)
}

export function getGroupedMediaBySection(sectionId: AliveSectionId) {
  return getMediaBySection(sectionId).reduce<Record<string, AliveMediaItem[]>>((groups, item) => {
    groups[item.subsection] = [...(groups[item.subsection] ?? []), item]
    return groups
  }, {})
}

export function getAllMediaCount() {
  return aliveMedia.length
}
