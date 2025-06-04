import { Rocket, Eye } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function AboutSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="py-20 section-bg-1 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className={`text-3xl md:text-5xl font-bold mb-8 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <span className="gradient-text">Acerca de IAbyIA</span>
          </h2>

          <div
            className={`glass-effect border border-border/50 rounded-2xl p-8 md:p-12 ${
              isVisible ? "animate-fade-in-up delay-200" : "opacity-0"
            }`}
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              <span className="text-cyan-500 font-semibold">IAbyIA</span> es una consultora
              especializada en{" "}
              <span className="text-blue-500 font-semibold">automatización empresarial</span>{" "}
              fundada por Ignacio Arruvito. Desarrollamos soluciones de inteligencia artificial que
              transforman procesos operativos complejos en flujos de trabajo automatizados,
              permitiendo a empresas, PyMEs y emprendimientos alcanzar niveles superiores de
              eficiencia y rentabilidad.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="text-left">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Nuestra Misión</h3>
                </div>
                <p className="text-muted-foreground">
                  Democratizar el acceso a tecnologías de IA para que empresas de todos los tamaños
                  puedan beneficiarse de la automatización inteligente.
                </p>
              </div>

              <div className="text-left">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-violet-500 rounded-lg flex items-center justify-center mr-4">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Nuestra Visión</h3>
                </div>
                <p className="text-muted-foreground">
                  Ser la consultora líder en Argentina que permita a las empresas alcanzar su
                  máximo potencial a través de la inteligencia artificial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
