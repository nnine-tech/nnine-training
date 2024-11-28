import localFont from "next/font/local";
// import Sidebar from "@/components/Sidebar";
// import Navigation from "@/components/Navigation";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen">
          {/* <Sidebar /> */}
          <div className="flex-1 flex flex-col">
            {/* <Navigation /> */}
            <main className="flex-1 overflow-y-auto">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
