import Layout from "@/components/layout";
import Image from "next/image";
import Link from "next/link";

export default function Ocean() {
  return (
    <Layout>
      <div>
        <h2>Ocean</h2>
        <h3>Let the Ozone Be Your Air Conditioner</h3>
      </div>

      <div className="heroDiv">
        <Image priority src="/images/ocean.jpg" fill alt="woodland" />
      </div>

      <div className="specDiv">
        <p>Terrain: Wooded Areas</p>
        <p>Capacity: 12</p>
        <p>MSRP: US$999</p>
      </div>

      <Link className="navLink" href="/">
        &lt;&lt;&lt;&nbsp;Back to Homepage
      </Link>
    </Layout>
  );
}
