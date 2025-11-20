"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function BlogListingHero() {
  const [animate, setAnimate] = useState({
    heading: false,
    paragraph: false,
    image: false,
  });

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    // Heading
    timers.push(
      setTimeout(() => setAnimate((p) => ({ ...p, heading: true })), 500)
    );

    // Paragraph
    timers.push(
      setTimeout(() => setAnimate((p) => ({ ...p, paragraph: true })), 1200)
    );

    // Image
    timers.push(
      setTimeout(() => setAnimate((p) => ({ ...p, image: true })), 2000)
    );

    return () => timers.forEach((t) => clearTimeout(t));
  }, []);

  return (
    <>
      <section className="abt-hero site-hero">
        <div className="container">
          <div className="hero-cont-wrapper">

            {/* HEADING ANIMATION */}
            <div
              className={`hero-headings text-white transition-transform duration-700 ${
                animate.heading ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
              }`}
            >
              <h1>Smart Insights, Better Decisions</h1>

              <p
                className={`h6 text-rg transition-transform duration-700 ${
                  animate.paragraph
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-full opacity-0"
                }`}
              >
                Expert Insights on Trial Operations, Compliance, and Innovation.
              </p>
            </div>

            {/* IMAGE POP ANIMATION */}
            <div
              className={`hero-hilight transition-transform duration-700 transform ${
                animate.image ? "scale-100 opacity-100" : "scale-0 opacity-0"
              }`}
            >
              <Image
                src="/images/blogspage/blog-banner-final.webp"
                alt="About Hilight"
                width={601}
                height={299}
                className="page-img-hglt"
              />
            </div>

          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="page-info">
            <h2 className="h3">Transform Your Trial Operations Insights</h2>

            <p className="h6 text-rg">
              Expert Analysis, Deep Dives, and Industry Innovation Stay informed with curated
              content on trial transformation, compliance excellence, and operational leadership
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
