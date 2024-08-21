"use client";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Heading from "@/components/Heading";
import LoginForm from "@/components/account/LoginForm";

export default function Login() {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    if (res?.error) {
      setError(res.error as string);
    }
    console.log("res in login handle submit: " + res?.status);
    if (res?.ok) {
      return router.push("/");
    }
  };

  return (
    <section className="w-full h-screen flex items-center justify-center">
      <div className="p-4 w-[300px] md:ml-[100px] lg:w-[400px]">
        <Heading title="ShoeStore" />
        <LoginForm handleSubmit={handleSubmit} error={error} />
      </div>
    </section>
  );
}
