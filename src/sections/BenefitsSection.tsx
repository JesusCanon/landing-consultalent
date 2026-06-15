import { Users, Clock3, FolderKanban, BadgeDollarSign } from "lucide-react";

function BenefitsSection() {
  const benefits = [
    {
      icon: <Users className="text-blue-600" size={28} />,
      title: "Centraliza tus candidatos",
      description:
        "Organiza toda la información de los postulantes en un solo lugar y evita perder oportunidades.",
    },
    {
      icon: <Clock3 className="text-blue-600" size={28} />,
      title: "Reduce tiempos de contratación",
      description:
        "Dedica menos tiempo a tareas operativas y enfócate en seleccionar mejor.",
    },
    {
      icon: <FolderKanban className="text-blue-600" size={28} />,
      title: "Procesos más organizados",
      description:
        "Haz seguimiento a cada candidato y mantén tus procesos bajo control.",
    },
    {
      icon: <BadgeDollarSign className="text-blue-600" size={28} />,
      title: "Paga solo por las vacantes que necesites",
      description:
        "Publica una vacante cuando la necesites y accede a difusión y, en el futuro, a un banco de hojas de vida, sin asumir costos elevados.",
    },
  ];

  return (
    <section id="beneficios" className="py-28 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold">¿Qué buscamos lograr?</h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto leading-8">
            Estamos construyendo una solución pensada para pequeñas y medianas
            empresas que buscan contratar de manera más simple, organizada y
            accesible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-20">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
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
                {benefit.icon}
              </div>

              <h3 className="text-2xl font-bold mt-6">{benefit.title}</h3>

              <p className="mt-4 text-gray-600 leading-7">
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
