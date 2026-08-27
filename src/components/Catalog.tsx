
import { Smartphone, Watch, Headphones, Battery, Shield, ShoppingBag } from "lucide-react";

const Catalog = () => {
  const products = [
    { icon: <Smartphone className="w-8 h-8" />, name: "Fundas", description: "Protección y estilo" },
    { icon: <Battery className="w-8 h-8" />, name: "Cargadores", description: "Carga rápida" },
    { icon: <Headphones className="w-8 h-8" />, name: "Audífonos", description: "Sonido premium" },
    { icon: <Watch className="w-8 h-8" />, name: "Smartwatch", description: "Tecnología en tu muñeca" },
    { icon: <Shield className="w-8 h-8" />, name: "Protectores", description: "Pantalla segura" },
    { icon: <ShoppingBag className="w-8 h-8" />, name: "Accesorios", description: "Todo lo que necesitas" },
  ];

  return (
    <section id="catalogo" className="py-24 bg-background">
      <div className="container">
        <h2 className="font-display text-4xl md:text-5xl font-bold uppercase text-center mb-4">
          Nuestro <span className="text-primary">Catálogo</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-lg mx-auto mb-16">
          Accesorios de calidad para tu dispositivo móvil
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {products.map((product, index) => (
            <div 
              key={index}
              className="group bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/50 transition-all hover:shadow-lg hover:-translate-y-1 duration-300"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4 group-hover:bg-primary/20 transition-all">
                {product.icon}
              </div>
              <h4 className="font-display font-bold text-sm uppercase tracking-wide mb-1">
                {product.name}
              </h4>
              <p className="text-xs text-muted-foreground">
                {product.description}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://wa.me/573183606186?text=Hola%2C%20quiero%20información%20sobre%20el%20catálogo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold hover:brightness-110 transition-all"
          >
            <ShoppingBag className="w-5 h-5" />
            Consultar disponibilidad
          </a>
        </div>
      </div>
    </section>
  );
};

export default Catalog;