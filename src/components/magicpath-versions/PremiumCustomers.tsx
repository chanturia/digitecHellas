import { useState } from 'react';
type Service = {
  title: string;
  eyebrow: string;
  image: string;
  text: string;
};
type NavItem = {
  label: string;
  href: string;
};
type StatItem = {
  value: string;
  label: string;
};
type ProofItem = {
  title: string;
  body: string;
};
type CapabilityItem = {
  label: string;
};
type CustomerItem = {
  name: string;
  image: string;
  alt: string;
};
type SocialItem = {
  label: string;
  href: string;
};
const logo = '/Digitechellas2.png';
const quoteHref = 'mailto:info@digitechellas.eu?subject=Request%20a%20Quote';
const navItems: NavItem[] = [{
  label: 'Home',
  href: '#home'
}, {
  label: 'Services',
  href: '#services'
}, {
  label: 'Proof',
  href: '#proof'
}, {
  label: 'Capabilities',
  href: '#capabilities'
}, {
  label: 'Customers',
  href: '#customers'
}, {
  label: 'Contact',
  href: '#contact'
}];
const services: Service[] = [{
  title: 'PCB Assembly',
  eyebrow: 'SMT / THD production',
  image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=84',
  text: 'Repeatable assembly workflows for prototypes, short runs, and high-volume electronics production.'
}, {
  title: 'PCB Design',
  eyebrow: 'Engineering support',
  image: 'https://images.unsplash.com/photo-1592659762303-90081d34b277?auto=format&fit=crop&w=1200&q=84',
  text: 'Practical board design and layout thinking that anticipates manufacturing, testing, and reliability.'
}, {
  title: 'Transformer Assembly',
  eyebrow: 'Custom power components',
  image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=84',
  text: 'Custom transformer winding and assembly backed by long-standing electronics manufacturing expertise.'
}];
const heroStats: StatItem[] = [{
  value: '30+',
  label: 'Years'
}, {
  value: 'SMT',
  label: 'Technology'
}, {
  value: 'Global',
  label: 'Pricing'
}];
const proofItems: ProofItem[] = [{
  title: '30+ years',
  body: 'Deep experience in the electronics industry.'
}, {
  title: 'Prototype to volume',
  body: 'Support for early iterations and repeatable builds.'
}, {
  title: 'Global pricing',
  body: 'Competitive positioning for international customers.'
}, {
  title: 'Athens workshop',
  body: 'Local manufacturing base in Holargos, Athens.'
}];
const capabilities: CapabilityItem[] = [{
  label: 'Prototype development'
}, {
  label: 'High-volume production'
}, {
  label: 'Fine pitch components'
}, {
  label: 'ROHS aware process'
}, {
  label: 'Flexible board support'
}, {
  label: 'Global pricing'
}];
const customers: CustomerItem[] = [{
  name: 'GlobiLED',
  image: 'https://www.digitechellas.eu/images/castumers/globiled.png',
  alt: 'GlobiLED customer logo'
}, {
  name: 'CTC Electronic',
  image: 'https://www.digitechellas.eu/images/castumers/CTC.png',
  alt: 'CTC Electronic customer logo'
}, {
  name: 'Ilka',
  image: 'https://www.digitechellas.eu/images/castumers/ilka.png',
  alt: 'Ilka customer logo'
}];
const socialLinks: SocialItem[] = [{
  label: 'Google',
  href: 'https://www.google.com/'
}, {
  label: 'Facebook',
  href: 'https://www.facebook.com/'
}, {
  label: 'Youtube',
  href: 'https://www.youtube.com/'
}, {
  label: 'Twitter',
  href: 'https://twitter.com/'
}];
const serviceQuoteHref = (title: string) => `mailto:info@digitechellas.eu?subject=${encodeURIComponent(`${title} quote`)}`;
export const DigitecHellasCustomersPage = () => {
  const [active, setActive] = useState<Service>(services[0]);
  const [menuOpen, setMenuOpen] = useState(false);
  return <div className="min-h-screen w-full bg-[#f5f7f4] font-sans text-[#17201b] antialiased">
      <header className="sticky top-0 z-50 border-b border-[#dfe5dc] bg-[#f9faf7]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-4" aria-label="Digitec Hellas home">
            <span className="grid h-16 w-24 place-items-center rounded-md border border-[#dfe5dc] bg-white px-3 shadow-sm">
              <img src={logo} alt="Digitec Hellas logo" className="max-h-12 w-auto object-contain" />
            </span>
            <span className="hidden sm:block">
              <span className="block text-sm font-extrabold uppercase tracking-[0.18em] text-[#7b8f25]">Digitec Hellas</span>
              <span className="block text-xs font-bold text-[#6c746f]">Precision electronics manufacturing</span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-bold text-[#445049] md:flex" aria-label="Main navigation">
            {navItems.map(item => <a key={item.href} className="transition-colors hover:text-[#17201b]" href={item.href}>
                <span>{item.label}</span>
              </a>)}
          </nav>

          <a className="hidden rounded-md bg-[#17201b] px-4 py-2 text-sm font-extrabold text-[#f4c430] shadow-sm transition-colors hover:bg-[#2b342f] md:inline-flex" href={quoteHref}>
            <span>Request quote</span>
          </a>

          <button type="button" aria-label="Toggle menu" aria-expanded={menuOpen} className="grid h-11 w-11 place-items-center rounded-md border border-[#d7ded3] text-[#17201b] md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="text-xl font-extrabold leading-none">{menuOpen ? 'Ã—' : 'â‰¡'}</span>
          </button>
        </div>

        {menuOpen && <nav className="grid gap-3 border-t border-[#dfe5dc] px-5 py-4 text-sm font-bold text-[#445049] md:hidden" aria-label="Mobile navigation">
            {navItems.map(item => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                <span>{item.label}</span>
              </a>)}
          </nav>}
      </header>

      <main id="home">
        <section className="relative isolate overflow-hidden bg-[#edf1ea]">
          <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_80%_10%,rgba(244,196,48,0.28),transparent_30%),radial-gradient(circle_at_10%_70%,rgba(123,143,37,0.18),transparent_32%)]" aria-hidden="true" />
          <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-[#f4c430] to-transparent" aria-hidden="true" />
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-24">
            <div>
              <p className="inline-flex rounded-full border border-[#d8dfd4] bg-white px-4 py-2 text-sm font-extrabold uppercase tracking-[0.16em] text-[#7b8f25] shadow-sm">
                <span>Athens / PCB assembly / transformer production</span>
              </p>
              <h1 className="mt-7 max-w-4xl text-5xl font-extrabold leading-[1.02] tracking-normal text-[#17201b] md:text-6xl lg:text-7xl">
                <span>Industrial electronics, refined for modern buyers.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-[#56625b]">
                <span>A more premium Digitec Hellas website concept: calm, precise, trustworthy, and still anchored by the original company logo.</span>
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a className="inline-flex justify-center rounded-md bg-[#17201b] px-6 py-3.5 font-extrabold text-[#f4c430] shadow-[0_22px_70px_rgba(23,32,27,0.22)] transition-colors hover:bg-[#29342e]" href={quoteHref}>
                  <span>Request a Quote</span>
                </a>
                <a className="inline-flex justify-center rounded-md border border-[#cbd5c6] bg-white px-6 py-3.5 font-extrabold text-[#17201b] transition-colors hover:border-[#f4c430]" href="tel:+302106515290">
                  <span>+30-210-651-52-90</span>
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-[#f4c430]/20 blur-3xl" aria-hidden="true" />
              <article className="relative overflow-hidden rounded-xl border border-white bg-white shadow-[0_30px_110px_rgba(23,32,27,0.18)]">
                <img src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1400&q=84" alt="Electronics manufacturing equipment" className="h-[440px] w-full object-cover" />
                <div className="grid grid-cols-3 divide-x divide-[#dfe5dc] border-t border-[#dfe5dc] bg-white">
                  {heroStats.map(stat => <div key={stat.label} className="px-3 py-5 text-center">
                      <strong className="block text-2xl font-extrabold text-[#17201b]">{stat.value}</strong>
                      <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#7b8f25]">{stat.label}</span>
                    </div>)}
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="services" className="bg-white px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#7b8f25]"><span>Services</span></p>
                <h2 className="mt-3 text-4xl font-extrabold leading-tight text-[#17201b] md:text-5xl"><span>A focused manufacturing offer</span></h2>
              </div>
              <p className="max-w-2xl text-lg leading-8 text-[#56625b] lg:justify-self-end">
                <span>The services area is quieter and more elegant here: fewer visual collisions, larger imagery, and a simple selection model that helps users understand what Digitec can do.</span>
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.05fr]">
              <div className="grid gap-4">
                {services.map(service => <button key={service.title} type="button" onClick={() => setActive(service)} className={`rounded-xl border p-5 text-left transition hover:-translate-y-0.5 hover:shadow-lg ${active.title === service.title ? 'border-[#f4c430] bg-[#fffaf0] shadow-md' : 'border-[#dfe5dc] bg-[#f8faf6]'}`}>
                    <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#7b8f25]">{service.eyebrow}</span>
                    <span className="mt-2 block text-2xl font-extrabold text-[#17201b]">{service.title}</span>
                    <span className="mt-2 block leading-7 text-[#56625b]">{service.text}</span>
                  </button>)}
              </div>

              <article className="overflow-hidden rounded-xl border border-[#dfe5dc] bg-[#17201b] text-white shadow-[0_26px_80px_rgba(23,32,27,0.22)]">
                <div className="relative h-[380px]">
                  <img src={active.image} alt={active.title} className="absolute inset-0 h-full w-full object-cover opacity-[0.78]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#17201b] via-[#17201b]/15 to-transparent" aria-hidden="true" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="rounded-full bg-[#f4c430] px-3 py-1 text-sm font-extrabold text-[#17201b]">{active.eyebrow}</span>
                    <h3 className="mt-4 text-4xl font-extrabold"><span>{active.title}</span></h3>
                  </div>
                </div>
                <div className="p-7">
                  <p className="text-lg leading-8 text-[#e9eee6]"><span>{active.text}</span></p>
                  <a className="mt-6 inline-flex rounded-md bg-[#f4c430] px-5 py-3 font-extrabold text-[#17201b] transition-colors hover:bg-white" href={serviceQuoteHref(active.title)}>
                    <span>Request this service</span>
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="proof" className="bg-[#edf1ea] px-5 py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-xl bg-[#17201b] p-8 text-white shadow-xl">
              <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#f4c430]"><span>Why Digitec Hellas</span></p>
              <h2 className="mt-3 text-4xl font-extrabold leading-tight"><span>Long experience, cleaner presentation</span></h2>
              <p className="mt-5 text-lg leading-8 text-[#dfe8da]">
                <span>The page keeps the companyâ€™s established trust signals but frames them in a way that feels more controlled, professional, and easier for B2B visitors to evaluate.</span>
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {proofItems.map(item => <article className="rounded-xl border border-[#dfe5dc] bg-white p-6 shadow-sm" key={item.title}>
                  <div className="h-1.5 w-14 rounded-full bg-[#f4c430]" aria-hidden="true" />
                  <h3 className="mt-5 text-xl font-extrabold text-[#17201b]"><span>{item.title}</span></h3>
                  <p className="mt-3 leading-7 text-[#56625b]"><span>{item.body}</span></p>
                </article>)}
            </div>
          </div>
        </section>

        <section id="capabilities" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#7b8f25]"><span>Capabilities</span></p>
              <h2 className="mt-3 text-4xl font-extrabold text-[#17201b] md:text-5xl"><span>Technical signals without overwhelming the page</span></h2>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {capabilities.map(item => <div className="flex items-center gap-3 rounded-md border border-[#dfe5dc] bg-white p-4 shadow-sm" key={item.label}>
                    <span className="h-2.5 w-2.5 rounded-full bg-[#f4c430]" aria-hidden="true" />
                    <span className="font-bold text-[#344039]">{item.label}</span>
                  </div>)}
              </div>
            </div>
            <aside className="rounded-xl border border-[#dfe5dc] bg-[#fffaf0] p-7 shadow-sm">
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#7b8f25]"><span>Quote pathway</span></p>
              <h3 className="mt-3 text-3xl font-extrabold text-[#17201b]"><span>Selected: </span><span>{active.title}</span></h3>
              <p className="mt-4 leading-7 text-[#56625b]"><span>{active.text}</span></p>
              <div className="mt-7 grid gap-3">
                <a className="rounded-md bg-[#17201b] px-5 py-3 text-center font-extrabold text-[#f4c430] transition-colors hover:bg-[#2b342f]" href={serviceQuoteHref(active.title)}>
                  <span>Email info@digitechellas.eu</span>
                </a>
                <a className="rounded-md border border-[#cbd5c6] bg-white px-5 py-3 text-center font-extrabold text-[#17201b] transition-colors hover:border-[#f4c430]" href="tel:+306970260591">
                  <span>Mobile +30-697-026-05-91</span>
                </a>
              </div>
            </aside>
          </div>
        </section>

        <section id="customers" className="bg-white px-5 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#7b8f25]"><span>Trusted Partners</span></p>
              <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-[#17201b] md:text-5xl"><span>Our Satisfied Customers</span></h2>
              <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-[#56625b]">
                <span>Companies across Greece and beyond trust Digitec Hellas for their electronics manufacturing needs.</span>
              </p>
              <div className="mx-auto mt-8 h-px w-24 bg-[#f4c430]" aria-hidden="true" />
            </div>

            <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3">
              {customers.map(customer => <div key={customer.name} className="group flex min-h-56 flex-col items-center justify-center rounded-2xl border border-[#dfe5dc] bg-white p-10 text-center shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#f4c430] hover:shadow-[0_16px_48px_rgba(23,32,27,0.12)]">
                  <div className="flex flex-1 flex-col items-center justify-center gap-4">
                    <img src={customer.image} alt={customer.alt} className="max-h-16 w-auto object-contain grayscale transition-all duration-500 group-hover:grayscale-0" />
                    <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#445049]"><span>{customer.name}</span></p>
                  </div>
                  <div className="mt-auto h-0.5 w-10 rounded-full bg-[#f4c430] opacity-0 transition-all duration-300 group-hover:opacity-100" aria-hidden="true" />
                </div>)}
            </div>

            <div className="mt-16 text-center">
              <p className="text-base text-[#56625b]"><span>Join our growing list of satisfied partners.</span></p>
              <a href="mailto:info@digitechellas.eu" className="mt-4 inline-flex items-center gap-2 border-b-2 border-[#f4c430] pb-0.5 font-extrabold text-[#17201b] transition-colors hover:border-[#7b8f25] hover:text-[#7b8f25]">
                <span>Get in touch</span>
                <span aria-hidden="true">â†’</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-[#17201b] px-5 py-10 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 border-b border-white/10 pb-8 md:grid-cols-[1fr_1fr_220px]">
            <div>
              <p className="text-sm text-[#dfe8da]"><span>Call us for a quote today</span></p>
              <a className="mt-1 block text-2xl font-extrabold text-[#f4c430]" href="tel:+302106515290"><span>+30-210-651-52-90</span></a>
              <a className="mt-5 block font-bold text-white transition-colors hover:text-[#f4c430]" href="mailto:info@digitechellas.eu"><span>info@digitechellas.eu</span></a>
            </div>
            <address className="not-italic leading-7 text-[#dfe8da]">
              <strong className="block text-[#f4c430]">Digitec Hellas</strong>
              <span className="block">Aristotelous 3</span>
              <span className="block">Holargos, Athens 15562</span>
              <span className="block">Phone: +30-697-026-05-91</span>
              <span className="block">Tel: +30-210-651-52-90</span>
            </address>
            <div className="grid place-items-center rounded-md bg-white p-4">
              <img src={logo} alt="Digitec Hellas footer logo" className="max-h-24 w-auto object-contain" />
            </div>
          </div>
          <div className="mt-6 flex flex-col justify-between gap-4 text-sm text-[#dfe8da] sm:flex-row">
            <p><span>Copyright 2026 Digitec Hellas. Refined premium website concept.</span></p>
            <div className="flex gap-5 text-[#f4c430]">
              {socialLinks.map(item => <a key={item.label} href={item.href}>
                  <span>{item.label}</span>
                </a>)}
            </div>
          </div>
        </div>
      </footer>
    </div>;
};