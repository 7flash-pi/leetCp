import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./Navbar";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
 
      <body className={inter.className}>
        <Navbar />
        <main className="p-5">{children}</main>
      </body>
        
   
     
    </html>
  );
}
