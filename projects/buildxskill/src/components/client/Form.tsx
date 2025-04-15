"use client"

import { toast } from "sonner";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { credentialsLogin } from "@/actions/login";

const LoginForm = ()=> {
  return(
    <form action={async (formData) => {
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;

      if (!email || !password) {
        toast.error("Please provide all fields");
        return;
      }
      const toastId = toast.loading("Logging in");

      const error = await credentialsLogin(email, password);

      if (!error) {
        toast.success("Login successful", {
          id: toastId,
        });
      } else {
        toast.error(error, {
          id: toastId,
        });
      }
    }} className="flex flex-col gap-4">
    <Input type="email" placeholder="Email" name="email"/>
    <Input type="password" placeholder="Password" name="password"/>
    <Button type="submit">Login</Button>
    </form>
  )
}

export {LoginForm}