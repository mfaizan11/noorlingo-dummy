declare module 'tailwindcss-dir' {
  const plugin: () => import('postcss').Plugin;
  export default plugin;
}
