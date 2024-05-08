import LoginButton from "./auth/LoginButton";
import { Button } from "./ui/button";

const Home = () => {
  return (
    <main className="flex h-full flex-col justify-center items-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
    <div className="space-y-3 text-white text-center">

      <h1 className="text-6xl font-semibold drop-shadow-lg">Next Auth 🔐</h1>
      <p className="text-lg drop-shadow-lg">Implementation of Authentication and Third Party Login</p>

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