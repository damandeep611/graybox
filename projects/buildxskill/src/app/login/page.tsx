
import { auth, signIn } from "@/auth"
import { LoginForm } from "@/components/client/Form"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,

  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import Link from "next/link"
import { redirect } from "next/navigation"


const Page = async () => {
  const session = await auth();

  if(session?.user) redirect("/")

  
  return (
    <div className="flex justify-center items-center h-dvh">
      <Card>
  <CardHeader>
    <CardTitle>Login</CardTitle>
  </CardHeader>
  <CardContent >
    <LoginForm/>
  </CardContent>
  <CardFooter className="flex flex-col gap-4">
    <span>OR</span>
    <form action={async ()=> {
      "use server"
      await signIn("google")
    }}>
      <Button type="submit" variant="outline">Login with Google</Button>
    </form>

    <Link href="/signup">Not  have an Account ? SignUp</Link>
  </CardFooter>
</Card>

    </div>
  )
}

export default Page
