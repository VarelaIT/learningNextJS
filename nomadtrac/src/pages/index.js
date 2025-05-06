import Layout from "@/components/layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <div>
        <h2>The First Self-Driving Camper</h2>
        <h3>Because the Planet is Your Home</h3>
      </div>

      <div className="heroDiv">
        <Image
          priority
          src={"/images/hero.jpg"}
          alt="camper under the stars"
          fill
        />
      </div>
      <h2>A Model For Every Lifestyle</h2>

      <div className="thumbnailDiv">
        <Link className="navLink" href={"/shuttle"}>
          <Image src="/images/shuttle.jpg" fill alt="shuttle" />
          <h3>Shuttle</h3>
        </Link>
      </div>

      <div className="thumbnailDiv">
        <Link className="navLink" href={"/electra"}>
        <Image src="/images/electra.jpg" fill alt="electra" />
        <h3>Electra</h3>
        </Link>
      </div>

      <div className="thumbnailDiv">
        <Link className="navLink" href={"/starbase"}>
        <Image src="/images/starbase.jpg" fill alt="starbase" />
        <h3>Starbase</h3>
        </Link>
      </div>
    </Layout>
  );
}
