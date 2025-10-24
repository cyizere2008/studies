import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

const resolvePath = (str) => path.resolve(__dirname, str);

export default defineConfig(({ mode }) => {
  // Load environment variables
  const env = loadEnv(mode, process.cwd(), '');
  const API_URL = `${env.VITE_APP_BASE_NAME}`;
  const PORT = 3000;

  return {
    // ------------------------------------------
    // 🚀 Development Server Settings
    // ------------------------------------------
    server: {
      open: true,   // Automatically open in browser
      port: PORT,   // Default port
      host: true,   // Allow LAN access
    },

    preview: {
      open: true,
      host: true,
    },

    // ------------------------------------------
    // 🌍 Global definitions
    // ------------------------------------------
    define: {
      global: 'window',
    },

    // ------------------------------------------
    // 🧩 Resolve Paths (Aliases)
    // ------------------------------------------
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        data: path.resolve(__dirname, './src/data'),
        components: path.resolve(__dirname, './src/components'),
        views: path.resolve(__dirname, './src/views'),
        assets: path.resolve(__dirname, './src/assets'),
        utils: path.resolve(__dirname, './src/utils'),
      },
    },

    // ------------------------------------------
    // 🎨 CSS & Preprocessor Options
    // ------------------------------------------
    css: {
      preprocessorOptions: {
        scss: {
          charset: false,
          quietDeps: true, // suppress Bootstrap Sass warnings
        },
        less: {
          charset: false,
        },
      },
      charset: false,
      postcss: {
        plugins: [
          {
            postcssPlugin: 'internal:charset-removal',
            AtRule: {
              charset: (atRule) => {
                if (atRule.name === 'charset') atRule.remove();
              },
            },
          },
        ],
      },
    },

    // ------------------------------------------
    // ⚙️ Build Options
    // ------------------------------------------
    build: {
      chunkSizeWarningLimit: 1600,
      rollupOptions: {
        input: {
          main: resolvePath('index.html'),
          legacy: resolvePath('index.html'),
        },
      },
    },

    // ------------------------------------------
    // 🌐 Base Path
    // ------------------------------------------
    base: API_URL,

    // ------------------------------------------
    // 🔌 Plugins
    // ------------------------------------------
    plugins: [
      react(),
      tsconfigPaths(), // enables TS path alias resolution
    ],
  };
});

