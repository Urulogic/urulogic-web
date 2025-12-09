import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Urulogic - Logística Inteligente para Uruguay",
  description: "Conecta Shopify con los principales proveedores logísticos de Uruguay. Automatiza tus envíos con UES, Distrilogic, Correo Uruguayo y más.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${raleway.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
