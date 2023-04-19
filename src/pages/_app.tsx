import ClientOnly from "@/components/ClientOnly";
import Navbar from "@/components/Navbar";
import RegisterModal from "@/components/RegisterModal";
import ToasterProvider from "@/providers/ToasterProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ClientOnly>
        <ToasterProvider />
        <RegisterModal />
        <Navbar />
      </ClientOnly>
      <Component {...pageProps} />
    </>
  );
}
