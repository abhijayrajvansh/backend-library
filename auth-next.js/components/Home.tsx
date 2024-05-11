import Watermark from "./Watermark";

const Home = () => {
  return (
    <main className="flex h-full flex-col justify-center items-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
    <div className="space-y-5 text-white text-center">

      <h1 className="text-6xl font-semibold drop-shadow-lg mb-3">User Authentication 🔐</h1>
      <div className="text-2xl drop-shadow-lg">Implementation of <span className="bg-green-500/50 font-semibold px-2 py-1 drop-shadow-xl rounded-lg">NextAuth.js</span> with <span className="bg-black/20 font-semibold px-2 py-1 drop-shadow-xl rounded-lg">Next.js</span></div>

      <Watermark />

    </div>
  </main>
  )
}

export default Home;