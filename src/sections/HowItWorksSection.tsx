import {
  Megaphone,
  BrainCircuit,
  SmilePlus,
  TrendingDown,
} from "lucide-react";

function HowItWorksSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Metodología
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-slate-900">
            ¿Cómo funciona Consultalent en tu Organización?
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-relaxed text-base sm:text-lg">
            Un ecosistema integral diseñado para cubrir vacantes con agilidad y preservar el talento dentro de tu empresa en 4 pasos simples:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {/* Paso 1 */}
          <div className="bg-slate-50 rounded-3xl p-8 shadow-sm border border-slate-200/80 hover:shadow-xl transition duration-300">
            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center">
              <Megaphone className="text-blue-600" size={28} />
            </div>

            <div className="text-4xl font-extrabold text-blue-600 mt-6">01</div>

            <h3 className="text-xl font-bold mt-4 text-slate-900">
              Publica y atrae candidatos
            </h3>

            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              Registra la vacante que necesitas cubrir y atrae postulantes cualificados sin complicaciones.
            </p>
          </div>

          {/* Paso 2 */}
          <div className="bg-slate-50 rounded-3xl p-8 shadow-sm border border-slate-200/80 hover:shadow-xl transition duration-300">
            <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center">
              <BrainCircuit className="text-indigo-600" size={28} />
            </div>

            <div className="text-4xl font-extrabold text-indigo-600 mt-6">02</div>

            <h3 className="text-xl font-bold mt-4 text-slate-900">
              Match de IA y filtrado ágil
            </h3>

            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              La IA analiza las hojas de vida en relación al puesto de trabajo y destaca los perfiles con mayor coincidencia.
            </p>
          </div>

          {/* Paso 3 */}
          <div className="bg-slate-50 rounded-3xl p-8 shadow-sm border border-slate-200/80 hover:shadow-xl transition duration-300">
            <div className="w-14 h-14 bg-sky-100 rounded-2xl flex items-center justify-center">
              <SmilePlus className="text-sky-600" size={28} />
            </div>

            <div className="text-4xl font-extrabold text-sky-600 mt-6">03</div>

            <h3 className="text-xl font-bold mt-4 text-slate-900">
              Mide la satisfacción laboral
            </h3>

            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              Envía encuestas periódicas de clima para monitorear el bienestar de tus colaboradores activamente.
            </p>
          </div>

          {/* Paso 4 */}
          <div className="bg-slate-50 rounded-3xl p-8 shadow-sm border border-slate-200/80 hover:shadow-xl transition duration-300">
            <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center">
              <TrendingDown className="text-emerald-600" size={28} />
            </div>

            <div className="text-4xl font-extrabold text-emerald-600 mt-6">04</div>

            <h3 className="text-xl font-bold mt-4 text-slate-900">
              Disminuye la rotación
            </h3>

            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              Analiza motivos de retiro y aplica estrategias preventivas para retener el talento clave en la Organización.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;
