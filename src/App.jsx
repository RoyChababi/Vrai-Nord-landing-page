import {
  ArrowRight,
  Blocks,
  BriefcaseBusiness,
  CircuitBoard,
  Cpu,
  Database,
  FlaskConical,
  Gauge,
  MapPin,
  Phone,
  ShieldCheck,
  Waypoints,
} from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Products', href: '#products' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const solutions = [
  {
    title: 'Private Medical Software',
    description: 'Custom platforms for private clinics, laboratories, and healthcare operators.',
    icon: FlaskConical,
  },
  {
    title: 'Workflow Automation',
    description: 'Tools that replace manual follow-ups, spreadsheets, texts, and fragmented processes.',
    icon: Cpu,
  },
  {
    title: 'API & System Integrations',
    description: 'Integration with LIMS systems, pricing data, internal tools, and external platforms.',
    icon: Waypoints,
  },
  {
    title: 'IoT & Hardware Integration',
    description: 'RFID, sensors, scanners, GPS, temperature tracking, and connected field devices.',
    icon: CircuitBoard,
  },
]

const products = [
  {
    title: 'MedTracker',
    description:
      'A medical sample logistics and chain-of-custody platform for clinics, laboratories, drivers, and private medical networks, designed to support preparation, pickup, transport, delivery, receiving, redistribution, RFID workflows, cooler tracking, and LIMS integration.',
  },
  {
    title: 'Price Engine',
    description:
      'A pricing software for medical test catalogs and laboratory pricing data, built to help private medical operators extract, normalize, compare, and manage pricing information faster with fewer manual errors.',
  },
  {
    title: 'RestoPort',
    description:
      'An airport restaurant operations platform using flight data, passenger movement, delays, cancellations, and future sensor data to forecast demand and improve staffing, preparation, and operational decisions.',
  },
  {
    title: 'Lector MD',
    description:
      'A medical document intelligence tool designed to help healthcare operators read, process, organize, and extract useful information from medical or administrative documents as the product evolves.',
  },
]

const whyItems = [
  'Industry-specific software',
  'Fast custom development',
  'Medical workflow understanding',
  'End-to-end technical execution',
]

function App() {
  return (
    <div className="min-h-screen" id="home">
      <header className="sticky top-0 z-50 border-b border-cyan-400/10 bg-slate-950/75 backdrop-blur-lg">
        <nav className="mx-auto flex w-[92%] max-w-6xl items-center justify-between py-4">
          <a href="#home" className="flex items-center gap-2 text-lg font-semibold text-white">
            <span className="rounded-lg bg-cyan-400/20 p-2 text-cyan-300">
              <Blocks className="h-4 w-4" />
            </span>
            Vrai Nord EPM
          </a>
          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-sm text-slate-300 transition hover:text-cyan-300">
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="rounded-xl border border-cyan-400/50 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:bg-cyan-500/20"
          >
            Contact Us
          </a>
        </nav>
      </header>

      <main>
        <section className="section-padding">
          <div className="mx-auto grid w-[92%] max-w-6xl gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 px-3 py-1 text-xs uppercase tracking-[0.18em] text-cyan-300">
                Montreal • Med-Tech • Operational Systems
              </p>
              <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
                Software solutions for specialized operational Systems.
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-slate-300">
                Vrai Nord EPM Inc. builds software systems for private clinics, laboratories, medical logistics, and
                specialized business operations requiring reliable automation, integration, and operational visibility.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-medium text-slate-950 transition hover:bg-cyan-400"
                >
                  Start a Project <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#products"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/70 px-5 py-3 font-medium text-slate-100 transition hover:border-cyan-300/40 hover:text-cyan-200"
                >
                  View Our Products
                </a>
              </div>
            </div>
            <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-b from-cyan-500/10 to-blue-600/5 p-6 shadow-glow">
              <p className="text-sm font-medium text-cyan-200">Operational Modules</p>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                {['Medical Logistics', 'Pricing Automation', 'Airport Operations', 'Clinical Tools'].map((module) => (
                  <div key={module} className="rounded-xl border border-cyan-400/20 bg-slate-900/80 px-4 py-3 text-slate-200">
                    {module}
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-xl border border-slate-700 bg-slate-950/70 p-4 text-sm text-slate-300">
                Building the software infrastructure behind modern private medical operations.
              </div>
            </div>
          </div>
        </section>

        <section id="solutions" className="section-padding border-y border-slate-800/70 bg-slate-950/30">
          <div className="mx-auto w-[92%] max-w-6xl">
            <h2 className="text-3xl font-semibold text-white md:text-4xl">Solutions</h2>
            <p className="mt-3 max-w-3xl text-slate-300">
              Specialized engineering for high-responsibility teams operating across healthcare and operational
              industries.
            </p>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {solutions.map((item) => (
                <article key={item.title} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
                  <item.icon className="h-6 w-6 text-cyan-300" />
                  <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-slate-300">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="products" className="section-padding">
          <div className="mx-auto w-[92%] max-w-6xl">
            <h2 className="text-3xl font-semibold text-white md:text-4xl">Products</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {products.map((product) => (
                <article key={product.title} className="rounded-2xl border border-cyan-400/15 bg-slate-900/80 p-6">
                  <div className="flex items-center gap-3">
                    <Database className="h-5 w-5 text-cyan-300" />
                    <h3 className="text-xl font-semibold text-white">{product.title}</h3>
                  </div>
                  <p className="mt-4 text-slate-300">{product.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section-padding border-y border-slate-800/70 bg-slate-900/20">
          <div className="mx-auto grid w-[92%] max-w-6xl gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold text-white md:text-4xl">About Vrai Nord EPM</h2>
              <p className="mt-5 text-slate-300">
                Vrai Nord EPM is a Montreal-based company founded by a technical team building real software products
                for real operational problems. We combine software engineering, workflow analysis, API integration, and
                hardware/IoT knowledge to create practical, scalable systems designed around how operators actually
                work.
              </p>
            </div>
            <div className="grid gap-3 text-slate-200">
              {[
                'Montreal-based and focused on the private medical sector.',
                'Product-focused company with hands-on implementation depth.',
                'Experience across software, APIs, automation, and hardware integration.',
                'Built for real business operations, not generic dashboards.',
              ].map((item) => (
                <div key={item} className="rounded-xl border border-slate-700/80 bg-slate-900/70 p-4">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="mx-auto w-[92%] max-w-6xl">
            <h2 className="text-3xl font-semibold text-white md:text-4xl">Why Vrai Nord</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {whyItems.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                  <ShieldCheck className="h-5 w-5 text-cyan-300" />
                  <p className="mt-3 font-medium text-slate-100">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section-padding border-t border-cyan-400/20 bg-gradient-to-b from-cyan-600/5 to-transparent">
          <div className="mx-auto grid w-[92%] max-w-6xl gap-8 rounded-3xl border border-cyan-400/20 bg-slate-900/80 p-8 lg:grid-cols-[1.2fr_.8fr]">
            <div>
              <h2 className="text-3xl font-semibold text-white md:text-4xl">Let’s build your next system.</h2>
              <p className="mt-3 text-slate-300">
                Tell us about your workflow challenges and we’ll help architect the right technical solution.
              </p>
            </div>
            <div className="space-y-3 text-slate-200">
              <p className="flex items-center gap-2"><BriefcaseBusiness className="h-4 w-4 text-cyan-300" /> info@vrainord.ca</p>
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-cyan-300" /> Montreal, Quebec</p>
              <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-cyan-300" /> +1 (438) 922-2595</p>
              <a href="mailto:info@vrainord.ca" className="mt-4 inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-4 py-2 font-medium text-slate-950">
                Contact by Email <Gauge className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 py-8">
        <div className="mx-auto flex w-[92%] max-w-6xl flex-col justify-between gap-3 text-sm text-slate-400 md:flex-row">
          <p>Vrai Nord EPM Inc. © {new Date().getFullYear()}</p>
          <p>Software solutions, automation, med-tech innovation</p>
          <a href="mailto:info@vrainord.ca" className="text-cyan-300 hover:text-cyan-200">
            info@vrainord.ca
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
