import { useState, useEffect } from 'react';
const brand = {
  logo: '/Digitechellas2.png',
  yellow: '#FEC21E',
  // Digitec Hellas Yellow
  green: '#AAC02D',
  // Digitec Hellas Green
  black: '#111111',
  darkGrey: '#2d373c',
  lightGrey: '#ebf0f2'
};
const services = [{
  id: '01',
  title: 'Transformer Assembly',
  description: 'Precision custom transformer winding and assembly services for industrial power components and electronic systems.',
  image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1400&q=80',
  stats: {
    capacity: 'Low-to-Mid Voltage',
    accuracy: '99.9%'
  }
}, {
  id: '02',
  title: 'PCB Design & Engineering',
  description: 'Expert board layout and engineering support focused on manufacturability, reliability, and rigorous testing standards.',
  image: 'https://images.unsplash.com/photo-1592659762303-90081d34b277?auto=format&fit=crop&w=1400&q=80',
  stats: {
    layers: 'Up to 24',
    software: 'Altium / Allegro'
  }
}, {
  id: '03',
  title: 'SMT / THD Production',
  description: 'Advanced assembly services for prototypes through high-volume manufacturing, utilizing state-of-the-art placement equipment.',
  image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80',
  stats: {
    pitch: '0.3mm Fine Pitch',
    components: '01005 support'
  }
}];
const capabilities = ['Advanced SMT Line', 'Fine Pitch Component Placement', 'Prototype Rapid Response', 'Full Life-cycle Support', 'ROHS & Quality Compliance', 'Rigid & Flexible PCB'];
const customers = [{
  src: 'https://www.digitechellas.eu/images/castumers/globiled.png',
  alt: 'GlobiLED',
  label: 'GlobiLED'
}, {
  src: 'https://www.digitechellas.eu/images/castumers/CTC.png',
  alt: 'CTC Electronic',
  label: 'CTC Electronic'
}, {
  src: 'https://www.digitechellas.eu/images/castumers/ilka.png',
  alt: 'Ilka',
  label: 'Ilka'
}];
export const DigitecHellasSiemensStyleLayout = () => {
  const [activeTab, setActiveTab] = useState(services[2]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <div className="min-h-screen w-full bg-white font-sans text-[#2d373c] selection:bg-[#FEC21E] selection:text-black">
      {/* Siemens-style Header: Fixed, clean, focus on utility with brand colors */}
      <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-5'}`}>
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 lg:px-12">
          <a href="#" className="flex items-center gap-6 group">
            <div className="h-14 w-24 bg-white p-2 border-b-4 border-[#FEC21E] flex items-center justify-center transition-transform group-hover:scale-105 shadow-sm">
              <img src={brand.logo} alt="Digitec Hellas" className="max-h-full w-auto object-contain" />
            </div>
            <div className={`hidden xl:block transition-opacity ${isScrolled ? 'opacity-0' : 'opacity-100'}`}>
               <span className="block text-xl font-bold uppercase tracking-tight text-[#FEC21E]">Digitec Hellas</span>
               <span className="block text-[10px] font-bold uppercase tracking-widest text-white/80">Technological Excellence</span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-10">
            {['Services', 'Industry', 'About', 'Technical Data', 'Customers', 'Contact'].map(item => <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className={`text-sm font-bold uppercase tracking-wider transition-colors ${isScrolled ? 'text-[#2d373c] hover:text-[#FEC21E]' : 'text-white hover:text-[#FEC21E]'}`}>
              
                {item}
              </a>)}
          </nav>

          <div className="flex items-center gap-6">
            <a href="mailto:info@digitechellas.eu" className="hidden sm:flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#FEC21E] hover:underline">
               Request Quote
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
               </svg>
            </a>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={`lg:hidden p-2 ${isScrolled ? 'text-[#2d373c]' : 'text-white'}`}>
              
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
               </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero: Large scale, technical video/image background, bold Siemens typography with Digitec colors */}
      <section className="relative h-screen flex items-center overflow-hidden bg-[#111111]">
         <div className="absolute inset-0">
            <video className="h-full w-full object-cover opacity-30 grayscale" autoPlay muted loop playsInline>
              <source src="https://www.digitechellas.eu/video/introVideo480.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/80 to-transparent" />
         </div>

         <div className="relative mx-auto max-w-[1600px] w-full px-6 lg:px-12">
            <div className="max-w-4xl">
               <div className="w-16 h-1.5 bg-[#AAC02D] mb-8" />
               <h1 className="text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.95] tracking-tighter text-white">
                  Ingenuity for <br />
                  <span className="text-[#FEC21E]">Electronics.</span>
               </h1>
               <p className="mt-8 max-w-2xl text-xl font-medium text-white/70 leading-relaxed">
                  Digitec Hellas delivers industrial-grade PCB assembly and engineering solutions. We bridge the gap between design and high-volume production with precision and reliability.
               </p>
               <div className="mt-12 flex flex-wrap gap-4">
                  <a href="#services" className="bg-[#FEC21E] hover:bg-[#AAC02D] text-black px-10 py-5 text-sm font-bold uppercase tracking-widest transition-all">
                     Our Portfolio
                  </a>
                  <a href="#contact" className="border-2 border-white hover:bg-white hover:text-black text-white px-10 py-5 text-sm font-bold uppercase tracking-widest transition-all">
                     Connect with Sales
                  </a>
               </div>
            </div>
         </div>

         {/* Technical Info Bar - Branded */}
         <div className="absolute bottom-0 right-0 hidden xl:flex bg-[#FEC21E] text-black p-12 max-w-xl">
            <div className="grid grid-cols-2 gap-12">
               <div>
                  <span className="block text-4xl font-black">30+</span>
                  <span className="mt-2 block text-xs font-bold uppercase tracking-widest opacity-80">Years of Experience</span>
               </div>
               <div>
                  <span className="block text-4xl font-black">ISO</span>
                  <span className="mt-2 block text-xs font-bold uppercase tracking-widest opacity-80">Quality Standard</span>
               </div>
            </div>
         </div>
      </section>

      {/* Services: Grid layout, clean tabs, technical focus - Branded */}
      <section id="services" className="py-32 bg-[#ebf0f2]">
         <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row justify-between items-end gap-8 border-b-2 border-[#111111]/10 pb-16">
               <div className="max-w-2xl">
                  <span className="text-[#AAC02D] font-bold uppercase tracking-widest text-sm">Industrial Services</span>
                  <h2 className="mt-4 text-5xl font-black uppercase tracking-tight">Core Competencies</h2>
               </div>
               <p className="max-w-md text-lg font-medium text-[#2d373c]/60">
                  From rapid prototyping to serial production, our workflows are optimized for speed and repeatability.
               </p>
            </div>

            <div className="mt-20 grid lg:grid-cols-[400px_1fr] gap-16">
               <div className="flex flex-col gap-4">
                  {services.map(service => <button key={service.id} onClick={() => setActiveTab(service)} className={`group flex items-center justify-between p-8 text-left transition-all ${activeTab.id === service.id ? 'bg-white shadow-xl border-l-8 border-[#FEC21E]' : 'bg-transparent border-l-8 border-transparent hover:bg-white/50'}`}>
                
                       <div>
                          <span className="text-xs font-bold text-[#AAC02D] tracking-widest">{service.id}</span>
                          <h3 className="mt-2 text-xl font-bold uppercase tracking-tight">{service.title}</h3>
                       </div>
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className={`w-5 h-5 transition-transform ${activeTab.id === service.id ? 'translate-x-2 text-[#FEC21E]' : 'text-[#2d373c]/20'}`}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                       </svg>
                    </button>)}
               </div>

               <div className="bg-white shadow-2xl p-10 lg:p-20 overflow-hidden relative border-t-8 border-[#FEC21E]">
                  <div className="grid xl:grid-cols-2 gap-16 items-center animate-in fade-in slide-in-from-right-8 duration-700">
                     <div>
                        <span className="text-xs font-bold uppercase tracking-widest text-[#AAC02D]">Technical Brief</span>
                        <h3 className="mt-4 text-4xl font-black uppercase tracking-tighter leading-none">{activeTab.title}</h3>
                        <p className="mt-8 text-lg font-medium text-[#2d373c]/70 leading-relaxed">
                           {activeTab.description}
                        </p>
                        
                        <div className="mt-12 grid sm:grid-cols-2 gap-8 border-t border-[#2d373c]/10 pt-12">
                           {Object.entries(activeTab.stats).map(([key, value]) => <div key={key}>
                                <span className="block text-[10px] font-bold uppercase tracking-widest text-[#2d373c]/40 mb-2">{key}</span>
                                <span className="text-xl font-bold text-[#2d373c]">{value}</span>
                             </div>)}
                        </div>

                        <a href="mailto:info@digitechellas.eu" className="mt-12 inline-block bg-[#111111] text-[#FEC21E] px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#FEC21E] hover:text-black transition-colors">
                           Download Data Sheet
                        </a>
                     </div>
                     <div className="relative h-[500px] overflow-hidden">
                        <img src={activeTab.image} alt={activeTab.title} className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                        <div className="absolute inset-0 border-[20px] border-[#FEC21E]/10" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Capabilities: Siemens-style feature grid - Branded */}
      <section id="capabilities" className="py-32 bg-white">
         <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
               <div className="relative">
                  <div className="absolute -top-12 -left-12 w-64 h-64 bg-[#AAC02D]/5 -z-10" />
                  <h2 className="text-5xl font-black uppercase tracking-tighter leading-[0.9]">
                     Operational <br />
                     <span className="text-[#AAC02D]">Precision.</span>
                  </h2>
                  <p className="mt-8 text-xl font-medium text-[#2d373c]/60 max-w-lg leading-relaxed">
                     Our facility integrates professional engineering principles with flexible manufacturing to deliver uncompromising quality.
                  </p>
                  
                  <div className="mt-12 space-y-4">
                     {capabilities.map(cap => <div key={cap} className="flex items-center gap-4 group">
                          <div className="h-0.5 w-8 bg-[#FEC21E] group-hover:w-12 transition-all" />
                          <span className="font-bold uppercase tracking-wide text-sm">{cap}</span>
                       </div>)}
                  </div>
               </div>

               <div className="grid grid-cols-2 gap-px bg-[#111111]/10 border border-[#111111]/10">
                  {[{
              label: 'Uptime',
              value: '99.8%'
            }, {
              label: 'Quality Score',
              value: '4.9/5'
            }, {
              label: 'Lead Time',
              value: 'Express'
            }, {
              label: 'Support',
              value: '24/7'
            }].map((stat, i) => <div key={i} className="bg-white p-12 text-center group hover:bg-[#FEC21E] transition-colors">
                       <span className="block text-sm font-bold uppercase tracking-widest text-[#2d373c]/40 group-hover:text-black/60">{stat.label}</span>
                       <span className="mt-4 block text-4xl font-black text-[#2d373c] group-hover:text-black">{stat.value}</span>
                    </div>)}
               </div>
            </div>
         </div>
      </section>

      {/* Customers: Dark section, industrial logo grid */}
      <section id="customers" className="py-32 bg-[#111111]">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="w-16 h-1.5 bg-[#FEC21E] mb-8" />
          <span className="text-[#AAC02D] font-bold uppercase tracking-widest text-sm">Trusted Partners</span>
          <h2 className="mt-4 text-5xl font-black uppercase tracking-tight text-white">Our Satisfied Customers</h2>
          <div className="mt-16 h-px bg-white/10" />

          <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {customers.map(customer => <div key={customer.alt} className="bg-[#1a1a1a] p-16 flex flex-col items-center justify-center gap-6 group hover:bg-[#FEC21E] transition-all duration-300 cursor-pointer">
                <img src={customer.src} alt={customer.alt} className="max-h-16 w-auto object-contain filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-white/40 group-hover:text-black transition-colors duration-300">{customer.label}</span>
                <div className="mt-2 h-0.5 w-0 group-hover:w-12 bg-black transition-all duration-300" />
              </div>)}
          </div>

          <div className="mt-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 border-t border-white/10 pt-12">
            <p className="text-lg font-medium text-white/50">Join our growing list of satisfied partners.</p>
            <a href="mailto:info@digitechellas.eu" className="inline-flex items-center gap-3 bg-[#FEC21E] hover:bg-[#AAC02D] text-black px-10 py-5 text-xs font-bold uppercase tracking-widest transition-all">
              <span>Get in Touch</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer: Industrial, high-contrast - Branded */}
      <footer id="contact" className="bg-[#111111] text-white pt-32 pb-16 border-t-8 border-[#FEC21E]">
         <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
            <div className="grid lg:grid-cols-[1.5fr_1fr_1fr] gap-24 pb-24 border-b border-white/10">
               <div>
                  <div className="flex items-center gap-6 mb-12">
                     <div className="h-14 w-24 bg-white p-2 flex items-center justify-center shadow-md">
                        <img src={brand.logo} alt="Logo" className="max-h-full" />
                     </div>
                     <span className="text-2xl font-black uppercase tracking-tighter text-[#FEC21E]">Digitec Hellas</span>
                  </div>
                  <p className="text-xl text-white/50 max-w-md font-medium leading-relaxed">
                     Transforming complex electronic engineering into industrial reality. Trusted by leaders across Europe for precision PCB and transformer solutions.
                  </p>
               </div>

               <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-[#AAC02D] mb-10">Headquarters</h4>
                  <address className="not-italic text-lg font-medium text-white/70 space-y-4">
                     <p>Aristotelous 3</p>
                     <p>Holargos, Athens 15562</p>
                     <p>Greece</p>
                     <div className="pt-6">
                        <a href="tel:+302106515290" className="block text-white hover:text-[#FEC21E] transition-colors">+30 210 6515290</a>
                        <a href="mailto:info@digitechellas.eu" className="block text-white hover:text-[#FEC21E] transition-colors mt-2">info@digitechellas.eu</a>
                     </div>
                  </address>
               </div>

               <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-[#AAC02D] mb-10">Technical Support</h4>
                  <div className="space-y-6">
                     <a href="#" className="block text-sm font-bold uppercase tracking-wider hover:text-[#FEC21E] transition-colors">Documentation</a>
                     <a href="#" className="block text-sm font-bold uppercase tracking-wider hover:text-[#FEC21E] transition-colors">Quality Control</a>
                     <a href="#" className="block text-sm font-bold uppercase tracking-wider hover:text-[#FEC21E] transition-colors">Global Logistics</a>
                     <a href="#" className="block text-sm font-bold uppercase tracking-wider hover:text-[#FEC21E] transition-colors">Request Callback</a>
                  </div>
               </div>
            </div>

            <div className="mt-16 flex flex-col md:flex-row justify-between items-center gap-8">
               <span className="text-xs font-bold uppercase tracking-widest text-white/30">
                  Â© 2026 Digitec Hellas. All Rights Reserved. Conceptual Siemens-Style Design with Brand Palette.
               </span>
               <div className="flex gap-12">
                  {['LinkedIn', 'Twitter', 'YouTube'].map(social => <a key={social} href="#" className="text-xs font-bold uppercase tracking-widest text-white/40 hover:text-[#FEC21E] transition-colors">
                       {social}
                    </a>)}
               </div>
            </div>
         </div>
      </footer>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && <div className="fixed inset-0 z-[100] bg-[#111111] p-12 animate-in fade-in duration-300">
           <div className="flex justify-between items-center mb-20">
              <img src={brand.logo} alt="Logo" className="h-12 w-auto bg-white p-2 shadow-sm" />
              <button onClick={() => setMobileMenuOpen(false)} className="text-[#FEC21E]">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                 </svg>
              </button>
           </div>
           <nav className="flex flex-col gap-8">
              {['Services', 'Industry', 'About', 'Technical Data', 'Customers', 'Contact'].map(item => <a key={item} href="#" className="text-4xl font-black uppercase tracking-tighter text-white hover:text-[#FEC21E]" onClick={() => setMobileMenuOpen(false)}>
                   {item}
                </a>)}
           </nav>
           <div className="mt-20 border-t border-white/10 pt-12">
              <a href="mailto:info@digitechellas.eu" className="text-[#FEC21E] font-black uppercase text-xl">Get a Quote</a>
           </div>
        </div>}
    </div>;
};