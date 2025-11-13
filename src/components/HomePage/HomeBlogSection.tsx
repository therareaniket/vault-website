"use client"

import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import HmBlogArrow from "@/components/HomePage/HmBlogArrow"
import { Progress } from "@/components/ui/progress"

const HomeBlogSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(70) // Start partially filled (70%)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const handleScroll = () => {
      const scrollLeft = el.scrollLeft
      const containerWidth = el.clientWidth
      const totalWidth = el.scrollWidth

      // Right edge of visible content
      const visibleEnd = scrollLeft + containerWidth

      // Calculate visible percentage
      const progressPercent = (visibleEnd / totalWidth) * 100

      // Clamp between 70% (start) and 100% (end)
      const adjustedProgress = Math.max(70, Math.min(progressPercent, 100))
      setProgress(adjustedProgress)
    }

    // Initialize and attach scroll listener
    handleScroll()
    el.addEventListener("scroll", handleScroll)
    return () => el.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="home-blog-section section">
      <div className="container">
        <div className="home-blog-wrapper">
          {/* ===== Header ===== */}
          <div className="hm-blog-head">
            <h2 className="text-sb">Thoughts & Updates</h2>
            <p className="text-rg h6">
              Explore expert insights, product innovations, and clinical trial strategies.
            </p>
          </div>

          {/* ===== Scrollable Blog Cards ===== */}
          <div
            ref={scrollRef}
            className="hm-blog-cards hide-scrollbar flex gap-[60px] scroll-smooth"
          >
            {/* ===== Card 1 ===== */}
            <div className="hm-blog-card hm-blog-card-1">
              <div className="hm-blog-card-text hm-blog-card-text-1">
                <div className="hm-blog-text-wrap">
                  <h3 className="h5 text-md">Dashboards That Drive Decisions</h3>
                  <HmBlogArrow />
                </div>
                <p className="text-18 text-rg">
                  How real-time insights improve trial oversight and streamline compliance.
                </p>
              </div>

              <div className="hm-blogs-links">
                <Link href="#" className="link-padding text-rg text-14">
                  Data Visualization
                </Link>
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

            {/* ===== Card 2 ===== */}
            <div className="hm-blog-card hm-blog-card-2">
              <div className="hm-blog-card-text hm-blog-card-text-2">
                <div className="hm-blog-text-wrap">
                  <h3 className="h5 text-md">
                    5 Ways DhatuVault CTMS Reduces Study Time
                  </h3>
                  <HmBlogArrow />
                </div>
                <p className="text-18 text-rg">
                  Learn proven strategies for streamlining site activation, document management.
                </p>
              </div>

              <div className="hm-blogs-links">
                <Link href="#" className="link-padding text-rg text-14">
                  Compliance & Security
                </Link>
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

            {/* ===== Card 3 ===== */}
            <div className="hm-blog-card hm-blog-card-3">
              <div className="hm-blog-card-text hm-blog-card-text-3">
                <div className="hm-blog-text-wrap">
                  <h3 className="h5 text-md">
                    The Complete Guide to DhatuVault Integration
                  </h3>
                  <HmBlogArrow />
                </div>
                <p className="text-18 text-rg">
                  Explore how Vault unified integration hub connects EDC, eTMF, CRM.
                </p>
              </div>

              <div className="hm-blogs-links">
                <Link href="#" className="link-padding text-rg text-14">
                  AI & Automation
                </Link>
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

          {/* ===== Progress Bar (visible only on smaller screens) ===== */}
          <div className="hm-blog-progress">
            <Progress
              value={progress}
              className="w-full h-[6px] my-6 bg-[rgba(0,0,0,0.1)]
                         [&>[data-slot=progress-indicator]]:bg-[var(--secondary)]
                         transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeBlogSection






