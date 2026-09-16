const linkedInUrl = 'https://www.linkedin.com/in/davidr%C3%ADosruedas/'

const sections = [
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'sobre-mi', label: 'Perfil' },
    { id: 'experiencia', label: 'Experiencia' },
    { id: 'ia', label: 'IA aplicada' },
    { id: 'recursos', label: 'Recursos' },
    { id: 'contacto', label: 'Contacto' },
]

const app = document.querySelector('#app')

app.innerHTML = `
  <div class="site-shell">
    <div class="reading-progress" aria-hidden="true"><span></span></div>
    <header class="site-header">
      <a class="brand" href="#inicio" aria-label="Ir al inicio">
        <span class="brand-mark">DRR</span>
        <span class="brand-name">David Ríos Ruedas <em>Audiovisuales</em></span>
      </a>
      <nav class="desktop-nav" aria-label="Navegación principal">
        ${sections.map((section) => `<a href="#${section.id}">${section.label}</a>`).join('')}
      </nav>
      <div class="header-actions">
        <button class="icon-button" id="theme-toggle" type="button" aria-label="Cambiar tema" title="Cambiar tema">☼</button>
        <a class="header-link" href="${linkedInUrl}" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
        <button class="menu-button" id="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-nav" aria-label="Abrir menú">☰</button>
      </div>
    </header>
    <nav class="mobile-nav" id="mobile-nav" aria-label="Navegación móvil">
      ${sections.map((section) => `<a href="#${section.id}">${section.label}</a>`).join('')}
    </nav>

    <main>
      <section class="hero" id="inicio">
        <div class="hero-copy reveal">
          <p class="eyebrow"><span class="status-dot"></span> Especialista en IA generativa · Editor de vídeo</p>
          <h1>David Ríos<br /><span>Ruedas</span></h1>
          <p class="hero-lead">Técnico audiovisual y creador de contenido con más de siete años de experiencia, especializado actualmente en IA generativa y edición de vídeo.</p>
          <div class="hero-actions">
            <a class="button button-primary" href="#sobre-mi">Explorar perfil <span aria-hidden="true">↓</span></a>
            <a class="button button-quiet" href="${linkedInUrl}" target="_blank" rel="noreferrer">Ver LinkedIn <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div class="hero-aside reveal reveal-delay">
          <img class="hero-photo" src="./assets/david-rios-ruedas-perfil.jpg" alt="David Ríos Ruedas" />
        </div>
        <div class="hero-footer">
          <span>01 / 05</span>
          <span class="hero-line"></span>
          <span>Scroll para descubrir</span>
        </div>
      </section>

      <section class="section projects-section" id="proyectos">
        <div class="section-kicker">01 — Proyectos</div>
        <div class="section-heading-row">
          <h2>Proyectos que<br /><span>dejan huella</span></h2>
          <span class="section-count">Contenido audiovisual</span>
        </div>
        <div class="project-placeholder">
          <div class="placeholder-art"><img src="./assets/jose-mota-rey.png" alt="José Mota caracterizado como el rey" /><span>DRR</span></div>
          <div class="placeholder-copy"><span class="project-label">Selección profesional</span><h3>Vídeo, fotografía y narrativa visual</h3><p>Una selección de trabajos compartidos en LinkedIn, desde producción audiovisual con IA hasta making-of, fotografía y contenido digital.</p></div>
        </div>
        <div class="embed-grid" aria-label="Publicaciones audiovisuales de LinkedIn">
          <article class="embed-card"><div class="embed-label">01 · Producción audiovisual</div><iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7041348553176158208?compact=1" title="Publicación audiovisual de LinkedIn" loading="lazy" allowfullscreen></iframe></article>
          <article class="embed-card"><div class="embed-label">02 · Caso corporativo con IA</div><iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7447924974264356864?compact=1" title="Publicación audiovisual de LinkedIn: producción con IA" loading="lazy" allowfullscreen></iframe></article>
          <article class="embed-card"><div class="embed-label">03 · Contenido generativo</div><iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7417557389400379392?compact=1" title="Publicación audiovisual de LinkedIn: contenido generativo" loading="lazy" allowfullscreen></iframe></article>
        </div>
        <div class="youtube-grid" aria-label="Vídeos de YouTube">
          <article class="youtube-card"><div class="embed-label">04 · Una nueva mirada</div><iframe src="https://www.youtube.com/embed/XSE-lBJwr0U?si=EYLIrztzXLeh7mnE" title="Pieza audiovisual de David Ríos Ruedas" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></article>
          <article class="youtube-card"><div class="embed-label">05 · Narrativa audiovisual</div><iframe src="https://www.youtube.com/embed/E7vh-6yKJS4?si=7dB2o6fmoeBC-ekq" title="Pieza audiovisual de David Ríos Ruedas" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></article>
          <article class="youtube-card"><div class="embed-label">06 · Detrás de la imagen</div><iframe src="https://www.youtube.com/embed/QoOt99-bHNg?si=nak8B9w9t78N7o1E" title="Pieza audiovisual de David Ríos Ruedas" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></article>
          <article class="youtube-card"><div class="embed-label">07 · Movimiento y montaje</div><iframe src="https://www.youtube.com/embed/9yQZiszFT1Y?si=FkEpc_U0ncYuVZ5s" title="Pieza audiovisual de David Ríos Ruedas" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></article>
        </div>
      </section>

      <section class="section section-intro" id="sobre-mi">
        <div class="section-kicker">02 — Perfil</div>
        <div class="intro-grid">
          <div class="intro-copy">
            <p>Soy David Ríos, técnico audiovisual y creador de contenido con más de siete años de experiencia. Hoy combino producción audiovisual tradicional con inteligencia artificial para crear imágenes, vídeo, voces y clones con procesos más ágiles, escalables y de alta calidad.</p>
          </div>
          <div class="intro-portrait"><img src="./assets/jose-mota-queen.png" alt="José Mota caracterizado como reina" /></div>
        </div>
      </section>

      <section class="section section-dark" id="experiencia">
        <div class="section-kicker">03 — Recorrido</div>
        <div class="section-heading-row">
          <h2>Experiencia<br /><span>profesional</span></h2>
          <p>De la creación de contenido y la producción en directo a la integración actual de IA generativa.</p>
        </div>
        <div class="timeline">
          <article class="timeline-item timeline-current"><div class="timeline-date">feb. 2025 — actualidad</div><div class="timeline-content"><h3>Especialista en creación y postproducción de contenido audiovisual</h3><strong>Xerppa · Jornada completa · Granada · Híbrido</strong><p>Desarrollo de contenido digital combinando edición tradicional con herramientas de inteligencia artificial. Creación de avatares virtuales, voces sintéticas, clonación de voz, doblaje multilingüe, sincronización labial, generación de imágenes y motion graphics.</p><span class="timeline-tag">IA generativa</span><span class="timeline-tag">Producción de vídeo</span></div></article>
          <article class="timeline-item"><div class="timeline-date">feb. 2024 — sept. 2024</div><div class="timeline-content"><h3>Técnico audiovisual</h3><strong>Audiovisuales Alquitel · Granada · Presencial</strong><p>Montaje de pantalla LED en el concierto de Andy y Lucas en Granada y montaje audiovisual en el Teatro Gerolamo de Milán, incluyendo pantalla LED y operación de cámara.</p></div></article>
          <article class="timeline-item"><div class="timeline-date">sept. 2023 — dic. 2023</div><div class="timeline-content"><h3>Técnico audiovisual</h3><strong>Audiovisuales Alquitel · Granada · Presencial</strong><p>Trabajo con pantallas LED y realización en directo.</p></div></article>
          <article class="timeline-item"><div class="timeline-date">sept. 2019 — jun. 2022</div><div class="timeline-content"><h3>Técnico Audiovisual y Marketing</h3><strong>Finca Casarejo · Navalmoral de la Mata</strong><p>Grabación y edición de vídeos, fotografía, redes sociales y creación de contenido para marketing digital en Facebook Business, Google Ads y Amazon Ads.</p></div></article>
          <article class="timeline-item"><div class="timeline-date">oct. 2016 — sept. 2019</div><div class="timeline-content"><h3>Técnico Audiovisual · Freelance</h3><strong>Madrid y alrededores</strong><p>Operador de cámara, fotógrafo, editor de vídeo, eventos corporativos y auxiliar de montaje. Trabajos para Power AV, Brahler y programas como José Mota o galas de Navidad de TVE.</p></div></article>
          <article class="timeline-item"><div class="timeline-date">2015 — 2018</div><div class="timeline-content"><h3>Producción, fotografía y edición</h3><strong>Experiencia complementaria</strong><p>Trabajos para José Mota, Editorial Aguilar, OutPlay Productions, Camovi Eventos, Cáscara amarga, BRAHLER ICS España y Carné Joven Madrid. Consulta las colaboraciones detalladas en LinkedIn.</p></div></article>
        </div>
      </section>

      <section class="section ai-section" id="ia">
        <div class="section-kicker">04 — Método</div>
        <div class="ai-grid">
          <div><h2>Inteligencia<br /><span>artificial aplicada</span></h2></div>
          <div class="ai-panel"><div class="ai-index">AI / proceso actual</div><h3>IA como herramienta creativa y estratégica</h3><p>En Xerppa, David desarrolla contenido digital combinando técnicas tradicionales de edición con herramientas de IA. Controla un proceso que abarca la creación de avatares personalizados, generación de voces sintéticas, clonación de voz, doblaje multilingüe, sincronización labial y generación de imágenes, además de motion graphics.</p><p>La IA acelera la producción, permite escalar piezas y eleva la calidad del contenido, mientras el criterio audiovisual y la postproducción mantienen el control creativo.</p><div class="ai-tags"><span>Avatares</span><span>Voz sintética</span><span>Clonación</span><span>Doblaje</span><span>Lip sync</span></div></div>
        </div>
      </section>

      <section class="section skills-section" id="recursos">
        <div class="section-kicker">05 — Recursos</div>
        <div class="skills-layout"><h2>Herramientas<br /><span>y competencias</span></h2><div class="skills-list"><div class="skill-row"><span>01</span><strong>IA generativa audiovisual</strong><small>Avatares, voces, imágenes, doblaje y sincronización labial</small></div><div class="skill-row"><span>02</span><strong>Edición y motion graphics</strong><small>Adobe Premiere · Adobe After Effects</small></div><div class="skill-row"><span>03</span><strong>Producción y fotografía</strong><small>Canon EOS 60D · Sony a6500 · cámara · eventos · redes</small></div></div></div>
      </section>

      <section class="contact-section" id="contacto">
        <div class="contact-inner"><h2>¿Tienes una idea?<br /><span>Hagámosla visible.</span></h2><p class="contact-copy">Cuéntame qué quieres crear y exploremos el formato, la narrativa y la tecnología adecuada.</p><div class="contact-links"><a href="mailto:david.riosruedas@hotmail.com">david.riosruedas@hotmail.com</a><a href="tel:+34686151404">686 151 404</a><a href="${linkedInUrl}" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a></div></div><div class="contact-photo"><img src="./assets/david-rios-ruedas-montana.jpg" alt="David Ríos Ruedas en la montaña" /></div>
      </section>
    </main>

    <footer class="site-footer"><span>© ${new Date().getFullYear()} David Ríos Ruedas Audiovisuales</span><span><a href="${linkedInUrl}" target="_blank" rel="noreferrer">LinkedIn ↗</a></span></footer>
    <button class="back-top" id="back-top" type="button" aria-label="Volver al inicio">↑</button>
  </div>
`

const root = document.documentElement
const progress = document.querySelector('.reading-progress span')
const backTop = document.querySelector('#back-top')
const mobileNav = document.querySelector('#mobile-nav')

window.addEventListener('scroll', () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight
    progress.style.width = `${scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0}%`
    backTop.classList.toggle('is-visible', window.scrollY > 500)
}, { passive: true })

document.querySelector('#theme-toggle').addEventListener('click', () => {
    const dark = root.classList.toggle('dark-theme')
    document.querySelector('#theme-toggle').textContent = dark ? '☾' : '☼'
    document.querySelector('#theme-toggle').setAttribute('aria-label', dark ? 'Activar tema claro' : 'Activar tema oscuro')
})

document.querySelector('#menu-toggle').addEventListener('click', (event) => {
    const open = mobileNav.classList.toggle('is-open')
    event.currentTarget.setAttribute('aria-expanded', String(open))
})

document.querySelectorAll('.mobile-nav a').forEach((link) => link.addEventListener('click', () => {
    mobileNav.classList.remove('is-open')
    document.querySelector('#menu-toggle').setAttribute('aria-expanded', 'false')
}))

backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }))

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible')
    })
}, { threshold: 0.14 })
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))
