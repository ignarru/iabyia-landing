import { Star, User } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function TestimonialsSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  const testimonials = [
    {
      name: "María González",
      position: "CEO, TechStart Solutions",
      content:
        "IAbyIA transformó completamente nuestros procesos. Redujimos 60% el tiempo de gestión administrativa y pudimos enfocar nuestro equipo en innovación.",
      avatar: "from-blue-500 to-cyan-500",
    },
    {
      name: "Carlos Mendoza",
      position: "Director, Mendoza & Asociados",
      content:
        "La automatización de nuestros flujos de trabajo nos permitió crecer 200% sin aumentar personal. Excelente ROI y soporte técnico excepcional.",
      avatar: "from-cyan-500 to-violet-500",
    },
    {
      name: "Ana Rodriguez",
      position: "Fundadora, Digital Marketing Pro",
      content:
        "Ignacio y su equipo entendieron perfectamente nuestras necesidades. La implementación fue rápida y los resultados superaron nuestras expectativas.",
      avatar: "from-violet-500 to-emerald-500",
    },
  ];

  return (
    <section className="py-20 section-bg-2 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-5xl font-bold mb-6 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <span className="gradient-text">Lo Que Dicen Nuestros Clientes</span>
          </h2>
          <p
            className={`text-xl text-muted-foreground max-w-3xl mx-auto ${
              isVisible ? "animate-fade-in-up delay-200" : "opacity-0"
            }`}
          >
            Testimonios reales de empresarios que transformaron sus negocios con nuestras
            soluciones
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`glass-effect border border-border/50 rounded-2xl p-8 ${
                isVisible
                  ? `animate-fade-in-up delay-${(index + 1) * 200}`
                  : "opacity-0"
              }`}
            >
              <div className="flex items-center mb-6">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${testimonial.avatar} rounded-full flex items-center justify-center mr-4`}
                >
                  <User className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-muted-foreground">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-muted-foreground italic mb-4 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
