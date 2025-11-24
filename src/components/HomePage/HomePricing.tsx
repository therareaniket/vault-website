"use client";
import React, { useState } from "react";

type PricingProps = {
    pricingTitle: string;
    pricingSubtitle: string;
    planDetails: {
        standardUpdatedPrice: string;
        standardOldPrice: string;
        standardInclude1: string;
        standardInclude2: string;
        standardInclude3: string;
        standardInclude4: string;
        standardInclude5: string;

        enterpriseUpdatedPrice: string;
        enterpriseOldPrice: string;
        enterpriseInclude1: string;
        enterpriseInclude2: string;
        enterpriseInclude3: string;
        enterpriseInclude4: string;
        enterpriseInclude5: string;
    }
}

const HomePricing = ({pricingTitle, pricingSubtitle, planDetails}:PricingProps) => {
  const [activePlan, setActivePlan] = useState("Standard");

  const plans = [
    {
      name: "Standard",
      price: planDetails.standardUpdatedPrice,
      oldprice: planDetails.standardOldPrice,
      features: [
        planDetails.standardInclude1,
        planDetails.standardInclude2,
        planDetails.standardInclude3,
        planDetails.standardInclude4,
        planDetails.standardInclude5,
      ],
    },
    {
      name: "Enterprise",
      price: planDetails.enterpriseUpdatedPrice,
      oldprice: planDetails.enterpriseOldPrice,
      features: [
        planDetails.enterpriseInclude1,
        planDetails.enterpriseInclude2,
        planDetails.enterpriseInclude3,
        planDetails.enterpriseInclude4,
        planDetails.enterpriseInclude5,
      ],
    },
  ];

  const plan = plans.find((p) => p.name === activePlan);

  return (
      <section className="home-pricing section">
        <div className="container">
          <div className="pricing-text-head">
            <h2 className="pricing-title text-sb"> {pricingTitle} </h2>
            <p className="pricing-desc h6 text-rg">{pricingSubtitle}</p>

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
                  <h3 className="price h1 text-sb">${plan?.price}</h3>
                  <p className="per-user h6 text-md">per user/month</p>
                </div>
                <p className="total-price h5 text-md">
                  Total price: ${plan?.price} <span className="text-grey h5 text-md">${plan?.oldprice}</span>
                </p>
                <button className="start-btn btn-padding btn-bg btn-primary text-18 text-md">
                  Subscribe
                </button>
              </div>
            </div>

            <div className="pricing-right glass-box site-radius-20">
              <h4 className="h5 text-md pricin-right-head">Includes</h4>
              <ul>
                {plan?.features.map((feature, i) => (
                  <li className="text-18" key={i}>
                    <span className="icon-finalize"></span> {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

  );
};

export default HomePricing;
