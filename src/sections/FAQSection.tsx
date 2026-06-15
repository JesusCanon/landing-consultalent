function FAQSection() {
  return (
    <section className="bg-slate-100 py-28">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">Preguntas frecuentes</h2>

        <div className="mt-16 space-y-8">
          <div className="bg-white rounded-2xl shadow p-8">
            <h3 className="font-bold text-xl">
              ¿Consultalent ya está disponible?
            </h3>

            <p className="text-gray-600 mt-4">
              Actualmente estamos validando la solución con empresas y
              recopilando información para construir una herramienta realmente
              útil.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow p-8">
            <h3 className="font-bold text-xl">
              ¿La participación tiene algún costo?
            </h3>

            <p className="text-gray-600 mt-4">
              No. La participación es totalmente gratuita.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow p-8">
            <h3 className="font-bold text-xl">
              ¿Qué tipo de empresas buscamos?
            </h3>

            <p className="text-gray-600 mt-4">
              Principalmente pequeñas y medianas empresas que realizan procesos
              de contratación de personal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
