import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wellnesslodge Veluwe | Privé sauna & hottub bij Edese bos",
  description: "Ontspan in onze luxe wellness lodge op de Veluwe. Privé sauna, hottub en ruime tuin. Op 100m van het Edese bos. Direct boeken via BookingExperts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className="h-full">
      <body className="min-h-full flex flex-col bg-cream text-stone antialiased">
        {children}
      </body>
    </html>
  );
}
