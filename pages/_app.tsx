import "../styles/globals.scss";
import Layout from "../components/layout";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#160f29",
    },

    secondary: {
      main: "#38aecc",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navigation />
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
