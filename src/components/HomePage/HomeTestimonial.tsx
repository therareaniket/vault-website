"use client";
import { useState, useEffect } from "react";

type TestimonialProps = {
    testimonialsTitle: string;
    testimonialsSubtitle: string;
    testimonialReview1: string;
    testimonialReview2: string;
    testimonialReview3: string;
    testimonialReview4: string;
}

const HomeTestimonial = ({ testimonialsTitle, testimonialsSubtitle, testimonialReview1, testimonialReview2, testimonialReview3, testimonialReview4 }:TestimonialProps) => {
    const testimonials = [
        {
            client: "J",
            clientName: "James Carter",
            clientDetail: "IT Director, MedTech Solutions",
            text: testimonialReview1,
            date: "01 Sep, 2025",
        },
        {
            client: "P",
            clientName: "Priya Mehta",
            clientDetail: "Compliance Officer, FinSecure Ltd.",
            text: testimonialReview2,
            date: "29 Aug, 2025",
        },
        {
            client: "A",
            clientName: "Anita Desai",
            clientDetail: "Operations Manager, LegalEdge Partners",
            text: testimonialReview3,
            date: "06 Sep, 2025",
        },
        {
            client: "B",
            clientName: "Bhavesh Rao",
            clientDetail: "Compliance Officer, FinSecure Ltd.",
            text: testimonialReview4,
            date: "06 Jan, 2025",
        },
    ];

    const [rotation, setRotation] = useState(0);
    // <-- Set initial activeIndex to 3 so the RIGHT point is active by default (top=0,left=1,bottom=2,right=3)
    const [activeIndex, setActiveIndex] = useState(3);
    const [isMobile, setIsMobile] = useState(false);

    // Detect screen size
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 839);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Next / Prev logic
    const rotateCircleC = () => {
        if (!isMobile) {
            setRotation((prev) => prev + 90);
        }
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    const rotateCircleN = () => {
        if (!isMobile) {
            setRotation((prev) => prev - 90);
        }
        setActiveIndex((prev) =>
            prev - 1 < 0 ? testimonials.length - 1 : prev - 1
        );
    };

    return (
        <div className="hm-testi-main section">
            <div className="container">
                {/* Heading Section */}
                <div className="hm-head-text-wrapper">
                    <h2 className="text-sb hm-head-text">{testimonialsTitle}</h2>
                    <p className="text-rg h6 hm-para-text">{testimonialsSubtitle}</p>
                </div>

                {/* Testimonial Section */}
                <div className="testimonial-wrapper">
                    {/* Left: Circle (Desktop) or Line (Mobile) */}
                    <div className="testimonial-circle-container">
                        {!isMobile ? (
                            <div
                                className="testimonial-circle-section"
                                style={{
                                    transform: `rotate(${rotation}deg)`,
                                    transition: "transform 0.6s ease",
                                }}
                            >
                                {testimonials.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`testi-cli testi-cli-${["top", "left", "bottom", "right"][index]
                                            } ${activeIndex === index ? "active" : ""}`}
                                        style={{ transform: `rotate(${-rotation}deg)` }}
                                    >
                                        <span className="client-letter">{item.client}</span>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="mobile-line-wrapper">
                                <div className="mobile-line"></div>
                                <div className="mobile-circles">
                                    {testimonials.map((item, index) => (
                                        <button
                                            key={index}
                                            className={`mobile-circle-btn ${activeIndex === index ? "active" : ""
                                                }`}
                                            onClick={() => setActiveIndex(index)}
                                        >
                                            {item.client}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="client-name-box">
                            <p className="client-name-display">
                                <span className="text-md h5">
                                    {testimonials[activeIndex].clientName}
                                </span>
                                <br />
                                <span className="text-grey text-rg text-18">
                                    {testimonials[activeIndex].clientDetail}
                                </span>
                            </p>
                        </div>
                    </div>

                    {/* Right: Text */}
                    <div className="testimonial-content">
                        <div className="testimonial-text-wrapper">
                            {testimonials.map((item, index) => (
                                <p
                                    key={index}
                                    className={`testimonial-para ${activeIndex === index ? "show" : ""
                                        }`}
                                >
                                    <span className="h4 text-rg">{item.text}</span>
                                    <br />
                                    <span className="text-date-detail text-18 text-grey text-rg">
                                        {item.date}
                                    </span>
                                </p>
                            ))}
                        </div>

                        {/* Navigation */}
                        <div className="testimonial-btns">
                            <button className="prev" onClick={rotateCircleN}>
                                <svg
                                    className="prev-arrow"
                                    width="15"
                                    height="20"
                                    viewBox="0 0 11 17"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M9.46094 1L1.46094 8.5L9.46094 16"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </button>

                            <button className="next" onClick={rotateCircleC}>
                                <svg
                                    className="next-arrow"
                                    width="15"
                                    height="20"
                                    viewBox="0 0 11 17"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M1 1L9 8.5L1 16"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeTestimonial;










// "use client";
// import React, { useState } from "react";

// const HomeTestimonial = () => {
//   const [rotation, setRotation] = useState(0);

//   const rotateCircleC = () => {
//     setRotation((prev) => prev + 90); // rotate 90° clockwise each click
//   };

//     const rotateCircleN = () => {
//     setRotation((next) => next - 90); // rotate 90° clockwise each click
//   };

//   return (
//     <div className="testimonial-wrapper">
//       <div
//         className="testimonial-circle-section"
//         style={{ transform: `rotate(${rotation}deg)`, transition: "transform 0.6s ease" }}
//       >
//         <div className="testi-cli testi-cli-top"><p className="text-24 text-rg">J</p></div>
//         <div className="testi-cli testi-cli-left">P</div>
//         <div className="testi-cli testi-cli-bottom">A</div>
//         <div className="testi-cli testi-cli-right">B</div>
//       </div>

//       <div>
//         <button className="prev" onClick={rotateCircleC}>p</button>

//         <button className="next" onClick={rotateCircleN}>n</button>
//       </div>
//     </div>
//   );
// };

// export default HomeTestimonial;
