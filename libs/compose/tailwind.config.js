const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        black: '#111418',
        white: '#ffffff',

        'dark-gray-1': '#1C2127',
        'dark-gray-2': '#252A31',
        'dark-gray-3': '#2F343C',
        'dark-gray-4': '#383E47',
        'dark-gray-5': '#404854',

        'gray-1': '#5F6B7C',
        'gray-2': '#738091',
        'gray-3': '#8F99A8',
        'gray-4': '#ABB3BF',
        'gray-5': '#C5CBD3',

        'light-gray-1': '#D3D8DE',
        'light-gray-2': '#DCE0E5',
        'light-gray-3': '#E5E8EB',
        'light-gray-4': '#EDEFF2',
        'light-gray-5': '#F6F7F9',

        'blue-1': '#184A90',
        'blue-2': '#215DB0',
        'blue-3': '#2D72D2',
        'blue-4': '#4C90F0',
        'blue-5': '#8ABBFF',

        'green-1': '#165A36',
        'green-2': '#1C6E42',
        'green-3': '#238551',
        'green-4': '#32A467',
        'green-5': '#72CA9B',

        'orange-1': '#77450D',
        'orange-2': '#935610',
        'orange-3': '#C87619',
        'orange-4': '#EC9A3C',
        'orange-5': '#FBB360',

        'red-1': '#8E292C',
        'red-2': '#AC2F33',
        'red-3': '#CD4246',
        'red-4': '#E76A6E',
        'red-5': '#FA999C',
      },
      spacing: {
        '2px': '2px',
        '4px': '4px',
        '6px': '6px',
        '8px': '8px',
        '10px': '10px',
        '12px': '12px',
        '14px': '14px',
        '16px': '16px',
        '18px': '18px',
        '20px': '20px',
        '22px': '22px',
        '24px': '24px',
        '26px': '26px',
        '28px': '28px',
        '30px': '30px',
        '32px': '32px',
        '34px': '34px',
        '36px': '36px',
        '38px': '38px',
        '40px': '40px',
        '42px': '42px',
        '44px': '44px',
        '46px': '46px',
        '48px': '48px',
        '50px': '50px',
        '52px': '52px',
        '54px': '54px',
        '56px': '56px',
        '58px': '58px',
        '60px': '60px',
        '62px': '62px',
        '64px': '64px',
      },
    },
  },
  plugins: [],
};
