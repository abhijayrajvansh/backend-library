import { db } from "@/database";
import { users } from "@/database/schema";
import { exit } from "process";

async function seed() {
  try {
    await db.insert(users).values({
      name: "bobby",
      email: "bob@email.com",
      role: 'ADMIN'
    });
  } catch (error) {
    console.error("caught error while seeding db:", error);
  }
}

seed()
  .then(() => {console.log('\n> db seeded successfully! 🌱')})
  .finally(exit)