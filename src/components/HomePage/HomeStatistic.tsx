"use client";
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import CountUp from '../Animations/CountUp';

const HomeStatistic = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth > 575);
    handleResize(); // Initialize on mount

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Helper to display CountUp or static value
  const renderCount = (value: number, suffix: string = "") => {
    return isLargeScreen ? <CountUp end={value} /> : value;
  };

  return (
    <section className="statistic-section section">
      <div className="container">
        <div className="statistic-main">
          <div className='home-stats-head'>
            <h2 className='text-sb'>
              Accelerate Trial with DhatuVault’s Intelligent Platform
            </h2>

            <p className='h6 text-rg home-stats-para'>
              DhatuVault is designed for modern clinical operations, unifying document control,
              AI-powered automation, and compliance first workflows. Whether you’re a sponsor, CRO, site partner,
              it ensures fast and compliant trial delivery.
            </p>

            <div className='stats-section-cards'>
              <div className='stats-lines'>
                <Image className="stats-rectangle-1" src="/images/HomePage/stats-rectangle.svg" alt="" width={415} height={222} />
                <Image className="stats-rectangle-2" src="/images/HomePage/stats-rectangle.svg" alt="" width={415} height={222} />
                <Image className="stats-clock" src="/images/HomePage/statistic-clock-svg.svg" alt="" width={54} height={54} />
                <Image className="stats-rocket" src="/images/HomePage/statistic-rocket-launch.svg" alt="" width={54} height={54} />
                <Image className="stats-reverse" src="/images/HomePage/statisctic-reverse.svg" alt="" width={60} height={63} />
              </div>

              <div className='stats-path-line'>
                <div className='stats-card-1 site-radius-20'>
                  <div className="stats-card-1-text">
                    <h3 className='h2 text-sb'>{renderCount(85)}%</h3>
                    <p className='h6 text-rg text-grey'>Faster Document Turnaround</p>
                  </div>
                </div>

                <div className='stats-card-2 site-radius-20'>
                  <div className="stats-card-2-text stats-card-1-text">
                    <h3 className='h2 text-sb'>{renderCount(40)}%</h3>
                    <p className='h6 text-rg text-grey'>Lower Compliance Risk</p>
                  </div>
                </div>

                <div className='stats-card-3 site-radius-20'>
                  <div className="stats-card-3-text stats-card-1-text">
                    <h3 className='h2 text-sb'>{renderCount(60)}%</h3>
                    <p className='h6 text-rg text-light-grey'>Higher TMP Completeness rate metrics</p>
                  </div>
                </div>

                <div className='stats-card-4 site-radius-20'>
                  <div className="stats-card-4-text stats-card-1-text">
                    <h3 className='h2 text-sb'>{renderCount(99.9)}%</h3>
                    <p className='h6 text-rg text-grey'>System Uptime Trial Operations</p>
                  </div>
                </div>

                <div className='stats-card-5 site-radius-20'>
                  <div className="stats-card-5-text stats-card-1-text">
                    <h3 className='h2 text-sb'>{renderCount(5, "x")}</h3>
                    <p className='h6 text-rg text-grey'>Productivity Boost</p>
                  </div>
                </div>
              </div>

              {/* Optional: hide this section if you want */}
              <div className='stats-path-line statistics-hide'>
                <div className='stats-card-1 site-radius-20'>
                  <div className="stats-card-1-text">
                    <h3 className='h2 text-sb'>85%</h3>
                    <p className='h6 text-rg text-grey'>Faster Document Turnaround</p>
                  </div>
                </div>

                <div className='stats-card-2 site-radius-20'>
                  <div className="stats-card-2-text stats-card-1-text">
                    <h3 className='h2 text-sb'>40%</h3>
                    <p className='h6 text-rg text-grey'>Lower Compliance Risk</p>
                  </div>
                </div>

                <div className='stats-card-3 site-radius-20'>
                  <div className="stats-card-3-text stats-card-1-text">
                    <h3 className='h2 text-sb'>60%</h3>
                    <p className='h6 text-rg text-light-grey'>Higher TMP Completeness rate metrics</p>
                  </div>
                </div>

                <div className='stats-card-4 site-radius-20'>
                  <div className="stats-card-4-text stats-card-1-text">
                    <h3 className='h2 text-sb'>99.9%</h3>
                    <p className='h6 text-rg text-grey'>System Uptime Trial Operations</p>
                  </div>
                </div>

                <div className='stats-card-5 site-radius-20'>
                  <div className="stats-card-5-text stats-card-1-text">
                    <h3 className='h2 text-sb'>5x</h3>
                    <p className='h6 text-rg text-grey'>Productivity Boost</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeStatistic;
