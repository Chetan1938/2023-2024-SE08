import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p><b>Privacy Policy</b></p>
          <p>Last Updated on - 08/02/2024</p>
          <p>This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.</p>
          <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>
          <p>We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy.</p>
          <p>if you have any query regarding privacy policy you can contact us on <BiMailSend /> : www.help@farmcart.com </p>
        </div>
      </div>
    </Layout>
  );
};
export default Policy;
