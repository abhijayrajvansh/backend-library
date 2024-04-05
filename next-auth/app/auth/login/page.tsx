'use client';

import { useRouter } from "next/navigation";  
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const page = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/auth/register')
  }

  return (
    <div className="flex h-full flex-col justify-center items-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">

      <div className="space-y-5 bg-white p-10 rounded-lg text-center drop-shadow-lg">
        <h1 className="text-6xl font-semibold drop-shadow-lg">Sign In Auth 🔐</h1>
        <p className="text-gray-500">Welcome back!</p>
        <div>login form</div>

        <div className="flex items-center gap-3">
          <Button size={'lg'} variant={'outline'} className="w-full drop-shadow-md">
            <FcGoogle size={25}/>
          </Button>

          <Button size={'lg'} variant={'outline'} className="w-full drop-shadow-md">
            <FaGithub size={25}/>
          </Button>

        </div>

        <p className="hover:underline underline-offset-4 cursor-pointer" onClick={handleClick}>Don't have an account?</p>
      </div>

    </div>
  )
}

export default page;