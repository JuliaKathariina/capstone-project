import GlobalStyle from "../components/GlobalStyle";
import { CardProvider } from "../context/cardContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CardProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </CardProvider>
    </>
  );
}

export default MyApp;
