import logos from '@/public'
import { Usuario } from '@/types/usuario.type'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Bell } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

type NavbarProps = {
    usuario: Usuario | null
    token: string | null
}

export default function Navbar({ usuario, token }: NavbarProps) {
    return (
        <header className='bg-unifae-green-1 text-white p-5 shadow-lg'>
            <nav className='flex justify-between items-center'>
                <Image width={120} alt='unifae-logo' src={logos.logoBranca} />
                {token && <div className='flex items-center gap-2'>
                    <Bell />
                    <Avatar>
                        <AvatarImage src={usuario?.foto_perfil} />
                        <AvatarFallback className='bg-red-600'>
                           <Image src={logos.blankProfilePicture} alt='foto de perfil do usuário' />
                        </AvatarFallback>
                    </Avatar>
                </div>}
            </nav>
        </header>
    )
}
