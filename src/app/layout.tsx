import type { Metadata } from "next";
import { Inter, Luckiest_Guy } from "next/font/google"; //fonts
import "./globals.css";
import TopNav from '@/components/TopNav';

const inter = Inter({ subsets: ["latin"] });

// my-font
const LuckiestGuyfont = Luckiest_Guy({
  subsets: ["latin"],
  variable: "--font-luckiest-guy",
  weight: "400",
});

export const metadata: Metadata = {
  title: "My NextJS Blogs App",
  description: "Testing app for learning purposes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TopNav />
        {children}
      </body>
    </html>
  );
}
