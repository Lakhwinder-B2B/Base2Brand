"use client";
import Link from 'next/link'
import logo from '../public/img/logo.png';
import './footer.css'
import { usePathname } from 'next/navigation';
import './header.css'
export default function Header() {
const currentRoute = usePathname();

  return (
    <header>
      
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark pt-4 pb-4">
  <div className="container-fluid">
  <a href="https://flowbite.com" className="flex items-center navbar-brand pt-0">
    <img src={logo.src} className="mr-3 h-6 sm:h-9" alt="logo"/>
</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="collapsibleNavbar">
      <ul className="navbar-nav gap-10 align-items-center d-flex flex-wrap">
      <li className="">
        <Link href="/" className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white text-decoration-none" aria-current="page">
            Home
        </Link>
        </li>
        <li>
        <Link href="/about" className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white text-decoration-none">About Us</Link>
        </li>
        <li>
        <a href="#" className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white text-decoration-none">Career</a>
        </li>
        
        <li className="dropdown">
        <Link href="/services" data-bs-toggle="dropdown"  className="dropdown-toggle block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white text-decoration-none">Services</Link>
        <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Services 1</a></li>
            <li><a className="dropdown-item" href="#">Services 2</a></li>
            <li><a className="dropdown-item" href="#">Services 3</a></li>
        </ul>
        
        </li>
        <li className="dropdown">
        <Link href="/digital-marketing" data-bs-toggle="dropdown"  className="dropdown-toggle block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white text-decoration-none">Digital Marketing</Link>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Services 1</a></li>
                <li><a className="dropdown-item" href="#">Services 2</a></li>
                <li><a className="dropdown-item" href="#">Services 3</a></li>
            </ul>
        </li>
        <li>
        <a href="#" className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white text-decoration-none">Outsourcing</a>
        </li>
        <li className="">
        <a href="/graphic" className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white text-decoration-none">Graphic</a>
        </li>
        <li>
        <a href="#" className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white text-decoration-none">Knowledge Center</a>
        </li>  
      </ul>
    </div>

    <div className="d-flex flex-wrap align-items-center">
        <a href="#" className="bg-transparent hover:bg-dark text-white font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded-full">Call:- +91 836 011 6967</a> 
    </div>
            
  </div>
</nav>
</header>
  )
}
