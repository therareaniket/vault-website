import React from 'react'
import Image from "next/image";
import Link from "next/link";

const notfound = () => {
  return (
    <>
      <div className="section">

        <div className="container">
          <div className="page-not-found-wrapper">
            <Image src="/images/pageNotFound/pageNotFound.webp" alt="page-not-found" width={583} height={421} className="page-not-found" />
            <Link href="/"  className="btn-padding explore-prod-btn text-md text-18 site-radius-10 btn-secondary">Go To Home</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default notfound