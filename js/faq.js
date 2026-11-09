(() => {
  const items = [
    ['كيف أختار الباقة المناسبة لي؟', 'Comment choisir mon offre ?',
      'إذا كنت تحتاج إلى تحديد مسارك، فباقة Orientation مخصصة للتوجيه. الباقات الأخرى تضيف إعداد الملفات والتسجيل والتتبع بدرجات مختلفة. تواصل معنا لنحدد معك الأنسب حسب احتياجاتك.',
      'Orientation vous aide à définir votre parcours. Les autres offres ajoutent la préparation des dossiers, les candidatures et leur suivi. Contactez-nous pour choisir selon vos besoins.'],
    ['ما الوثائق التي أحتاج إليها للتسجيل؟', 'Quels documents faut-il préparer ?',
      'تختلف الوثائق حسب المؤسسة والمسار: قد تُطلب بطاقة التعريف، وبيانات النقط، وشهادة مدرسية أو شهادة البكالوريا. نوضح لك اللائحة الخاصة بكل ترشيح وفق الإعلان الرسمي.',
      'Les documents dépendent de chaque établissement : pièce d’identité, relevés de notes, certificat de scolarité ou baccalauréat peuvent être demandés. Nous précisons la liste selon l’annonce officielle.'],
    ['هل يمكنني الاستفادة من المواكبة عن بُعد؟', 'Puis-je être accompagné à distance ?',
      'يمكنك التواصل معنا عبر واتساب لشرح وضعيتك وتتبع طلبك. نتفق معك على طريقة إجراء جلسة التوجيه وتبادل الوثائق قبل بدء المواكبة.',
      'Vous pouvez nous contacter sur WhatsApp pour présenter votre situation et suivre votre demande. Les modalités de l’entretien et de l’échange des documents sont précisées avant de commencer.'],
    ['هل تضمنون القبول في مؤسسة معينة؟', 'L’admission dans une école est-elle garantie ?',
      'لا يمكن ضمان القبول؛ فالقرار يعود إلى المؤسسة ويعتمد على شروط الولوج، والنقط، والمباريات والمقاعد المتاحة. نساعدك على اختيار الترشيحات المناسبة وإعداد ملفاتك وتتبع المواعيد.',
      'Non. La décision appartient à l’établissement et dépend des conditions d’accès, des notes, des concours et des places disponibles. Nous vous aidons à préparer des candidatures adaptées et à suivre les échéances.'],
    ['هل تشمل الباقة رسوم المؤسسات والمباريات؟', 'Les frais des établissements et concours sont-ils inclus ?',
      'قبل اختيار الباقة، اطلب توضيح ما يشمله ثمن الخدمة وأي رسوم قد تطلبها المؤسسات أو المباريات. لا تفترض أن هذه الرسوم مشمولة دون تأكيد مسبق.',
      'Avant de choisir, demandez ce que couvre le tarif et quels frais peuvent être demandés par les établissements ou concours. Leur inclusion doit être confirmée au préalable.'],
    ['كيف أرسل طلب الاستشارة؟', 'Comment envoyer ma demande de consultation ?',
      'اضغط على زر حجز الاستشارة، وعمّر المراحل الثلاث. عند فتح واتساب، راجع الرسالة واضغط على إرسال حتى يتوصل الفريق بطلبك.',
      'Cliquez sur le bouton de consultation et complétez les trois étapes. Dans WhatsApp, vérifiez le message puis appuyez sur Envoyer pour transmettre votre demande.']
  ];
  const container = document.querySelector('.faq-content');
  const entries = items.map(() => {
    const details = document.createElement('details'), summary = document.createElement('summary'), answer = document.createElement('p');
    details.append(summary, answer); container.append(details); return { summary, answer };
  });
  function render() {
    const french = document.documentElement.lang === 'fr';
    entries.forEach(({ summary, answer }, i) => {
      summary.textContent = items[i][french ? 1 : 0]; answer.textContent = items[i][french ? 3 : 2];
    });
  }
  document.addEventListener('languagechange', render); render();
})();
