import Link from "next/link";

const Home = () => {
  return (
    <div className="wrapper justify-center text-white pl-28">
      <p className="text-6xl font-medium">Prisma with</p>
      <p className="text-6xl font-medium">Next.js and PostgreSQL</p>
      <p className="text-xl text-slate-400 mt-5">
        by{" "}
        <Link target="_blank" rel="noreferrer noopener"
          className="hover:underline underline-offset-8"
          href={"https://abhijayrajvansh.com"}
        >
          Abhijay Rajvansh.
        </Link>
      </p>

      <Link className="mt-3 text-blue-400 underline underline-offset-8" href={'/dashboard'}>go to dashboard {'->'}</Link>
    </div>
  )
}

export default Home;