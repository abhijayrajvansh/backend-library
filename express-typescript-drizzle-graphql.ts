// Step 1: Project Setup

// 1. Initialize a new Node.js project
// mkdir express-ts-drizzle-graphql
// cd express-ts-drizzle-graphql
// npm init -y

// 2. Install dependencies
// npm install express apollo-server-express graphql pg drizzle-orm
// npm install -D typescript ts-node @types/express @types/node drizzle-kit

// 3. Initialize TypeScript configuration
// npx tsc --init

// 4. Create src folder and main file
// mkdir src
// touch src/index.ts

// Step 2: Basic Express Server Setup

// src/index.ts
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

const app = express();
const port = process.env.PORT || 3000;

// Database connection
const pool = new Pool({
  connectionString: 'postgresql://username:password@localhost:5432/your_database',
});

const db = drizzle(pool);

// GraphQL schema and resolvers (to be implemented)
const typeDefs = `
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello, World!',
  },
};

async function startApolloServer() {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app });
}

startApolloServer();

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  console.log(`GraphQL endpoint: http://localhost:${port}/graphql`);
});

// Step 3: Database Schema with Drizzle ORM

// Create a new file: src/schema.ts
// src/schema.ts
import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  createdAt: timestamp('created_at').defaultNow(),
});

// Step 4: Drizzle ORM Setup and Migrations

// Create a new file: drizzle.config.ts
// drizzle.config.ts
import type { Config } from 'drizzle-kit';

export default {
  schema: './src/schema.ts',
  out: './drizzle',
} satisfies Config;

// Run migration
// npx drizzle-kit generate:pg

// Step 5: GraphQL Schema and Resolvers

// Update src/index.ts with the following changes:

// Add these imports
import { users } from './schema';
			
import { eq } from 'drizzle-orm';

// Replace the existing typeDefs and resolvers with:
const typeDefs = `
  type User {
    id: Int!
    name: String!
    email: String!
    createdAt: String!
  }

  type Query {
    getUsers: [User!]!
    getUser(id: Int!): User
  }

  type Mutation {
    createUser(name: String!, email: String!): User!
    updateUser(id: Int!, name: String, email: String): User
    deleteUser(id: Int!): Boolean!
  }
`;

const resolvers = {
  Query: {
    getUsers: async () => {
      return await db.select().from(users);
    },
    getUser: async (_, { id }) => {
      const result = await db.select().from(users).where(eq(users.id, id));
      return result[0];
    },
  },
  Mutation: {
    createUser: async (_, { name, email }) => {
      const result = await db.insert(users).values({ name, email }).returning();
      return result[0];
    },
    updateUser: async (_, { id, name, email }) => {
      const result = await db
        .update(users)
        .set({ name, email })
        .where(eq(users.id, id))
        .returning();
      return result[0];
    },
    deleteUser: async (_, { id }) => {
      const result = await db.delete(users).where(eq(users.id, id));
      return result.count > 0;
    },
  },
};

// Update the ApolloServer initialization:
const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
  context: { db }
});

// Step 6: Running the Application

// 1. Compile TypeScript
// npx tsc

// 2. Run the server
// node dist/index.js
