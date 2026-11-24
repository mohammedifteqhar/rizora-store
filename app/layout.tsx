import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/lib/cart-context";

export const metadata: Metadata = {
  title: "Rizora - Wall and Home Decor",
  description: "Rizora - Wall and Home Decor, Bengaluru. Elegant wall art, mirrors, and home decor.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-full flex-col overflow-x-hidden">
        <CartProvider>
          <div className="min-h-screen w-full overflow-x-hidden bg-cream">
            <Navbar />
            <main className="flex-1 w-full overflow-x-hidden">{children}</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}