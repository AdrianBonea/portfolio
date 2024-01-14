import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      height: {
        screenMinusNavbar: 'calc(100vh - 64px)',
      },
      fontFamily: {
        fira: ['Fira Code', 'monospace'],
      },
      fontSize: {
        headline: '67px',
        'sub-headline': '32px',
        body: '18px',
        label: '16px',
        code: '14px',
      },
      colors: {
        primary: {
          dark: '#01080E',
          light: '#011627',
          medium: '#011221',
        },
        secondary: {
          grey: '#607B96',
          green: '#3C9D93',
          blue: '#4D5BCE',
          white: '#FFFFFF',
        },
        accent: {
          orange: '#FEA55F',
          green: '#43D9AD',
          pink: '#E99287',
          purple: '#C98BDF',
        },
        lines: '#1E2D3D',
        gradients: {
          purple: '#4D5BCE',
          green: '#43D9AD',
        },
      },
    },
  },
  plugins: [],
};
export default config;
