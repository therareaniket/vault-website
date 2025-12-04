"use client";
import Link from "next/link";

const ContactCustomerSupport = () => {
    return (
        <div className="section customer-support-main" style={{ paddingBottom: 0 }}>
            <div className="container">
                <div className="customer-support-wrapper">
                    <div className="contact-card-1  site-radius-10">
                        <p className="site-radius-5 contact-cust-tag-new text-rg">I’m New Here</p>
                            <span className="icon-live_help"></span>
                        <div className="customer-text-wrp">

                            <p className="text-18 text-rg">Need a DhatuVault demo? Questions about pricing or features?</p>

                            <Link href="mailto:enquiry@dhatuvault.com" className="text-18 text-rg">enquiry@dhatuvault.com</Link>
                        </div>
                    </div>

                    <div className="contact-card-1 contact-card-2  site-radius-10">
                        <p className="site-radius-5 contact-cust-tag-existing text-rg">Existing Customer</p>
                            <span className="icon-contact-page-need-help"></span>
                        <div className="customer-text-wrp">

                            <p className="text-18 text-rg">Need help with DhatuVault licenses, plan changes, or additional modules?</p>

                            <Link href="mailto:enquiry@dhatuvault.com" className="text-18 text-rg">enquiry@dhatuvault.com</Link>
                        </div>
                    </div>

                    <div className="contact-card-1 contact-card-3 site-radius-10">
                        {/* <p className="site-radius-5 contact-cust-tag-new text-rg">I’m New Here</p> */}
                            <span className="icon-contact-page-ready-to"></span>
                        <div className="customer-text-wrp">

                            <p className="text-18 text-rg">Time to renew your DhatuVault subscription? Need details on your current plan?</p>

                            <Link href="mailto:enquiry@dhatuvault.com" className="text-18 text-rg">enquiry@dhatuvault.com</Link>
                        </div>
                    </div>

                    <div className="contact-card-1 contact-card-4 site-radius-10">
                        {/* <p className="site-radius-5 contact-cust-tag-new text-rg">I’m New Here</p> */}
                            <span className="icon-contact-page-cancelling-sub"></span>
                        <div className="customer-text-wrp">

                            <p className="text-18 text-rg">Cancel or downgrade DhatuVault? Let&apos;s discuss options that work for you.</p>

                            <Link href="mailto:enquiry@dhatuvault.com" className="text-18 text-rg">enquiry@dhatuvault.com</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactCustomerSupport
