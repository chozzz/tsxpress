import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import React from "react";

import { APP_TITLE, APP_URL, META_URL, SOCIAL_FACEBOOK, SOCIAL_IG, SOCIAL_LINKEDIN, SOCIAL_TWITTER } from "@app/utilities/constants";
import { isBot } from "@app/utilities/helpers";
import classNames from "classnames";

const OrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: APP_TITLE,
  url: APP_URL,
  logo: [APP_URL, "logo.svg"].join("/"),
  sameAs: [SOCIAL_FACEBOOK, SOCIAL_LINKEDIN, SOCIAL_IG, SOCIAL_TWITTER].filter(Boolean),
};

interface IHomepage {
  isCrawler: boolean;
}

const Home: NextPage<IHomepage> = ({ isCrawler }: IHomepage) => {
  const classes = classNames("landing-page", {
    bot: isCrawler,
  });

  /**
   * Meta contents
   */
  const metaUrl = META_URL;

  return (
    <div className={classes} data-testid="landing-page">
      <Head>
        <link rel="canonical" href={metaUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(OrganizationSchema),
          }}
        ></script>
      </Head>
      <section className="hero">
        <div className="container">
          <div className="title-wrapper">
            <h1 className="title"> Tsxpress Boilerplate </h1>
            <p className="tagline">A boileplate to kickstart a project with Typescript, React, NextJS, Webpack and Express.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const uA = (req?.headers && req.headers["user-agent"]) || "",
    result: IHomepage = {
      isCrawler: isBot(uA),
    };

  return {
    props: result,
  };
};

export default Home;
