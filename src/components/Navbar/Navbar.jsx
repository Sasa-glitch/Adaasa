import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'
import { NavLink, Link } from 'react-router-dom';

export default function Navbar() {
    // making state to toggle menu 
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    // toggle menu function
    const toggleMenu =  () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        
    }
    // clicking function so we window scroll to top
    const handelClick = () => {
        window.scrollTo({
            top : 0,
            left: 0,
            behavior : "smooth",
        })
    }
    return (
    <>
        <nav className='fixed-top' id='site-nav'>
            <div className="container-fluid my-bg-tertiary-blur h-100">
                <div className="row align-items-center h-100">
                    {/* nav brand */}
                    <Link className="navbar-brand d-flex align-items-center gap-3 col-4" href="#">
                        <figure className='rec-3-rem mb-0'>
                            <img src={logo} alt="imagesss" className='fit-object'/>
                        </figure>
                        <div className='d-flex flex-column'>
                            <span className='h4 mb-0 text-white'>عدسة</span>
                            <span className='small mb-0 d-none d-lg-block my-color-primary'>عالم التصوير الفوتوغرافي</span>
                        </div>
                    </Link>
                    {/* nav links for large screens */}
                    <div className='flex-center d-none d-lg-flex col-4'>
                            <div className='position-relative my-bg-tertiary rounded-pill d-flex p-1 my-bg-tertiary nev-margin my-border'>
                                {/* check if the blog Navlink is active so we can show that */}
                                <NavLink onClick={handelClick} to={''} className={({isActive}) => isActive ? 'my-btn py-2 px-4 rounded-pill mb-0 my-nav-link nav-active-link' : 'my-btn py-2 px-4 rounded-pill mb-0 my-nav-link'}>الرئيسية</NavLink>
                                <NavLink onClick={handelClick} to={'/blog'} className={({isActive}) => isActive ? 'my-btn py-2 px-4 rounded-pill mb-0 my-nav-link nav-active-link' : 'my-btn py-2 px-4 rounded-pill mb-0 my-nav-link'}>المدونة</NavLink>
                                <NavLink onClick={handelClick} to={'/about'} className={({isActive}) => isActive ? 'my-btn py-2 px-4 rounded-pill mb-0 my-nav-link nav-active-link' : 'my-btn py-2 px-4 rounded-pill mb-0 my-nav-link'}>من نحن</NavLink>
                            </div>
                    </div>
                    {/* button to log */}
                    <div className='flex-end gap-2 d-none d-lg-flex col-4'>
                        <div className="rec-3-rem flex-center rounded-3 nav-search-icon">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                        <Link onClick={handelClick} to={"/blog"} className="py-3 px-4 rounded-pill nav-link-to-art fly">
                            ابدأ القراءة
                        </Link>
                    </div>
                    {/* mobile menu */}
                    <div className='offset-4 flex-end h4 mb-0 col-4 d-lg-none'>
                        <i className={`fa-solid ${isMobileMenuOpen ? 'fa-x' : 'fa-bars'}`} id='toggle-menu-button' onClick={toggleMenu}></i>
                    </div>
                    <div className={`transition-base d-lg-none ${isMobileMenuOpen ? "height-500 mt-3 pb-3" : "height-0"}`} id='mobile-menu'>
                            <div>
                                <div className='rounded-4 p-2 my-bg-tertiary my-border my-border'>
                                    <NavLink onClick={handelClick} to={"/"} className={({isActive}) => isActive ? `d-block py-3 px-4 mb-2 rounded-4 my-nav-link w-100 text-start nav-active-link` : `d-block py-3 px-4 mb-2 rounded-4 my-nav-link w-100 text-start bg-hover`}>الرئيسية</NavLink>
                                    <NavLink onClick={handelClick} to={"/blog"} className={({isActive}) => isActive ? `d-block py-3 px-4 mb-2 rounded-4 my-nav-link w-100 text-start nav-active-link` : `d-block py-3 px-4 mb-2 rounded-4 my-nav-link w-100 text-start bg-hover`}>المدونة</NavLink>
                                    <NavLink onClick={handelClick} to={"/about"} className={({isActive}) => isActive ? `d-block py-3 px-4 mb-2 rounded-4 my-nav-link w-100 text-start nav-active-link` : `d-block py-3 px-4 mb-2 rounded-4 my-nav-link w-100 text-start bg-hover`}>من نحن</NavLink>
                                    <Link onClick={handelClick} to={"/blog"} className="d-block py-3 px-4 mb-2 rounded-pill nav-link-to-art text-center fly">
                                        ابدأ القراءة
                                    </Link>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </nav>


    </>
  )
}
