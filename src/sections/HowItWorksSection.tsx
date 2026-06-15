function HowItWorksSection() {
  return (
    <section className="bg-slate-100 py-28">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">¿Cómo funcionaría?</h2>

        <div className="grid md:grid-cols-3 gap-10 mt-16">
          <div className="bg-white rounded-2xl p-8 shadow">
            <div className="text-5xl font-bold text-blue-600">1</div>

            <h3 className="text-2xl font-bold mt-6">Publica una vacante</h3>

            <p className="mt-4 text-gray-600">
              Crea y administra tus procesos de selección.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow">
            <div className="text-5xl font-bold text-blue-600">2</div>

            <h3 className="text-2xl font-bold mt-6">Gestiona candidatos</h3>

            <p className="mt-4 text-gray-600">
              Organiza y realiza seguimiento a cada postulante.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow">
            <div className="text-5xl font-bold text-blue-600">3</div>

            <h3 className="text-2xl font-bold mt-6">Contrata más rápido</h3>

            <p className="mt-4 text-gray-600">
              Reduce tiempos y mejora la organización del proceso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;
