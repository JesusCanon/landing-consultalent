import type { FormularioData } from "../types/formulario.types";

const API_URL = import.meta.env.VITE_API_URL;

export const enviarFormulario = async (data: FormularioData) => {
  const formData = new URLSearchParams();

  formData.append("empresa", data.empresa);
  formData.append("nit", data.nit);
  formData.append("nombre", data.nombre);
  formData.append("cargo", data.cargo);
  formData.append("whatsapp", `'${data.whatsapp ? `+57 ${data.whatsapp}` : ""}`);
  formData.append("correo", data.correo);
  formData.append("numeroEmpleados", data.numeroEmpleados);
  formData.append("contratacionesMes", data.contratacionesMes);

  // Si seleccionó "Otro" en comoAtraesTalento
  const atraesTalentoFinal =
    data.comoAtraesTalento === "Otro" && data.comoAtraesTalentoOtro
      ? `Otro: ${data.comoAtraesTalentoOtro.trim()}`
      : data.comoAtraesTalento;

  // Si seleccionó "Otro" en comoOrganizasSeleccion
  const organizasSeleccionFinal =
    data.comoOrganizasSeleccion === "Otro" && data.comoOrganizasSeleccionOtro
      ? `Otro: ${data.comoOrganizasSeleccionOtro.trim()}`
      : data.comoOrganizasSeleccion;

  // Si seleccionó "Otro" en principalProblema
  const problemaFinal =
    data.principalProblema === "Otro" && data.principalProblemaOtro
      ? `Otro: ${data.principalProblemaOtro.trim()}`
      : data.principalProblema;

  formData.append("comoAtraesTalento", atraesTalentoFinal);
  formData.append("comoOrganizasSeleccion", organizasSeleccionFinal);
  formData.append("principalProblema", problemaFinal);
  formData.append("interes", data.interes);

  const response = await fetch(API_URL, {
    method: "POST",
    body: formData,
  });

  return response.text();
};
