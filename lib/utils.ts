import { AsideItemProps } from "@/components/aside/aside-item"
import { TipoUsuario } from "@/types/usuario.type"
import { clsx, type ClassValue } from "clsx"
import { Flag, FlagIcon, Gamepad, Medal, Users, Volleyball } from "lucide-react"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function handleUserLinks(tipoUsuario: TipoUsuario) {
  
  const LINKS_BY_USER_TYPE = {
    [TipoUsuario.ADMIN]: [
      { url: '/admin/usuarios', Icon: Users, texto: 'Usuários' },
      { url: '/admin/modalidades', Icon: Medal, texto: 'Modalidades' },
      { url: '/admin/times', Icon: FlagIcon, texto: 'Times' },
      { url: '/admin/jogos', Icon: Volleyball, texto: 'Jogos' },
    ],
    [TipoUsuario.RESPONSAVEL]: [
      { url: '/responsavel/jogos', Icon: Gamepad, texto: 'Jogos' },
      { url: '/meus-times', Icon: Users, texto: 'Meus Times' },
      { url: '/times-intercurso', Icon: Flag, texto: 'Times' },
    ],
    [TipoUsuario.USUARIO]: [
      { url: '/', Icon: Gamepad, texto: 'Jogos' },
      { url: '/meus-times', Icon: Users, texto: 'Meus Times' },
    ],
  };

  return LINKS_BY_USER_TYPE[tipoUsuario]
}