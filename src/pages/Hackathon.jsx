import React from "react";
import Header from "../components/Header";
import PrizesLayout from "../components/PrizesLayout";
import SponsorLayout from "../components/SponsorLayout";
import WhyParticipateLayout from "../components/WhyParticipateLayout/WhyParticipateLayout";
import SponsorForm from "../components/SponsorForm";
import Footer from "../components/Footer";

export default function Hackathon() {
  return (
    <div className="bg-black">
      <Header />

      <WhyParticipateLayout />

      <PrizesLayout />

      <SponsorLayout />

      <SponsorForm />

      <Footer />
    </div>
  );
}
