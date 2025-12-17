"use client";
import Link from "next/link";
import React from "react";

type StandardPricingPlanProps = {
  price: string;
  oldprice: string;
  features: string[];
};

const StandardPricingPlan = ({ price, oldprice, features }: StandardPricingPlanProps) => {
  return (
    <div className="pricing-content">
      <div className="pricing-left">
        <div className="pricing-left-text">
          <div className="price-line">
            <h3 className="price h1 text-sb">${price}</h3>
            <p className="per-user h6 text-md">per user/month</p>
          </div>
          <p className="total-price h5 text-md">
            Total price: ${price} <span className="text-grey h5 text-md">${oldprice}</span>
          </p>
          <Link href="/ComingSoon" className="start-btn btn-padding btn-bg btn-primary text-18 text-md text-center">
            Subscribe
          </Link>
        </div>
      </div>

      <div className="pricing-right glass-box site-radius-20">
        <h4 className="h5 text-md pricin-right-head">Includes</h4>
        <ul>
          {features.map((feature, i) => (
            <li className="text-18" key={i}>
              <span className="icon-finalize"></span> {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StandardPricingPlan;
