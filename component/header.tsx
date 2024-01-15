"use client";
import Link from 'next/link'
import { useEffect } from "react"; 
import logo from '../public/img/logo.png';
import './footer.css'
import { usePathname } from 'next/navigation';
import './header.css'
import 'aos/dist/aos.css';
import AOS from 'aos';
export default function Header() {
const currentRoute = usePathname();

useEffect(() => {
  AOS.init({
       duration: 800,
       once: false,
     })
}, [])



  return (
    <header>
      
    <nav className="navbar navbar-expand-xl bg-dark navbar-dark pt-4 pb-4 ps-3 pe-3 position-relative">
  <div className="container-fluid"> 
  <a href="/" className="flex items-center navbar-brand pt-0">
    <img src={logo.src} className="mr-3 h-6 sm:h-9" alt="logo"/>
</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="collapsibleNavbar">
      <ul className="navbar-nav align-items-center d-flex flex-wrap">
      <li className="">
        <Link href="/" className="active block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white text-decoration-none" aria-current="page">
            Home
        </Link>
        </li>
        <li>
        <Link href="/about" className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white text-decoration-none">About Us</Link>
        </li>
        
        <li className="dropdown">
        <Link href="/shopify" className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white text-decoration-none">Services</Link>
        
        <ul className="dropdown-menu p-0">
            <li className='hover-menus'><a className="dropdown-item d-flex justify-content-between align-items-center" href="/digital-marketing">Digital Marketing <i className="fa fa-chevron-right"></i></a>
              <ul className="dropdown-menu hover-menu-items p-0">
                <li><a className="dropdown-item" href="/seo">Search Engine Optimization</a></li>
                <li><a className="dropdown-item" href="/social-media">Social Media Management</a></li>
                <li><a className="dropdown-item" href="/online-reputation">Online Reputation Management</a></li>
                <li><a className="dropdown-item" href="/social-media">Social Media Management</a></li>
              </ul>
            </li>
            <li className='hover-menus'><a className="dropdown-item d-flex justify-content-between align-items-center" href="/services">Ecommercee <i className="fa fa-chevron-right"></i></a>
              <ul className="dropdown-menu hover-menu-items p-0">
                <li><a className="dropdown-item" href="#">Magneto Development</a></li>
                <li><a className="dropdown-item" href="/shopify">Shopify Development</a></li>
                <li><a className="dropdown-item" href="/big-commerce">Woo Commerce Development</a></li>
                <li><a className="dropdown-item" href="#">Open cart Development</a></li>
              </ul>
            </li> 
            <li className='hover-menus'><a className="dropdown-item d-flex justify-content-between align-items-center" href="/graphic">Graphic Design <i className="fa fa-chevron-right"></i></a>
              <ul className="dropdown-menu hover-menu-items p-0">
                <li><a className="dropdown-item" href="/graphic">Website Redesign</a></li>
                <li><a className="dropdown-item" href="#">Responsive Web Design</a></li>
                <li><a className="dropdown-item" href="#">Video Animation</a></li>
                <li><a className="dropdown-item" href="/mobile-application">Mobile app designing</a></li>
              </ul>
            </li> 
            <li className='hover-menus'><a className="dropdown-item d-flex justify-content-between align-items-center" href="#">App Development <i className="fa fa-chevron-right"></i></a>
              <ul className="dropdown-menu hover-menu-items p-0">
                <li><a className="dropdown-item" href="/mobile-application">Android App Development</a></li>
                <li><a className="dropdown-item" href="#">IOS App Development</a></li>
                <li><a className="dropdown-item" href="#">React Native Development</a></li>
                <li><a className="dropdown-item" href="#">Hybrid App Development</a></li>
              </ul>
            </li> 
        </ul>
        </li>

        <li>
        <a href="#" className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white text-decoration-none">Case Studies</a>
        </li>
        

        <li>
        <a href="/resources" className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white text-decoration-none">Resources</a>
        </li>

        <li>
        <a href="#" className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white text-decoration-none">Blogs</a>
        </li>
        
       
        <li>
        <a href="#" className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white text-decoration-none">Career</a>
        </li>
        
      </ul>
    </div>

    <div className="d-flex flex-wrap align-items-center contact-num">
        <a href="tel:+91-836-011-6967" className="bg-transparent hover:bg-dark text-white font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded-full">Call:- +91-836-011-6967</a> 
    </div>
            
  </div>
</nav>
</header>
  )
}
