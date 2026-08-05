import { Link } from "react-router-dom";

function FooterSection() {
  return (
    <footer className="bg-slate-950 text-gray-300 py-16 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Marca */}
          <div>
            <h3 className="text-2xl font-bold text-white">Consultalent</h3>

            <p className="mt-4 leading-relaxed text-sm text-slate-400">
              Consultalent acompaña a las organizaciones en sus procesos de reclutamiento y selección de personal, así como en la formación en competencias socioemocionales.
              <br />
              <br />
              Ahora potenciamos esta experiencia mediante una solución tecnológica SaaS que integra Inteligencia Artificial para el match de candidatos y herramientas cuantitativas para la satisfacción laboral y reducción de la rotación.
            </p>
          </div>

          {/* Enlaces */}
          <div>
            <h4 className="font-semibold text-white mb-5">Enlaces</h4>

            <div className="flex flex-col gap-3 text-sm">
              <Link to="/" className="hover:text-white transition">
                Inicio
              </Link>

              <Link
                to="/privacy-policy"
                className="hover:text-white transition"
              >
                Política de privacidad
              </Link>

              <Link to="/terms" className="hover:text-white transition">
                Términos y condiciones
              </Link>
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-semibold text-white mb-5">Contacto</h4>

            <div className="space-y-4 text-sm text-gray-300">
              <p>📧 contacto@consultalent.co</p>

              <p>📱 300-8899762</p>

              <p className="leading-relaxed">
                📍 Cra 4 · 13 – 97
                <br />
                Edificio Oficentro
                <br />
                Cali - Colombia
              </p>

              <a
                href="https://consultalent.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-blue-400 hover:text-blue-300 transition font-medium"
              >
                🌐 www.consultalent.co
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-900 mt-14 pt-8 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Consultalent. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
