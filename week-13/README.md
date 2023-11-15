<h1 style="color:yellow"><center>SQL and PRISMA ORM 🧾</center></h1>

## Table Of Contents

- []()

**[⬆ Back to Top](#table-of-contents)**

- SQL databases
- Prisma ORM

- Types of DBs

  1. SQL

     - Strict schemas
     - Very hard to change schemas, involve migrations

     - eg. users table
       first_name | last_name | \_id | password
       address table
       user_id | address | city | state | country

  2. NoSQL

     - Schemaless
     - Faster to produce apps

     - eg.
       \_id: Object("kbjkj2213213213131231")
       username: "rudra"
       password: "123456"
       address: Object
       address1: "232 plot no."
       City: "BBSR"
       State: "Odisha"
       Country: "India"

- SQL databases Relationships

- Connecting to Postgres

  - Username,password,URL
  - Databases
  - Tables
  - postgres://[username]:[password]@[host]/[database_name]
  - ElephantSQL free 20mb of data

- Basic types of queries

  1. insert
  2. Update
  3. Delete
  4. Get

- Create tables

```sql
CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
);
```

- Things to learn
  1. SERIAL PRIMARY KEY
  2. VARCHAR(255)
  3. UNIQUE
  4. NOTNULL

Another Example: -

```sql
CREATE TABLE todos(
  id SERIAL PRIMARY KEY,
 title TEXT NOT NULL,
 description TEXT,
 user_id INTEGER REFERENCES users(id),
 done BOOLEAN DEFAULT FALSE
);
```

- Things to learn

  1. REFERENCES
  2. DEFAULT

- Inserts

```sql
INSERT INTO todos (title,description, user_id,done)
VALUES ('Buy groceries', "Milk, bread, and eggs",1, FALSE);
```

- Gets

```sql
SELECT * FROM todos WHERE user_id = desired_user_id;
```

- Updates

```sql
UPDATE todos SET done = TRUE WHERE id = 1;
```

- Deletes

```sql
DELETE FROM todos WHERE id = specific_todo_id;
```

- Drop

```sql
DROP TABLE IF EXISTS todos;
```

- Advanced

  - Foreign Keys
  - Joins (types of join)
  - Indexes

- types of joins

  - FULL JOIN-> Should be present in either tables
  - INNER JOIN-> Should be present in both the tables
  - LEFT JOIN-> Should have all entries from left table
  - RIGHT JOIN-> Should have all entries from right table

- By default if you write JOIN it is default taken as INNER JOIN

- Indexes

  1. MAke query on a certain column faster
  2. In our case we can add an index like below
  3. Since we're uisng Postgres, it doesn't matter since the foreign key relation creates an index by default

  ```sql
  CREATE INDEX idx_todo_user_id ON todos(user_id);
  ```

Problems ?

- You have to write raw sql queries
- Migrations are hard
- you dont get the best types

Solution - ORMs

- What is an ORM?

  > Prisma is a next-gen Node.js and TypeScript ORM

- Prisma:- It consists of following parts

  - Prisma Client:- Auto-generated and type-safe query builder for Node.js & Typescript
  - Prisma Migrate:- Migration tool to easily evolve your database schema from prototyping to production
  - Prisma Studio:- GUI to view and edit data in your database.

- Automated Migrations?

  > Db changes often, you add more columns, add new tables, you have to do MIGRATIONS to keep syncing the DB state.
  > Pre-ORM days - Manually update the prod DB, dev DB
  > There was no log of the changes made to the DB

- 3 steps
  1. Intialize prisma
  2. Define your schema
  3. create migrations and update client

Things to learn

- @id @default(autoincreament())
- @unique
- default(false)
- @relation(fields: [authorId],references:[id])

- Learn more about indexing
