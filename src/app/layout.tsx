import type { Metadata } from "next";
import "./globals.css";
import "@/assets/rajvi/custom.css"
import "@/assets/rajvi/responsive.css"
import "@/assets/aniket/custom.css"
import "@/assets/aniket/responsive.css"
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const viewport = {
    width: "device-width",
    initialScale: 1,
};

export const metadata: Metadata = {
    title: "DhatuVault | Document Driven, Smarter, Scalable Trials",
    description: "Vault simplifies clinical trial management—secure, automated, globally compliant, effortlessly scalable, and built.",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (

    <html lang="en" >
        <body>
            <Header />

            {children}

            <Footer />
        </body>
    </html>

);
}
