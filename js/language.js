(() => {
  'use strict';
  const fr = {
    'انتقل إلى المحتوى': 'Aller au contenu', 'استشارة': 'Consultation', 'أولية مجانية': 'initiale offerte',
    'من نحن': 'À propos', 'خدماتنا': 'Services', 'الباقات': 'Offres', 'كيف نبدأ؟': 'Les étapes',
    'أسئلة شائعة': 'FAQ', 'تواصل معنا': 'Contactez-nous',
    'مستقبلك يستحق': 'Votre avenir mérite', 'قراراً مدروساً': 'un choix éclairé',
    'مواكبة متكاملة لاختيار المسار الدراسي والتسجيل في المدارس والمعاهد العليا': 'Un accompagnement pour choisir votre voie et préparer vos inscriptions dans le supérieur.',
    'احجز استشارتك المجانية الآن': 'Réservez votre consultation', 'اكتشف خدماتنا': 'Découvrez nos services',
    'من نكون؟ ما هي مهمتنا؟': 'Qui sommes-nous ?',
    'هي خدمة متكاملة موجهة لتلاميذ البكالوريا، نساعدك على اختيار المسار الدراسي الأنسب لقدراتك وميولاتك، ثم نرافقك في عملية التسجيل والترشيح بطريقة احترافية ودقيقة.': 'accompagne les bacheliers dans le choix d’un parcours adapté à leurs aptitudes et centres d’intérêt, puis dans la préparation de leurs candidatures.',
    'مواكبة فردية': 'Suivi individuel', 'مسار يناسب قدراتك وميولاتك': 'Un parcours adapté à votre profil',
    'آفاق دراسية': 'Vos possibilités', 'اكتشف المدارس والتخصصات': 'Découvrez les écoles et les filières',
    'اختيار واعٍ': 'Choix éclairé', 'خطوات واضحة نحو مستقبلك': 'Avancez avec un plan clair',
    'لماذا تحتاج إلى التوجيه الدراسي؟': 'Pourquoi se faire accompagner ?',
    'باش ما تضيعش فرصك وتختار المسار المناسب بثقة': 'Choisissez votre voie avec confiance, sans manquer les opportunités.',
    'تجنب': 'Éviter les', 'أخطاء': 'erreurs', 'التسجيل': 'd’inscription',
    'اختيار التخصص': 'Choisir une filière', 'المناسب لقدراتك': 'adaptée à vos aptitudes', 'واهتماماتك': 'et à vos intérêts',
    'اختيار': 'Choisir', 'المؤسسة': 'l’établissement', 'التعليمية الأنسب': 'qui vous correspond',
    'التعرف على': 'Découvrir les', 'فرص الدراسة': 'possibilités d’études', 'والمنح': 'et les bourses',
    'كيف سنساعدك في': 'Comment vous aide', '؟': ' ?',
    'اختبار الميولات': 'Test d’orientation', 'جلسة توجيه فردية': 'Entretien individuel',
    'إعداد ملفات الترشيح': 'Préparation des candidatures', 'تنبيهات التسجيل والنتائج': 'Alertes : inscriptions et résultats',
    'خطة التحضير للمباريات': 'Préparation aux concours', 'ما الذي ستحصل عليه مع': 'Que vous apporte',
    'رؤية واضحة لمستقبلك الدراسي والمهني': 'Une vision claire de votre avenir',
    'خطة تعليمية تناسب أهدافك': 'Un parcours adapté à vos objectifs',
    'توفير الوقت وتجنب القرارات الخاطئة': 'Du temps gagné et des choix réfléchis',
    'زيادة فرص النجاح والقبول': 'De meilleures chances de réussite',
    'مرافقة من خبراء متخصصين': 'Le soutien de spécialistes',
    'ما الذي يميزنا عن الجميع؟': 'Pourquoi Smart Tawjih ?',
    'أخصائيون في': 'Des spécialistes de', 'التوجيه': 'l’orientation', 'التربوي': 'scolaire',
    'نهج علمي': 'Une approche', 'ومنهجي': 'méthodique', 'دعم مستمر': 'Un soutien continu',
    'على مدار': 'tout au long de', 'الموسم': 'la saison', 'وضوح في': 'Des informations claires sur',
    'الخدمات': 'les services', 'والتكاليف': 'et les tarifs',
    'اختر المواكبة المناسبة': 'Choisissez votre accompagnement', 'دفعة واحدة': 'Paiement unique',
    'اختبار وجلسة فردية واختيار 5 مسارات.': 'Un test, un entretien individuel et une sélection de 5 filières.',
    'استفسر عن الباقة': 'En savoir plus',
    'الباقة الأولى، مع تجهيز الملفات والتسجيل في 10 مدارس.': 'L’offre précédente, avec préparation des dossiers et inscription dans 10 écoles.',
    'الباقة السابقة، مع خطط بديلة وتتبع النتائج.': 'L’offre précédente, avec des parcours alternatifs et le suivi des résultats.',
    'أربع خطوات بسيطة نحو قبولك': 'Quatre étapes vers votre admission',
    'اتصل بنا أو راسلنا عبر واتساب لحجز جلستك الأولى وتحديد الباقة المناسبة لاحتياجاتك.': 'Contactez-nous par téléphone ou WhatsApp pour réserver votre première séance et choisir votre offre.',
    'اختبار': 'Test', 'الميولات': 'd’orientation',
    'نجري معك اختباراً سيكولوجياً متخصصاً لتحديد قدراتك وميولاتك الأكاديمية والمهنية بدقة علمية.': 'Un test spécialisé permet d’identifier vos aptitudes et vos intérêts scolaires et professionnels.',
    'والإعداد': 'et préparation',
    'نتولى إعداد ملفاتك والتسجيل في أفضل المؤسسات المناسبة لميولاتك ومعدلاتك الدراسية.': 'Nous préparons vos dossiers et vos inscriptions dans les établissements adaptés à votre profil et à vos notes.',
    'المواكبة': 'Accompagnement', 'حتى القبول': 'jusqu’à l’admission',
    'نرافقك في كل خطوة حتى إعلان النتائج النهائية ونساعدك على اتخاذ أفضل قرار يناسب مستقبلك.': 'Nous vous suivons jusqu’aux résultats définitifs pour vous aider à choisir votre prochaine étape.',
    'ماذا يقول طلابنا عنا؟': 'Ils nous font confiance',
    'معاينة تصميمية — الصور والتقييمات توضيحية، وليست شهادات حقيقية': 'Aperçu de conception : images et notes illustratives.',
    'كنت حائراً تماماً بين عدة تخصصات ولم أكن أعرف من أين أبدأ. بفضل اختبار الميولات وجلسة التوجيه مع Smart Tawjih، أصبح أمامي خارطة طريق واضحة. اليوم أنا مسجل في ENSA الرباط وسعيد جداً بهذا القرار.': 'J’hésitais entre plusieurs filières sans savoir par où commencer. Le test et l’entretien avec Smart Tawjih m’ont donné une feuille de route claire. Aujourd’hui, je suis inscrit à l’ENSA de Rabat et très heureux de ce choix.',
    'اختبار الميولات غير نظرتي تماماً لمستقبلي المهني. الجلسة الفردية مع المستشار كانت نقطة تحول حقيقية — ساعدني على اكتشاف مسار لم أكن أفكر فيه أصلاً، وها أنا اليوم في تخصصي الحقيقي.': 'Le test a changé ma vision de mon avenir professionnel. L’entretien individuel m’a aidée à découvrir une voie à laquelle je n’avais pas pensé. J’ai trouvé la filière qui me correspond.',
    'اخترت باقة ADMISSION وكانت قراراً صائباً بامتياز. سجلوا لي في أكثر من 15 مؤسسة وتتبعوا كل الآجال بدقة متناهية. حصلت على قبولات متعددة ومن أكثر من مؤسسة رائدة — ما خسرت ولا فرصة!': 'J’ai choisi l’offre ADMISSION. L’équipe m’a inscrit dans plus de 15 établissements et a suivi les échéances avec précision. J’ai obtenu plusieurs admissions sans manquer d’opportunité !',
    'أيوب المنصوري': 'Ayoub El Mansouri', 'ريم بنعلي': 'Rim Benali', 'يوسف الإدريسي': 'Youssef El Idrissi',
    'أ': 'A', 'ر': 'R', 'ي': 'Y', 'مقبول في ENSA الرباط': 'Admis à l’ENSA Rabat',
    'مقبولة في ENCG كازا': 'Admise à l’ENCG Casablanca', 'مقبول في FST طنجة': 'Admis à la FST Tanger',
    'التحق بنا أنت أيضاً': 'Rejoignez-nous', 'حقق حلمك الآن': 'Construisez votre avenir',
    'ابدأ معنا خطوتك الأولى نحو مستقبلك بثقة': 'Faites le premier pas avec confiance.', 'سجل الآن': 'Inscrivez-vous',
    '© Smart Tawjih — التوجيه بخطوات واضحة نحو مستقبلك': '© Smart Tawjih — Votre avenir, étape par étape',
    'أسئلة كتهمك': 'Vos questions', 'هل الاستشارة الأولية مجانية؟': 'La première consultation est-elle gratuite ?',
    'يمكنك التواصل معنا لحجز الاستشارة الأولية المجانية والاستفسار عن مضمونها. نوضح لك تفاصيل خدمات المواكبة وتكاليفها قبل البدء.': 'Contactez-nous pour réserver votre première consultation gratuite. Les services et leurs tarifs vous sont expliqués avant de commencer.',
    'كيف يتم اختيار التخصص المناسب؟': 'Comment choisir la bonne filière ?',
    'ننطلق من ميولاتك وقدراتك وأهدافك الدراسية، ثم نناقش معك الخيارات المتاحة وشروط كل مسار لمساعدتك على اتخاذ قرار مدروس.': 'Nous étudions vos intérêts, aptitudes et objectifs, puis discutons des parcours et de leurs conditions d’accès.',
    'هل تساعدون في التسجيل والترشيح؟': 'Aidez-vous pour les candidatures ?',
    'المساعدة في التسجيل والترشيح ضمن خدماتنا. تواصل معنا لمعرفة نطاق المواكبة والوثائق المطلوبة حسب المؤسسة والمسار.': 'Oui. Contactez-nous pour connaître les démarches et documents nécessaires selon votre parcours et les établissements.',
    'متى يجب أن أبدأ إجراءات التسجيل؟': 'Quand préparer mes inscriptions ?',
    'تختلف المواعيد حسب المؤسسات والمباريات. من الأفضل التحضير مبكراً ومراجعة الإعلانات الرسمية؛ تواصل معنا لمناقشة وضعيتك والمواعيد التي تهمك.': 'Les dates varient selon les écoles et concours. Préparez-vous tôt et consultez les annonces officielles. Nous pouvons vous aider à repérer les échéances.',
    'استمارة طلب الاستشارة والتسجيل': 'Demande de consultation et d’inscription',
    '3 خطوات بسيطة باش نتعرفو على احتياجاتك ونساعدوك تختار المسار المناسب': 'Trois étapes pour comprendre vos besoins et vous accompagner.',
    'الخطوة 1 من 3': 'Étape 1 sur 3', 'الخطوة 2 من 3': 'Étape 2 sur 3', 'الخطوة 3 من 3': 'Étape 3 sur 3',
    'مرحباً بك! نبدأو بالتعارف': 'Bienvenue ! Faisons connaissance',
    'عمّر معلومات التواصل باش نقدروا نتواصلو معاك': 'Indiquez vos coordonnées pour être recontacté.',
    'شكون اللي كيعمر الاستمارة؟': 'Qui remplit ce formulaire ?', 'أنا التلميذ(ة)': 'Je suis l’élève', 'أنا ولي الأمر': 'Je suis le parent',
    'الاسم الكامل': 'Nom complet', 'اسم ولي الأمر': 'Nom du parent', 'رقم الهاتف (واتساب)': 'Téléphone (WhatsApp)',
    'المدينة': 'Ville', 'اختر من القائمة': 'Choisissez une option', 'اسم المدينة': 'Nom de la ville',
    'الدار البيضاء': 'Casablanca', 'الرباط': 'Rabat', 'سلا': 'Salé', 'القنيطرة': 'Kénitra', 'مراكش': 'Marrakech',
    'فاس': 'Fès', 'مكناس': 'Meknès', 'طنجة': 'Tanger', 'تطوان': 'Tétouan', 'أكادير': 'Agadir', 'وجدة': 'Oujda',
    'الجديدة': 'El Jadida', 'آسفي': 'Safi', 'بني ملال': 'Béni Mellal', 'الناظور': 'Nador', 'خريبكة': 'Khouribga',
    'المحمدية': 'Mohammedia', 'العيون': 'Laâyoune', 'الداخلة': 'Dakhla', 'أخرى': 'Autre',
    'متابعة ←': 'Continuer →', '→ رجوع': '← Retour', 'رجوع': 'Retour',
    'خلينا نتعرفو على مسارك الدراسي': 'Votre parcours scolaire',
    'هاد المعلومات غادي تعاون فريق التوجيه يفهم وضعيتك': 'Ces informations aideront notre équipe à vous orienter.',
    'اسم التلميذ(ة)': 'Nom de l’élève', 'المستوى الدراسي': 'Niveau scolaire', 'الجذع المشترك': 'Tronc commun',
    'الأولى باك': '1re année du bac', 'الثانية باك': '2e année du bac', 'حاصل(ة) على البكالوريا': 'Bachelier / Bachelière',
    'مستوى آخر': 'Autre niveau', 'الشعبة الدراسية': 'Filière scolaire',
    'علوم رياضية A': 'Sciences mathématiques A', 'علوم رياضية B': 'Sciences mathématiques B',
    'علوم فيزيائية PC': 'Sciences physiques (PC)', 'علوم الحياة والأرض SVT': 'Sciences de la vie et de la Terre (SVT)',
    'علوم زراعية': 'Sciences agronomiques', 'علوم وتكنولوجيات كهربائية STE': 'Sciences et technologies électriques (STE)',
    'علوم وتكنولوجيات ميكانيكية STM': 'Sciences et technologies mécaniques (STM)', 'علوم اقتصادية': 'Sciences économiques',
    'علوم التدبير المحاسباتي': 'Gestion comptable', 'آداب وعلوم إنسانية': 'Lettres et sciences humaines',
    'تعليم أصيل': 'Enseignement originel', 'بكالوريا دولية': 'Baccalauréat international',
    'نقطة الامتحان الجهوي (اختيارية)': 'Note de l’examen régional (facultative)',
    'نقطة الامتحان الوطني (اختيارية)': 'Note de l’examen national (facultative)', 'السنة الدراسية': 'Année scolaire',
    'شنو الخدمة اللي محتاج ليها؟': 'Comment pouvons-nous vous aider ?',
    'اختار الخدمات اللي باغي تستافد منها': 'Sélectionnez les services souhaités.', 'الخدمات المطلوبة': 'Services souhaités',
    'التوجيه واختيار التخصص المناسب': 'Orientation et choix de filière', 'التسجيل في المدارس والمعاهد العليا': 'Inscription dans les écoles et instituts',
    'المنح وفرص الدراسة': 'Bourses et possibilités d’études', 'المواكبة وتتبع ملف الترشيح والنتائج': 'Suivi des candidatures et résultats',
    'معلومات حول الدراسة بالخارج': 'Informations sur les études à l’étranger', 'ملاحظات إضافية (اختيارية)': 'Remarques (facultatives)',
    'أوافق على استخدام بياناتي الشخصية والدراسية لمعالجة طلب الاستشارة والتواصل معي.': 'J’accepte l’utilisation de mes coordonnées et informations scolaires pour traiter ma demande et me contacter.',
    'المعلومات كتبقى فهاد الاستمارة حتى تختار إرسالها عبر واتساب. ما كنخزنوهاش فالمتصفح وما كنرسلوهاش لأدوات الإحصائيات.': 'Vos informations restent dans ce formulaire jusqu’à l’envoi via WhatsApp. Elles ne sont pas stockées dans le navigateur ni transmises à des outils statistiques.',
    'إرسال الطلب عبر واتساب': 'Envoyer via WhatsApp',
    'تقدر تسد الاستمارة وترجع تكملها؛ المعلومات كتبقى غير فهاد الصفحة حتى تسدها أو تعاود تحميلها.': 'Vous pouvez fermer le formulaire et le reprendre. Les données restent uniquement sur cette page jusqu’à sa fermeture ou son rechargement.',
    'باقي غير خطوة أخيرة!': 'Encore une dernière étape !', 'تم تجهيز طلبك! كمل إرسال الرسالة في واتساب.': 'Votre demande est prête. Confirmez son envoi dans WhatsApp.',
    'وجدنا ليك المعلومات كاملة. تأكد من إرسال الرسالة في واتساب باش يتوصل فريق Smart Tawjih بطلبك.': 'Vérifiez et envoyez le message dans WhatsApp pour que notre équipe reçoive votre demande.',
    'فتح واتساب من جديد': 'Rouvrir WhatsApp', 'مراجعة المعلومات': 'Modifier mes informations', 'العودة إلى الصفحة الرئيسية': 'Retour à l’accueil',
    'كتب الاسم والنسب': 'Votre nom et prénom', 'كتب اسم مدينتك': 'Votre ville', 'الاسم الكامل للتلميذ(ة)': 'Nom complet de l’élève',
    'مثال: 15.50': 'Exemple : 15,50', 'مثال: 16.00': 'Exemple : 16,00', 'مثلاً: التخصص أو المدرسة اللي مهتم بها...': 'Par exemple : la filière ou l’école qui vous intéresse…',
    'كتب الاسم الكامل ديالك، على الأقل 3 حروف.': 'Indiquez votre nom complet (3 caractères minimum).',
    'دخل رقم مغربي صحيح كيبدا بـ 06 أو 07، أو +212.': 'Indiquez un numéro marocain valide : 06, 07 ou +212.',
    'اختار المدينة ديالك.': 'Choisissez votre ville.', 'كتب اسم المدينة ديالك.': 'Indiquez votre ville.',
    'كتب الاسم الكامل للتلميذ(ة).': 'Indiquez le nom complet de l’élève.', 'اختار المستوى الدراسي.': 'Choisissez un niveau scolaire.',
    'اختار الشعبة الدراسية.': 'Choisissez une filière.', 'دخل نقطة صحيحة بين 0 و20.': 'Indiquez une note entre 0 et 20.',
    'كتب السنة الدراسية.': 'Indiquez l’année scolaire.', 'اختار خدمة واحدة على الأقل.': 'Choisissez au moins un service.',
    'خاص الموافقة على استعمال المعلومات لمعالجة الطلب.': 'Votre accord est nécessaire pour traiter la demande.',
    'إغلاق الاستمارة': 'Fermer le formulaire', 'مراحل الاستمارة': 'Étapes du formulaire', 'القائمة الرئيسية': 'Menu principal',
    'تحدث معنا عبر واتساب': 'Demander une consultation', 'تواصل عبر واتساب': 'Nous contacter sur WhatsApp',
    'آراء الطلاب': 'Témoignages', '5 من 5': '5 sur 5', 'Smart Tawjih — الرئيسية': 'Smart Tawjih — Accueil',
    'طالب وطالبة أمام مشهد مغربي مع نخيل وصومعة، في خلفية تعليمية زخرفية': 'Deux étudiants devant un paysage marocain avec des palmiers et un minaret',
    'قبعة تخرج فوق كتب': 'Toque de diplômé sur des livres', 'طالبة مبتسمة تحمل ملفها الدراسي': 'Étudiante souriante avec son dossier',
    'حاسوب محمول وكتب في مساحة دراسية مضيئة': 'Ordinateur et livres dans un espace d’étude lumineux',
    'التنقل بين البطاقات': 'Navigation entre les témoignages', 'عرض البطاقة 1': 'Afficher le témoignage 1',
    'عرض البطاقة 2': 'Afficher le témoignage 2', 'عرض البطاقة 3': 'Afficher le témoignage 3',
    'معمار مغربي ونخيل': 'Architecture marocaine et palmiers'
  };
  const normalize = value => value.trim().replace(/\s+/g, ' ');
  let language = 'ar';
  const originals = new WeakMap();
  const attributes = new WeakMap();
  const translate = value => language === 'fr' ? (fr[normalize(value)] || value) : value;
  window.SmartI18n = { t: translate, get language() { return language; } };
  const observer = new MutationObserver(() => {
    if (language === 'fr') apply();
  });
  function apply() {
    observer.disconnect();
    // Captions may change; option/radio values remain canonical for conditions and validation.
    document.querySelectorAll('option:not([value])').forEach(option => option.value = option.textContent);
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      if (node.parentElement.closest('script, style, textarea, .language-switch')) continue;
      let entry = originals.get(node);
      if (!entry || node.nodeValue !== entry.applied) entry = { original: node.nodeValue };
      const key = normalize(entry.original);
      entry.applied = language === 'fr' && fr[key]
        ? entry.original.replace(entry.original.trim(), fr[key]) : entry.original;
      if (language === 'fr' && key === 'التسجيل' && node.parentElement.closest('#steps')) entry.applied = 'Inscription ';
      if (node.nodeValue !== entry.applied) node.nodeValue = entry.applied;
      originals.set(node, entry);
    }
    document.querySelectorAll('[placeholder], [aria-label], img[alt], [title]').forEach(element => {
      if (element.closest('.language-switch')) return;
      const entries = attributes.get(element) || {};
      for (const attribute of ['placeholder', 'aria-label', 'alt', 'title']) {
        if (!element.hasAttribute(attribute)) continue;
        let entry = entries[attribute];
        const current = element.getAttribute(attribute);
        if (!entry || current !== entry.applied) entry = { original: current };
        entry.applied = translate(entry.original);
        element.setAttribute(attribute, entry.applied); entries[attribute] = entry;
      }
      attributes.set(element, entries);
    });
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });
  }
  const flagMA = '<svg viewBox="0 0 30 20" aria-hidden="true"><path fill="#c1272d" d="M0 0h30v20H0z"/><path d="m15 4 3.5 10.5-9-6.5h11l-9 6.5z" fill="none" stroke="#006233" stroke-width="1.2"/></svg>';
  const flagFR = '<svg viewBox="0 0 30 20" aria-hidden="true"><path fill="#fff" d="M0 0h30v20H0z"/><path fill="#002395" d="M0 0h10v20H0z"/><path fill="#ed2939" d="M20 0h10v20H20z"/></svg>';
  const bar = document.createElement('div'); bar.className = 'language-bar';
  bar.innerHTML = `<div class="language-switch" role="group" aria-label="Langue / اللغة"><button type="button" data-lang="ar" lang="ar" aria-label="العربية">${flagMA}<span>العربية</span></button><button type="button" data-lang="fr" lang="fr" aria-label="Français">${flagFR}<span>Français</span></button></div>`;
  document.querySelector('.hero').prepend(bar);
  const metadata = [...document.querySelectorAll('meta[name="description"],meta[property="og:description"],meta[property="og:title"],meta[property="og:locale"]')]
    .map(element => ({ element, original: element.content }));
  function setLanguage(next) {
    language = next === 'fr' ? 'fr' : 'ar';
    document.documentElement.lang = language; document.documentElement.dir = language === 'fr' ? 'ltr' : 'rtl';
    bar.querySelectorAll('button').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lang === language)));
    document.title = language === 'fr' ? 'Smart Tawjih | Votre avenir mérite un choix éclairé' : 'Smart Tawjih | مستقبلك يستحق قراراً مدروساً';
    metadata.forEach(({ element, original }) => {
      element.content = language === 'ar' ? original : element.getAttribute('property') === 'og:locale' ? 'fr_MA'
        : element.getAttribute('property') === 'og:title' ? document.title
        : 'Orientation scolaire, choix de filière et accompagnement des candidatures au Maroc avec Smart Tawjih.';
    });
    document.querySelectorAll('[data-whatsapp]').forEach(link => {
      const message = language === 'fr' ? 'Bonjour, je souhaite une consultation Smart Tawjih et des informations sur vos services.' : window.SMART_TAWJIH.message;
      link.href = `https://wa.me/${window.SMART_TAWJIH.whatsapp}?text=${encodeURIComponent(message)}`;
    });
    try { localStorage.setItem('smart-tawjih-language', language); } catch { /* Language still works without persistence. */ }
    apply();
    document.dispatchEvent(new CustomEvent('languagechange', { detail: { language } }));
  }
  bar.addEventListener('click', event => { const button = event.target.closest('[data-lang]'); if (button) setLanguage(button.dataset.lang); });
  let saved = 'ar'; try { saved = localStorage.getItem('smart-tawjih-language') || 'ar'; } catch { /* Arabic default. */ }
  setLanguage(saved);
})();
