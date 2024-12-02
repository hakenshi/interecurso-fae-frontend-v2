import Aside from "@/components/aside/aside";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { handleUserLinks } from "@/lib/utils";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home() {

  const { usuario, token } = await auth()

  let links

  if(usuario){
    links = handleUserLinks(usuario?.tipo_usuario)
  }

  const logout = async () => {
    'use server'
    const response = await fetch(`${process.env.NEXT_API_URL}/logout`, {
      method: "post",
      headers: {
        "Content-type": "application/json",
        accept: "application/json",
        "Authorization": `Bearer ${token}`
      }
    })

    if (response.status === 204) {
      (await cookies()).delete('auth-user')
      revalidatePath("/")
      redirect("/login")
    }

  }

  return (
    <div className="layout">
      
      <Aside token={token} usuario={usuario} links={links} />
      <Navbar token={token} usuario={usuario} />

      <main>
        <div className="flex-col-center m-5 gap-5">
          {usuario !== null ? (
            <>
              <h1>{usuario?.nome}</h1>
              <form action={logout}>
                <Button type="submit">Sair</Button>
              </form>
            </>
          ) : <Link href="/login">Login</Link>}
        </div>
      </main>
    </div>
  );
}
