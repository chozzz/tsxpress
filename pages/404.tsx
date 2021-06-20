import React from "react";
import Link from "next/link";
import Head from "next/head";

const NotFound: React.FC = () => {
  return (
    <div className="error-page" data-testid="error-page">
      <Head>
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <div className="container">
        <h1 className="title">404</h1>
        <p className="tagline">Page Not Found</p>
        <div className="text-center">
          <p>
            Take me <Link href="/">Home</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
