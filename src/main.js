// El contenido está en index.html para que los buscadores lo lean directamente.
// Este archivo solo añade el comportamiento.

const COPY_ALLOWED = '[data-copy-ok]'

const isInsideCopyAllowed = (node) => {
  const element = node && (node.nodeType === Node.ELEMENT_NODE ? node : node.parentElement)
  return Boolean(element && element.closest(COPY_ALLOWED))
}

const selectionIsCopyAllowed = () => {
  const selection = window.getSelection()
  if (!selection || selection.isCollapsed) return false
  return isInsideCopyAllowed(selection.anchorNode) && isInsideCopyAllowed(selection.focusNode)
}

// Solo se puede copiar el email. Imágenes y textos no se pueden copiar, arrastrar ni guardar
// desde la página (no impide capturas de pantalla ni herramientas de desarrollador).
const protectContent = () => {
  document.querySelectorAll('img').forEach((img) => {
    img.draggable = false
    img.setAttribute('decoding', 'async')
    if (!img.hasAttribute('loading')) img.setAttribute('loading', 'lazy')
  })

  document.addEventListener('contextmenu', (event) => {
    if (!isInsideCopyAllowed(event.target)) event.preventDefault()
  })

  document.addEventListener('dragstart', (event) => {
    event.preventDefault()
  })

  document.addEventListener('selectstart', (event) => {
    if (!isInsideCopyAllowed(event.target)) event.preventDefault()
  })

  const blockCopy = (event) => {
    if (!selectionIsCopyAllowed()) event.preventDefault()
  }
  document.addEventListener('copy', blockCopy)
  document.addEventListener('cut', blockCopy)

  document.addEventListener('keydown', (event) => {
    if (!(event.ctrlKey || event.metaKey)) return
    const key = event.key.toLowerCase()
    if (['s', 'p', 'u'].includes(key)) event.preventDefault()
    if ((key === 'c' || key === 'x') && !selectionIsCopyAllowed()) event.preventDefault()
  })

  document.querySelectorAll('[data-copy-email]').forEach((button) => {
    const label = button.textContent
    button.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(button.dataset.copyEmail)
        button.textContent = 'Email copiado'
      } catch {
        const link = document.querySelector(`${COPY_ALLOWED}`)
        const range = document.createRange()
        range.selectNodeContents(link)
        window.getSelection().removeAllRanges()
        window.getSelection().addRange(range)
        button.textContent = 'Pulsa Ctrl+C'
      }
      setTimeout(() => { button.textContent = label }, 2000)
    })
  })
}

// Las miniaturas cargan el vídeo solo al pulsarlas: la página carga más rápido.
// data-video: vídeo propio, se reproduce con un solo clic. data-embed: reproductor de YouTube.
const setupVideoThumbs = () => {
  document.querySelectorAll('.video-thumb').forEach((thumb) => {
    thumb.addEventListener('click', () => {
      if (thumb.dataset.video) {
        const video = document.createElement('video')
        video.src = thumb.dataset.video
        video.poster = thumb.querySelector('img').src
        video.title = thumb.dataset.title
        video.controls = true
        video.playsInline = true
        video.preload = 'auto'
        video.setAttribute('controlslist', 'nodownload')
        thumb.replaceWith(video)
        video.play().catch(() => {})
        return
      }

      const iframe = document.createElement('iframe')
      iframe.src = thumb.dataset.embed
      iframe.title = thumb.dataset.title
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
      iframe.referrerPolicy = 'strict-origin-when-cross-origin'
      iframe.allowFullscreen = true
      thumb.replaceWith(iframe)
      iframe.focus()
    })
  })
}

const shuffleSlides = (track) => {
  const slides = [...track.children]
  for (let index = slides.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1))
      ;[slides[index], slides[randomIndex]] = [slides[randomIndex], slides[index]]
  }
  slides.forEach((slide) => track.appendChild(slide))
}

const root = document.documentElement
const progress = document.querySelector('.reading-progress span')
const backTop = document.querySelector('#back-top')
const mobileNav = document.querySelector('#mobile-nav')

// El menú está una sola vez en el HTML (enlaces sin duplicar para los buscadores);
// el de móvil se copia del de escritorio.
document.querySelectorAll('.desktop-nav a').forEach((link) => mobileNav.appendChild(link.cloneNode(true)))
const photoModal = document.querySelector('#photo-modal')
const photoModalImage = photoModal.querySelector('img')

protectContent()
setupVideoThumbs()

document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = String(new Date().getFullYear())
})

const openPhotoModal = (src, alt) => {
  photoModalImage.src = src
  photoModalImage.alt = alt
  photoModal.classList.add('is-open')
  photoModal.setAttribute('aria-hidden', 'false')
}

const closePhotoModal = () => {
  photoModal.classList.remove('is-open')
  photoModal.setAttribute('aria-hidden', 'true')
}

const carousel = document.querySelector('[data-carousel]')

if (carousel) {
  const track = carousel.querySelector('.carousel-track')
  shuffleSlides(track)
  const slides = [...carousel.querySelectorAll('.carousel-slide')]
  const currentLabel = carousel.querySelector('[data-slide-current]')
  carousel.querySelector('[data-slide-total]').textContent = String(slides.length)
  const previousButton = carousel.querySelector('.is-prev')
  const nextButton = carousel.querySelector('.is-next')
  const expandButton = carousel.querySelector('.carousel-expand')
  let currentIndex = Math.floor(Math.random() * slides.length)
  let autoAdvanceTimer = null

  const updateCarousel = () => {
    track.style.transform = `translateX(-${currentIndex * 100}%)`
    slides.forEach((slide, index) => slide.classList.toggle('is-active', index === currentIndex))
    currentLabel.textContent = String(currentIndex + 1)
  }

  const restartAutoAdvance = () => {
    clearInterval(autoAdvanceTimer)
    autoAdvanceTimer = setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length
      updateCarousel()
    }, 4500)
  }

  previousButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length
    updateCarousel()
    restartAutoAdvance()
  })

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length
    updateCarousel()
    restartAutoAdvance()
  })

  slides.forEach((slide) => {
    slide.addEventListener('click', () => {
      const { image, alt } = slide.dataset
      openPhotoModal(image, alt)
      clearInterval(autoAdvanceTimer)
    })
  })

  expandButton.addEventListener('click', () => {
    const { image, alt } = slides[currentIndex].dataset
    openPhotoModal(image, alt)
    clearInterval(autoAdvanceTimer)
  })

  updateCarousel()
  restartAutoAdvance()
}

photoModal.addEventListener('click', (event) => {
  if (event.target.matches('[data-close-modal]') || event.target.matches('.photo-modal__close')) {
    closePhotoModal()
  }
})

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && photoModal.classList.contains('is-open')) {
    closePhotoModal()
  }
})

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
