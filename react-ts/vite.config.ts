import { sentryVitePlugin } from "@sentry/vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  plugins: [
    react(),
    sentryVitePlugin({
      org: "your-org",
      project: "your-project",
      authToken: "your-auth-token",
    }),
  ],
});
