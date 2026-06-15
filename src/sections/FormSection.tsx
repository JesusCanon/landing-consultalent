import { useState } from "react";
import type { FormularioData } from "../types/formulario.types";
import { enviarFormulario } from "../services/googleSheets.service";
import { CheckCircle } from "lucide-react";

function FormSection() {
  const [formData, setFormData] = useState<FormularioData>({
    empresa: "",
    nombre: "",
    cargo: "",
    whatsapp: "",
    correo: "",
    contratacionesMes: "",
    procesoActual: "",
    principalProblema: "",
    interes: "",
    aceptaDatos: false,
  });

  const [loading, setLoading] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target;

    setFormData({
      ...formData,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setMensaje("");
    setError("");

    if (!formData.aceptaDatos) {
      setError(
        "Debes autorizar el tratamiento de datos personales para enviar la información.",
      );
      return;
    }

    try {
      setLoading(true);

      await enviarFormulario(formData);

      setMensaje(
        "✅ ¡Gracias por participar en Consultalent! Hemos recibido tu información y podremos contactarte cuando iniciemos las pruebas de la plataforma.",
      );

      setFormData({
        empresa: "",
        nombre: "",
        cargo: "",
        whatsapp: "",
        correo: "",
        contratacionesMes: "",
        procesoActual: "",
        principalProblema: "",
        interes: "",
        aceptaDatos: false,
      });
    } catch (err) {
      console.error(err);

      setError(
        "❌ Ocurrió un error enviando la información. Por favor intenta nuevamente.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="formulario" className="py-28 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">
          Queremos conocer tu proceso actual
        </h2>

        <p className="text-center text-gray-600 mt-6">
          Ayúdanos a construir una solución realmente útil para las PYMES.
        </p>

        <form onSubmit={handleSubmit} className="mt-16 space-y-6">
          <input
            type="text"
            name="empresa"
            placeholder="Empresa"
            className="w-full border rounded-xl p-4"
            value={formData.empresa}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            className="w-full border rounded-xl p-4"
            value={formData.nombre}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="cargo"
            placeholder="Cargo"
            className="w-full border rounded-xl p-4"
            value={formData.cargo}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="whatsapp"
            placeholder="WhatsApp"
            className="w-full border rounded-xl p-4"
            value={formData.whatsapp}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="correo"
            placeholder="Correo electrónico"
            className="w-full border rounded-xl p-4"
            value={formData.correo}
            onChange={handleChange}
            required
          />

          <select
            name="contratacionesMes"
            className="w-full border rounded-xl p-4"
            value={formData.contratacionesMes}
            onChange={handleChange}
            required
          >
            <option value="">¿Cuántas contrataciones realiza al mes?</option>
            <option value="1-2">1-2</option>
            <option value="3-5">3-5</option>
            <option value="Más de 5">Más de 5</option>
          </select>

          <select
            name="procesoActual"
            className="w-full border rounded-xl p-4"
            value={formData.procesoActual}
            onChange={handleChange}
            required
          >
            <option value="">¿Cómo gestionas actualmente tus procesos?</option>
            <option value="WhatsApp">WhatsApp</option>
            <option value="Excel">Excel</option>
            <option value="Computrabajo">Computrabajo</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="Referidos">Referidos</option>
            <option value="Otro">Otro</option>
          </select>

          <select
            name="principalProblema"
            className="w-full border rounded-xl p-4"
            value={formData.principalProblema}
            onChange={handleChange}
            required
          >
            <option value="">Principal dificultad</option>
            <option value="Encontrar candidatos">Encontrar candidatos</option>
            <option value="Organizar la información">
              Organizar la información
            </option>
            <option value="Seguimiento a candidatos">
              Seguimiento a candidatos
            </option>
            <option value="Procesos demasiado lentos">
              Procesos demasiado lentos
            </option>
            <option value="Otro">Otro</option>
          </select>

          <select
            name="interes"
            className="w-full border rounded-xl p-4"
            value={formData.interes}
            onChange={handleChange}
            required
          >
            <option value="">¿Te interesaría probar la plataforma?</option>
            <option value="Sí">Sí</option>
            <option value="Tal vez">Tal vez</option>
            <option value="No">No</option>
          </select>

          <div className="bg-slate-50 border rounded-xl p-5">
            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                name="aceptaDatos"
                checked={formData.aceptaDatos}
                onChange={handleChange}
                className="mt-1"
              />

              <span className="text-sm text-gray-600 leading-relaxed">
                Autorizo a Consultalent para recolectar y tratar mis datos
                personales de acuerdo con la Ley 1581 de 2012 de Colombia,
                exclusivamente para fines relacionados con la validación de esta
                solución y futuras comunicaciones sobre el servicio.
              </span>
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              bg-blue-600
              hover:bg-blue-700
              text-white
              p-4
              rounded-xl
              font-semibold
              disabled:bg-gray-400
            "
          >
            {loading ? "Enviando..." : "Enviar información"}
          </button>

          {mensaje && (
            <div className="mt-8">
              <div
                className="
      bg-green-50
      border
      border-green-200
      rounded-3xl
      p-10
      text-center
      shadow-sm
    "
              >
                <CheckCircle className="mx-auto text-green-600" size={70} />

                <h3 className="mt-6 text-3xl font-bold text-slate-900">
                  ¡Gracias por participar!
                </h3>

                <p className="mt-5 text-gray-600 leading-8">
                  Tu información fue registrada correctamente.
                  <br />
                  <br />
                  Cuando iniciemos las pruebas de Consultalent, podremos
                  contactarte para mostrarte la plataforma y recibir tus
                  comentarios.
                </p>
              </div>
            </div>
          )}

          {error && (
            <div className="bg-red-50 border border-red-300 text-red-700 rounded-xl p-4">
              {error}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export default FormSection;
