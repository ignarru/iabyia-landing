import { Button } from "@/components/ui/button";
import { Brain, Rocket, ChevronDown } from "lucide-react";
import AnimatedCounter from "@/components/animated-counter";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function HeroSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5491160390755", "_blank", "noopener,noreferrer");
  };

  const handleScrollToResults = () => {
    const element = document.querySelector("#resultados");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden animated-bg geometric-pattern"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Geometric patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 left-20 transform rotate-45">
          <div className="w-16 h-16 border border-blue-500" />
        </div>
        <div className="absolute bottom-40 right-32 transform -rotate-12">
          <div className="w-12 h-12 border border-cyan-500 rounded-full" />
        </div>
        <div className="absolute top-1/3 right-20 transform rotate-12">
          <div className="w-8 h-8 bg-violet-500/30" />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Logo */}
          <div
            className={`mb-8 ${
              isVisible ? "animate-fade-in-down delay-200" : "opacity-0"
            }`}
          >
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 hover:scale-110 transition-transform duration-300 animate-float">
              <Brain className="w-10 h-10 text-white" />
            </div>
          </div>

          {/* Hero title */}
          <h1
            className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 ${
              isVisible ? "animate-fade-in-up delay-400" : "opacity-0"
            }`}
          >
            <span className="gradient-text">Revolucioná Tu Empresa</span>
            <br />
            <span className="text-slate-200">con Inteligencia Artificial</span>
          </h1>

          <p
            className={`text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed ${
              isVisible ? "animate-fade-in-up delay-600" : "opacity-0"
            }`}
          >
            Transformamos procesos empresariales mediante{" "}
            <span className="text-cyan-500 font-semibold">soluciones de IA</span> que optimizan
            flujos de trabajo, incrementan la{" "}
            <span className="text-blue-500 font-semibold">eficiencia hasta un 70%</span> y
            maximizan la productividad organizacional.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 ${
              isVisible ? "animate-fade-in-up delay-800" : "opacity-0"
            }`}
          >
            <Button
              onClick={handleWhatsAppClick}
              className="btn-gradient text-white font-semibold text-lg px-8 py-4 rounded-xl hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300 flex items-center space-x-3"
            >
              <Rocket className="w-5 h-5" />
              <span>Evaluá Tu Potencial GRATIS</span>
            </Button>
            <Button
              onClick={handleScrollToResults}
              variant="outline"
              className="px-8 py-4 rounded-xl border-2 border-slate-600 text-muted-foreground font-semibold text-lg hover:border-blue-500 hover:text-blue-500 hover:bg-blue-500/5 transition-all duration-300"
            >
              Ver Casos de Éxito
            </Button>
          </div>

          {/* Trust indicators */}
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto ${
              isVisible ? "animate-fade-in-up delay-1000" : "opacity-0"
            }`}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500 mb-2">
                <AnimatedCounter end={68} duration={2000} />%
              </div>
              <div className="text-muted-foreground">Reducción en Tiempos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-500 mb-2">
                <AnimatedCounter end={47} duration={2000} delay={500} />+
              </div>
              <div className="text-muted-foreground">Empresas Transformadas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-violet-500 mb-2">
                <AnimatedCounter end={92} duration={2000} delay={1000} />%
              </div>
              <div className="text-muted-foreground">Satisfacción Clientes</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 ${
          isVisible ? "animate-fade-in-up delay-1200" : "opacity-0"
        }`}
      >
        <div className="animate-bounce">
          <ChevronDown className="w-8 h-8 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
}
