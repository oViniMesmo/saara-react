import './index.css';

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Obrigado! Sua mensagem foi enviada. A Amura entrará em contato em breve para falarmos sobre a sua ideia.');
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
              <div className="hero-content">
                  <h1 className="arabic-title" dir="rtl">يزيل</h1>
                  <h2 className="hero-subtitle">Arte na pele, feita à mão.</h2>
                  <p>Saara Estúdio de tatuagem - Rua Rodrigues Junior, 383 - Fortaleza, CE</p>
                  <div className="hero-links">
                      <a href="#orcamento" className="btn-primary">Agendar Sessão</a>
                      <a href="https://instagram.com/amuraalhouch" target="_blank" rel="noreferrer" className="btn-secondary">Instagram</a>
                      <a href="https://share.google/jdXroVkd3nYnrB2sg" target="_blank" rel="noreferrer" className="btn-secondary">Google Maps</a>
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
