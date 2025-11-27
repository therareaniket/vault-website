import Link from "next/link";

export default function TermsUse() {
    return (
        <>
            <section className="terms-use">
                {/* <div className="container">
                    <h1>DhatuVault — Terms of Use</h1>

                    <div className="section">
                        <h2>1. Acceptance & Eligibility</h2>

                        <p className="h6 text-rg">By using DhatuVault, you affirm you are of legal age and authorized by your organization. If you do not agree to these Terms, do not use the service.</p>
                    </div>

                    <div className="">
                        <h2>2. Account & Access</h2>

                        <ul>
                            <li className="h6 text-rg">Maintain accurate account information and keep credentials confidential. You are responsible for activities under your account.</li>

                            <li className="h6 text-rg">We may provision, limit, or suspend access to protect the service or for suspected breach, misuse, or nonpayment.</li>

                            <li className="h6 text-rg">Trials and betas are provided <b>AS IS</b> and may be modified or discontinued.</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h2>3. License & Customer Data</h2>

                        <ul>
                            <li className="h6 text-rg"><b>License</b> Subject to these Terms and any Order, DFOLDS grants you a <b>non-exclusive, non-transferable, revocable</b> right to access and use DhatuVault for your internal business purposes.</li>

                            <li className="h6 text-rg"><b>Ownership.</b> You retain all rights to <b>Customer Content.</b> You grant DFOLDS a limited license to Process Customer Content <b>solely</b> to provide, support, and secure the services, and as otherwise permitted by these Terms and the MSA/DPA/BAA.</li>

                            <li className="h6 text-rg"><b>Feedback.</b> DFOLDS may use feedback without restriction or compensation.</li>
                        </ul>
                    </div>

                    <div className="">
                        <h2>4. Acceptable Use</h2>

                        <p>You will not: (a) violate laws or third-party rights; (b) upload unlawful/harmful/infringing content; (c) probe/scan/test vulnerabilities except as expressly permitted; (d) copy, modify, reverse engineer, or create derivative works of the service; (e) bypass access controls or quotas; (f) use the service to build a competing product; (g) send spam or interfere with networks; (h) use the service for emergency, life-support, or medical diagnosis/treatment contexts.</p>
                    </div>

                    <div className="section">
                        <h2>5. Compliance Responsibilities</h2>

                        <ul>
                            <li><b>Your responsibilities.</b> Configure your environment, user permissions, retention settings, and integrations to meet your obligations (e.g., HIPAA, GDPR, 21 CFR Part 11).</li>

                            <li><b>Our commitments.</b> DFOLDS maintains security controls, availability targets, and processing safeguards as described in the <b>Privacy Policy, Security Overview, and any DPA/BAA.</b> DFOLDS does not provide legal advice.</li>
                        </ul>
                    </div>
                </div>    */}

                <section className='--bg-white terms-section-1 section-sm'>
                    <div className="container-sm">
                        <h1>DhatuVault — Privacy Policy</h1>
                    </div>
                </section>

                <section className='--bg-white privacypolicysection-1 section-sm'>
                    <div className="container-sm">
                        <h2 className='h3'>1. Scope & Roles</h2>

                        <ul>
                            <li className='h6 text-rg'><strong>Scope.</strong> This Policy explains how we collect, use, disclose, and protect <strong>Personal Data </strong>
                                and <strong>Sensitive Data</strong> processed via: (1) public websites (e.g., landing pages, documentation); (2) DhatuVault accounts and dashboards; and (3) support/sales interactions.</li>

                            <li className='h6 text-rg'><strong>Controller vs. Processor.</strong>
                                <ul>
                                    <li className='h6 text-rg'>For <strong>marketing, sales, support, and billing,</strong> DFOLDS is the <strong>Data Controller</strong> (GDPR/UK GDPR)
                                        / <strong>Business</strong> (CPRA).</li>

                                    <li className='h6 text-rg'>For <strong>Customer Content</strong> processed in DhatuVault (e.g., configuration data, evidence, audit logs, scan results), DFOLDS acts as a <strong>Data Processor / Service Provider</strong> on behalf of the customer (the <strong>Controller/Business</strong>), processing <strong>only under customer instructions</strong> and the MSA/DPA/BAA.</li>
                                </ul>
                            </li>

                            <li className='h6 text-rg'><strong>HIPAA Role.</strong> For PHI processed on behalf of Covered Entities or Business Associates,
                                DFOLDS acts as a <strong>Business Associate</strong> and will sign a <strong>BAA</strong> upon request.</li>
                        </ul>
                    </div>
                </section>

                <section className='--bg-white privacypolicysection-2'>
                    <div className="container-sm">
                        <h2 className='h3'>2. Definitions (Plain Language)</h2>

                        <ul>
                            <li className='h6 text-rg'><strong>Personal Data: </strong> information that identifies or can reasonably be linked to an individual (e.g., name, email, identifiers).</li>

                            <li className='h6 text-rg'><strong>Sensitive Data: </strong> includes health data/PHI, precise geolocation, government IDs, financial data, and other sensitive categories defined by law.</li>

                            <li className='h6 text-rg'><strong>Customer Content: </strong> data uploaded, connected, or generated in your tenant (evidence, findings, audit trails, documents, tickets).</li>

                            <li className='h6 text-rg'><strong>Processing: </strong> any operation on data (collecting, storing, using, sharing, deleting).</li>
                        </ul>
                    </div>
                </section>

                <section className='--bg-white privacypolicysection-3 section-sm'>
                    <div className="container-sm">
                        <h2 className='h3'>3. What We Collect & Sources</h2>

                        <ul>
                            <li className='h6 text-rg'><strong>Account & Contact Data: </strong> information that identifies or can reasonably be linked to an individual (e.g., name, email, identifiers).</li>

                            <li className='h6 text-rg'><strong>Customer Content </strong><i>(processor context)</i> : configuration metadata, evidence artifacts, audit logs, scan results, documents; may include <strong>PHI</strong> or other regulated data if you choose to process such data in DhatuVault.</li>

                            <li className='h6 text-rg'><strong>Usage & Device Data:  </strong> IP address, device/browser type, timestamps, telemetry, event logs, crash reports.</li>

                            <li className='h6 text-rg'><strong>Billing Data: </strong> subscription tier, invoices, payment status (payment card data handled by PCI‑compliant processor; we store tokens/last 4 only where needed).</li>

                            <li className='h6 text-rg'><strong>Support Interactions: </strong> chat transcripts, emails, attachments.</li>

                            <li className='h6 text-rg'><strong>Cookies/Similar Tech: </strong> session/auth cookies, preferences, analytics (see Cookie Notice at <Link href="/CookieNoticePage" title='' className='h6 text-rg'>/cookies</Link> ).
                                Sources include you, your organization, integrated systems you connect (e.g., AWS/Azure/GCP, Okta, GitHub), subprocessors, and lawful public sources.
                            </li>
                        </ul>
                    </div>
                </section>

                <section className='--bg-white privacypolicysection-4'>
                    <div className="container-sm">
                        <h2 className='h3'>4. Purposes & Legal Bases (GDPR/UK GDPR)</h2>

                        <ul>
                            <li className='h6 text-rg'><strong>Provide & secure the service </strong> (accounts, auth, scans, reports, audit trails).
                                <i>Legal bases:</i> Contract performance; Legitimate interests; for PHI—Business Associate obligations.
                            </li>

                            <li className='h6 text-rg'><strong>Improve platform & support </strong> (troubleshooting, telemetry, reliability, UX).
                                <i>Legal bases:</i> Legitimate interests; Consent where required.
                            </li>

                            <li className='h6 text-rg'><strong>Communications </strong> (service announcements, security notices, billing).
                                <i>Legal bases:</i> Contract performance; Legal obligations; Legitimate interests.
                            </li>

                            <li className='h6 text-rg'><strong>Compliance & Legal </strong>(prevent abuse, detect fraud, satisfy legal duties).
                                <i>Legal bases:</i> Legal obligations; Legitimate interests.
                            </li>

                            <li className='h6 text-rg'><strong>Marketing (limited) </strong>  (newsletters, product updates; opt‑out anytime).
                                <i>Legal bases:</i> Consent where required; Legitimate interests.
                            </li>

                            <li className='h6 text-rg'><strong>AI/automation transparency.  </strong>We do <strong>not</strong> train public/foundation models on <strong>Customer Content</strong> without your prior written consent.
                            </li>
                        </ul>
                    </div>
                </section>

                <section className='--bg-white privacypolicysection-5 section-sm'>
                    <div className="container-sm">
                        <h2 className='h3'>5. Cookies, Analytics & Tracking</h2>

                        <ul>
                            <li className='h6 text-rg'><strong>Strictly Necessary </strong>(auth, load balancing, security) — required.</li>

                            <li className='h6 text-rg'><strong>Preferences/Functional — </strong>optional. </li>

                            <li className='h6 text-rg'><strong>Analytics — </strong> aggregated metrics to improve performance; IP truncation where feasible. </li>

                            <li className='h6 text-rg'><strong>No cross‑site behavioral advertising; no sale/sharing </strong>of Personal Data for targeted ads.
                                Manage choices via the <strong>Cookie banner/Preference Center</strong> and browser settings; we honor legally required signals (e.g., <strong>Global Privacy Control</strong>) where applicable. See <Link href="/CookieNoticePage" title='' className='h6 text-rg'><strong>/cookies</strong></Link>.
                            </li>
                        </ul>
                    </div>
                </section>

                <section className='--bg-white privacypolicysection-6'>
                    <div className="container-sm">
                        <h2 className='h3'>6. Disclosures to Third Parties</h2>

                        <p className='h6 text-rg'>We disclose Personal Data only to: <strong>subprocessors/service providers</strong> (cloud, email, analytics, support) under DPAs;
                            <strong>integration partners</strong> you connect; <strong>affiliates</strong> under same protections; <strong>legal/safety</strong> recipients when required;
                            and <strong>business transfers</strong> subject to this Policy and notice.
                            A live <strong>Subprocessors</strong> list is available on our Trust Center
                        </p>
                    </div>
                </section>

                <section className='--bg-white privacypolicysection-7 section-sm'>
                    <div className="container-sm">
                        <h2 className='h3'>7. International Transfers</h2>

                        <p className='h6 text-rg'>We use <strong>EU SCCs</strong> and <strong>UK IDTA/Addendum</strong> with supplementary measures for cross‑border transfers.
                            Regional <strong>data residency</strong> (US/EU/India)  may be available by configuration/contract.
                        </p>
                    </div>
                </section>

                <section className='--bg-white privacypolicysection-8'>
                    <div className="container-sm">
                        <h2 className='h3'>8. Security</h2>

                        <p className='h6 text-rg'>Controls include <strong>encryption in transit/at rest, RBAC/SSO/MFA,</strong> network isolation, vulnerability management,
                            third-party <strong>pen tests,</strong> secure SDLC, audit logging, immutable backups, and vendor risk management. For HIPAA BA
                            relationships, safeguards align to the Security Rule; <strong>breach notification</strong> will be made without unreasonable delay and
                            <strong>no later than 60 days</strong> after discovery, as required by HITECH.
                        </p>
                    </div>
                </section>

                <section className='--bg-white privacypolicysection-9 section-sm'>
                    <div className="container-sm">
                        <h2 className='h3'>9. Retention</h2>

                        <p className='h6 text-rg'>We retain Personal Data only as long as necessary or as required by law/contract.
                            Typical defaults (customizable by agreement): account/profile—life of account + 12 months;
                            telemetry/audit—12–24 months; backups—30–45 days; support—24 months. Upon contract end,
                            we <strong>delete/return</strong> Customer Content per DPA/BAA and purge backups per schedule.
                        </p>
                    </div>
                </section>

                <section className='--bg-white privacypolicysection-10'>
                    <div className="container-sm">
                        <h2 className='h3'>10. Your Rights</h2>

                        <p className='h6 text-rg'>Depending on your location, you may have rights to <strong>access, correct, delete, restrict, object, port,</strong>
                            and <strong>withdraw consent.</strong> Certain US states (e.g., CA/CPRA) add rights to <strong>opt‑out of sale/sharing</strong>
                            (we do not sell/share for cross‑context behavioral ads) and to <strong>limit use of Sensitive Personal Information.</strong>
                        </p>
                    </div>
                </section>

                <section className='--bg-white privacypolicysection-11 section-sm'>
                    <div className="container-sm">
                        <h2 className='h3'>11. Children</h2>

                        <p className='h6 text-rg'>Business‑use only; not directed to children under 16. If a child’s Personal Data is identified, contact <strong><Link href="mailto: contactus@dfolds.com" title='' className='h6 text-rg'>contactus@dfolds.com</Link></strong> for deletion.</p>
                    </div>
                </section>

                <section className='--bg-white privacypolicysection-12'>
                    <div className="container-sm">
                        <h2 className='h3'>12. Third‑Party Links & Integrations</h2>

                        <p className='h6 text-rg'>Linked services are governed by their own policies. Review them carefully; we are not responsible for third‑party practices.</p>
                    </div>
                </section>

                <section className='--bg-white privacypolicysection-13 section-sm'>
                    <div className="container-sm">
                        <h2 className='h3'>13. Changes</h2>

                        <p className='h6 text-rg'>We may update this Policy; the date above reflects the latest version. Material changes will be notified via email or in‑app. Continued use after the effective date constitutes acceptance.</p>
                    </div>
                </section>

                <section className='--bg-white privacypolicysection-14'>
                    <div className="container-sm">
                        <h2 className='h3'>14. How to Contact Us</h2>

                        <ul>
                            <li><strong className='h6 text-rg'>General inquiries:</strong><Link href="mailto:enquiry@dfolds.com" title='' className='h6 text-rg'>enquiry@dfolds.com</Link></li>
                            <li><strong className='h6 text-rg'>Privacy & data rights:</strong><Link href="mailto: contactus@dfolds.com" title='' className='h6 text-rg'> contactus@dfolds.com</Link></li>
                            <li><strong className='h6 text-rg'>Postal:</strong> DFOLDS LLC — Privacy, 262 CHAPMAN RD, STE 240, NEWARK, DE 19702, USA</li>
                            <li><strong className='h6 text-rg'>EU/UK Representative:</strong> Posted on our Trust Center when appointed.</li>
                        </ul>
                    </div>
                </section>
            </section>

        </>
    );
}