import { useState } from 'react';
const services = [{
  title: 'Transformer Assembly',
  body: 'Custom winding, assembly, and production support for reliable power electronics.',
  metric: 'Custom builds',
  icon: 'coil'
}, {
  title: 'PCB Design',
  body: 'Engineering-focused layouts prepared for manufacturability, testing, and scale.',
  metric: 'DFM ready',
  icon: 'pcb'
}, {
  title: 'Assembly Services',
  body: 'Modern SMT assembly for prototypes, short runs, and high-volume production.',
  metric: 'SMT process',
  icon: 'smt'
}];
const process = ['Design review', 'PCB layout', 'SMT assembly', 'Inspection', 'Delivery'];
const customers = [{
  name: 'GlobiLED',
  image: '/customers/globiled.png',
  alt: 'GlobiLED customer logo'
}, {
  name: 'CTC Electronic',
  image: '/customers/CTC.png',
  alt: 'CTC Electronic customer logo'
}, {
  name: 'Ilka',
  image: '/customers/ilka.png',
  alt: 'Ilka customer logo'
}];
function CircuitIcon({
  type
}: {
  type: string;
}) {
  return <svg viewBox="0 0 48 48" className="h-8 w-8" fill="none" aria-hidden="true">
      <path d="M8 24h8m16 0h8M24 8v8m0 16v8" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      <rect x="16" y="16" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="2.6" />
      {type === 'coil' && <path d="M12 35c4-8 8-8 12 0s8 8 12 0" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />}
      {type === 'pcb' && <path d="M10 12h8v8m20 16h-8v-8M34 12h4m-28 24h4" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />}
      {type === 'smt' && <path d="M13 12h4m7 0h4m7 0h4M13 36h4m7 0h4m7 0h4" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />}
    </svg>;
}
export const DigitecHellasWebsiteRedesign = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Assembly Services');
  return <div className="min-h-screen w-full bg-slate-50 font-sans text-slate-900">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#061426]/92 text-white backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-3" aria-label="Digitec Hellas home">
            <span className="grid h-11 w-11 place-items-center rounded-md bg-[#00a6ff] text-[#061426] shadow-[0_18px_60px_rgba(0,166,255,0.28)]">
              <CircuitIcon type="pcb" />
            </span>
            <span>
              <span className="block text-lg font-bold tracking-wide">Digitec Hellas</span>
              <span className="block text-xs font-medium uppercase tracking-[0.22em] text-sky-200">Electronics Manufacturing</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-200 md:flex" aria-label="Main navigation">
            <a className="hover:text-white" href="#services">Services</a>
            <a className="hover:text-white" href="#capabilities">Capabilities</a>
            <a className="hover:text-white" href="#customers">Customers</a>
            <a className="hover:text-white" href="#process">Process</a>
            <a className="hover:text-white" href="#contact">Contact</a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a className="rounded-md border border-white/15 px-4 py-2 text-sm font-semibold text-white hover:border-sky-300 hover:text-sky-200" href="tel:+302106515290">
              Call
            </a>
            <a className="rounded-md bg-white px-4 py-2 text-sm font-bold text-[#061426] hover:bg-sky-200" href="mailto:info@digitechellas.eu?subject=Request%20a%20Quote">
              Request a Quote
            </a>
          </div>

          <button className="grid h-10 w-10 place-items-center rounded-md border border-white/15 text-white md:hidden" type="button" aria-label="Toggle navigation" onClick={() => setMobileOpen(!mobileOpen)}>
            
            <span className="text-xl leading-none">{mobileOpen ? 'x' : '='}</span>
          </button>
        </div>
        {mobileOpen && <div className="border-t border-white/10 px-5 py-4 md:hidden">
            <nav className="grid gap-3 text-sm font-semibold text-slate-200" aria-label="Mobile navigation">
              {['Services', 'Capabilities', 'Customers', 'Process', 'Contact'].map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileOpen(false)}>
                  {item}
                </a>)}
            </nav>
          </div>}
      </header>

      <main id="home">
        <section className="relative isolate overflow-hidden bg-[#061426] text-white">
          <div className="absolute inset-0 -z-30 bg-[radial-gradient(circle_at_18%_20%,rgba(0,166,255,0.42),transparent_32%),radial-gradient(circle_at_82%_24%,rgba(37,211,102,0.16),transparent_26%),linear-gradient(125deg,#061426_0%,#08213d_48%,#0a315d_100%)]" />
          <img className="absolute inset-0 -z-40 h-full w-full object-cover opacity-25 mix-blend-screen" src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=84" alt="Detailed printed circuit board" />
          
          <div className="absolute inset-x-0 bottom-0 -z-20 h-44 bg-gradient-to-t from-[#061426] to-transparent" />

          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-14 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:pb-28 lg:pt-24">
            <div>
              <p className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/10 px-3 py-2 text-sm font-semibold text-sky-100 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-[#25d366]" />
                Athens-based PCB assembly, design, and transformer production
              </p>
              <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-[1.04] tracking-normal text-white md:text-6xl lg:text-7xl">
                Precision PCB Assembly & Design
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
                Digitec Hellas helps industrial teams move from prototype to high-volume electronics production with SMT technology, practical engineering support, and competitive global pricing.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a className="inline-flex items-center justify-center gap-3 rounded-md bg-[#00a6ff] px-6 py-3.5 font-bold text-[#061426] shadow-[0_24px_80px_rgba(0,166,255,0.35)] hover:bg-sky-200" href="mailto:info@digitechellas.eu?subject=Request%20a%20Quote">
                  Request a Quote
                  <span aria-hidden="true">→</span>
                </a>
                <a className="inline-flex items-center justify-center gap-3 rounded-md border border-white/20 px-6 py-3.5 font-bold text-white hover:border-sky-300 hover:text-sky-200" href="#services">
                  View Services
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-5 rounded-lg bg-[#00a6ff]/20 blur-3xl" />
              <div className="relative overflow-hidden rounded-lg border border-white/15 bg-white/10 shadow-2xl backdrop-blur-xl">
                <img className="aspect-[1.12/1] w-full object-cover" src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1300&q=84" alt="Electronics manufacturing technician" />
                
                <div className="grid grid-cols-3 divide-x divide-white/10 border-t border-white/10 bg-[#061426]/88">
                  {[['30+', 'Years'], ['SMT', 'Technology'], ['Global', 'Pricing']].map(([value, label]) => <div className="px-4 py-5 text-center" key={label}>
                      <strong className="block text-2xl text-sky-300">{value}</strong>
                      <span className="text-sm text-slate-300">{label}</span>
                    </div>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0077c8]">Core Services</p>
              <h2 className="mt-3 text-4xl font-bold leading-tight text-[#061426] md:text-5xl">Specialized electronics manufacturing for demanding builds</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                The redesigned service structure makes it easy for B2B buyers to understand what Digitec Hellas does and how to start a quote conversation.
              </p>
              <div className="mt-8 rounded-md border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Selected capability</p>
                <p className="mt-2 text-2xl font-bold text-[#061426]">{selectedService}</p>
                <p className="mt-3 text-slate-600">Click a service card to focus the quote path around that manufacturing need.</p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {services.map(service => <button key={service.title} type="button" onClick={() => setSelectedService(service.title)} className={`group rounded-lg border bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${selectedService === service.title ? 'border-[#00a6ff] ring-4 ring-sky-100' : 'border-slate-200'}`} style={{
              textAlign: "center",
              justifyContent: "center"
            }}>
                
                  <span className="grid h-14 w-14 place-items-center rounded-md bg-[#061426] text-sky-300 transition group-hover:bg-[#00a6ff] group-hover:text-[#061426]" style={{
                textAlign: "center",
                justifyContent: "center",
                width: "56px",
                maxWidth: "56px"
              }}>
                    <CircuitIcon type={service.icon} />
                  </span>
                  <h3 className="mt-6 text-xl font-bold text-[#061426]">{service.title}</h3>
                  <p className="mt-3 min-h-24 leading-7 text-slate-600">{service.body}</p>
                  <span className="mt-5 inline-flex rounded bg-slate-100 px-3 py-1 text-sm font-bold text-[#0077c8]">{service.metric}</span>
                </button>)}
            </div>
          </div>
        </section>

        <section id="capabilities" className="bg-white py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
            <div className="overflow-hidden rounded-lg border border-slate-200 shadow-sm">
              <img className="h-full min-h-[420px] w-full object-cover" src="https://images.unsplash.com/photo-1562408590-e32931084e23?auto=format&fit=crop&w=1300&q=84" alt="Printed circuit board production detail" />
              
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0077c8]">Trust Signals</p>
              <h2 className="mt-3 text-4xl font-bold leading-tight text-[#061426] md:text-5xl">Reliable production without the industrial website clutter</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                The new visual hierarchy turns the company’s strongest claims into fast-scanning proof points for procurement, engineering, and operations teams.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[['30+ Years Experience', 'Established electronics industry expertise.'], ['Prototype Development', 'Support for early-stage validation and iteration.'], ['High-Volume Production', 'Assembly flows designed for repeatable output.'], ['Global Market Pricing', 'Competitive pricing for international buyers.']].map(([title, body]) => <div className="rounded-md border border-slate-200 bg-slate-50 p-5" key={title}>
                    <div className="mb-4 h-1.5 w-14 rounded-full bg-[#00a6ff]" />
                    <h3 className="font-bold text-[#061426]">{title}</h3>
                    <p className="mt-2 leading-6 text-slate-600">{body}</p>
                  </div>)}
              </div>
            </div>
          </div>
        </section>

        <section id="customers" className="border-y border-slate-200 bg-slate-50 px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0077c8]">Customer Network</p>
                <h2 className="mt-3 text-4xl font-bold leading-tight text-[#061426] md:text-5xl">Recognizable teams, presented with B2B restraint</h2>
                <p className="mt-5 leading-7 text-slate-600">
                  A simple proof band keeps attention on procurement confidence and production credibility.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {customers.map(customer => <article key={customer.name} className="group rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl">
                    <div className="grid h-32 place-items-center">
                      <img src={customer.image} alt={customer.alt} className="max-h-16 w-auto object-contain grayscale transition duration-500 group-hover:grayscale-0" />
                    </div>
                    <div className="mt-5 border-t border-slate-100 pt-4">
                      <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#061426]">{customer.name}</p>
                    </div>
                  </article>)}
              </div>
            </div>
          </div>
        </section>

        <section id="process" className="bg-[#061426] px-5 py-20 text-white lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-300">Production Flow</p>
                <h2 className="mt-3 max-w-3xl text-4xl font-bold leading-tight md:text-5xl">A clearer path from specification to assembled electronics</h2>
              </div>
              <a className="inline-flex w-fit items-center gap-3 rounded-md bg-white px-5 py-3 font-bold text-[#061426] hover:bg-sky-200" href="mailto:info@digitechellas.eu?subject=PCB%20Assembly%20Project">
                Start project
                <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-5">
              {process.map((step, index) => <div className="rounded-md border border-white/10 bg-white/8 p-5" key={step}>
                  <span className="text-sm font-bold text-sky-300">0{index + 1}</span>
                  <h3 className="mt-5 text-lg font-bold">{step}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">Structured communication and manufacturing focus at every stage.</p>
                </div>)}
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-8 px-5 py-20 lg:grid-cols-[1fr_420px] lg:px-8">
          <div className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0077c8]">Quote Ready</p>
            <h2 className="mt-3 text-4xl font-bold text-[#061426]">Built to convert technical visitors into qualified leads</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              The homepage now prioritizes what buyers need first: capability, credibility, contact paths, and enough technical specificity to trust the manufacturer.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {['Fast service scanning', 'Clear CTA hierarchy', 'Mobile-first contact'].map(item => <div className="rounded-md bg-slate-100 p-4 font-bold text-[#061426]" key={item}>{item}</div>)}
            </div>
          </div>

          <aside className="rounded-lg bg-[#0a315d] p-6 text-white shadow-[0_30px_90px_rgba(6,20,38,0.25)]">
            <h3 className="text-2xl font-bold">Request a quote</h3>
            <p className="mt-3 text-slate-200">Selected service: <span className="font-bold text-sky-200">{selectedService}</span></p>
            <div className="mt-6 grid gap-3 text-sm">
              <a className="rounded-md bg-white px-4 py-3 font-bold text-[#061426] hover:bg-sky-200" href={`mailto:info@digitechellas.eu?subject=${encodeURIComponent(selectedService + ' Quote Request')}`}>
                Email info@digitechellas.eu
              </a>
              <a className="rounded-md border border-white/20 px-4 py-3 font-bold text-white hover:border-sky-300" href="tel:+302106515290">
                Call +30-210-651-52-90
              </a>
            </div>
          </aside>
        </section>
      </main>

      <footer id="contact" className="bg-slate-950 px-5 py-12 text-slate-300 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_1.4fr]">
          <div>
            <div className="flex items-center gap-3 text-white">
              <span className="grid h-11 w-11 place-items-center rounded-md bg-[#00a6ff] text-[#061426]">
                <CircuitIcon type="pcb" />
              </span>
              <span className="text-xl font-bold">Digitec Hellas</span>
            </div>
            <p className="mt-4 max-w-md leading-7">PCB assembly, PCB design, transformer assembly, and electronics manufacturing from Holargos, Athens.</p>
          </div>
          <address className="grid gap-5 not-italic sm:grid-cols-3">
            <a className="hover:text-white" href="tel:+302106515290">
              <span className="block text-sm font-bold uppercase tracking-[0.16em] text-sky-300">Phone</span>
              <span className="mt-2 block">+30-210-651-52-90</span>
            </a>
            <a className="hover:text-white" href="mailto:info@digitechellas.eu">
              <span className="block text-sm font-bold uppercase tracking-[0.16em] text-sky-300">Email</span>
              <span className="mt-2 block">info@digitechellas.eu</span>
            </a>
            <span>
              <span className="block text-sm font-bold uppercase tracking-[0.16em] text-sky-300">Address</span>
              <span className="mt-2 block">Aristotelous 3, Holargos, Athens 15562</span>
            </span>
          </address>
        </div>
        <div className="mx-auto mt-10 flex max-w-7xl flex-col justify-between gap-5 border-t border-white/10 pt-6 text-sm sm:flex-row">
          <p>© 2026 Digitec Hellas. Precision electronics manufacturing.</p>
          <div className="flex gap-5">
            <a className="hover:text-white" href="https://www.facebook.com/">Facebook</a>
            <a className="hover:text-white" href="https://www.youtube.com/">YouTube</a>
            <a className="hover:text-white" href="https://twitter.com/">Twitter</a>
          </div>
        </div>
      </footer>
    </div>;
};
