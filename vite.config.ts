// /* eslint-disable no-undef */
// import path from "path";
// import { defineConfig, loadEnv } from "vite";
// import react from "@vitejs/plugin-react-swc";
// import checker from "vite-plugin-checker";
// import { chunkSplitPlugin } from "vite-plugin-chunk-split";
// import tsconfigPaths from "vite-tsconfig-paths";

// // ----------------------------------------------------------------------

// export default defineConfig(({ mode }) => {
//   const env = loadEnv(mode, process.cwd(), "");
//   return {
//     define: {
//       "process.env": env,
//     },
//     plugins: [
//       react(),
//       checker({
//         eslint: {
//           lintCommand: 'eslint "./src/**/*.{js,jsx,ts,tsx}"',
//         },
//         overlay: {
//           initialIsOpen: false,
//         },
//       }),
//       chunkSplitPlugin(),
//       tsconfigPaths(),
//     ],
//     build: { chunkSizeWarningLimit: 1600 },
//     resolve: {
//       alias: {
//         "@": path.resolve(__dirname, "../"),
//         "@server": path.resolve(__dirname, "../server/src"),
//       },
//       // alias: [
//       //   {
//       //     find: /^~(.+)/,
//       //     replacement: path.join(process.cwd(), "node_modules/$1"),
//       //   },
//       //   {
//       //     find: /^src(.+)/,
//       //     replacement: path.join(process.cwd(), "src/$1"),
//       //   },
//       //   {
//       //     find: "@",
//       //     replacement: path.resolve(__dirname, "src"),
//       //   },
//       //   {
//       //     "@": path.resolve(__dirname, "../"),
//       //     "@server": path.resolve(__dirname, "../server/src"),
//       //   },
//       // ],
//     },
//   };
// });
/* eslint-disable no-undef */
// import path from "path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import checker from "vite-plugin-checker";
import { chunkSplitPlugin } from "vite-plugin-chunk-split";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

// ----------------------------------------------------------------------

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "process.env": env,
    },
    plugins: [
      react(),
      checker({
        eslint: {
          lintCommand: 'eslint "./src/**/*.{js,jsx,ts,tsx}"',
        },
        overlay: {
          initialIsOpen: false,
        },
      }),
      chunkSplitPlugin(),
      tsconfigPaths(),
    ],
    build: { chunkSizeWarningLimit: 1600 },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "../"),
        "@server": path.resolve(__dirname, "../server/src"),
      },
      // alias: {
      //   "@": path.resolve(__dirname, "src"),
      //   "@server": path.resolve(__dirname, "server/src"),
      // },
    },
  };
});
