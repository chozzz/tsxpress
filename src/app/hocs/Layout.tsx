import React from "react";
import Head from "next/head";
import { META_DESCRIPTION, META_KEYWORDS, META_TITLE, META_TWITTER, META_URL } from "../utilities/constants";

const Layout: React.FC = ({ children }) => {
  return (
    <main className="main-container position-relative" data-testid="main-container">
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>{META_TITLE}</title>
        <meta name="title" content={META_TITLE} />
        <meta name="description" content={META_DESCRIPTION} />

        <meta name="keywords" content={META_KEYWORDS} />
        <meta name="theme-color" content="#FFFFFF" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={META_TITLE} />
        <meta property="og:description" content={META_DESCRIPTION} />
        <meta property="og:url" content={META_URL} />
        <meta property="og:image" content={META_URL + "/logo.svg"} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content={META_TWITTER} />
        <meta name="twitter:url" content={META_URL} />
        <meta name="twitter:title" content={META_TITLE} />
        <meta name="twitter:description" content={META_DESCRIPTION} />
        <meta name="twitter:image" content={META_URL + "/logo.svg"} />
        <meta name="twitter:creator" content={META_TWITTER} />

        <meta itemProp="title" content={META_TITLE} />
        <meta itemProp="description" content={META_DESCRIPTION} />

        <link rel="apple-touch-icon" href={META_URL + "/logo.svg"} />
        <link rel="manifest" href={META_URL + "/manifest.json"} />

        <meta name="robots" content="index,follow" />
        <link rel="preload" href="https://fonts.googleapis.com/css?family=Inter&display=swap" as="font" />
      </Head>
      {children}
    </main>
  );
};

export default Layout;
