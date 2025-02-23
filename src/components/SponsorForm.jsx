import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function SponsorForm() {
  const [formData, setFormData] = useState({
    org: "",
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceID = "service_sf8zl2h";
    const publicKey = "iIdVpPeeiAEh_UvO-";
    const templateID = "template_bts8lhp";

    const emailParams = {
      org: formData.org,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
    };

    emailjs
      .send(serviceID, templateID, emailParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        alert("Form submitted and email sent!");
        setFormData({ org: "", name: "", email: "", phone: "" });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Failed to send email. Try again.");
      });
  };

  return (
    <section className="px-4 py-20 md:px-32">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="text-white space-y-6">
          <h1 className="font-bold font-poppins uppercase text-4xl md:text-7xl">
            SPONSOR US
          </h1>
          <p className="font-poppins">
            Interested in becoming a sponsor?
            <br />
            Fill in the form and our team will reach out to you shortly.
          </p>
        </div>
        <form
          className="grid gap-2 text-white font-bold"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            required
            name="org"
            placeholder="Organisation Name*"
            value={formData.org}
            onChange={handleChange}
          />
          <input
            type="text"
            required
            name="name"
            placeholder="Your Name*"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            required
            name="email"
            placeholder="Email*"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="Contact No."
            value={formData.phone}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="relative overflow-hidden bg-gradient-to-b from-yellow-500 to-yellow-800 group transition p-2 px-4 rounded-md font-bold font-mont"
          >
            <div className="inset-0 absolute bg-white group-hover:bg-transparent transition"></div>
            <span className="z-20 relative text-transparent transition bg-clip-text group-hover:text-white bg-gradient-to-r from-yellow-500 to-yellow-800">
              SUBMIT
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}
