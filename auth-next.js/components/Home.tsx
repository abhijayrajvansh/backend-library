import Link from "next/link";
import LoginButton from "./auth/LoginButton";
import { Button } from "./ui/button";

const Home = () => {
  return (
    <main className="flex h-full flex-col justify-center items-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
    <div className="space-y-5 text-white text-center">

      <h1 className="text-6xl font-semibold drop-shadow-lg mb-3">User Authentication 🔐</h1>
      <span className="text-lg drop-shadow-lg">Implementation of NextAuth.js with Next.js</span>
      <span className="text-lg drop-shadow-xl">&nbsp;by&nbsp;
        <Link className="hover:underline underline-offset-4" href={'https://abhijayrajvansh.com'} target="_blank" rel="noopener noreferrer">
          Abhijay Rajvansh.
        </Link>
      </span>

      <div>
        <LoginButton>
          <Button variant={'secondary'} size={'lg'}>Sign in</Button>
        </LoginButton>
      </div>
      
    </div>
  </main>
  )
}

export default Home;