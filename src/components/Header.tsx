import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    return (
        <>
            <header>
                <div className="container">
                    <div className='Header-main'>
                        <div className="menu-icon site-radius-10">
                            <Image src='/images/Header/menuIcon.svg' alt='menu-img' width={30} height={30} priority={true}></Image>
                        </div>

                        <Image className='dhatuVault-logo' src='/images/Header/dhatuVaultLogo.svg' alt='menu-img' width={199} height={34} priority={true} draggable={false}></Image>

                        <Link href="#" title="Contact Us" className="contact-btn btn-padding btn-bg site-radius-10 text-md text-18">Contact Us</Link>
                    </div>                   
                </div>
            </header>
        </>
    )
}

export default Header