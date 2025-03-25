/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      // যদি App Router ব্যবহার করেন:
      "./app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'purple': {
            500: '#8b5cf6',
            600: '#7c3aed',
          },
          'gray': {
            900: '#0f172a',
            800: '#1e293b',
          }
        },
        fontFamily: {
          // Helvetiker ফন্ট যোগ করুন (যদি CSS-এ ব্যবহার করেন)
          'helvetiker': ['Helvetiker', 'sans-serif'],
        },
      },
    },
    plugins: [],
    darkMode: 'class', // Dark মোড সক্ষম করুন
  }