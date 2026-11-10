(() => {
  'use strict';
  const config = window.SMART_TAWJIH, settings = config.registration;
  const dialog = document.createElement('dialog');
  dialog.className = 'registration-dialog'; dialog.id = 'registration';
  dialog.setAttribute('aria-modal', 'true'); dialog.setAttribute('aria-labelledby', 'registration-title');
  const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const options = list => '<option value="">اختر من القائمة</option>' + list.map(v => `<option>${escape(v)}</option>`).join('');
  const error = name => `<span class="registration-error" id="error-${name}" aria-live="polite"></span>`;
  const field = (name, label, input) => `<div class="registration-field"><label for="reg-${name}">${label}</label>${input}${error(name)}</div>`;
  const input = (name, attrs = '') => `<input id="reg-${name}" name="${name}" aria-describedby="error-${name}" ${attrs}>`;
  const select = (name, list) => `<select id="reg-${name}" name="${name}" aria-describedby="error-${name}">${options(list)}</select>`;
  const choices = (name, list, icons = false) => list.map((v,i) => `<label class="registration-choice">${icons ? '<img src="assets/icons/cap.svg" alt="">' : ''}<input type="radio" name="${name}" value="${escape(v)}" ${i === 0 && name === 'applicant' ? 'checked' : ''} aria-describedby="error-${name}"><span>${escape(v)}</span></label>`).join('');
  dialog.innerHTML = `<div class="registration-shell"><button class="registration-close" type="button" aria-label="إغلاق الاستمارة">×</button><img class="registration-logo" src="assets/brand/logo-white-v3.svg" width="168" height="49" alt="SMART TAWJIH"><div class="registration-form-content"><header class="registration-header"><img class="registration-academic" src="assets/images/about-academic-v4.webp" alt="" width="125" height="120"><h2 id="registration-title">استمارة طلب الاستشارة والتسجيل</h2><p>3 خطوات بسيطة باش نتعرفو على احتياجاتك ونساعدوك تختار المسار المناسب</p></header><ol class="registration-progress" aria-label="مراحل الاستمارة"><li><span>1</span></li><li><span>2</span></li><li><span>3</span></li></ol><form class="registration-panel" novalidate>
  <section class="registration-step" data-step="1"><p class="registration-kicker">الخطوة 1 من 3</p><h3 tabindex="-1">مرحباً بك!</h3><p class="registration-intro">عمّر معلومات التواصل باش نقدروا نتواصلو معاك</p><fieldset class="registration-field registration-fieldset"><legend>شكون اللي كيعمر الاستمارة؟</legend><div class="registration-choices">${choices('applicant',['أنا التلميذ(ة)','أنا ولي الأمر'])}</div></fieldset>${field('fullName','<span id="reg-name-label">الاسم الكامل</span>',input('fullName','autocomplete="name" maxlength="100" placeholder="كتب الاسم والنسب" required'))}${field('phone','رقم الهاتف (واتساب)',`<div class="registration-phone"><span aria-hidden="true">🇲🇦 +212</span>${input('phone','type="tel" inputmode="tel" autocomplete="tel-national" dir="ltr" placeholder="06 12 34 56 78" required')}</div>`)}${field('city','المدينة',select('city',settings.cities))}<div id="reg-other-city" hidden>${field('customCity','اسم المدينة',input('customCity','autocomplete="address-level2" maxlength="80" placeholder="كتب اسم مدينتك"'))}</div><div class="registration-actions"><button class="registration-primary" type="button" data-next>متابعة ←</button></div></section>
  <section class="registration-step" data-step="2" hidden><p class="registration-kicker">الخطوة 2 من 3</p><h3 tabindex="-1">خلينا نتعرفو على مسارك الدراسي</h3><p class="registration-intro">هاد المعلومات غادي تعاون فريق التوجيه يفهم وضعيتك</p>${field('studentName','اسم التلميذ(ة)',input('studentName','autocomplete="off" maxlength="100" placeholder="الاسم الكامل للتلميذ(ة)" required'))}<fieldset class="registration-field registration-fieldset"><legend>المستوى الدراسي <span aria-hidden="true">*</span></legend><div class="registration-choices registration-levels">${choices('level',settings.levels,true)}</div>${error('level')}</fieldset><div id="reg-branch-wrap">${field('branch','الشعبة الدراسية',select('branch',settings.branches))}</div>${field('regional','نقطة الامتحان الجهوي (اختيارية)',input('regional','inputmode="decimal" dir="ltr" placeholder="مثال: 15.50"'))}<div id="reg-national-wrap" hidden>${field('national','نقطة الامتحان الوطني (اختيارية)',input('national','inputmode="decimal" dir="ltr" placeholder="مثال: 16.00"'))}</div>${field('academicYear','السنة الدراسية',input('academicYear',`value="${escape(settings.academicYear)}" maxlength="30" required`))}<div class="registration-actions"><button class="registration-primary" type="button" data-next>متابعة ←</button><button class="registration-back" type="button" data-back>→ رجوع</button></div></section>
  <section class="registration-step" data-step="3" hidden><p class="registration-kicker">الخطوة 3 من 3</p><h3 tabindex="-1">شنو الخدمة اللي محتاج ليها؟</h3><p class="registration-intro">اختار الخدمات اللي باغي تستافد منها</p><fieldset class="registration-field registration-fieldset"><legend class="sr-only">الخدمات المطلوبة</legend><div class="registration-services">${settings.services.map((v,i)=>`<label class="registration-choice"><input type="checkbox" name="services" value="${escape(v)}" aria-describedby="error-services"><img src="assets/icons/${['target','university','coins','clipboard-check','cap'][i]}.svg" alt=""><span>${escape(v)}</span></label>`).join('')}</div>${error('services')}</fieldset>${field('notes','ملاحظات إضافية (اختيارية)','<textarea id="reg-notes" name="notes" maxlength="1500" placeholder="مثلاً: التخصص أو المدرسة اللي مهتم بها..."></textarea>')}<label class="registration-consent"><input type="checkbox" name="consent" aria-describedby="error-consent"><span>أوافق على استخدام بياناتي الشخصية والدراسية لمعالجة طلب الاستشارة والتواصل معي.</span></label>${error('consent')}<p class="registration-privacy">المعلومات كتبقى فهاد الاستمارة حتى تختار إرسالها عبر واتساب. ما كنخزنوهاش فالمتصفح وما كنرسلوهاش لأدوات الإحصائيات.</p><div class="registration-actions"><button class="registration-primary" type="submit"><img src="assets/icons/whatsapp.svg" alt="">إرسال الطلب عبر واتساب</button><button class="registration-back" type="button" data-back>رجوع</button></div></section>
  </form><p class="registration-draft-note">تقدر تسد الاستمارة وترجع تكملها؛ المعلومات كتبقى غير فهاد الصفحة حتى تسدها أو تعاود تحميلها.</p></div>
  <section class="registration-handoff" hidden aria-labelledby="registration-handoff-title"><div class="registration-check" aria-hidden="true">✓</div><h3 id="registration-handoff-title" tabindex="-1">باقي غير خطوة أخيرة!</h3><h4>تم تجهيز طلبك! كمل إرسال الرسالة في واتساب.</h4><p>وجدنا ليك المعلومات كاملة. تأكد من إرسال الرسالة في واتساب باش يتوصل فريق Smart Tawjih بطلبك.</p><a class="registration-primary" id="registration-reopen" target="_blank" rel="noopener noreferrer">فتح واتساب من جديد <img src="assets/icons/whatsapp.svg" alt=""></a><button class="registration-link" type="button" data-edit>مراجعة المعلومات</button><button class="registration-link" type="button" data-close>العودة إلى الصفحة الرئيسية</button><img class="registration-campus" src="assets/images/moroccan-campus.webp" alt="معمار مغربي ونخيل" width="600" height="250"></section></div>`;
  document.body.append(dialog);
  const form = dialog.querySelector('form'), steps = [...dialog.querySelectorAll('[data-step]')];
  let selectedOffer = '';
  const offerSummary = document.createElement('p'); offerSummary.className = 'registration-kicker'; offerSummary.hidden = true;
  dialog.querySelector('.registration-header').append(offerSummary);
  document.addEventListener('click', event => {
    const choice = event.target.closest('[data-offer]');
    if (choice) {
      selectedOffer = choice.dataset.offer;
      offerSummary.textContent = `Pack ${selectedOffer}`;
      offerSummary.hidden = false;
    }
  });
  let step = 1, opener, scrollY = 0, closing = false, submitted = false, autoStudentName = '', bodyStyle = '';
  const value = name => form.elements.namedItem(name)?.value?.trim() || '';
  const setError = (name, message) => {
    const el = dialog.querySelector(`#error-${name}`); if (el) el.textContent = message;
    [...form.querySelectorAll(`[name="${name}"]`)].forEach(el => el.setAttribute('aria-invalid', String(Boolean(message))));
    return !message;
  };
  const digits = str => str.replace(/[٠-٩۰-۹]/g,c=>'٠١٢٣٤٥٦٧٨٩'.includes(c)?'٠١٢٣٤٥٦٧٨٩'.indexOf(c):'۰۱۲۳۴۵۶۷۸۹'.indexOf(c));
  function normalizePhone(raw) { let n = digits(raw).replace(/[\s().-]/g,''); if (/^00212/.test(n)) n = '+'+n.slice(2); if (/^212/.test(n)) n = '+'+n; if (/^0[67]\d{8}$/.test(n)) return '+212'+n.slice(1); return /^\+212[67]\d{8}$/.test(n)?n:null; }
  const grade = str => digits(str).replace(',','.');
  function validate(which) {
    let valid = true; const check = (name, ok, msg) => { if (!setError(name,ok?'':msg)) valid=false; };
    if (which === 1) { check('fullName',value('fullName').length>=3,'كتب الاسم الكامل ديالك، على الأقل 3 حروف.');check('phone',Boolean(normalizePhone(value('phone'))),'دخل رقم مغربي صحيح كيبدا بـ 06 أو 07، أو +212.');check('city',Boolean(value('city')),'اختار المدينة ديالك.');check('customCity',value('city')!=='أخرى'||value('customCity').length>=2,'كتب اسم المدينة ديالك.'); }
    if (which === 2) { check('studentName',value('studentName').length>=3,'كتب الاسم الكامل للتلميذ(ة).');check('level',Boolean(value('level')),'اختار المستوى الدراسي.');check('branch',value('level')==='مستوى آخر'||Boolean(value('branch')),'اختار الشعبة الدراسية.');for (const name of ['regional','national']) { const relevant = name!=='national'||!dialog.querySelector('#reg-national-wrap').hidden;check(name,!relevant||!value(name)||(/^(?:\d{1,2})(?:\.\d+)?$/.test(grade(value(name)))&&Number(grade(value(name)))<=20),'دخل نقطة صحيحة بين 0 و20.'); }check('academicYear',Boolean(value('academicYear')),'كتب السنة الدراسية.'); }
    if (which === 3) {check('services',Boolean(form.querySelector('[name=services]:checked')),'اختار خدمة واحدة على الأقل.');check('consent',form.elements.consent.checked,'خاص الموافقة على استعمال المعلومات لمعالجة الطلب.');}
    if(!valid) { const first=steps[which-1].querySelector('[aria-invalid=true]');first?.focus();first?.scrollIntoView({block:'center',behavior:'instant'}); }return valid;
  }
  function showStep(next, focus = true) { step=next;steps.forEach((el,i)=>el.hidden=i!==step-1);dialog.querySelectorAll('.registration-progress li').forEach((el,i)=>{el.classList.toggle('is-current',i===step-1);el.classList.toggle('is-complete',i<step-1);el.querySelector('span').textContent=i<step-1?'✓':String(i+1);if(i===step-1)el.setAttribute('aria-current','step');else el.removeAttribute('aria-current');});if(focus){steps[step-1].querySelector('h3').focus({preventScroll:true});dialog.scrollTo({top:0,behavior:'instant'});} }
  function conditions() {dialog.querySelector('#reg-other-city').hidden=value('city')!=='أخرى';const parent=value('applicant')==='أنا ولي الأمر';dialog.querySelector('#reg-name-label').textContent=parent?'اسم ولي الأمر':'الاسم الكامل';dialog.querySelector('#reg-national-wrap').hidden=value('level')!=='حاصل(ة) على البكالوريا';dialog.querySelector('#reg-branch-wrap').hidden=value('level')==='مستوى آخر';}
  window.openRegistrationModal = function(trigger) {if(dialog.open||closing)return;opener=trigger||document.activeElement;scrollY=window.scrollY;bodyStyle=document.body.getAttribute('style')||'';const width=document.documentElement.clientWidth;document.documentElement.style.setProperty('--content-width',width+'px');document.body.style.cssText+=`;position:fixed;top:-${scrollY}px;width:100%;overflow:hidden;padding-right:${window.innerWidth-width}px`;dialog.showModal();dialog.querySelector('.registration-close').focus({preventScroll:true});};
  window.closeRegistrationModal = function() {if(!dialog.open||closing)return;closing=true;dialog.classList.add('is-closing');setTimeout(()=>{dialog.close();dialog.classList.remove('is-closing');document.body.setAttribute('style',bodyStyle);window.scrollTo({top:scrollY,behavior:'instant'});closing=false;opener?.focus({preventScroll:true});},matchMedia('(prefers-reduced-motion: reduce)').matches?0:220);};
  document.addEventListener('click',e=>{const trigger=e.target.closest('[data-open-registration]');if(trigger){e.preventDefault();window.openRegistrationModal(trigger);}});
  dialog.addEventListener('cancel',e=>{e.preventDefault();window.closeRegistrationModal();});
  dialog.addEventListener('click',e=>{if(e.target.closest('.registration-close,[data-close]'))window.closeRegistrationModal();if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)window.closeRegistrationModal();}if(e.target.closest('[data-next]')&&validate(step)){if(step===1&&value('applicant')==='أنا التلميذ(ة)'&&(!value('studentName')||value('studentName')===autoStudentName)){form.elements.studentName.value=value('fullName');autoStudentName=value('fullName');}showStep(step+1);}if(e.target.closest('[data-back]'))showStep(step-1);if(e.target.closest('[data-edit]')){submitted=false;dialog.querySelector('.registration-handoff').hidden=true;dialog.querySelector('.registration-form-content').hidden=false;showStep(3);}});
  form.addEventListener('change',()=>{conditions();steps[step-1].querySelectorAll('[aria-invalid=true]').forEach(el=>{if(el.name)setError(el.name,'');});});
  form.addEventListener('input',e=>{if(e.target.name)setError(e.target.name,'');});
  dialog.addEventListener('keydown',e=>{if(e.key!=='Tab')return;const items=[...dialog.querySelectorAll('button,a[href],input,select,textarea,[tabindex="0"]')].filter(el=>!el.disabled&&el.getClientRects().length);const first=items[0],last=items.at(-1);if(e.shiftKey&&(document.activeElement===first||!items.includes(document.activeElement))){e.preventDefault();last.focus();}else if(!e.shiftKey&&(document.activeElement===last||!items.includes(document.activeElement))){e.preventDefault();first.focus();}});
  function message() {
    if (window.SmartI18n?.language === 'fr') {
      const t = window.SmartI18n.t;
      const lines = ['Bonjour, je souhaite une consultation SMART TAWJIH.', '', 'Nouvelle demande',
        `Profil : ${t(value('applicant'))}`, `Nom : ${value('fullName')}`,
        `Telephone : ${normalizePhone(value('phone'))}`,
        `Ville : ${value('customCity') && !dialog.querySelector('#reg-other-city').hidden ? value('customCity') : t(value('city'))}`,
        `Eleve : ${value('studentName')}`, `Niveau : ${t(value('level'))}`];
      if (!dialog.querySelector('#reg-branch-wrap').hidden) lines.push(`Filiere : ${t(value('branch'))}`);
      if (value('regional')) lines.push(`Note regionale : ${grade(value('regional'))}`);
      if (!dialog.querySelector('#reg-national-wrap').hidden && value('national')) lines.push(`Note nationale : ${grade(value('national'))}`);
      lines.push(`Annee scolaire : ${value('academicYear')}`, '', 'Services souhaites :',
        ...[...form.querySelectorAll('[name=services]:checked')].map(el => '- ' + t(el.value)));
      if (value('notes')) lines.push('', 'Remarques :', value('notes'));
      if (selectedOffer) lines.push('', `Pack : ${selectedOffer}`);
      lines.push('', 'Consentement au traitement de la demande : oui', 'Merci.');
      return lines.join('\n');
    }
 const lines=['السلام عليكم، بغيت نستافد من الاستشارة الأولية ديال SMART TAWJIH.','','📋 طلب استشارة جديد','',`👤 صفة مقدم الطلب: ${value('applicant')}`,`👤 الاسم الكامل: ${value('fullName')}`,`📱 رقم الهاتف: ${normalizePhone(value('phone'))}`,`📍 المدينة: ${value('city')==='أخرى'?value('customCity'):value('city')}`,'',`🎓 اسم التلميذ(ة): ${value('studentName')}`,`📚 المستوى الدراسي: ${value('level')}`];if(!dialog.querySelector('#reg-branch-wrap').hidden)lines.push(`📖 الشعبة: ${value('branch')}`);if(value('regional'))lines.push(`📊 نقطة الجهوي: ${grade(value('regional'))}`);if(!dialog.querySelector('#reg-national-wrap').hidden&&value('national'))lines.push(`📊 نقطة الوطني: ${grade(value('national'))}`);lines.push(`🗓 السنة الدراسية: ${value('academicYear')}`,'','✅ الخدمات المطلوبة:',...[...form.querySelectorAll('[name=services]:checked')].map(el=>'- '+el.value));if(value('notes'))lines.push('','📝 ملاحظات إضافية:',value('notes'));lines.push('','الموافقة على استعمال المعلومات لمعالجة الاستشارة: نعم','شكراً لكم.');if(selectedOffer)lines.push('',`Pack : ${selectedOffer}`);return lines.join('\n'); }
  form.addEventListener('submit',e=>{e.preventDefault();if(step!==3){steps[step-1].querySelector('[data-next]').click();return;}if(submitted)return;for(let i=1;i<=3;i++){if(!validate(i)){showStep(i,false);steps[i-1].querySelector('[aria-invalid=true]')?.focus();return;}}submitted=true;const url=`https://wa.me/${config.whatsapp}?text=${encodeURIComponent(message())}`;dialog.querySelector('#registration-reopen').href=url;window.open(url,'_blank','noopener,noreferrer');dialog.querySelector('.registration-form-content').hidden=true;dialog.querySelector('.registration-handoff').hidden=false;dialog.querySelector('#registration-handoff-title').focus({preventScroll:true});dialog.scrollTo({top:0,behavior:'instant'});});
  showStep(1,false);conditions();
  // A shareable fragment opens the same form without submitting any information.
  const openFromLink = () => {
    if (location.hash === '#registration') window.openRegistrationModal();
  };
  window.addEventListener('hashchange', openFromLink);
  // Wait for the language module and the remaining deferred scripts on first load.
  if (document.readyState === 'complete') openFromLink();
  else window.addEventListener('load', openFromLink, { once: true });
})();
