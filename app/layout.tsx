import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beard Bros — Boutique Growth & Creative",
  description: "We plan, make, and scale ads for D2C brands.",
  icons: { icon: "/favicon.ico" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
