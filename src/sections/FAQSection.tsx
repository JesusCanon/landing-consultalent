import {
  CircleHelp,
  Building2,
  Rocket,
  BrainCircuit,
  TrendingDown,
  HeartHandshake,
} from "lucide-react";

function FAQSection() {
  return (
    <section className="bg-slate-100 py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Resolviendo tus dudas
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-slate-900">
            Preguntas frecuentes
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-relaxed text-base sm:text-lg">
            Todo lo que necesitas saber sobre el próximo lanzamiento BETA de Consultalent para tu Organización.
          </p>
        </div>

        <div className="mt-16 space-y-6">
          {/* Pregunta 1 */}
          <div className="bg-white rounded-3xl shadow-sm border border-slate-200/80 p-8">
            <div className="flex items-center gap-4">
              <Rocket className="text-blue-600 flex-shrink-0" />
              <h3 className="font-bold text-xl text-slate-900">
                ¿Cuándo estará disponible la plataforma Consultalent?
              </h3>
            </div>
            <p className="text-gray-600 mt-4 leading-relaxed">
              ¡Falta muy poco! En tan solo un par de días lanzaremos la plataforma en versión BETA. Si registras tu Organización en nuestro formulario, recibirás de primera mano tus credenciales de acceso de manera gratuita.
            </p>
          </div>

          {/* Pregunta 2 */}
          <div className="bg-white rounded-3xl shadow-sm border border-slate-200/80 p-8">
            <div className="flex items-center gap-4">
              <BrainCircuit className="text-indigo-600 flex-shrink-0" />
              <h3 className="font-bold text-xl text-slate-900">
                ¿Cómo funciona el Match con IA para las vacantes?
              </h3>
            </div>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Nuestra tecnología de Inteligencia Artificial analiza y contrasta el perfil exigido en la vacante contra las competencias y experiencia consignadas en la hoja de vida del postulante, ordenando automáticamente a los candidatos según su porcentaje de afinidad.
            </p>
          </div>

          {/* Pregunta 3 */}
          <div className="bg-white rounded-3xl shadow-sm border border-slate-200/80 p-8">
            <div className="flex items-center gap-4">
              <TrendingDown className="text-sky-600 flex-shrink-0" />
              <h3 className="font-bold text-xl text-slate-900">
                ¿De qué manera ayuda a disminuir la rotación de personal?
              </h3>
            </div>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Consultalent incluye módulos para aplicar encuestas de satisfacción laboral periódicas y encuestas de retiro (motivos de salida). La plataforma consolida estos datos cuantitativos e identifica patrones para recomendar planes estratégicos de retención.
            </p>
          </div>

          {/* Pregunta 4 */}
          <div className="bg-white rounded-3xl shadow-sm border border-slate-200/80 p-8">
            <div className="flex items-center gap-4">
              <Building2 className="text-blue-600 flex-shrink-0" />
              <h3 className="font-bold text-xl text-slate-900">
                ¿Para qué tipo de Organizaciones está recomendada?
              </h3>
            </div>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Está concebida para cualquier Organización que requiera gestionar eficientemente sus procesos de selección, agilizar el filtrado de candidatos y mantener un control proactivo del clima y la retención del talento humano.
            </p>
          </div>

          {/* Pregunta 5 */}
          <div className="bg-white rounded-3xl shadow-sm border border-slate-200/80 p-8">
            <div className="flex items-center gap-4">
              <HeartHandshake className="text-emerald-600 flex-shrink-0" />
              <h3 className="font-bold text-xl text-slate-900">
                ¿Cómo puedo combinar la plataforma con los servicios humanos de Consultalent?
              </h3>
            </div>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Además de las herramientas tecnológicas, puedes acceder al acompañamiento personalizado de nuestro equipo de psicólogos y consultores para procesos de selección avanzados o capacitaciones en competencias socioemocionales.
            </p>
          </div>

          {/* Pregunta 6 */}
          <div className="bg-white rounded-3xl shadow-sm border border-slate-200/80 p-8">
            <div className="flex items-center gap-4">
              <CircleHelp className="text-blue-600 flex-shrink-0" />
              <h3 className="font-bold text-xl text-slate-900">
                ¿Tiene algún valor económico probar la versión BETA?
              </h3>
            </div>
            <p className="text-gray-600 mt-4 leading-relaxed">
              No. El acceso a la versión BETA es totalmente gratuito para las Organizaciones registradas durante esta etapa de lanzamiento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
