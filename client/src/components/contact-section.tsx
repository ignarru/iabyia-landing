import { Button } from "@/components/ui/button";
import { MessageCircle, Rocket } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function ContactSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5491160390755", "_blank", "noopener,noreferrer");
  };

  const handleConsultationClick = () => {
    const message = encodeURIComponent(
      "Hola IAbyIA, quiero solicitar mi consultoría gratuita para automatizar mi empresa"
    );
    window.open(
      `https://wa.me/5491160390755?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      id="contacto"
      ref={ref}
      className="py-20 bg-gradient-to-b from-background to-black relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className={`text-3xl md:text-5xl font-bold mb-6 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <span className="gradient-text">¿Listo para Transformar Tu Organización?</span>
          </h2>

          <p
            className={`text-xl text-muted-foreground mb-12 leading-relaxed ${
              isVisible ? "animate-fade-in-up delay-200" : "opacity-0"
            }`}
          >
            Comenzá tu proceso de transformación digital que revolucionará la eficiencia
            operacional de tu empresa.{" "}
            <span className="text-cyan-500 font-semibold">Evaluemos juntos</span> las
            oportunidades de automatización específicas y diseñemos una estrategia que genere{" "}
            <span className="text-blue-500 font-semibold">resultados desde el primer mes</span>.
          </p>

          {/* Contact Methods */}
          <div className="max-w-2xl mx-auto mb-12">
            {/* WhatsApp Contact */}
            <div
              className={`glass-effect border border-border/50 rounded-2xl p-8 text-center ${
                isVisible ? "animate-fade-in-up delay-400" : "opacity-0"
              }`}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Consulta Inmediata por WhatsApp
              </h3>
              <p className="text-muted-foreground mb-6 text-lg">
                Hablemos directamente sobre tu proyecto. Respuesta garantizada en menos de 2 horas.
                <br />
                <span className="text-cyan-500 font-semibold">También puedes escribirnos a: iabyia.business@gmail.com</span>
              </p>
              <Button
                onClick={handleWhatsAppClick}
                className="bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold text-lg px-8 py-4 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center space-x-3 mx-auto"
              >
                <MessageCircle className="w-6 h-6" />
                <span>Enviar Mensaje WhatsApp</span>
              </Button>
            </div>
          </div>

          {/* Main CTA */}
          <div
            className={`bg-gradient-to-r from-slate-800/50 to-slate-700/50 glass-effect border border-border/50 rounded-2xl p-8 ${
              isVisible ? "animate-fade-in-up delay-800" : "opacity-0"
            }`}
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">
              🚀 Oferta Especial - Consultoría Gratuita
            </h3>
            <p className="text-muted-foreground mb-6">
              Analizamos tu empresa GRATIS y te mostramos exactamente cómo la IA puede revolucionar
              tus procesos.{" "}
              <span className="text-cyan-500 font-semibold">Solo este mes</span> incluimos un plan
              de implementación valorado en $500 USD.
            </p>
            <Button
              onClick={handleConsultationClick}
              className="btn-gradient text-white font-bold text-lg px-8 py-4 rounded-xl hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300 flex items-center space-x-3 mx-auto"
            >
              <MessageCircle className="w-6 h-6" />
              <span>Solicitar Consultoría GRATIS</span>
              <Rocket className="w-6 h-6" />
            </Button>
            <p className="text-muted-foreground text-sm mt-4">
              ✅ Sin compromiso • ✅ Análisis personalizado • ✅ Plan de acción incluido
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
