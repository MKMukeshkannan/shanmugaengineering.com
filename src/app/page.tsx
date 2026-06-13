import Image from "next/image";
import type { Metadata } from "next";
import ProductCarousel from "./Products";
import ManufacturingGallery from "./Capabilities";
import TrustedBy from "./Trust";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Shanmuga Engineering | CNC Machining, Injection Moulding & Fixtures – Chennai",
  description:
    "ISO 9001:2015 certified precision engineering company in Chennai. CNC machining, injection moulding, jigs & fixtures, sheet metal fabrication for Automotive, Electronics and Medical industries since 2012.",
  keywords: [
    "CNC machining Chennai",
    "injection moulding Chennai",
    "jigs and fixtures manufacturer",
    "precision engineering Chennai",
    "automotive components manufacturer India",
    "sheet metal fabrication Chennai",
    "SIDCO industrial estate Korattur",
    "Shanmuga Engineering",
  ],
  authors: [{ name: "Shanmuga Engineering" }],
  openGraph: {
    title: "Shanmuga Engineering – Precision Engineering, Chennai",
    description:
      "ISO 9001:2015 certified manufacturer of CNC machined components, injection moulded parts, jigs & fixtures for Automotive, Electronics and Medical sectors.",
    url: "https://shanmugaengineering.com",
    siteName: "Shanmuga Engineering",
    locale: "en_IN",
    type: "website",
  },
  alternates: { canonical: "https://shanmugaengineering.com" },
  robots: { index: true, follow: true },
};

// ─── JSON-LD structured data ──────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Shanmuga Engineering",
  description:
    "ISO 9001:2015 certified precision engineering company in Chennai specialising in CNC machining, injection moulding, jigs & fixtures, and sheet metal fabrication.",
  url: "https://shanmugaengineering.com",
  email: "shanmugasiva1@gmail.com",
  telephone: ["+91-7904751973", "+91-9791102231"],
  foundingDate: "2012",
  address: {
    "@type": "PostalAddress",
    streetAddress: "No. 145, Tiny Sector, SIDCO Industrial Estate, Korattur",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    postalCode: "600098",
    addressCountry: "IN",
  },
};

// ─── Static data ──────────────────────────────────────────────────────────────
const CAPABILITIES = [
  {
    title: "CNC Machining",
    detail: "3× VMC Vertical Machining Centres + 2× CNC Turning Centres for high-precision components.",
    path: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    title: "Injection Moulding",
    detail: "SSBT 90T & 120T automated injection moulding machines for plastic and polymer parts.",
    path: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
  },
  {
    title: "Jigs & Fixtures",
    detail: "Screwing jigs, inspection fixtures, pneumatic fixtures, test probe jigs and ESD base fixtures.",
    path: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
  },
  {
    title: "Sheet Metal & Fabrication",
    detail: "Laser cutting, folding, sheet metal enclosures, worktables and material handling trolleys.",
    path: "M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18",
  },
  {
    title: "Mould & Tool Design",
    detail: "Design and development of injection moulds, punch & dies with in-house CAD/CAM.",
    path: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z",
  },
  {
    title: "Lean Manufacturing",
    detail: "Manufacturing layout design using lean principles to optimise flow, reduce waste and cut lead times.",
    path: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
];

const CUSTOMERS = [
  "Saint-Gobain India Pvt Ltd.",
  "Machine Maze Integrations",
  "S.R Engineering Solutions",
  "Phoenix Medical Systems",
  "Elmech Heaters & Controllers",
  "Acee Tubes Pvt Ltd.",
  "Metexim Sourcing PVT Ltd.",
  "S.D.N Engineering",
];

const STATS = [
  { num: "12+",  label: "Years in operation" },
  { num: "11",   label: "Machine centres"    },
  { num: "200+", label: "CNC Components Designed" },
  { num: "24/7",    label: "Available"    },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ShanmugaEngineeringPage() {
  return (
    <>
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap"
        rel="stylesheet"
      />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-stone-100 text-stone-900" style={{ fontFamily: "'DM Sans', sans-serif" }}>

        {/* ── NAV ─────────────────────────────────────────────────────────── */}
        <nav className="sticky top-0 z-40 bg-white border-b border-stone-200" aria-label="Site navigation">
          <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-14">
            <a
              href="#home"
              className="flex items-center gap-2.5 no-underline"
              aria-label="Shanmuga Engineering home"
            >
              <span
                className="text-sm font-black tracking-wider text-stone-900 uppercase"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Shanmuga <span className="text-green-600">Engineering</span>
              </span>
            </a>
            <ul className="hidden md:flex gap-8 list-none" role="list">
              {["About", "Capabilities", "Products", "Certifications", "Customers", "Contact"].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    className="text-xs uppercase tracking-widest text-stone-500 hover:text-green-600 transition-colors no-underline font-medium"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <main id="home">

          {/* ── HERO ──────────────────────────────────────────────────────── */}
          <section
            className="bg-white border-b border-stone-200 py-20 md:py-28 relative"
            aria-labelledby="hero-heading"
          >
            <Image src="/hero.webp" alt="Hero background" fill priority className="object-cover z-0" />
            <div className="absolute inset-0 bg-black/70" />


            <div className="max-w-6xl mx-auto px-6 relative z-10">
              <div className="grid md:grid-cols-1 gap-12 lg:gap-20 items-end">

                {/* left — headline */}
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-green-600 font-medium mb-5">
                    Chennai, India · Est. 2012
                  </p>
                  <h1
                    id="hero-heading"
                    className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-none tracking-tight text-stone-300"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    Your Trusted Partner in Engineering Solutions
                  </h1>
                  <p className="text-sm mt-5 md:text-base leading-relaxed text-stone-300 font-light max-w-md ">
                    ISO 9001:2015 certified manufacturer of CNC machined components,
                    injection moulded parts, and jigs &amp; fixtures for Automotive,
                    Electronics and Medical industries.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href="#contact"
                      className="inline-block bg-green-600 hover:bg-green-700 text-white text-xs font-medium uppercase tracking-widest px-6 py-3.5 transition-colors no-underline"
                    >
                      Request a Quote
                    </a>
                    <a
                      href="#capabilities"
                      className="inline-block border border-stone-300 hover:border-green-600 hover:text-green-600 text-stone-300 text-xs font-medium uppercase tracking-widest px-6 py-3.5 transition-colors no-underline"
                    >
                      Our Capabilities
                    </a>
                  </div>
                </div>


              </div>
            </div>
          </section>

          {/* ── STATS BAR ─────────────────────────────────────────────────── */}
          <div
            className="bg-white border-b border-stone-200 grid grid-cols-2 md:grid-cols-4 divide-x divide-stone-200"
            role="region"
            aria-label="Key statistics"
          >
            {STATS.map(({ num, label }, i) => (
              <div key={i} className="py-8 px-6 text-center">
                <p
                  className="text-4xl font-extrabold text-stone-900 leading-none"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {num}
                </p>
                <p className="mt-1.5 text-xs uppercase tracking-widest text-stone-400">{label}</p>
              </div>
            ))}
          </div>

          {/* ── ABOUT ─────────────────────────────────────────────────────── */}
          <section
            id="about"
            className="py-20 border-b border-stone-200 bg-stone-100"
            aria-labelledby="about-heading"
          >
            <div className="max-w-6xl mx-auto px-6">
              <p className="text-xs uppercase tracking-[0.2em] text-green-600 font-medium mb-2">Who we are</p>
              <h2
                className="text-3xl md:text-4xl font-bold text-stone-900 mb-10"
                id="about-heading"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Engineering solutions since 2012
              </h2>
              <div className="flex flex-col md:flex-row gap-5 md:gap-20 ">
                <div className="flex-1 space-y-4 text-stone-500 font-light leading-relaxed text-[0.95rem] content-center  ">
                  <p>
                    Shanmuga Engineering was founded in 2012 with a single goal: deliver finished components to
                    customer drawings, on time, every time. Over more than a decade we have grown from a small
                    machine shop into a full-service engineering partner supplying the Automotive, Electronics and
                    Medical industries across India.
                  </p>
                  <p>
                    We combine CNC machining, injection moulding, jig &amp; fixture design, and sheet metal
                    fabrication under one roof — giving customers a single accountable supplier from drawing to
                    finished part. Our design centre in Iyyappanthangal handles in-house CAD/CAM for moulds,
                    tools and fixtures.
                  </p>
                </div>

                <Image className="w-md h-auto shrink-0 object-cover self-center " height={768} width={1025} alt="Hello" src={'/store-front.webp'}/>

              </div>
            </div>
          </section>

          {/* ── CAPABILITIES ──────────────────────────────────────────────── */}
          <section
            id="capabilities"
            className="py-20 border-b border-stone-200 bg-white"
            aria-labelledby="cap-heading"
          >
            <div className="max-w-6xl mx-auto px-6">
              <p className="text-xs uppercase tracking-[0.2em] text-green-600 font-medium mb-2">What we do</p>
              <h2
                className="text-3xl md:text-4xl font-bold text-stone-900 mb-10"
                id="cap-heading"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Core capabilities
              </h2>

              <ManufacturingGallery />
            </div>
          </section>

          {/* ── PRODUCTS ──────────────────────────────────────────────────── */}
          <section
            id="products"
            className="py-20 border-b border-stone-200 bg-stone-100"
            aria-labelledby="prod-heading"
          >
            <div className="max-w-6xl mx-auto px-6">
              <p className="text-xs uppercase tracking-[0.2em] text-green-600 font-medium mb-2">Product range</p>
              <h2
                className="text-3xl md:text-4xl font-bold text-stone-900 mb-10"
                id="prod-heading"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                What we manufacture
              </h2>

              <ProductCarousel />

            </div>
          </section>

          {/* ── CERTIFICATIONS ────────────────────────────────────────────── */}
          <section
            id="certifications"
            className="py-20 border-b border-stone-200 bg-white"
            aria-labelledby="cert-heading"
          >
            <div className="max-w-6xl mx-auto px-6">
              <p className="text-xs uppercase tracking-[0.2em] text-green-600 font-medium mb-2">Quality assurance</p>
              <h2
                className="text-3xl md:text-4xl font-bold text-stone-900 mb-10"
                id="cert-heading"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Certifications
              </h2>
              <div className="grid sm:grid-cols-2 gap-5">

                {/* ISO 9001:2015 */}
                <article className="border border-stone-200 bg-stone-50 p-8" aria-label="ISO 9001:2015 certification">
                  <div className="w-12 h-12 border-2 border-green-600 flex items-center justify-center mb-5">
                    <span className="text-green-600 font-bold text-xs leading-tight text-center"
                      style={{ fontFamily: "'Syne', sans-serif" }}>ISO<br/>9001</span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-1" style={{ fontFamily: "'Syne', sans-serif" }}>
                    ISO 9001:2015
                  </h3>
                  <p className="text-sm text-stone-400 mb-6">Quality Management System – AGQR / SACB Accredited</p>
                  <dl className="divide-y divide-stone-200">
                    {[
                      ["Scope",        "Machined Components & Fabrication Works"],
                      ["Cert. No.",    "L008522"],
                      ["Issue No.",    "04"],
                      ["Valid Until",  "10 December 2026"],
                    ].map(([k, v]) => (
                      <div key={k} className="flex justify-between py-2.5 text-sm">
                        <dt className="text-stone-400">{k}</dt>
                        <dd className="text-stone-800 font-medium text-right">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </article>

                {/* ZED Bronze */}
                <article className="border border-stone-200 bg-stone-50 p-8" aria-label="ZED Bronze MSME certification">
                  <div className="w-12 h-12 border-2 border-amber-600 flex items-center justify-center mb-5">
                    <span className="text-amber-600 font-bold text-xs leading-tight text-center"
                      style={{ fontFamily: "'Syne', sans-serif" }}>ZED<br/>BRNZ</span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-1" style={{ fontFamily: "'Syne', sans-serif" }}>
                    ZED Bronze
                  </h3>
                  <p className="text-sm text-stone-400 mb-6">MSME Sustainable Certification Scheme – Govt. of India</p>
                  <dl className="divide-y divide-stone-200">
                    {[
                      ["Issued by",   "Ministry of MSME, Govt. of India"],
                      ["UDYAM No.",   "UDYAM-TN-02-0088322"],
                      ["Cert. No.",   "22032025_442860"],
                      ["Issued on",   "22 March 2025"],
                    ].map(([k, v]) => (
                      <div key={k} className="flex justify-between py-2.5 text-sm">
                        <dt className="text-stone-400">{k}</dt>
                        <dd className="text-stone-800 font-medium text-right">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </article>

              </div>
            </div>
          </section>

          {/* ── CUSTOMERS ─────────────────────────────────────────────────── */}
          <section
            id="customers"
            className="py-20 border-b border-stone-200 bg-stone-100"
            aria-labelledby="cust-heading"
          >
            <div className="max-w-6xl mx-auto px-6">
              <p className="text-xs uppercase tracking-[0.2em] text-green-600 font-medium mb-2">Trusted by</p>
              <h2
                className="text-3xl md:text-4xl font-bold text-stone-900 mb-10"
                id="cust-heading"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Major customers
              </h2>
              <TrustedBy />
            </div>
          </section>

          <section
            id="contact"
            className="py-20 bg-white"
            aria-labelledby="contact-heading"
          >
            <div className="max-w-7xl mx-auto px-6">
              <p className="text-xs uppercase tracking-[0.2em] text-green-600 font-medium mb-2">
                Reach us
              </p>
          
              <h2
                id="contact-heading"
                className="text-3xl md:text-4xl font-bold text-stone-900 mb-10"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Contact Us
              </h2>
          
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* LEFT */}
                <div className="space-y-8">
          
                  {/* Head Office */}
                  <div className="border border-stone-200 p-6 bg-stone-50">
                    <h3
                      className="text-xl font-bold text-stone-900 mb-4"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      Head Office
                    </h3>
          
                    <div className="space-y-4 text-sm text-stone-700 leading-relaxed">
                      <div>
                        <p className="uppercase tracking-widest text-xs text-stone-400 mb-1">
                          Address
                        </p>
                        <p>
                          No. 145, Tiny Sector, SIDCO Industrial Estate,
                          <br />
                          Korattur, Chennai – 600098,
                          <br />
                          Tamil Nadu, India
                        </p>
                      </div>
          
                      <div>
                        <p className="uppercase tracking-widest text-xs text-stone-400 mb-1">
                          Phone
                        </p>
                        <a
                          href="tel:+917904751973"
                          className="block hover:text-green-600 no-underline"
                        >
                          +91 79047 51973
                        </a>
          
                        <a
                          href="tel:+919791102231"
                          className="block hover:text-green-600 no-underline"
                        >
                          +91 97911 02231
                        </a>
                      </div>
          
                      <div>
                        <p className="uppercase tracking-widest text-xs text-stone-400 mb-1">
                          Email
                        </p>
                        <a
                          href="mailto:enquire@shanmugaengineering.com"
                          className="text-green-600 hover:underline no-underline"
                        >
                          enquire@shanmugaengineering.com
                        </a>
                      </div>
                    </div>
                  </div>
          
                  {/* Design Center */}
                  <div className="border border-stone-200 p-6">
                    <h3
                      className="text-xl font-bold text-stone-900 mb-4"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      Design Center
                    </h3>
          
                    <div className="space-y-4 text-sm text-stone-700 leading-relaxed">
                      <div>
                        <p className="uppercase tracking-widest text-xs text-stone-400 mb-1">
                          Address
                        </p>
          
                        <p>
                          Plot No:4, Dhanalakshmi Enclave,
                          <br />
                          Noombal, Chennai-600 077.
                        </p>
                      </div>
          
                      <div>
                        <p className="uppercase tracking-widest text-xs text-stone-400 mb-1">
                          Email
                        </p>
          
                        <a
                          href="mailto:enquire@shanmugaengineering.com"
                          className="text-green-600 hover:underline no-underline"
                        >
                          enquire@shanmugaengineering.com
                        </a>
                      </div>
                    </div>
                  </div>
          
                  {/* CTA */}
                  <div className="bg-green-600 text-white p-8">
                    <h3
                      className="text-xl font-bold mb-3"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      Ready to work together?
                    </h3>
          
                    <p className="text-sm leading-relaxed text-green-50 mb-6">
                      Share your drawings, CAD files or specifications and our team
                      will get back to you with a competitive quote.
                    </p>
          
                    <a
                      href="mailto:enquire@shanmugaengineering.com?subject=Enquiry%20from%20Website"
                      className="inline-block bg-white text-green-700 px-6 py-3 text-xs font-semibold uppercase tracking-widest no-underline w-full text-center"
                    >
                      Send an Enquiry →
                    </a>
                  </div>
                </div>
          
                {/* RIGHT - GOOGLE MAP */}
                <div className="h-[650px] md:h-full overflow-hidden border border-stone-200">
                  <iframe 
                    title="Shanmuga Engineering Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4331.144225503835!2d80.17854229999999!3d13.1063747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52636cd543d6c1%3A0x91832fef5a779be!2sShanmuga%20Engineering!5e1!3m2!1sen!2sin!4v1781346449990!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </section>

        </main>

        {/* ── FOOTER ────────────────────────────────────────────────────────── */}
        <footer className="bg-white border-t border-stone-200 py-6" role="contentinfo">
          <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-xs text-stone-400">
              © {new Date().getFullYear()} Shanmuga Engineering, Chennai. All rights reserved.
            </p>
            <div className="flex gap-2" aria-label="Certifications">
              {["ISO 9001:2015", "ZED Bronze", "Est. 2012"].map((b) => (
                <span
                  key={b}
                  className="text-xs text-stone-400 border border-stone-200 px-2.5 py-1 tracking-wide uppercase"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}
