import React, { useState, useEffect } from 'react';
import { ArrowDown, Mail, Phone, MapPin, ChevronRight } from 'lucide-react';
const services = [{
  title: 'Transformer assembly',
  tag: 'Power components',
  accent: '#AAC02D',
  image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1100&q=84',
  description: 'High quality transformer winding and assembly for varied power requirements.',
  stats: ['10k+ Units/mo', '100% Tested']
}, {
  title: 'PCB Design',
  tag: 'Design for assembly',
  accent: '#FEC21E',
  image: 'https://images.unsplash.com/photo-1592659762303-90081d34b277?auto=format&fit=crop&w=1100&q=84',
  description: 'Expert PCB engineering focusing on manufacturability and high-density interconnects.',
  stats: ['Multi-layer', 'Fast turn']
}, {
  title: 'Assembly services',
  tag: 'SMT production',
  accent: '#111111',
  textAccent: '#FEC21E',
  image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1100&q=84',
  description: 'State-of-the-art SMT production handling high volume and prototype development.',
  stats: ['01005 Capable', 'ISO-9001']
}];
export const DigitecHellas = () => {
  const [activeService, setActiveService] = useState(2);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      // For snap scroll container, we might need to check the container scroll
      // but assuming body scroll or we'll just bind it to window if html is scrolling
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });

    // Attempt to handle inner container scroll if used
    const container = document.getElementById('snap-container');
    if (container) {
      container.addEventListener('scroll', e => {
        setIsScrolled((e.target as HTMLElement).scrollTop > 50);
      });
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (container) container.removeEventListener('scroll', () => {});
    };
  }, []);
  return <div id="snap-container" className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-white text-[#111111] font-sans selection:bg-[#FEC21E] selection:text-black" style={{
    scrollbarWidth: 'none'
  }}>
      <style dangerouslySetInnerHTML={{
      __html: `
        #snap-container::-webkit-scrollbar { display: none; }
      `
    }} />

      {/* Navbar */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="bg-white px-4 py-2 flex items-center gap-2" style={{
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "row",
          gap: "8px",
          width: "auto",
          maxWidth: "100%",
          flexWrap: "nowrap",
          height: "auto",
          minHeight: "min-content",
          paddingLeft: "10px",
          paddingRight: "10px",
          paddingTop: "10px",
          paddingBottom: "10px"
        }}>
            <img src="/Digitechellas2.png" alt="Digitec Hellas Logo" className="h-8 object-contain" style={{
            opacity: "1",
            objectFit: "cover",
            objectPosition: "top",
            borderRadius: "0px",
            width: "69px",
            maxWidth: "69px",
            height: "auto",
            minHeight: "min-content"
          }} />
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest text-[#111111]" style={{
          background: "rgb(0 0 0 / 0)"
        }}>
            {['Home', 'Services', 'About', 'Capabilities', 'Customers', 'Contact'].map(item => <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-[#AAC02D] transition-colors" style={{
            color: "#ffffff"
          }}>{item}</a>)}
          </div>
          
          <a href="mailto:info@digitechellas.eu" className="text-[11px] font-bold uppercase tracking-widest text-[#FEC21E] hover:text-[#AAC02D] transition-colors">
            Request Quote
          </a>
        </div>
      </nav>

      {/* Section 1 - Hero */}
      <section id="home" className="relative w-full h-screen min-h-screen snap-start flex flex-col justify-center items-center overflow-hidden bg-black text-white">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none">
          <source src="/video/introVideo480.webm" type="video/webm" />
          <source src="/video/introVideo480.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/80 to-transparent pointer-events-none"></div>
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl">
          <div className="flex items-center gap-2 mb-6 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/20">
            <div className="w-2 h-2 rounded-full bg-[#AAC02D] animate-pulse"></div>
            <span className="text-xs uppercase tracking-widest font-semibold">Over 30 years in the electronic industry</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black italic tracking-tighter uppercase mb-6 leading-none">
            PCB ASSEMBLY <br />
            <span className="relative">
              &amp; DESIGN
              <span className="absolute left-0 -bottom-2 w-full h-1 md:h-1.5 bg-[#FEC21E]"></span>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl font-light mb-10">
            State-of-the-art SMT production, transformer winding, and PCB engineering.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="px-8 py-4 bg-[#FEC21E] text-black font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors duration-300">
              Call us for a quote today
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-colors duration-300">
              See our services
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center text-white/50">
          <span className="text-[10px] uppercase tracking-[0.2em] mb-2">Scroll</span>
          <ArrowDown size={20} />
        </div>
      </section>

      {/* Section 2 - Services */}
      <section id="services" className="w-full min-h-screen snap-start bg-white flex flex-col justify-center py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto w-full">
          <div className="mb-12">
            <span className="text-[10px] text-[#AAC02D] uppercase tracking-widest font-bold">Services</span>
            <h2 className="text-4xl md:text-6xl font-bold text-[#111111] mt-2 tracking-tight">Choose the manufacturing <br />support you need</h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 h-[600px]">
            {/* Left Col - Buttons */}
            <div className="flex flex-col gap-4 w-full lg:w-[430px] shrink-0">
              {services.map((service, idx) => {
              const isActive = activeService === idx;
              return <button key={idx} onClick={() => setActiveService(idx)} className={`text-left p-6 transition-all duration-300 border-l-4 group ${isActive ? 'bg-zinc-50 shadow-sm border-[#FEC21E]' : 'border-transparent hover:bg-zinc-50'}`}>
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xs font-mono text-zinc-400">0{idx + 1}</span>
                          <span className="text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 rounded-sm" style={{
                        backgroundColor: isActive ? service.accent : 'transparent',
                        color: isActive ? service.textAccent || '#fff' : '#888',
                        border: isActive ? 'none' : '1px solid #e4e4e7'
                      }}>
                            {service.tag}
                          </span>
                        </div>
                        <h3 className={`text-2xl font-bold ${isActive ? 'text-[#111111]' : 'text-zinc-400 group-hover:text-zinc-600'}`}>
                          {service.title}
                        </h3>
                      </div>
                      {isActive && <ChevronRight className="text-[#FEC21E] mt-2" />}
                    </div>
                  </button>;
            })}
            </div>

            {/* Right Col - Card */}
            <div className="flex-1 h-full rounded-2xl overflow-hidden relative group">
              <img src={services[activeService].image} alt={services[activeService].title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
              
              <div className="relative z-10 h-full flex flex-col justify-end p-10 text-white w-full md:w-2/3">
                <span className="text-[#AAC02D] text-xs font-bold uppercase tracking-widest mb-4">
                  {services[activeService].tag}
                </span>
                <h3 className="text-5xl font-bold mb-4">{services[activeService].title}</h3>
                <p className="text-zinc-300 mb-8 text-lg">{services[activeService].description}</p>
                
                <div className="flex gap-6 mb-8">
                  {services[activeService].stats.map((stat, sIdx) => <div key={sIdx} className="border-l-2 border-[#FEC21E] pl-4">
                      <span className="block text-2xl font-bold">{stat}</span>
                      <span className="text-[10px] uppercase tracking-widest text-zinc-400">Verified</span>
                    </div>)}
                </div>

                <button className="self-start px-6 py-3 bg-[#FEC21E] text-black font-bold uppercase tracking-widest text-[11px] hover:bg-white transition-colors duration-300 flex items-center gap-2">
                  Request this service <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - About */}
      <section id="about" className="w-full min-h-screen snap-start bg-[#f5f5f7] flex flex-col justify-center py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left */}
          <div className="bg-gradient-to-b from-black via-[#3f3f3f] to-[#131313] p-12 md:p-16 rounded-3xl text-white relative overflow-hidden border-t-4 border-[#FEC21E] flex flex-col justify-center min-h-[500px]">
            <span className="text-[#FEC21E] text-xs uppercase tracking-widest font-bold mb-6 block">About Digitec Hellas</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight tracking-tight">Family-business heritage, modern SMT capability.</h2>
            <p className="text-zinc-300 text-lg md:text-xl font-light leading-relaxed">
              We specialize in PCB assembly and design, combining decades of experience with the latest technology. Our commitment to excellence ensures both high-volume productions and prototype development are delivered with unmatched precision.
            </p>
          </div>

          {/* Right - Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            {[{
            t: 'High quality',
            d: 'Effective and flexible assembly-product solutions.'
          }, {
            t: 'On-time execution',
            d: 'Prototype and production support in the laboratory.'
          }, {
            t: 'Customer focus',
            d: 'Service quality, optimum support, and satisfaction.'
          }, {
            t: 'Environmentally friendly',
            d: 'Modernized, efficient equipment and responsible procedures.'
          }].map((item, i) => <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow h-full flex flex-col justify-center relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-zinc-100 group-hover:bg-[#AAC02D] transition-colors"></div>
                <h3 className="text-xl font-bold text-[#111111] mb-3">{item.t}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{item.d}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Section 4 - Capabilities */}
      <section id="capabilities" className="w-full min-h-screen snap-start bg-white flex flex-col justify-center items-center py-20 px-6 relative overflow-hidden">
        <div className="text-center w-full max-w-7xl mx-auto mb-16">
          <span className="text-[10px] text-[#AAC02D] uppercase tracking-widest font-bold block mb-4">Infrastructure</span>
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-black italic uppercase tracking-tighter leading-[0.85] text-[#111111]">
            ENGINEERED FOR <br />
            <span className="text-[#FEC21E]">RELIABILITY.</span>
          </h2>
        </div>

        <div className="w-full max-w-5xl mx-auto border-y border-zinc-200 py-8 mb-16 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-zinc-200">
          {[{
          l: 'Uptime',
          v: '99.9%'
        }, {
          l: 'Standards',
          v: 'ISO-9001'
        }, {
          l: 'Precision',
          v: '0.1mm'
        }, {
          l: 'Output',
          v: 'Global'
        }].map((stat, i) => <div key={i} className="text-center px-4">
              <span className="block text-4xl font-bold text-[#111111] mb-1">{stat.v}</span>
              <span className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">{stat.l}</span>
            </div>)}
        </div>

        <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {['SMD assembly', 'Fine pitch components', 'Prototype development', 'High-volume production', 'ROHS compliant', 'Flexible board types'].map((cap, i) => <div key={i} className="bg-white border border-zinc-200 rounded-full py-4 px-6 flex items-center gap-4 hover:border-[#FEC21E] transition-colors">
              <div className="w-3 h-3 rounded-full bg-[#FEC21E] shrink-0"></div>
              <span className="font-semibold text-zinc-800">{cap}</span>
            </div>)}
        </div>

        <a href="mailto:info@digitechellas.eu" className="px-8 py-4 bg-[#FEC21E] text-black font-bold uppercase tracking-widest text-sm hover:bg-black hover:text-white transition-colors duration-300">
          Request Facility Tour
        </a>
      </section>

      {/* Section 5 - Our Satisfied Customers */}
      <section id="customers" className="w-full min-h-screen snap-start bg-white flex flex-col justify-center items-center py-20 px-6">
        <div className="w-full max-w-7xl mx-auto text-center">
          <div className="w-24 h-[1px] bg-zinc-200 mx-auto mb-6"></div>
          <span className="text-[10px] text-[#AAC02D] uppercase tracking-widest font-bold block mb-4">Trusted by</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold italic text-[#111111] mb-6">Our Satisfied Customers</h2>
          <div className="w-64 h-[1px] bg-zinc-200 mx-auto mb-16"></div>
        </div>

        <div className="w-full bg-[#ede8e0] py-20 mb-16 shadow-[inset_0_4px_10px_rgba(0,0,0,0.02),inset_0_-4px_10px_rgba(0,0,0,0.02)] border-y border-[#e0dad0]">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-16 md:gap-24 lg:gap-32">
            <img src="https://www.digitechellas.eu/images/castumers/globiled.png" alt="GlobiLED" className="h-16 md:h-20 object-contain grayscale hover:grayscale-0 transition-all duration-500 hover:drop-shadow-md" />
            <img src="https://www.digitechellas.eu/images/castumers/CTC.png" alt="CTC electronic" className="h-16 md:h-20 object-contain grayscale hover:grayscale-0 transition-all duration-500 hover:drop-shadow-md" />
            <img src="https://www.digitechellas.eu/images/castumers/ilka.png" alt="ilka" className="h-16 md:h-20 object-contain grayscale hover:grayscale-0 transition-all duration-500 hover:drop-shadow-md" />
          </div>
        </div>

        <a href="mailto:info@digitechellas.eu" className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#111111]">
          Become a Partner
          <span className="relative flex items-center">
            <ChevronRight size={16} className="text-[#FEC21E]" />
            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#FEC21E] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </span>
        </a>
      </section>

      {/* Section 6 - Footer */}
      <footer id="contact" className="w-full min-h-screen snap-start bg-white border-t-8 border-[#FEC21E] flex flex-col">
        <div className="flex-1 flex items-center justify-center px-6 py-20">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
            {/* Col 1 */}
            <div>
              <div className="mb-6 inline-block bg-zinc-100 px-4 py-2 rounded-full">
                <img src="/Digitechellas2.png" alt="Digitec Hellas Logo" className="h-8 object-contain" />
              </div>
              <p className="text-[#111111] text-2xl mb-1">
                <span className="font-bold">DIGITEC</span>{' '}
                <span className="text-[#AAC02D] tracking-widest uppercase text-sm font-bold ml-1">Hellas</span>
              </p>
              <p className="text-zinc-500 italic">Advanced assembly & electronics.</p>
            </div>

            {/* Col 2 */}
            <div>
              <span className="text-[#AAC02D] text-xs font-bold uppercase tracking-widest block mb-6">Industrial Solutions</span>
              <ul className="space-y-4">
                {['Transformers', 'PCB Assembly', 'Design & Engineering', 'Quality Assurance'].map(link => <li key={link}>
                    <a href="#" className="text-zinc-600 font-semibold hover:text-[#FEC21E] transition-colors">{link}</a>
                  </li>)}
              </ul>
            </div>

            {/* Col 3 */}
            <div>
              <span className="text-[#FEC21E] text-xs font-bold uppercase tracking-widest block mb-6">Headquarters</span>
              <div className="space-y-4 text-zinc-600">
                <p className="flex items-start gap-3">
                  <MapPin className="text-[#FEC21E] shrink-0 mt-1" size={18} />
                  <span>Aristotelous 3<br />Holargos, Athens 15562</span>
                </p>
                <p className="flex items-center gap-3">
                  <Mail className="text-[#AAC02D] shrink-0" size={18} />
                  <a href="mailto:info@digitechellas.eu" className="hover:text-[#AAC02D] font-medium transition-colors">info@digitechellas.eu</a>
                </p>
                <p className="flex items-center gap-3 text-[#111111] font-bold">
                  <Phone className="text-[#111111] shrink-0" size={18} />
                  <span>+30-210-651-52-90</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="w-full border-t border-zinc-100 py-6 px-6">
          <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="text-[10px] text-zinc-400 uppercase tracking-widest">
              &copy; {new Date().getFullYear()} Digitec Hellas. All rights reserved.
            </span>
            <div className="flex items-center gap-6">
              {['Google', 'Facebook', 'Youtube', 'Twitter'].map(social => <a key={social} href="#" className="text-xs uppercase tracking-widest text-zinc-400 hover:text-[#FEC21E] transition-colors font-bold">
                  {social}
                </a>)}
            </div>
          </div>
        </div>
      </footer>
    </div>;
};
