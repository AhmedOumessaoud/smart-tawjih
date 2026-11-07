(() => {
  'use strict';
  // Match the available content width even with a classic desktop scrollbar.
  function updateContentWidth() {
    document.documentElement.style.setProperty('--content-width', `${document.documentElement.clientWidth}px`);
  }
  updateContentWidth();
  window.addEventListener('resize', updateContentWidth, { passive: true });
  const config = window.SMART_TAWJIH;
  const wa = `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(config.message)}`;
  document.querySelectorAll('[data-whatsapp]').forEach(link => { link.href = wa; link.target = '_blank'; link.rel = 'noopener noreferrer'; });
  document.querySelectorAll('[data-instagram]').forEach(link => { link.href = `https://www.instagram.com/${config.instagram}/`; link.target = '_blank'; link.rel = 'noopener noreferrer'; });
  document.querySelectorAll('[data-phone]').forEach(el => { el.textContent = config.phoneDisplay; });
  document.querySelectorAll('[data-handle]').forEach(el => { el.textContent = config.instagram; });
  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.navigation');
  function closeMenu(returnFocus = false) { navigation.hidden = true; menuButton.setAttribute('aria-expanded', 'false'); if (returnFocus) menuButton.focus(); }
  menuButton.addEventListener('click', () => { const opening = navigation.hidden; navigation.hidden = !opening; menuButton.setAttribute('aria-expanded', String(opening)); });
  navigation.addEventListener('click', event => {
    const link = event.target.closest('a');
    if (!link) return;
    closeMenu();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      if (target.tagName === 'DETAILS') target.open = true;
      target.tabIndex = -1; target.focus({ preventScroll: true });
    }
  });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && !navigation.hidden) closeMenu(true); });
  document.addEventListener('click', event => { if (!navigation.hidden && !navigation.contains(event.target) && !menuButton.contains(event.target)) closeMenu(); });
  document.addEventListener('focusin', event => { if (!navigation.hidden && !navigation.contains(event.target) && event.target !== menuButton) closeMenu(); });
  const localReferencePreview = !config.statisticsApproved && config.showLocalReferenceStats &&
    (location.protocol === 'file:' || ['localhost','127.0.0.1','[::1]'].includes(location.hostname));
  if (config.statisticsApproved || localReferencePreview) {
    document.querySelector('.stats').classList.add('show-figures');
    if (config.statisticsApproved) document.querySelector('.stats').classList.add('approved');
    document.querySelectorAll('.stat').forEach((el, i) => { const stat = config.statistics[i]; el.querySelector('strong').textContent = stat.value; el.querySelector('p').textContent = stat.label; });
    if (localReferencePreview) {
      document.querySelector('.stats').classList.add('reference-preview');
      const notice = document.createElement('p');
      notice.className = 'reference-stats-notice';
      notice.textContent = 'معاينة محلية: أرقام التصميم توضيحية وغير معتمدة للنشر';
      document.querySelector('.stats').after(notice);
    }
  }
  // Only approved owner-supplied content may replace the explicit design previews.
  if (config.testimonialsApproved && config.testimonials.length) {
    const track = document.querySelector('.reviews');
    track.dataset.approved = 'true';
    track.replaceChildren();
    config.testimonials.forEach(review => {
      const article = document.createElement('article'); article.className = 'card review';
      if (review.image) { const img = document.createElement('img'); img.className = 'review-photo'; img.src = review.image; img.alt = review.name; img.width = 88; img.height = 88; img.loading = 'lazy'; article.append(img); }
      const quote = document.createElement('blockquote'); quote.textContent = review.quote;
      const cite = document.createElement('cite'); cite.textContent = review.name;
      const rating = document.createElement('span'); rating.className = 'review-rating';
      rating.textContent = '★★★★★'; rating.setAttribute('role', 'img'); rating.setAttribute('aria-label', '5 من 5');
      const identity = document.createElement('div'); identity.className = 'review-identity';
      const initial = document.createElement('span'); initial.className = 'review-initial';
      initial.textContent = review.initial || review.name.charAt(0); initial.setAttribute('aria-hidden', 'true');
      const admission = document.createElement('p'); admission.className = 'review-admission'; admission.textContent = review.admission || '';
      const author = document.createElement('div'); author.append(cite, admission);
      identity.append(initial, author);
      article.append(rating, quote, identity); track.append(article);
    });
    document.querySelector('.demo-label').hidden = true;
    track.setAttribute('aria-label', 'آراء الطلاب');
  }
  const track = document.querySelector('.reviews');
  const dots = document.querySelector('.dots');
  const cards = Array.from(track.children);
  let currentReview = 0;
  function selectReview(index) {
    currentReview = Math.max(0, Math.min(index, cards.length - 1));
    const card = cards[currentReview];
    const delta = card.getBoundingClientRect().right - track.getBoundingClientRect().right;
    track.scrollTo({ left: track.scrollLeft + delta, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    Array.from(dots.children).forEach((dot, i) => dot.setAttribute('aria-current', String(i === currentReview)));
  }
  Array.from(track.children).forEach((card, i) => {
    const button = document.createElement('button'); button.type = 'button'; button.setAttribute('aria-label', `عرض البطاقة ${i + 1}`); button.setAttribute('aria-current', String(i === 0));
    button.addEventListener('click', () => selectReview(i)); dots.append(button);
  });
  function updateReviewControls() {
    const scrollable = track.scrollWidth > track.clientWidth + 2;
    dots.hidden = !scrollable || cards.length < 2;
    if (scrollable) track.tabIndex = 0; else track.removeAttribute('tabindex');
  }
  updateReviewControls();
  if ('ResizeObserver' in window) new ResizeObserver(updateReviewControls).observe(track);
  else window.addEventListener('resize', updateReviewControls);
  let scrollFrame;
  track.addEventListener('scroll', () => {
    if (scrollFrame) return;
    scrollFrame = requestAnimationFrame(() => {
      const right = track.getBoundingClientRect().right;
      currentReview = cards.reduce((best, card, i) => Math.abs(card.getBoundingClientRect().right - right) < Math.abs(cards[best].getBoundingClientRect().right - right) ? i : best, 0);
      Array.from(dots.children).forEach((dot, i) => dot.setAttribute('aria-current', String(i === currentReview)));
      scrollFrame = null;
    });
  }, { passive: true });
  track.addEventListener('keydown', event => {
    if (event.target !== track || !['ArrowLeft','ArrowRight','Home','End'].includes(event.key)) return;
    event.preventDefault();
    selectReview(event.key === 'Home' ? 0 : event.key === 'End' ? cards.length - 1 : currentReview + (event.key === 'ArrowLeft' ? 1 : -1));
  });
  const floating = document.querySelector('.floating-wa');
  const hero = document.querySelector('.hero');
  const contact = document.querySelector('#contact');
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(([entry]) => floating.classList.toggle('is-visible', !entry.isIntersecting), { threshold: 0 }).observe(hero);
    new IntersectionObserver(([entry]) => floating.classList.toggle('is-at-contact', entry.isIntersecting), { threshold: 0 }).observe(contact);
    if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }); }, { threshold: .08 });
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el)); document.documentElement.classList.add('motion');
    }
  } else {
    floating.classList.add('is-visible');
  }
})();
