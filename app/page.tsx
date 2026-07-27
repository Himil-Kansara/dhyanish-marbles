const phone = "7041665688";
const whatsapp = `https://wa.me/91${phone}?text=${encodeURIComponent(
  "Hello, I am interested in your natural stone products.\nPlease share available options and pricing."
)}`;
const whatsappFor = (product: string) =>
  `https://wa.me/91${phone}?text=${encodeURIComponent(
    `Hello, I am interested in ${product}.\nPlease share available options and pricing.`
  )}`;

const collections = [
  { name: "Statuario", origin: "Italy", image: "/assets/white-marble.webp", tone: "Crisp white · dramatic veining" },
  { name: "Carrara", origin: "Italy", image: "/assets/hero.webp", tone: "Soft grey · timeless detail" },
  { name: "Calacatta", origin: "Italy", image: "/assets/stone-detail.webp", tone: "Bold veins · statement spaces" },
  { name: "Botticino", origin: "Italy", image: "/assets/warm-stone.webp", tone: "Warm beige · classic luxury" },
  { name: "Makrana White", origin: "Rajasthan", image: "/assets/white-marble.webp", tone: "Pure white · enduring strength" },
  { name: "Ambaji White", origin: "Gujarat", image: "/assets/hero.webp", tone: "Milky white · subtle movement" },
  { name: "Katni Beige", origin: "Madhya Pradesh", image: "/assets/warm-stone.webp", tone: "Creamy beige · calm elegance" },
  { name: "Rainforest Brown", origin: "Rajasthan", image: "/assets/stone-detail.webp", tone: "Tree-like veins · natural drama" },
  { name: "Rainforest Green", origin: "Rajasthan", image: "/assets/dark-stone.webp", tone: "Forest hues · organic character" },
  { name: "Indian Green", origin: "Rajasthan", image: "/assets/dark-stone.webp", tone: "Deep green · refined contrast" },
  { name: "Black Marquina", origin: "Spain", image: "/assets/dark-stone.webp", tone: "Jet black · fine white veins" },
  { name: "Nero Portoro", origin: "Italy", image: "/assets/dark-stone.webp", tone: "Black & gold · rare luxury" },
  { name: "Onyx", origin: "Imported", image: "/assets/warm-stone.webp", tone: "Translucent · luminous patterns" },
  { name: "Travertine", origin: "Imported", image: "/assets/stone-detail.webp", tone: "Textural · architectural warmth" },
  { name: "Granite", origin: "India", image: "/assets/dark-stone.webp", tone: "Hard-wearing · polished finish" },
  { name: "Quartzite", origin: "Imported", image: "/assets/hero.webp", tone: "Natural strength · fine detail" },
];

const productFamilies = [
  {
    name: "Marble",
    label: "Indian & Imported",
    image: "/assets/white-marble.webp",
    description: "Premium white, beige, black and exotic marble slabs selected for flooring, walls, counters and statement interiors.",
    applications: "Flooring · Walls · Stairs · Countertops",
  },
  {
    name: "Granite",
    label: "Strength in stone",
    image: "/assets/dark-stone.webp",
    description: "Dense, durable natural granite for high-traffic floors, kitchens, façades, stairs and demanding commercial applications.",
    applications: "Kitchens · Façades · Flooring · Outdoor",
  },
  {
    name: "Natural Quartzite",
    label: "Rare & resilient",
    image: "/assets/stone-detail.webp",
    description: "Expressive natural quartzite combining marble-like movement with exceptional hardness for luxurious, hard-working surfaces.",
    applications: "Islands · Counters · Feature walls · Tables",
  },
  {
    name: "Onyx Stone",
    label: "Translucent luxury",
    image: "/assets/warm-stone.webp",
    description: "Luminous onyx with distinctive colour and movement, ideal for backlit walls, bars, reception desks and bespoke features.",
    applications: "Backlit walls · Bars · Counters · Décor",
  },
  {
    name: "CNC Stone Wall Panels",
    label: "Precision crafted",
    image: "/assets/cnc-stone-panel.webp",
    description: "Custom-cut marble and stone panels with geometric, fluted, jali and carved patterns for memorable architectural surfaces.",
    applications: "Feature walls · Jali · Fluting · Signage",
  },
  {
    name: "Stone Furniture",
    label: "Made to specification",
    image: "/assets/stone-furniture.webp",
    description: "Bespoke marble, granite, quartzite and onyx furniture made for refined residential, hospitality and retail spaces.",
    applications: "Tables · Consoles · Vanities · Counters",
  },
];

const tileRanges = [
  ["Porcelain Tiles", "Low absorption, high strength and effortless elegance.", "/assets/tile-interior.webp"],
  ["Ceramic Tiles", "Versatile wall and floor designs for every budget.", "/assets/project-interior.webp"],
  ["Vitrified Tiles", "Durable, stain-resistant surfaces in premium finishes.", "/assets/luxury-interior.webp"],
  ["Large-format Slabs", "Fewer joints and a seamless, contemporary visual.", "/assets/tile-interior.webp"],
  ["Mosaic & Designer", "Artful accents for kitchens, bathrooms and features.", "/assets/project-interior.webp"],
  ["Outdoor & Parking", "Slip-resistant, heavy-duty tiles made for the outdoors.", "/assets/luxury-interior.webp"],
];

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Dhyanish Marbles",
    description: "Importer, exporter, wholesaler and retailer of marble, granite, natural quartzite, onyx, CNC stone wall panels and bespoke stone furniture in Ahmedabad.",
    telephone: `+91-${phone}`,
    email: "dhyanishmarbles@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "D-06, Shilpsiddhi Duplex, Opp. Jivraj Overbridge, Near Mukesh Park, Shyamal Cross Roads",
      addressLocality: "Ahmedabad",
      postalCode: "380051",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
    areaServed: ["Ahmedabad", "Gujarat", "India"],
    priceRange: "₹₹",
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="topbar">
        <div className="service-ticker" aria-label="Importer, exporter, wholesaler and retailer">
          <div className="service-ticker-track">
            <span>Importer · Exporter · Wholesaler · Retailer</span>
            <span aria-hidden="true">Importer · Exporter · Wholesaler · Retailer</span>
          </div>
        </div>
        <a href={`tel:+91${phone}`}>Call +91 {phone}</a>
      </div>

      <header className="nav shell">
        <a className="brand" href="#top" aria-label="Dhyanish Marbles home">
          <img
            className="main-logo"
            src="/assets/dhyanish-marbles-logo.webp"
            alt="Dhyanish Marbles"
            width={240}
            height={160}
          />
        </a>
        <nav aria-label="Main navigation">
          <a href="#products">Products</a>
          <a href="#collections">Stone library</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="button button-small" href={whatsapp} target="_blank" rel="noreferrer">Get a quote</a>
        <details className="mobile-menu">
          <summary aria-label="Open quick navigation">
            <span />
            <span />
            <span />
          </summary>
          <aside aria-label="Quick navigation">
            <div className="mobile-menu-heading">
              <span>Quick menu</span>
              <small>Explore Dhyanish Marbles</small>
            </div>
            <nav>
              <a href="#top"><span>01</span>Home</a>
              <a href="#products"><span>02</span>Products</a>
              <a href="#collections"><span>03</span>Stone library</a>
              <a href="#about"><span>04</span>About</a>
              <a href="#contact"><span>05</span>Contact</a>
            </nav>
            <a className="button" href={whatsapp} target="_blank" rel="noreferrer">Get a quote</a>
          </aside>
        </details>
      </header>

      <section className="hero" id="top">
        <img className="fill-image" src="/assets/luxury-interior.webp" alt="Premium marble interior with elegant natural stone surfaces" fetchPriority="high" />
        <div className="hero-shade" />
        <div className="hero-content shell">
          <p className="eyebrow">Natural stone · Crafted possibilities</p>
          <h1>From rare slabs<br /><em>to finished forms.</em></h1>
          <p className="hero-copy">Marble, granite, natural quartzite and onyx—alongside precision CNC wall panels and bespoke stone furniture for exceptional spaces.</p>
          <div className="hero-actions">
            <a className="button" href="#products">Explore products</a>
            <a className="text-link" href={whatsapp} target="_blank" rel="noreferrer">Discuss your project <span>↗</span></a>
          </div>
          <div className="hero-stats">
            <div><strong>Natural</strong><span>marble & stone</span></div>
            <div><strong>Global</strong><span>sourcing network</span></div>
            <div><strong>Expert</strong><span>selection support</span></div>
          </div>
        </div>
        <a className="scroll" href="#collections" aria-label="Scroll to collections">Scroll <span>↓</span></a>
      </section>

      <section className="intro shell">
        <p className="section-kicker">Our material philosophy</p>
        <h2>From selecting the right slab to shaping the final detail. <span>We bring natural stone into complete architectural expression.</span></h2>
        <div className="intro-note">
          <span>01</span>
          <p>From subtle whites to expressive exotic stones, our collection balances timeless character, reliable performance and honest value.</p>
        </div>
      </section>

      <section className="product-focus shell" id="products">
        <div className="section-head dark">
          <div><p className="section-kicker">Our core expertise</p><h2>Stone, from slab to statement</h2></div>
          <p>Explore our principal product families—from globally sourced natural slabs to precision-crafted wall panels and custom furniture.</p>
        </div>
        <div className="product-focus-grid">
          {productFamilies.map((item, index) => (
            <article className="focus-card" key={item.name}>
              <a href={item.image} target="_blank" rel="noreferrer" className="focus-image" aria-label={`Open a full-size view of ${item.name}`}>
                <img className="fill-image" src={item.image} alt={`${item.name} by Dhyanish Marbles`} loading="lazy" />
                <span>{String(index + 1).padStart(2, "0")}</span>
                <b className="expand-hint" aria-hidden="true">↗</b>
              </a>
              <div className="focus-copy">
                <p>{item.label}</p>
                <h3>{item.name}</h3>
                <div>{item.description}</div>
                <small>{item.applications}</small>
                <a href={whatsappFor(item.name)} target="_blank" rel="noreferrer">Enquire about {item.name} ↗</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="collections" id="collections">
        <div className="shell section-head">
          <div><p className="section-kicker light">The material library</p><h2>Marble & natural stone</h2></div>
          <p>Browse popular materials within our wider sourcing network. Natural patterns vary by slab; contact us for current lots, finishes and sizes.</p>
        </div>
        <div className="collection-grid shell">
          {collections.map((item, index) => (
            <article className="stone-card" key={item.name}>
              <a className="stone-image" href={item.image} target="_blank" rel="noreferrer" aria-label={`Open a full-size view of ${item.name}`} title={`View ${item.name} full size`}>
                <img className="fill-image" src={item.image} alt={`${item.name} marble and natural stone surface`} loading="lazy" />
                <span>{String(index + 1).padStart(2, "0")}</span>
                <b className="expand-hint" aria-hidden="true">↗</b>
              </a>
              <div className="stone-info">
                <div><h3>{item.name}</h3><p>{item.tone}</p></div>
                <div className="stone-actions">
                  <small>{item.origin}</small>
                  <a href={whatsappFor(item.name)} target="_blank" rel="noreferrer" aria-label={`Enquire about ${item.name} on WhatsApp`}>Enquire ↗</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="tiles shell" id="tiles">
        <div className="section-head dark">
          <div><p className="section-kicker">Complementary surfaces</p><h2>Architectural tiles</h2></div>
          <p>A supporting selection of porcelain, ceramic and vitrified surfaces for complete residential and commercial projects.</p>
        </div>
        <div className="tile-grid">
          {tileRanges.map(([name, copy, image], index) => (
            <article className="tile-card" key={name}>
              <a className="tile-image-link" href={image} target="_blank" rel="noreferrer" aria-label={`Open a full-size view of ${name}`} title={`View ${name} full size`}>
                <img className="fill-image" src={image} alt={`${name} used in a modern interior`} loading="lazy" />
              </a>
              <div className="tile-overlay" />
              <span>0{index + 1}<b className="expand-hint" aria-hidden="true">↗</b></span><div><h3>{name}</h3><p>{copy}</p><a href={whatsappFor(name)} target="_blank" rel="noreferrer" aria-label={`Enquire about ${name}`}>Enquire ↗</a></div>
            </article>
          ))}
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-image"><img className="fill-image" src="/assets/project-interior.webp" alt="Contemporary interior finished with premium stone and tiles" loading="lazy" /></div>
        <div className="about-copy">
          <p className="section-kicker">Why Dhyanish</p>
          <h2>Material expertise,<br />made personal.</h2>
          <p>We bring the reach of an importer and wholesaler together with the attentive service of a stone specialist. From raw slab selection to CNC-carved panels and made-to-measure furniture, we help align material, finish, fabrication and application.</p>
          <ul>
            <li><span>01</span><div><b>Specialist natural stones</b><small>Marble, granite, natural quartzite and translucent onyx.</small></div></li>
            <li><span>02</span><div><b>Design & fabrication</b><small>CNC wall panels and stone furniture made to specification.</small></div></li>
            <li><span>03</span><div><b>Wholesale & project supply</b><small>Responsive support for homeowners, designers and contractors.</small></div></li>
          </ul>
        </div>
      </section>

      <section className="cta" id="contact">
        <img className="fill-image" src="/assets/dark-stone.webp" alt="" loading="lazy" />
        <div className="cta-shade" />
        <div className="cta-content shell">
          <p className="section-kicker light">Start a conversation</p>
          <h2>Let’s shape something<br /><em>extraordinary.</em></h2>
          <p>Share your space, preferred material and approximate requirement. We’ll help you shortlist the right options.</p>
          <div><a className="button" href={whatsapp} target="_blank" rel="noreferrer">Chat on WhatsApp</a><a className="button ghost" href={`tel:+91${phone}`}>Call us</a></div>
        </div>
      </section>

      <footer>
        <div className="shell footer-grid">
          <div className="footer-brand">
            <a className="footer-logo-link" href="#top" aria-label="Dhyanish Marbles home">
              <img className="footer-logo" src="/assets/dhyanish-marbles-logo.webp" alt="Dhyanish Marbles" width={240} height={160} loading="lazy" />
            </a>
            <p>Deals in marble, granite, natural quartzite, onyx and crafted stone products.</p>
          </div>
          <div><h3>Visit us</h3><address>D-06, Shilpsiddhi Duplex,<br />Opp. Jivraj Overbridge,<br />Near Mukesh Park, Shyamal Cross Roads,<br />Ahmedabad – 380051</address></div>
          <div><h3>Contact</h3><a href={`tel:+91${phone}`}>+91 {phone}</a><a href="mailto:dhyanishmarbles@gmail.com">dhyanishmarbles@gmail.com</a><small>Payal Chavda · Proprietor</small></div>
          <div><h3>Explore</h3><a href="#products">Core products</a><a href="#collections">Stone library</a><a href="#about">Why Dhyanish</a></div>
        </div>
        <div className="shell copyright"><span>© {new Date().getFullYear()} Dhyanish Marbles. All rights reserved.</span><span>Ahmedabad, Gujarat</span></div>
      </footer>
      <a className="floating-whatsapp" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Chat with Dhyanish Marbles on WhatsApp">
        <img src="/assets/whatsapp.svg" alt="" width={29} height={29} />
      </a>
    </main>
  );
}
