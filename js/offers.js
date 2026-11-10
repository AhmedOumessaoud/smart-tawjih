(() => {
  const packs = [
    { name: 'Orientation', price: 500, tag: ['التوجيه والمواكبة', 'Orientation et suivi'], intro: ['خطوة واضحة لاختيار مسارك الدراسي.', 'Un premier pas pour choisir votre voie.'], features: [
      ['اختبار التوجيه الدراسي والمهني وتحليل الميولات والقدرات.', 'Test d’orientation scolaire et professionnelle, analyse des intérêts et aptitudes.'],
      ['اقتراح المسارات المناسبة وتقديم المدارس والتخصصات.', 'Proposition de parcours et présentation des écoles et filières.'],
      ['تنبيهات التسجيل والمباريات والنتائج ومراحل الانتقاء.', 'Alertes sur les inscriptions, concours, résultats et sélections.'],
      ['شرح شروط الولوج والوثائق المطلوبة وإرشادات إعداد الملفات.', 'Conditions d’accès, documents nécessaires et conseils pour préparer les dossiers.'],
      ['توضيح المسار الجامعي وآفاقه المهنية.', 'Présentation du parcours universitaire et de ses débouchés.'],
      ['مواكبة عبر واتساب خلال فترة الترشيحات والتسجيلات.', 'Suivi sur WhatsApp pendant les candidatures et inscriptions.'] ] },
    { name: 'Accompagnement', price: 1000, tag: ['التوجيه + التسجيل في 10 مؤسسات', 'Orientation + 10 établissements'], intro: ['جميع خدمات Orientation، بالإضافة إلى:', 'Tous les services Orientation, plus :'], features: [
      ['اختيار 10 مؤسسات تناسب ملفك الدراسي وميولاتك.', 'Sélection de 10 établissements adaptés à votre dossier et à vos intérêts.'],
      ['التسجيل والترشيح في 10 مؤسسات.', 'Inscription et candidature dans 10 établissements.'],
      ['إعداد ملفات الترشيح ومراجعتها.', 'Préparation et vérification des dossiers de candidature.'],
      ['التحقق من الوثائق المطلوبة وشروط التسجيل.', 'Vérification des documents et des conditions d’inscription.'],
      ['تتبع طلبات الترشيح ومراحل الانتقاء.', 'Suivi des candidatures et des étapes de sélection.'] ] },
    { name: 'Admission', price: 1500, popular: true, tag: ['التوجيه + التسجيل في أكثر من 15 مؤسسة', 'Orientation + plus de 15 établissements'], intro: ['جميع خدمات Accompagnement، بالإضافة إلى:', 'Tous les services Accompagnement, plus :'], features: [
      ['توسيع الترشيحات لتشمل أكثر من 15 مؤسسة.', 'Candidatures élargies à plus de 15 établissements.'],
      ['تنويع الاختيارات بين المؤسسات والتخصصات والمسارات الدراسية.', 'Diversification des établissements, filières et parcours.'],
      ['إعداد وتتبع ملفات الترشيح الإضافية.', 'Préparation et suivi des candidatures supplémentaires.'],
      ['مواكبة مختلف مراحل التسجيل والانتقاء.', 'Accompagnement des différentes étapes d’inscription et de sélection.'] ] },
    { name: 'Admission Plus', price: 2000, tag: ['التوجيه الشامل', 'Accompagnement complet'], intro: ['جميع خدمات Admission، بالإضافة إلى:', 'Tous les services Admission, plus :'], features: [
      ['التسجيل في جميع المؤسسات العمومية المناسبة لملفك الدراسي.', 'Inscription dans tous les établissements publics adaptés à votre dossier.'],
      ['التسجيل في 3 مؤسسات خاصة باختيارك وبالتنسيق مع فريق Smart Tawjih.', 'Inscription dans 3 établissements privés de votre choix, en coordination avec Smart Tawjih.'],
      ['مواكبة شاملة لجميع إجراءات الترشيح والانتقاء والقبول والتسجيل النهائي.', 'Suivi complet des candidatures, sélections, admissions et inscriptions définitives.'] ] }
  ];
  const track = document.querySelector('.offers-grid');
  const highlights = [
    [['اختبار الميولات وتحليل القدرات', 'Test d’orientation et analyse du profil'], ['اختيار المسارات والمدارس', 'Choix des filières et des écoles'], ['تنبيهات ومواكبة عبر واتساب', 'Alertes et suivi sur WhatsApp']],
    [['جميع خدمات Orientation', 'Tous les services Orientation'], ['التسجيل في 10 مؤسسات', 'Candidatures dans 10 établissements'], ['إعداد الملفات وتتبع الترشيحات', 'Dossiers préparés et candidatures suivies']],
    [['جميع خدمات Accompagnement', 'Tous les services Accompagnement'], ['الترشيح لأكثر من 15 مؤسسة', 'Plus de 15 établissements'], ['اختيارات متنوعة ومواكبة الانتقاء', 'Choix élargis et suivi des sélections']],
    [['جميع خدمات Admission', 'Tous les services Admission'], ['جميع المؤسسات العمومية المناسبة', 'Tous les établissements publics adaptés'], ['3 مؤسسات خاصة وتتبع التسجيل النهائي', '3 établissements privés et suivi final']]
  ];
  const title = document.querySelector('#offers-title');
  const controls = document.createElement('div'); controls.className = 'offer-controls';
  const help = document.createElement('p'); help.className = 'offer-swipe-hint';
  const escape = text => text.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const text = (ar, fr) => document.documentElement.lang === 'fr' ? fr : ar;
  const pair = values => values[document.documentElement.lang === 'fr' ? 1 : 0];
  track.id = 'offer-track'; track.tabIndex = 0; track.setAttribute('role', 'region');
  title.after(help); track.after(controls);
  let selected = 2;
  function navigate(index, smooth = true) {
    selected = Math.max(0, Math.min(index, packs.length - 1));
    const card = track.children[selected];
    const stride = track.children[1].offsetLeft - track.children[0].offsetLeft;
    track.scrollTo({ left: selected * stride, behavior: smooth && !matchMedia('(prefers-reduced-motion: reduce)').matches ? 'smooth' : 'instant' });
    update();
  }
  function update() {
    controls.querySelectorAll('[data-pack]').forEach(button => button.setAttribute('aria-current', String(Number(button.dataset.pack) === selected)));
  }
  function render() {
    const targetIndex = selected;
    track.setAttribute('aria-label', text('باقات التوجيه والتسجيل', 'Offres d’orientation et d’inscription'));
    help.textContent = text('اسحب للجنب لاكتشاف الباقات ومقارنة الخدمات', 'Faites défiler pour découvrir les offres et comparer les services');
    track.innerHTML = packs.map((pack, index) => `<article class="card offer ${pack.popular ? 'offer-popular' : ''}">
      <div class="offer-badge">${pack.popular ? text('الأكثر طلباً', 'La plus demandée') : text('باقة التوجيه', 'Votre accompagnement')}</div>
      <h3 dir="ltr">${pack.name}</h3><p class="offer-tag">${pair(pack.tag)}</p>
      <p class="offer-price"><bdi>${pack.price.toLocaleString('fr-FR')} DH</bdi></p>
      <ul class="offer-features">${highlights[index].map(feature => `<li>${pair(feature)}</li>`).join('')}</ul>
      <details class="offer-details"><summary>${text('جميع التفاصيل', 'Tous les détails')}</summary><p class="offer-intro">${pair(pack.intro)}</p><ul class="offer-features">${pack.features.map(feature => `<li>${pair(feature)}</li>`).join('')}</ul></details>
      <a class="button gold" data-open-registration data-offer="${escape(pack.name)}" href="#registration">${text('اختر هذه الباقة', 'Choisir cette offre')} <img src="assets/icons/user-plus.svg" alt="" width="22" height="22"></a>
    </article>`).join('');
    controls.innerHTML = `<button type="button" data-prev aria-label="${text('الباقة السابقة', 'Offre précédente')}">‹</button><div class="offer-pagination">${packs.map((pack, i) => `<button type="button" data-pack="${i}" aria-label="${pack.name}" aria-controls="offer-track"><span>${pack.name}</span></button>`).join('')}</div><button type="button" data-next-pack aria-label="${text('الباقة التالية', 'Offre suivante')}">›</button>`;
    requestAnimationFrame(() => navigate(targetIndex, false));
  }
  controls.addEventListener('click', event => {
    const button = event.target.closest('button'); if (!button) return;
    navigate(button.hasAttribute('data-pack') ? Number(button.dataset.pack) : selected + (button.hasAttribute('data-prev') ? -1 : 1));
  });
  track.addEventListener('keydown', event => {
    if (event.target !== track || !['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const rtl = getComputedStyle(track).direction === 'rtl';
    navigate(event.key === 'Home' ? 0 : event.key === 'End' ? 3 : selected + ((event.key === 'ArrowLeft') === rtl ? 1 : -1));
  });
  let frame;
  track.addEventListener('scroll', () => {
    cancelAnimationFrame(frame); frame = requestAnimationFrame(() => {
      const center = track.getBoundingClientRect().left + track.clientWidth / 2;
      selected = [...track.children].reduce((best, card, i, cards) => {
        const distance = el => Math.abs(el.getBoundingClientRect().left + el.offsetWidth / 2 - center);
        return distance(card) < distance(cards[best]) ? i : best;
      }, 0); update();
    });
  }, { passive: true });
  document.addEventListener('languagechange', render);
  const playback = document.createElement('button'); playback.type = 'button'; playback.className = 'offers-playback'; controls.after(playback);
  let paused = false, visible = false, interactionUntil = 0, touching = false;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)'), mobile = matchMedia('(max-width: 700px)');
  function updatePlayback() {
    playback.textContent = paused ? text('تشغيل العرض التلقائي', 'Reprendre le défilement') : text('إيقاف العرض التلقائي', 'Mettre en pause');
    playback.setAttribute('aria-pressed', String(paused)); playback.hidden = !mobile.matches || reduced.matches;
  }
  playback.addEventListener('click', () => { paused = !paused; updatePlayback(); });
  controls.addEventListener('click', () => { interactionUntil = Date.now() + 10000; });
  track.addEventListener('pointerdown', () => { touching = true; interactionUntil = Date.now() + 10000; });
  window.addEventListener('pointerup', () => { touching = false; });
  window.addEventListener('pointercancel', () => { touching = false; });
  track.addEventListener('toggle', () => { interactionUntil = Date.now() + 10000; }, true);
  if ('IntersectionObserver' in window) new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; }, { threshold: .3 }).observe(track);
  setInterval(() => {
    if (mobile.matches && !reduced.matches && visible && !document.hidden && !paused && !touching && Date.now() > interactionUntil &&
      !track.querySelector('details[open]') && !title.closest('section').contains(document.activeElement)) navigate((selected + 1) % packs.length);
  }, 7000);
  document.addEventListener('languagechange', updatePlayback);
  reduced.addEventListener('change', updatePlayback); mobile.addEventListener('change', updatePlayback);
  updatePlayback();
  render();
  document.fonts.ready.then(() => requestAnimationFrame(() => navigate(2, false)));
})();
