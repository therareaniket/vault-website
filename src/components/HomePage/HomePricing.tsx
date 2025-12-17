"use client";
import React, { useState } from "react";
import StandardPricingPlan from "./StandardPricingPlan";
import EnterprisePricingPlan from "./EnterprisePricingPlan";

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
          {activePlan === "Standard" ? (
            <StandardPricingPlan
              price={plans[0].price}
              oldprice={plans[0].oldprice}
              features={plans[0].features}
            />
          ) : (
            <EnterprisePricingPlan
              price={plans[1].price}
              oldprice={plans[1].oldprice}
              features={plans[1].features}
            />
          )}
        </div>
      </section>

  );
};

export default HomePricing;
