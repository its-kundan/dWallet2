/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            light: '#3b82f6',
            dark: '#1e40af',
          },
          secondary: {
            light: '#10b981',
            dark: '#059669',
          },
          background: {
            light: '#f8fafc',
            dark: '#0f172a',
          },
          card: {
            light: '#ffffff',
            dark: '#1e293b',
          },
          text: {
            light: '#334155',
            dark: '#e2e8f0',
          },
        },
      },
    },
    plugins: [],
  }