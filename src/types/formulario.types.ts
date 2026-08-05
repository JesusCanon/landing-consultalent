// src/types/formulario.types.ts

export interface FormularioData {
  empresa: string;
  nit: string;
  nombre: string;
  cargo: string;
  whatsapp: string;
  correo: string;
  numeroEmpleados: string;
  contratacionesMes: string;
  comoAtraesTalento: string;
  comoAtraesTalentoOtro?: string;
  comoOrganizasSeleccion: string;
  comoOrganizasSeleccionOtro?: string;
  principalProblema: string;
  principalProblemaOtro?: string;
  interes: string;
  aceptaDatos: boolean;
}
