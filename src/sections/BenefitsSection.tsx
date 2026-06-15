function BenefitsSection() {
  const benefits = [
    {
      title: "Centraliza tus candidatos",
      description:
        "Organiza toda la información de los postulantes en un solo lugar.",
    },
    {
      title: "Reduce tiempos de contratación",
      description:
        "Disminuye el tiempo invertido en revisar hojas de vida y hacer seguimiento.",
    },
    {
      title: "Procesos más organizados",
      description:
        "Evita perder candidatos entre WhatsApp, correo y hojas de cálculo.",
    },
    {
      title: "Diseñado para PYMES",
      description:
        "Una solución simple y accesible para pequeñas y medianas empresas.",
    },
  ];

  return (
    <section id="beneficios" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">
          ¿Qué buscamos lograr?
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="
                shadow
                rounded-2xl
                p-8
                hover:shadow-xl
                transition
                duration-300
                "
            >
              <h3 className="text-2xl font-bold">{benefit.title}</h3>

              <p className="mt-4 text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;
