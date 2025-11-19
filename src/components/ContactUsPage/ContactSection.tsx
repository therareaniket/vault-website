"use client";

import React, { useState } from "react";


const ContactSection = () => {
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
    <section className="contact-section">
        <div className="container">
      <div className="contact-section-wrapper">
        
        {/* LEFT SIDE */}
        <div className="contact-left">
          <h2 className="contact-title text-md h3">Connect with Vault Experts</h2>

          <p className="contact-desc text-20 text-rg text-grey">
            Questions about CTMS features, implementation, or clinical operations?
            Need technical support or want a personalized demo?
          </p>

          <div className="contact-info-list">
            <div className="info-list-row">

            <div className="contact-info-card contact-phone-card">
             <div className="contact-call-icon"><span className="icon-contact-page-call"></span></div>
              <p className="label text-18 text-rg text-grey">Phone Number</p>
              <p className="value text-18 text-rg">+1 (555) 123-4567</p>
            </div>

            <div className="contact-info-card contact-mail-card">
             <div className="contact-call-icon"><span className="icon-contact-page-mail"></span></div>
              <p className="label text-18 text-rg text-grey">Email</p>
              <p className="value text-18 text-rg">inquiry@dhatavault.com</p>
            </div>

            </div>
            <div className="contact-info-card contact-location-card">
             <div className="contact-call-icon"><span className="icon-contact-page-location"></span></div>
              <p className="label text-18 text-rg text-grey">Location</p>
              <p className="value text-18 text-rg">
                2445 Oak Ridge Omaha, QA 45065
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group form-group-name">
              <label className="text-18 text-rg">
                Name<span className="req">*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group form-group-email">
              <label className="text-18 text-rg">
                Email<span className="req">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group form-group-org">
            <label className="text-18 text-rg">
              Organization<span className="req">*</span>
            </label>
            <input
              type="text"
              name="organization"
              placeholder="Enter your Organization Name"
              required
              value={formData.organization}
              onChange={handleChange}
            />
          </div>

          <div className="form-group ">
            <label className="text-18 text-rg">Message</label>
            <textarea
              name="message"
              placeholder="Enter your message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button className="submit-btn site-radius-10 text-18 text-md btn-padding" type="submit">
            Submit
          </button>
        </form>

      </div>
      </div>
    </section>
  );
};

export default ContactSection;
