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
              Una plataforma diseñada para ayudar a las pequeñas y medianas
              empresas a optimizar sus procesos de reclutamiento y selección de
              personal.
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

            <p>consultalent@consultalent.co</p>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-14 pt-8 text-center">
          <p>
            © {new Date().getFullYear()} Consultalent. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
