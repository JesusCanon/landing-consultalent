import { Link } from "react-router-dom";

function FooterSection() {
  return (
    <footer className="bg-slate-950 text-gray-300 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Marca */}

          <div>
            <h3 className="text-2xl font-bold text-white">Consultalent</h3>

            <p className="mt-4 leading-7">
              Consultalent ya acompaña a empresas en procesos de reclutamiento y
              selección de personal, así como en formación en competencias
              socioemocionales.
              <br />
              <br />
              Ahora estamos trabajando para ir más allá mediante el desarrollo
              de una plataforma tecnológica que ayude a las PYMES a optimizar
              sus procesos de contratación.
            </p>
          </div>

          {/* Enlaces */}

          <div>
            <h4 className="font-semibold text-white mb-5">Enlaces</h4>

            <div className="flex flex-col gap-3">
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

            <div className="space-y-4 text-gray-300">
              <p>📧 contacto@consultalent.co</p>

              <p>📱 300-8899762</p>

              <p className="leading-7">
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
                className="
                mt-4
                block
                text-blue-400
                hover:text-blue-300
                transition
            "
              >
                🌐 www.consultalent.co
              </a>

              <p className="mt-4 text-sm text-gray-400">
                Servicios de reclutamiento y selección, así como formación en
                competencias socioemocionales.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-14 pt-8 text-center">
          <p>© 2024 Consultalent. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
