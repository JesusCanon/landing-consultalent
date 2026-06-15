function ProblemSection() {
  return (
    <section id="problema" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">
          ¿Te identificas con alguno de estos problemas?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div
            className="
            p-8
            rounded-2xl
            shadow
            hover:shadow-xl
            transition
            duration-300
            "
          >
            <h3 className="text-2xl font-bold">Muchas hojas de vida</h3>

            <p className="mt-4 text-gray-600">
              Revisar candidatos manualmente consume demasiado tiempo.
            </p>
          </div>

          <div
            className="
            p-8
            rounded-2xl
            shadow
            hover:shadow-xl
            transition
            duration-300
            "
          >
            <h3 className="text-2xl font-bold">Información desorganizada</h3>

            <p className="mt-4 text-gray-600">
              Los candidatos terminan repartidos entre WhatsApp, correo y Excel.
            </p>
          </div>

          <div
            className="
            p-8
            rounded-2xl
            shadow
            hover:shadow-xl
            transition
            duration-300
            "
          >
            <h3 className="text-2xl font-bold">Procesos lentos</h3>

            <p className="mt-4 text-gray-600">
              Contratar puede tardar semanas y generar pérdida de productividad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProblemSection;
