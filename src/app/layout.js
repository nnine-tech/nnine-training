import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nnine-Training",
  description: "IT training center in Nepal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>{metadata.title}</title>

      <body className={inter.className}>
        <NavBar />
        {children}
        <br />
        <br />
        <br />
        <Footer />
      </body>
    </html>
  );
}
