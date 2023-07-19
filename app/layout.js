import "./globals.css";
import { Nunito } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Paddel Construction",
  description: "Build Padel Court",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
      <Toaster />
    </html>
  );
}
