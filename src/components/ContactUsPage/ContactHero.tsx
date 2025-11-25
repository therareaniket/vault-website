"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

type ContactHeroProps = {
    contactHeroTitle: string;
    contactHeroSubtitle: string;
}

const ContactHero = ({contactHeroTitle, contactHeroSubtitle}: ContactHeroProps) => {
  const [animate, setAnimate] = useState({
    heading: false,
    paragraph: false,
    image: false,
  });

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    // Heading animation
    timers.push(
      setTimeout(() => setAnimate((p) => ({ ...p, heading: true })), 500)
    );

    // Paragraph animation
    timers.push(
      setTimeout(() => setAnimate((p) => ({ ...p, paragraph: true })), 1200)
    );

    // Image animation
    timers.push(
      setTimeout(() => setAnimate((p) => ({ ...p, image: true })), 2000)
    );

    return () => timers.forEach((t) => clearTimeout(t));
  }, []);

  return (
    <section className="contact-hero site-hero">
      <div className="container">
        <div className="hero-cont-wrapper">

          {/* HEADING ANIMATION */}
          <div
            className={`hero-headings text-white transition-transform duration-700 ${
              animate.heading ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
            }`}
          >
            <h1>{contactHeroTitle}</h1>

            <p
              className={`h6 text-rg transition-transform duration-700 ${
                animate.paragraph
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-full opacity-0"
              }`}
            >
                {contactHeroSubtitle}
            </p>
          </div>

          {/* IMAGE ANIMATION */}
          <div
            className={`hero-hilight transition-transform duration-700 transform ${
              animate.image ? "scale-100 opacity-100" : "scale-0 opacity-0"
            }`}
          >
            <Image
              src="/images/contactUs/contact-hero-img.webp"
              alt="About Hilight"
              width={638}
              height={422}
              className="cntct-hero-img page-img-hglt"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
