import {
  UserSearch,
  FileSpreadsheet,
  BrainCircuit,
  UserX,
} from "lucide-react";

function ProblemSection() {
  return (
    <section id="problema" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Desafíos Actuales
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-slate-900">
            ¿Tu Organización enfrenta alguno de estos problemas?
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-relaxed text-base sm:text-lg">
            Muchas organizaciones sufren retrasos en la contratación de personal clave, pérdidas de tiempo en filtrado manual y fugas insospechadas de talento por falta de insumos estratégicos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {/* Tarjeta 1 */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl transition duration-300">
            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center">
              <UserSearch className="text-blue-600" size={28} />
            </div>
            <h3 className="text-2xl font-bold mt-6 text-slate-900">
              Atracción de candidatos lenta e ineficiente
            </h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Dificultad para llegar rápidamente a los perfiles idóneos para tus vacantes, lo que extiende la vacancia por semanas y sobrecarga al equipo actual.
            </p>
          </div>

          {/* Tarjeta 2 */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl transition duration-300">
            <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center">
              <FileSpreadsheet className="text-indigo-600" size={28} />
            </div>
            <h3 className="text-2xl font-bold mt-6 text-slate-900">
              Información de candidatos dispersa
            </h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Las hojas de vida terminan repartidas entre correos, WhatsApp y archivos de Excel, sin trazabilidad ni centralización en un solo espacio de trabajo.
            </p>
          </div>

          {/* Tarjeta 3 */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl transition duration-300">
            <div className="w-14 h-14 bg-sky-100 rounded-2xl flex items-center justify-center">
              <BrainCircuit className="text-sky-600" size={28} />
            </div>
            <h3 className="text-2xl font-bold mt-6 text-slate-900">
              Filtrado manual que consume tiempo
            </h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Revisar decenas de postulantes uno a uno sin herramientas que comparen objetivamente la vacante contra la hoja de vida resta agilidad al proceso.
            </p>
          </div>

          {/* Tarjeta 4 */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl transition duration-300">
            <div className="w-14 h-14 bg-rose-100 rounded-2xl flex items-center justify-center">
              <UserX className="text-rose-600" size={28} />
            </div>
            <h3 className="text-2xl font-bold mt-6 text-slate-900">
              Alta rotación sin conocer la causa
            </h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              El personal renuncia sin que la Organización cuente con encuestas de satisfacción ni mediciones de motivos de retiro para implementar verdaderas estrategias de retención.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProblemSection;
