import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Farm cart"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          <b>Welcome to FarmCart</b> – your one-stop destination for the freshest fruits and vegetables straight from the farm to your table. At FarmCart, we pride ourselves on offering premium quality produce that is not only delicious but also sustainably sourced.
          </p>
          <p>
          Our journey began with a simple mission: to connect farmers directly with consumers, ensuring transparency, fair pricing, and minimal environmental impact. We believe in supporting local agriculture while providing you with the convenience of online shopping and doorstep delivery.
            </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
