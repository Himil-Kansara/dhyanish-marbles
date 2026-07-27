import Image from "next/image";

const phone = "7041665688";
const whatsapp = `https://wa.me/91${phone}?text=${encodeURIComponent(
  "Hello Dhyanish Marbles, I would like to enquire about marble and tile options."
)}`;

const collections = [
  { name: "Statuario", origin: "Italy", image: "/assets/white-marble.jpg", tone: "Crisp white · dramatic veining" },
  { name: "Carrara", origin: "Italy", image: "/assets/hero.jpg", tone: "Soft grey · timeless detail" },
  { name: "Calacatta", origin: "Italy", image: "/assets/stone-detail.jpg", tone: "Bold veins · statement spaces" },
  { name: "Botticino", origin: "Italy", image: "/assets/warm-stone.jpg", tone: "Warm beige · classic luxury" },
  { name: "Makrana White", origin: "Rajasthan", image: "/assets/white-marble.jpg", tone: "Pure white · enduring strength" },
  { name: "Ambaji White", origin: "Gujarat", image: "/assets/hero.jpg", tone: "Milky white · subtle movement" },
  { name: "Katni Beige", origin: "Madhya Pradesh", image: "/assets/warm-stone.jpg", tone: "Creamy beige · calm elegance" },
  { name: "Rainforest Brown", origin: "Rajasthan", image: "/assets/stone-detail.jpg", tone: "Tree-like veins · natural drama" },
  { name: "Rainforest Green", origin: "Rajasthan", image: "/assets/dark-stone.jpg", tone: "Forest hues · organic character" },
  { name: "Indian Green", origin: "Rajasthan", image: "/assets/dark-stone.jpg", tone: "Deep green · refined contrast" },
  { name: "Black Marquina", origin: "Spain", image: "/assets/dark-stone.jpg", tone: "Jet black · fine white veins" },
  { name: "Nero Portoro", origin: "Italy", image: "/assets/dark-stone.jpg", tone: "Black & gold · rare luxury" },
  { name: "Onyx", origin: "Imported", image: "/assets/warm-stone.jpg", tone: "Translucent · luminous patterns" },
  { name: "Travertine", origin: "Imported", image: "/assets/stone-detail.jpg", tone: "Textural · architectural warmth" },
  { name: "Granite", origin: "India", image: "/assets/dark-stone.jpg", tone: "Hard-wearing · polished finish" },
  { name: "Quartzite", origin: "Imported", image: "/assets/hero.jpg", tone: "Natural strength · fine detail" },
];

const tileRanges = [
  ["Porcelain Tiles", "Low absorption, high strength and effortless elegance.", "/assets/tile-interior.jpg"],
  ["Ceramic Tiles", "Versatile wall and floor designs for every budget.", "/assets/project-interior.jpg"],
  ["Vitrified Tiles", "Durable, stain-resistant surfaces in premium finishes.", "/assets/luxury-interior.jpg"],
  ["Large-format Slabs", "Fewer joints and a seamless, contemporary visual.", "/assets/tile-interior.jpg"],
  ["Mosaic & Designer", "Artful accents for kitchens, bathrooms and features.", "/assets/project-interior.jpg"],
  ["Outdoor & Parking", "Slip-resistant, heavy-duty tiles made for the outdoors.", "/assets/luxury-interior.jpg"],
];

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Dhyanish Marbles",
    description: "Importer, exporter, wholesaler and retailer of natural marbles, stones and premium tiles in Ahmedabad.",
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
        <span>Importer · Exporter · Wholesaler · Retailer</span>
        <a href={`tel:+91${phone}`}>Call +91 {phone}</a>
      </div>

      <header className="nav shell">
        <a className="brand" href="#top" aria-label="Dhyanish Marbles home">
          <span className="brand-mark"><i /><i /><i /></span>
          <span><b>Dhyanish</b> Marbles<small>Transforming spaces with marble excellence</small></span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#collections">Marbles</a>
          <a href="#tiles">Tiles</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="button button-small" href={whatsapp} target="_blank" rel="noreferrer">Get a quote</a>
      </header>

      <section className="hero" id="top">
        <Image src="/assets/luxury-interior.jpg" alt="Premium marble interior with elegant natural stone surfaces" fill priority sizes="100vw" />
        <div className="hero-shade" />
        <div className="hero-content shell">
          <p className="eyebrow">Natural stone, thoughtfully sourced</p>
          <h1>Remarkable stone.<br /><em>Enduring spaces.</em></h1>
          <p className="hero-copy">Discover expressive natural marble, granite and architectural tiles selected for homes, hospitality and landmark projects.</p>
          <div className="hero-actions">
            <a className="button" href="#collections">Explore collections</a>
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
        <h2>Every slab is a singular work of nature. <span>We help you find the one that belongs in your space.</span></h2>
        <div className="intro-note">
          <span>01</span>
          <p>From subtle whites to expressive exotic stones, our collection balances timeless character, reliable performance and honest value.</p>
        </div>
      </section>

      <section className="collections" id="collections">
        <div className="shell section-head">
          <div><p className="section-kicker light">The marble library</p><h2>Natural marble & stone</h2></div>
          <p>Browse our core collection. Natural patterns vary by slab; contact us to check current lots, finishes and sizes.</p>
        </div>
        <div className="collection-grid shell">
          {collections.map((item, index) => (
            <article className="stone-card" key={item.name}>
              <div className="stone-image">
                <Image src={item.image} alt={`${item.name} marble and natural stone surface`} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw" />
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="stone-info"><div><h3>{item.name}</h3><p>{item.tone}</p></div><small>{item.origin}</small></div>
            </article>
          ))}
        </div>
      </section>

      <section className="tiles shell" id="tiles">
        <div className="section-head dark">
          <div><p className="section-kicker">Beyond natural stone</p><h2>Tiles for every surface</h2></div>
          <p>Curated formats, finishes and textures for residential, retail, hospitality and outdoor applications.</p>
        </div>
        <div className="tile-grid">
          {tileRanges.map(([name, copy, image], index) => (
            <article className="tile-card" key={name}>
              <Image src={image} alt={`${name} used in a modern interior`} fill sizes="(max-width: 800px) 100vw, 33vw" />
              <div className="tile-overlay" />
              <span>0{index + 1}</span><div><h3>{name}</h3><p>{copy}</p><a href={whatsapp} target="_blank" rel="noreferrer" aria-label={`Enquire about ${name}`}>Enquire ↗</a></div>
            </article>
          ))}
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-image"><Image src="/assets/project-interior.jpg" alt="Contemporary interior finished with premium stone and tiles" fill sizes="50vw" /></div>
        <div className="about-copy">
          <p className="section-kicker">Why Dhyanish</p>
          <h2>Material expertise,<br />made personal.</h2>
          <p>We bring the reach of an importer and wholesaler together with the attentive service of a specialist retailer. Whether you are selecting for a single room or a full project, we help compare colour, vein, finish and application with clarity.</p>
          <ul>
            <li><span>01</span><div><b>Wide material selection</b><small>Indian and imported marble, natural stone and tiles.</small></div></li>
            <li><span>02</span><div><b>Project-led guidance</b><small>Recommendations shaped by your use, aesthetic and budget.</small></div></li>
            <li><span>03</span><div><b>Wholesale & retail</b><small>Responsive service for homeowners, designers and contractors.</small></div></li>
          </ul>
        </div>
      </section>

      <section className="cta" id="contact">
        <Image src="/assets/dark-stone.jpg" alt="" fill sizes="100vw" />
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
          <div className="footer-brand"><a className="brand inverse" href="#top"><span className="brand-mark"><i /><i /><i /></span><span><b>Dhyanish</b> Marbles<small>Transforming spaces with marble excellence</small></span></a><p>Deals in all natural marbles, stones and premium tiles.</p></div>
          <div><h3>Visit us</h3><address>D-06, Shilpsiddhi Duplex,<br />Opp. Jivraj Overbridge,<br />Near Mukesh Park, Shyamal Cross Roads,<br />Ahmedabad – 380051</address></div>
          <div><h3>Contact</h3><a href={`tel:+91${phone}`}>+91 {phone}</a><a href="mailto:dhyanishmarbles@gmail.com">dhyanishmarbles@gmail.com</a><small>Payal Chavda · Proprietor</small></div>
          <div><h3>Explore</h3><a href="#collections">Marbles & stones</a><a href="#tiles">Tiles</a><a href="#about">Why Dhyanish</a></div>
        </div>
        <div className="shell copyright"><span>© {new Date().getFullYear()} Dhyanish Marbles. All rights reserved.</span><span>Ahmedabad, Gujarat</span></div>
      </footer>
      <a className="floating-whatsapp" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Chat with Dhyanish Marbles on WhatsApp">WA</a>
    </main>
  );
}
