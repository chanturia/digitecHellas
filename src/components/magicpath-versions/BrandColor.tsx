import { useState } from 'react';
const brand = {
  logo: '/Digitechellas2.png',
  yellow: '#FEC21E',
  green: '#AAC02D'
};
const services = [{
  title: 'Transformer assembly',
  image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1100&q=84',
  text: 'Custom transformer winding and assembly from an electronics workshop with decades of production experience.'
}, {
  title: 'PCB Design',
  image: 'https://images.unsplash.com/photo-1592659762303-90081d34b277?auto=format&fit=crop&w=1100&q=84',
  text: 'Practical PCB design and layout support prepared for assembly, reliability, and real manufacturing constraints.'
}, {
  title: 'Assembly services',
  image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1100&q=84',
  text: 'SMT and THD assembly for prototypes, short-run builds, and high-volume production requirements.'
}];
const capabilities = ['SMD assembly', 'Fine pitch components', 'Prototype development', 'High-volume production', 'ROHS compliant', 'Flexible board types'];
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
export const DigitecHellasBrandColorLayout = () => {
  const [activeService, setActiveService] = useState(services[2]);
  const [menuOpen, setMenuOpen] = useState(false);
  return <div className="min-h-screen w-full bg-white font-sans text-[#202020]">
      <header className="sticky top-0 z-50 border-t-4 border-[#FEC21E] bg-[linear-gradient(90deg,#000000_0%,#3f3f3f_38%,#3f3f3f_62%,#131313_100%)] text-white shadow-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
          <a href="#home" className="flex items-center gap-4" aria-label="Digitec Hellas home">
            <span className="grid h-16 w-24 place-items-center rounded-md bg-white px-3 shadow-md">
              <img src={brand.logo} alt="Digitec Hellas logo" className="max-h-12 w-auto object-contain" />
            </span>
            <span className="hidden sm:block">
              <span className="block text-sm font-bold uppercase tracking-[0.18em] text-[#FEC21E]">Digitec Hellas</span>
              <span className="block text-xs font-semibold text-zinc-300">PCB Assembly â€¢ Design â€¢ Transformers</span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-bold md:flex" aria-label="Main navigation">
            {['Home', 'About', 'Services', 'Capabilities', 'Customers', 'Contact'].map(item => <a key={item} className="text-[#FEC21E] transition hover:text-white" href={`#${item === 'Home' ? 'home' : item.toLowerCase()}`}>
                {item}
              </a>)}
          </nav>

          <a className="hidden rounded-md bg-[#FEC21E] px-4 py-2 text-sm font-extrabold text-black shadow-[0_14px_36px_rgba(254,194,30,0.28)] hover:bg-[#AAC02D] md:inline-flex" href="mailto:info@digitechellas.eu?subject=Request%20a%20Quote">
            Request quote
          </a>

          <button type="button" aria-label="Toggle menu" className="grid h-11 w-11 place-items-center rounded-md border border-white/20 text-[#FEC21E] md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            
            {menuOpen ? 'x' : '='}
          </button>
        </div>
        {menuOpen && <nav className="grid gap-3 border-t border-white/10 px-5 py-4 text-sm font-bold md:hidden" aria-label="Mobile navigation">
            {['Home', 'About', 'Services', 'Capabilities', 'Customers', 'Contact'].map(item => <a key={item} className="text-[#FEC21E]" href={`#${item === 'Home' ? 'home' : item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
                {item}
              </a>)}
          </nav>}
      </header>

      <main id="home">
        <section className="relative isolate overflow-hidden bg-[#111111] text-white">
          <video className="absolute inset-0 -z-30 h-full w-full object-cover opacity-40" autoPlay muted loop playsInline>
            <source src="/video/introVideo480.webm" type="video/webm" />
            <source src="/video/introVideo480.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 -z-20 bg-black/58" />
          <div className="absolute inset-x-0 top-0 -z-10 h-2 bg-[#FEC21E]" />
          <div className="absolute -left-24 top-16 -z-10 h-80 w-80 rounded-full bg-[#AAC02D]/20 blur-3xl" />
          <div className="absolute -right-20 bottom-20 -z-10 h-96 w-96 rounded-full bg-[#FEC21E]/20 blur-3xl" />

          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.04fr_0.96fr] lg:px-8 lg:py-28">
            <div>
              <div className="inline-flex items-center gap-3 rounded-md border border-[#FEC21E]/50 bg-black/35 px-4 py-2 text-sm font-bold text-[#FEC21E] backdrop-blur">
                <span className="h-2.5 w-2.5 rounded-full bg-[#AAC02D]" />
                Over 30 years in electronic industry
              </div>
              <h1 className="mt-7 max-w-4xl text-5xl font-extrabold leading-[1.03] tracking-normal md:text-6xl lg:text-7xl">
                PCB Assembly & Design with the original Digitec Hellas identity
              </h1>
              <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-zinc-200">
                A modern B2B website direction that keeps the companyâ€™s black, yellow, and green brand language while making services, trust, and quote actions easier to scan.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a className="inline-flex justify-center rounded-md bg-[#FEC21E] px-6 py-3.5 font-extrabold text-black shadow-[0_24px_70px_rgba(254,194,30,0.32)] hover:bg-[#AAC02D]" href="mailto:info@digitechellas.eu?subject=Request%20a%20Quote">
                  Call us for a quote today
                </a>
                <a className="inline-flex justify-center rounded-md border border-white/25 px-6 py-3.5 font-extrabold text-white hover:border-[#FEC21E] hover:text-[#FEC21E]" href="tel:+302106515290">
                  +30-210-651-52-90
                </a>
              </div>
            </div>

            <aside className="relative rounded-xl border border-white/12 bg-white/10 p-5 shadow-2xl backdrop-blur-md">
              <div className="rounded-lg bg-white p-6">
                <img src={brand.logo} alt="Digitec Hellas logo large" className="mx-auto h-28 w-auto object-contain" />
                <div className="mt-6 grid grid-cols-3 divide-x divide-zinc-200 rounded-md border border-zinc-200 text-center">
                  {[['30+', 'years'], ['SMT', 'equipment'], ['Global', 'prices']].map(([value, label]) => <div key={label} className="px-3 py-4">
                      <strong className="block text-2xl text-black">{value}</strong>
                      <span className="text-xs font-bold uppercase tracking-wide text-zinc-500">{label}</span>
                    </div>)}
                </div>
              </div>
              <div className="mt-4 rounded-lg bg-[linear-gradient(90deg,#000_0%,#3f3f3f_50%,#131313_100%)] p-5">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#FEC21E]">Featured focus</p>
                <p className="mt-2 text-2xl font-extrabold">{activeService.title}</p>
                <p className="mt-2 text-sm leading-6 text-zinc-300">{activeService.text}</p>
              </div>
            </aside>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#AAC02D]">Services</p>
            <h2 className="mt-3 text-4xl font-extrabold text-black md:text-5xl">Current-site services, redesigned for clarity</h2>
            <div className="mx-auto mt-5 h-px w-72 bg-gradient-to-r from-transparent via-black to-transparent" />
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-3">
            {services.map(service => <button key={service.title} type="button" onClick={() => setActiveService(service)} className={`group overflow-hidden rounded-[24px] border bg-white text-left shadow-[0_22px_55px_rgba(0,0,0,0.18)] transition hover:-translate-y-1 ${activeService.title === service.title ? 'border-[#FEC21E] ring-4 ring-[#FEC21E]/25' : 'border-zinc-200'}`}>
              
                <div className="bg-[#FEC21E] px-5 py-3 text-center text-xl font-bold italic text-black underline">
                  {service.title}
                </div>
                <img src={service.image} alt={service.title} className="h-52 w-full object-cover transition duration-300 group-hover:scale-105" />
                <div className="p-5">
                  <p className="leading-7 text-zinc-700">{service.text}</p>
                  <span className="mt-5 inline-flex rounded-md bg-black px-3 py-1 text-sm font-bold text-[#FEC21E]">Explore service</span>
                </div>
              </button>)}
          </div>
        </section>

        <section id="about" className="bg-[#e5e0d2] py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div className="rounded-xl bg-[linear-gradient(135deg,#000_0%,#3f3f3f_58%,#131313_100%)] p-8 text-white shadow-xl">
              <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#FEC21E]">About Digitec Hellas</p>
              <h2 className="mt-3 text-4xl font-extrabold leading-tight">Family-business heritage, modern SMT capability</h2>
              <p className="mt-5 text-lg leading-8 text-zinc-200">
                The source site describes a company established as a family business with a wide range of electronics assembly services. This layout keeps that trust story but gives it sharper structure.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {[['High quality', 'Effective and flexible assembly-product solutions.'], ['On-time execution', 'Prototype and production support in the laboratory.'], ['Customer focus', 'Service quality, optimum support, and satisfaction.'], ['Environmentally friendly', 'Modernized, efficient equipment and responsible procedures.']].map(([title, body]) => <article className="rounded-lg border border-black/10 bg-white p-6 shadow-sm" key={title}>
                  <div className="h-2 w-16 rounded-full bg-[#AAC02D]" />
                  <h3 className="mt-5 text-xl font-extrabold text-black">{title}</h3>
                  <p className="mt-3 leading-7 text-zinc-700">{body}</p>
                </article>)}
            </div>
          </div>
        </section>

        <section id="capabilities" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#AAC02D]">Assembly capabilities</p>
              <h2 className="mt-3 text-4xl font-extrabold text-black md:text-5xl">Technical proof points for procurement teams</h2>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {capabilities.map(item => <div className="flex items-center gap-3 rounded-md border border-zinc-200 bg-white p-4 shadow-sm" key={item}>
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-[#FEC21E] text-sm font-extrabold text-black">âœ“</span>
                    <span className="font-bold text-zinc-800">{item}</span>
                  </div>)}
              </div>
            </div>
            <div className="rounded-xl border-t-4 border-[#FEC21E] bg-[linear-gradient(90deg,#000_0%,#3f3f3f_50%,#131313_100%)] p-7 text-white shadow-xl">
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#FEC21E]">Quote pathway</p>
              <h3 className="mt-3 text-3xl font-extrabold">Selected: {activeService.title}</h3>
              <p className="mt-4 leading-7 text-zinc-200">{activeService.text}</p>
              <div className="mt-7 grid gap-3">
                <a className="rounded-md bg-[#FEC21E] px-5 py-3 text-center font-extrabold text-black hover:bg-[#AAC02D]" href={`mailto:info@digitechellas.eu?subject=${encodeURIComponent(activeService.title + ' quote')}`}>
                  Email info@digitechellas.eu
                </a>
                <a className="rounded-md border border-white/20 px-5 py-3 text-center font-extrabold text-white hover:border-[#FEC21E] hover:text-[#FEC21E]" href="tel:+306970260591">
                  Mobile +30-697-026-05-91
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="customers" className="bg-[#111111] px-5 py-20 text-white lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
              <div>
                <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#AAC02D]">Customers</p>
                <h2 className="mt-3 text-4xl font-extrabold leading-tight md:text-5xl">Trusted by electronics teams with real production needs</h2>
                <p className="mt-5 max-w-xl leading-7 text-zinc-300">
                  A focused proof section using the original Digitec color system: black base, yellow signal, and green support.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {customers.map(customer => <article key={customer.name} className="group rounded-lg border border-white/10 bg-white/[0.06] p-6 text-center transition hover:-translate-y-1 hover:border-[#FEC21E]/70 hover:bg-white/[0.1]">
                    <div className="grid h-28 place-items-center rounded-md bg-white p-5">
                      <img src={customer.image} alt={customer.alt} className="max-h-16 w-auto object-contain grayscale transition duration-500 group-hover:grayscale-0" />
                    </div>
                    <p className="mt-5 text-sm font-extrabold uppercase tracking-[0.16em] text-[#FEC21E]">{customer.name}</p>
                  </article>)}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-[#282828] px-5 py-10 text-white lg:px-8">
        <div className="mx-auto max-w-7xl border-t-4 border-[#FEC21E] bg-[linear-gradient(90deg,#000_0%,#3f3f3f_38%,#3f3f3f_62%,#131313_100%)] p-7">
          <div className="grid gap-8 md:grid-cols-[1fr_1fr_220px]">
            <div>
              <p className="text-sm text-zinc-300">Call us for a quote today</p>
              <a className="mt-1 block text-2xl font-extrabold text-[#FEC21E]" href="tel:+302106515290">+30-210-651-52-90</a>
              <a className="mt-5 block font-bold text-white hover:text-[#FEC21E]" href="mailto:info@digitechellas.eu">info@digitechellas.eu</a>
            </div>
            <address className="not-italic leading-7">
              <strong className="text-[#FEC21E]">Digitec Hellas</strong><br />
              Aristotelous 3<br />
              Holargos, Athens 15562<br />
              <span className="text-zinc-400">Phone:</span> +30-697-026-05-91<br />
              <span className="text-zinc-400">Tel:</span> +30-210-651-52-90
            </address>
            <div className="grid place-items-center rounded-md bg-white p-4">
              <img src={brand.logo} alt="Digitec Hellas footer logo" className="max-h-24 w-auto object-contain" />
            </div>
          </div>
          <div className="mt-8 flex flex-col justify-between gap-4 border-t border-white/10 pt-5 text-sm text-zinc-300 sm:flex-row">
            <p>Â© 2026 Digitec Hellas. Brand-color website redesign concept.</p>
            <div className="flex gap-5 text-[#FEC21E]">
              <a href="https://www.google.com/">Google</a>
              <a href="https://www.facebook.com/">Facebook</a>
              <a href="https://www.youtube.com/">Youtube</a>
              <a href="https://twitter.com/">Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};
