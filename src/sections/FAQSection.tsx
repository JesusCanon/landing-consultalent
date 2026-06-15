import { CircleHelp, Building2, CreditCard, Rocket, Users } from "lucide-react";

function FAQSection() {
  return (
    <section className="bg-slate-100 py-28">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Preguntas frecuentes</h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto leading-8">
            Queremos construir una solución realmente útil para las pequeñas y
            medianas empresas. Estas son algunas preguntas frecuentes.
          </p>
        </div>

        <div className="mt-20 space-y-8">
          {/* Pregunta 1 */}

          <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-8">
            <div className="flex items-center gap-4">
              <Rocket className="text-blue-600" />

              <h3 className="font-bold text-xl">
                ¿Consultalent ya está disponible?
              </h3>
            </div>

            <p className="text-gray-600 mt-6 leading-7">
              Actualmente estamos validando la solución con empresas y
              recopilando información para construir una plataforma realmente
              útil.
            </p>
          </div>

          {/* Pregunta 2 */}

          <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-8">
            <div className="flex items-center gap-4">
              <CreditCard className="text-blue-600" />

              <h3 className="font-bold text-xl">
                ¿Será necesario pagar una suscripción mensual?
              </h3>
            </div>

            <p className="text-gray-600 mt-6 leading-7">
              Estamos evaluando diferentes alternativas. Una de ellas es
              permitir que las empresas paguen únicamente por las vacantes que
              necesiten, evitando costos elevados y adaptándonos mejor a las
              PYMES.
            </p>
          </div>

          {/* Pregunta 3 */}

          <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-8">
            <div className="flex items-center gap-4">
              <Building2 className="text-blue-600" />

              <h3 className="font-bold text-xl">
                ¿Qué tipo de empresas buscamos?
              </h3>
            </div>

            <p className="text-gray-600 mt-6 leading-7">
              Principalmente pequeñas y medianas empresas que realizan procesos
              de contratación y desean optimizar su gestión de candidatos.
            </p>
          </div>

          {/* Pregunta 4 */}

          <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-8">
            <div className="flex items-center gap-4">
              <Users className="text-blue-600" />

              <h3 className="font-bold text-xl">
                ¿Quién está detrás de Consultalent?
              </h3>
            </div>

            <p className="text-gray-600 mt-6 leading-7">
              Consultalent ya acompaña a empresas mediante servicios de
              reclutamiento y selección de personal, así como formación en
              competencias socioemocionales. Ahora buscamos complementar esa
              experiencia con soluciones tecnológicas.
            </p>
          </div>

          {/* Pregunta 5 */}

          <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-8">
            <div className="flex items-center gap-4">
              <CircleHelp className="text-blue-600" />

              <h3 className="font-bold text-xl">
                ¿Participar tiene algún costo?
              </h3>
            </div>

            <p className="text-gray-600 mt-6 leading-7">
              No. Participar en esta etapa de validación es completamente
              gratuito.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
