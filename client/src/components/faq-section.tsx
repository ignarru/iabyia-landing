import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function FaqSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqs = [
    {
      question: "¿Cuánto tiempo toma implementar una solución de IA?",
      answer:
        "El tiempo de implementación varía según la complejidad del proyecto. Proyectos simples pueden completarse en 2-4 semanas, mientras que soluciones más complejas pueden tomar 2-3 meses. Siempre trabajamos con cronogramas claros y entregas parciales.",
    },
    {
      question: "¿Qué tipo de empresas pueden beneficiarse de la automatización?",
      answer:
        "Cualquier empresa con procesos repetitivos puede beneficiarse. Desde startups hasta grandes corporaciones, especialmente en sectores como servicios profesionales, e-commerce, manufactura, y empresas con alto volumen de datos o documentación.",
    },
    {
      question: "¿Cuál es el ROI típico de una implementación de IA?",
      answer:
        "Nuestros clientes típicamente ven un ROI del 200-400% en el primer año. Los ahorros provienen de reducción de tiempo manual, eliminación de errores, y liberación de personal para tareas de mayor valor. Ofrecemos análisis de ROI detallado en la consulta inicial.",
    },
    {
      question: "¿Ofrecen soporte post-implementación?",
      answer:
        "Sí, incluimos 3 meses de soporte gratuito post-implementación. Posteriormente ofrecemos planes de mantenimiento que incluyen monitoreo 24/7, actualizaciones, optimizaciones y soporte técnico para asegurar el funcionamiento óptimo continuo.",
    },
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section className="py-20 section-bg-3 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-5xl font-bold mb-6 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <span className="gradient-text">Preguntas Frecuentes</span>
          </h2>
          <p
            className={`text-xl text-muted-foreground max-w-3xl mx-auto ${
              isVisible ? "animate-fade-in-up delay-200" : "opacity-0"
            }`}
          >
            Resolvemos las dudas más comunes sobre nuestros servicios de automatización
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`glass-effect border border-border/50 rounded-2xl overflow-hidden ${
                isVisible
                  ? `animate-fade-in-up delay-${(index + 1) * 200}`
                  : "opacity-0"
              }`}
            >
              <button
                className="w-full text-left p-6 flex justify-between items-center hover:bg-slate-700/20 transition-colors duration-200"
                onClick={() => toggleItem(index)}
              >
                <span className="text-lg font-semibold text-foreground">{faq.question}</span>
                <ChevronDown
                  className={`w-6 h-6 text-blue-500 transition-transform duration-200 ${
                    openItem === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openItem === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="p-6 pt-0 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
