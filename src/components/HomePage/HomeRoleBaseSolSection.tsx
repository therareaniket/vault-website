"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

type RoleBasedProps = {
    workflowTitle: string;
    workflowSubtitle: string;
    planning: string;
    edlTemplates: string;
    issueTracking: string;
    etmfViewer: string;
    integrationHub: string;
    blindingManagement: string;
}

const HomeRoleBaseSolSection = ({workflowTitle, workflowSubtitle, planning, edlTemplates, issueTracking, etmfViewer, integrationHub, blindingManagement}:RoleBasedProps) => {

  const textData = {
    planning: {
      title: "Planning",
      desc: planning,
    },
    edl: {
      title: "EDL Templates",
      desc: edlTemplates,
    },
    issue: {
      title: "Issue Tracking",
      desc: issueTracking,
    },
    etmf: {
      title: "eTMF Viewer",
      desc: etmfViewer,
    },
    hub: {
      title: "Integration Hub",
      desc: integrationHub,
    },
    blinding: {
      title: "Blinding Management",
      desc: blindingManagement,
    },
  } as const;

  const buttonOrder: FeatureKey[] = [
    "planning",
    "edl",
    "issue",
    "etmf",
    "hub",
    "blinding",
  ];

  const [active, setActive] = useState<FeatureKey>("planning");
  const [animKey, setAnimKey] = useState(0);
  const [pauseAutoplay, setPauseAutoplay] = useState(false);
  

  // refs for safe DOM access
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef(null); // .hm-role-section-main
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [sectionVisible, setSectionVisible] = useState(false);

  // 🔄 Autoplay every 3 seconds (keeps your current timing)
  useEffect(() => {
    if (pauseAutoplay) return;

    const interval = setInterval(() => {
      const currentIndex = buttonOrder.indexOf(active);
      const nextIndex = (currentIndex + 1) % buttonOrder.length;

      setActive(buttonOrder[nextIndex]);
      setAnimKey(prev => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [active, pauseAutoplay]);

  // Observe section visibility so we only center when user is viewing this section
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
  // Defer the state update → no more ESLint error
  Promise.resolve().then(() => setSectionVisible(true));
  return;
}

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          // consider visible if at least 30% of section is in viewport
          setSectionVisible(entry.intersectionRatio >= 0.3);
        });
      },
      { threshold: [0, 0.3, 0.6, 1] }
    );

    observerRef.current.observe(el);

    return () => {
      if (observerRef.current && el) observerRef.current.unobserve(el);
    };
  }, []);

  // Auto-center active button when active changes, but only if sectionVisible and mobile
  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const activeBtn = container.querySelector(".active-role-btn");

    if (!activeBtn) return;

    // only center on small screens and when section is visible
    if (window.innerWidth <= 991 && sectionVisible) {
      activeBtn.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [active, sectionVisible]);

  // Manual click handler (pauses autoplay briefly)

type FeatureKey = keyof typeof textData;

const handleManualClick = (key: FeatureKey) => {
    setActive(key);
    setAnimKey(prev => prev + 1);
  
    setPauseAutoplay(true);
    setTimeout(() => setPauseAutoplay(false), 1000);
  
    setTimeout(() => {
      if (containerRef.current && window.innerWidth <= 991 && sectionVisible) {
        const btn = containerRef.current.querySelector(".active-role-btn");
        if (btn) {
          btn.scrollIntoView({
            behavior: "smooth",
            inline: "center",
            block: "nearest"
          });
        }
      }
    }, 80);
  };
  

  return (
    <section ref={sectionRef} className="hm-role-section-main section">
      <div className="container">
        <div className="role-base-sol-wrapper">

          <div className="role-base-soln-text">
            <h2 className="role-base-soln-head text-md">{workflowTitle}</h2>
            <p className="role-base-soln-para h6 text-rg">{workflowSubtitle}</p>
          </div>

          <Image
            className="role-section-model"
            src="/images/HomePage/role-section-model.webp"
            alt="role-section-model"
            width={655}
            height={500}
          />

          <div className="role-base-sol-chart">

            {/* LEFT — ANIMATED TEXT */}
            <div key={animKey} className="role-sol-para">
              <div className="fade-slide">
                <h3 className="h4 text-sb">{textData[active].title}</h3>
                
                <p className="text-rg h6">{textData[active].desc}</p>
              </div>

              <Link href="/Contact" className="role-btn btn-padding btn-bg btn-secondary site-radius-10 text-md text-18">
                Book a Demo
              </Link>
            </div>

            {/* BUTTONS */}
            <div ref={containerRef} className="role-chart-buttons">

              <button
                onClick={() => handleManualClick("planning")}
                className={`planning-btn site-radius-106 text-16 text-rg link-padding 
                  ${active === "planning" ? "active-role-btn" : ""}`}
              >
                Planning
                <Image className="planning-svg" src="/images/HomePage/role-svg-1.svg" width={56} height={57} alt="svg" />
              </button>

              <button
                onClick={() => handleManualClick("edl")}
                className={`edl-templates-btn site-radius-106 text-16 text-rg link-padding 
                  ${active === "edl" ? "active-role-btn" : ""}`}
              >
                EDL Templates
                <Image className="edl-1-svg" src="/images/HomePage/role-svg-2.svg" width={80} height={168} alt="svg" />
                <Image className="edl-2-svg" src="/images/HomePage/role-svg-3.svg" width={80} height={168} alt="svg" />
              </button>

              <div className="mid-group">

                <button
                  onClick={() => handleManualClick("issue")}
                  className={`issue-tracking-btn site-radius-106 text-16 text-rg link-padding 
                    ${active === "issue" ? "active-role-btn" : ""}`}
                >
                  Issue Tracking
                </button>

                <button
                  onClick={() => handleManualClick("etmf")}
                  className={`etmf-viewer-btn site-radius-106 text-16 text-rg link-padding
                    ${active === "etmf" ? "active-role-btn" : ""}`}
                >
                  eTMF Viewer
                  <Image className="tracking-1-svg" src="/images/HomePage/role-svg-6.svg" width={1} height={56} alt="svg" />
                  <Image className="tracking-2-svg" src="/images/HomePage/role-svg-7.svg" width={1} height={78} alt="svg" />
                  <Image className="tracking-3-svg" src="/images/HomePage/role-svg-9.svg" width={1} height={78} alt="svg" />
                  <Image className="tracking-4-svg" src="/images/HomePage/role-svg-8.svg" width={1} height={56} alt="svg" />
                </button>

                <button
                  onClick={() => handleManualClick("hub")}
                  className={`int-hub-btn site-radius-106 text-16 text-rg link-padding relative z-[10]
                    ${active === "hub" ? "active-role-btn" : ""}`}
                >
                  Integration Hub
                </button>

              </div>

              <button
                onClick={() => handleManualClick("blinding")}
                className={`blinding-manage-btn site-radius-106 text-16 text-rg link-padding relative
                  ${active === "blinding" ? "active-role-btn" : ""}`}
              >
                Blinding Management
                <Image className="blinding-1-svg" src="/images/HomePage/role-svg-4.svg" width={82} height={137} alt="svg" />
                <Image className="blinding-2-svg" src="/images/HomePage/role-svg-5.svg" width={82} height={137} alt="svg" />
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeRoleBaseSolSection;