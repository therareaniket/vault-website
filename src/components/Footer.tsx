"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <>
            <footer className="main-footer">
                <div className="container">
                    <div className="footer-links-section">
                        <div className='social-media-section'>
                            <Image className='footer-dhatu-icon' src='/images/Footer/dhatuVault.svg' alt='menu-img' width={199} height={34} priority={false}></Image>

                            <div className='footer-text'>
                                <p className='text-16 text-rg'>Built for Security.  <br />   Trusted for Compliance.</p>
                            </div>

                            <Image className='linkedIn-Icon' src='/images/Footer/linkedInIcon.svg' alt='menu-img' width={28} height={28} priority={false}></Image>
                        </div>

                        <div className='footer-links'>
                            <div className='quick-links'>
                                <p className='text-18 text-md links-heading'>Quick Links</p>

                                <ul className=''>
                                    <li><Link className='text-16 text-rg' href="/About">About</Link></li>
                                    <li><Link className='text-16 text-rg' href="">Product</Link></li>
                                    <li><Link className='text-16 text-rg' href="">Solutions</Link></li>
                                    <li><Link className='text-16 text-rg' href="">Resources</Link></li>
                                    <li><Link className='text-16 text-rg' href="">Security & Compliance </Link></li>
                                </ul>
                            </div>

                            <div className='contact-info quick-links'>
                                <p className='text-18 text-md links-heading'>Contact info</p>

                                <ul className='contact-infolinks'>
                                    <li>
                                        <p className='text-16 text-rg'><span className='icon-footer-call'></span> <Link href="">+91 1234567891</Link> </p>
                                    </li>

                                    <li>
                                        <p className='text-16 text-rg'><span className='icon-footer-contact-email'></span><Link href="mailto:info@dhatucomply.com">info@dfoldsvault.com</Link> </p>
                                    </li>
                                </ul>
                            </div>

                            <div className='newsletter'>
                                <p className='text-18 text-md links-heading'>Newsletter</p>

                                <input className='newsletter-input text-16 text-rgc btn-padding' type="email" name="" id="" placeholder='Enter your mail' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-br-line">
                    <div className="container">
                        <div className="copy-right-links">
                            <div className='copy-right-section'>
                                <p className='text-14 text-rg '>Powered by DFOLDS</p>

                                <p className='text-14 text-rg '>DhatuVault 2025.1.1</p>

                                <p className='text-14 text-rg '>Copyright ©2025, all rights reserved. </p>
                            </div>

                            <div className='terms-links'>
                                <Link href="" className='text-14 text-rg '>Terms of Use</Link>

                                <Link href="" className='text-14 text-rg '>Privacy Policy</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='foot-cta'>
                    <div className="container">
                        <div className="footer-cta-bg site-radius-10">
                            <div className="footer-cta-text">
                                <h2 className='h3 text-sb'>Let Vault manage regulatory compliance </h2>

                                <p className='h6 text-rg'>From eTMF uploads to regulatory inspections, Vault streamlines clinical operations with automated accuracy, full traceability, and unmatched speed.</p>

                                <Link href="" className='footer-cta-button btn-bg btn-padding text-18 text-md'>Book a Demo</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer