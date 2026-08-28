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
  Cpu 
} from "lucide-react";
import Catalog from "@/components/Catalog"; // ✅ AHORA SÍ EXISTE
import heroBg from "@/assets/hero-bg.jpg";
import serviceScreens from "@/assets/service-screens.jpg";
import serviceBattery from "@/assets/service-battery.jpg";
import serviceAccessories from "@/assets/service-accessories.jpg";

const WHATSAPP_LINK = "https://wa.me/573183606186?text=Hola%2C%20quiero%20información%20sobre%20sus%20servicios";

const Index = () => {
  return (
    <div className="min-h-screen circuit-bg">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Smartphone className="w-7 h-7 text-primary" />
            <span className="font-display text-2xl font-bold tracking-tight">
              MAX<span className="text-primary">CELL</span>
            </span>
          </div>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-semibold text-sm hover:brightness-110 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Reparación de celulares" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-background/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>
        <div className="relative z-10 container text-center py-20">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight mb-4 animate-fade-in-up">
            MAX<span className="text-primary">CELL</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-4 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            Venta de Accesorios y Reparación de Celular
          </p>
          <p className="text-lg text-foreground/70 max-w-xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            ¡Tu celular en las mejores manos! 🛠️📱
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-display text-lg font-semibold uppercase tracking-wide hover:brightness-110 transition-all animate-glow-pulse"
            >
              <MessageCircle className="w-5 h-5" />
              Escríbenos al WhatsApp
            </a>
            <a
              href="#catalogo"
              className="inline-flex items-center gap-3 bg-secondary text-secondary-foreground px-8 py-4 rounded-xl font-display text-lg font-semibold uppercase tracking-wide hover:bg-secondary/80 transition-all border border-border"
            >
              Ver Catálogo
              <ChevronDown className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicios" className="py-24 bg-transparent">
        <div className="container">
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase text-center mb-4">
            Nuestros <span className="text-primary">Servicios</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-lg mx-auto mb-16">
            Repuestos de calidad y servicio garantizado para dejar tu equipo como nuevo.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              image={serviceScreens}
              icon={<MonitorSmartphone className="w-6 h-6" />}
              title="Cambio de Pantallas"
              description="Pantalla rota o dañada? La reemplazamos con repuestos de alta calidad y garantía."
            />
            <ServiceCard
              image={serviceBattery}
              icon={<Battery className="w-6 h-6" />}
              title="Cambio de Baterías"
              description="Batería agotada? Instalamos baterías nuevas para que tu celular dure todo el día."
            />
            <ServiceCard
              image={serviceAccessories}
              icon={<Headphones className="w-6 h-6" />}
              title="Venta de Accesorios"
              description="Audífonos, smartwatch, cargadores y más. Todo lo que necesitas para tu dispositivo."
            />
          </div>
          {/* Software card full width */}
          <div className="mt-8 bg-card border border-border rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8">
            <div className="bg-primary/10 p-4 rounded-xl">
              <Wrench className="w-10 h-10 text-primary" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-display text-2xl font-bold uppercase mb-2">Reparación de Software</h3>
              <p className="text-muted-foreground">
                Fallas de software, bloqueos o rendimiento lento? Nuestros técnicos lo solucionan rápidamente.
              </p>
            </div>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:brightness-110 transition-all whitespace-nowrap"
            >
              Consultar ahora
            </a>
          </div>
        </div>
      </section>

      {/* Electronic Repair Highlight */}
      <section className="py-16 bg-transparent">
        <div className="container">
          <div className="bg-card border-2 border-primary/40 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
            <div className="absolute -top-16 -left-16 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
            <div className="relative z-10 flex items-center gap-4 md:w-1/3">
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center text-primary shrink-0">
                <Cpu className="w-9 h-9" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold uppercase leading-tight">
                Reparación <span className="text-primary">Electrónica</span> a Nivel Componente
              </h3>
            </div>
            <ul className="relative z-10 grid sm:grid-cols-2 gap-x-8 gap-y-3 flex-1">
              {["Placas dañadas", "Cortos", "Fallos de encendido", "Fuentes de poder", "Y más"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-foreground/80">
                  <Check className="w-5 h-5 text-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Also Repair */}
      <section className="py-24 bg-secondary/30">
        <div className="container">
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase text-center mb-4">
            ¡También <span className="text-primary">Reparamos</span>!
          </h2>
          <p className="text-muted-foreground text-center max-w-lg mx-auto mb-16">
            Reparación electrónica a nivel componente para todo tipo de equipos.
          </p>
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

      {/* Catalog - AHORA FUNCIONA */}
      <Catalog />

      {/* Why us */}
      <section className="py-24 bg-secondary/50">
        <div className="container">
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase text-center mb-16">
            ¿Por qué <span className="text-primary">elegirnos</span>?
          </h2>
          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <FeatureItem icon={<ShieldCheck className="w-8 h-8" />} title="Garantía" description="Todos nuestros servicios cuentan con garantía de calidad." />
            <FeatureItem icon={<Wrench className="w-8 h-8" />} title="Repuestos Originales" description="Trabajamos con repuestos de alta calidad para tu equipo." />
            <FeatureItem icon={<Clock className="w-8 h-8" />} title="Servicio Rápido" description="Reparaciones en el menor tiempo posible sin sacrificar calidad." />
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section className="py-24 bg-transparent">
        <div className="container">
          <div className="bg-card border border-border rounded-3xl p-10 md:p-16 text-center max-w-3xl mx-auto relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="font-display text-4xl md:text-5xl font-bold uppercase mb-6">
                ¡Contáctanos <span className="text-primary">hoy</span>!
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-muted-foreground mb-8">
                <span className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Carrera 10 entre Calle 19 y 20
                </span>
                <span className="hidden sm:block text-border">|</span>
                <span className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  3183606186
                </span>
              </div>
              <p className="text-foreground/70 mb-8">Yeiner Castillo</p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-4 rounded-xl font-display text-xl font-semibold uppercase tracking-wide hover:brightness-110 transition-all animate-glow-pulse"
              >
                <MessageCircle className="w-6 h-6" />
                Escribir por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container text-center text-muted-foreground text-sm space-y-1">
          <div>
            <span className="font-display text-foreground font-bold">MAX<span className="text-primary">CELL</span></span>
            {" "}© {new Date().getFullYear()} — Todos los derechos reservados
          </div>
          <div className="text-xs text-muted-foreground/70">
            Powered by <span className="text-primary font-semibold">Yeiner Castillo</span> & <span className="text-primary font-semibold">Samuel Bonivento</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

// ============= COMPONENTES INTERNOS =============

const ServiceCard = ({ image, icon, title, description }: { image: string; icon: React.ReactNode; title: string; description: string }) => (
  <div className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300">
    <div className="h-52 overflow-hidden">
      <img src={image} alt={title} loading="lazy" width={800} height={800} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
    </div>
    <div className="p-6">
      <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary mb-4">
        {icon}
      </div>
      <h3 className="font-display text-xl font-bold uppercase mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

const RepairCard = ({ icon, title, items }: { icon: React.ReactNode; title: string; items: string[] }) => (
  <div className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300">
    <div className="flex items-center gap-3 mb-5">
      <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary shrink-0">
        {icon}
      </div>
      <h3 className="font-display text-lg font-bold uppercase leading-tight">{title}</h3>
    </div>
    <ul className="space-y-2 mb-6">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
          <Check className="w-4 h-4 text-primary shrink-0" />
          {item}
        </li>
      ))}
    </ul>
    <div className="flex items-center gap-2 bg-primary/5 border border-primary/20 rounded-lg px-3 py-2 text-xs font-semibold uppercase tracking-wide text-primary">
      <Cpu className="w-4 h-4 shrink-0" />
      Reparación electrónica a nivel componente
    </div>
  </div>
);

const FeatureItem = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="text-center">
    <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4">
      {icon}
    </div>
    <h3 className="font-display text-lg font-bold uppercase mb-2">{title}</h3>
    <p className="text-muted-foreground text-sm">{description}</p>
  </div>
);

export default Index;
