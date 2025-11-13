"use client";
import React from 'react'
import FAQSection from './FAQSection'

const HomeFAQ = () => {
  return (
    <section className='section'>
        <div className="container">
            <div className="home-faq-wrapper">
                <div className="hm-faq-head">
                    <h2 className='text-sb'>Frequently Asked Questions</h2>

                    <p className='h6 text-rg'>Need help navigating Vault? You’re in the right place. Explore answers to common questions, helpful tips, and troubleshooting steps.</p>
                </div>

                <div className='hm-faq-accordion'>
                    <FAQSection/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomeFAQ

