import React from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input';

type FormInput = {
    label: string;
    name: string;
    placeholder?: string;
    mask?: string
    inputType?: string
}

export default function FormInput({label, name, placeholder, mask, inputType = "text"}:FormInput) {
  return (
    <div className='w-full my-2 md:m-4 grid gap-0 md:gap-2'>
        <Label className='text-md' htmlFor={name}>{label}</Label>
        <Input type={inputType} name={name} id={name} placeholder={placeholder} />
    </div>
  )
}
