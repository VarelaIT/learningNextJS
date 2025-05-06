import Layout from "@/components/layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Solo() {
  return (
    <Layout>
      <div>
        <h2>Solo</h2>
        <h3>Solitude Redefined</h3>
      </div>

      <div className="heroDiv">
        <Image priority src="/images/solo.jpg" fill alt="solo" />
      </div>

      <div className="specDiv">
        <p>Terrain: Open field</p>
        <p>Capacity: 2</p>
        <p>MSRP: US$299</p>
      </div>

      <Link className="navLink" href="/">
        &lt;&lt;&lt;&nbsp;Back to Homepage
      </Link>
    </Layout>
  );
}
