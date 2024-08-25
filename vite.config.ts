import {NodeGlobalsPolyfillPlugin} from '@esbuild-plugins/node-globals-polyfill'
import react from '@vitejs/plugin-react'
import {defineConfig} from 'vite'
import viteTsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
    define: {
        global: 'globalThis',
    },
    optimizeDeps: {
        esbuildOptions: {
            plugins: [
                NodeGlobalsPolyfillPlugin({
                    buffer: true,
                    process: true,
                }),
            ],
        },
    },
    plugins: [
        viteTsconfigPaths(),
        react()],
})
