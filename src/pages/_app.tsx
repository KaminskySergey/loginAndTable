import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { createGlobalStyle } from "styled-components";
import { persistor, store } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </>
  );
}
