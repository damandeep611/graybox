import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { User } from "@/model/userModel"
import Link from "next/link"
import {hash} from 'bcryptjs'

import React from 'react'
import { redirect } from "next/navigation"
import { connectToDatabase } from "@/lib/dbconnect"

const Page = () => {
  const handleSignUp = async (FormData: FormData)=> {
    "use server"

      const name = FormData.get("name") as string | undefined;
      const email = FormData.get("email") as string | undefined;
      const password = FormData.get("password") as string | undefined;

      if(!email || !password || !name) 
        throw new Error("Please provide all fields")

      //connectin with database here 
      await connectToDatabase();
      const user = await User.findOne({email});

      if(user) throw new Error("user already exits")

      const hashedPassword = await hash(password, 10)
        //create new user 
      await User.create({
          name, 
          email,
          password: hashedPassword 
        })
        redirect("/login")
  }
  return (
    <div className="flex justify-center items-center h-dvh">
      <Card>
  <CardHeader>
    <CardTitle>SignUp</CardTitle>
  </CardHeader>
  <CardContent >
    <form action={handleSignUp} className="flex flex-col gap-4">
      <Input name="name" placeholder="name"/>
    <Input type="email" placeholder="Email" name="email"/>
    <Input type="password" placeholder="Password" name="password"/>
    <Button type="submit">Signup</Button>
    </form>
  </CardContent>
  <CardFooter className="flex flex-col gap-4">
    <span>OR</span>
    <form>
      <Button type="submit" variant="outline">Login with Google</Button>
    </form>

    <Link href="/login">Alredy have an Account ? Login</Link>
  </CardFooter>
</Card>

    </div>
  )
}

export default Page

