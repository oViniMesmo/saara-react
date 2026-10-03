import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';
import './index.css';

// Variáveis de animação reutilizáveis
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Obrigado! Sua mensagem foi enviada. A Amura entrará em contato em breve para falarmos sobre a sua ideia.');
    e.target.reset();
  };

  return (
    <div className="bg-[#fdfbf7] text-[#1a3622] font-body">
      
      {/* HEADER MINIMALISTA */}
      <header className="sticky top-0 z-50 flex justify-between items-center px-8 py-4 bg-[#fdfbf7]/95 backdrop-blur-sm border-b-2 border-dashed border-[#1a3622]/20">
          <div className="h-12 w-32 bg-[#f4f0e6] flex items-center justify-center rounded text-[#1a3622] font-arabic text-2xl font-bold">
             صحراء
          </div>
          <nav className="hidden md:block">
              <ul className="flex gap-8 items-center font-bold uppercase text-sm tracking-wider">
                  <li><a href="#portfolio" className="hover:text-[#2d5a3a] transition-colors">Portfólio</a></li>
                  <li><a href="#sobre" className="hover:text-[#2d5a3a] transition-colors">Sobre</a></li>
                  <li><a href="#aulas" className="hover:text-[#2d5a3a] transition-colors">Aulas</a></li>
                  <li><a href="#orcamento" className="bg-[#1a3622] text-[#f4f0e6] px-6 py-2 rounded-full hover:bg-[#C1654B] transition-all hover:scale-105 shadow-md">Orçamentos</a></li>
              </ul>
          </nav>
      </header>

      <main>
          {/* HERO SECTION - O OÁSIS */}
          <section className="hero relative bg-[#f4f0e6] overflow-hidden">
              <div className="plant p1"></div>
              <div className="plant p2"></div>
              <div className="plant p3"></div>
              <div className="plant p4"></div>
              
              <motion.div 
                className="hero-content relative z-10"
                initial="hidden" animate="visible" variants={staggerContainer}
              >
                  <motion.h1 variants={fadeUp} className="font-arabic text-[6rem] md:text-[9rem] font-bold leading-none text-[#1a3622]" dir="rtl">
                    يزيل
                  </motion.h1>
                  <motion.h2 variants={fadeUp} className="font-hand text-4xl md:text-5xl mb-4 text-[#C1654B]">
                    Arte na pele, feita à mão.
                  </motion.h2>
                  <motion.p variants={fadeUp} className="text-sm md:text-lg tracking-[2px] uppercase font-bold text-[#1a3622]/80 mt-4">
                    Saara Estúdio • Centro, Fortaleza - CE
                  </motion.p>
                  
                  <motion.div variants={fadeUp} className="flex gap-4 justify-center items-center mt-10 flex-wrap">
                      <a href="https://calendly.com/amuraalhouch/vamosever" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-[#1a3622] text-[#f4f0e6] px-6 py-3 rounded-full font-bold uppercase text-sm tracking-wider hover:bg-[#C1654B] transition-all shadow-lg hover:scale-105">
                          <Calendar size={18} /> Agendar Sessão
                      </a>
                      <a href="https://instagram.com/amuraalhouch" target="_blank" rel="noreferrer" className="btn-icon bg-transparent border-2 border-[#1a3622] text-[#1a3622] p-3 rounded-full hover:bg-[#1a3622] hover:text-[#f4f0e6] transition-all">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                      </a>
                      <a href="https://share.google/jdXroVkd3nYnrB2sg" target="_blank" rel="noreferrer" className="btn-icon bg-transparent border-2 border-[#1a3622] text-[#1a3622] p-3 rounded-full hover:bg-[#1a3622] hover:text-[#f4f0e6] transition-all">
                          <MapPin size={20} />
                      </a>
                  </motion.div>
              </motion.div>
          </section>

          {/* MANIFESTO / SOBRE (COM FOTO EM ARCO) */}
          <section id="sobre" className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
              <motion.div 
                className="flex flex-col md:flex-row items-center gap-12 md:gap-20"
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              >
                  <motion.div variants={fadeUp} className="flex-1">
                      <h2 className="font-hand text-6xl text-[#1a3622] mb-6">Amura Al Houch</h2>
                      <div className="space-y-6 text-lg text-[#1a3622]/90 leading-relaxed">
                        <p>
                          Artista visual cearense e arquiteta, com raízes sírias. O <strong>SAARA</strong> é o meu estúdio privado — abrigado em uma casinha centenária no Centro de Fortaleza —, onde transformo ideias em arte permanente e crio um espaço de experimentação.
                        </p>
                        <p>
                          Minha pesquisa explora as cores da natureza, memórias afetivas e a profunda estética da <span className="text-[#C1654B] font-bold">tatuagem tradicional árabe</span>. O resultado é sempre autoral e delicado.
                        </p>
                      </div>
                      
                      {/* SPOTIFY PLAYER */}
                      <div className="mt-12 p-6 bg-[#f4f0e6] rounded-2xl border border-[#1a3622]/10 relative">
                          <div className="absolute -top-4 -left-4 text-4xl">🎵</div>
                          <p className="font-hand text-3xl mb-4 text-[#1a3622]">Trilha sonora do oásis:</p>
                          <iframe className="rounded-xl shadow-sm" src="https://open.spotify.com/embed/playlist/2ZyO8IaRmJgSdLyL9Ujz1u?utm_source=generator" width="100%" height="152" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                      </div>
                  </motion.div>
                  
                  {/* FOTO EM ARCO ÁRABE */}
                  <motion.div variants={fadeUp} className="flex-1 w-full max-w-md mx-auto">
                      <div className="relative">
                          {/* Sombra deslocada */}
                          <div className="absolute top-6 left-6 w-full h-full border-2 border-[#C1654B] rounded-t-[200px] rounded-b-2xl -z-10"></div>
                          {/* Imagem real com corte em arco */}
                          <img src="https://picsum.photos/600/800?random=10" alt="Amura no estúdio" className="w-full h-auto object-cover rounded-t-[200px] rounded-b-2xl shadow-xl border-4 border-[#fdfbf7]" />
                      </div>
                  </motion.div>
              </motion.div>
          </section>

          {/* GALERIA EDITORIAL ASSIMÉTRICA */}
          <section id="portfolio" className="py-24 px-6 md:px-12 bg-[#f4f0e6] border-y-2 border-dashed border-[#1a3622]/20">
              <div className="max-w-6xl mx-auto">
                  <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                      <h2 className="font-hand text-6xl text-[#1a3622] mb-4">Marcas no corpo</h2>
                      <p className="text-[#1a3622]/70 uppercase tracking-widest text-sm font-bold">Trabalhos Autorais Recentes</p>
                  </motion.div>

                  {/* Grid Assimétrico Estilo Revista */}
                  <motion.div 
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
                  >
                      <motion.div variants={fadeUp} className="md:col-span-2 md:row-span-2">
                          <img src="https://picsum.photos/800/800?random=1" className="w-full h-full object-cover rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-500" alt="Tattoo destaque" />
                      </motion.div>
                      <motion.div variants={fadeUp}>
                          <img src="https://picsum.photos/400/500?random=2" className="w-full h-64 object-cover rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-500" alt="Tattoo detalhe" />
                      </motion.div>
                      <motion.div variants={fadeUp}>
                          <img src="https://picsum.photos/400/600?random=3" className="w-full h-80 object-cover rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-500 mt-0 md:-mt-16" alt="Tattoo delicada" />
                      </motion.div>
                      <motion.div variants={fadeUp}>
                          <img src="https://picsum.photos/400/400?random=4" className="w-full h-64 object-cover rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-500" alt="Tattoo floral" />
                      </motion.div>
                      <motion.div variants={fadeUp} className="md:col-span-2">
                          <img src="https://picsum.photos/800/400?random=5" className="w-full h-64 object-cover rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-500" alt="Tattoo cenário" />
                      </motion.div>
                  </motion.div>
                  
                  <div className="text-center mt-16">
                      <a href="https://instagram.com/amuraalhouch" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-transparent border-2 border-[#1a3622] text-[#1a3622] px-8 py-3 rounded-full font-bold uppercase text-sm tracking-wider hover:bg-[#1a3622] hover:text-[#f4f0e6] transition-all">
                          Ver mais no Instagram <ArrowRight size={16} />
                      </a>
                  </div>
              </div>
          </section>

          {/* SESSÃO NOVA: FLASHES DISPONÍVEIS */}
          <section className="py-24 px-6 overflow-hidden">
            <motion.div className="max-w-6xl mx-auto text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
                <motion.h2 variants={fadeUp} className="font-hand text-6xl text-[#1a3622] mb-4">Flashes Disponíveis</motion.h2>
                <motion.p variants={fadeUp} className="text-[#1a3622]/80 max-w-xl mx-auto mb-12">Desenhos autorais prontos para irem para a pele. Se apaixonou por algum? O agendamento de flashes é mais rápido.</motion.p>
                
                <motion.div variants={fadeUp} className="flex gap-6 overflow-x-auto pb-8 snap-x scrollbar-hide">
                    {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="snap-center shrink-0 w-64 bg-[#f4f0e6] p-4 rounded-xl shadow-sm border border-[#1a3622]/10 relative group">
                            <img src={`https://picsum.photos/300/400?random=${item+20}`} className="w-full h-72 object-cover rounded opacity-90 group-hover:opacity-100 mix-blend-multiply transition-all" alt="Flash Tattoo" />
                            <div className="absolute top-2 right-2 bg-[#C1654B] text-[#fdfbf7] text-xs font-bold px-2 py-1 rounded">Disponível</div>
                        </div>
                    ))}
                </motion.div>
            </motion.div>
          </section>

          {/* HISTÓRIAS (DEPOIMENTOS) */}
          <section id="historias" className="py-24 px-6 bg-[#f4f0e6] border-y-2 border-dashed border-[#1a3622]/20">
              <motion.div className="max-w-6xl mx-auto text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
                  <motion.h2 variants={fadeUp} className="font-hand text-6xl text-[#1a3622] mb-16">Histórias Vividas</motion.h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <motion.div variants={fadeUp} className="bg-[#fdfbf7] p-8 rounded-2xl border-2 border-[#1a3622] shadow-[8px_8px_0_#1a3622] text-left relative">
                          <span className="text-[#C1654B] text-6xl absolute -top-6 -left-2 font-serif">"</span>
                          <p className="font-hand text-3xl leading-snug mb-6 relative z-10">A Amura conseguiu traduzir exatamente a memória que eu queria eternizar. O Saara é mágico!</p>
                          <p className="font-bold text-sm uppercase tracking-widest text-[#1a3622]/70">- Marina S.</p>
                      </motion.div>
                      <motion.div variants={fadeUp} className="bg-[#fdfbf7] p-8 rounded-2xl border-2 border-[#1a3622] shadow-[8px_8px_0_#C1654B] text-left relative md:mt-8">
                          <span className="text-[#1a3622]/20 text-6xl absolute -top-6 -left-2 font-serif">"</span>
                          <p className="font-hand text-3xl leading-snug mb-6 relative z-10">Minha primeira tatuagem. A paciência dela é incrível e as cores ficaram super naturais na minha pele.</p>
                          <p className="font-bold text-sm uppercase tracking-widest text-[#1a3622]/70">- João P.</p>
                      </motion.div>
                      <motion.div variants={fadeUp} className="bg-[#fdfbf7] p-8 rounded-2xl border-2 border-[#1a3622] shadow-[8px_8px_0_#1a3622] text-left relative md:-mt-4">
                          <span className="text-[#C1654B] text-6xl absolute -top-6 -left-2 font-serif">"</span>
                          <p className="font-hand text-3xl leading-snug mb-6 relative z-10">Fiz um raminho com folhas que ela desenhou à mão livre na hora. Experiência única e especial.</p>
                          <p className="font-bold text-sm uppercase tracking-widest text-[#1a3622]/70">- Clara V.</p>
                      </motion.div>
                  </div>
              </motion.div>
          </section>

          {/* ORÇAMENTO E AULAS JUNTOS */}
          <section id="orcamento" className="py-24 px-6">
              <motion.div className="max-w-4xl mx-auto text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
                  <motion.h2 variants={fadeUp} className="font-hand text-6xl text-[#1a3622] mb-6">Vamos criar algo incrível?</motion.h2>
                  <motion.p variants={fadeUp} className="text-lg text-[#1a3622]/80 mb-12">Preencha o formulário abaixo se tiver uma ideia customizada, ou chame no WhatsApp para dúvidas rápidas.</motion.p>
                  
                  <motion.form variants={fadeUp} id="contact-form" onSubmit={handleSubmit} className="flex flex-col gap-6 text-left">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input type="text" placeholder="Seu Nome" className="w-full p-4 bg-transparent border-2 border-[#1a3622]/30 rounded-xl focus:border-[#C1654B] focus:outline-none transition-colors" required />
                        <input type="email" placeholder="Seu E-mail" className="w-full p-4 bg-transparent border-2 border-[#1a3622]/30 rounded-xl focus:border-[#C1654B] focus:outline-none transition-colors" required />
                      </div>
                      <textarea placeholder="Conte-me sobre a sua ideia (tamanho, local do corpo, referências de cores)..." rows="5" className="w-full p-4 bg-transparent border-2 border-[#1a3622]/30 rounded-xl focus:border-[#C1654B] focus:outline-none transition-colors" required></textarea>
                      <button type="submit" className="bg-[#1a3622] text-[#f4f0e6] py-4 rounded-xl font-bold uppercase tracking-wider hover:bg-[#C1654B] transition-colors w-full md:w-auto md:px-12 md:self-center shadow-lg">Enviar Pedido</button>
                  </motion.form>
              </motion.div>
          </section>
      </main>

      <footer className="bg-[#1a3622] text-[#f4f0e6] py-12 px-6 text-center border-t-8 border-[#C1654B]">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-left">
                <p className="font-bold text-xl font-arabic">يزيل</p>
                <p className="text-sm opacity-80 mt-1">&copy; 2026 Saara | Amura Al Houch.</p>
              </div>
              <div className="flex gap-6 items-center">
                  <a href="https://instagram.com/amuraalhouch" target="_blank" rel="noreferrer" className="hover:text-[#C1654B] transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
                  <a href="https://share.google/jdXroVkd3nYnrB2sg" target="_blank" rel="noreferrer" className="hover:text-[#C1654B] transition-colors"><MapPin /></a>
              </div>
          </div>
          <div className="mt-12 text-xs opacity-50 uppercase tracking-widest text-center">
            Atendimento exclusivo para maiores de 18 anos.
          </div>
      </footer>
    </div>
  );
}

export default App;
