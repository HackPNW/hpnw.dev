import { Hono } from "hono";
import redirects from "./redirects";
import routes from "./routes";

const app = new Hono();

Object.entries(redirects).forEach(([route, redirectUrl]) =>
  app.get(route, (c) => c.redirect(redirectUrl)),
);

routes.forEach((fn) => fn(app));

export type App = typeof app;

export default app;
