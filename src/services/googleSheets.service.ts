import type { FormularioData } from "../types/formulario.types";

const API_URL = import.meta.env.VITE_API_URL;

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
