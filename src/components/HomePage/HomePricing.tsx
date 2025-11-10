"use client";
import React, { useState } from "react";

const HomePricing = () => {
  const [activePlan, setActivePlan] = useState("Standard");

  const plans = [
    {
      name: "Standard",
      price: 49,
      oldprice: 89,
      features: [
        "Advanced EDL Templates",
        "Automated Issue Tracking",
        "eTMF Viewer & Document Preview",
        "Integration Hub (Basic APIs)",
        "Priority Email & Chat Support",
      ],
    },
    {
      name: "Enterprise",
      price: 299,
      oldprice: 399,
      features: [
        "Advanced Automation & Analytics",
        "Blinding Management",
        "AI-Powered Document Classification",
        "Multi-Region Data Residency",
        "24/7 Dedicated Support & Onboarding Assistance",
      ],
    },
  ];

  const plan = plans.find((p) => p.name === activePlan);

  return (
    <section className="section">
      <div className="home-pricing">
        <div className="container">
          <div className="pricing-text-head">
            <h2 className="pricing-title text-sb">
              Designed to Scale with Your <br /> Clinical Operations
            </h2>
            <p className="pricing-desc h6 text-rg">
              Choose the plan that fits your organization’s scale and complexity —
              from core eTMF functionality to advanced automation and analytics.
              Vault’s pricing is designed to grow with you.
            </p>

            {/* ===== Plan Tabs ===== */}
            <div className="pricing-tabs btn-bg site-radius-10">
              {plans.map((p) => (
                <button
                  key={p.name}
                  onClick={() => setActivePlan(p.name)}
                  className={`plan-btn ${activePlan === p.name ? "active" : ""}`}
                >
                    <span className="text-md h6">{p.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* ===== Pricing Content ===== */}
          <div className="pricing-content">
            <div className="pricing-left">
              <div className="pricing-left-text">
                <div className="price-line">
                  <h3 className="price h1 text-sb">${plan.price}</h3>
                  <p className="per-user h6 text-md">per user/month</p>
                </div>
                <p className="total-price h5 text-md">
                  Total price: ${plan.price} <span className="text-grey h5 text-md">${plan.oldprice}</span>
                </p>
                <button className="start-btn btn-padding btn-bg btn-primary text-18 text-md">
                  Subscribe
                </button>
              </div>
            </div>

            <div className="pricing-right glass-box site-radius-20">
              <h4 className="h5 text-md pricin-right-head">Includes</h4>
              <ul>
                {plan.features.map((feature, i) => (
                  <li className="text-18" key={i}>
                    <span className="icon-check_circle1"></span> {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePricing;
