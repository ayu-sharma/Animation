module.exports = {
  content: ["./src/**/*.{,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        // text rotating animation
        rotate_text: 'spin_words 8s infinite',


        cursor: 'cursor .4s step-end infinite alternate',
        typing: 'typing 2s steps(42)'
      },
      keyframes: {

        // text rotating keyframes
        spin_words: {
          '10%': { transform: 'translateY(-112%)' },
          '20%': { transform: 'translateY(-100%)' },
          '30%': { transform: 'translateY(-212%)' },
          '40%': { transform: 'translateY(-200%)' },
          '50%': { transform: 'translateY(-312%)' },
          '60%': { transform: 'translateY(-300%)' },
          '70%': { transform: 'translateY(-412%)'},
          '80%': { transform: 'translateY(-400%)'},
          '90%':{ transform: 'translateY(-512%)'},
          '100%':{ transform: 'translateY(-500%)'},
           },

          
           cursor: {
            '50%': {'border-color': 'transparent'}
          },
          typing: {
            'to': {'left':"100%"}
          }
      },
    },
  },
 
  plugins: [],
}
