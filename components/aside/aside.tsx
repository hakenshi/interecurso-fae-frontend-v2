import React from 'react'
import AsideItem, { AsideItemProps } from './aside-item'
import { Gamepad, LogIn } from 'lucide-react'
import { Usuario } from '@/types/usuario.type'


type AsideProps = {
  usuario: Usuario | null
  token: string | null
  links: AsideItemProps[] | undefined
}

export default function Aside({ usuario, token, links }: AsideProps) {
  return (
    <aside className='bg-zinc-600 text-white p-5'>
      {!usuario && !token && (
        <AsideItem Icon={LogIn} texto='Login' url='/login' />
      )}
      <nav className='flex-col-center h-[90%]'>
        {!usuario && !token ? (
          <AsideItem Icon={Gamepad} texto='Jogos' url='/' />
        ) :
          links?.map((link, i) => (
            <AsideItem Icon={link.Icon} texto={link.texto} url={link.url} key={i} />
          ))
        }
      </nav>
    </aside>
  )
}
