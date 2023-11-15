import { createHTTPServer } from "@trpc/server/adapters/standalone";
import { z } from "zod";
import { db } from "./db";
import { publicProcedure, router } from "./trpc";

const appRouter = router({
  userList: publicProcedure.query(async () => {
    const users = await db.user.findMany();
    return users;
  }),
  userById: publicProcedure.input(z.string()).query(async (opts) => {
    const { input } = opts;
    const user = await db.user.findById(input);
    return user;
  }),
  userCreate: publicProcedure
    .input(z.object({ name: z.string() }))
    .mutation(async (opts) => {
      const { input } = opts;
      const user = await db.user.create(input);
      return user;
    }),
  signUp: publicProcedure
    .input(
      z.object({
        email: z.string(),
        password: z.string(),
      })
    )
    .mutation((opts) => {
      // context
      const username = opts.ctx.username;
      let email = opts.input.email;
      let password = opts.input.password;

      //   validations here
      //   do db stuff here

      let token = "1232131";
      return {
        token,
      };
    }),
});

// const todoInputType = z.object({
//   title: z.string(),
//   description: z.string(),
// });

// const appRouter = router({
//   createTodo: publicProcedure.input(todoInputType).mutation(async (opts) => {
//     const { input } = opts;
//     // do db stuff here
//     return {
//       id: "1",
//     };
//   }),
// });

export type AppRouter = typeof appRouter;
const server = createHTTPServer({
  router: appRouter,
  createContext(opts) {
    let authHeader = opts.req.headers("authorization");
    // jwt.verify
    return {
      username: "123",
    };
  },
});
server.listen(3000);
