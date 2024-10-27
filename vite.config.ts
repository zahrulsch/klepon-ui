import { defineConfig } from "vite"
import solid from "vite-plugin-solid"
import path from "path"
import dts from "vite-plugin-dts"
import fs from "fs/promises"

export default defineConfig({
    plugins: [
        solid(),
        dts({
            tsconfigPath: "./tsconfig.app.json",
            outDir: "dist/types",
            exclude: ["./src/main.tsx", "./src/preview.tsx"],
            async afterBuild() {
                const distDir = "./dist/types"

                const gsapTypesTargetDir = path.join(distDir, "gsap")
                await fs.mkdir(gsapTypesTargetDir, { recursive: true })

                const gsapTypes = "./node_modules/gsap/types"
                await fs.cp(gsapTypes, gsapTypesTargetDir, { recursive: true })
            },
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
    },
})
