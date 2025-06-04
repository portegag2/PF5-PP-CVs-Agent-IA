export interface DatosPersonales {
  nombre: string;
  rol_profesional: string;
  fecha_nacimiento: string;
  ciudad: string;
  telefono: string;
  email: string;
  foto?: string;
}

export interface ExperienciaLaboral {
  titulo: string;
  entidad: string;
  fecha: string;
  descripcion: string;
}

export interface Formacion {
  titulo: string;
  entidad: string;
  fecha: string;
  descripcion: string;
}

export interface HabilidadesTecnicas {
  'lenguaje programación': string;
  herramientas: string;
}

export interface Idioma {
  idioma: string;
  nivel: string;
}

export interface CV {
  datos_personales: DatosPersonales;
  perfil_profesional: string;
  experiencia_laboral: ExperienciaLaboral[];
  formacion: Formacion[];
  habilidades_tecnicas: HabilidadesTecnicas[];
  idiomas: Idioma[];
}
