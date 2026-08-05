import {
  Target,
  BrainCircuit,
  TrendingDown,
  HeartHandshake,
} from "lucide-react";

function BenefitsSection() {
  const benefits = [
    {
      icon: <Target className="text-blue-600" size={28} />,
      title: "1) Cubre tus vacantes rápidamente",
      description:
        "Atrae candidatos calificados a tus vacantes activas y acelera la difusión de tus convocatorias para no detener la operación de tu Organización.",
    },
    {
      icon: <BrainCircuit className="text-blue-600" size={28} />,
      title: "2) Centraliza candidatos y Match con IA",
      description:
        "Espacio de trabajo donde podrás organizar todos tus postulantes y optimizar tiempos gracias a la Inteligencia Artificial que analiza la compatibilidad entre vacante y candidato.",
    },
    {
      icon: <TrendingDown className="text-blue-600" size={28} />,
      title: "3) Mide rotación y recibe planes de mejora con IA",
      description:
        "Herramientas integradas para medir la satisfacción laboral periódica y aplicar encuestas de retiro, obteniendo insumos cuantitativos y planes de acción para disminuir la rotación.",
    },
    {
      icon: <HeartHandshake className="text-blue-600" size={28} />,
      title: "4) Servicios humanos especializados de Consultalent",
      description:
        "La posibilidad opcional de adquirir nuestros servicios de reclutamiento experto, selección y talleres en competencias socioemocionales para sacar el máximo provecho a tu equipo.",
    },
  ];

  return (
    <section id="beneficios" className="py-24 bg-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Propuesta de Valor
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-slate-900">
            ¿Qué queremos lograr en tu Organización?
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-relaxed text-base sm:text-lg">
            Combinamos tecnología de vanguardia y análisis de talento para impulsar el crecimiento y la estabilidad del equipo humano de tu Organización.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="
                bg-white
                rounded-3xl
                p-8
                shadow-sm
                border
                border-slate-200/80
                hover:shadow-xl
                transition
                duration-300
              "
            >
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center">
                {benefit.icon}
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mt-6 text-slate-900">
                {benefit.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;
