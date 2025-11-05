"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* HEADER stays visible at all times */}
      <header className={isMenuOpen ? "menu-open" : ""}>
        <div className="container">
          <div className="Header-main">
            {/* Menu / Close Icon */}
            <div className="menu-icon site-radius-10" onClick={toggleMenu}>
              {!isMenuOpen ? (
                <Image src="/images/Header/menuIcon.svg" alt="menu-img" width={30} height={30} priority/>
              ) : (
                <Image src="/images/Header/closeIcon.svg" alt="close-menu" width={30} height={30} priority />
              )}
            </div>

            {/* Logo */}
            {/* <Image
              className="dhatuVault-logo"
              src="/images/Header/dhatu-vault-logo.png"
              alt="logo"
              width={195}
              height={29}
              priority
              draggable={false}
            /> */}

            <Image className='footer-dhatu-icon' src='/images/Footer/dhatuVault.svg' alt='menu-img' width={199} height={34} priority={false}></Image>

            {/* Contact Button */}
            <Link
              href="#"
              title="Contact Us"
              className="contact-btn btn-padding btn-bg site-radius-10 text-md text-18"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </header>

      {/* Mega Menu — Appears Behind Header */}
      <div className={`mega-menu ${isMenuOpen ? "show" : ""}`}>
        <div className="mega-menu-content container">
          <ul className="menu-links">
            <li className="h2 text-sb">
              <Link href="/" onClick={closeMenu}>  Home  </Link><Image src="/images/Header/arrowIcon.svg" alt="linkedin" width={32} height={32} ></Image>
            </li>

            <li className="h2 text-sb">
              <Link href="/About" onClick={closeMenu}> About </Link><Image src="/images/Header/arrowIcon.svg" alt="linkedin" width={32} height={32} ></Image> 
            </li>

            <li className="h2 text-sb">
              <Link href="#" onClick={closeMenu}> Solutions </Link><Image src="/images/Header/arrowIcon.svg" alt="linkedin" width={32} height={32} ></Image> 
            </li>

            <li className="h2 text-sb">
              <Link href="#" onClick={closeMenu}> Security & Compliance </Link><Image src="/images/Header/arrowIcon.svg" alt="linkedin" width={32} height={32} ></Image>
            </li>

            <li className="h2 text-sb">
              <Link href="#" onClick={closeMenu}> Blog </Link><Image src="/images/Header/arrowIcon.svg" alt="linkedin" width={32} height={32} ></Image>
            </li>

            <li className="h2 text-sb ">
              <Link className="contact-menu-text" href="#" onClick={closeMenu}> Contact </Link><Image src="/images/Header/arrowIcon.svg" alt="linkedin" width={32} height={32} ></Image>
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
                <span className="icon-calllcon"></span><Link href="#">+91 9568567412</Link> 
              </div>

              <div className="h6 text-rg contact-detail-header">
                <span className="icon-locationIcon"></span><Link href="#">2445 Oak Ridge Omaha, QA 45065</Link> 
              </div>

                    <hr className="my-[20px]  opacity-[40%]" />
                          <div >
                              <p className="contact-title h5 text-sb">Follow</p>
                              <Link href="#" onClick={closeMenu}>
                                  <Image className="linkedin-header-link" src="/images/Header/linkedInIcon.svg" alt="linkedin" width={24} height={2} />
                              </Link>
                          </div>
            </div>

            {/* <Image className="megaMenuSvg" src="/images/Header/megMenuSvg.svg" alt="mega-menu-svg" width={190} height={189}></Image> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;



   
   
