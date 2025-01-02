import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import Banner from "@/components/Ads";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nnine-Training ",
  description: "IT training center in Nepal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head><meta name="google-site-verification" content="p6gjQyIVvK9VnIXujxcHUsnudhUcA6CT3oFrcIde-Hg" /></head>
      <title>{metadata.title}</title>
      <body className={inter.className}>
        {/* <NavBar /> */}
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
