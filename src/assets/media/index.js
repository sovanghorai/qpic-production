// Media page assets — pulled directly from the QPIC Studio Figma file
// (node "Media 1 PAGE", 1:2849). Figma-hosted URLs, valid ~7 days from
// generation; download and swap for local files under this folder for a
// production deploy.

export const heroGlow = 'https://www.figma.com/api/mcp/asset/74b6231c-3c7f-43fa-a0e6-9d73444b843c.png'

// ===== "The Grids of 3 for insta handles" — 9 images, own layout:
// a 2-col teaser row (wide + dark portrait box), then 7 stacked full-width
// rows, the last on a red highlight background. =====
export const gridsOf3 = {
  teaserWide: 'https://www.figma.com/api/mcp/asset/db967862-f34f-4e9b-926c-66953bfda854.png', // May Grid 1
  teaserDark: 'https://www.figma.com/api/mcp/asset/8d0eb98c-4425-483f-bc6d-4c371fd6fc11.png', // May Grid 2
  rows: [
    'https://www.figma.com/api/mcp/asset/138e6668-1dd9-436e-93c2-72301f1b8942.png', // May Grid 3
    'https://www.figma.com/api/mcp/asset/be96ed76-b40e-4f98-9216-4f3781ac666e.png', // May Grid 4
    'https://www.figma.com/api/mcp/asset/6b5698a2-2e62-4dd7-aa5d-5498a0f6622c.png', // May Grid 5
    'https://www.figma.com/api/mcp/asset/b7d46e8c-7091-4866-a5b5-25cb699aef02.png', // May Grid 9
    'https://www.figma.com/api/mcp/asset/6c0de39f-0ba7-4ed5-bccc-b3a0197586fe.png', // May Grid 6
    'https://www.figma.com/api/mcp/asset/e8d4f419-edc7-4abe-b9c4-387b4fb03f25.png', // May Grid 7
  ],
  highlight: 'https://www.figma.com/api/mcp/asset/24b0c927-1648-44aa-a626-b582ada3627c.png', // May Grid 8, red bg
}

// ===== "Sale driven Multi-Grid for insta handles" — own layout: a 2-col
// teaser row, then ONE tall continuous banner image (not a grid of tiles). =====
export const saleDrivenGrid = {
  teaserWide: 'https://www.figma.com/api/mcp/asset/8e2e52eb-b2ff-44da-b01f-d907a6ffab1c.png', // May Grid 10
  teaserDark: 'https://www.figma.com/api/mcp/asset/1ec96d6a-7806-496a-999c-580c747ba1ec.png', // May Grid 11
  tallBanner: 'https://www.figma.com/api/mcp/asset/4761b8f9-10c3-4ce6-a4dc-4c82d1efb979.png', // mykaa grid 1, ~1608x3565
}

// ===== "D2C Branding From Scratch" (Saraswat Veda) — own layout: a hero
// row (wide logo banner + square mark), two full-width images, then a
// 3-column x 2-row grid of product shots (first column has a texture
// backdrop, matching Figma). =====
export const d2cBranding = {
  heroWide: 'https://www.figma.com/api/mcp/asset/aeebb48b-8802-442b-a37a-1f6975e9a849.png',
  heroSquare: 'https://www.figma.com/api/mcp/asset/4c3c0f9a-ebdd-4d5d-8286-c7b39ebed4fa.png',
  rows: [
    'https://www.figma.com/api/mcp/asset/c694cb1c-75e3-4ac6-9f2d-6caa770edd59.png', // May Grid 12
    'https://www.figma.com/api/mcp/asset/6640e813-4b91-4bb7-9350-dce929a924f9.png', // May Grid 13
  ],
  // 3 columns x 2 rows, row-major order (matches CSS grid auto-placement):
  // [row1-col1, row1-col2, row1-col3, row2-col1, row2-col2, row2-col3].
  // Column 1 (indices 0 and 3) has the texture backdrop in Figma.
  productGrid: [
    'https://www.figma.com/api/mcp/asset/4837247e-5ac9-480b-9fe4-b7652face1db.png', // Gond 3.1 — col1 row1 (textured)
    'https://www.figma.com/api/mcp/asset/d4753d33-d852-4698-a159-1a7d870a4ce5.png', // Gond 3.3 — col2 row1
    'https://www.figma.com/api/mcp/asset/f83db1ba-0e4b-4a7e-894c-7a64aff7e32e.png', // Gond 3.5 — col3 row1
    'https://www.figma.com/api/mcp/asset/5a58b92c-d7b8-48a1-9d16-0221503f432e.png', // Gond 3.2 — col1 row2 (textured)
    'https://www.figma.com/api/mcp/asset/695ac155-3e28-4b74-a4d1-c58cd3de6d46.png', // Gond 3.4 — col2 row2
    'https://www.figma.com/api/mcp/asset/e3d5f29e-3740-4b66-bef1-e20886274070.png', // Gond 3.6 — col3 row2
  ],
  bgTexture: 'https://www.figma.com/api/mcp/asset/282ee338-d066-493a-91c9-3c34c78192b6.png',
}

// "Social Media Aesthetics" — the four long-scroll phone mockups
export const scrollPhones = [
  { name: 'mykaa-scroll-1', image: 'https://www.figma.com/api/mcp/asset/91304ace-281d-47e9-bb82-ad986ebdcc22.png' },
  { name: 'mykaa-scroll-2', image: 'https://www.figma.com/api/mcp/asset/cd8ab044-0871-45d9-8870-b7743d2b7914.png' },
  { name: 'sky-scroll-1', image: 'https://www.figma.com/api/mcp/asset/0e86cf49-e4b9-430e-aa30-261f03bd6661.png' },
  { name: 'silver-scroll-1', image: 'https://www.figma.com/api/mcp/asset/f4f27145-b5bc-423f-a3e2-3019638305df.png' },
]

// Bottom cinematic showcase
export const cinematicShowcase = 'https://www.figma.com/api/mcp/asset/6ace9da7-785b-432d-afee-b1bf7e92de37.png'

// Icons
export const icons = {
  instagram: 'https://www.figma.com/api/mcp/asset/2fd53aab-5785-4fcb-ae65-077ee2b64385.svg',
  linkedin: 'https://www.figma.com/api/mcp/asset/764b72c5-f600-4a52-aeca-af88e1339140.svg',
  pinterest: 'https://www.figma.com/api/mcp/asset/4bba280d-1491-4403-93e9-dc5817bcda3d.svg',
  whatsapp: 'https://www.figma.com/api/mcp/asset/55f0f4d7-4638-4652-92e4-f2e6052b8430.svg',
  facebook: 'https://www.figma.com/api/mcp/asset/84e74955-38c0-4fdd-b36b-d732bb7c43ab.svg',
  handPointer: 'https://www.figma.com/api/mcp/asset/2b63f8a6-6427-4978-b06a-e818588ec287.svg',
  drawSquare: 'https://www.figma.com/api/mcp/asset/4689943c-3686-4b4e-bb11-09ab6810b5f0.svg',
  infinity: 'https://www.figma.com/api/mcp/asset/a1d90889-945a-4c99-ae85-fd04c7f0f265.svg',
}

/**
 * No verifiable real Instagram handle for "QPIC Media" could be found in the
 * Figma file's own data or via web search — this is a design-portfolio
 * project, not a business with a public social presence. Per the "don't use
 * a fake URL" instruction, this points at Instagram's own domain rather
 * than a made-up handle. Swap in the real @handle here once you have it.
 */
export const instagramUrl = 'https://www.instagram.com/'
