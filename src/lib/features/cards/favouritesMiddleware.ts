import { createLocalStorageMiddleware } from "@/lib/middleware/localStorageMiddleware";

export const favouritesMiddleware = createLocalStorageMiddleware({
  key: "favourites",
  slice: "favourites",
});
