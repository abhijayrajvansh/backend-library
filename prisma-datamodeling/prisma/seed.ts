import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.upsert({
    where: {
      email: "abhijay@test.com",
    },
    update: {},
    create: {
      email: "abhijay@test.com",
      name: "abhijay rajvansh",
      password: "hash-salted-password",
    },
  });

  console.log({ user });
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })