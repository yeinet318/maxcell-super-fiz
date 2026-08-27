import { 
  Smartphone, 
  Battery, 
  MonitorSmartphone, 
  Headphones, 
  MapPin, 
  MessageCircle, 
  Wrench, 
  ShieldCheck, 
  Clock, 
  ChevronDown, 
  Tv, 
  Monitor, 
  Printer, 
  Check, 
  Cpu,
  Award,
  Zap,
  Users,
  Star,
  PhoneCall,
  Sparkles
} from "lucide-react";
import Catalog from "@/components/Catalog";
import heroBg from "@/assets/hero-bg.jpg";
import serviceScreens from "@/assets/service-screens.jpg";
import serviceBattery from "@/assets/service-battery.jpg";
import serviceAccessories from "@/assets/service-accessories.jpg";

const WHATSAPP_LINK = "https://wa.me/573183606186?text=Hola%2C%20quiero%20información%20sobre%20sus%20servicios";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0a0e17] text-white">
      {/* ===== NAVBAR ===== */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e17]/95 backdrop-blur-lg border-b border-cyan-500/20 shadow-lg">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="bg-cyan-500/20 p-2 rounded-xl border border-cyan-500/30">
              <Smartphone className="w-6 h-6 text-cyan-400" />
            </div>
            <span className="font-display text-2xl font-bold tracking-tight text-white">
              MAX<span className="text-cyan-400">CELL</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#servicios"
              className="hidden md:block text-sm font-medium text-gray-400 hover:text-cyan-400 transition-colors"
            >
              Servicios
            </a>
            <a
              href="#catalogo"
              className="hidden md:block text-sm font-medium text-gray-400 hover:text-cyan-400 transition-colors"
            >
              Catálogo
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:brightness-110 transition-all shadow-lg shadow-cyan-500/30"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </nav>

      {/* ===== HERO CON FONDO DE CIRCUITO ELECTRÓNICO ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Fondo de circuito electrónico generado con CSS */}
        <div className="absolute inset-0 bg-[#0a0e17]">
          {/* Patrón de circuito SVG */}
          <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="circuitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00ffff" stopOpacity="0.3"/>
                <stop offset="50%" stopColor="#0088ff" stopOpacity="0.2"/>
                <stop offset="100%" stopColor="#00ffff" stopOpacity="0.3"/>
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Líneas de circuito horizontales */}
            <g stroke="url(#circuitGrad)" strokeWidth="1.5" fill="none" filter="url(#glow)">
              <line x1="5%" y1="15%" x2="25%" y2="15%" />
              <line x1="25%" y1="15%" x2="25%" y2="35%" />
              <line x1="25%" y1="35%" x2="55%" y2="35%" />
              <line x1="55%" y1="35%" x2="55%" y2="15%" />
              <line x1="55%" y1="15%" x2="75%" y2="15%" />
              <line x1="75%" y1="15%" x2="75%" y2="45%" />
              <line x1="75%" y1="45%" x2="95%" y2="45%" />
              
              <line x1="10%" y1="45%" x2="35%" y2="45%" />
              <line x1="35%" y1="45%" x2="35%" y2="65%" />
              <line x1="35%" y1="65%" x2="65%" y2="65%" />
              <line x1="65%" y1="65%" x2="65%" y2="45%" />
              <line x1="65%" y1="45%" x2="85%" y2="45%" />
              
              <line x1="15%" y1="75%" x2="45%" y2="75%" />
              <line x1="45%" y1="75%" x2="45%" y2="90%" />
              <line x1="45%" y1="90%" x2="70%" y2="90%" />
              <line x1="70%" y1="90%" x2="70%" y2="75%" />
              <line x1="70%" y1="75%" x2="90%" y2="75%" />
              
              {/* Líneas verticales */}
              <line x1="40%" y1="5%" x2="40%" y2="25%" />
              <line x1="60%" y1="5%" x2="60%" y2="25%" />
              <line x1="20%" y1="55%" x2="20%" y2="80%" />
              <line x1="80%" y1="55%" x2="80%" y2="80%" />
              
              {/* Líneas diagonales */}
              <line x1="5%" y1="85%" x2="15%" y2="75%" />
              <line x1="90%" y1="15%" x2="95%" y2="10%" />
            </g>
            
            {/* Puntos de conexión (círculos) */}
            <g fill="#00ffff" opacity="0.6">
              <circle cx="25%" cy="15%" r="3" />
              <circle cx="25%" cy="35%" r="3" />
              <circle cx="55%" cy="35%" r="3" />
              <circle cx="55%" cy="15%" r="3" />
              <circle cx="75%" cy="15%" r="3" />
              <circle cx="75%" cy="45%" r="3" />
              <circle cx="35%" cy="45%" r="3" />
              <circle cx="35%" cy="65%" r="3" />
              <circle cx="65%" cy="65%" r="3" />
              <circle cx="65%" cy="45%" r="3" />
              <circle cx="45%" cy="75%" r="3" />
              <circle cx="45%" cy="90%" r="3" />
              <circle cx="70%" cy="90%" r="3" />
              <circle cx="70%" cy="75%" r="3" />
              <circle cx="40%" cy="5%" r="3" />
              <circle cx="40%" cy="25%" r="3" />
              <circle cx="60%" cy="5%" r="3" />
              <circle cx="60%" cy="25%" r="3" />
              <circle cx="20%" cy="55%" r="3" />
              <circle cx="20%" cy="80%" r="3" />
              <circle cx="80%" cy="55%" r="3" />
              <circle cx="80%" cy="80%" r="3" />
            </g>
            
            {/* Puntos de conexión más grandes */}
            <g fill="#0088ff" opacity="0.4">
              <circle cx="15%" cy="30%" r="6" />
              <circle cx="45%" cy="50%" r="8" />
              <circle cx="75%" cy="65%" r="6" />
              <circle cx="30%" cy="80%" r="8" />
              <circle cx="85%" cy="30%" r="6" />
              <circle cx="55%" cy="10%" r="8" />
            </g>
          </svg>
          
          {/* Círculos de brillo */}
          <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/3 rounded-full blur-3xl" />
        </div>
        
        {/* Capa de superposición para legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e17]/80 via-[#0a0e17]/60 to-[#0a0e17]" />
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 via-transparent to-transparent" />
        
        {/* Contenido del hero */}
        <div className="relative z-10 container text-center py-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-1.5 mb-6 animate-fade-in-up backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">Reparación Especializada</span>
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight mb-4 animate-fade-in-up text-white">
            MAX<span className="text-cyan-400">CELL</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-2 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            Venta de Accesorios y Reparación de Celular
          </p>
          <p className="text-lg text-gray-400 max-w-xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            ¡Tu celular en las mejores manos! 🛠️📱
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 hover:border-cyan-500/30 transition-all">
              <p className="text-2xl font-bold text-cyan-400">10+</p>
              <p className="text-xs text-gray-400">Años de experiencia</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 hover:border-cyan-500/30 transition-all">
              <p className="text-2xl font-bold text-cyan-400">500+</p>
              <p className="text-xs text-gray-400">Equipos reparados</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 hover:border-cyan-500/30 transition-all">
              <p className="text-2xl font-bold text-cyan-400">98%</p>
              <p className="text-xs text-gray-400">Satisfacción</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-display text-lg font-semibold uppercase tracking-wide hover:brightness-110 transition-all shadow-xl shadow-cyan-500/30 animate-glow-pulse"
            >
              <MessageCircle className="w-5 h-5" />
              Escríbenos al WhatsApp
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center gap-3 bg-white/10 text-white px-8 py-4 rounded-xl font-display text-lg font-semibold uppercase tracking-wide hover:bg-white/20 transition-all border border-white/20 backdrop-blur-sm"
            >
              Ver Servicios
              <ChevronDown className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ===== SERVICIOS ===== */}
      <section id="servicios" className="py-24 bg-[#0a0e17]">
        <div className="container">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-cyan-400 uppercase tracking-wider bg-cyan-500/10 px-4 py-1.5 rounded-full mb-4 border border-cyan-500/20">
              Nuestros Servicios
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase text-white">
              Reparación <span className="text-cyan-400">Especializada</span>
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto mt-4">
              Repuestos de calidad y servicio garantizado para dejar tu equipo como nuevo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              image={serviceScreens}
              icon={<MonitorSmartphone className="w-6 h-6" />}
              title="Cambio de Pantallas"
              description="Pantalla rota o dañada? La reemplazamos con repuestos de alta calidad y garantía."
              badge="Más solicitado"
            />
            <ServiceCard
              image={serviceBattery}
              icon={<Battery className="w-6 h-6" />}
              title="Cambio de Baterías"
              description="Batería agotada? Instalamos baterías nuevas para que tu celular dure todo el día."
              badge="Oferta"
            />
            <ServiceCard
              image={serviceAccessories}
              icon={<Headphones className="w-6 h-6" />}
              title="Venta de Accesorios"
              description="Audífonos, smartwatch, cargadores y más. Todo lo que necesitas para tu dispositivo."
              badge="Nuevo"
            />
          </div>

          {/* Software Card */}
          <div className="mt-8 bg-gradient-to-r from-cyan-500/10 via-cyan-500/5 to-cyan-500/10 border border-cyan-500/20 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 backdrop-blur-sm">
            <div className="bg-cyan-500/20 p-4 rounded-xl border border-cyan-500/30">
              <Wrench className="w-10 h-10 text-cyan-400" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-display text-2xl font-bold uppercase text-white mb-2">Reparación de Software</h3>
              <p className="text-gray-400">
                Fallas de software, bloqueos o rendimiento lento? Nuestros técnicos lo solucionan rápidamente.
              </p>
            </div>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:brightness-110 transition-all whitespace-nowrap shadow-lg shadow-cyan-500/20"
            >
              Consultar ahora
            </a>
          </div>
        </div>
      </section>

      {/* ===== REPARACIÓN ELECTRÓNICA (DESTACADO) ===== */}
      <section className="py-16 bg-gradient-to-b from-[#0a0e17] to-[#0f1520]">
        <div className="container">
          <div className="bg-gradient-to-r from-cyan-500/10 via-[#0f1520] to-cyan-500/10 border-2 border-cyan-500/30 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden shadow-2xl">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />
            
            <div className="relative z-10 flex items-center gap-4 md:w-1/3">
              <div className="bg-cyan-500/20 w-20 h-20 rounded-2xl flex items-center justify-center text-cyan-400 shrink-0 border border-cyan-500/30">
                <Cpu className="w-10 h-10" />
              </div>
              <div>
                <h3 className="font-display text-2xl md:text-3xl font-bold uppercase leading-tight text-white">
                  Reparación <span className="text-cyan-400">Electrónica</span>
                </h3>
                <p className="text-sm text-gray-400">A nivel componente</p>
              </div>
            </div>
            
            <ul className="relative z-10 grid sm:grid-cols-2 gap-x-8 gap-y-3 flex-1">
              {[
                { icon: <Cpu className="w-4 h-4" />, text: "Placas dañadas" },
                { icon: <Zap className="w-4 h-4" />, text: "Cortos" },
                { icon: <Monitor className="w-4 h-4" />, text: "Fallos de encendido" },
                { icon: <Battery className="w-4 h-4" />, text: "Fuentes de poder" },
              ].map((item) => (
                <li key={item.text} className="flex items-center gap-2 text-gray-300">
                  <span className="text-cyan-400">{item.icon}</span>
                  {item.text}
                </li>
              ))}
              <li className="flex items-center gap-2 text-cyan-400 font-semibold col-span-2">
                <Star className="w-4 h-4" />
                Y más servicios especializados
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== TAMBIÉN REPARAMOS ===== */}
      <section className="py-24 bg-[#0a0e17]">
        <div className="container">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-cyan-400 uppercase tracking-wider bg-cyan-500/10 px-4 py-1.5 rounded-full mb-4 border border-cyan-500/20">
              Especialistas en Todo
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase text-white">
              ¡También <span className="text-cyan-400">Reparamos</span>!
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto mt-4">
              Reparación electrónica a nivel componente para todo tipo de equipos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <RepairCard
              icon={<Tv className="w-6 h-6" />}
              title="Arreglo de TV"
              items={["Pantalla", "Imagen", "Sonido", "Mainboard", "Y más"]}
            />
            <RepairCard
              icon={<Monitor className="w-6 h-6" />}
              title="Arreglo de Computadoras"
              items={["Mantenimiento", "Limpieza", "Formateo", "Reinstalación", "Actualización", "Y más"]}
            />
            <RepairCard
              icon={<Printer className="w-6 h-6" />}
              title="Arreglo de Impresoras"
              items={["Limpieza de cabezal", "Atascos de papel", "Error de tinta", "Impresión y más"]}
            />
          </div>
        </div>
      </section>

      {/* ===== CATÁLOGO ===== */}
      <Catalog />

      {/* ===== POR QUÉ ELEGIRNOS ===== */}
      <section className="py-24 bg-[#0f1520]">
        <div className="container">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-cyan-400 uppercase tracking-wider bg-cyan-500/10 px-4 py-1.5 rounded-full mb-4 border border-cyan-500/20">
              Confianza
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase text-white">
              ¿Por qué <span className="text-cyan-400">elegirnos</span>?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <FeatureItem 
              icon={<ShieldCheck className="w-8 h-8" />} 
              title="Garantía" 
              description="Todos nuestros servicios cuentan con garantía de calidad." 
            />
            <FeatureItem 
              icon={<Wrench className="w-8 h-8" />} 
              title="Repuestos Originales" 
              description="Trabajamos con repuestos de alta calidad para tu equipo." 
            />
            <FeatureItem 
              icon={<Clock className="w-8 h-8" />} 
              title="Servicio Rápido" 
              description="Reparaciones en el menor tiempo posible sin sacrificar calidad." 
            />
            <FeatureItem 
              icon={<Users className="w-8 h-8" />} 
              title="Confianza y Experiencia" 
              description="Más de 10 años en el mercado respaldan nuestro trabajo." 
            />
          </div>
        </div>
      </section>

      {/* ===== CONTACTO / CTA ===== */}
      <section className="py-24 bg-[#0a0e17]">
        <div className="container">
          <div className="bg-gradient-to-r from-[#0f1520] via-[#0a0e17] to-[#0f1520] border border-cyan-500/20 rounded-3xl p-10 md:p-16 text-center max-w-3xl mx-auto relative overflow-hidden shadow-2xl">
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2 mb-6">