"use client"

import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Progress } from "@/components/ui/progress"
import HmBlogArrow from "./HmBlogArrow"

const HomeBlogSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(70) // Start partially filled (70%)
  const [isSmallScreen, setIsSmallScreen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  // Detect screen width
  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth <= 400)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Scroll handling for progress bar / active dot
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const handleScroll = () => {
      const scrollLeft = el.scrollLeft
      const containerWidth = el.clientWidth
      const totalWidth = el.scrollWidth

      const visibleEnd = scrollLeft + containerWidth
      const progressPercent = (visibleEnd / totalWidth) * 100
      const adjustedProgress = Math.max(70, Math.min(progressPercent, 100))
      setProgress(adjustedProgress)

      // Determine active index for dots
      if (isSmallScreen) {
        const cardWidth = totalWidth / 3 // assuming 3 cards
        const index = Math.round(scrollLeft / cardWidth)
        setActiveIndex(index)
      }
    }

    handleScroll()
    el.addEventListener("scroll", handleScroll)
    return () => el.removeEventListener("scroll", handleScroll)
  }, [isSmallScreen])

  return (
    <section className="home-blog-section section">
      <div className="container">
        <div className="home-blog-wrapper">
          {/* Header */}
          <div className="hm-blog-head">
            <h2 className="text-sb">Thoughts & Updates</h2>
            <p className="text-rg h6">
              Explore expert insights, product innovations, and clinical trial strategies.
            </p>
          </div>

          {/* Scrollable Blog Cards */}
          <div
            ref={scrollRef}
            className="hm-blog-cards hide-scrollbar flex gap-[60px] scroll-smooth"
          >
            {/* Card 1 */}
            <div className="hm-blog-card hm-blog-card-1 relative">
              <span className="for-animation"></span>
              <div className="hm-blog-card-text hm-blog-card-text-1">
                <div className="hm-blog-text-wrap">
                  <h3 className="h5 text-md">Dashboards That Drive Decisions</h3>
                  <Link href="/BlogDetailPage">
                    <HmBlogArrow />
                  </Link>
                </div>
                <p className="text-18 text-rg">
                  How real-time insights improve trial oversight and streamline compliance.
                </p>
              </div>
              <div className="hm-blogs-links">
                <Link href="#" className="link-padding text-rg text-14">Data Visualization</Link>
                <p className="text-14 text-rg text-grey">23 October 2025</p>
              </div>
              <Image
                className="home-blog-img-1 site-radius-20"
                src="/images/HomePage/hm-blog-img-1.webp"
                alt="Dashboard"
                width={493}
                height={237}
              />
            </div>

            {/* Card 2 */}
            <div className="hm-blog-card-wrapper hm-blog-card-wrapper-2">
              <div className="hm-blog-card hm-blog-card-2 relative">
                <span className="for-animation"></span>
                <div className="hm-blog-card-text hm-blog-card-text-2">
                  <div className="hm-blog-text-wrap">
                    <h3 className="h5 text-md">5 Ways DhatuVault CTMS Reduces Study Time</h3>
                    <Link href="/BlogDetailPage"><HmBlogArrow /></Link>
                  </div>
                  <p className="text-18 text-rg">
                    Learn proven strategies for streamlining site activation, document management.
                  </p>
                </div>
                <div className="hm-blogs-links">
                  <Link href="#" className="link-padding text-rg text-14">Compliance & Security</Link>
                  <p className="text-14 text-rg text-grey">27 October 2025</p>
                </div>
                <Image
                  className="home-blog-img-2 site-radius-20"
                  src="/images/HomePage/hm-blog-img-2.webp"
                  alt="CTMS Study Startup"
                  width={493}
                  height={237}
                />
              </div>
            </div>

            {/* Card 3 */}
            <div className="hm-blog-card-wrapper hm-blog-card-wrapper-3">
              <div className="hm-blog-card hm-blog-card-3 relative">
                <span className="for-animation"></span>
                <div className="hm-blog-card-text hm-blog-card-text-3">
                  <div className="hm-blog-text-wrap">
                    <h3 className="h5 text-md">The Complete Guide to DhatuVault Integration</h3>
                    <Link href="/BlogDetailPage"><HmBlogArrow /></Link>
                  </div>
                  <p className="text-18 text-rg">
                    Explore how Vault unified integration hub connects EDC, eTMF, CRM.
                  </p>
                </div>
                <div className="hm-blogs-links">
                  <Link href="#" className="link-padding text-rg text-14">AI & Automation</Link>
                  <p className="text-14 text-rg text-grey">14 September 2025</p>
                </div>
                <Image
                  className="home-blog-img-3 site-radius-20"
                  src="/images/HomePage/hm-blog-img-3.webp"
                  alt="Integration"
                  width={493}
                  height={237}
                />
              </div>
            </div>
          </div>

          {/* Progress Bar / Dots */}
          <div className="hm-blog-progress mt-6 flex justify-center">
            {!isSmallScreen ? (
              <Progress
                value={progress}
                className="w-full h-[3px] bg-[rgba(0,0,0,0.1)]
                           [&>[data-slot=progress-indicator]]:bg-[var(--secondary)]
                           transition-all duration-300"
              />
            ) : (
              <div className="flex justify-center  gap-4">
                {[0, 1, 2].map((idx) => (
                  <span
                    key={idx}
                    className={`block w-3 h-3 rounded-full bg-[rgba(0,0,0,0.3)] 
                                ${activeIndex === idx ? "w-6 h-1 bg-[var(--secondary)] rounded-[2px]" : ""} 
                                transition-all duration-300`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeBlogSection
