// "use client"

// import Image from "next/image";
// import Link from "next/link";

// type ContactLinkProps = {
//     phoneNumber: string;
//     email: string
// }

// export default function FooterLinks({phoneNumber, email}: ContactLinkProps) {
//     return (
//         <>
//             <div className="footer-links-section">
//                         <div className='social-media-section'>
//                             <Image className='footer-dhatu-icon' src='/images/Footer/dhatuVault.svg' alt='menu-img' width={199} height={34} priority={false}></Image>

//                             <div className='footer-text'>
//                                 <p className='text-16 text-rg'>Built for Security.<br />Trusted for Compliance.</p>
//                             </div>

//                             <Image className='linkedIn-Icon' src='/images/Footer/linkedInIcon.svg' alt='menu-img' width={28} height={28} priority={false}></Image>
//                         </div>

//                         <div className='footer-links'>
//                             <div className='quick-links'>
//                                 <p className='text-18 text-md links-heading'>Quick Links</p>

//                                 <ul className='foot-quick-links'>
//                                     <li><Link className='text-16 text-rg' href="/About">About</Link></li>
//                                     <li><Link className='text-16 text-rg' href="/Solutions">Solutions</Link></li>
//                                     <li><Link className='text-16 text-rg' href="/Security&Compliance">Security & Compliance </Link></li>
//                                     <li><Link className='text-16 text-rg' href="/Blogs">Resources</Link></li>
//                                     <li><Link className='text-16 text-rg' href="/Contact">Contact</Link></li>
//                                 </ul>
//                             </div>

//                             <div className='contact-info quick-links'>
//                                 <p className='text-18 text-md links-heading'>Contact info</p>

//                                 <ul className='contact-infolinks'>
//                                     <li>
//                                         <p className='text-16 text-rg'><span className='icon-calllcon'></span> <Link href="tel:`{phoneNumber}`">{phoneNumber}</Link> </p>
//                                     </li>

//                                     <li>
//                                         <p className='text-16 text-rg'><span className='icon-mailIcon'></span><Link href="mailto:`{email}`">{email}</Link> </p>
//                                     </li>
//                                 </ul>
//                             </div>

//                             <div className='newsletter'>
//                                 <p className='text-18 text-md links-heading'>Newsletter</p>

//                                 <input className='newsletter-input text-16 text-rgc btn-padding' type="email" name="" id="" placeholder='Enter your mail' />

//                                 <button type="submit" className='btn-bg foot-news-ltr'>Submit</button>
//                             </div>
//                         </div>
//                     </div>
//         </>
//     );
// }

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type ContactLinkProps = {
    phoneNumber: string;
    email: string;
};

export default function FooterLinks({ phoneNumber, email }: ContactLinkProps) {
    const pathname = usePathname();

    // Function to check active link
    const isActive = (href: string) => {
        // Convert both to lowercase to avoid case mismatch
        return pathname?.toLowerCase() === href.toLowerCase();
    };

    return (
        <>
            <div className="footer-links-section">
                <div className='social-media-section'>
                    <Image className='footer-dhatu-icon' src='/images/Footer/dhatuVault.svg' alt='menu-img' width={199} height={34} priority={false} />

                    <div className='footer-text'>
                        <p className='text-16 text-rg'>Built for Security.<br />Trusted for Compliance.</p>
                    </div>

                    <Image className='linkedIn-Icon' src='/images/Footer/linkedInIcon.svg' alt='menu-img' width={28} height={28} priority={false} />
                </div>

                <div className='footer-links'>
                    <div className='quick-links'>
                        <p className='text-18 text-md links-heading'>Quick Links</p>

                        <ul className='foot-quick-links'>
                            <li>
                                <Link
                                    href="/About"
                                    className={`text-16 text-rg ${isActive("/About") ? "active-footer-link" : ""}`}
                                >
                                    About
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/Solutions"
                                    className={`text-16 text-rg ${isActive("/Solutions") ? "active-footer-link" : ""}`}
                                >
                                    Solutions
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/Security&Compliance"
                                    className={`text-16 text-rg ${isActive("/Security&Compliance") ? "active-footer-link" : ""}`}
                                >
                                    Security & Compliance
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/Blogs"
                                    className={`text-16 text-rg ${isActive("/Blogs") ? "active-footer-link" : ""}`}
                                >
                                    Resources
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/Contact"
                                    className={`text-16 text-rg ${isActive("/Contact") ? "active-footer-link" : ""}`}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className='contact-info quick-links'>
                        <p className='text-18 text-md links-heading'>Contact info</p>

                        <ul className='contact-infolinks'>
                            <li>
                                <p className='text-16 text-rg'>
                                    <span className='icon-calllcon'></span>
                                    <Link href={`tel:${phoneNumber}`}>{phoneNumber}</Link>
                                </p>
                            </li>

                            <li>
                                <p className='text-16 text-rg'>
                                    <span className='icon-mailIcon'></span>
                                    <Link href={`mailto:${email}`}>{email}</Link>
                                </p>
                            </li>
                        </ul>
                    </div>

                    <div className='newsletter'>
                        <p className='text-18 text-md links-heading'>Newsletter</p>

                        <input
                            className='newsletter-input text-16 text-rgc btn-padding'
                            type="email"
                            placeholder='Enter your mail'
                        />

                        <button type="submit" className='btn-bg foot-news-ltr'>Submit</button>
                    </div>
                </div>
            </div>
        </>
    );
}
