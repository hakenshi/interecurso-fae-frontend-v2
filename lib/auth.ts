'use server'

import { Usuario } from "@/types/usuario.type";
import { cookies } from "next/headers";

type AuthUser = { usuario: Usuario; token: string }

export async function auth() {

    const authUserCookie = (await cookies()).get("auth-user")

    if (authUserCookie && authUserCookie.value) {
        const parsedData: AuthUser = JSON.parse(authUserCookie.value)

        return {
            usuario: parsedData.usuario,
            token: parsedData.token
        }

    }
    return {
        usuario: null,
        token: null
    }
}