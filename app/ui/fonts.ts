// import {Inter} from 'next/font/google'
// import { Lusitana } from 'next/font/google'


import localFont from 'next/font/local';

export const inter = localFont({
  src: [
    {
      path: '../fonts/Inter/Inter-VariableFont_opsz,wght.ttf',
      weight: '100 900',
      style: 'normal',
    },
    {
      path: '../fonts/Inter/Inter-Italic-VariableFont_opsz,wght.ttf',
      weight: '100 900',
      style: 'italic',
    },
  ],
});

export const lusitana = localFont({
  src: [
    {
      path: '../fonts/Lusitana/Lusitana-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Lusitana/Lusitana-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
});
