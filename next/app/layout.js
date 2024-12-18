import {
  Geist,
  Geist_Mono,
  Architects_Daughter,
  Playfair_Display,
} from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const architectsDaughter = Architects_Daughter({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-architects-daughter",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${architectsDaughter.variable} ${playfairDisplay.variable}`}
      >
        {children}
      </body>
    </html>
  );
}