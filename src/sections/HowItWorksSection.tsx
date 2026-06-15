import {
  BriefcaseBusiness,
  Megaphone,
  Users,
  CircleCheckBig,
} from "lucide-react";

function HowItWorksSection() {
  return (
    <section className="bg-slate-100 py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold">¿Cómo funcionaría?</h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto leading-8">
            Estamos construyendo una solución pensada para simplificar el
            proceso de contratación y hacerlo más accesible para las pequeñas y
            medianas empresas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {/* Paso 1 */}

          <div
            className="
              bg-white
              rounded-3xl
              p-8
              shadow-sm
              border
              border-gray-200
              hover:shadow-xl
              transition
              duration-300
            "
          >
            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center">
              <BriefcaseBusiness className="text-blue-600" size={28} />
            </div>

            <div className="text-5xl font-bold text-blue-600 mt-6">1</div>

            <h3 className="text-2xl font-bold mt-6">Publica una vacante</h3>

            <p className="mt-4 text-gray-600 leading-7">
              Crea una vacante cuando la necesites, sin depender necesariamente
              de suscripciones costosas.
            </p>
          </div>

          {/* Paso 2 */}

          <div
            className="
              bg-white
              rounded-3xl
              p-8
              shadow-sm
              border
              border-gray-200
              hover:shadow-xl
              transition
              duration-300
            "
          >
            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center">
              <Megaphone className="text-blue-600" size={28} />
            </div>

            <div className="text-5xl font-bold text-blue-600 mt-6">2</div>

            <h3 className="text-2xl font-bold mt-6">
              Nosotros difundimos la vacante
            </h3>

            <p className="mt-4 text-gray-600 leading-7">
              La vacante podrá difundirse en diferentes canales y, en el futuro,
              también en nuestro banco de hojas de vida.
            </p>
          </div>

          {/* Paso 3 */}

          <div
            className="
              bg-white
              rounded-3xl
              p-8
              shadow-sm
              border
              border-gray-200
              hover:shadow-xl
              transition
              duration-300
            "
          >
            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center">
              <Users className="text-blue-600" size={28} />
            </div>

            <div className="text-5xl font-bold text-blue-600 mt-6">3</div>

            <h3 className="text-2xl font-bold mt-6">
              Organiza y realiza seguimiento
            </h3>

            <p className="mt-4 text-gray-600 leading-7">
              Centraliza la información de los candidatos y mantén mayor control
              sobre cada proceso de selección.
            </p>
          </div>

          {/* Paso 4 */}

          <div
            className="
              bg-white
              rounded-3xl
              p-8
              shadow-sm
              border
              border-gray-200
              hover:shadow-xl
              transition
              duration-300
            "
          >
            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center">
              <CircleCheckBig className="text-blue-600" size={28} />
            </div>

            <div className="text-5xl font-bold text-blue-600 mt-6">4</div>

            <h3 className="text-2xl font-bold mt-6">
              Contrata con mayor rapidez
            </h3>

            <p className="mt-4 text-gray-600 leading-7">
              Reduce tiempos, mejora la organización y encuentra candidatos con
              un proceso más eficiente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;
