import Head from "next/head";
import Link from "next/link";

export default function Layout({ children }) {
  return(
    <>
      <Head>
        <meta property="title" content="Nomadtrac" key="title" />
        <meta
          name="description"
          content="Self-driving travel campers that let you live anywhere you want"
          key="description"
        />
        <meta property="og:title" content="Nomadtrac" key="ogtitle" />
        <meta
          property="og:description"
          content="Self-driving travel campers that let you live anywhere you want"
          key="ogdescription"
        />
        <link rel="icon" href="/images/favicon.ico?v=1" />
      </Head>

      <div>
        <h1>Introducing Nomadtrac</h1>
      </div>

      {children}

      <Link className={"navLink"} href={"/"}>Back to Home page.</Link>

      <div className="footer">
        <hr />
        <p>Copyrights (C) 2025 Nomadtrac, Ltd. All Rights Reserved.</p>
      </div>
    </>
  );
}
