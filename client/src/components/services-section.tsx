import { Settings, TrendingUp, Brain, ArrowRight } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function ServicesSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  const services = [
    {
      icon: Settings,
      title: "Automatización de Procesos",
      description:
        "Implementamos sistemas de IA que automatizan flujos de trabajo complejos, gestión documental y operaciones repetitivas, reduciendo costos y eliminando errores.",
      gradient: "from-blue-500 to-cyan-500",
      hoverColor: "group-hover:text-cyan-500",
    },
    {
      icon: TrendingUp,
      title: "Consultoría Estratégica en IA",
      description:
        "Análisis integral de procesos para identificar oportunidades, diseñar arquitecturas personalizadas y maximizar el ROI mediante optimización inteligente.",
      gradient: "from-cyan-500 to-violet-500",
      hoverColor: "group-hover:text-violet-500",
    },
    {
      icon: Brain,
      title: "Optimización Inteligente",
      description:
        "Desarrollamos soluciones de IA con machine learning que integran sistemas, automatizan decisiones y crean flujos adaptativos para máxima eficiencia.",
      gradient: "from-violet-500 to-blue-500",
      hoverColor: "group-hover:text-blue-500",
    },
  ];

  return (
    <section
      id="servicios"
      ref={ref}
      className="py-20 section-bg-2 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-5xl font-bold mb-6 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <span className="gradient-text">Servicios Especializados</span>
          </h2>
          <p
            className={`text-xl text-muted-foreground max-w-3xl mx-auto ${
              isVisible ? "animate-fade-in-up delay-200" : "opacity-0"
            }`}
          >
            Soluciones integrales de automatización diseñadas específicamente para las necesidades
            de tu empresa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group glass-effect border border-border/50 rounded-2xl p-8 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 ${
                isVisible
                  ? `animate-fade-in-up delay-${(index + 1) * 200}`
                  : "opacity-0"
              }`}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
              <div
                className={`flex items-center text-blue-500 font-medium ${service.hoverColor} transition-colors duration-300`}
              >
                <span>Más información</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
