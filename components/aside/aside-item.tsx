import { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export type AsideItemProps = {
    Icon: LucideIcon
    texto: string
    url: string
}

export default function AsideItem({ Icon, texto, url }: AsideItemProps) {
    return (
        <Link href={url} className='inline-flex gap-2 items-center w-full p-2'>
            <Icon /> 
            {texto}
        </Link>
    )
}
