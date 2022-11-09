import GlobalStyle from "../components/GlobalStyle";
import { CardProvivder } from "../context/cardContext";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <CardProvivder>
        <GlobalStyle />
        <Component {...pageProps} />
      </CardProvivder>
    </>
  );
}

export default MyApp;
