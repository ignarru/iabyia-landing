import { Rocket, TrendingUp, Clock, CheckCircle, Gauge, Coins, ArrowUpRight } from "lucide-react";
import AnimatedCounter from "@/components/animated-counter";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function ResultsSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  const metrics = [
    {
      icon: Gauge,
      value: 68,
      suffix: "%",
      label: "Mejora en Eficiencia",
      color: "text-blue-500",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: TrendingUp,
      value: 245,
      suffix: "%",
      label: "ROI Promedio",
      color: "text-cyan-500",
      gradient: "from-cyan-500 to-violet-500",
    },
    {
      icon: Clock,
      value: 32,
      suffix: "",
      label: "Horas Ahorradas/Semana",
      color: "text-violet-500",
      gradient: "from-violet-500 to-blue-500",
    },
    {
      icon: CheckCircle,
      value: 89,
      suffix: "%",
      label: "Reducción de Errores",
      color: "text-emerald-500",
      gradient: "from-emerald-500 to-blue-500",
    },
  ];

  const benefits = [
    {
      icon: Gauge,
      title: "Eficiencia Operacional Superior",
      description:
        "Reducción del 70% en tiempo de procesamiento mediante automatización inteligente. Eliminación de tareas repetitivas y optimización de recursos humanos para actividades estratégicas de mayor valor.",
      hoverColor: "hover:border-blue-500/50 hover:shadow-blue-500/10",
    },
    {
      icon: Coins,
      title: "Optimización de Recursos y ROI",
      description:
        "Maximización del retorno de inversión a través de reingeniería inteligente de procesos. Sistemas que se auto-optimizan continuamente, reduciendo errores y acelerando respuesta.",
      hoverColor: "hover:border-cyan-500/50 hover:shadow-cyan-500/10",
    },
    {
      icon: ArrowUpRight,
      title: "Escalabilidad Empresarial Inteligente",
      description:
        "Sistemas de IA que se adaptan al crecimiento organizacional manteniendo calidad operativa. Infraestructuras que escalan automáticamente según demanda empresarial.",
      hoverColor: "hover:border-violet-500/50 hover:shadow-violet-500/10",
    },
  ];

  return (
    <section
      id="resultados"
      ref={ref}
      className="py-20 section-bg-1 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-5xl font-bold mb-6 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <span className="gradient-text">Resultados Transformadores</span>
          </h2>
          <p
            className={`text-xl text-muted-foreground max-w-3xl mx-auto ${
              isVisible ? "animate-fade-in-up delay-200" : "opacity-0"
            }`}
          >
            Descubrí el impacto real que nuestras soluciones generan en empresas como la tuya
          </p>
        </div>

        {/* Impact Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`text-center glass-effect border border-border/50 rounded-2xl p-8 ${
                isVisible
                  ? `animate-fade-in-up delay-${(index + 1) * 200}`
                  : "opacity-0"
              }`}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${metric.gradient} rounded-xl flex items-center justify-center mx-auto mb-4`}
              >
                <metric.icon className="w-8 h-8 text-white" />
              </div>
              <div className={`text-4xl font-bold ${metric.color} mb-2`}>
                {isVisible && (
                  <AnimatedCounter
                    end={metric.value}
                    duration={2000}
                    delay={index * 200}
                    suffix={metric.suffix}
                  />
                )}
              </div>
              <div className="text-muted-foreground">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const delayClass = index === 0 ? 'delay-800' : index === 1 ? 'delay-1000' : 'delay-1200';
            return (
              <div
                key={index}
                className={`glass-effect border border-border/50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 ${
                  benefit.hoverColor
                } ${
                  isVisible
                    ? `animate-fade-in-up ${delayClass}`
                    : "opacity-0"
                }`}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
