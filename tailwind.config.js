// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Add paths to your React components and other files
    './public/index.html', // Add paths to other files where you might use Tailwind CSS classes
  ],
  theme: {
    extend: {
      colors: {
        pink: '#ff69b4',  // Customize to your desired pink shade
        'baby-yellow': '#f7e5ab', // Customize to your desired baby yellow shade
        black: '#000000',
        white: '#ffffff'
      },
      borderRadius: {
        'rounded-lg': '12px'  // Define custom rounded corner sizes if needed
      }
    }
  },
  variants: {},
  plugins: [],
}
