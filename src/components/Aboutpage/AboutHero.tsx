"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

type AboutHomeProps = {
    aboutHeroTitle: string;
    aboutHeroSubtitle: string;

    infoTitle: string;
    infoSubtitle: string;
}

export default function AboutHero({aboutHeroTitle, aboutHeroSubtitle, infoTitle, infoSubtitle}:AboutHomeProps) {
  const [animate, setAnimate] = useState({
    heading: false,
    paragraph: false,
    image: false,
  });

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    // Animate heading first
    timers.push(
      setTimeout(() => setAnimate((prev) => ({ ...prev, heading: true })), 500)
    );

    // Animate paragraph after heading
    timers.push(
      setTimeout(() => setAnimate((prev) => ({ ...prev, paragraph: true })), 1200)
    );

    // Animate image after paragraph
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
            <div
              className={`hero-headings text-white transition-transform duration-700 ${
                animate.heading ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
              }`}
            >
              <h1>{aboutHeroTitle}</h1>
              <p className={`h6 text-rg transition-transform duration-700 ${   animate.paragraph ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0" }`}>{aboutHeroSubtitle}</p>
            </div>

            <div
              className={`hero-hilight transition-transform duration-700 transform ${
                animate.image ? "scale-100 opacity-100" : "scale-0 opacity-0"
              }`}
            >
              <Image
                src="/images/aboutpage/abt-hero-hglt.webp"
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
            <h2 className="h3">{infoTitle}</h2>
            <p className="h6 text-rg">{infoSubtitle}</p>
          </div>
        </div>
      </section>
    </>
  );
}
