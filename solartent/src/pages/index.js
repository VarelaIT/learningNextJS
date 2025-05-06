import Layout from "@/components/layout";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <div>
        <h2>The First Tent Powered by the Sun</h2>
      </div>

      <div className="heroDiv">
        <Image priority src="/images/hero.jpg" fill alt="camping under the stars" />
      </div>

      <h2>Versatile Enough for Any Terrain</h2>

      <div className="thumbnailDiv">
        <Link href="/solo">
          <Image src="/images/solo.jpg" fill alt="solo" />
          <h3>Solo</h3>
        </Link>
      </div>

      <div className="thumbnailDiv">
        <Link href="/woodland">
          <Image src="/images/woodland.jpg" fill alt="woodland" />
          <h3>Woodland</h3>
        </Link>
      </div>

      <div className="thumbnailDiv">
        <Link href="/ocean">
          <Image src="/images/ocean.jpg" fill alt="ocean" />
          <h3>Ocean</h3>
        </Link>
      </div>
    </Layout>
  );
}
