"use client"

import Image from "next/image";
import Link from "next/link";

export default function ComingSoon() {
    return (
        <section className="coming-soon">
            <div className="comingsoon-wrapper">
                <Image src="/images/comingsoon/comingsoon-DV-svg.svg" alt="coming-soon-svg" width={315} height={50}></Image>

                <p className="h5" style={{ color: '#3A3A3A' }}>Coming Soon...</p>

                <h3 style={{ color: '#3A3A3A' }}>eTMF Made it Simple.</h3>

                <Link href="/Contact" className="coming-erly-acc site-radius-10">Get Early Access</Link>
            </div>
        </section>
    );
}