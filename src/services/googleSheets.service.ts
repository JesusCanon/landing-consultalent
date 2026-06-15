import type { FormularioData } from "../types/formulario.types";

const API_URL =
  "https://script.google.com/macros/s/AKfycbztgaDi33F2kw4nZ5BWY2Upp_JvYPjT_hMybC4-pXdA9VPZS-0nl-eQ-0TlCqt4P8yI/exec";

export const enviarFormulario = async (data: FormularioData) => {
  const formData = new URLSearchParams();

  formData.append("empresa", data.empresa);
  formData.append("nombre", data.nombre);
  formData.append("cargo", data.cargo);
  formData.append("whatsapp", data.whatsapp);
  formData.append("correo", data.correo);
  formData.append("contratacionesMes", data.contratacionesMes);
  formData.append("procesoActual", data.procesoActual);
  formData.append("principalProblema", data.principalProblema);
  formData.append("interes", data.interes);

  const response = await fetch(API_URL, {
    method: "POST",
    body: formData,
  });

  return response.text();
};
