import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "My Website",
  description: "Personal website built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
