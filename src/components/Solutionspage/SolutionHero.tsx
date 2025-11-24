"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type SolutionHeroProps = {
    solutionsHeroTitle: string;
    solutionsHeroSubtitle: string;
}

export default function SolutionHero({solutionsHeroTitle, solutionsHeroSubtitle}:SolutionHeroProps) {
  const [animate, setAnimate] = useState({
    heading: false,
    paragraph: false,
    image: false,
  });

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    // Heading animation
    timers.push(
      setTimeout(() => setAnimate((prev) => ({ ...prev, heading: true })), 500)
    );

    // Paragraph animation
    timers.push(
      setTimeout(() => setAnimate((prev) => ({ ...prev, paragraph: true })), 1200)
    );

    // Image animation
    timers.push(
      setTimeout(() => setAnimate((prev) => ({ ...prev, image: true })), 2000)
    );

    return () => timers.forEach((t) => clearTimeout(t));
  }, []);

  return (
    <>
      <section className="abt-hero site-hero">
        <div className="container">
          <div className="hero-cont-wrapper">

            {/* HEADING + PARAGRAPH ANIMATION */}
            <div
              className={`hero-headings text-white transition-transform duration-700 ${
                animate.heading
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-full opacity-0"
              }`}
            >
              <h1>{solutionsHeroTitle}</h1>

              <p
                className={`h6 text-rg transition-transform duration-700 ${
                  animate.paragraph
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-full opacity-0"
                }`}
              >
                {solutionsHeroSubtitle}
              </p>
            </div>

            {/* IMAGE ANIMATION */}
            <div
              className={`hero-hilight transition-transform duration-700 transform ${
                animate.image ? "scale-100 opacity-100" : "scale-0 opacity-0"
              }`}
            >
              <Image
                src="/images/solutionpage/solu-hero-hglt.webp"
                alt="Solution Highlight"
                width={578}
                height={475}
                className="page-img-hglt"
              />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
