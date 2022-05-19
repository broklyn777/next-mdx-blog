import type { AppProps } from "next/app";
import Link from "next/link";
import Head from "next/head";
import Header from "@/src/components/header";
import "@/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    
    <div className="container">
      <Head>
        <title>funnyPlay</title>
      </Head>
      {/* <nav>
        <Link href="/">/hem</Link>
      </nav> */}
      {/* <Header/> */}
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
