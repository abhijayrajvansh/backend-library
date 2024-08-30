'use client'

import React from 'react'
import { Button } from './ui/button'
import { handleGoogleSignIn } from '@/lib/auth/googleSignInServerAction';
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-3xl font-bold">Login Page</h1>
        <Button size={'custom'} onClick={() => handleGoogleSignIn()} className='bg-blue-500 hover:bg-blue-400 py-2 px-3 gap-2 rounded'>
          <FcGoogle className='text-3xl p-1 bg-white rounded'/>
          Sign In with Google</Button>
      </div>
    </div>
  )
}

export default Login