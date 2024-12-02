import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logoPadrao from "@/public/images/unifae-2021.png"
import FormInput from '@/components/FormInput'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue,SelectGroup } from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import { Cursos } from '@/types/curso.type'

export default async function CadastrarPage() {

    const cursos:Cursos[] = await fetch(`${process.env.NEXT_API_URL}/cursos`).then(response => response.ok ? response.json() : "Não foi possível fazer essa requisição.")

    

    return (
        <div className='max-w-3xl w-full min-h-96 rounded-md p-5 m-5 bg-white'>
            <Link href={"/"} className='flex-col-center gap-2'>
                <Image src={logoPadrao} alt='logo-unifae' width={350} height={300} />
                <span className='font-semibold text-unifae-green-1 text-2xl'>Intercurso</span>
            </Link>
            <form action="" className='flex-col-center'>
                <div className="grid md:grid-cols-2 grid-row-3 md:gap-x-5 place-items-center w-full">
                    <FormInput label='Nome' name='nome' placeholder='Insira seu nome completo' />
                    <FormInput label='Email' name='email' placeholder='email@sou.fae.br' />
                    <FormInput label='RA' name='ra' placeholder='99999-9' />
                    <div className='w-full m-4 grid gap-2'>
                        <Label className='text-md'>Curso</Label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Escolha seu curso" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {cursos.map(curso => (
                                        <SelectItem value={`${curso.id}`} key={curso.id}>{curso.nome_curso}</SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <FormInput label='Senha' name='senha' placeholder='●●●●●●●' />
                    <FormInput label='Confirmar Senha' name='confirmar-senha' placeholder='●●●●●●●' />
                </div>
                <div className='py-2 gap-2 flex-col-center'>
                    <p>
                        Já tem conta? <Link className='text-unifae-green-1 font-bold' href={"/login"}>
                            Clique Aqui
                        </Link>
                    </p>
                    <Button type='submit'>Entrar</Button>
                </div>
            </form >
        </div >
    )
}
