"use client"

import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Progress } from "@/components/ui/progress"
import HmBlogArrow from "./HmBlogArrow"

type BlogProps = {
  blogsTitle: string;
  blogsSubtitle: string;
}

const HomeBlogSection = ({ blogsTitle, blogsSubtitle }: BlogProps) => {
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const initialAnimatedRef = useRef(false) // ensures first animation runs once

  const [progress, setProgress] = useState(70)
  const [isSmallScreen, setIsSmallScreen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  // Detect screen width
  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth <= 1100)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Utility: return actual .hm-blog-card inside wrapper
  const getCardFromWrapper = (wrapper: HTMLElement): HTMLElement | null => {
    if (wrapper.classList.contains("hm-blog-card")) return wrapper
    return wrapper.querySelector(".hm-blog-card")
  }

  // Find centered card index
  const findCenteredIndex = (container: HTMLDivElement) => {
    const children = Array.from(container.children) as HTMLElement[]
    const scrollLeft = container.scrollLeft
    const containerWidth = container.clientWidth
    const viewCenter = scrollLeft + containerWidth / 2

    let closest = 0
    let minDist = Infinity

    children.forEach((child, idx) => {
      const childCenter = child.offsetLeft + child.clientWidth / 2
      const dist = Math.abs(childCenter - viewCenter)
      if (dist < minDist) {
        minDist = dist
        closest = idx
      }
    })

    return closest
  }

  // Activate card animation
  const activateCard = (cardEl: HTMLElement | null) => {
    if (!cardEl) return
    cardEl.classList.add("active-animation")
    cardEl.querySelector(".for-animation")?.classList.add("animate")
  }

  // Deactivate animation
  const deactivateCard = (cardEl: HTMLElement | null) => {
    if (!cardEl) return
    cardEl.classList.remove("active-animation")
    cardEl.querySelector(".for-animation")?.classList.remove("animate")
  }

  // Scroll + progress + mobile animation logic
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const handleScroll = () => {
      const scrollLeft = el.scrollLeft
      const containerWidth = el.clientWidth
      const totalWidth = el.scrollWidth

      // Progress bar logic
      const visibleEnd = scrollLeft + containerWidth
      const progressPercent = (visibleEnd / totalWidth) * 100
      const adjustedProgress = Math.max(70, Math.min(progressPercent, 100))
      setProgress(adjustedProgress)

      // MOBILE animation logic
      if (isSmallScreen) {
        const children = Array.from(el.children) as HTMLElement[]
        let closest = 0
        let minDist = Infinity

        children.forEach((child, idx) => {
          const childCenter = child.offsetLeft + child.clientWidth / 2
          const viewCenter = scrollLeft + containerWidth / 2
          const dist = Math.abs(childCenter - viewCenter)

          const card = getCardFromWrapper(child)
          if (card) deactivateCard(card)

          if (dist < minDist) {
            minDist = dist
            closest = idx
          }
        })

        const centeredWrapper = children[closest]
        const centeredCard = getCardFromWrapper(centeredWrapper)
        if (centeredCard) activateCard(centeredCard)

        setActiveIndex(closest)
      }
    }

    el.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // initial call

    return () => el.removeEventListener("scroll", handleScroll)
  }, [isSmallScreen])

  // ⭐ Initial animation when FIRST CARD becomes visible
  // ⭐ Initial animation when FIRST CARD becomes visible on mobile
  useEffect(() => {
    // Only run this auto‑animation in mobile view
    if (!isSmallScreen) return

    const container = scrollRef.current
    if (!container) return

    const firstWrapper = container.children[0] as HTMLElement
    if (!firstWrapper) return

    const firstCard = getCardFromWrapper(firstWrapper)
    if (!firstCard) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        // When section comes into view for the first time on mobile,
        // trigger the first card animation once.
        if (entry.isIntersecting && !initialAnimatedRef.current) {
          initialAnimatedRef.current = true
          requestAnimationFrame(() => {
            activateCard(firstCard)
            setActiveIndex(0)
          })
          observer.disconnect()
        }
      },
      {
        // Slightly looser threshold so animation starts as soon as
        // user reaches the section.
        threshold: 0.3,
      }
    )

    observer.observe(firstWrapper)

    return () => observer.disconnect()
  }, [isSmallScreen])



  // Scroll to card using dots
  const scrollToCard = (index: number) => {
    const el = scrollRef.current
    if (!el) return
    const child = el.children[index] as HTMLElement
    if (child) {
      const left = child.offsetLeft - (el.clientWidth / 2 - child.clientWidth / 2)
      el.scrollTo({ left, behavior: "smooth" })
    }
  }

  return (
    <section className="home-blog-section section">
      <div className="container">
        <div className="home-blog-wrapper">

          {/* Header */}
          <div className="hm-blog-head">
            <h2 className="text-sb">{blogsTitle}</h2>
            <p className="text-rg h6">{blogsSubtitle}</p>
          </div>

          {/* Scrollable Cards */}
          <div
            ref={scrollRef}
            className="hm-blog-cards hide-scrollbar flex gap-[60px] scroll-smooth 
                       snap-x snap-mandatory"
          >

            {/* Card 1 */}
            <Link href="/Blog/understanding-regulatory-compliance-in-clinical-trials" className="block">
              <div className="hm-blog-card hm-blog-card-1 relative snap-center">
                <span className="for-animation"></span>

                <div className="hm-blog-card-text hm-blog-card-text-1">
                  <div className="blog-text-res-wrap">
                    <div className="hm-blog-text-wrap">
                      <h3 className="h5 text-md">Understanding Regulatory Compliance in Clinical Trials</h3>
                      <Link href="/Blogs"><HmBlogArrow /></Link>
                    </div>

                    <p className="text-18 text-rg">
                      Explore how DhatuVault connects with your existing clinical systems to create a unified excecution.
                    </p>

                    <div className="hm-blogs-links">
                      <Link href="#" className="link-padding text-rg text-14">Compliance</Link>
                      <p className="text-14 text-rg text-grey">27 October 2025</p>
                    </div>
                  </div>
                </div>

                <Image
                  className="home-blog-img-1 site-radius-20"
                  src="/images/blogspage/BlogListing-img-1.webp"
                  alt="Dashboard"
                  width={493}
                  height={237}
                />
              </div>
            </Link>

            {/* Card 2 */}
            <Link href="/Blog/navigating-21-cfr-part-11-in-clinical-data-systems" className="block">
              <div className="hm-blog-card-wrapper hm-blog-card-wrapper-2 snap-center">
                <div className="hm-blog-card hm-blog-card-2 relative">
                  <span className="for-animation"></span>

                  <div className="blog-text-res-wrap">
                    <div className="hm-blog-card-text hm-blog-card-text-2">
                      <div className="hm-blog-text-wrap">
                        <h3 className="h5 text-md">Navigating 21 CFR Part 11 in Clinical Data Systems</h3>
                        <Link href="/Blogs"><HmBlogArrow /></Link>
                      </div>

                      <p className="text-18 text-rg">
                        Learn proven strategies for streamlining site activation, document management.
                      </p>
                    </div>

                    <div className="hm-blogs-links">
                      <Link href="#" className="link-padding text-rg text-14">Compliance</Link>
                      <p className="text-14 text-rg text-grey">27 October 2025</p>
                    </div>
                  </div>

                  <Image
                    className="home-blog-img-2 site-radius-20"
                    src="/images/blogspage/BlogListing-img-2.webp"
                    alt="CTMS Study Startup"
                    width={493}
                    height={237}
                  />
                </div>
              </div>
            </Link>

            {/* Card 3 */}
            <Link href="/Blog/hippa-clinical-research" className="block">
              <div className="hm-blog-card-wrapper hm-blog-card-wrapper-3 snap-center">
                <div className="hm-blog-card hm-blog-card-3 relative">
                  <span className="for-animation"></span>

                  <div className="blog-text-res-wrap">
                    <div className="hm-blog-card-text hm-blog-card-text-3">
                      <div className="hm-blog-text-wrap">
                        <h3 className="h5 text-md">HIPAA & Clinical Research: Protecting PHI in Trial Settings</h3>
                        <Link href="/Blogs"><HmBlogArrow /></Link>
                      </div>

                      <p className="text-18 text-rg">
                        Watch how DhatuVault supports every phase of a clinical trial—from design to closeout.
                      </p>
                    </div>

                    <div className="hm-blogs-links">
                      <Link href="#" className="link-padding text-rg text-14">Compliance</Link>
                      <p className="text-14 text-rg text-grey">27 October 2025</p>
                    </div>
                  </div>

                  <Image
                    className="home-blog-img-3 site-radius-20"
                    src="/images/blogspage/BlogListing-img-3.webp"
                    alt="Integration"
                    width={493}
                    height={237}
                  />
                </div>
              </div>
            </Link>
          </div>

          {/* Progress / Dots */}
          <div className="hm-blog-progress mt-6 flex justify-center">
            {!isSmallScreen ? (
              <Progress
                value={progress}
                className="w-full h-[3px] bg-[rgba(0,0,0,0.1)]
                           [&>[data-slot=progress-indicator]]:bg-[var(--secondary)]
                           transition-all duration-300"
              />
            ) : (
              <div className="flex justify-center gap-2">
                {[0, 1, 2].map((idx) => (
                  <span
                    key={idx}
                    onClick={() => scrollToCard(idx)}
                    className={`block cursor-pointer w-1 h-1 rounded-full bg-[rgba(0,0,0,0.3)]
                      ${activeIndex === idx ? "w-3 h-1 bg-[var(--secondary)] rounded-[2px]" : ""}
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
