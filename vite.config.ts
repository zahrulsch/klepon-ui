import { defineConfig } from "vite"
import solid from "vite-plugin-solid"
import path from "path"
import dts from "vite-plugin-dts"

export default defineConfig({
    plugins: [
        solid(),
        dts({
            tsconfigPath: "./tsconfig.app.json",
            outDir: "dist/types",
            exclude: ["./src/main.tsx", "./src/preview.tsx"],
        }),
    ],
    css: {
        preprocessorOptions: {
            scss: {
                api: "modern",
            },
        },
    },
    build: {
        lib: {
            entry: path.resolve(__dirname, "src/index.ts"),
            name: "KleponUI",
            fileName: (format) => `klepon-ui.${format}.js`,
            formats: ["es"],
        },
        rollupOptions: {
            external: ["solid-js", "gsap"],
            output: {
                globals: {
                    "solid-js": "solidJs",
                    gsap: "gsap",
                },
            },
        },
        minify: "esbuild",
    },
    esbuild: {
        minifySyntax: true,
        minifyIdentifiers: true,
        minifyWhitespace: true,
    },
})
