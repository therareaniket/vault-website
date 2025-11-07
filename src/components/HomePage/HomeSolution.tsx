"use client"

import Image from "next/image";

const HomeSolution = () => {
  return (
    <section>
        <div className="container">
            <div className="home-solution-main">
                <div className="home-solution-head">
                    <h2 className='text-sb home-solution-head-h2'>Intelligent Solutions That Power Clinical Excellence</h2>

                    <p className='text-rg h6 home-solution-head-para'>Vault delivers role-specific capabilities across the clinical ecosystem with AI-powered automation, real-time oversight, streamlined CAPA workflows, and quality management</p>  
                </div>

                <div className='solution-card-main'>
                    <div className='solution-card-1'>
                        <div className='sol-card-1 site-radius-20'>
                            <h3 className='h4 text-rg'>Real-Time Study Oversight & Monitoring</h3>

                            <p className='text-18 text-rg'>Real-time clinical trial dashboards track enrollment, milestones, site performance, and protocol deviations while keeping trials on schedule and within budget.</p>
                        </div>

                        <div className='sol-card-2 site-radius-20'>
                            <h3 className='h4 text-rg'>Unified Integration Hub & Data Synchronization</h3>

                            <p className='text-18 text-rg'>Seamlessly connect CTMS, EDC, CRM, and third-party systems with pre-built connectors and validated APIs while automating data transfers and eliminating silos.</p>
                        </div>
                    </div>

                    <div className='solution-card-2 site-radius-20'>
                        <div className="solution-card-2-text"> 
                            <h3 className='h4 text-rg'>Intelligent Document Management & eTMF</h3>

                            <p className='text-18 text-rg'>Centralize trial documentation with advanced eTMF system that tracks document completeness against EDLs, maintains TMF Reference Model compliance, and ensures inspection readiness.</p>
                            
                            <Image className="sol-vector-img" src="/images/HomePage/solution-img.png" alt="" width={415} height={319}></Image>
                        </div>
                    </div>

                    <div className='solution-card-3'>
                        <div className='sol-card-4 site-radius-20'>
                            <h3 className='h4 text-rg'>Automated Workflow & Issue Resolution</h3>

                            <p className='text-18 text-rg'>Automate workflow routing for monitoring visits, protocol deviations, and CAPA management with predefined approval chains, automatic ownership assignment, and closed-loop resolution tracking.</p>
                        </div>

                        <div className='sol-card-5 site-radius-20'>
                            <h3 className='h4 text-rg'>Risk-Based Quality Management & Compliance</h3>

                            <p className='text-18 text-rg'>Ensure GCP compliance and regulatory readiness with automated EDL tracking, regulatory timeline reminders, and audit-ready reports for health authority submissions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomeSolution