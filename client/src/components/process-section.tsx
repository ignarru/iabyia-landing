import { CheckCircle } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function ProcessSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  const steps = [
    {
      number: 1,
      title: "Análisis y Diagnóstico",
      description:
        "Realizamos un análisis profundo de tus procesos actuales, identificando cuellos de botella y oportunidades de automatización específicas.",
      items: ["Auditoria de procesos", "Mapeo de flujos de trabajo", "Identificación de KPIs"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      number: 2,
      title: "Diseño de Solución",
      description:
        "Desarrollamos una arquitectura personalizada de IA que se adapta perfectamente a las necesidades específicas de tu empresa.",
      items: ["Arquitectura tecnológica", "Prototipo funcional", "Plan de implementación"],
      color: "from-cyan-500 to-violet-500",
    },
    {
      number: 3,
      title: "Implementación",
      description:
        "Ejecutamos la implementación de manera gradual, asegurando mínima interrupción de las operaciones diarias.",
      items: ["Desarrollo e integración", "Pruebas exhaustivas", "Capacitación del equipo"],
      color: "from-violet-500 to-blue-500",
    },
    {
      number: 4,
      title: "Optimización Continua",
      description:
        "Monitoreamos y optimizamos constantemente el sistema para asegurar máximo rendimiento y adaptación a cambios.",
      items: ["Monitoreo 24/7", "Reportes de desempeño", "Mejoras automáticas"],
      color: "from-blue-500 via-cyan-500 to-violet-500",
    },
  ];

  return (
    <section
      id="proceso"
      ref={ref}
      className="py-20 section-bg-3 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-5xl font-bold mb-6 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <span className="gradient-text">Nuestro Proceso de Trabajo</span>
          </h2>
          <p
            className={`text-xl text-muted-foreground max-w-3xl mx-auto ${
              isVisible ? "animate-fade-in-up delay-200" : "opacity-0"
            }`}
          >
            Un enfoque metodológico que garantiza resultados measurables desde el primer mes
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-16 bottom-16 w-1 bg-gradient-to-b from-blue-500 via-cyan-500 to-violet-500 opacity-30" />

            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative flex flex-col md:flex-row items-center mb-16 ${
                  index % 2 === 0 ? "" : "md:flex-row-reverse"
                } ${
                  isVisible
                    ? `animate-fade-in-up delay-${(index + 1) * 200}`
                    : "opacity-0"
                }`}
              >
                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"} order-2`}>
                  <div className="glass-effect border border-border/50 rounded-2xl p-8">
                    <h3 className="text-2xl font-semibold text-foreground mb-4">
                      {step.number}. {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {step.description}
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      {step.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-blue-500 mr-3" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Step number */}
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white text-xl font-bold border-4 border-background order-1 md:order-2 mb-4 md:mb-0 z-10`}
                >
                  {step.number}
                </div>

                {/* Spacer */}
                <div className={`md:w-1/2 order-3 ${index % 2 === 0 ? "md:order-3" : "md:order-1"}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
