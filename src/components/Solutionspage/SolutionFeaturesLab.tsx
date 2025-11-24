"use client";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

type FeaturesProps = {
    featuresLabsTitle: string;
    featuresLabsSubtitle: string;
    secureUploadDetails: string;
    validationEngineDetails: string;
    retentionArchiveDetails: string;
    notificationsDetails: string;

    glanceTitle: string;
    glanceSubtitle: string;
}

export default function FeaturesLabs({ featuresLabsTitle, featuresLabsSubtitle, secureUploadDetails, validationEngineDetails, retentionArchiveDetails, notificationsDetails, glanceTitle, glanceSubtitle }:FeaturesProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  // ---------------------------
  // FIXED NUMBER ANIMATION LOGIC
  // ---------------------------
  useEffect(() => {
    const counters = document.querySelectorAll<HTMLSpanElement>(
      ".glanc-list-icons span.h4"
    );

    const animateValue = (el: HTMLSpanElement, endValue: number, duration = 2500) => {
      let startTime: number | null = null;

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;

        const progress = Math.min((timestamp - startTime) / duration, 1);
        const current = Math.floor(progress * endValue);

        el.innerText = (el.dataset.prefix || "") + current + (el.dataset.suffix || "");

        if (progress < 1) requestAnimationFrame(step);
      };

      requestAnimationFrame(step);
    };

    // FIXED PARSER — handles ">95%", "≤ 3 min", "> 90%"
    const parseValue = (text: string) => {
      let prefix = "";
      let suffix = "";

      text = text.trim();

      if (text.startsWith(">")) prefix = "> ";
      if (text.startsWith("≤")) prefix = "≤ ";

      if (text.includes("%")) suffix = "%";
      if (text.includes("min")) suffix = " min";

      const cleaned = text.replace(/[^0-9.]/g, "");
      const num = parseFloat(cleaned);

      return { num, prefix, suffix };
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          counters.forEach((el) => {
            const raw = el.textContent || "0";
            const { num, prefix, suffix } = parseValue(raw);

            el.dataset.prefix = prefix;
            el.dataset.suffix = suffix;

            el.innerText = prefix + "0" + suffix;

            animateValue(el, num);
          });

          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (counters.length > 0) observer.observe(counters[0]);
  }, []);

  // ------------------------------------
  // FEATURES LIST
  // ------------------------------------
  const features = [
    {
      title: "Secure Uploads",
      icon: "icon-uploadIcon",
      contentTitle: "Controlled Access for Sensitive Data",
      contentDesc: secureUploadDetails
    },
    {
      title: "Validation Engine",
      icon: "icon-validationIcon",
      contentTitle: "Automated Checks for Document Integrity",
      contentDesc: validationEngineDetails
    },
    {
      title: "Retention & Archive",
      icon: "icon-archiveIcon",
      contentTitle: "Policy-Based Lifecycle Management",
      contentDesc: retentionArchiveDetails
    },
    {
      title: "Notifications",
      icon: "icon-notificationIcon",
      contentTitle: "Real-Time Alerts for Missing or Delayed Files",
      contentDesc: notificationsDetails
    },
  ];

  return (
    <>
      {/* ---------------------- */}
      {/* FEATURES SECTION      */}
      {/* ---------------------- */}

      <section className="section features-of-lab">
        <div className="container">
          <div className="features-lab-headings">
            <h2 className="h3">{featuresLabsTitle}</h2>

            <p className="h6 text-rg">{featuresLabsSubtitle}</p>
          </div>

          <div className="features-lab-list-wrapper">
            <div className="featu-lab-butns">
              {features.map((item, index) => (
                <button
                  key={index}
                  className={`feat-lab-btn ${activeIndex === index ? "active-feat-btn" : ""}`}
                  onClick={() => setActiveIndex(index)}
                >
                  <span className="h5 text-md">
                    <i className={`${item.icon} mr-[10px]`}></i>
                    {item.title}
                  </span>
                </button>
              ))}
            </div>

            <div className="featu-lab-content">
              <div className="featu-lab-data site-radius-20">
                <div className="featu-lab-item">
                  <span className={`h2 ${features[activeIndex].icon}`}></span>
                  <h3 className="h5">{features[activeIndex].contentTitle}</h3>
                  <p>{features[activeIndex].contentDesc}</p>
                </div>
              </div>
            </div>
          </div>

          {/* MOBILE ACCORDION */}
          <Accordion type="single" collapsible className="w-full mt-10 space-y-4 feat-lab-mob-acrdn">
            {features.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200 rounded-xl px-4 accord-item"
              >
                <AccordionTrigger className="py-4 flex items-start gap-3 text-left pb-0 accord-trigr">
                  <i className={`${item.icon} text-xl pt-[4px]`}></i>
                  <span className="h5 text-md">{item.title}</span>

                   <ChevronDown style={{ color: "var(--grey)" }} className="mobile-accordion-arrow ml-auto transition-transform duration-300 accord-arrow" />
                </AccordionTrigger>

                <AccordionContent className="accord-content">
                  <div className="p-4 bg-[var(--blue-light)] rounded-xl">
                    <h3 className="h5 mt-3">{item.contentTitle}</h3>
                    <p className="mt-2">{item.contentDesc}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ---------------------- */}
      {/* PERFORMANCE SECTION   */}
      {/* ---------------------- */}

      <section className="section trial-performance">
        <div className="container">
          <div className="trail-prfmnc-headings">
            <h2 className="h3">{glanceTitle}</h2>

            <p className="h6 text-rg">{glanceSubtitle}</p>
          </div>

          <div className="performace-glance">
            <div className="glance-lists">

              {/* CARD 1 */}
              <div className="glance-list site-radius-20" style={{ backgroundColor: "var(--blue-light)" }}>
                <div className="glanc-list-icons">
                  <Image src="/images/solutionpage/CAPA-closure.png" alt="CAPA-closure" width={44} height={44} />
                  <span className="h4">50%</span>
                </div>

                <div className="glace-content">
                  <p className="h6">CAPA Closure Time</p>
                  <p>Reduced by 50%</p>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="glance-list site-radius-20" style={{ backgroundColor: "var(--green-light)" }}>
                <div className="glanc-list-icons">
                  <Image src="/images/solutionpage/TMF-completeness.png" alt="TMF-completeness" width={44} height={44} />
                  <span className="h4">{">95%"}</span>
                </div>

                <div className="glace-content">
                  <p className="h6">TMF Completeness</p>
                  <p>Consistently above 95%</p>
                </div>
              </div>

              {/* CARD 3 */}
              <div className="glance-list site-radius-20" style={{ backgroundColor: "var(--purple-light)" }}>
                <div className="glanc-list-icons">
                  <Image
                    src="/images/solutionpage/document-turnaround.png"
                    alt="document-turnaround"
                    width={44}
                    height={44}
                  />
                  <span className="h4">{"≤ 3 min"}</span>
                </div>

                <div className="glace-content">
                  <p className="h6">Document Turnaround</p>
                  <p>Ultra-fast processing</p>
                </div>
              </div>

              {/* CARD 4 */}
              <div className="glance-list site-radius-20" style={{ backgroundColor: "var(--orange-light)" }}>
                <div className="glanc-list-icons">
                  <Image
                    src="/images/solutionpage/inspection-readiness.png"
                    alt="inspection-readiness"
                    width={44}
                    height={44}
                  />
                  <span className="h4">{">90%"}</span>
                </div>

                <div className="glace-content">
                  <p className="h6">Inspection Readiness Score</p>
                  <p>Always audit-ready</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
