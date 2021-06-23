import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import React from "react";
import axios from "axios";

import { APP_TITLE, APP_URL, META_URL, SOCIAL_FACEBOOK, SOCIAL_IG, SOCIAL_LINKEDIN, SOCIAL_TWITTER } from "@app/utilities/constants";
import { isBot } from "@app/utilities/helpers";
import classNames from "classnames";
import { MetaPlugin } from "@models/MetaPlugin";
import MetaCard from "@components/cards/MetaCard";

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
  metaPlugins: MetaPlugin[];
}

const Home: NextPage<IHomepage> = ({ isCrawler, metaPlugins }: IHomepage) => {
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
          <section className="title-section">
            <h1 className="title"> Tsxpress </h1>
            <p className="tagline">A boileplate to kickstart a project with Typescript, React, NextJS, Webpack and Express.</p>
          </section>
          <section className="metas-section">
            <p className="text-center mb-3">This is built by</p>
            {metaPlugins && metaPlugins.length && (
              <div className="metas-card-wrapper">
                {metaPlugins.map((meta, idx) => {
                  return <MetaCard data={meta} key={idx} />;
                })}
              </div>
            )}
          </section>
        </div>
      </section>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const uA = (req?.headers && req.headers["user-agent"]) || "",
    metaJson = require("../public/meta.json"),
    result: IHomepage = {
      isCrawler: isBot(uA),
      metaPlugins: metaJson?.plugins as MetaPlugin[],
    };

  return {
    props: result,
  };
};

export default Home;
