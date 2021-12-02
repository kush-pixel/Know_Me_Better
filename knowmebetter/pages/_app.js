import { Provider } from "next-auth/client";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import "../components/Navbar.css";
import "../styles/custom.global.scss";
// import  "../styles/custom.home.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Navbar />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
