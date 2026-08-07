import { useState } from "react";
import type { FormularioData } from "../types/formulario.types";
import { enviarFormulario } from "../services/googleSheets.service";
import { CheckCircle, Info } from "lucide-react";

// Lista de dominios públicos prohibidos para exigir correo corporativo
const PUBLIC_EMAIL_DOMAINS = [
  "gmail.com",
  "gmail.es",
  "hotmail.com",
  "hotmail.es",
  "outlook.com",
  "outlook.es",
  "yahoo.com",
  "yahoo.es",
  "live.com",
  "live.cl",
  "icloud.com",
  "msn.com",
  "latinmail.com",
  "aol.com",
  "proton.me",
  "protonmail.com",
  "zoho.com",
];

function FormSection() {
  const [formData, setFormData] = useState<FormularioData>({
    empresa: "",
    nit: "",
    nombre: "",
    cargo: "",
    whatsapp: "",
    correo: "",
    numeroEmpleados: "",
    contratacionesMes: "",
    comoAtraesTalento: "",
    comoOrganizasSeleccion: "",
    principalProblema: "",
    principalProblemaOtro: "",
    interes: "",
    aceptaDatos: false,
  });

  const [loading, setLoading] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");

  const isCorporateEmail = (email: string): boolean => {
    if (!email || !email.includes("@")) return false;
    const parts = email.split("@");
    if (parts.length !== 2) return false;
    const domain = parts[1].toLowerCase().trim();
    return !PUBLIC_EMAIL_DOMAINS.includes(domain);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value, type } = e.target;

    if (name === "nit") {
      // Remover puntos y espacios automáticamente si el usuario los escribe
      const sanitizedNit = value.replace(/\./g, "").replace(/\s/g, "");
      setFormData((prev) => ({ ...prev, nit: sanitizedNit }));
      return;
    }

    if (name === "whatsapp") {
      // Permitir únicamente números y hasta 10 dígitos
      const sanitizedPhone = value.replace(/\D/g, "").slice(0, 10);
      setFormData((prev) => ({ ...prev, whatsapp: sanitizedPhone }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setMensaje("");
    setError("");

    // Validar Correo Corporativo
    if (!isCorporateEmail(formData.correo)) {
      setError(
        "Por favor ingresa un correo electrónico corporativo (ej: nombre@tuempresa.com). No se permiten dominios públicos como Gmail, Hotmail u Outlook.",
      );
      return;
    }

    // Validar NIT
    if (!formData.nit || formData.nit.includes(".")) {
      setError(
        "El NIT no debe contener puntos. Debe ingresarse con guión y dígito de verificación (ej: 900123456-1).",
      );
      return;
    }

    // Validar WhatsApp (exactamente 10 dígitos)
    if (!formData.whatsapp || formData.whatsapp.length !== 10) {
      setError(
        "El número de WhatsApp debe contener exactamente 10 dígitos numéricos (ej: 3101002030).",
      );
      return;
    }

    // Validar "Otro" en atracción de talento
    if (
      formData.comoAtraesTalento === "Otro" &&
      !formData.comoAtraesTalentoOtro?.trim()
    ) {
      setError(
        "Por favor especifica cómo atraes el talento que necesitas en tu Organización.",
      );
      return;
    }

    // Validar "Otro" en organización del proceso de selección
    if (
      formData.comoOrganizasSeleccion === "Otro" &&
      !formData.comoOrganizasSeleccionOtro?.trim()
    ) {
      setError(
        "Por favor especifica cómo organizas tu proceso de selección actualmente.",
      );
      return;
    }

    // Validar "Otro" en principal dificultad
    if (
      formData.principalProblema === "Otro" &&
      !formData.principalProblemaOtro?.trim()
    ) {
      setError(
        "Por favor especifica cuál es la principal dificultad con el talento humano en tu Organización.",
      );
      return;
    }

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
        "✅ ¡Gracias por registrar a tu Organización! Hemos recibido tu información correctamente. En un par de días te haremos llegar tus credenciales de acceso para probar la versión BETA de Consultalent sin costo.",
      );

      setFormData({
        empresa: "",
        nit: "",
        nombre: "",
        cargo: "",
        whatsapp: "",
        correo: "",
        numeroEmpleados: "",
        contratacionesMes: "",
        comoAtraesTalento: "",
        comoAtraesTalentoOtro: "",
        comoOrganizasSeleccion: "",
        comoOrganizasSeleccionOtro: "",
        principalProblema: "",
        principalProblemaOtro: "",
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
    <section id="formulario" className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Acceso Prioritario BETA
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-slate-900">
            Sé parte de las primeras Organizaciones en probar Consultalent
          </h2>

          <p className="text-gray-600 mt-4 leading-relaxed max-w-2xl mx-auto text-base sm:text-lg">
            La plataforma sale al mercado en un par de días. Déjanos tus datos e información clave para hacerte llegar tus credenciales de acceso para probar la versión BETA de forma 100% gratuita.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-12 space-y-6 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-lg"
        >
          {/* Nombre de la Empresa */}
          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-2">
              Nombre de la Organización *
            </label>
            <input
              type="text"
              name="empresa"
              placeholder="Ej: Innova Soluciones S.A.S."
              className="w-full border border-slate-300 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              value={formData.empresa}
              onChange={handleChange}
              required
            />
          </div>

          {/* NIT */}
          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-2">
              NIT de la Organización *
            </label>
            <input
              type="text"
              name="nit"
              placeholder="Ej: 900123456-1"
              className="w-full border border-slate-300 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              value={formData.nit}
              onChange={handleChange}
              required
            />
            <p className="text-xs text-slate-500 mt-1.5 flex items-center gap-1">
              <Info size={14} className="text-blue-500 flex-shrink-0" />
              <span>
                Ingresa el NIT sin puntos, con guión y código de verificación, sin espacios (ej: 900123456-1).
              </span>
            </p>
          </div>

          {/* Nombre y Cargo en Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-2">
                Nombre completo del contacto *
              </label>
              <input
                type="text"
                name="nombre"
                placeholder="Ej: Carlos Pérez"
                className="w-full border border-slate-300 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-2">
                Cargo en la Organización *
              </label>
              <input
                type="text"
                name="cargo"
                placeholder="Ej: Gerente de Gestión Humana / Director"
                className="w-full border border-slate-300 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                value={formData.cargo}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* WhatsApp y Correo Corporativo en Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-2">
                WhatsApp / Teléfono *
              </label>
              <div className="relative flex items-center">
                <div className="absolute left-0 top-0 bottom-0 px-3.5 bg-slate-100 border-r border-slate-300 rounded-l-xl flex items-center gap-1 text-slate-700 font-semibold text-sm select-none">
                  <span>🇨🇴</span>
                  <span>+57</span>
                </div>
                <input
                  type="tel"
                  name="whatsapp"
                  placeholder="3101002030"
                  maxLength={10}
                  className="w-full border border-slate-300 rounded-xl p-4 pl-24 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  required
                />
              </div>
              <p className="text-xs text-slate-500 mt-1.5">
                Ingresa únicamente los 10 dígitos numéricos de tu móvil (ej: 3101002030).
              </p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-2">
                Correo electrónico corporativo *
              </label>
              <input
                type="email"
                name="correo"
                placeholder="Ej: cperez@tuempresa.com"
                className="w-full border border-slate-300 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                value={formData.correo}
                onChange={handleChange}
                required
              />
              <p className="text-xs text-slate-500 mt-1.5">
                Por políticas de validación, no se permiten correos personales (Gmail, Hotmail, etc.).
              </p>
            </div>
          </div>

          {/* Número de empleados y Contrataciones al mes en Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-2">
                Número de empleados de la Organización *
              </label>
              <select
                name="numeroEmpleados"
                className="w-full border border-slate-300 rounded-xl p-4 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                value={formData.numeroEmpleados}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona el rango de empleados</option>
                <option value="1 a 10">1 a 10</option>
                <option value="11 a 30">11 a 30</option>
                <option value="31 a 50">31 a 50</option>
                <option value="50 a 100">50 a 100</option>
                <option value="101 a 200">101 a 200</option>
                <option value="200 a 500">200 a 500</option>
                <option value="+500">+500</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-2">
                ¿Cuántas contrataciones realizan al mes? *
              </label>
              <select
                name="contratacionesMes"
                className="w-full border border-slate-300 rounded-xl p-4 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                value={formData.contratacionesMes}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona una opción</option>
                <option value="1 a 5">1 a 5</option>
                <option value="6 a 10">6 a 10</option>
                <option value="11 a 15">11 a 15</option>
                <option value="+16">+16</option>
              </select>
            </div>
          </div>

          {/* ¿Cómo atraes el talento que necesitas? */}
          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-2">
              ¿Cómo atraes el talento que necesitas actualmente? *
            </label>
            <select
              name="comoAtraesTalento"
              className="w-full border border-slate-300 rounded-xl p-4 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              value={formData.comoAtraesTalento}
              onChange={handleChange}
              required
            >
              <option value="">Selecciona una opción</option>
              <option value="Portales de empleo (Computrabajo, elempleo, etc.)">
                Portales de empleo (Computrabajo, elempleo, etc.)
              </option>
              <option value="Redes sociales (LinkedIn, Instagram, etc.)">
                Redes sociales (LinkedIn, Instagram, etc.)
              </option>
              <option value="Referidos y recomendaciones internas">
                Referidos y recomendaciones internas
              </option>
              <option value="Agencia de empleo o Cazatalentos (Headhunter)">
                Agencia de empleo o Cazatalentos (Headhunter)
              </option>
              <option value="Otro">Otro</option>
            </select>
          </div>

          {/* Campo condicional si seleccionó 'Otro' en atracción de talento */}
          {formData.comoAtraesTalento === "Otro" && (
            <div className="bg-blue-50/70 border border-blue-200 p-4 rounded-xl">
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-semibold text-slate-800">
                  Especifica cómo atraes el talento *
                </label>
                <span className="text-xs text-slate-500">
                  {(formData.comoAtraesTalentoOtro || "").length} / 250 caract.
                </span>
              </div>
              <textarea
                name="comoAtraesTalentoOtro"
                rows={2}
                maxLength={250}
                placeholder="Escribe brevemente las herramientas o canales que utilizas para atraer talento..."
                className="w-full border border-slate-300 rounded-xl p-3 bg-white focus:ring-2 focus:ring-blue-500 outline-none transition text-sm"
                value={formData.comoAtraesTalentoOtro || ""}
                onChange={handleChange}
                required
              />
            </div>
          )}

          {/* ¿Cómo organizas tu proceso de selección? */}
          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-2">
              ¿Cómo organizas tu proceso de selección? *
            </label>
            <select
              name="comoOrganizasSeleccion"
              className="w-full border border-slate-300 rounded-xl p-4 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              value={formData.comoOrganizasSeleccion}
              onChange={handleChange}
              required
            >
              <option value="">Selecciona una opción</option>
              <option value="Plantillas de Excel o Word">
                Plantillas de Excel o Word
              </option>
              <option value="Hojas de vida en correo electrónico o impresos">
                Hojas de vida en correo electrónico o impresos
              </option>
              <option value="Herramientas digitales o Software ATS">
                Herramientas digitales o Software ATS
              </option>
              <option value="Mensajería instantánea (WhatsApp/Telegram)">
                Mensajería instantánea (WhatsApp/Telegram)
              </option>
              <option value="Otro">Otro</option>
            </select>
          </div>

          {/* Campo condicional si seleccionó 'Otro' en organización de selección */}
          {formData.comoOrganizasSeleccion === "Otro" && (
            <div className="bg-blue-50/70 border border-blue-200 p-4 rounded-xl">
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-semibold text-slate-800">
                  Especifica cómo organizas tu proceso *
                </label>
                <span className="text-xs text-slate-500">
                  {(formData.comoOrganizasSeleccionOtro || "").length} / 250 caract.
                </span>
              </div>
              <textarea
                name="comoOrganizasSeleccionOtro"
                rows={2}
                maxLength={250}
                placeholder="Escribe brevemente cómo organizas y llevas el seguimiento de tus candidatos..."
                className="w-full border border-slate-300 rounded-xl p-3 bg-white focus:ring-2 focus:ring-blue-500 outline-none transition text-sm"
                value={formData.comoOrganizasSeleccionOtro || ""}
                onChange={handleChange}
                required
              />
            </div>
          )}

          {/* Principal dificultad con el talento humano */}
          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-2">
              Principal dificultad con el talento humano *
            </label>
            <select
              name="principalProblema"
              className="w-full border border-slate-300 rounded-xl p-4 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              value={formData.principalProblema}
              onChange={handleChange}
              required
            >
              <option value="">Selecciona la principal dificultad</option>
              <option value="Atraer candidatos cualificados a las vacantes">
                Atraer candidatos cualificados a las vacantes
              </option>
              <option value="Organizar y centralizar la información de los candidatos">
                Organizar y centralizar la información de los candidatos
              </option>
              <option value="Filtrar candidatos ágilmente (hacer match con vacante)">
                Filtrar candidatos ágilmente (hacer match con vacante)
              </option>
              <option value="Alta rotación de personal / Falta de retención">
                Alta rotación de personal / Falta de retención
              </option>
              <option value="Otro">Otro</option>
            </select>
          </div>

          {/* Campo condicional si seleccionó 'Otro' en dificultad principal */}
          {formData.principalProblema === "Otro" && (
            <div className="bg-blue-50/70 border border-blue-200 p-4 rounded-xl">
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-semibold text-slate-800">
                  Especifica la dificultad principal *
                </label>
                <span className="text-xs text-slate-500">
                  {(formData.principalProblemaOtro || "").length} / 250 caract.
                </span>
              </div>
              <textarea
                name="principalProblemaOtro"
                rows={2}
                maxLength={250}
                placeholder="Escribe aquí los detalles sobre la dificultad que experimenta tu Organización..."
                className="w-full border border-slate-300 rounded-xl p-3 bg-white focus:ring-2 focus:ring-blue-500 outline-none transition text-sm"
                value={formData.principalProblemaOtro || ""}
                onChange={handleChange}
                required
              />
            </div>
          )}

          {/* Interés en probar la plataforma */}
          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-2">
              ¿Te interesaría ser de los primeros en probar la plataforma en versión BETA sin ningún valor? *
            </label>
            <select
              name="interes"
              className="w-full border border-slate-300 rounded-xl p-4 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              value={formData.interes}
              onChange={handleChange}
              required
            >
              <option value="">Selecciona una opción</option>
              <option value="Sí, quiero mis credenciales de acceso gratuito BETA">
                Sí, quiero mis credenciales de acceso gratuito BETA
              </option>
              <option value="Tal vez">Tal vez</option>
              <option value="No por el momento">No por el momento</option>
            </select>
          </div>

          {/* Consentimiento de datos personales */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="aceptaDatos"
                checked={formData.aceptaDatos}
                onChange={handleChange}
                className="mt-1 h-5 w-5 text-blue-600 rounded focus:ring-blue-500 border-slate-300"
              />
              <span className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Autorizo de manera expresa a Consultalent para recolectar y tratar mis datos personales de acuerdo con la Ley 1581 de 2012 de Colombia, exclusivamente para la asignación de credenciales BETA, la validación de la solución y futuras comunicaciones corporativas. Asimismo, acepto y declaro conocer que Consultalent se reserva el derecho de admisión para la selección de los participantes de la prueba BETA.
              </span>
            </label>
          </div>

          {/* Botón enviar */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-xl font-bold text-lg shadow-lg shadow-blue-600/30 transition duration-200 disabled:bg-gray-400 cursor-pointer"
          >
            {loading ? "Procesando registro..." : "Solicitar credenciales BETA gratis"}
          </button>

          {/* Alerta de éxito */}
          {mensaje && (
            <div className="mt-8 bg-emerald-50 border border-emerald-200 rounded-3xl p-8 sm:p-10 text-center shadow-sm">
              <CheckCircle className="mx-auto text-emerald-600" size={60} />
              <h3 className="mt-4 text-2xl sm:text-3xl font-bold text-slate-900">
                ¡Gracias por registrar tu Organización!
              </h3>
              <p className="mt-4 text-gray-700 leading-relaxed text-base sm:text-lg">
                Tu información fue recibida de manera exitosa.
                <br />
                <br />
                En un par de días iniciaremos el despliegue de la versión BETA y te haremos llegar tus credenciales para que pruebes la plataforma sin ningún costo.
              </p>
            </div>
          )}

          {/* Alerta de error */}
          {error && (
            <div className="bg-rose-50 border border-rose-300 text-rose-700 rounded-xl p-4 text-sm font-medium">
              {error}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export default FormSection;
