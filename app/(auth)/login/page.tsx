import Image from 'next/image'
import React from 'react'
import FormInput from '@/components/FormInput'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import logos from '@/public'
import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export default function LoginPage() {

    const handleLogin = async (form: FormData) => {
        'use server'
        const response = await fetch(`${process.env.NEXT_API_URL}/login`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                accept: "application/json"
            },
            body: JSON.stringify({
                email: form.get("email") as string,
                senha: form.get("senha") as string,
            })
        })

        const { usuario, token } = await response.json()

        
        const useCookies = await cookies()
        
        if (usuario && token) {
            // console.log(usuario, token)
            useCookies.set({
                name: "auth-user",
                value: JSON.stringify({
                    token,
                    ...usuario,
                }),
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                maxAge: 86400,
                sameSite: "strict"
            })
            
            
            if (useCookies.get('auth-user')?.value) {
                console.log(useCookies.get('auth-user')?.value)
                revalidatePath("/login")
                redirect("/")
            }

        }
    }

    return (
        <div className='max-w-3xl w-full rounded-md m-5 md:m-0 flex flex-col justify-evenly bg-white'>
            <form action={handleLogin} className='flex flex-col justify-evenly items-center m-2 px-3 py-5 min-h-[60vh]'>
                <Link href={"/"} className='flex-col-center gap-2'>
                    <Image src={logos.logoPadrao} alt='logo-unifae' width={350} height={300} />
                    <span className='font-semibold text-unifae-green-1 text-2xl'>Intercurso</span>
                </Link>
                <div className='w-full'>
                    <FormInput label='Email' name='email' placeholder='email@sou.fae.br' />
                    <FormInput inputType='password' label='Senha' name='senha' placeholder='●●●●●●●' />
                </div>
                <div className='gap-2 flex-col-center w-full'>
                    <p>
                        Esqueceu sua senha? <Link className='text-unifae-green-1 font-bold' href={"/redefinir-senha"}>
                            Clique Aqui
                        </Link>
                    </p>
                    <Button type='submit'>Entrar</Button>
                    <p>
                        Ainda não tem conta? <Link className='text-unifae-green-1 font-bold' href={"/cadastrar"}>
                            Clique Aqui
                        </Link>
                    </p>
                </div>
            </form>
        </div>
    )
}
