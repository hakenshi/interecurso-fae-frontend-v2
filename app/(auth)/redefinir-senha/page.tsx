import FormInput from '@/components/FormInput'
import { Button } from '@/components/ui/button'
import logos from '@/public'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function RedefinirSenhaPage() {
  return (
    <div className='max-w-3xl w-full rounded-md m-5 md:m-0 flex flex-col justify-evenly bg-white'>
      <form className='flex flex-col justify-evenly items-center m-2 px-3 py-5 min-h-[60vh]'>
        <Link href={"/"} className='flex-col-center gap-2'>
          <Image src={logos.logoPadrao} alt='logo-unifae' width={350} height={300} />
          <span className='font-semibold text-unifae-green-1 text-2xl'>Intercurso</span>
        </Link>
        <div className='w-full'>
          <FormInput label='Email' name='email' placeholder='email@sou.fae.br' />
        </div>
        <div className='gap-2 flex-col-center w-full'>
          <p>
            Lembrou sua senha? <Link className='text-unifae-green-1 font-bold' href={"/login"}>
              Faça Login
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
    </div>)
}
