import { useState } from 'react';
const brand = {
  logo: '/Digitechellas2.png'
};
const services = [{
  title: 'Transformer assembly',
  image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1100&q=84',
  text: 'Custom transformer winding and assembly for low-voltage and electronics production work.',
  tag: 'Power components',
  accent: 'bg-[#AAC02D]'
}, {
  title: 'PCB Design',
  image: 'https://images.unsplash.com/photo-1592659762303-90081d34b277?auto=format&fit=crop&w=1100&q=84',
  text: 'Board layout and engineering support shaped around manufacturability, reliability, and testing.',
  tag: 'Design for assembly',
  accent: 'bg-[#FEC21E]'
}, {
  title: 'Assembly services',
  image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1100&q=84',
  text: 'SMT and THD assembly for prototypes, short-run projects, and high-volume manufacturing.',
  tag: 'SMT production',
  accent: 'bg-black'
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
export const DigitecHellasModernServicesVariation2 = () => {
  const [activeService, setActiveService] = useState(services[2]);
  const [menuOpen, setMenuOpen] = useState(false);
  return <div className="min-h-screen w-full bg-[#fdfdfd] font-sans text-[#202020] selection:bg-[#FEC21E] selection:text-black">
      <header className="sticky top-0 z-50 border-t-4 border-[#FEC21E] bg-[#111111] text-white shadow-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-5" aria-label="Digitec Hellas home">
            <span className="grid h-16 w-24 place-items-center rounded-lg bg-white px-3 shadow-lg transition-transform hover:scale-105">
              <img src={brand.logo} alt="Digitec Hellas logo" className="max-h-12 w-auto object-contain" />
            </span>
            <span className="hidden sm:block">
              <span className="block text-base font-black uppercase tracking-[0.2em] text-[#FEC21E]">Digitec Hellas</span>
              <span className="block text-xs font-bold text-zinc-400">Precision Electronics Manufacturing</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-black md:flex" aria-label="Main navigation">
            {['Home', 'Services', 'About', 'Capabilities', 'Customers', 'Contact'].map(item => <a key={item} className="relative text-zinc-300 transition-colors hover:text-[#FEC21E] group" href={`#${item.toLowerCase()}`}>
              
                {item}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#FEC21E] transition-all group-hover:w-full" />
              </a>)}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
             <a className="rounded-full bg-white/5 px-4 py-2 text-xs font-bold text-[#FEC21E] border border-[#FEC21E]/30 hover:bg-[#FEC21E]/10" href="tel:+302106515290">
              +30 210 6515290
            </a>
            <a className="rounded-md bg-[#FEC21E] px-6 py-2.5 text-sm font-black text-black shadow-lg transition-all hover:bg-[#AAC02D] hover:shadow-[#AAC02D]/20 active:scale-95" href="mailto:info@digitechellas.eu">
              Get a Quote
            </a>
          </div>

          <button type="button" aria-label="Toggle menu" className="grid h-12 w-12 place-items-center rounded-lg border border-white/10 bg-white/5 text-[#FEC21E] md:hidden transition-colors hover:bg-white/10" onClick={() => setMenuOpen(!menuOpen)}>
            
            {menuOpen ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>}
          </button>
        </div>
        
        {menuOpen && <nav className="absolute left-0 top-full w-full border-t border-white/10 bg-[#111111] px-5 py-6 text-lg font-black md:hidden animate-in fade-in slide-in-from-top-4 duration-300" aria-label="Mobile navigation">
            <div className="grid gap-5">
              {['Home', 'Services', 'About', 'Capabilities', 'Customers', 'Contact'].map(item => <a key={item} className="text-zinc-300 active:text-[#FEC21E]" href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
              
                  {item}
                </a>)}
              <a className="mt-4 flex h-14 items-center justify-center rounded-lg bg-[#FEC21E] text-black" href="mailto:info@digitechellas.eu">
                Request Quote
              </a>
            </div>
          </nav>}
      </header>

      <main>
        {/* Updated Hero Section with cleaner layout and glassmorphism */}
        <section id="home" className="relative min-h-[85vh] overflow-hidden bg-[#0a0a0a] text-white flex items-center">
          <video className="absolute inset-0 h-full w-full object-cover opacity-30" autoPlay muted loop playsInline>
            <source src="/video/introVideo480.webm" type="video/webm" />
            <source src="/video/introVideo480.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black/80 to-transparent" />
          
          {/* Decorative Elements */}
          <div className="absolute -left-20 top-1/4 h-96 w-96 rounded-full bg-[#AAC02D]/10 blur-[100px]" />
          <div className="absolute -right-20 bottom-1/4 h-[500px] w-[500px] rounded-full bg-[#FEC21E]/10 blur-[120px]" />
          
          <div className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8 w-full">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#FEC21E]/30 bg-[#FEC21E]/5 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#FEC21E] backdrop-blur-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FEC21E] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FEC21E]"></span>
                  </span>
                  Industrial Grade Reliability
                </div>
                <h1 className="mt-8 text-6xl font-black leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
                  Precision <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FEC21E] to-[#AAC02D]">Electronic</span> Manufacturing
                </h1>
                <p className="mt-8 max-w-xl text-xl font-medium leading-relaxed text-zinc-400">
                  Elevating the original Digitec Hellas identity into a modern, high-performance service platform. Over 30 years of excellence in PCB assembly, design, and custom transformers.
                </p>
                <div className="mt-12 flex flex-wrap gap-5">
                  <a className="inline-flex items-center justify-center rounded-lg bg-[#FEC21E] px-8 py-4 text-base font-black text-black shadow-2xl transition-all hover:bg-[#AAC02D] hover:shadow-[#FEC21E]/20 hover:-translate-y-1 active:translate-y-0" href="mailto:info@digitechellas.eu">
                    Start Your Project
                  </a>
                  <a className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-8 py-4 text-base font-black text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/40" href="#services">
                    Our Services
                  </a>
                </div>
              </div>

              <div className="hidden lg:block">
                <div className="relative rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
                  <div className="absolute -top-6 -right-6 h-24 w-24 bg-[#FEC21E] rounded-2xl flex items-center justify-center shadow-2xl">
                    <span className="text-4xl font-black text-black">30+</span>
                  </div>
                  <div className="space-y-8">
                    <div className="flex items-center gap-6">
                      <div className="h-14 w-14 rounded-xl bg-white flex items-center justify-center p-2 shrink-0">
                         <img src={brand.logo} alt="Small Logo" className="h-full w-full object-contain" />
                      </div>
                      <div>
                        <p className="text-sm font-black uppercase tracking-widest text-[#FEC21E]">Engineering Excellence</p>
                        <p className="text-lg font-bold">Athens, Greece Hub</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                       <div className="rounded-xl bg-white/5 p-4 border border-white/5">
                        <p className="text-2xl font-black text-white">100%</p>
                        <p className="text-xs font-bold text-zinc-400 uppercase tracking-tighter">Quality Tested</p>
                      </div>
                      <div className="rounded-xl bg-white/5 p-4 border border-white/5">
                        <p className="text-2xl font-black text-[#AAC02D]">ISO</p>
                        <p className="text-xs font-bold text-zinc-400 uppercase tracking-tighter">Standard Compliant</p>
                      </div>
                    </div>

                    <div className="rounded-xl bg-[#FEC21E] p-6 text-black">
                       <p className="text-xs font-black uppercase tracking-widest opacity-70">Current Focus</p>
                       <p className="mt-1 text-2xl font-black">{activeService.title}</p>
                       <p className="mt-2 text-sm font-bold leading-tight opacity-80">{activeService.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section - Redesigned for impact */}
        <section id="services" className="relative overflow-hidden bg-[#fdfdfd] px-5 py-32 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <p className="text-sm font-black uppercase tracking-[0.3em] text-[#AAC02D]">Our Expertise</p>
              <h2 className="mt-4 text-5xl font-black tracking-tight text-black md:text-6xl">
                Comprehensive Solutions
              </h2>
              <div className="mx-auto mt-6 h-1.5 w-24 rounded-full bg-[#FEC21E]" />
            </div>

            <div className="mt-20 grid gap-12 lg:grid-cols-3">
              {services.map(service => <button key={service.title} onClick={() => setActiveService(service)} className={`group relative flex flex-col overflow-hidden rounded-2xl border bg-white p-2 shadow-sm transition-all hover:shadow-2xl ${activeService.title === service.title ? 'border-[#FEC21E] ring-4 ring-[#FEC21E]/10' : 'border-zinc-200 hover:border-zinc-300'}`}>
                
                  <div className="relative h-64 w-full overflow-hidden rounded-xl">
                    <img src={service.image} alt={service.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                       <span className={`rounded-md ${service.accent} px-3 py-1 text-xs font-black uppercase text-black`}>
                        {service.tag}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6 text-left">
                    <h3 className="text-2xl font-black text-black">{service.title}</h3>
                    <p className="mt-3 text-sm font-medium leading-relaxed text-zinc-500">{service.text}</p>
                    <div className="mt-auto pt-6 flex items-center gap-2 text-sm font-black uppercase tracking-widest text-[#AAC02D]">
                      View Details
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 transition-transform group-hover:translate-x-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </div>
                </button>)}
            </div>

            {/* Active Service Showcase */}
            <div className="mt-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
               <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-2xl">
                <div className="grid lg:grid-cols-2">
                  <div className="relative h-[400px] lg:h-auto">
                    <img src={activeService.image} alt={activeService.title} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-black/20" />
                  </div>
                  <div className="p-8 lg:p-16">
                     <span className="text-sm font-black uppercase tracking-widest text-[#AAC02D]">Service Focus</span>
                     <h3 className="mt-4 text-4xl font-black text-black lg:text-5xl">{activeService.title}</h3>
                     <p className="mt-6 text-lg leading-relaxed text-zinc-600">{activeService.text}</p>
                     
                     <div className="mt-10 grid gap-4 sm:grid-cols-2">
                        <div className="flex items-start gap-4 rounded-xl bg-zinc-50 p-5 border border-zinc-100">
                          <div className="h-10 w-10 shrink-0 rounded-lg bg-[#FEC21E] flex items-center justify-center font-black">01</div>
                          <div>
                            <p className="text-sm font-black uppercase tracking-tight text-black">Scale</p>
                            <p className="text-sm font-medium text-zinc-500">Prototype to production</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4 rounded-xl bg-zinc-50 p-5 border border-zinc-100">
                          <div className="h-10 w-10 shrink-0 rounded-lg bg-[#AAC02D] flex items-center justify-center font-black">02</div>
                          <div>
                            <p className="text-sm font-black uppercase tracking-tight text-black">Lead Time</p>
                            <p className="text-sm font-medium text-zinc-500">Industry standard delivery</p>
                          </div>
                        </div>
                     </div>

                     <a className="mt-10 inline-flex h-16 items-center justify-center rounded-xl bg-black px-10 text-base font-black text-[#FEC21E] transition-all hover:bg-[#FEC21E] hover:text-black hover:-translate-y-1" href={`mailto:info@digitechellas.eu?subject=Quote for ${activeService.title}`}>
                        Request Proposal
                     </a>
                  </div>
                </div>
               </div>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section id="capabilities" className="bg-[#111111] py-32 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-[#FEC21E]/5 -skew-x-12 transform translate-x-1/2" />
          <div className="mx-auto max-w-7xl px-5 lg:px-8 relative">
            <div className="grid gap-16 lg:grid-cols-2 items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-widest text-[#FEC21E]">Technical Power</p>
                <h2 className="mt-4 text-5xl font-black md:text-6xl">Production Capabilities</h2>
                <p className="mt-6 text-lg text-zinc-400 max-w-lg font-medium leading-relaxed">
                  Our facility is equipped with state-of-the-art machinery to handle complex electronic assembly projects with absolute precision.
                </p>
                
                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  {capabilities.map(cap => <div key={cap} className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-[#AAC02D]/50 hover:bg-white/10">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FEC21E] text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3.5} stroke="currentColor" className="w-3.5 h-3.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <span className="font-bold text-zinc-200 tracking-tight">{cap}</span>
                    </div>)}
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#FEC21E] to-[#AAC02D] opacity-20 blur group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative rounded-2xl bg-black p-10 border border-white/10">
                   <h3 className="text-3xl font-black">Ready to scale?</h3>
                   <p className="mt-4 text-zinc-400 font-medium leading-relaxed">
                     Connect with our engineering team to discuss your Bill of Materials (BOM) and production timeline.
                   </p>
                   <div className="mt-8 space-y-4">
                     <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#FEC21E]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs font-black uppercase tracking-widest text-zinc-500">Email Us</p>
                          <a href="mailto:info@digitechellas.eu" className="text-lg font-bold hover:text-[#FEC21E]">info@digitechellas.eu</a>
                        </div>
                     </div>
                     <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#AAC02D]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs font-black uppercase tracking-widest text-zinc-500">Direct Line</p>
                          <a href="tel:+306970260591" className="text-lg font-bold hover:text-[#AAC02D]">+30 697 026 0591</a>
                        </div>
                     </div>
                   </div>
                   <a className="mt-10 flex h-16 w-full items-center justify-center rounded-xl bg-[#FEC21E] font-black text-black hover:bg-white transition-colors" href="mailto:info@digitechellas.eu">
                     Get Free Quote
                   </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="customers" className="relative overflow-hidden bg-white px-5 py-28 lg:px-8">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FEC21E] to-transparent" />
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.3em] text-[#AAC02D]">Customer Proof</p>
                <h2 className="mt-4 max-w-3xl text-5xl font-black tracking-tight text-black md:text-6xl">Partners that make the case quietly</h2>
              </div>
              <p className="max-w-md text-lg font-medium leading-relaxed text-zinc-500">
                Logos sit in a clean, modern grid so the section supports credibility without overpowering the service story.
              </p>
            </div>
            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {customers.map(customer => <article key={customer.name} className="group rounded-2xl border border-zinc-200 bg-zinc-50 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#FEC21E] hover:bg-white hover:shadow-2xl">
                  <div className="grid h-48 place-items-center rounded-xl bg-white p-8 shadow-sm">
                    <img src={customer.image} alt={customer.alt} className="max-h-20 w-auto object-contain grayscale transition duration-500 group-hover:grayscale-0" />
                  </div>
                  <div className="flex items-center justify-between px-4 py-5">
                    <p className="text-sm font-black uppercase tracking-widest text-black">{customer.name}</p>
                    <span className="h-2.5 w-2.5 rounded-full bg-[#AAC02D]" />
                  </div>
                </article>)}
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-[#050505] text-white">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-4">
            <div className="col-span-2">
              <div className="flex items-center gap-4">
                 <div className="h-14 w-20 rounded-lg bg-white p-2 flex items-center justify-center">
                    <img src={brand.logo} alt="Footer Logo" className="max-h-full w-auto" />
                 </div>
                 <span className="text-2xl font-black uppercase tracking-widest text-[#FEC21E]">Digitec Hellas</span>
              </div>
              <p className="mt-6 max-w-md text-lg font-medium text-zinc-400">
                A leading electronics manufacturing partner in Greece, providing world-class PCB assembly, design, and custom winding services since 1990.
              </p>
            </div>
            
            <div>
              <h4 className="text-sm font-black uppercase tracking-[0.3em] text-[#FEC21E]">Location</h4>
              <address className="mt-6 not-italic font-medium text-zinc-400 space-y-2">
                <p>Aristotelous 3</p>
                <p>Holargos, Athens 15562</p>
                <p>Greece</p>
              </address>
            </div>

            <div>
              <h4 className="text-sm font-black uppercase tracking-[0.3em] text-[#AAC02D]">Contact</h4>
              <div className="mt-6 font-medium text-zinc-400 space-y-2">
                <p><a href="tel:+302106515290" className="hover:text-white transition-colors">+30 210 6515290</a></p>
                <p><a href="mailto:info@digitechellas.eu" className="hover:text-white transition-colors">info@digitechellas.eu</a></p>
              </div>
            </div>
          </div>
          
          <div className="mt-20 border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm font-bold text-zinc-600">
              Â© 2026 Digitec Hellas. All rights reserved.
            </p>
            <div className="flex gap-8 text-sm font-black uppercase tracking-widest text-zinc-500">
               <a href="#" className="hover:text-[#FEC21E] transition-colors">LinkedIn</a>
               <a href="#" className="hover:text-[#AAC02D] transition-colors">Twitter</a>
               <a href="#" className="hover:text-white transition-colors">Privacy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};
