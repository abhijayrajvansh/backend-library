import prisma from "@/lib/prisma";

const page = async () => {
  const user = await prisma.user.findFirst({
    where: {
      name: "abhijay rajvansh",
    },
  });

  return (
    <>
      <div className="flex flex-col text-center text-white text-3xl font-light">
        <div className=" text-7xl font-light mb-12 my-5">
          Dashboard
        </div>
        <p>welcome, {user?.email}</p>
        <p className="text-base text-slate-300 mt-10">&apos;user.name&apos; = abhijay rajvansh, received from the database.</p>
      </div>
    </>
  );
};

export default page;
