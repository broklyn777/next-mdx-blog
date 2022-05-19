import type { AppProps } from "next/app";
import "@/styles/globals.css";
import Link from "next/link";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    
    <div className="container">
    
      <nav>
        <Link href="/">/hem</Link>
      </nav>
    
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
