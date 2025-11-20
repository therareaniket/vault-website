"use client";
import Image from "next/image";
import Link from "next/link";

const ContactCustomerSupport = () => {
    return (
        <div className="customer-support-main section">
            <div className="container">
                <div className="customer-support-wrapper">
                    <div className="contact-card-1  site-radius-10">
                        <p className="site-radius-5 contact-cust-tag-new text-rg">I’m New Here</p>
                            <span className="icon-live_help"></span>
                        <div className="customer-text-wrp">

                            <p className="text-18 text-rg">Need a DhatuVault demo? Questions about pricing or features?</p>

                            <Link href="mailto:sales@dhatuvault.com" className="text-18 text-rg">sales@dhatuvault.com</Link>
                        </div>
                    </div>

                    <div className="contact-card-1 contact-card-2  site-radius-10">
                        <p className="site-radius-5 contact-cust-tag-existing text-rg">Existing Customer</p>
                            <span className="icon-contact-page-need-help"></span>
                        <div className="customer-text-wrp">

                            <p className="text-18 text-rg">Need help with DhatuVault licenses, plan changes, or additional modules?</p>

                            <Link href="mailto:sales@dhatuvault.com" className="text-18 text-rg">sales@dhatuvault.com</Link>
                        </div>
                    </div>

                    <div className="contact-card-1 contact-card-3 site-radius-10">
                        {/* <p className="site-radius-5 contact-cust-tag-new text-rg">I’m New Here</p> */}
                            <span className="icon-contact-page-ready-to"></span>
                        <div className="customer-text-wrp">

                            <p className="text-18 text-rg">Ready to renew your subscription or need information about your current plan details?</p>

                            <Link href="mailto:upgrade@dhatuvault.com" className="text-18 text-rg">upgrade@dhatuvault.com</Link>
                        </div>
                    </div>

                    <div className="contact-card-1 contact-card-4 site-radius-10">
                        {/* <p className="site-radius-5 contact-cust-tag-new text-rg">I’m New Here</p> */}
                            <span className="icon-contact-page-cancelling-sub"></span>
                        <div className="customer-text-wrp">

                            <p className="text-18 text-rg">Need a DhatuVault demo? Questions about pricing or features?</p>

                            <Link href="mailto:sales@dhatuvault.com" className="text-18 text-rg">sales@dhatuvault.com</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactCustomerSupport
