import './globals.css'
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata = {
  title: 'GDSC CALEB UNIVERSITY',
  description: 'A webapp for core members of the GDSC Caleb University to keep track of rules and regulations that we are to abide by to ensure the smooth running of the GDSC Caleb Chapter',
}

export default function RootLayout({ children }) {
  return (
    <html className={`${poppins.variable}`}>
      <body>{children}</body>
    </html>
  )
}