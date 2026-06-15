import {
  FileSpreadsheet,
  MessageSquare,
  Clock3,
  DollarSign,
} from "lucide-react";

function ProblemSection() {
  return (
    <section id="problema" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            ¿Te identificas con alguno de estos problemas?
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto leading-8">
            Muchas pequeñas y medianas empresas enfrentan dificultades para
            encontrar candidatos, organizar la información y gestionar sus
            procesos de contratación de forma eficiente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-20">
          {/* Tarjeta 1 */}

          <div
            className="
              p-8
              rounded-3xl
              border
              border-gray-200
              shadow-sm
              hover:shadow-xl
              transition
              duration-300
            "
          >
            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center">
              <FileSpreadsheet className="text-blue-600" size={28} />
            </div>

            <h3 className="text-2xl font-bold mt-6">Información dispersa</h3>

            <p className="mt-4 text-gray-600 leading-7">
              Los candidatos terminan repartidos entre Excel, correo y WhatsApp,
              dificultando el seguimiento y aumentando el riesgo de perder
              talento.
            </p>
          </div>

          {/* Tarjeta 2 */}

          <div
            className="
              p-8
              rounded-3xl
              border
              border-gray-200
              shadow-sm
              hover:shadow-xl
              transition
              duration-300
            "
          >
            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center">
              <MessageSquare className="text-blue-600" size={28} />
            </div>

            <h3 className="text-2xl font-bold mt-6">Procesos desorganizados</h3>

            <p className="mt-4 text-gray-600 leading-7">
              La información llega desde diferentes canales y mantener el
              control de cada vacante se vuelve complicado.
            </p>
          </div>

          {/* Tarjeta 3 */}

          <div
            className="
              p-8
              rounded-3xl
              border
              border-gray-200
              shadow-sm
              hover:shadow-xl
              transition
              duration-300
            "
          >
            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center">
              <Clock3 className="text-blue-600" size={28} />
            </div>

            <h3 className="text-2xl font-bold mt-6">
              Contratar consume demasiado tiempo
            </h3>

            <p className="mt-4 text-gray-600 leading-7">
              Encontrar y gestionar candidatos puede tardar semanas y afectar la
              productividad del negocio.
            </p>
          </div>

          {/* Tarjeta 4 */}

          <div
            className="
              p-8
              rounded-3xl
              border
              border-gray-200
              shadow-sm
              hover:shadow-xl
              transition
              duration-300
            "
          >
            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center">
              <DollarSign className="text-blue-600" size={28} />
            </div>

            <h3 className="text-2xl font-bold mt-6">
              Plataformas costosas para pocas vacantes
            </h3>

            <p className="mt-4 text-gray-600 leading-7">
              Muchas empresas necesitan cubrir una vacante puntual y terminan
              pagando servicios que no siempre se ajustan a su presupuesto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProblemSection;
