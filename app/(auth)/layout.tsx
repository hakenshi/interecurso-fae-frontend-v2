import React, { ReactNode } from 'react'

export default function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <main className='bg-zinc-600 w-screen h-screen flex-center'>
            {children}
        </main>
    )
}
