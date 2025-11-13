"use client";
import React from 'react'

const HomeVideo = () => {
  return (
    <section className='video-section-main'>
        <div className="container">
            <video src="/images/HomePage/hm-video-section.mp4" loop autoPlay muted suppressHydrationWarning width={1260} height={736} className="hm-video-section site-radius-20"></video>
        </div>
    </section>
  )
}

export default HomeVideo