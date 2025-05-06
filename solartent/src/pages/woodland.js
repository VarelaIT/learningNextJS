import Layout from "@/components/layout";
import Image from "next/image";
import Link from "next/link";

export default function Woodland() {
  return (
    <Layout>
        <div>
            <h2>Woodland</h2>
            <h3>Jungle Gym for Grown Ups</h3>
        </div>

        <div className="heroDiv">
          <Image priority src="/images/woodland.jpg" fill alt="woodland" />
        </div>

        <div className="specDiv">
          <p>Terrain: Wooded Areas</p>
          <p>Capacity: 6</p>
          <p>MSRP: US$599</p>
        </div>

      <Link className="navLink" href="/">
        &lt;&lt;&lt;&nbsp;Back to Homepage
      </Link>
    </Layout>
  );
}
