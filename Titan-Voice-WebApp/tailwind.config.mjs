/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'titan-blue': '#6a9aaa',
        'titan-blue-dark': '#588d9e', // A slightly darker shade for hover effects
      }
    },
  },
  plugins: [],
}