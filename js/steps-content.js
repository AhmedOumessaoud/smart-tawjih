// Four onboarding stages supplied by the owner, in their original RTL order.
(() => {
  const descriptions = [
    'اتصل بنا أو راسلنا عبر واتساب لحجز جلستك الأولى وتحديد الباقة المناسبة لاحتياجاتك.',
    'نجري معك اختباراً سيكولوجياً متخصصاً لتحديد قدراتك وميولاتك الأكاديمية والمهنية بدقة علمية.',
    'نتولى إعداد ملفاتك والتسجيل في أفضل المؤسسات المناسبة لميولاتك ومعدلاتك الدراسية.',
    'نرافقك في كل خطوة حتى إعلان النتائج النهائية ونساعدك على اتخاذ أفضل قرار يناسب مستقبلك.'
  ];
  document.querySelectorAll('#steps .step').forEach((card, index) => {
    const description = document.createElement('p');
    description.className = 'step-description';
    description.textContent = descriptions[index];
    card.append(description);
  });
})();
