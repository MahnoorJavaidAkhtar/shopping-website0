import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='hidden lg:block'>
            <div className='container'>
                {/* Flex container for horizontal layout */}
                <div className='flex gap-10 justify-center font-medium py-4 text-black'>
                    <Link className='navbar__link relative' href="#">HOME</Link>
                    <Link className='navbar__link relative' href="#">CATEGORIES</Link>
                    <Link className='navbar__link relative' href="#">MENS</Link>
                    <Link className='navbar__link relative' href="#">WOMENS</Link>
                    <Link className='navbar__link relative' href="#">JEWELRY</Link>
                    <Link className='navbar__link relative' href="#">PERFUME</Link>
                    <Link className='navbar__link relative' href="#">BLOG</Link>
                    <Link className='navbar__link relative' href="#">HOT OFFERS</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;

