import { defineConfig } from "vite";
import htmlPurge from "vite-plugin-html-purgecss";

export default defineConfig({
    base: "/pw2/",
    plugins: [
        htmlPurge()
    ],
    build: {
        minify: true,
        cssMinify: true
    }
});