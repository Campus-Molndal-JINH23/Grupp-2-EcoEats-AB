import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EcoEats",
  description: "EcoEats homepage",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="container flex items-center justify-center p-3 text-center text-white"> 
        <a className="flex size-full flex-col items-center justify-center underline"
          href="#">10% rabatt när du skickar bild på din återvinning</a>
      </div>
        <Navbar />
        {children}
        
        <footer className="bg-gray-800 text-white py-4">
            <div className="mx-auto px-4">
                <div className="flex justify-between items-center">
                    <p>2024 EcoEat AB.</p>
                    <nav>
                        <Link href="#" className="mr-4 hover:text-gray-300">Hem</Link>
                        <Link href="#" className="mr-4 hover:text-gray-300">Om oss</Link>
                        <Link href="#" className="hover:text-gray-300">Kontakt</Link>
                    </nav>
                </div>
            </div>
        </footer>
      </body>
    </html>
  );
}
