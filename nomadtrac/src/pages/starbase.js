import Layout from "@/components/layout";
import Image from "next/image";

export default function StarBase() {
  return (
    <Layout>
      <div>
        <h2>Start Base</h2>
        <h3>Because the Planet is Your Home</h3>
      </div>

      <div className="heroDiv">
        <Image priority src={"/images/starbase.jpg"} alt="Shuttle" fill />
      </div>

      <div className="specDiv">
        <p>Fuel type: Gasoline</p>
        <p>Seating Capacity: 6</p>
        <p>Sleeping Capacity: 3</p>
        <p>MSRP: US$45,000</p>
      </div>

    </Layout>
  );
}
