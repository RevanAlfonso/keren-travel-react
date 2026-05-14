/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f1f8ff",
          100: "#dbeefe",
          500: "#1a73e8",
          700: "#1558b0",
          900: "#0f3b75"
        }
      },
      boxShadow: {
        glass: "0 10px 30px -15px rgba(15,59,117,0.35)"
      }
    }
  },
  plugins: []
};
