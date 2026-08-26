import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Globe Events — Original Design",
  description: "Le Plus grand événement pizza en tunisie.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={playfair.variable}>
      <body className="bg-surface text-customText font-sans antialiased selection:bg-primary selection:text-surface">
        {children}
      </body>
    </html>
  );
}