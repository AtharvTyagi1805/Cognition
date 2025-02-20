import React from "react";

export default function SponsorForm() {
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
        <form className="grid gap-2">
          <input
            type="text"
            required
            name="org"
            placeholder="Organisation Name*"
          />
          <input type="text" required name="name" placeholder="Your Name*" />
          <input type="email" required name="email" placeholder="Email*" />
          <input type="text" name="phone" placeholder="Contact No." />
          <button className="relative overflow-hidden bg-gradient-to-b from-yellow-500 to-yellow-800 group transition p-2 px-4 rounded-md font-bold font-mont">
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
