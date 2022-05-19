import type { AppProps } from "next/app";

import "@/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    
    <div className="container">
    
      {/* <nav>
        <Link href="/">/hem</Link>
      </nav> */}
      {/* <Header/> */}
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
