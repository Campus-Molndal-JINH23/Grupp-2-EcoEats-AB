import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

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
        <Footer />
      </body>
    </html>
  );
}
