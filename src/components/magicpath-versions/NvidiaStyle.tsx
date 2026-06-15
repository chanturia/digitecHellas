import { useState } from 'react';
const logo = '/Digitechellas2.png';
const services = [{
  title: 'SMT Assembly',
  label: 'Production engine',
  text: 'High-precision assembly for prototypes, short-run batches, and scalable PCB production.',
  image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=86'
}, {
  title: 'PCB Design',
  label: 'Manufacturing intelligence',
  text: 'Board design shaped around component density, inspection, repeatability, and build readiness.',
  image: 'https://images.unsplash.com/photo-1592659762303-90081d34b277?auto=format&fit=crop&w=1400&q=86'
}, {
  title: 'Transformer Assembly',
  label: 'Power systems',
  text: 'Custom winding and transformer assembly for electronics that need dependable power behavior.',
  image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1400&q=86'
}];
const specs = ['30+ years experience', 'SMT technology', 'Prototype to volume', 'Global pricing', 'Athens production', 'Quote-ready support'];
const customers = [{
  src: 'https://www.digitechellas.eu/images/castumers/globiled.png',
  alt: 'GlobiLED',
  name: 'GlobiLED'
}, {
  src: 'https://www.digitechellas.eu/images/castumers/CTC.png',
  alt: 'CTC Electronic',
  name: 'CTC Electronic'
}, {
  src: 'https://www.digitechellas.eu/images/castumers/ilka.png',
  alt: 'Ilka',
  name: 'Ilka'
}];
export const DigitecHellasNVIDIAStyleLayout = () => {
  const [active, setActive] = useState(services[0]);
  const [menuOpen, setMenuOpen] = useState(false);
  return <div className="min-h-screen w-full bg-[#0a0a0a] font-sans text-white">
      <header className="sticky top-0 z-50 border-t-4 border-[#FEC21E] border-b border-b-[#FEC21E]/25 bg-[#0a0a0a]/88 backdrop-blur-xl">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-4" aria-label="Digitec Hellas home">
            <span className="grid h-14 w-24 place-items-center rounded bg-white px-3 shadow-[0_0_40px_rgba(254,194,30,0.22)]">
              <img src={logo} alt="Digitec Hellas logo" className="max-h-11 w-auto object-contain" />
            </span>
            <span className="hidden sm:block">
              <span className="block text-sm font-extrabold uppercase tracking-[0.2em] text-[#FEC21E]">Digitec Hellas</span>
              <span className="block text-xs font-bold text-zinc-400">Electronics manufacturing platform</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-xs font-bold uppercase tracking-[0.14em] text-zinc-300 md:flex" aria-label="Main navigation">
            {['System', 'Services', 'Performance', 'Process', 'Customers', 'Contact'].map(item => <a key={item} className="hover:text-[#FEC21E]" href={`#${item.toLowerCase()}`}>
                {item}
              </a>)}
          </nav>

          <a className="hidden rounded bg-[#FEC21E] px-4 py-2 text-sm font-extrabold text-black hover:bg-[#AAC02D] md:inline-flex" href="mailto:info@digitechellas.eu?subject=Request%20a%20Quote">
            Request quote
          </a>

          <button type="button" aria-label="Toggle menu" className="grid h-10 w-10 place-items-center rounded border border-[#FEC21E]/30 text-[#FEC21E] md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? 'x' : '='}
          </button>
        </div>
        {menuOpen && <nav className="grid gap-4 border-t border-[#FEC21E]/20 px-5 py-4 text-sm font-bold uppercase tracking-[0.12em] text-zinc-300 md:hidden" aria-label="Mobile navigation">
            {['System', 'Services', 'Performance', 'Process', 'Customers', 'Contact'].map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
                {item}
              </a>)}
          </nav>}
      </header>

      <main id="home">
        <section id="system" className="relative isolate overflow-hidden">
          <div className="absolute inset-0 -z-40 bg-[#0a0a0a]" />
          <video className="absolute inset-0 -z-30 h-full w-full object-cover opacity-30" autoPlay muted loop playsInline>
            <source src="https://www.digitechellas.eu/video/introVideo480.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,#0a0a0a_0%,rgba(10,10,10,0.72)_42%,rgba(10,10,10,0.88)_100%)]" />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(254,194,30,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(254,194,30,0.10)_1px,transparent_1px)] bg-[size:64px_64px] opacity-35" />
          <div className="absolute right-[-140px] top-20 -z-10 h-[520px] w-[520px] rounded-full bg-[#FEC21E]/20 blur-3xl" />

          <div className="mx-auto grid min-h-[840px] max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
            <div>
              <p className="inline-flex items-center gap-3 border-l-4 border-[#FEC21E] bg-white/5 px-4 py-2 text-sm font-extrabold uppercase tracking-[0.2em] text-[#AAC02D]">
                Performance manufacturing for electronics teams
              </p>
              <h1 className="mt-7 max-w-5xl text-6xl font-black leading-[0.95] tracking-normal md:text-8xl">
                Built for precision output.
              </h1>
              <p className="mt-7 max-w-2xl text-xl font-medium leading-8 text-zinc-300">
                A high-tech, NVIDIA-inspired website direction for Digitec Hellas: dark, fast, technical, and engineered around PCB assembly, design, and transformer production.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a className="rounded bg-[#FEC21E] px-7 py-3.5 text-center font-extrabold text-black shadow-[0_0_50px_rgba(254,194,30,0.28)] hover:bg-[#AAC02D]" href="mailto:info@digitechellas.eu?subject=Request%20a%20Quote">
                  Request a quote
                </a>
                <a className="rounded border border-[#FEC21E]/40 px-7 py-3.5 text-center font-extrabold text-[#AAC02D] hover:border-[#AAC02D]" href="#services">
                  Explore services
                </a>
              </div>
            </div>

            <aside className="relative">
              <div className="absolute -inset-4 bg-[#FEC21E]/18 blur-3xl" />
              <div className="relative border border-[#FEC21E]/25 bg-black/55 p-5 shadow-[0_0_80px_rgba(254,194,30,0.18)] backdrop-blur">
                <div className="grid place-items-center border border-white/10 bg-white p-7">
                  <img src={logo} alt="Digitec Hellas logo large" className="h-28 w-auto object-contain" />
                </div>
                <div className="mt-4 grid grid-cols-3 gap-px bg-[#FEC21E]/25">
                  {[['30+', 'Years'], ['SMT', 'Tech'], ['Global', 'Pricing']].map(([value, label]) => <div key={label} className="bg-[#141414] px-4 py-5 text-center">
                      <strong className="block text-3xl font-black text-[#FEC21E]">{value}</strong>
                      <span className="text-xs font-bold uppercase tracking-[0.16em] text-zinc-400">{label}</span>
                    </div>)}
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section id="services" className="bg-[#111111] px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#FEC21E]">Core systems</p>
                <h2 className="mt-3 max-w-4xl text-5xl font-black leading-tight md:text-7xl">Manufacturing modules.</h2>
              </div>
              <p className="max-w-xl text-lg leading-8 text-zinc-400">
                Services are presented like technical product capabilities: clear, high-contrast, and easy to route into a quote.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-[420px_1fr]">
              <div className="grid gap-3">
                {services.map(service => <button key={service.title} type="button" onClick={() => setActive(service)} className={`border p-5 text-left transition hover:border-[#FEC21E] ${active.title === service.title ? 'border-[#FEC21E] bg-[#FEC21E] text-black' : 'border-white/10 bg-white/[0.04] text-white'}`}>
                  
                    <span className={`text-xs font-black uppercase tracking-[0.2em] ${active.title === service.title ? 'text-black/70' : 'text-[#FEC21E]'}`}>{service.label}</span>
                    <span className="mt-2 block text-2xl font-black">{service.title}</span>
                    <span className={`mt-3 block leading-7 ${active.title === service.title ? 'text-black/75' : 'text-zinc-400'}`}>{service.text}</span>
                  </button>)}
              </div>

              <article className="overflow-hidden border border-[#FEC21E]/30 bg-black shadow-[0_0_90px_rgba(254,194,30,0.14)]">
                <div className="relative h-[540px]">
                  <img src={active.image} alt={active.title} className="absolute inset-0 h-full w-full object-cover opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <p className="text-sm font-black uppercase tracking-[0.24em] text-[#AAC02D]">{active.label}</p>
                    <h3 className="mt-3 text-6xl font-black leading-none">{active.title}</h3>
                    <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-300">{active.text}</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="performance" className="relative overflow-hidden bg-black px-5 py-20 lg:px-8">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(254,194,30,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(254,194,30,0.09)_1px,transparent_1px)] bg-[size:42px_42px] opacity-40" />
          <div className="relative mx-auto max-w-7xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#FEC21E]">Performance signals</p>
            <h2 className="mt-3 max-w-5xl text-5xl font-black leading-tight md:text-7xl">The proof layer for industrial buyers.</h2>
            <div className="mt-12 grid gap-px overflow-hidden border border-[#FEC21E]/25 bg-[#FEC21E]/25 md:grid-cols-3">
              {specs.map(item => <div key={item} className="bg-[#111111] p-7">
                  <span className="block text-4xl font-black text-[#FEC21E]">+</span>
                  <span className="mt-5 block text-xl font-bold text-white">{item}</span>
                </div>)}
            </div>
          </div>
        </section>

        <section id="process" className="bg-[#181818] px-5 py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#FEC21E]">Process architecture</p>
              <h2 className="mt-3 text-5xl font-black leading-tight">From spec to assembled hardware.</h2>
              <p className="mt-6 text-lg leading-8 text-zinc-400">
                The layout turns Digitec's workflow into a confident technical sequence: review, design, assemble, inspect, deliver.
              </p>
            </div>
            <div className="grid gap-4">
              {['Specification review', 'PCB design and layout', 'SMT / THD assembly', 'Inspection and delivery'].map((step, index) => <div key={step} className="flex items-center gap-5 border border-white/10 bg-white/[0.04] p-5">
                  <span className="grid h-14 w-14 place-items-center bg-[#FEC21E] text-lg font-black text-black">0{index + 1}</span>
                  <span className="text-xl font-bold">{step}</span>
                </div>)}
            </div>
          </div>
        </section>

        <section id="customers" className="border-t border-[#FEC21E]/25 bg-[#111111] px-5 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#AAC02D]">Trusted Partners</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-white md:text-5xl">Our Satisfied Customers</h2>
              <p className="mx-auto mt-4 max-w-xl text-center text-lg text-zinc-400">
                Companies across Greece and beyond trust Digitec Hellas for their electronics manufacturing needs.
              </p>
              <div className="mx-auto mt-8 h-px w-20 bg-[#FEC21E]" />
            </div>

            <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3">
              {customers.map(customer => <div key={customer.name} className="group flex cursor-pointer flex-col items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-10 transition-all duration-300 hover:-translate-y-1 hover:border-[#FEC21E]/60 hover:bg-white/[0.07] hover:shadow-[0_0_40px_rgba(254,194,30,0.12)]">
                  <img src={customer.src} alt={customer.alt} className="max-h-16 w-auto object-contain opacity-60 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0" />
                  <span className="text-sm font-bold uppercase tracking-[0.14em] text-zinc-400 transition-colors duration-300 group-hover:text-[#FEC21E]">{customer.name}</span>
                  <div className="mt-2 h-0.5 w-8 origin-center scale-x-0 rounded-full bg-[#FEC21E] opacity-0 transition-all duration-300 group-hover:scale-x-100 group-hover:opacity-100" />
                </div>)}
            </div>

            <div className="mt-16 text-center">
              <p className="text-base text-zinc-400">Join our growing list of satisfied partners.</p>
              <a href="mailto:info@digitechellas.eu" className="mt-4 inline-flex items-center gap-2 border-b border-[#FEC21E]/40 pb-0.5 text-sm font-bold uppercase tracking-[0.14em] text-[#FEC21E] transition-colors hover:border-[#FEC21E] hover:text-white">
                Get in touch
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-[#0a0a0a] px-5 py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="border border-[#FEC21E]/25 bg-[#FEC21E] p-8 text-black md:p-12">
              <p className="text-sm font-black uppercase tracking-[0.22em]">Quote pipeline</p>
              <h2 className="mt-4 text-5xl font-black leading-tight md:text-7xl">Send the build requirements.</h2>
              <p className="mt-6 max-w-2xl text-xl font-semibold leading-8 text-black/75">
                Start with the selected capability, share your board files or specs, and move the conversation toward production.
              </p>
              <a className="mt-9 inline-flex bg-black px-7 py-3.5 font-black text-[#FEC21E] hover:bg-[#101510]" href={`mailto:info@digitechellas.eu?subject=${encodeURIComponent(active.title + ' quote request')}`}>
                Email info@digitechellas.eu
              </a>
            </div>
            <address className="border border-white/10 bg-white/[0.04] p-8 not-italic md:p-12">
              <img src={logo} alt="Digitec Hellas footer logo" className="h-24 w-auto bg-white px-5 py-3" />
              <div className="mt-10 space-y-6">
                <p>
                  <span className="block text-sm font-black uppercase tracking-[0.2em] text-[#FEC21E]">Location</span>
                  <span className="mt-2 block text-lg text-zinc-300">Aristotelous 3, Holargos, Athens 15562</span>
                </p>
                <p>
                  <span className="block text-sm font-black uppercase tracking-[0.2em] text-[#FEC21E]">Contact</span>
                  <span className="mt-2 block text-lg text-zinc-300">+30-210-651-52-90 / +30-697-026-05-91</span>
                </p>
              </div>
            </address>
          </div>
        </section>
      </main>
    </div>;
};