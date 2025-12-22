"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const heroImages = [
  { src: "/images/HomePage/home-portfolio-svg.svg", width: 297, height: 279, className: "hm-hero-img-1" },
  { src: "/images/HomePage/hero-img-2.webp", width: 344, height: 150, className: "hm-hero-img-2" },
  { src: "/images/HomePage/hero-img-3.webp", width: 236, height: 216, className: "hm-hero-img-3" },
  { src: "/images/HomePage/demo.webp", width: 250, height: 200, className: "hm-hero-img-4" },
  { src: "/images/HomePage/home-hero-last-svg.svg", width: 264, height: 118, className: "hm-hero-img-5" },
];

type HeroProps = {
    home_hero_title: string;
    home_hero_subtitle: string;
    home_hero_cta_1?: { url: string; title: string } | null;
    home_hero_cta_2?: { url: string; title: string } | null;
};

const HomeHero = ({ home_hero_title, home_hero_subtitle, home_hero_cta_1, home_hero_cta_2, }: HeroProps) => {
  const [animate, setAnimate] = useState({
    title: false,
    subtitle: false,
    buttons: false,
    images: Array(heroImages.length).fill(false),
  });

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    // Animate title, subtitle, buttons
    const sequence = [
      { key: "title", delay: 0 },
      { key: "subtitle", delay: 1000 },
      { key: "buttons", delay: 1500 },
    ];

    sequence.forEach(({ key, delay }) => {
      timers.push(
        setTimeout(() => {
          setAnimate((prev) => ({ ...prev, [key]: true }));
        }, delay)
      );
    });

    // Animate images sequentially
    animate.images.forEach((_, idx) => {
      timers.push(
        setTimeout(() => {
          setAnimate((prev) => {
            const imagesCopy = [...prev.images];
            imagesCopy[idx] = true;
            return { ...prev, images: imagesCopy };
          });
        }, 2200 + idx * 200)
      );
    });

    return () => timers.forEach((t) => clearTimeout(t));
  }, []);

  return (
    <section className="home-hero">
      {/* Background video */}
      <div className="hero-bg-video">
        <video src="/images/HomePage/hero-bg-mp.mp4" loop autoPlay muted className="w-full h-full object-cover" />
      </div>
      <div className="container">
      {/* Hero content */}
      <div className="home-hero-content">
        <div className="hero-content-text">
          <h1 className={`hero-title transition-transform duration-700 ${animate.title ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0" }`} >
            {home_hero_title}
          </h1>

          <p className={`hero-subtitle transition-transform duration-700 ${animate.subtitle ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0" }`} >
            {home_hero_subtitle}
          </p>

          <div
            className={`home-hero-buttons duration-700 transform ${animate.buttons
                ? "scale-100 opacity-100"
                : "scale-0 opacity-0"
              }`}
          >
            {home_hero_cta_1 && (
                <Link href={home_hero_cta_1.url} title={home_hero_cta_1.title} className="btn-bg btn-padding text-md text-18">{home_hero_cta_1.title}</Link>
            )}

            {home_hero_cta_2 && (
                <Link href={home_hero_cta_2.url} title={home_hero_cta_2.title} className="btn-padding explore-prod-btn text-md text-18 site-radius-10 btn-bg btn-secondary">{home_hero_cta_2.title}</Link>
            )}
          </div>
        </div>

        <div className="hero-content-images">
          <div className="image-content-1">
            {heroImages.slice(0, 2).map((img, idx) => (
              <AnimatedImage key={idx} src={img.src} width={img.width} height={img.height} className={img.className} visible={animate.images[idx]}/>
            ))}
          </div>
          <div className="image-content-2">
            {heroImages.slice(2).map((img, idx) => (
              <AnimatedImage key={idx + 2} src={img.src} width={img.width} height={img.height} className={img.className} visible={animate.images[idx + 2]} />
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

// Reusable component for animated images
const AnimatedImage = ({
  src,
  width,
  height,
  visible,
  className,
}: {
  src: string;
  width: number;
  height: number;
  visible: boolean;
  className: string;
}) => (
  <div
    className={`transition-transform duration-700 ${visible ? "scale-100 opacity-100" : "scale-0 opacity-0"
      }`}
  >
    <Image src={src} width={width} height={height} className={className} alt="" />
  </div>
);

export default HomeHero;
