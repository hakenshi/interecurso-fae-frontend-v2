import { Cursos } from "./curso.type"

export enum TipoUsuario {
    ADMIN = '1',
    RESPONSAVEL = '2',
    USUARIO = '3'
}

export type Usuario = {
    id: number
    nome: string
    email: string
    ra: string
    tipo_usuario: TipoUsuario,
    telefone: string
    data_de_nascimento: string
    bio: string
    foto_perfil: string
    curso: Cursos
}