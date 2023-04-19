import ClientOnly from "@/components/ClientOnly";
import Navbar from "@/components/Navbar";
import RegisterModal from "@/components/RegisterModal";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ClientOnly>
        <RegisterModal />
        <Navbar />
      </ClientOnly>
      <Component {...pageProps} />
    </>
  );
}
