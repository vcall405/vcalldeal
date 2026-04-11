import React, { useState } from 'react';

const WHATSAPP_NUMBER = '17875797628';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

const PLANS = [
  {
    name: 'Starter',
    price: '$50',
    period: '/mes',
    color: 'border-blue-500',
    badge: '',
    points: '100 Reward Points/mes',
    features: [
      '17% descuento instantáneo en cruceros',
      'Acceso a hoteles y resorts',
      'Reward Points acumulables',
      'Sin contratos a largo plazo',
      'Garantía de 14 días',
    ],
  },
  {
    name: 'Classic',
    price: '$100',
    period: '/mes',
    color: 'border-amber-500',
    badge: 'Más Popular',
    points: '200 Reward Points/mes',
    features: [
      '17% descuento instantáneo en cruceros',
      'Acceso a hoteles y resorts',
      'Doble de Reward Points',
      'Reducción del precio hasta 50–100%',
      'Sin contratos a largo plazo',
      'Garantía de 14 días',
    ],
  },
  {
    name: 'Premium',
    price: '$250',
    period: '/mes',
    color: 'border-purple-500',
    badge: 'Mayor beneficio',
    points: '500 Reward Points/mes',
    features: [
      '17% descuento instantáneo en cruceros',
      'Acumulación acelerada de puntos',
      'Acceso a viajes de lujo y alta gama',
      'Reducción del precio hasta 50–100%',
      'Sin contratos a largo plazo',
      'Garantía de 14 días',
    ],
  },
];

const RANKS = [
  { title: 'Marketing Director', tlb: '$300', req: '$3,000 vol.', color: 'from-blue-600 to-blue-800', icon: '🎯' },
  { title: 'Senior Director', tlb: '$1,000', req: '$10,000 vol.', color: 'from-indigo-600 to-indigo-800', icon: '📈' },
  { title: 'Regional Director', tlb: '$2,500', req: '$25,000 vol.', color: 'from-violet-600 to-violet-800', icon: '🌎' },
  { title: 'National Director', tlb: '$5,000', req: '$50,000 vol.', color: 'from-purple-600 to-purple-800', icon: '🏆' },
  { title: 'Executive Director', tlb: '$25,000', req: '$250,000 vol.', color: 'from-rose-600 to-rose-800', icon: '💼' },
  { title: 'Royal Ambassador', tlb: '$255,000', req: 'Nivel máximo', color: 'from-amber-500 to-amber-700', icon: '👑' },
];

const STATS = [
  { value: '108,000+', label: 'Pasajeros en 2024', color: 'text-amber-400' },
  { value: '$33M+', label: 'Ahorrado por miembros en 2024', color: 'text-green-400' },
  { value: '190+', label: 'Países disponibles', color: 'text-blue-400' },
  { value: '9+', label: 'Años en el mercado', color: 'text-purple-400' },
];

export default function IsidraApp() {
  const [lang, setLang] = useState('es');
  const [form, setForm] = useState({ name: '', phone: '', email: '', interest: 'member' });
  const [sent, setSent] = useState(false);

  const t = {
    es: {
      navBenefits: 'Membresía',
      navPlans: 'Planes',
      navBusiness: 'Negocio',
      navAbout: 'Sobre Isidra',
      navContact: 'Contacto',
      navCta: 'Quiero saber más',
      heroBadge: 'Club de Viajes #1 en el Mundo · inGroup International',
      heroTitle: '¡Viaja más,',
      heroTitleAccent: 'paga menos',
      heroTitle2: 'y gana mientras viajas!',
      heroSub: 'Únete al club de viajes que te da acceso exclusivo a cruceros, hoteles y resorts con hasta el 50–100% de descuento — o construye un negocio desde casa con ingresos recurrentes.',
      heroCta1: 'Quiero ser Miembro',
      heroCta2: '💬 Hablar con Isidra',
      plansBadge: 'Membresía 3.0',
      plansTitle: 'Escoge tu plan y empieza a viajar',
      plansSub: 'Sin contratos a largo plazo. Cancela cuando quieras. Garantía de 14 días.',
      plansPoints: 'Reward Points:',
      plansJoin: 'Quiero este plan',
      plansActivation: '* Cuota de activación única de $100 USD al inscribirse.',
      benefitsBadge: 'Beneficios del Club',
      benefitsTitle: '¿Por qué miles de familias eligen inCruises?',
      benefits: [
        { icon: '💰', title: '17% de descuento instantáneo', desc: 'Desde el primer día, ahorra en cruceros, hoteles y resorts sin esperar a acumular puntos.' },
        { icon: '🎯', title: 'Reward Points que se duplican', desc: 'Cada pago mensual te genera el doble en Reward Points para reducir el precio de tu viaje hasta un 100%.' },
        { icon: '🚢', title: 'Disney, MSC, Carnival y más', desc: 'Acceso exclusivo a las navieras más grandes del mundo con precios preferenciales del club.' },
        { icon: '🌍', title: '190+ países y miles de resorts', desc: 'No solo cruceros — hoteles, resorts y experiencias en todo el mundo con inStays.' },
      ],
      bizBadge: 'Oportunidad de Negocio',
      bizTitle: 'Gana mientras compartes lo que amas',
      bizSub: 'Como Partner de inCruises, construyes un negocio real con ingresos recurrentes cada mes — simplemente invitando a otras personas a disfrutar del club.',
      bizItems: [
        { icon: '💵', title: 'Ingreso Recurrente', desc: 'Gana mínimo $5 por cada $100 de producción recurrente de tu equipo, mes tras mes.' },
        { icon: '🏅', title: 'Team Leadership Bonus', desc: 'Bonos mensuales automáticos según tu rango, desde $300 hasta $255,000 al mes.' },
        { icon: '🚀', title: 'Negocio desde casa', desc: 'Sin inventario, sin local, sin jefes. Solo tú, tu teléfono y tu red de contactos.' },
        { icon: '✈️', title: 'Viaja mientras ganas', desc: 'Tu membresía te permite disfrutar el producto que promotes. Vive la experiencia de primera mano.' },
      ],
      ranksBadge: 'Rangos de Liderazgo',
      ranksTitle: 'Tu crecimiento, recompensado',
      ranksSub: 'El Team Leadership Bonus (TLB) se paga automáticamente el día 10 de cada mes.',
      ranksTlb: 'Bono mensual',
      ranksReq: 'Volumen requerido',
      ranksRecurring: '+ Ingreso recurrente en todos los rangos según el volumen de tu equipo',
      partnerJoin: 'Activación como Partner: $395 (cuota única)',
      aboutBadge: 'Tu Representante',
      aboutTitle: 'Isidra Cosme',
      aboutSub: 'Partner de inGroup International / inCruises',
      aboutP1: 'Soy Isidra Cosme, representante oficial de inCruises para la comunidad hispana en los Estados Unidos. Descubrí este club y cambió la forma en que mi familia viaja — y también la forma en que generamos ingresos.',
      aboutP2: 'Hoy ayudo a familias como la tuya a acceder a viajes de calidad a precios accesibles, y a aquellos que buscan libertad financiera a construir su propio negocio con inCruises.',
      aboutCta: 'Conversemos por WhatsApp',
      contactBadge: 'Da el primer paso',
      contactTitle: '¿Listo para viajar más y pagar menos?',
      contactSub: 'Déjame tus datos y te explico todo personalmente — sin compromiso.',
      formName: 'Nombre completo',
      formPhone: 'Teléfono (WhatsApp)',
      formEmail: 'Correo electrónico',
      formInterest: 'Me interesa...',
      formMember: 'Ser Miembro del club de viajes',
      formPartner: 'Ser Partner y tener mi propio negocio',
      formBoth: 'Conocer ambas opciones',
      formSubmit: 'Enviar por WhatsApp →',
      formSentTitle: '¡Mensaje enviado!',
      formSentSub: 'Te responderé muy pronto. ¡Prepárate para viajar!',
      whatsappLabel: 'Escríbeme directo por',
      whatsappNum: 'WhatsApp +1 (787) 579-7628',
      footerSub: 'Representante oficial de inGroup International / inCruises',
      footerRights: '© 2025 Isidra Cosme · Todos los derechos reservados',
    },
    en: {
      navBenefits: 'Membership',
      navPlans: 'Plans',
      navBusiness: 'Business',
      navAbout: 'About Isidra',
      navContact: 'Contact',
      navCta: 'Learn More',
      heroBadge: 'World\'s #1 Travel Club · inGroup International',
      heroTitle: 'Travel more,',
      heroTitleAccent: 'pay less',
      heroTitle2: 'and earn while you travel!',
      heroSub: 'Join the travel club that gives you exclusive access to cruises, hotels and resorts with up to 50–100% off — or build a home-based business with recurring income.',
      heroCta1: 'I Want to Be a Member',
      heroCta2: '💬 Talk to Isidra',
      plansBadge: 'Membership 3.0',
      plansTitle: 'Choose your plan and start traveling',
      plansSub: 'No long-term contracts. Cancel anytime. 14-day money-back guarantee.',
      plansPoints: 'Reward Points:',
      plansJoin: 'I want this plan',
      plansActivation: '* One-time $100 USD activation fee upon enrollment.',
      benefitsBadge: 'Club Benefits',
      benefitsTitle: 'Why thousands of families choose inCruises',
      benefits: [
        { icon: '💰', title: 'Instant 17% Discount', desc: 'From day one, save on cruises, hotels and resorts — no need to wait to accumulate points.' },
        { icon: '🎯', title: 'Reward Points that Double', desc: 'Each monthly payment earns double Reward Points to reduce your trip price by up to 100%.' },
        { icon: '🚢', title: 'Disney, MSC, Carnival & more', desc: "Exclusive access to the world's largest cruise lines at club-preferred pricing." },
        { icon: '🌍', title: '190+ countries and thousands of resorts', desc: 'Not just cruises — hotels, resorts and experiences worldwide through inStays.' },
      ],
      bizBadge: 'Business Opportunity',
      bizTitle: 'Earn while sharing what you love',
      bizSub: 'As an inCruises Partner, you build a real business with monthly recurring income — simply by inviting others to enjoy the club.',
      bizItems: [
        { icon: '💵', title: 'Recurring Income', desc: 'Earn a minimum of $5 for every $100 of your team\'s recurring production, month after month.' },
        { icon: '🏅', title: 'Team Leadership Bonus', desc: 'Monthly automatic bonuses based on your rank, from $300 up to $255,000 per month.' },
        { icon: '🚀', title: 'Work from Home', desc: 'No inventory, no office, no boss. Just you, your phone and your network.' },
        { icon: '✈️', title: 'Travel while you earn', desc: 'Your membership lets you enjoy the product you promote. Experience it firsthand.' },
      ],
      ranksBadge: 'Leadership Ranks',
      ranksTitle: 'Your growth, rewarded',
      ranksSub: 'The Team Leadership Bonus (TLB) is paid automatically on the 10th of each month.',
      ranksTlb: 'Monthly bonus',
      ranksReq: 'Required volume',
      ranksRecurring: '+ Recurring income at all ranks based on your team\'s volume',
      partnerJoin: 'Partner activation: $395 (one-time fee)',
      aboutBadge: 'Your Representative',
      aboutTitle: 'Isidra Cosme',
      aboutSub: 'Partner at inGroup International / inCruises',
      aboutP1: 'I\'m Isidra Cosme, official inCruises representative for the Hispanic community in the United States. I discovered this club and it changed the way my family travels — and the way we generate income.',
      aboutP2: 'Today I help families like yours access quality travel at affordable prices, and those seeking financial freedom to build their own business with inCruises.',
      aboutCta: 'Let\'s chat on WhatsApp',
      contactBadge: 'Take the first step',
      contactTitle: 'Ready to travel more and pay less?',
      contactSub: 'Leave your details and I\'ll explain everything personally — no commitment.',
      formName: 'Full name',
      formPhone: 'Phone (WhatsApp)',
      formEmail: 'Email address',
      formInterest: "I'm interested in...",
      formMember: 'Being a club Member',
      formPartner: 'Being a Partner and owning my business',
      formBoth: 'Learning about both options',
      formSubmit: 'Send via WhatsApp →',
      formSentTitle: 'Message sent!',
      formSentSub: "I'll get back to you very soon. Get ready to travel!",
      whatsappLabel: 'Message me directly on',
      whatsappNum: 'WhatsApp +1 (787) 579-7628',
      footerSub: 'Official Representative · inGroup International / inCruises',
      footerRights: '© 2025 Isidra Cosme · All rights reserved',
    },
  };

  const tx = t[lang];

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const interestMap = { member: tx.formMember, partner: tx.formPartner, both: tx.formBoth };
    const text = encodeURIComponent(
      `Hola Isidra! Soy ${form.name}. Tel: ${form.phone}. Email: ${form.email}. Interés: ${interestMap[form.interest]}`
    );
    window.open(`${WHATSAPP_URL}?text=${text}`, '_blank');
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">

      {/* ── HEADER ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-white/10 px-6 py-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="text-xl font-black tracking-tight text-white">Isidra Cosme</span>
          <span className="hidden sm:inline text-xs font-semibold bg-blue-600 text-white px-2 py-0.5 rounded-full uppercase tracking-wide">inCruises</span>
        </div>
        <nav className="hidden lg:flex items-center gap-5 text-sm text-gray-300">
          <a href="#membresia" className="hover:text-amber-400 transition-colors">{tx.navBenefits}</a>
          <a href="#planes" className="hover:text-amber-400 transition-colors">{tx.navPlans}</a>
          <a href="#negocio" className="hover:text-amber-400 transition-colors">{tx.navBusiness}</a>
          <a href="#isidra" className="hover:text-amber-400 transition-colors">{tx.navAbout}</a>
          <a href="#contacto" className="hover:text-amber-400 transition-colors">{tx.navContact}</a>
        </nav>
        <div className="flex items-center gap-3 flex-shrink-0">
          {/* Language toggle */}
          <button
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            className="flex items-center gap-1.5 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-sm font-semibold px-3 py-1.5 rounded-lg transition-colors"
            aria-label="Cambiar idioma"
          >
            <span>{lang === 'es' ? '🇺🇸' : '🇵🇷'}</span>
            <span>{lang === 'es' ? 'EN' : 'ES'}</span>
          </button>
          <a
            href="#contacto"
            className="bg-amber-500 hover:bg-amber-400 text-gray-950 font-bold text-sm px-4 py-2 rounded-lg transition-colors"
          >
            {tx.navCta}
          </a>
        </div>
      </header>

      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-center justify-center text-center pt-20"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gray-950 bg-opacity-75" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-24">
          <div className="inline-flex items-center gap-2 bg-blue-900 bg-opacity-60 border border-blue-700 text-blue-200 text-xs font-semibold px-4 py-2 rounded-full mb-6">
            🚢 {tx.heroBadge}
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            {tx.heroTitle}{' '}
            <span className="text-amber-400">{tx.heroTitleAccent}</span>
            <br />{tx.heroTitle2}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            {tx.heroSub}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#planes"
              className="bg-amber-500 hover:bg-amber-400 text-gray-950 font-black text-lg px-8 py-4 rounded-xl transition-colors shadow-lg shadow-amber-500/25"
            >
              {tx.heroCta1}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-500 text-white font-bold text-lg px-8 py-4 rounded-xl transition-colors"
            >
              {tx.heroCta2}
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-gray-700 pt-10">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className={`text-3xl font-black ${s.color}`}>{s.value}</p>
                <p className="text-xs text-gray-400 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MEMBERSHIP BENEFITS ── */}
      <section
        id="membresia"
        className="relative py-20 px-6"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gray-950/85" />
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-blue-400 text-sm font-bold uppercase tracking-widest">{tx.benefitsBadge}</span>
            <h2 className="text-3xl md:text-4xl font-black mt-2">{tx.benefitsTitle}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {tx.benefits.map((b) => (
              <div key={b.title} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex gap-4 hover:bg-white/10 hover:border-amber-400/50 transition-all">
                <span className="text-4xl">{b.icon}</span>
                <div>
                  <h3 className="font-bold text-lg text-white mb-1">{b.title}</h3>
                  <p className="text-gray-300 text-sm">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 flex flex-wrap gap-3 items-center justify-center">
            <span className="text-gray-400 text-xs font-semibold uppercase tracking-wide">{lang === 'es' ? 'Alianzas oficiales:' : 'Official partners:'}</span>
            <span className="bg-blue-500/20 border border-blue-400/30 text-blue-200 font-bold px-4 py-2 rounded-lg text-sm backdrop-blur-sm">🏰 Disney Cruises</span>
            <span className="bg-purple-500/20 border border-purple-400/30 text-purple-200 font-bold px-4 py-2 rounded-lg text-sm backdrop-blur-sm">🚢 MSC Cruises</span>
            <span className="bg-red-500/20 border border-red-400/30 text-red-200 font-bold px-4 py-2 rounded-lg text-sm backdrop-blur-sm">⚓ Carnival</span>
          </div>
        </div>
      </section>

      {/* ── PLANS ── */}
      <section
        id="planes"
        className="relative py-20 px-6"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gray-950/88" />
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-amber-400 text-sm font-bold uppercase tracking-widest">{tx.plansBadge}</span>
            <h2 className="text-3xl md:text-4xl font-black mt-2">{tx.plansTitle}</h2>
            <p className="text-gray-300 mt-3">{tx.plansSub}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {PLANS.map((plan) => (
              <div key={plan.name} className={`relative bg-white/8 backdrop-blur-md border-2 ${plan.color} rounded-2xl p-6 flex flex-col`}>
                {plan.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-gray-950 text-xs font-black px-4 py-1 rounded-full uppercase tracking-wide">
                    {plan.badge}
                  </span>
                )}
                <p className="text-lg font-black text-white mb-1">{plan.name}</p>
                <div className="flex items-end gap-1 mb-1">
                  <span className="text-4xl font-black text-white">{plan.price}</span>
                  <span className="text-gray-400 text-sm mb-1">{plan.period}</span>
                </div>
                <p className="text-xs text-amber-400 font-semibold mb-4">{tx.plansPoints} {plan.points}</p>
                <ul className="space-y-2 mb-6 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-gray-300 text-sm">
                      <span className="text-green-400 mt-0.5">✓</span>{f}
                    </li>
                  ))}
                </ul>
                <a
                  href={`${WHATSAPP_URL}?text=${encodeURIComponent(`Hola Isidra! Quiero saber más sobre el plan ${plan.name} de inCruises.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-amber-500 hover:bg-amber-400 text-gray-950 font-black py-3 rounded-xl text-center transition-colors text-sm"
                >
                  {tx.plansJoin}
                </a>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-xs mt-4">{tx.plansActivation}</p>
        </div>
      </section>

      {/* ── BUSINESS OPPORTUNITY ── */}
      <section
        id="negocio"
        className="relative py-20 px-6"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1513407030348-c983a97b98d8?auto=format&fit=crop&w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gray-950/85" />
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-green-400 text-sm font-bold uppercase tracking-widest">{tx.bizBadge}</span>
            <h2 className="text-3xl md:text-4xl font-black mt-2">{tx.bizTitle}</h2>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">{tx.bizSub}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-14">
            {tx.bizItems.map((b) => (
              <div key={b.title} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex gap-4 hover:bg-white/10 hover:border-green-400/50 transition-all">
                <span className="text-4xl">{b.icon}</span>
                <div>
                  <h3 className="font-bold text-lg text-white mb-1">{b.title}</h3>
                  <p className="text-gray-400 text-sm">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Ranks */}
          <div id="rangos">
            <div className="text-center mb-10">
              <span className="text-amber-400 text-sm font-bold uppercase tracking-widest">{tx.ranksBadge}</span>
              <h3 className="text-2xl md:text-3xl font-black mt-2">{tx.ranksTitle}</h3>
              <p className="text-gray-400 mt-2 text-sm">{tx.ranksSub}</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {RANKS.map((rank) => (
                <div key={rank.title} className={`bg-gradient-to-b ${rank.color} bg-opacity-80 backdrop-blur-sm border border-white/20 rounded-2xl p-5 text-center`}>
                  <span className="text-3xl">{rank.icon}</span>
                  <p className="font-black text-sm mt-2 leading-tight">{rank.title}</p>
                  <p className="text-xs opacity-75 mt-1">{tx.ranksTlb}</p>
                  <p className="text-2xl font-black mt-1">{rank.tlb}</p>
                  <p className="text-xs opacity-60 mt-1">{rank.req}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-500 text-xs mt-4">{tx.ranksRecurring}</p>
            <p className="text-center text-amber-400 text-sm font-semibold mt-2">{tx.partnerJoin}</p>
          </div>
        </div>
      </section>

      {/* ── ABOUT ISIDRA ── */}
      <section
        id="isidra"
        className="relative py-20 px-6"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1502301103665-0b95cc738daf?auto=format&fit=crop&w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gray-950/80" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="bg-white/8 backdrop-blur-md border border-white/15 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center">
            <div className="flex-shrink-0">
              <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-600 to-amber-500 flex items-center justify-center text-7xl shadow-2xl">
                👩
              </div>
            </div>
            <div>
              <span className="text-amber-400 text-sm font-bold uppercase tracking-widest">{tx.aboutBadge}</span>
              <h2 className="text-3xl font-black mt-2 mb-1">{tx.aboutTitle}</h2>
              <p className="text-blue-400 text-sm font-semibold mb-4">{tx.aboutSub}</p>
              <p className="text-gray-300 leading-relaxed mb-4">{tx.aboutP1}</p>
              <p className="text-gray-300 leading-relaxed mb-6">{tx.aboutP2}</p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-6 py-3 rounded-xl transition-colors"
              >
                💬 {tx.aboutCta}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section
        id="contacto"
        className="relative py-20 px-6"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gray-950/85" />
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-amber-400 text-sm font-bold uppercase tracking-widest">{tx.contactBadge}</span>
            <h2 className="text-3xl md:text-4xl font-black mt-2">{tx.contactTitle}</h2>
            <p className="text-gray-300 mt-4 max-w-xl mx-auto">{tx.contactSub}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white/8 backdrop-blur-md border border-white/15 rounded-2xl p-8">
              {sent ? (
                <div className="text-center py-10">
                  <span className="text-5xl">🎉</span>
                  <p className="text-xl font-bold mt-4 text-green-400">{tx.formSentTitle}</p>
                  <p className="text-gray-400 mt-2">{tx.formSentSub}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">{tx.formName}</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} required
                      className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">{tx.formPhone}</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} required
                      placeholder="+1 (000) 000-0000"
                      className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">{tx.formEmail}</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required
                      className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">{tx.formInterest}</label>
                    <select name="interest" value={form.interest} onChange={handleChange}
                      className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors">
                      <option value="member">{tx.formMember}</option>
                      <option value="partner">{tx.formPartner}</option>
                      <option value="both">{tx.formBoth}</option>
                    </select>
                  </div>
                  <button type="submit"
                    className="w-full bg-amber-500 hover:bg-amber-400 text-gray-950 font-black py-4 rounded-xl text-lg transition-colors shadow-lg shadow-amber-500/20">
                    {tx.formSubmit}
                  </button>
                </form>
              )}
            </div>

            <div className="flex flex-col gap-5">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-500 text-white font-black text-xl px-8 py-6 rounded-2xl flex items-center gap-3 transition-colors shadow-lg shadow-green-600/20">
                <span className="text-3xl">💬</span>
                <div>
                  <p className="text-sm font-normal opacity-80">{tx.whatsappLabel}</p>
                  <p>{tx.whatsappNum}</p>
                </div>
              </a>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 space-y-3 text-sm text-gray-300">
                <p>🚢 {lang === 'es' ? 'Miembro Starter desde $50/mes + $100 activación' : 'Starter Membership from $50/mo + $100 activation'}</p>
                <p>💼 {lang === 'es' ? 'Partner desde $395 (activación única)' : 'Partner from $395 (one-time activation)'}</p>
                <p>✅ {lang === 'es' ? 'Garantía de devolución de 14 días' : '14-day money-back guarantee'}</p>
                <p>🌍 {lang === 'es' ? 'Disponible en 190+ países' : 'Available in 190+ countries'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-gray-950/95 border-t border-white/10 backdrop-blur-sm py-10 px-6 text-center">
        <p className="text-xl font-black text-white mb-1">Isidra Cosme</p>
        <p className="text-blue-400 text-sm font-semibold mb-3">{tx.footerSub}</p>
        <p className="text-gray-500 text-sm">📞 +1 (787) 579-7628</p>
        <p className="text-gray-600 text-xs mt-4">{tx.footerRights}</p>
      </footer>

    </div>
  );
}
