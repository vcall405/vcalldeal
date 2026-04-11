import React, { useState } from 'react';

const WHATSAPP_NUMBER = '17875797628';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

const RANKS = [
  { title: 'Marketing Director', bonus: '$20', color: 'from-blue-500 to-blue-700', icon: '🎯' },
  { title: 'Senior Director', bonus: '$50', color: 'from-indigo-500 to-indigo-700', icon: '📈' },
  { title: 'Executive Director', bonus: '$75', color: 'from-violet-500 to-violet-700', icon: '💼' },
  { title: 'Vice President', bonus: '$100', color: 'from-purple-500 to-purple-700', icon: '🏆' },
  { title: 'Royal Ambassador', bonus: '$150', color: 'from-amber-500 to-amber-700', icon: '👑' },
];

const BENEFITS = [
  {
    icon: '✈️',
    title: 'Acceso a 190+ Países',
    desc: 'Tu red de clientes viaja al mundo entero con precios preferenciales del club.',
  },
  {
    icon: '💰',
    title: 'Ahorro del 25% para Miembros',
    desc: 'Cada miembro que activas ahorra un 25% en viajes, cruceros y experiencias.',
  },
  {
    icon: '🚢',
    title: 'Alianzas Disney, MSC y Carnival',
    desc: 'Acceso exclusivo a las navieras más grandes del mundo para tus prospectos.',
  },
  {
    icon: '🔄',
    title: 'Ingresos Recurrentes',
    desc: 'Comisiones mes a mes mientras tus miembros mantengan su membresía activa.',
  },
];

const STEPS = [
  {
    num: '01',
    title: 'Captura automática',
    desc: 'Isidra capta el prospecto desde tu link, formulario o anuncio y lo registra al instante.',
  },
  {
    num: '02',
    title: 'Seguimiento 24/7',
    desc: 'El agente de IA responde dudas, explica el plan de compensación y califica al prospecto sin que tú intervengas.',
  },
  {
    num: '03',
    title: 'Conversión guiada',
    desc: 'Cuando el prospecto está listo, Isidra lo conecta contigo para el cierre. Tú solo cierras.',
  },
  {
    num: '04',
    title: 'Escalamiento de rango',
    desc: 'El sistema monitorea tu volumen de equipo y te avisa cuándo estás cerca de subir de rango.',
  },
];

export default function IsidraApp() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hola Isidra! Me llamo ${form.name}. Mi teléfono es ${form.phone}. Email: ${form.email}. Mensaje: ${form.message}`
    );
    window.open(`${WHATSAPP_URL}?text=${text}`, '_blank');
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">

      {/* ── HEADER ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950 bg-opacity-95 border-b border-gray-800 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-black tracking-tight text-white">ISIDRA</span>
          <span className="text-xs font-semibold bg-amber-500 text-gray-950 px-2 py-0.5 rounded-full uppercase tracking-wide">AI</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
          <a href="#beneficios" className="hover:text-amber-400 transition-colors">Beneficios</a>
          <a href="#como-funciona" className="hover:text-amber-400 transition-colors">Cómo Funciona</a>
          <a href="#rangos" className="hover:text-amber-400 transition-colors">Rangos</a>
          <a href="#tecnologia" className="hover:text-amber-400 transition-colors">Tecnología</a>
          <a href="#miguel" className="hover:text-amber-400 transition-colors">Sobre Miguel</a>
        </nav>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-amber-500 hover:bg-amber-400 text-gray-950 font-bold text-sm px-4 py-2 rounded-lg transition-colors"
        >
          Comenzar ahora
        </a>
      </header>

      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-center justify-center text-center pt-20"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gray-950 bg-opacity-80" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">
          <div className="inline-flex items-center gap-2 bg-gray-800 border border-gray-700 text-gray-300 text-xs font-medium px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Powered by Google Cloud &amp; n8n Automation
          </div>
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
            Escala tu Negocio de{' '}
            <span className="text-amber-400">inCruises</span> con{' '}
            <span className="text-blue-400">Automatización</span> Inteligente
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Convierte prospectos en Miembros y Partners{' '}
            <span className="text-white font-bold">24/7</span> con agentes de IA integrados en tu WhatsApp — sin responder cada mensaje manualmente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contacto"
              className="bg-amber-500 hover:bg-amber-400 text-gray-950 font-black text-lg px-8 py-4 rounded-xl transition-colors shadow-lg shadow-amber-500/20"
            >
              Automatizar mi Negocio
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-500 text-white font-bold text-lg px-8 py-4 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <span>💬</span> WhatsApp Ahora
            </a>
          </div>
          {/* Stats bar */}
          <div className="mt-16 grid grid-cols-3 gap-6 border-t border-gray-700 pt-10">
            <div>
              <p className="text-3xl font-black text-amber-400">190+</p>
              <p className="text-sm text-gray-400 mt-1">Países disponibles</p>
            </div>
            <div>
              <p className="text-3xl font-black text-blue-400">24/7</p>
              <p className="text-sm text-gray-400 mt-1">Seguimiento automático</p>
            </div>
            <div>
              <p className="text-3xl font-black text-green-400">25%</p>
              <p className="text-sm text-gray-400 mt-1">Ahorro para miembros</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PAIN POINTS ── */}
      <section className="bg-gray-900 py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            ¿Cuánto tiempo pierdes{' '}
            <span className="text-red-400">explicando lo mismo</span> cada día?
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            La mayoría de los Partners de inCruises nunca escalan porque quedan atrapados en conversaciones repetitivas. Isidra resuelve eso.
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-left">
            {[
              '❌  Responder las mismas preguntas sobre membresías una y otra vez',
              '❌  Explicar el plan de compensación sin cerrar la venta',
              '❌  Perder prospectos por no hacer seguimiento a tiempo',
              '❌  No tener tiempo para crecer tu equipo y subir de rango',
            ].map((item) => (
              <div key={item} className="bg-gray-800 border border-red-900 rounded-xl p-4 text-gray-300 text-sm">
                {item}
              </div>
            ))}
          </div>
          <div className="mt-10 bg-amber-500 bg-opacity-10 border border-amber-500 rounded-2xl p-6">
            <p className="text-amber-400 font-bold text-xl">
              Isidra hace todo eso por ti — automáticamente.
            </p>
          </div>
        </div>
      </section>

      {/* ── CLUB BENEFITS ── */}
      <section id="beneficios" className="bg-gray-950 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-amber-400 text-sm font-bold uppercase tracking-widest">inGroup International / inCruises</span>
            <h2 className="text-3xl md:text-4xl font-black mt-2">
              Un producto que se vende solo — si tienes las herramientas correctas
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {BENEFITS.map((b) => (
              <div key={b.title} className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex gap-4 hover:border-amber-500 transition-colors">
                <span className="text-4xl">{b.icon}</span>
                <div>
                  <h3 className="font-bold text-lg text-white mb-1">{b.title}</h3>
                  <p className="text-gray-400 text-sm">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 bg-gray-900 border border-gray-800 rounded-2xl p-6 flex flex-wrap gap-6 items-center justify-center">
            <span className="text-gray-400 text-sm font-semibold uppercase tracking-wide">Alianzas oficiales:</span>
            <span className="bg-blue-900 text-blue-300 font-bold px-4 py-2 rounded-lg text-sm">🏰 Disney Cruises</span>
            <span className="bg-purple-900 text-purple-300 font-bold px-4 py-2 rounded-lg text-sm">🚢 MSC Cruises</span>
            <span className="bg-red-900 text-red-300 font-bold px-4 py-2 rounded-lg text-sm">⚓ Carnival</span>
            <span className="bg-gray-800 text-gray-300 font-bold px-4 py-2 rounded-lg text-sm">🌐 inGroup International</span>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="como-funciona" className="bg-gray-900 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-blue-400 text-sm font-bold uppercase tracking-widest">Proceso Automatizado</span>
            <h2 className="text-3xl md:text-4xl font-black mt-2">
              Isidra trabaja mientras tú descansas
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {STEPS.map((step) => (
              <div key={step.num} className="bg-gray-950 border border-gray-800 rounded-2xl p-6 hover:border-blue-500 transition-colors">
                <span className="text-5xl font-black text-blue-500 opacity-40">{step.num}</span>
                <h3 className="text-lg font-bold text-white mt-2 mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RANKS ── */}
      <section id="rangos" className="bg-gray-950 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-amber-400 text-sm font-bold uppercase tracking-widest">Plan de Compensación</span>
            <h2 className="text-3xl md:text-4xl font-black mt-2">
              De Marketing Director a Royal Ambassador —{' '}
              <span className="text-amber-400">Isidra te lleva ahí</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              El sistema monitorea tu crecimiento, explica los bonos automáticamente y te avisa cuándo estás a un paso de subir de rango.
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {RANKS.map((rank) => (
              <div key={rank.title} className={`bg-gradient-to-b ${rank.color} rounded-2xl p-5 text-center`}>
                <span className="text-4xl">{rank.icon}</span>
                <p className="font-bold text-sm mt-3 leading-tight">{rank.title}</p>
                <p className="text-2xl font-black mt-2">{rank.bonus}</p>
                <p className="text-xs opacity-75 mt-1">bono por partner</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-6">
            + Pagos recurrentes mientras tus miembros mantengan la membresía activa
          </p>
        </div>
      </section>

      {/* ── TECHNOLOGY ── */}
      <section id="tecnologia" className="bg-gray-900 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-green-400 text-sm font-bold uppercase tracking-widest">Infraestructura Enterprise</span>
            <h2 className="text-3xl md:text-4xl font-black mt-2">
              Tecnología de clase mundial al servicio de tu negocio
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-gray-950 border border-gray-800 rounded-2xl p-6 text-center hover:border-blue-500 transition-colors">
              <span className="text-5xl">☁️</span>
              <h3 className="font-bold text-lg mt-4 mb-2">Google Cloud</h3>
              <p className="text-gray-400 text-sm">
                Infraestructura de nivel empresarial con 99.9% de disponibilidad. Tu negocio nunca para.
              </p>
            </div>
            <div className="bg-gray-950 border border-gray-800 rounded-2xl p-6 text-center hover:border-purple-500 transition-colors">
              <span className="text-5xl">⚙️</span>
              <h3 className="font-bold text-lg mt-4 mb-2">Flujos n8n</h3>
              <p className="text-gray-400 text-sm">
                Automatizaciones visuales que conectan WhatsApp, CRM, correo y más — sin código.
              </p>
            </div>
            <div className="bg-gray-950 border border-gray-800 rounded-2xl p-6 text-center hover:border-green-500 transition-colors">
              <span className="text-5xl">🤖</span>
              <h3 className="font-bold text-lg mt-4 mb-2">Agentes de IA</h3>
              <p className="text-gray-400 text-sm">
                Agentes entrenados en el plan de compensación de inCruises que responden como un experto humano.
              </p>
            </div>
          </div>
          <div className="bg-gray-950 border border-gray-700 rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4 text-white">Lo que el sistema explica automáticamente:</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                '✅ Cómo funciona la membresía y el Reward Points',
                '✅ Plan de compensación completo (bonos $20–$150)',
                '✅ Diferencia entre Miembro y Partner',
                '✅ Proceso de activación y primeros pasos',
                '✅ Cómo llegar al siguiente rango de liderazgo',
                '✅ Comparativa con otros clubes de viaje',
              ].map((item) => (
                <p key={item} className="text-gray-300 text-sm">{item}</p>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-gray-800 flex flex-wrap gap-4">
              <span className="bg-blue-900 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full">CLIA Compliant</span>
              <span className="bg-purple-900 text-purple-300 text-xs font-semibold px-3 py-1 rounded-full">Seller of Travel</span>
              <span className="bg-green-900 text-green-300 text-xs font-semibold px-3 py-1 rounded-full">WhatsApp Business API</span>
              <span className="bg-amber-900 text-amber-300 text-xs font-semibold px-3 py-1 rounded-full">100% Automatizado</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT MIGUEL ── */}
      <section id="miguel" className="bg-gray-950 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center">
            <div className="flex-shrink-0">
              <div className="w-36 h-36 rounded-full bg-gradient-to-br from-blue-600 to-amber-500 flex items-center justify-center text-6xl shadow-xl">
                👨‍💻
              </div>
            </div>
            <div>
              <span className="text-amber-400 text-sm font-bold uppercase tracking-widest">El arquitecto detrás de Isidra</span>
              <h2 className="text-3xl font-black mt-2 mb-4">Miguel Fuentes</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Miguel combina su experiencia en <span className="text-white font-semibold">derecho</span> y{' '}
                <span className="text-white font-semibold">arquitectura de sistemas</span> para construir herramientas que no solo automatizan, sino que cumplen con las regulaciones de la industria de viajes.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Cada flujo de Isidra fue diseñado respetando las normativas de <span className="text-blue-400 font-semibold">CLIA</span> y los estándares de{' '}
                <span className="text-blue-400 font-semibold">Seller of Travel</span> — para que tú escales con total confianza legal y técnica.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-gray-700 text-gray-300 text-xs font-semibold px-3 py-1.5 rounded-full">⚖️ Experiencia Legal</span>
                <span className="bg-gray-700 text-gray-300 text-xs font-semibold px-3 py-1.5 rounded-full">☁️ Google Cloud Architect</span>
                <span className="bg-gray-700 text-gray-300 text-xs font-semibold px-3 py-1.5 rounded-full">⚙️ Especialista n8n</span>
                <span className="bg-gray-700 text-gray-300 text-xs font-semibold px-3 py-1.5 rounded-full">🛡️ CLIA &amp; Seller of Travel</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT / CTA ── */}
      <section id="contacto" className="bg-gray-900 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-amber-400 text-sm font-bold uppercase tracking-widest">Da el primer paso</span>
            <h2 className="text-3xl md:text-4xl font-black mt-2">
              Automatiza tu negocio hoy
            </h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto">
              Déjanos tus datos y un agente de Isidra se pondrá en contacto contigo en menos de 24 horas — o escríbenos directamente por WhatsApp.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {/* Form */}
            <div className="bg-gray-950 border border-gray-800 rounded-2xl p-8">
              {sent ? (
                <div className="text-center py-10">
                  <span className="text-5xl">🎉</span>
                  <p className="text-xl font-bold mt-4 text-green-400">¡Mensaje enviado!</p>
                  <p className="text-gray-400 mt-2">Te responderemos muy pronto por WhatsApp.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Nombre completo</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Tu nombre"
                      className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Teléfono (WhatsApp)</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="+1 (000) 000-0000"
                      className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Correo electrónico</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="tu@email.com"
                      className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">¿Cuál es tu situación actual?</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Ej: Soy Partner de inCruises con 3 meses y quiero escalar..."
                      className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-amber-500 hover:bg-amber-400 text-gray-950 font-black py-4 rounded-xl text-lg transition-colors shadow-lg shadow-amber-500/20"
                  >
                    Automatizar mi Negocio →
                  </button>
                </form>
              )}
            </div>

            {/* Direct WhatsApp + info */}
            <div className="flex flex-col gap-6">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-500 text-white font-black text-xl px-8 py-6 rounded-2xl flex items-center justify-center gap-3 transition-colors shadow-lg shadow-green-600/20"
              >
                <span className="text-3xl">💬</span>
                <div className="text-left">
                  <p className="text-sm font-normal opacity-80">Escríbenos directo por</p>
                  <p>WhatsApp +1 (787) 579-7628</p>
                </div>
              </a>

              <div className="bg-gray-950 border border-gray-800 rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-4 text-white">¿Por qué actuar hoy?</h3>
                <ul className="space-y-3 text-gray-300 text-sm">
                  {[
                    '🚀 Cada día sin automatización es un prospecto perdido',
                    '💸 Los bonos de rango se acumulan — el sistema nunca duerme',
                    '🏆 Los Partners que automatizan escalan 3x más rápido',
                    '🔒 Configuración única — el sistema trabaja por años',
                  ].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-950 border border-gray-800 rounded-2xl p-6">
                <p className="text-sm text-gray-400 leading-relaxed">
                  <span className="text-white font-semibold">Cumplimiento garantizado:</span> Todos los flujos de Isidra operan bajo las regulaciones de{' '}
                  <span className="text-blue-400">CLIA</span> y <span className="text-blue-400">Seller of Travel</span>, protegiendo tu negocio en todo momento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-gray-950 border-t border-gray-800 py-10 px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-2xl font-black text-white">ISIDRA</span>
          <span className="text-xs font-semibold bg-amber-500 text-gray-950 px-2 py-0.5 rounded-full uppercase tracking-wide">AI</span>
        </div>
        <p className="text-gray-400 text-sm mb-2">
          Automatización inteligente para Partners de inGroup International / inCruises
        </p>
        <p className="text-gray-500 text-sm">
          📞 +1 (787) 579-7628 &nbsp;|&nbsp; Arquitecto: Miguel Fuentes
        </p>
        <p className="text-gray-600 text-xs mt-4">
          © 2025 Isidra AI — Todos los derechos reservados. CLIA &amp; Seller of Travel Compliant.
        </p>
      </footer>

    </div>
  );
}
