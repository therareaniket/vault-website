"use client";

import React, { useState } from "react";
import MyContactForm from "./ContactForm";

type ContactProps = {
    phoneNumber: string;
    email: string;
    location: string;
}

const ContactSection = ({phoneNumber, email, location}:ContactProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("FORM SUBMITTED:", formData);
  };

  return (
    <section className="section" id="ContactFrom">
        <div className="container">
      <div className="contact-section-wrapper">
        
        {/* LEFT SIDE */}
        <div className="contact-left">
          <h2 className="contact-title text-md h3">Connect with DhatuVault Experts</h2>

          <p className="contact-desc text-20 text-rg text-grey">
            Questions about features, implementation, or clinical operations?
            Need technical support or want a personalized demo?
          </p>

          <div className="contact-info-list">
            <div className="info-list-row">

            <div className="contact-info-card contact-phone-card">
             <div className="contact-call-icon"><span className="icon-contact-page-call"></span></div>
              <p className="label text-18 text-rg text-grey">Phone Number</p>
              <p className="value text-18 text-rg">{phoneNumber}</p>
            </div>

            <div className="contact-info-card contact-mail-card">
             <div className="contact-call-icon"><span className="icon-contact-page-mail"></span></div>
              <p className="label text-18 text-rg text-grey">Email</p>
              <p className="value text-18 text-rg">{email}</p>
            </div>

            </div>
            <div className="contact-info-card contact-location-card">
             <div className="contact-call-icon"><span className="icon-contact-page-location"></span></div>
              <p className="label text-18 text-rg text-grey">Location</p>
              <p className="value text-18 text-rg">
                {location}
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — FORM */}
        <MyContactForm />

      </div>
      </div>
    </section>
  );
};

export default ContactSection;
