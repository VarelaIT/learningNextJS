import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Solar Tent</title>
        <meta property="title" content="Solar Tent" key="title" />
        <meta
          name="description"
          content="The First Tent Powered by the Sun"
          key="description"
        />
        <meta property="og:title" content="Solar Tent" key="ogtitle" />
        <meta
          property="og:description"
          content="The First Tent Powered by the Sun"
          key="ogdescription"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico?v=1" />
      </Head>
      <div>
        <div>
          <h1>Solar Tent</h1>
        </div>

        {children}

        <div className="footer">
            <hr />
            <p>Copyrights (C) 2025 Solar Tent, Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </>
  );
}
