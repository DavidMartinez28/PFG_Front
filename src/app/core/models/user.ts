export interface User {
  user_id: string;
  email: string;
  password: string;
  type: string;
  fecha_nacimiento: Date;
  name: string;
  descripcion: string;
  telefono: number;
  sexo: string;
}

export interface SignInResponse {
  token: string;
  expiresIn: number;
  _id: string;
}

export interface UserData {
  email: string;
  password: string;
  type: string;
  __v: number;
  _id: string;
}

export interface UserProfile {
  createdAt: Date;
  descripcion: string;
  fecha_nacimiento: Date;
  name: string;
  email: string;
  sexo: string;
  telefono: number;
  updatedAt: Date;
  __v: number;
  _id: string;
}

export interface UserResponse {
  user: UserData;
  profile: UserProfile;
}

export interface PacientePsicologo {
  _id: string;
  id_paciente: {
    _id: string;
    name: string;
    email: string;
    fecha_nacimiento: string;
    telefono: number;
    sexo: string;
    descripcion: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
  id_psicologo: string;
 
}

export interface PsicologoPaciente {
  _id: string;
  id_psicologo: {
    _id: string;
    name: string;
    email: string;
    fecha_nacimiento: string;
    telefono: number;
    sexo: string;
    descripcion: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
  id_paciente: string;
 
}

export interface Documentos {
   _id: string;
   id_psicologo: string;
   id_paciente: string;
   urlFile: string;
   nameFile: string;
   estado: string;
   createdAt: Date;
   updatedAt: Date;
   __v: number;
 
}

