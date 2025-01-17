import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import unfonts from 'unplugin-fonts/vite'

export default defineConfig({
    plugins: [
        vue(),
        unfonts({
            google: {
                families: [
                    {
                        name: 'Geist',
                        styles: 'wght@100..900',
                    },
                ]
            }
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        },
    },
})
