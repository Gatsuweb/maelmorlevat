import "./globals.css";
import type { Metadata } from "next";
import { Footer } from "./components/Footer";

export const metadata: Metadata = {
  title: "Mael Morlevat - Chef cuisinier à domicile sur Paimpol",
  description:
    "Découvrez Mael Morlevat, chef cuisinier à domicile basé à Paimpol dans les Côtes d'Armor, spécialisé dans des prestations gastronomiques sur mesure.",
  keywords:
    "chef cuisinier, cuisine à domicile, prestations gastronomiques, repas sur mesure, batchcooking, Paimpol, Côtes d'Armor ",
  authors: [{ name: "Mael Morlevat" }],
  openGraph: {
    title: "Mael Morlevat - Chef cuisinier à domicile sur Paimpol",
    description:
      "Services de chef cuisinier à domicile pour des repas uniques et personnalisés.",
    url: "https://maelmorlevat.fr",
    type: "website",
    images: [
      {
        url: "/logoonglet.svg",
        width: 500,
        height: 500,
        alt: "Logo Mael Morlevat",
      },
    ],
  },
  icons: {
    icon: "logoonglet.svg", 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
        <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
