import { createLocalStorageMiddleware } from "@/lib/middleware/localStorageMiddleware";

export const todosMiddleware = createLocalStorageMiddleware({
  key: "todos",
  slice: "todos",
});
