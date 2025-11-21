"use client";

import { useEffect } from "react";

export default function StreamlinedOpera() {

  useEffect(() => {
    const items = document.querySelectorAll<HTMLSpanElement>(".list-num");

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          items.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add("show-num");
            }, index * 300); // delay each number
          });
        }
      },
      { threshold: 0.3 }
    );

    const section = document.querySelector(".opertion-lists");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section">
      <div className="container">
        <div className="strmlnd-ops-headings">
          <h2 className="h3">Streamline Operations with DhatuVault</h2>
          <p className="h6 text-rg">
            From Upload to Approval, Step-by-step automation that secures documents, enables approvals, and ensures audit readiness
          </p>
        </div>

        <div className="opertion-lists">
          <div className="opertion-list">
            <div className="opert-list-title">
              <div className="list-icon site-radius-10">
                <span className="icon-uploadIcon text-white"></span>
              </div>
              <h3 className="h5 text-sb">Easily upload documents in a secure portal.</h3>
              <p>Trial documents uploaded securely with end-to-end encryption with complete privacy protection and data security.</p>
              <span className="text-sb list-num">01</span>
            </div>
          </div>

          <div className="opertion-list">
            <div className="opert-list-title">
              <div className="list-icon site-radius-10">
                <span className="icon-grading text-white"></span>
              </div>
              <h3 className="h5 text-sb">Smart classification and instant validation.</h3>
              <p>DhatuVault automatically classifies documents based on predefined categories and validates them against protocol requirements.</p>
              <span className="text-sb list-num">02</span>
            </div>
          </div>

          <div className="opertion-list">
            <div className="opert-list-title">
              <div className="list-icon site-radius-10">
                <span className="icon-order_approve text-white"></span>
              </div>
              <h3 className="h5 text-sb">Approve with transparent audit history.</h3>
              <p>Documents are routed to the appropriate reviewers with built-in approval workflows. Every action view, comment captured.</p>
              <span className="text-sb list-num">03</span>
            </div>
          </div>

          <div className="opertion-list">
            <div className="opert-list-title">
              <div className="list-icon site-radius-10">
                <span className="icon-assistant_on_hub text-white"></span>
              </div>
              <h3 className="h5 text-sb">Stay ready and respond to queries quickly.</h3>
              <p>Real-Time intelligence monitor document readiness, track workflow status, and respond to queries instantly for faster trials.</p>
              <span className="text-sb list-num">04</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
