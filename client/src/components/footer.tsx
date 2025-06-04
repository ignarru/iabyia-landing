import { Brain, MessageCircle, Mail, Linkedin } from "lucide-react";

export default function Footer() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5491160390755", "_blank", "noopener,noreferrer");
  };

  const handleEmailClick = () => {
    window.open("mailto:iabyia.business@gmail.com", "_blank", "noopener,noreferrer");
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/ignacio-arruvito-485562340/", "_blank", "noopener,noreferrer");
  };

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-black border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-foreground">IAbyIA</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Transformamos empresas mediante inteligencia artificial. Automatización que impulsa
              el crecimiento y maximiza la eficiencia operacional.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={handleWhatsAppClick}
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-green-500 hover:bg-green-500 hover:text-white transition-all duration-200"
              >
                <MessageCircle className="w-5 h-5" />
              </button>
              <button
                onClick={handleEmailClick}
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-200"
              >
                <Mail className="w-5 h-5" />
              </button>
              <button
                onClick={handleLinkedInClick}
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Servicios</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <button
                  onClick={() => handleNavClick("#servicios")}
                  className="hover:text-blue-500 transition-colors duration-200"
                >
                  Automatización de Procesos
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("#servicios")}
                  className="hover:text-blue-500 transition-colors duration-200"
                >
                  Consultoría Estratégica
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("#servicios")}
                  className="hover:text-blue-500 transition-colors duration-200"
                >
                  Optimización Inteligente
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("#proceso")}
                  className="hover:text-blue-500 transition-colors duration-200"
                >
                  Implementación IA
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Contacto</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center">
                <MessageCircle className="w-4 h-4 text-green-500 mr-2" />
                <span>+54 9 11 6039-0755</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 text-blue-500 mr-2" />
                <span>iabyia.business@gmail.com</span>
              </li>
              <li className="flex items-center">
                <span className="w-4 h-4 text-cyan-500 mr-2">📍</span>
                <span>Buenos Aires, Argentina</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground">
            &copy; 2024 IAbyIA - Inteligencia Artificial by Ignacio Arruvito. Todos los derechos
            reservados.
          </p>
          <p className="text-muted-foreground/70 text-sm mt-2">
            Diseñado para transformar empresas mediante automatización inteligente
          </p>
        </div>
      </div>
    </footer>
  );
}
