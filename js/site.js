// H.K. Vision — Modern vanilla ES module (zero jQuery / zero legacy plugins)

document.documentElement.classList.remove('no-js');

// ---------------------------------------------------------------------------
// 1. Active navigation link
// ---------------------------------------------------------------------------
const navTarget = document.body.getAttribute('data-page-url');
if (navTarget) {
  document.querySelectorAll('.active-link').forEach((el) => el.classList.remove('active-link'));
  document.querySelectorAll(`a[href="${CSS.escape(navTarget)}"]`).forEach((el) => {
    el.classList.add('active-link');
  });
}

// ---------------------------------------------------------------------------
// 2. Accessible mobile navigation toggle
// ---------------------------------------------------------------------------
const menuToggle = document.querySelector('.js-menu-toggle');

function setMenuOpen(isOpen) {
  document.body.classList.toggle('menu--open', isOpen);
  if (menuToggle) {
    menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  }
}

menuToggle?.addEventListener('click', () => {
  setMenuOpen(!document.body.classList.contains('menu--open'));
});

document.querySelectorAll('.menu__list__item__link').forEach((link) => {
  link.addEventListener('click', () => setMenuOpen(false));
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && document.body.classList.contains('menu--open')) {
    setMenuOpen(false);
    menuToggle?.focus();
  }
});

// ---------------------------------------------------------------------------
// 3. Unwrap standalone single-page images & wrap embeds/tables
// ---------------------------------------------------------------------------
document.querySelectorAll('.single p > img').forEach((img) => {
  const p = img.parentElement;
  if (!p || p.children.length !== 1) return;
  const wrap = document.createElement('div');
  wrap.className = 'image-wrap';
  p.insertAdjacentElement('afterend', wrap);
  wrap.appendChild(img);
  p.remove();
});

document.querySelectorAll('.single iframe').forEach((iframe) => {
  const src = iframe.getAttribute('src') || '';
  if (!/youtube|vimeo/i.test(src)) return;
  const width = Number(iframe.getAttribute('width')) || 16;
  const height = Number(iframe.getAttribute('height')) || 9;
  const ratio = (height / width) * 100;

  const videoWrap = document.createElement('div');
  videoWrap.className = 'video-wrap';
  const video = document.createElement('div');
  video.className = 'video';
  video.style.paddingBottom = `${ratio}%`;
  iframe.insertAdjacentElement('beforebegin', videoWrap);
  videoWrap.appendChild(video);
  video.appendChild(iframe);
});

document.querySelectorAll('.single table').forEach((table) => {
  const wrap = document.createElement('div');
  wrap.className = 'table-wrap';
  table.insertAdjacentElement('beforebegin', wrap);
  wrap.appendChild(table);
});

// ---------------------------------------------------------------------------
// 4. Native <dialog closedby="any"> Photo Lightbox
// ---------------------------------------------------------------------------
const lightbox = document.getElementById('photo-lightbox');
const lightboxImg = lightbox?.querySelector('.lightbox__img');
const lightboxCaption = lightbox?.querySelector('.lightbox__caption');
const lightboxCounter = lightbox?.querySelector('.lightbox__counter');
const lightboxClose = lightbox?.querySelector('.lightbox__close');
const lightboxPrev = lightbox?.querySelector('.lightbox__nav--prev');
const lightboxNext = lightbox?.querySelector('.lightbox__nav--next');

let lightboxItems = [];
let lightboxIndex = 0;

function renderLightboxItem() {
  if (!lightboxImg || !lightboxItems.length) return;
  const item = lightboxItems[lightboxIndex];
  lightboxImg.src = item.src;
  lightboxImg.alt = item.alt || '';
  if (lightboxCaption) {
    lightboxCaption.textContent = item.alt || '';
  }
  if (lightboxCounter) {
    lightboxCounter.textContent =
      lightboxItems.length > 1 ? `${lightboxIndex + 1} / ${lightboxItems.length}` : '';
  }
  const hasMultiple = lightboxItems.length > 1;
  if (lightboxPrev) lightboxPrev.hidden = !hasMultiple;
  if (lightboxNext) lightboxNext.hidden = !hasMultiple;
}

function openLightbox(items, startIndex = 0) {
  if (!lightbox || !items.length) return;
  lightboxItems = items;
  lightboxIndex = startIndex;
  renderLightboxItem();
  if (!lightbox.open) {
    lightbox.showModal();
    lightboxClose?.focus();
  }
}

function stepLightbox(delta) {
  if (lightboxItems.length <= 1) return;
  lightboxIndex = (lightboxIndex + delta + lightboxItems.length) % lightboxItems.length;
  renderLightboxItem();
}

if (lightbox) {
  lightboxClose?.addEventListener('click', () => lightbox.close());
  lightboxPrev?.addEventListener('click', () => stepLightbox(-1));
  lightboxNext?.addEventListener('click', () => stepLightbox(1));

  lightbox.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      stepLightbox(-1);
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      stepLightbox(1);
    }
  });

  // Fallback light-dismiss for browsers without `closedby="any"` (e.g., Safari)
  if (!('closedBy' in HTMLDialogElement.prototype)) {
    const isOutside = (e) => {
      const r = lightbox.getBoundingClientRect();
      return e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
    };
    let pressedOutside = false;
    lightbox.addEventListener('pointerdown', (e) => {
      pressedOutside = isOutside(e);
    });
    lightbox.addEventListener('pointerup', (e) => {
      if (pressedOutside && isOutside(e)) lightbox.close();
    });
  }
}

function wireLightboxGroup(elements) {
  const items = elements.map((img) => ({
    src: img.currentSrc || img.getAttribute('src') || '',
    alt: img.getAttribute('alt') || document.querySelector('.intro h1')?.textContent?.trim() || '',
  }));

  elements.forEach((img, index) => {
    const trigger = img.closest('button.lightbox-trigger') || img;
    if (trigger === img) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'lightbox-trigger';
      btn.setAttribute('aria-label', `View photo${items[index].alt ? `: ${items[index].alt}` : ''} in fullscreen`);
      img.insertAdjacentElement('beforebegin', btn);
      btn.appendChild(img);
      btn.addEventListener('click', () => openLightbox(items, index));
    }
  });
}

// ---------------------------------------------------------------------------
// 5. Galleries: Native CSS Scroll-Snap Carousel (1 col) & CSS Grid (2+ cols)
// ---------------------------------------------------------------------------
const supportsReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function initCarousel(gallery, images) {
  gallery.classList.add('gallery--carousel', 'gallery--on');
  gallery.setAttribute('role', 'region');
  gallery.setAttribute('aria-roledescription', 'carousel');
  gallery.setAttribute('aria-label', 'Photo gallery');

  const track = document.createElement('div');
  track.className = 'carousel-track';
  track.tabIndex = 0;
  track.setAttribute('role', 'group');
  track.setAttribute('aria-label', 'Slides');

  const total = images.length;
  images.forEach((img, idx) => {
    const slide = document.createElement('div');
    slide.className = 'carousel-slide';
    slide.setAttribute('role', 'group');
    slide.setAttribute('aria-roledescription', 'slide');
    slide.setAttribute('aria-label', `${idx + 1} of ${total}`);
    img.setAttribute('loading', idx === 0 ? 'eager' : 'lazy');
    img.setAttribute('decoding', 'async');
    slide.appendChild(img);
    track.appendChild(slide);
  });

  gallery.replaceChildren(track);
  wireLightboxGroup(images);

  if (total <= 1) return;

  const controls = document.createElement('div');
  controls.className = 'carousel-controls';
  controls.innerHTML = `
    <button type="button" class="carousel-btn" data-direction="previous" aria-label="Previous slide">&larr;</button>
    <button type="button" class="carousel-btn" data-direction="next" aria-label="Next slide">&rarr;</button>
  `;
  gallery.insertBefore(controls, track);

  const status = document.createElement('p');
  status.className = 'visually-hidden';
  status.setAttribute('role', 'status');
  status.setAttribute('aria-live', 'polite');
  gallery.appendChild(status);

  const markersNav = document.createElement('nav');
  markersNav.className = 'carousel-markers';
  markersNav.setAttribute('aria-label', 'Choose a slide');

  const markerBtns = images.map((_, idx) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'carousel-marker';
    btn.setAttribute('aria-label', `Go to slide ${idx + 1}`);
    if (idx === 0) btn.setAttribute('aria-current', 'true');
    btn.addEventListener('click', () => scrollToSlide(idx));
    markersNav.appendChild(btn);
    return btn;
  });
  gallery.appendChild(markersNav);

  const slides = Array.from(track.children);
  let settledIndex = 0;

  function nearestIndex() {
    const center = track.scrollLeft + track.clientWidth / 2;
    let best = 0;
    let bestDist = Infinity;
    slides.forEach((slide, idx) => {
      const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
      const dist = Math.abs(slideCenter - center);
      if (dist < bestDist) {
        bestDist = dist;
        best = idx;
      }
    });
    return best;
  }

  function updateMarkers(activeIdx) {
    markerBtns.forEach((btn, idx) => {
      if (idx === activeIdx) btn.setAttribute('aria-current', 'true');
      else btn.removeAttribute('aria-current');
    });
  }

  function scrollToSlide(idx) {
    const target = slides[(idx + total) % total];
    if (!target) return;
    updateMarkers((idx + total) % total);
    track.scrollTo({
      left: target.offsetLeft,
      behavior: supportsReducedMotion() ? 'auto' : 'smooth',
    });
  }

  controls.querySelector('[data-direction="previous"]')?.addEventListener('click', () => {
    scrollToSlide(nearestIndex() - 1);
  });
  controls.querySelector('[data-direction="next"]')?.addEventListener('click', () => {
    scrollToSlide(nearestIndex() + 1);
  });

  let rafId = null;
  track.addEventListener(
    'scroll',
    () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        updateMarkers(nearestIndex());
      });
    },
    { passive: true }
  );

  function onSettled() {
    const idx = nearestIndex();
    updateMarkers(idx);
    if (idx !== settledIndex) {
      settledIndex = idx;
      status.textContent = `Slide ${idx + 1} of ${total}`;
    }
  }

  if ('onscrollend' in window) {
    track.addEventListener('scrollend', onSettled);
  } else {
    let timer;
    track.addEventListener(
      'scroll',
      () => {
        clearTimeout(timer);
        timer = setTimeout(onSettled, 140);
      },
      { passive: true }
    );
  }
}

document.querySelectorAll('.gallery').forEach((gallery, idx) => {
  gallery.id = `gallery-${idx + 1}`;
  const cols = gallery.getAttribute('data-columns');
  const images = Array.from(gallery.querySelectorAll(':scope > img'));
  if (!images.length) {
    gallery.classList.add('gallery--on');
    return;
  }

  if (cols === '1') {
    initCarousel(gallery, images);
    return;
  }

  const wrap = document.createElement('div');
  wrap.className = 'gallery__wrap';
  images.forEach((img) => {
    const item = document.createElement('div');
    item.className = 'gallery__item';
    img.setAttribute('loading', 'lazy');
    img.setAttribute('decoding', 'async');
    item.appendChild(img);
    wrap.appendChild(item);
  });

  gallery.replaceChildren(wrap);
  gallery.classList.add('gallery--grid', 'gallery--on');
  wireLightboxGroup(images);
});

// Wire standalone hero/body photos on single pages/projects to the lightbox
const singleImages = Array.from(document.querySelectorAll('.single .image-wrap > img'));
if (singleImages.length) {
  wireLightboxGroup(singleImages);
}

// ---------------------------------------------------------------------------
// 6. Contact form honeypot & client validation
// ---------------------------------------------------------------------------
const contactForm = document.getElementById('contact-form');
contactForm?.addEventListener('submit', (event) => {
  contactForm.querySelectorAll('.contact-form__item--error').forEach((el) => {
    el.classList.remove('contact-form__item--error');
  });

  const email = contactForm.querySelector('.contact-form__input[name="email"]');
  const name = contactForm.querySelector('.contact-form__input[name="name"]');
  const message = contactForm.querySelector('.contact-form__textarea[name="message"]');
  const gotcha = contactForm.querySelector('.contact-form__gotcha');

  let valid = true;
  for (const field of [email, name, message]) {
    if (!field || field.value.trim() === '') {
      field?.closest('.contact-form__item')?.classList.add('contact-form__item--error');
      valid = false;
    }
  }
  if (!valid || (gotcha && gotcha.value.length > 0)) {
    event.preventDefault();
  }
});
