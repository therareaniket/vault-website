"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // optional if you want page-specific behavior

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const headerRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Optional: if you want this behavior only on Home page
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // Stop hide/show when mega menu is open
      if (isMenuOpen) {
        setHideHeader(false);
        return;
      }

      // If you want hide/show only on Home page


      const navbarHeight = headerRef.current?.offsetHeight || 0;
      const triggerPoint = window.innerHeight - navbarHeight;

      if (currentScroll <= triggerPoint) {
        setHideHeader(false);
        setLastScrollY(currentScroll);
        return;
      }

      if (currentScroll > lastScrollY) {
        // scrolling down
        setHideHeader(true);
      } else {
        // scrolling up
        setHideHeader(false);
      }

      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isMenuOpen, isHome]);

  return (
    <>
      <header
        ref={headerRef}
        className={`${isMenuOpen ? "menu-open" : ""} ${hideHeader ? "header-hide" : ""}`}
      >
        <div className="container">
          <div className="Header-main">

            <div className="menu-icon site-radius-10" onClick={toggleMenu}>
              {!isMenuOpen ? (
                <Image src="/images/Header/menuIcon.svg" alt="menu-img" width={30} height={30} priority />
              ) : (
                <Image src="/images/Header/closeIcon.svg" alt="close-menu" width={30} height={30} priority />
              )}
            </div>

            <Link href="/">
              <Image
                className="header-dhatu-icon"
                src="/images/Footer/dhatuVault.svg"
                alt="menu-img"
                width={199}
                height={34}
              />
            </Link>

            <Link
              href="/Contact" onClick={closeMenu}
              className="contact-btn btn-padding btn-bg site-radius-10 text-md text-18"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </header>

      {/* Mega Menu */}
      <div className={`mega-menu ${isMenuOpen ? "show" : ""}`}>
        <div className="mega-menu-content container">
          <ul className="menu-links">
            <li className="h2 text-sb">
              <Link href="/" onClick={closeMenu}>Home</Link>
              <Image src="/images/Header/arrowIcon.svg" alt="arrow" width={32} height={32} />
            </li>
            <li className="h2 text-sb">
              <Link href="/About" onClick={closeMenu}>About</Link>
              <Image src="/images/Header/arrowIcon.svg" alt="arrow" width={32} height={32} />
            </li>
            <li className="h2 text-sb">
              <Link href="/Solutions" onClick={closeMenu}>Solutions</Link>
              <Image src="/images/Header/arrowIcon.svg" alt="arrow" width={32} height={32} />
            </li>
            <li className="h2 text-sb">
              <Link href="/Security&Compliance" onClick={closeMenu}>Security & Compliance</Link>
              <Image src="/images/Header/arrowIcon.svg" alt="arrow" width={32} height={32} />
            </li>
            <li className="h2 text-sb">
              <Link href="/Blogs" onClick={closeMenu}>Blog</Link>
              <Image src="/images/Header/arrowIcon.svg" alt="arrow" width={32} height={32} />
            </li>
            <li className="h2 text-sb contact-menu-list">
              <Link href="/Contact" onClick={closeMenu} className="contact-menu-text">Contact</Link>
              <Image src="/images/Header/arrowIcon.svg" alt="arrow" width={32} height={32} />
            </li>
          </ul>

          <div className="menu-contact">
            <p className="contact-title h5 text-sb">Connect</p>

            <div className="contact-title-text">
              <div className="h6 text-rg contact-detail-header">
                <span className="icon-mailIcon"></span>
                <Link href="mailto:info@dhatavault.com">info@dhatavault.com</Link>
              </div>

              <div className="h6 text-rg contact-detail-header">
                <span className="icon-calllcon"></span>
                <Link href="#">+91 9568567412</Link>
              </div>

              <div className="h6 text-rg contact-detail-header">
                <span className="icon-locationIcon"></span>
                <Link href="#">2445 Oak Ridge Omaha, QA 45065</Link>
              </div>

              <hr className="my-[20px] opacity-[40%]" />

              <div>
                <p className="contact-title h5 text-sb">Follow</p>
                <Link href="#" onClick={closeMenu}>
                  <Image
                    className="linkedin-header-link"
                    src="/images/Header/linkedInIcon.svg"
                    alt="linkedin"
                    width={24}
                    height={24}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
