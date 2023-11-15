import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../server";

const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3000",
      async headers() {
        return {
          Authorization: "Bearer 1qwe",
        };
      },
    }),
  ],
});

async function main() {
  /**
   * Inferring types
   */
  const users = await trpc.userList.query();
  console.log("Users:", users);

  const createdUser = await trpc.userCreate.mutate({ name: "sachinraja" });
  console.log("Created user:", createdUser);

  const user = await trpc.userById.query(createdUser.id);
  console.log("User 1:", user);

  const response = await trpc.signUp.mutate({
    email: "rudra.behera@gmail.com",
    password: "rudra123",
  });
  console.log(response);
}

main().catch(console.error);
