import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Providers from "./providers";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

export const metadata: Metadata = {
    title: "KOUAKOU Kouassi Tite - Ingénieur Génie Civil",
    description: "Portfolio de KOUAKOU Kouassi Tite, élève ingénieur en génie civil spécialisé en conception structurelle, modélisation BIM et tracé routier.",
    keywords: ["génie civil", "ingénieur", "BIM", "AutoCAD", "REVIT", "structure", "Fès"],
    authors: [{ name: "KOUAKOU Kouassi Tite" }],
    openGraph: {
        title: "KOUAKOU Kouassi Tite - Ingénieur Génie Civil",
        description: "Portfolio professionnel d'un ingénieur génie civil",
        type: "website",
        locale: "fr_FR",
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr" suppressHydrationWarning>
        <body className={`${inter.variable} font-sans antialiased`}>
        <Providers>
            <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
            </div>
        </Providers>
        </body>
        </html>
    );
}