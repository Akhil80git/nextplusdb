// app/layout.tsx
import type { ReactNode } from "react";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "My Next App",
  description: "Full stack Next.js + MongoDB example"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main style={{ padding: "1rem" }}>{children}</main>
      </body>
    </html>
  );
}
