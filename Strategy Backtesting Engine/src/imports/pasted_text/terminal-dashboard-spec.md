
{ "summary": "A precision-focused 'Terminal' style dashboard with a dark #050505 base, utilizing a 1px grid system, monospaced data visualization, and monochromatic highlights. The layout prioritizes data density and legibility through a surgical application of whitespace and borders.", "style": { "description": "Dark mode monochromatic aesthetic with flat design principles. Typography pairs 'Satoshi' (sans-serif) for UI labels with 'JetBrains Mono' (monospaced) for numerical data and system status. Color palette: #050505 (Base), #0A0A0A (Panel), #1C1C1C (Borders), #F0F0F0 (Primary Text), #666666 (Muted Text). Features zero gradients, zero shadows, and strictly sharp 1px borders.", "prompt": "### Visual Language & Aesthetic\n- **Theme**: Monochromatic, High-Density Terminal/SaaS Dashboard.\n- **Colors**: \n - Background Base: `#050505` \n - Panel Background: `#0A0A0A` \n - Hover State: `#141414` \n - Border (Dimm): `#1C1C1C` \n - Border (Focus): `#333333` \n - Primary Text: `#F0F0F0` \n - Muted Text: `#666666` \n - Accent/Inversion: `#FFFFFF` (background) with `#000000` (text).\n\n### Typography\n- **Headings & UI**: 'Satoshi', sans-serif. Use `font-weight: 500` or `700` for hierarchy.\n- **Data & Numbers**: 'JetBrains Mono', monospace. Use for all price points, timestamps, and status logs. Font-size: `11px` to `13px`.\n- **Captions**: Use monospaced font, `10px`, uppercase, with `tracking-widest` (letter spacing) for a system-command look.\n\n### UI Elements\n- **Borders**: Strictly 1px solid `#1C1C1C`. No rounded corners (radius: 0px) on containers. \n- **Buttons**: \n - Secondary: Ghost style with 1px border, transitions to `#141414` on hover.\n - Primary: Solid `#FFFFFF` background with `#000000` text, bold, no radius.\n- **Animations**: \n - Pulse animation for status indicators: `opacity` 1 to 0.4.\n - Transitions: `150ms ease-in-out` for hover states.\n- **Scrollbar**: Width `6px`. Track: `#050505`. Thumb: `#333333` (no radius)." }, "layout_and_structure": { "description": "A fixed sidebar layout with a multi-pane content area. The main workspace uses a 1px border grid to separate metrics, interactive charts, and data tables.", "prompts": [ { "part": "Sidebar Navigation", "prompt": "Width: 220px. Background: `#0A0A0A`. Right border: 1px `#1C1C1C`. \n- Top section: Logo/Brand name in monospace uppercase with a 12px white square icon.\n- Navigation items: 13px font size, vertical list, 1.5 padding. Active state uses `#141414` background.\n- Footer section: System status logs (Latency, Status) in 11px monospaced text with a pulsing white dot indicator." }, { "part": "Top Header Bar", "prompt": "Height: 48px. Background: `#0A0A0A`. Bottom border: 1px `#1C1C1C`. \n- Left side: Breadcrumb navigation in 12px monospace (e.g., WORKSPACE / ANALYTICS).\n- Right side: Command-style search bar (input field) with 1px border, 11px font, and placeholder 'CMD+K to search...'. Includes a gear icon for settings." }, { "part": "Metrics Grid", "prompt": "Four-column horizontal layout. \n- Each cell: 1px border, `#0A0A0A` background.\n- Header: 10px uppercase monospaced text, tracking-widest.\n- Value: 24px 'JetBrains Mono' font, tracking-tight.\n- Footer: 11px mono text showing percentage change, separated by a top border 1px `#1C1C1C`." }, { "part": "Performance Chart Area", "prompt": "Layout: 2/3 width. \n- Header: 48px height with time-period selectors (1H, 1D, 1M, etc.). The active selector is solid white with black text.\n- Visuals: Surgical SVG line graph (no area fill, just stroke-width: 1.5 white line). \n- Grid Lines: Horizontal lines using `stroke-dasharray='2 4'` at 25% intervals.\n- Crosshair: A thin vertical and horizontal dashed line following the cursor, with a price tag floating at the intersection." }, { "part": "Data Tables (Watchlist & Positions)", "prompt": "Full width or 1/3 split. \n- `border-collapse: collapse`.\n- Table Headers: 10px monospace, muted color, uppercase, 12px padding.\n- Rows: 1px bottom border, transitions to background `#141414` on hover.\n- Numbers: Right-aligned 'JetBrains Mono' for vertical digit alignment.\n- Custom Pills: Small status badges (e.g., 'LONG 5x') with 1px border and transparent background." } ] }, "special_ui_components": [ { "component": "Surgical Polyline Chart", "description": "A performance graph that avoids all 'friendly' visual cues like curves or gradients.", "prompt": "Create an SVG-based line chart where the line is a single white stroke (`#FFFFFF`, width 1.5px). Disable anti-aliasing if possible or use `vector-effect='non-scaling-stroke'`. Background grid must be 1px dashed `#1C1C1C`. Y-axis labels must be 10px mono, left-aligned, showing financial increments (e.g., 2.5M)." }, { "component": "Command Search Input", "description": "Technical search bar designed for keyboard-first users.", "prompt": "Width: 256px. Background: `#050505`. Border: 1px `#1C1C1C`. Padding: 4px horizontal, 28px left (for icon). Font: 11px JetBrains Mono. On focus, the border color changes to `#FFFFFF`. Use a Lucide-style search icon at 12px size." } ] }

Build a single, self-contained HTML file: a full-viewport space-themed hero section
for a site called "SpaceEdu". No build step, no frameworks, no external JS. All CSS in
one <style> block in <head>, all JS in one <script> block before </body>. It must be
pixel-faithful to the spec below and fully mobile responsive.

════════════════════════════════════════════════════════════════════════
1. CONCEPT
════════════════════════════════════════════════════════════════════════
A cinematic hero. A looping video of a single planet fills the whole viewport as the
background. Centred over it: eyebrow "PLANET", a huge serif planet name, a short cyan
rule, a paragraph, and a glossy white pill button. Flanking the button, cropped by the
left and right screen edges, sit two transparent planet cut-outs with serif labels.

Three planets exist: EARTH, VENUS, MARS. Exactly one is "featured" (its clip is the
background, its name is the headline). The other two occupy the left and right slots.
Clicking a side planet makes it featured; the two slots then re-fill with the other
two. Earth is featured on load. The rotation is fully reversible.

════════════════════════════════════════════════════════════════════════
2. ASSETS — use these exact URLs
════════════════════════════════════════════════════════════════════════
Background clips (10s, 16:9, 1276x720, silent, loop):
  EARTH https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260827_202422_3ffb4889-c520-432d-8458-038009eb40df.mp4
  VENUS https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260827_202422_b211cd74-013b-4dd3-bfd0-64491d8696fa.mp4
  MARS  https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260827_202422_51eae59a-2459-4c84-907c-cc5edfe5fea7.mp4

Poster / still for each clip (also used as the .sky background-image fallback):
  EARTH https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260827_202133_508c64b8-a31e-4290-bdfc-1187df70e0a6.png
  VENUS https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260827_202133_cf55d1d8-7b59-4a64-80da-d72052ae974e.png
  MARS  https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260827_202133_0ba6de7c-285d-43dc-b7ab-8c54c73707cb.png

Transparent planet cut-outs, 2048x2048 PNG with alpha (the side-slot artwork):
  EARTH https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260827_202005_3346cc4d-ec3b-44ab-825c-b18e49f5021a.png
  VENUS https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260827_202012_640b239a-d08a-4200-adb2-741bbe129ac8.png
  MARS  https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260827_202018_3d559490-f613-4ed7-a3bb-3b7e9fc90fb8.png

Favicon: use the Earth cut-out URL above, type image/png.

════════════════════════════════════════════════════════════════════════
3. FONTS — load from Google Fonts
════════════════════════════════════════════════════════════════════════
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
Load: Prata 400; Hanken Grotesk 400,500,600,700; Poppins 500,600.
Stacks:
  --font-serif : 'Prata', Georgia, serif
  --font-body  : 'Hanken Grotesk', system-ui, -apple-system, 'Segoe UI', sans-serif
  --font-logo  : 'Poppins', sans-serif
Body text uses --font-body. Headline and the two planet labels use --font-serif.
The wordmark uses --font-logo.

════════════════════════════════════════════════════════════════════════
4. DESIGN SYSTEM — the single most important rule
════════════════════════════════════════════════════════════════════════
The layout is NOT built from rem/%/flex guesswork. It is a fixed composition measured
from a 1353 x 1163 reference, expressed in ONE custom property --u = one design pixel.
EVERY length in the file is calc(N * var(--u)). Do not substitute px values.

*, *::before, *::after { box-sizing:border-box; margin:0; padding:0 }

:root{
  --dw:1353; --dh:1163; --gutter:25;
  --u:max(min(.72px, calc(100vh / 700)), min(calc(100vw / 1353), calc(100vh / 1163)));
  --dh-px:calc(1163 * var(--u));
  --vshift:calc(max(0px, (100vh - var(--dh-px))) * .42);
  --ink:#ffffff; --cyan:#79dce8; --cyan-logo:#5fd0e1;
  --rule:rgba(255,255,255,.23); --btn-ink:#071227;
}
@supports (height:100dvh){
  :root{
    --u:max(min(.72px, calc(100dvh / 700)), min(calc(100vw / 1353), calc(100dvh / 1163)));
    --vshift:calc(max(0px, (100dvh - var(--dh-px))) * .42);
  }
}
html,body{height:100%}
body{background:#04101f; color:var(--ink); font-family:var(--font-body);
  -webkit-font-smoothing:antialiased; -moz-osx-font-smoothing:grayscale;
  text-rendering:geometricPrecision; overflow:hidden}

--vshift pushes everything below the nav down on taller-than-design viewports so the
composition stays balanced. --gutter offsets the content column left by half its value
so the optical centre sits at x=664, not 676.

════════════════════════════════════════════════════════════════════════
5. MARKUP
════════════════════════════════════════════════════════════════════════
<div class="stage">                     position:fixed; inset:0; overflow:hidden;
                                        isolation:isolate
  <div class="sky">                     absolute; inset:0; z-index:0;
                                        background-image:url(EARTH STILL);
                                        background-size:cover; background-position:center;
                                        background-repeat:no-repeat
    3 x <video data-planet="earth|venus|mars">
        Earth:  class="is-active" autoplay muted loop playsinline preload="auto"
                src=EARTH CLIP  poster=EARTH STILL  aria-hidden="true"
        Venus & Mars: muted loop playsinline preload="none"
                data-src=CLIP (NOT src)  poster=STILL  aria-hidden="true"
  </div>
  <div class="ui">                      absolute; inset:0; z-index:3
    <header class="navbar">
      <div class="navrow">
        <a class="logo" href="#">space<i>edu</i></a>
        <nav class="links" id="site-nav">
          <a href="#" aria-current="page">Planets</a>
          <a href="#">Tution</a>            (keep this spelling)
          <a href="#">Tutorials</a>
          <a href="#">Blog</a>
          <a class="enroll" href="#">Enroll</a>
        </nav>
        <button class="burger" type="button" aria-label="Open navigation"
                aria-expanded="false" aria-controls="site-nav">
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
    <div class="copy">
      <div class="col eyebrow"><span class="ent-mask"><span class="ent-line">PLANET</span></span></div>
      <h1 class="col title"><span class="ent-mask"><span class="ent-line">EARTH</span></span></h1>
      <div class="col rule"><span></span></div>
      <p class="col lede">Learn more about the fascinating details that we call our home,
         Planet Earth. Course enrollment <br>starts today. Early Bird tickets typically
         last a week, don&rsquo;t miss out!</p>
      <div class="col cta">
        <button class="planet planet-l" type="button" data-slot="l">
          3 x <img data-planet="earth|venus|mars" alt="" src="CUTOUT URL">
        </button>
        <button class="planet planet-r" type="button" data-slot="r">
          3 x <img data-planet="earth|venus|mars" alt="" src="CUTOUT URL">
        </button>
        <a href="#">GET STARTED</a>
        <span class="label label-l"></span>     (empty — filled by script)
        <span class="label label-r"></span>
      </div>
    </div>
  </div>
  <button class="scroll" type="button" aria-label="Scroll to next section">
    <svg viewBox="0 0 26 33" fill="none" aria-hidden="true">
      <path d="M13 1.5 V31.5 M1.9 20.4 L13 31.5 L24.1 20.4" stroke="#ffffff"
            stroke-width="3" stroke-linecap="square" stroke-linejoin="miter"/>
    </svg>
  </button>
</div>

CRITICAL: all three cut-outs are present in BOTH slots as sibling <img> tags. Switching
reveals one with a class — it must never reassign img.src, or the browser keeps painting
the old planet until the new 2048px file downloads.

════════════════════════════════════════════════════════════════════════
6. CSS — exact values
════════════════════════════════════════════════════════════════════════
BACKDROP
.sky video{position:absolute; inset:0; width:100%; height:100%; object-fit:cover;
  display:block; opacity:0; transition:opacity .22s linear}
.sky video.is-active{opacity:1}
@media (prefers-reduced-motion:reduce){ .sky video{display:none} }

SIDE PLANET SLOTS (two slots, not two planets)
.planet{position:absolute; z-index:-1; padding:0; border:0; background:none;
  -webkit-appearance:none; appearance:none; line-height:0; cursor:pointer;
  pointer-events:auto;                      /* .copy disables pointers wholesale */
  transition:transform .45s cubic-bezier(.22,1,.36,1)}
.planet img{display:none; width:100%; height:auto}
.planet img.is-shown{display:block}
.planet:hover{transform:scale(1.045)}
.planet:active{transform:scale(.99)}
.planet-l{width:calc(143 * var(--u)); left:calc(-69.5 * var(--u)); top:calc(-38.3 * var(--u))}
.planet-r{width:calc(143 * var(--u)); right:calc(-64.7 * var(--u)); top:calc(-40.6 * var(--u))}
@media (prefers-reduced-motion:reduce){
  .planet{transition:none} .planet:hover,.planet:active{transform:none} }
(The cut-outs fill ~97% of their square canvas; these box sizes make the rendered
 sphere 139u across with its centre 2u from the left edge / 6.8u from the right.)

LAYOUT
.copy{position:absolute; inset:0; transform:translateY(var(--vshift)); pointer-events:none}
.copy a{pointer-events:auto}
.col{position:absolute; left:0; right:calc(var(--gutter) * var(--u)); text-align:center}

NAV
.navbar{position:absolute; top:0; left:0; right:0; z-index:6; height:calc(88 * var(--u))}
.navbar::after{content:""; position:absolute; left:calc(25 * var(--u));
  right:calc(49 * var(--u)); top:calc(86 * var(--u)); height:calc(2 * var(--u));
  background:var(--rule)}
.navrow{position:absolute; left:calc(25 * var(--u)); right:calc(49 * var(--u)); top:0;
  height:calc(86 * var(--u)); display:flex; align-items:center; justify-content:space-between}
.logo{font-family:var(--font-logo); font-weight:600; font-size:calc(18.4 * var(--u));
  letter-spacing:calc(-0.15 * var(--u)); line-height:1; color:#fff; text-decoration:none;
  white-space:nowrap; position:relative; top:calc(-1 * var(--u))}
.logo i{font-style:normal; color:var(--cyan-logo)}
.burger{display:none; position:relative; width:calc(46 * var(--u)); height:calc(46 * var(--u));
  padding:0; border:0; background:none; cursor:pointer; flex-direction:column;
  align-items:center; justify-content:center; gap:calc(6 * var(--u)); flex:none}
.burger span{display:block; width:calc(24 * var(--u)); height:calc(2 * var(--u));
  border-radius:calc(2 * var(--u)); background:#fff;
  transition:transform .28s cubic-bezier(.4,0,.2,1), opacity .18s linear}
.navrow[data-open="true"] .burger span:nth-child(1){transform:translateY(calc(8 * var(--u))) rotate(45deg)}
.navrow[data-open="true"] .burger span:nth-child(2){opacity:0}
.navrow[data-open="true"] .burger span:nth-child(3){transform:translateY(calc(-8 * var(--u))) rotate(-45deg)}
.links{display:flex; align-items:center}
.links a{position:relative; display:flex; align-items:center; height:calc(86 * var(--u));
  font-size:calc(18.4 * var(--u)); font-weight:400; line-height:1; color:#fff;
  text-decoration:none; padding:0 calc(17.5 * var(--u));
  letter-spacing:calc(-1 * var(--u)); white-space:nowrap}
.links a[aria-current="page"]::after{content:""; position:absolute; left:0; right:0;
  top:calc(83.5 * var(--u)); height:calc(4 * var(--u)); background:var(--cyan);
  border-radius:calc(1 * var(--u))}
.links a:nth-child(3){letter-spacing:calc(-1.75 * var(--u))}
.links a:nth-child(2){margin-left:calc(24 * var(--u))}
.links a:nth-child(3){margin-left:calc(26 * var(--u))}
.links a:nth-child(4){margin-left:calc(27 * var(--u))}
.links a.enroll{margin-left:calc(28.5 * var(--u)); width:calc(107 * var(--u));
  height:calc(38 * var(--u)); border-radius:calc(19 * var(--u)); display:flex;
  align-items:center; justify-content:center; font-size:calc(17 * var(--u));
  font-weight:600; letter-spacing:calc(-0.75 * var(--u)); line-height:1;
  color:var(--btn-ink); text-decoration:none; padding-top:calc(2 * var(--u));
  background:linear-gradient(180deg,#ffffff 0%,#d8ecfe 9%,#dceefe 72%,#f4f9ff 100%);
  box-shadow:0 calc(3 * var(--u)) calc(14 * var(--u)) rgba(255,255,255,.22),
             inset 0 0 0 calc(1.5 * var(--u)) rgba(255,255,255,.92);
  flex:none}

HERO COPY
.eyebrow{top:calc(188.8 * var(--u)); font-size:calc(30.45 * var(--u)); font-weight:500;
  line-height:1; letter-spacing:calc(4 * var(--u)); text-indent:calc(4 * var(--u)); color:#fff}
h1.title{top:calc(268 * var(--u)); font-family:var(--font-serif); font-weight:400;
  font-size:calc(112.4 * var(--u)); line-height:1; letter-spacing:calc(2 * var(--u));
  text-indent:calc(2 * var(--u)); color:#fff}
.rule{top:calc(405.5 * var(--u)); height:calc(5 * var(--u)); font-size:0; line-height:0;
  padding-right:calc(2 * var(--u))}
.rule span{display:inline-block; vertical-align:top; width:calc(100 * var(--u));
  height:100%; border-radius:calc(2.5 * var(--u)); background:var(--cyan)}
p.lede{top:calc(433.2 * var(--u)); font-size:calc(18.36 * var(--u)); font-weight:400;
  line-height:calc(30 * var(--u)); color:rgba(255,255,255,.95)}

CTA ROW
.cta{top:calc(597 * var(--u)); height:calc(66 * var(--u)); isolation:isolate}
.cta a{display:inline-flex; align-items:center; justify-content:center;
  width:calc(216 * var(--u)); height:calc(66 * var(--u)); border-radius:calc(33 * var(--u));
  font-size:calc(17 * var(--u)); font-weight:700; letter-spacing:0; text-indent:0;
  line-height:1; color:var(--btn-ink); text-decoration:none; padding-top:calc(2 * var(--u));
  background:linear-gradient(180deg,#ffffff 0%,#d6e8f8 4%,#d9ecfe 72%,#ffffff 100%);
  box-shadow:0 calc(10 * var(--u)) calc(18 * var(--u)) calc(-8 * var(--u)) rgba(255,255,255,.50),
             0 0 calc(26 * var(--u)) rgba(255,255,255,.18),
             inset 0 0 0 calc(2 * var(--u)) rgba(255,255,255,.9)}
.label{position:absolute; top:calc(33 * var(--u)); font-family:var(--font-serif);
  font-weight:400; font-size:calc(17.8 * var(--u)); letter-spacing:calc(4.6 * var(--u));
  line-height:1; color:#fff; white-space:nowrap}
.label.label-l{left:calc(111 * var(--u))}
.label.label-r{right:calc(104 * var(--u))}

SCROLL CONTROL
.scroll{position:absolute; z-index:4; left:50%;
  margin-left:calc((-48 - (var(--gutter) / 2)) * var(--u)); bottom:calc(68 * var(--u));
  width:calc(96 * var(--u)); height:calc(96 * var(--u)); border-radius:50%;
  background:rgba(24,30,42,.70); -webkit-backdrop-filter:blur(calc(6 * var(--u)));
  backdrop-filter:blur(calc(6 * var(--u))); border:0; display:flex; align-items:center;
  justify-content:center; cursor:pointer}
.scroll svg{width:calc(20 * var(--u)); height:calc(25 * var(--u)); display:block}

FOCUS
.scroll:focus-visible,.links a:focus-visible,.enroll:focus-visible,
.cta a:focus-visible,.logo:focus-visible{
  outline:calc(2 * var(--u)) solid var(--cyan); outline-offset:calc(3 * var(--u))}
.planet:focus-visible{outline:calc(2 * var(--u)) solid var(--cyan);
  outline-offset:calc(6 * var(--u)); border-radius:50%}

════════════════════════════════════════════════════════════════════════
7. RESPONSIVE — six tiers, in this exact source order
════════════════════════════════════════════════════════════════════════
A) NAV COLLAPSE  @media (max-width:1030px), (max-height:620px)
Threshold is derived: below ~1030px the desktop labels fall under ~14px with sub-40px
touch targets. The SAME <a> elements re-compose into a panel — never duplicate markup.
  .navrow{left:calc(25 * var(--u)); right:calc(25 * var(--u))}
  .burger{display:flex}
  .links{position:absolute; top:calc(96 * var(--u)); right:0; z-index:5;
    width:min(calc(324 * var(--u)), calc(100vw - 50 * var(--u)));
    flex-direction:column; align-items:stretch; padding:calc(12 * var(--u));
    border-radius:calc(20 * var(--u)); background:rgba(9,21,42,.84);
    backdrop-filter:blur(calc(18 * var(--u)));
    border:calc(1 * var(--u)) solid rgba(255,255,255,.14);
    box-shadow:0 calc(18 * var(--u)) calc(44 * var(--u)) rgba(2,8,20,.55);
    opacity:0; visibility:hidden; transform:translateY(calc(-10 * var(--u)));
    transition:opacity .24s ease, transform .28s cubic-bezier(.4,0,.2,1), visibility .28s}
  .navrow[data-open="true"] .links{opacity:1; visibility:visible; transform:none}
  .links a:nth-child(n){margin-left:0; height:auto; justify-content:flex-start;
    padding:calc(14 * var(--u)) calc(16 * var(--u)); font-size:calc(19 * var(--u));
    letter-spacing:calc(-.6 * var(--u))}
  .links a + a{border-top:calc(1 * var(--u)) solid rgba(255,255,255,.08)}
  .links a[aria-current="page"]::after{top:auto; bottom:calc(9 * var(--u));
    left:calc(16 * var(--u)); right:auto; width:calc(26 * var(--u)); height:calc(3 * var(--u))}
  .links a.enroll{margin:calc(14 * var(--u)) 0 calc(2 * var(--u)); width:100%;
    height:calc(46 * var(--u)); border-radius:calc(23 * var(--u)); justify-content:center;
    padding-top:calc(2 * var(--u)); font-size:calc(18 * var(--u));
    letter-spacing:calc(-.4 * var(--u)); border-top:0}
  .links a.enroll::after{content:none}

B) TABLET  @media (min-width:580px) and (max-width:1030px) and (min-height:621px)
The hero is a centred symmetric composition — it is re-proportioned, NOT stacked. The
flanking planet / button / planet row is the section's signature and must survive.
  :root{--gutter:0;
    --u:min(max(min(.85px, calc(100vh / 780)), min(calc(100vw / 900), calc(100vh / 1163))), 1.15px);
    --dh-px:calc(1120 * var(--u));
    --vshift:calc(max(0px, (100vh - var(--dh-px))) * .38)}
  (repeat inside @supports (height:100dvh) with 100dvh)
  .navbar::after{left:calc(25 * var(--u)); right:calc(25 * var(--u))}
  p.lede br{display:none}
  p.lede{max-width:calc(620 * var(--u)); margin-left:auto; margin-right:auto; text-wrap:pretty}
  .label.label-r{right:calc(116 * var(--u))}

C) PHONE  @media (max-width:579px), (max-height:620px)
Below the nav the interface FLOWS (flex column) instead of being absolutely pinned, so
it adapts to however many lines the copy wraps onto.
  :root{--gutter:0;
    --u:max(min(.92px, calc(100vh / 620)), min(calc(100vw / 430), calc(100vh / 880)));
    --dh-px:calc(880 * var(--u));
    --vshift:calc(max(0px, (100vh - var(--dh-px))) * .34)}
  (repeat inside @supports (height:100dvh))
  .navbar{height:calc(76 * var(--u))}
  .navbar::after{left:calc(24 * var(--u)); right:calc(24 * var(--u)); top:calc(74 * var(--u))}
  .navrow{left:calc(24 * var(--u)); right:calc(24 * var(--u)); height:calc(74 * var(--u))}
  .links{top:calc(84 * var(--u))}
  .copy{top:calc(76 * var(--u)); display:flex; flex-direction:column; align-items:center;
    padding:calc(56 * var(--u)) calc(26 * var(--u)) 0}
  .col{position:static; width:100%; right:auto}
  .eyebrow{font-size:calc(20 * var(--u)); letter-spacing:calc(5 * var(--u)); text-indent:calc(5 * var(--u))}
  h1.title{font-size:calc(86 * var(--u)); margin-top:calc(15 * var(--u))}
  .rule{margin-top:calc(20 * var(--u)); height:calc(5 * var(--u)); padding-right:0}
  .rule span{width:calc(84 * var(--u))}
  p.lede{margin-top:calc(19 * var(--u)); font-size:calc(15.5 * var(--u));
    line-height:calc(26 * var(--u)); max-width:calc(400 * var(--u)); text-wrap:balance}
  p.lede br{display:none}
  .cta{top:auto; margin-top:calc(32 * var(--u)); height:calc(60 * var(--u)); position:relative}
  .cta a{width:calc(190 * var(--u)); height:calc(60 * var(--u)); border-radius:calc(30 * var(--u))}
  .label{top:50%; transform:translateY(-50%); font-size:calc(16 * var(--u));
    letter-spacing:calc(4 * var(--u))}
  .label.label-l{left:calc(56 * var(--u))}
  .label.label-r{right:calc(60 * var(--u))}
  .planet-l{width:calc(89 * var(--u)); left:calc(-44.5 * var(--u)); top:calc(-17 * var(--u))}
  .planet-r{width:calc(89 * var(--u)); right:calc(-44.5 * var(--u)); top:calc(-18.3 * var(--u))}
  .scroll{width:calc(74 * var(--u)); height:calc(74 * var(--u));
    margin-left:calc(-37 * var(--u)); bottom:calc(49 * var(--u))}
  .scroll svg{width:calc(15.5 * var(--u)); height:calc(19.5 * var(--u))}

D) @media (max-height:660px){ .scroll{display:none} }   /* no room for it */

E) SHORT  @media (max-height:620px)
  :root{--u:max(min(.85px, calc(100vh / 470)), min(calc(100vw / 640), calc(100vh / 560)));
    --dh-px:calc(560 * var(--u)); --vshift:0px}
  .copy{padding-top:calc(26 * var(--u))}
  h1.title{font-size:calc(64 * var(--u)); margin-top:calc(8 * var(--u))}
  .rule{margin-top:calc(12 * var(--u))}
  p.lede{margin-top:calc(12 * var(--u))}
  .cta{margin-top:calc(20 * var(--u))}
  .label{top:50%; transform:translateY(-50%); font-size:calc(15 * var(--u))}
  .label.label-l{left:calc(58 * var(--u))}
  .label.label-r{right:calc(58 * var(--u))}
@media (min-width:821px) and (max-height:660px){ .copy{transform:none} }

F) NARROW PHONE  @media (max-width:500px)   — declared LAST so it wins inside tier E
Below ~500px the label / button / label triad can no longer share a line, so the two
labels drop to their own band beneath the button, still left- and right-anchored.
  .label{top:calc(100% + 34 * var(--u)); transform:none; font-size:calc(15 * var(--u))}
  .label.label-l{left:calc(6 * var(--u))}
  .label.label-r{right:calc(6 * var(--u))}

@media (prefers-reduced-motion:reduce){ .links,.burger span{transition:none} }

════════════════════════════════════════════════════════════════════════
8. ENTRANCE ANIMATION — runs once, then deletes itself
════════════════════════════════════════════════════════════════════════
Motion language: DRAW hairlines scale from centre · REVEAL type rises out of a mask ·
RISE copy lifts a short distance · SETTLE pills arrive with a small scale resolve ·
FADE the full-bleed backdrop resolves in (it fades, never translates — a translate
would drag a bare edge into frame).

In <head>, BEFORE the stylesheet, a blocking inline script so the opening frame is
composed rather than flashing the finished page:
  (function(){try{
    if(!window.matchMedia||!matchMedia('(prefers-reduced-motion: reduce)').matches){
      document.documentElement.classList.add('anim');
    }
  }catch(e){}})();

@keyframes ent-reveal{from{transform:translateY(115%)}to{transform:translateY(0)}}
@keyframes ent-rise{from{opacity:0;transform:translateY(var(--rise,10px))}to{opacity:1;transform:none}}
@keyframes ent-settle{from{opacity:0;transform:translateY(var(--rise,8px)) scale(.965)}to{opacity:1;transform:none}}
@keyframes ent-draw{from{transform:scaleX(0)}to{transform:scaleX(1)}}
@keyframes ent-fade{from{opacity:0}to{opacity:1}}

.anim{--e-expo:cubic-bezier(.16,1,.3,1); --e-quint:cubic-bezier(.22,1,.36,1);
      --e-slow:cubic-bezier(.4,0,.2,1)}
.ent-mask,.ent-line{display:block}
.anim .ent-mask{overflow:hidden; padding-top:.18em; margin-top:-.18em}
.anim .ent-line{transform:translateY(115%); will-change:transform}
.anim .navbar::after,.anim .links a[aria-current="page"]::after,.anim .rule span{transform:scaleX(0)}
.anim .logo,.anim .links a,.anim .burger,.anim p.lede,.anim .label,.anim .cta a,
.anim .scroll,.anim .sky{opacity:0}
.anim .sky{will-change:opacity}

Sequence (all `both` fill):
  .anim.play .sky                               ent-fade   1.6s  --e-slow   .25s
  .anim.play .navbar::after                     ent-draw    .9s  --e-expo   .12s
  .anim.play .logo              --rise 8u       ent-rise    .6s  --e-quint  .20s
  .anim.play .links a           --rise 8u       ent-rise   .55s  --e-quint
    nth-child(1) .26s · (2) .31s · (3) .36s · (4) .41s
  .anim.play .links a.enroll, .burger  --rise 8u  ent-settle .6s --e-quint  .46s
  .anim.play .links a[aria-current]::after      ent-draw   .55s  --e-expo   .60s
  .anim.play .eyebrow .ent-line                 ent-reveal .75s  --e-expo   .30s
  .anim.play h1.title .ent-line                 ent-reveal .95s  --e-expo   .44s
  .anim.play .rule span                         ent-draw   .65s  --e-expo   .78s
  .anim.play p.lede             --rise 12u      ent-rise    .7s  --e-quint  .86s
  .anim.play .label.label-l     --rise 8u       ent-rise    .6s  --e-quint 1.04s
  .anim.play .label.label-r     --rise 8u       ent-rise    .6s  --e-quint 1.10s
  .anim.play .cta a             --rise 8u       ent-settle  .7s  --e-quint 1.14s
  .anim.play .scroll                            ent-settle  .6s  --e-quint 1.42s

Driver script: if <html> lacks .anim, return. Otherwise wait for document.fonts.ready
(with a 500ms guard timeout so a font stall cannot block the page), then two nested
requestAnimationFrame calls, then add .play. After 2150ms remove BOTH .anim and .play,
leaving the page in its authored static state with no timers or residual transforms.

════════════════════════════════════════════════════════════════════════
9. PLANET SWITCHER — JS behaviour
════════════════════════════════════════════════════════════════════════
const ORDER = ['earth','venus','mars'];
Per planet store: name (uppercase), cut-out URL, still URL, and lede HTML:
  earth: "Learn more about the fascinating details that we call our home, Planet Earth.
          Course enrollment <br>starts today. Early Bird tickets typically last a week,
          don&rsquo;t miss out!"
  venus: "The hottest world in our solar system, wrapped in clouds of sulfuric acid.
          Course enrollment <br>starts today. Early Bird tickets typically last a week,
          don&rsquo;t miss out!"
  mars:  "The rust-red desert world, home to the tallest volcano we know of. Course
          enrollment <br>starts today. Early Bird tickets typically last a week,
          don&rsquo;t miss out!"

show(next):
  1. bail if unknown or already featured
  2. for each clip: if it is `next` and has no src but has data-src, assign src from
     data-src (first-use fetch). Toggle .is-active on the matching clip; .play() it
     (catch the rejected promise); .pause() every other clip.
  3. set .sky background-image to that planet's still — keeps reduced-motion users,
     who never see the clip, on the correct planet
  4. set the h1's .ent-line textContent to the planet name
  5. set p.lede innerHTML to that planet's lede
  6. rest = ORDER minus `next`; slot L gets rest[0], slot R gets rest[1]. For each slot:
     toggle .is-shown on the img whose data-planet matches — DO NOT touch img.src —
     set the button's data-planet, set aria-label "Show <NAME>", set the label text.

warm(planet): if that clip has no src but has data-src, set preload='auto', assign
src, call load(). Bind it to pointerenter AND focus on both buttons so the fetch starts
on intent rather than on click. After first paint, requestIdleCallback(warm all,
{timeout:4000}) — fall back to setTimeout 2500ms — to pull the remaining clips down.

Bind click on both buttons -> show(this.dataset.planet). Call show('earth') once at the
end of setup to establish the initial state.

════════════════════════════════════════════════════════════════════════
10. BURGER MENU — JS behaviour
════════════════════════════════════════════════════════════════════════
set(open) writes navrow.dataset.open, the button's aria-expanded, and its aria-label
("Open navigation" / "Close navigation"). Initialise with set(false). Toggle on button
click (stopPropagation). Close on: a document click outside the menu and button, Escape
(then return focus to the button), and any click on a link inside the menu.

════════════════════════════════════════════════════════════════════════
11. ACCESSIBILITY
════════════════════════════════════════════════════════════════════════
· Side planets are real <button type="button"> with a dynamic aria-label — keyboard
  operable, focus-visible ringed in --cyan.
· Videos are aria-hidden="true", muted, playsinline (required for iOS autoplay).
· Cut-out <img> tags carry alt="" — they are decorative; the labels carry the meaning.
· prefers-reduced-motion: no entrance sequence at all (the .anim class is never added),
  clips hidden in favour of the still, no planet hover/press transforms, no nav
  transitions.
· .copy spans the whole frame with pointer-events:none so it can never swallow nav
  clicks; only .copy a and .planet re-enable pointers.

════════════════════════════════════════════════════════════════════════
12. ACCEPTANCE CHECKS
════════════════════════════════════════════════════════════════════════
· Loads with EARTH featured, VENUS left, MARS right. Only the Earth clip has a src.
· Clicking a side planet swaps the visible cut-out in the SAME FRAME (measurable at
  <2ms) — no flash of the previous planet.
· Earth -> Venus -> Mars -> Earth returns to the exact initial state.
· Backdrop crossfades in .22s; headline, lede, both cut-outs and both labels all update
  together.
· body never scrolls horizontally at any width from 320px to 2560px.
· Entrance runs once; afterwards <html> carries neither .anim nor .play.
















Build a single, self-contained `index.html` — one file, no build step, no frameworks,
no external CSS or JS libraries. All CSS in one <style> in <head>. All JS in inline
<script> tags. The page is a full-viewport hero section with a looping video background.

============================================================
0. DOCUMENT
============================================================
<!DOCTYPE html>, <html lang="en">.
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Sellix — Cross-border finance</title>

============================================================
1. FONTS
============================================================
Typeface: Plus Jakarta Sans, weights 300, 400, 500, 600, 800.
Load from Google Fonts and alias the family to 'PJS' via @font-face, or link it
directly and use the family name in the stack. Use font-display: block (the entrance
animation waits on document.fonts.ready; a swap would play the headline reveal
against invisible text).

body font stack:
  'PJS', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
body also gets: -webkit-font-smoothing:antialiased; -moz-osx-font-smoothing:grayscale;
text-rendering:geometricPrecision; color:var(--ink).

============================================================
2. DESIGN SYSTEM — the reference-pixel unit
============================================================
The whole desktop layout is authored against a 1280 x 800 reference render and scales
proportionally. Define ONE unit and express every desktop measurement as a multiple
of it. Do not substitute rem/px on desktop.

:root{
  --u: min(calc(100vw / 1280), calc(100dvh / 760));

  --ink:        #ffffff;
  --ink-muted:  #ededed;
  --panel:      #181818;
  --white-btn:  #fdfdfd;
  --btn-ink:    #050505;
  --glass-fill: rgba(0,0,0,.78);
  --glass-line: rgba(255,255,255,.09);

  --dx: 8.5;    /* hero block optical offset, solved against the reference render */
  --dy: 13.1;
}
@supports not (height: 100dvh){
  :root{ --u: min(calc(100vw / 1280), calc(100vh / 760)); }
}

Global: *{box-sizing:border-box}
html,body{height:100%;margin:0;padding:0;overflow:hidden;background:#000}

============================================================
3. STRUCTURE
============================================================
<main class="hero">
  <div class="bg" role="img" aria-label="Stylised globe of Earth rendered as a purple
       dot matrix against a starfield, slowly rotating">
    <video class="bg-video is-active" id="bgVideoA" …>
    <video class="bg-video" id="bgVideoB" …>
  </div>
  <header class="nav"> logo, nav-links, nav-actions, burger </header>
  <nav class="menu" id="menu"> mobile panel </nav>
  <div class="hero-inner"> h1, .sub, .ctas </div>
</main>

.hero{position:relative;width:100vw;height:100dvh;overflow:hidden;background:#000}
@supports not (height: 100dvh){ .hero{height:100vh} }

============================================================
4. VIDEO BACKGROUND  (exact URLs — use these verbatim, do not localise)
============================================================
Video : https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260912_104036_bd6924f6-3c8e-417e-8465-6d03c8c2e9e6.mp4
Poster: https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/82e7eb75-c65f-490a-99b5-f3d1cad54200.webp

The clip is 1920x1080, 10.04s, silent: a violet dot-matrix Earth rotating slowly
right-to-left against a starfield, with a faceted wireframe lattice, pulsing light
arcs, an orbiting satellite and a breathing rim glow. Locked-off camera.

TWO <video> elements, both pointing at the same source, stacked in .bg. The clip's
last frame does NOT match its first, so a plain loop snaps a continent sideways every
ten seconds — the two copies cross-fade at the loop point to hide that.

Video A: class="bg-video is-active" id="bgVideoA" autoplay muted loop playsinline
         preload="auto" disablepictureinpicture aria-hidden="true" poster="…"
Video B: class="bg-video"           id="bgVideoB"         muted loop playsinline
         preload="auto" disablepictureinpicture aria-hidden="true" poster="…"
Each wraps a <source src="…" type="video/mp4">. (B has no autoplay.)

/* 1280:800 bleed box, always covering the viewport */
.bg{
  position:absolute;left:50%;top:50%;
  transform:translate(-50%,-50%);
  width:max(100vw, calc(100dvh * 1.6));
  height:max(62.5vw, 100dvh);
  background-color:#000;
}
@supports not (height: 100dvh){
  .bg{width:max(100vw, calc(100vh * 1.6));height:max(62.5vw, 100vh)}
}
.bg-video{
  position:absolute;inset:0;
  width:100%;height:100%;
  object-fit:cover;
  object-position:51% 8%;      /* framing inherited from the still it replaces */
  display:block;
  background-color:#000;
  pointer-events:none;
  opacity:0;
  transition:opacity .9s linear;
}
.bg-video.is-active{opacity:1}

============================================================
5. NAV  (desktop)
============================================================
.nav{position:absolute;top:0;left:0;right:0;height:calc(67 * var(--u));
     display:flex;align-items:center;
     padding-left:calc(24.5 * var(--u));padding-right:calc(50.7 * var(--u));z-index:3}

.logo — text "Sellix", <a href="#">
  font-weight:800;font-size:calc(26 * var(--u));letter-spacing:calc(0.45 * var(--u));
  transform:translateY(calc(-2.4 * var(--u)));line-height:1;color:var(--ink);
  text-decoration:none;white-space:nowrap;

.nav-links — <nav aria-label="Primary">, five <a>: Products, Pricing, Developers,
             Resources, Contact Sales
  position:absolute;left:50%;top:50%;
  transform:translate(-50%,-50%) translateX(calc(-23 * var(--u)));
  display:flex;align-items:center;gap:calc(24.3 * var(--u));white-space:nowrap;
  a: color:var(--ink-muted);text-decoration:none;font-size:calc(11.5 * var(--u));
     font-weight:500;letter-spacing:calc(-0.15 * var(--u));line-height:1;
     transition:color .18s ease;  hover -> #fff

.nav-actions{margin-left:auto;display:flex;align-items:center;gap:calc(6.8 * var(--u))}

.btn (shared): display:inline-flex;align-items:center;justify-content:center;
  font-family:inherit;text-decoration:none;white-space:nowrap;border:0;cursor:pointer;

.btn-login — "Login"
  height:calc(28 * var(--u));padding:0 calc(12.9 * var(--u));
  border-radius:calc(14 * var(--u));background:var(--panel);color:#e8e8e8;
  font-size:calc(11.5 * var(--u));font-weight:500;letter-spacing:calc(-0.15 * var(--u));
  transition:background .18s ease,color .18s ease;
  hover -> background:#232323;color:#fff

.btn-nav-start — "Get Started" + arrow
  height:calc(28 * var(--u));padding-left:calc(13.5 * var(--u));
  padding-right:calc(14.5 * var(--u));border-radius:calc(14 * var(--u));
  background:var(--white-btn);color:var(--btn-ink);font-size:calc(11.1 * var(--u));
  font-weight:500;letter-spacing:0;gap:calc(7 * var(--u));
  transition:background .18s ease;  hover -> #fff
  .arw{width:calc(11.5 * var(--u));height:calc(9.6 * var(--u))}

.burger — <button id="burger" aria-label="Open menu" aria-expanded="false"
          aria-controls="menu"><span></span></button>
  display:none (desktop);margin-left:auto;width:calc(40 * var(--u));
  height:calc(28 * var(--u));align-items:center;justify-content:center;
  background:var(--panel);border-radius:calc(14 * var(--u));border:0;cursor:pointer;padding:0;
  span{display:block;width:16px;height:1.5px;background:#ededed;border-radius:2px;position:relative}
  span::before,span::after{content:"";position:absolute;left:0;width:16px;height:1.5px;
    background:#ededed;border-radius:2px}
  span::before{top:-5px}  span::after{top:5px}

ARROW ICON (every "Get Started" / "Contact Sales"), inline SVG:
<svg class="arw" viewBox="0 0 12 10" fill="none" aria-hidden="true">
  <path d="M0.8 5h10M7.1 1.4 10.9 5l-3.8 3.6" stroke="currentColor"
        stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
.arw{flex:0 0 auto;display:block}

============================================================
6. HERO CONTENT
============================================================
.hero-inner{
  position:absolute;left:50%;top:50%;
  transform:translate(-50%,-50%) translate(calc(var(--dx) * var(--u)), calc(var(--dy) * var(--u)));
  width:max-content;text-align:center;z-index:2;
}

h1 — markup is two block lines, NOT a <br>, because the entrance masks each line:
  <h1><span class="ln"><span class="ln-i">Cross-border</span></span>
      <span class="ln"><span class="ln-i">finance</span></span></h1>
  .ln{display:block} .ln-i{display:block}
  h1{margin:0;font-weight:500;font-size:calc(89 * var(--u));
     line-height:calc(90 * var(--u));letter-spacing:calc(-1 * var(--u));color:var(--ink)}

.sub — <p class="sub">, exact copy with two <br>:
  "Accept payments, manage and custody your assets with ease,<br>
   enjoy seamless on/off-ramping between cryptocurrencies and fiat,<br>
   and explore integrated eCommerce solutions."
  margin:calc(16.1 * var(--u)) 0 0;font-weight:300;font-size:calc(17.4 * var(--u));
  line-height:calc(27 * var(--u));letter-spacing:calc(-0.30 * var(--u));color:#f6f6f6;

.ctas{margin-top:calc(21.8 * var(--u));display:flex;align-items:center;
      justify-content:center;transform:translateX(calc(-0.75 * var(--u)));
      gap:calc(7 * var(--u))}
  Two links: "Get Started" (.btn .btn-lg .btn-primary) and
             "Contact Sales" (.btn .btn-lg .btn-ghost), each with the arrow SVG.

.btn-lg{height:calc(39 * var(--u));border-radius:calc(19.5 * var(--u));
        font-size:calc(13.3 * var(--u));font-weight:500;
        letter-spacing:calc(-0.3 * var(--u));gap:calc(9 * var(--u))}
.btn-primary{background:var(--white-btn);color:var(--btn-ink);
  padding-left:calc(18.2 * var(--u));padding-right:calc(19.2 * var(--u));
  transition:background .18s ease,transform .18s ease}  hover -> #fff
.btn-ghost{background:var(--glass-fill);color:#d9d9d9;padding:0 calc(17.4 * var(--u));
  border:1px solid var(--glass-line);-webkit-backdrop-filter:blur(2px);
  backdrop-filter:blur(2px);transition:background .18s ease,border-color .18s ease}
  hover -> background:rgba(0,0,0,.66);border-color:rgba(255,255,255,.16)
.btn-lg .arw{width:calc(13 * var(--u));height:calc(10.8 * var(--u))}

FOCUS: a:focus-visible,button:focus-visible{outline:2px solid #a78bfa;
       outline-offset:3px;border-radius:99px}

============================================================
7. MOBILE MENU MARKUP
============================================================
<nav class="menu" id="menu" aria-label="Mobile"> with, in order:
  Products, Pricing, Developers, Resources, Contact Sales,
  <div class="divider"></div>, Login,
  <a class="m-start">Get Started + arrow</a>
.menu{display:none} at desktop.
@keyframes menuIn{from{opacity:0;transform:translateY(-6px) scale(.985)}to{opacity:1;transform:none}}

============================================================
8. BREAKPOINTS — derived from the design, not stock values
============================================================
--- TABLET: @media (max-width:1160px) ---
Rationale: at ~1155px the 11.5u nav label drops under 10.5px, the 13.3u CTA label
under 12px, the 28u pill under 25px, the 17.4u subtitle under 15.5px. Everything
holds at 1160.

:root{ --u: min(
    max(0.9px, min(calc(100vw / 1280), calc(100dvh / 760))),
    calc((100vw - 72px) / 575),
    calc(100dvh / 620)
  ); }
.nav{height:max(58px, calc(67 * var(--u)));
     padding-left:max(24px, calc(28 * var(--u)));
     padding-right:max(24px, calc(28 * var(--u)))}
.nav-links,.nav-actions{display:none}
.burger{display:flex;width:max(46px, calc(48 * var(--u)));
        height:max(38px, calc(34 * var(--u)));border-radius:999px}
.hero-inner{max-width:calc(100vw - 48px)}
.sub{font-size:max(16px, calc(17.4 * var(--u)));line-height:max(25px, calc(27 * var(--u)))}
.ctas{margin-top:max(26px, calc(21.8 * var(--u)));gap:max(10px, calc(7 * var(--u)))}
.btn-lg{height:max(44px, calc(39 * var(--u)));border-radius:max(22px, calc(19.5 * var(--u)));
        font-size:max(15px, calc(13.3 * var(--u)));gap:max(10px, calc(9 * var(--u)))}
.btn-primary{padding-left:max(21px, calc(18.2 * var(--u)));
             padding-right:max(22px, calc(19.2 * var(--u)))}
.btn-ghost{padding-left:max(20px, calc(17.4 * var(--u)));
           padding-right:max(21px, calc(18.4 * var(--u)))}
.btn-lg .arw{width:max(14px, calc(13 * var(--u)));height:max(11.6px, calc(10.8 * var(--u)))}
.menu{position:absolute;top:calc(max(58px, calc(67 * var(--u))) - 6px);
      right:max(24px, calc(28 * var(--u)));width:min(320px, calc(100vw - 48px));
      background:rgba(10,10,12,.86);-webkit-backdrop-filter:blur(22px);
      backdrop-filter:blur(22px);border:1px solid rgba(255,255,255,.09);
      border-radius:20px;padding:10px 8px 12px;flex-direction:column;
      box-shadow:0 24px 60px rgba(0,0,0,.55);transform-origin:top right;z-index:5}
.menu.open{display:flex;animation:menuIn .18s ease both}
.menu a{color:var(--ink-muted);text-decoration:none;font-size:15px;font-weight:500;
        letter-spacing:calc(-0.15 * var(--u));padding:12px 14px;border-radius:12px;
        transition:background .18s ease,color .18s ease}
.menu a:hover{background:rgba(255,255,255,.06);color:#fff}
.menu .divider{height:1px;background:rgba(255,255,255,.08);margin:8px 14px}
.menu .m-start{display:flex;align-items:center;justify-content:center;gap:9px;
  background:var(--white-btn);color:var(--btn-ink);margin:6px 8px 0;padding:13px 16px;
  border-radius:14px;font-weight:600}
.menu .m-start:hover{background:#fff;color:var(--btn-ink)}
.menu .m-start .arw{width:13px;height:11px}

--- MOBILE: @media (max-width:552px) ---
Rationale: running the tablet architecture down, the side margin falls under 24px at
~550px and the subtitle's 3-line composition collapses into ragged wrapping at ~535px.
The architectural change: the subtitle becomes a fluid measure instead of a fixed
3-line composition, and the headline is sized from available width so "Cross-border"
never breaks at its hyphen.

:root{--u:1px}
.nav{height:56px;padding:0 20px}
.logo{font-size:22px;letter-spacing:-.4px}
.burger{width:42px;height:36px}
.hero-inner{position:absolute;left:0;right:0;top:50%;width:auto;max-width:none;
            padding:0 20px;transform:translateY(-47%)}
h1{font-size:min(74px, calc((100vw - 44px) / 6.9));line-height:1.04;letter-spacing:-.02em}
   /* "Cross-border" ink is 6.46x the font size; 6.9 leaves headroom at every width */
.sub{margin-top:16px;font-size:clamp(15.5px, 4vw, 16.5px);line-height:1.6;
     letter-spacing:0;max-width:42ch;margin-left:auto;margin-right:auto}
.sub br{display:none}
.ctas{margin-top:24px;gap:10px;transform:none;flex-wrap:wrap}
.btn-lg{height:46px;border-radius:23px;font-size:15px;gap:9px}
.btn-primary{padding-left:20px;padding-right:21px}
.btn-ghost{padding-left:19px;padding-right:20px}
.btn-lg .arw{width:13px;height:11px}
.menu{top:50px;left:16px;right:16px;width:auto}
.menu a{font-size:15.5px;padding:13px 14px}
.menu .m-start{padding:14px 16px}

--- NARROW PHONES: @media (max-width:353px) ---
The CTA pair measures 314px and stops fitting inside the 40px side padding at 354px.
.ctas{flex-direction:column;align-items:center}
.btn-lg{width:min(100%,272px)}

--- SHORT LANDSCAPE: @media (max-width:552px) and (max-height:460px) ---
h1{font-size:min(44px, calc((100vw - 44px) / 6.9))}
.sub{margin-top:12px;font-size:15px;line-height:1.5}
.ctas{margin-top:18px}
.hero-inner{transform:translateY(-44%)}

============================================================
9. ENTRANCE SEQUENCE — runs once on first load, then detaches
============================================================
The background video is the stage and is NEVER animated. Only the foreground performs.
The whole apparatus removes itself when the last tween ends, leaving the static design.

Four behaviours only:
  A  masked line rise   h1 only — the signature move
  B  lift + focus       subtitle — blur settling to 0
  C  settle             pills and CTAs — rise + small scale
  D  quiet lift         logo, nav links — opacity + rise

Timeline (seconds from sequence start):
  0.12  headline line 1        1.05s
  0.22  headline line 2        1.05s
  0.46  logo                   0.62s
  0.54  nav links (+0.045 each) 0.55s
  0.58  subtitle               0.85s
  0.68  Login / burger         0.55s
  0.73  Get Started            0.55s
  0.90  CTA primary            0.70s
  0.97  CTA secondary          0.70s   <- last to finish, 1.67s

:root{
  --e-reveal: cubic-bezier(.16, 1, .3, 1);   /* long, graceful settle */
  --e-soft:   cubic-bezier(.25, .8, .3, 1);  /* supporting elements   */
}

/* resting state while fonts resolve — stage lit, cast offstage */
html.anim .ln{overflow:hidden;padding-top:.26em;margin-top:-.26em}
html.anim .ln-i{transform:translateY(100%)}
html.anim .logo, html.anim .nav-links a, html.anim .nav-actions .btn,
html.anim .burger, html.anim .sub, html.anim .ctas .btn{opacity:0}
(add will-change:transform,opacity to .ln-i,.logo,.nav-links a,.nav-actions .btn,.sub,.ctas .btn)

@keyframes lineRise{from{transform:translateY(100%)}to{transform:translateY(0)}}
@keyframes subIn{from{opacity:0;transform:translateY(calc(14 * var(--u)));filter:blur(4px)}
                 to{opacity:1;transform:none;filter:blur(0)}}
@keyframes subInFlat{from{opacity:0;transform:translateY(calc(12 * var(--u)))}
                     to{opacity:1;transform:none}}
@keyframes pillIn{from{opacity:0;transform:translateY(calc(8 * var(--u))) scale(.972)}
                  to{opacity:1;transform:none}}
@keyframes liftIn{from{opacity:0;transform:translateY(calc(9 * var(--u)))}
                  to{opacity:1;transform:none}}
/* the logo carries an authored -2.4u optical offset; the keyframes carry it through
   so the resting frame is bit-identical */
@keyframes logoIn{
  from{opacity:0;transform:translateY(calc(-2.4 * var(--u))) translateY(calc(9 * var(--u)))}
  to  {opacity:1;transform:translateY(calc(-2.4 * var(--u)))}}

html.anim.go .ln-i{animation:lineRise 1.05s var(--e-reveal) both}
html.anim.go .ln:nth-child(1) .ln-i{animation-delay:.12s}
html.anim.go .ln:nth-child(2) .ln-i{animation-delay:.22s}
html.anim.go .logo{animation:logoIn .62s var(--e-soft) .46s both}
html.anim.go .nav-links a{animation:liftIn .55s var(--e-soft) both}
html.anim.go .nav-links a:nth-child(1){animation-delay:.540s}
html.anim.go .nav-links a:nth-child(2){animation-delay:.585s}
html.anim.go .nav-links a:nth-child(3){animation-delay:.630s}
html.anim.go .nav-links a:nth-child(4){animation-delay:.675s}
html.anim.go .nav-links a:nth-child(5){animation-delay:.720s}
html.anim.go .sub{animation:subIn .85s var(--e-reveal) .58s both}
html.anim.go .btn-login{animation:pillIn .55s var(--e-soft) .68s both}
html.anim.go .burger{animation:pillIn .55s var(--e-soft) .68s both}
html.anim.go .btn-nav-start{animation:pillIn .55s var(--e-soft) .73s both}
html.anim.go .ctas .btn-primary{animation:pillIn .70s var(--e-reveal) .90s both}
html.anim.go .ctas .btn-ghost{animation:pillIn .70s var(--e-reveal) .97s both}

/* mobile: same language, restrained — drop the focus pull */
@media (max-width:552px){
  html.anim.go .sub{animation-name:subInFlat}
  html.anim.go .ln-i{animation-duration:.92s}
  html.anim.go .ctas .btn-primary{animation-delay:.84s}
  html.anim.go .ctas .btn-ghost{animation-delay:.90s}
}

/* reduced motion — belt and braces alongside the script's own opt-out */
@media (prefers-reduced-motion:reduce){
  html.anim .ln{overflow:visible;padding-top:0;margin-top:0}
  html.anim .ln-i{transform:none}
  html.anim .logo, html.anim .nav-links a, html.anim .nav-actions .btn,
  html.anim .burger, html.anim .sub, html.anim .ctas .btn{opacity:1}
}
@media (prefers-reduced-motion:reduce){*{transition:none!important;animation:none!important}}

============================================================
10. SCRIPTS — three inline blocks, in this order
============================================================
A) ENTRANCE — in <head>, immediately after </style>. Must arm synchronously so
   there is no flash of unanimated content.
   - Return immediately if matchMedia('(prefers-reduced-motion: reduce)').matches
     (no class set, no entrance rule matches, page renders as the finished design).
   - Add class 'anim' to documentElement synchronously.
   - boot(): setTimeout(start, 900) as a ceiling, and document.fonts.ready.then(start,start)
     so the reveal never plays against invisible text; fall back to start() if no
     fonts API. Wire boot on DOMContentLoaded if readyState === 'loading'.
   - start(): guard against re-entry, clear the boot timer, addEventListener
     ('animationend', onEnd, true), set a 2600ms safety timeout to clean(), add 'go'.
   - onEnd(e): if e.animationName === 'pillIn' && e.target.classList.contains('btn-ghost')
     -> clean()  (the secondary CTA is last on the timeline).
   - clean(): run once; clear the safety timer, remove the animationend listener,
     remove both 'anim' and 'go' so every entrance rule stops matching.

B) BURGER — at end of <body>, before the video script.
   - Grab #burger and #menu; bail if missing.
   - set(open): toggle 'open' on the menu, set aria-expanded, set aria-label to
     'Close menu' / 'Open menu'.
   - Burger click: stopPropagation, toggle.
   - Click inside the menu on an <a>: close.
   - Document click outside both menu and burger while open: close.
   - Escape while open: close and return focus to the burger.

C) BACKGROUND VIDEO — LAST element in <body>. It must come after the video markup;
   placing it in <head> silently no-ops because the elements do not exist yet.
   - Grab #bgVideoA and #bgVideoB; bail if missing.
   - Reduced motion: removeAttribute('autoplay') on A, pause both, and set
     A.currentTime = 0 inside try/catch (autoplay may already have advanced a frame
     or two; hold on the first, which is the still the hero was composed against).
     Then return — no cross-fade, no playback.
   - Otherwise: FADE = 0.9; cur = A, nxt = B, swapping = false.
     play(v) helper calls v.play() and swallows a rejected promise (some browsers
     ignore the autoplay attribute until play() is called). Call play(A) up front.
   - tick(): return if swapping or !cur.duration; return if
     cur.duration - cur.currentTime > FADE. Otherwise:
       swapping = true; keep a reference `out = cur`;
       nxt.currentTime = 0; play(nxt);
       nxt.classList.add('is-active'); out.classList.remove('is-active');
       swap cur/nxt;
       setTimeout(FADE*1000 + 100) -> out.pause(); out.currentTime = 0; swapping = false;
   - Attach tick to 'timeupdate' on BOTH videos.
   - With no JS the loop attribute still carries it: one visible cut per pass,
     never a freeze.

============================================================
11. ACCEPTANCE
============================================================
- Desktop 1280x800 reproduces the reference render exactly; scaling the window
  scales the whole composition proportionally with no reflow above 1160px.
- The globe plays continuously with no visible seam at the 10s loop point.
- The headline stays two lines and never breaks at the hyphen of "Cross-border"
  at any width down to 320px.
- Nav folds into the burger at 1160px; the panel anchors under it, top-right.
- prefers-reduced-motion: reduce -> a still first frame, no entrance, no transitions.
- No horizontal scrollbar at any width; html/body keep overflow:hidden.