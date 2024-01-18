import type { App } from "./index";

const routes: ((app: App) => unknown)[] = [
  // Fallback handler
  (app) => app.get("/*", (c) => c.redirect(`https://hackpnw.org${c.req.path}`)),
];

export default routes;
