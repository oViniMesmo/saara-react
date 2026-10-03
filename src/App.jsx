import './index.css';

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Obrigado! Sua mensagem foi enviada. A Amura entrará em contato em breve para falarmos sobre a sua tatuagem.');
    e.target.reset();
  };

  return (
    <>
      <header>
          <div className="logo-container">
              <img src="https://via.placeholder.com/180x60/f4f0e6/1a3622?text=Logo+Saara+(S%C3%ADrio)" alt="Saara Logo" className="logo" id="brand-logo" />
          </div>
          <nav>
              <ul>
                  <li><a href="#portfolio">Portfólio</a></li>
                  <li><a href="#sobre">Sobre</a></li>
                  <li><a href="#aulas">Aulas</a></li>
                  <li><a href="#historias">Histórias</a></li>
                  <li><a href="#orcamento" className="btn-primary">Orçamentos</a></li>
              </ul>
          </nav>
      </header>

      <main>
          <section className="hero">
              <div className="plant p1"></div>
              <div className="plant p2"></div>
              <div className="plant p3"></div>
              <div className="plant p4"></div>
              
              <div className="hero-content">
                  <h1 className="arabic-title" dir="rtl">يزيل</h1>
                  <h2 className="hero-subtitle">Arte na pele, feita à mão.</h2>
                  <p>Saara Estúdio de tatuagem - Rua Rodrigues Junior, 383 - Fortaleza, CE</p>
                  <div className="hero-links">
                      <a href="https://calendly.com/amuraalhouch/vamosever" target="_blank" rel="noreferrer" className="btn-primary">Agendar Sessão</a>
                      <a href="https://instagram.com/amuraalhouch" target="_blank" rel="noreferrer" className="btn-icon" aria-label="Instagram" title="Instagram">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                      </a>
                      <a href="https://share.google/jdXroVkd3nYnrB2sg" target="_blank" rel="noreferrer" className="btn-icon" aria-label="Google Maps" title="Google Maps">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                      </a>
                  </div>
              </div>
          </section>

          <section id="portfolio" className="portfolio">
              <h2>Marcas no corpo</h2>
              <div className="gallery">
                  <div className="gallery-item"><img src="https://picsum.photos/400/400?random=1" alt="Tattoo 1" /></div>
                  <div className="gallery-item"><img src="https://picsum.photos/400/400?random=2" alt="Tattoo 2" /></div>
                  <div className="gallery-item"><img src="https://picsum.photos/400/400?random=3" alt="Tattoo 3" /></div>
                  <div className="gallery-item"><img src="https://picsum.photos/400/400?random=4" alt="Tattoo 4" /></div>
                  <div className="gallery-item"><img src="https://picsum.photos/400/400?random=5" alt="Tattoo 5" /></div>
                  <div className="gallery-item"><img src="https://picsum.photos/400/400?random=6" alt="Tattoo 6" /></div>
              </div>
              <div className="view-more">
                  <a href="https://instagram.com/amuraalhouch" target="_blank" rel="noreferrer" className="btn-secondary">Ver mais no Instagram</a>
              </div>
          </section>

          <section id="sobre" className="sobre">
              <div className="sobre-content">
                  <div className="sobre-text">
                      <h2>Amura Al Houch</h2>
                      <p>Artista visual cearense e arquiteta, com raízes sírias. O SAARA é o meu estúdio privado — abrigado em uma casinha centenária no Centro de Fortaleza —, onde transformo ideias em arte permanente e crio um espaço de experimentação para ilustração e pintura.</p>
                      <p>Minha pesquisa na tatuagem explora cores, elementos da natureza, memórias afetivas e a estética da tatuagem tradicional árabe, buscando sempre um resultado autoral, delicado e cheio de personalidade.</p>
                      
                      <div className="spotify-player" style={{ marginTop: '35px' }}>
                          <p style={{ fontFamily: 'var(--handwriting-font)', fontSize: '1.8rem', marginBottom: '15px', color: 'var(--text-color)' }}>Ouça a trilha sonora do estúdio:</p>
                          <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/playlist/2ZyO8IaRmJgSdLyL9Ujz1u?utm_source=generator" width="100%" height="152" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                      </div>
                  </div>
                  <div className="sobre-img">
                      <img src="https://picsum.photos/500/600?random=7" alt="Amura no estúdio" />
                  </div>
              </div>
          </section>

          <section id="aulas" className="aulas">
              <div className="aulas-content">
                  <div className="aulas-img">
                      <img src="https://picsum.photos/500/400?random=8" alt="Amura ensinando e desenhando" />
                  </div>
                  <div className="aulas-text">
                      <h2>Aulas e Oficinas</h2>
                      <p>Além de tatuar, compartilho minha paixão pela arte através de oficinas e mentorias. Ministro aulas focadas em <strong>introdução ao desenho para tatuagem</strong>, processos criativos e no desenvolvimento de estilo autoral (como as turmas que guiei na Vila das Artes).</p>
                      <p>Seja para quem está dando os primeiros passos ou para artistas buscando refinar sua identidade visual, os encontros são um espaço seguro para troca, técnica e experimentação artística.</p>
                      <p style={{ marginTop: '20px', fontFamily: 'var(--handwriting-font)', fontSize: '2.2rem', fontWeight: '700' }}>Turmas em Breve...</p>
                  </div>
              </div>
          </section>

          <section id="historias" className="historias">
              <h2>Histórias de Clientes</h2>
              <div className="cards-container">
                  <div className="card">
                      <p className="depoimento">"A Amura conseguiu traduzir exatamente a memória que eu queria eternizar. O traço é delicado e o ambiente do SAARA é super acolhedor e cheio de arte!"</p>
                      <p className="cliente">- Marina S.</p>
                  </div>
                  <div className="card">
                      <p className="depoimento">"Minha primeira tatuagem não poderia ter sido com outra pessoa. A paciência e a visão artística dela são incríveis. As cores ficaram perfeitas e super naturais."</p>
                      <p className="cliente">- João P.</p>
                  </div>
                  <div className="card">
                      <p className="depoimento">"Fiz um raminho com folhas que ela desenhou à mão livre na hora. Uma experiência única e muito especial, recomendo de olhos fechados!"</p>
                      <p className="cliente">- Clara V.</p>
                  </div>
              </div>
          </section>

          <section id="orcamento" className="orcamento">
              <h2>Vamos criar algo incrível?</h2>
              <p>Preencha o formulário abaixo para solicitar um orçamento e contar a sua ideia.</p>
              <form id="contact-form" onSubmit={handleSubmit}>
                  <input type="text" placeholder="Seu Nome" required />
                  <input type="email" placeholder="Seu E-mail" required />
                  <textarea placeholder="Conte-me sobre a sua ideia (tamanho, local do corpo, referências de cores)..." rows="5" required></textarea>
                  <button type="submit" className="btn-primary">Enviar Pedido</button>
              </form>
          </section>
      </main>

      <footer>
          <div className="footer-content">
              <p>&copy; 2026 Saara | Amura Al Houch. Todos os direitos reservados.</p>
              <div className="social-links">
                  <a href="https://instagram.com/amuraalhouch" target="_blank" rel="noreferrer">Instagram</a>
                  <span>|</span>
                  <a href="https://share.google/jdXroVkd3nYnrB2sg" target="_blank" rel="noreferrer">Google Maps</a>
                  <span>|</span>
                  <a href="#" target="_blank" rel="noreferrer">WhatsApp</a>
              </div>
          </div>
      </footer>
    </>
  );
}

export default App;
