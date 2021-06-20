import React from "react";
import { AppProps } from "next/app";
import { Provider } from "react-redux";

import store, { wrapper } from "@app/state/store";
import { IS_PROD } from "@app/utilities/constants";
import Layout from "@app/hocs/Layout";

import Header from "@components/Header";
import Footer from "@components/Footer";

import "@css/index.scss";

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider store={store}>
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer />
    </Provider>
  );
}

export function reportWebVitals(metric) {
  if (!IS_PROD) {
    const { name, startTime, value, label } = metric;
    console.info(`[${label}]`, `[${name} ${startTime}] - ${parseInt(value)}ms`);
  }
}

export default wrapper.withRedux(App);
