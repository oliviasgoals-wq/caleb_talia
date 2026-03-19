import type { Metadata } from "next";
import { Playfair_Display, Montserrat, Great_Vibes, Tangerine, Fleur_De_Leah, Ballet, Luxurious_Script, Birthstone} from 'next/font/google'
import "./globals.css";

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

const fleur = Fleur_De_Leah({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-fleur-de-leah',
})

const birthstone = Birthstone({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-birthstone',
})

const luxurious = Luxurious_Script({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-luxurious-script',
})

const ballet = Ballet({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-ballet',
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
})

const greatVibes = Great_Vibes({ 
  subsets: ['latin'],
  weight: '400',
  variable: '--font-great-vibes',
})

const tangerine = Tangerine({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-tangerine',
})

export const metadata: Metadata = {
  title: "Caleb & Talia say I do",
  description: "Caleb and Talia Wedding Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
      </head>
      <body
        // Apply all font variables to the body, but set a default font
        className={`${playfair.variable} ${fleur.variable} ${ballet.variable} ${luxurious.variable} ${montserrat.variable} ${greatVibes.variable} ${tangerine.variable} ${birthstone.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}