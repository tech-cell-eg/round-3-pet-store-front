import React, { useEffect, useState, useRef } from "react";
import { InputText } from "primereact/inputtext";
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const searchInputRef = useRef<HTMLDivElement>(null); 
  const [isMenuOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
    if (isSidebarVisible && searchVisible) {
      setSearchVisible(false); 
    }
  };

  const toggleSearch = () => {
    if (isSidebarVisible) {
        setIsSidebarVisible(false);
      }    setSearchVisible(!searchVisible);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchInputRef.current && !searchInputRef.current.contains(event.target as Node) && searchVisible) {
        setSearchVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchVisible]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 px-6 py-4 transition-all duration-200 ${
          scrolled ? "bg-white" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4 lg:px-20 sm:px-10">
          {/* Links - Mobile (left side) */}
          <div className="sm:hidden flex-grow text-left">
            <button
              onClick={toggleSidebar}
              className="text-blue-950 hover:text-blue-500 text-2xl"
            >
              <i className="pi pi-bars"></i>
            </button>
          </div>
          </div>

          {/* Logo - Centered on mobile */}
          <a href="/" className="text-center flex justify-center items-center">
            <img src="images/logo.png" alt="Logo" className="h-10 mx-auto max-w-full" />
          </a>


        {/* Links */}
        <ul className={`flex space-x-6 text-lg font-semibold text-blue-950 sm:flex ${isMenuOpen ? 'block' : 'hidden'} sm:block`}>
        <Link to="/" className="hover:text-blue-500">Home</Link>
        <Link to="/categoriespage" className="hover:text-blue-500">Category</Link>
        <li><a href="#" className="hover:text-blue-500">About</a></li>
        <li><a href="#" className="hover:text-blue-500">Contact</a></li>
        </ul>

        {/* Search bar */}
        <div className="sm:flex items-center space-x-2">
        <IconField iconPosition="left">
            <InputIcon className="pi pi-search" />
            <InputText placeholder="Search something here!" />
        </IconField>

        
        
    

           {/* Search Icon - Mobile */}
           <button onClick={toggleSearch} className="sm:hidden text-blue-950 hover:text-blue-500 text-2xl">
            <i className="pi pi-search"></i>
          </button>
        </div>

        {/* Search Field - Mobile */}
        {searchVisible && (
          <div
            ref={searchInputRef}
            className="sm:hidden absolute top-full left-0 w-full bg-white shadow-md z-40 p-4 transition-all duration-300 ease-in-out"
          >
            <IconField iconPosition="left" className="w-full">
              <InputIcon className="pi pi-search" />
              <InputText
                placeholder="Search something here!"
                className="!rounded-full bg-white border px-4 py-2 shadow-sm focus:outline-none w-full transition-all duration-300 ease-in-out"
              />
            </IconField>
          </div>
        )}
      </nav>

      {/* Sidebar - Mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          isSidebarVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col space-y-6">
          {/* Close Button */}
          <div className="flex justify-end">
            <button onClick={toggleSidebar} className="text-blue-950 text-xl">
              <i className="pi pi-times"></i>
            </button>
          </div>

          {/* Links */}
          <Link to="/" className="text-lg font-semibold text-blue-950 hover:text-blue-500">
            Home
          </Link>
          <Link to="/category" className="text-lg font-semibold text-blue-950 hover:text-blue-500">
            Category
          </Link>
          <a href="#" className="text-lg font-semibold text-blue-950 hover:text-blue-500">
            About
          </a>
          <a href="#" className="text-lg font-semibold text-blue-950 hover:text-blue-500">
            Contact
          </a>

          {/* Button */}
          <a
            href="#"
            className="bg-blue-950 text-white text-center font-semibold px-6 py-3 hover:bg-blue-500 rounded-full"
          >
            Join the community
          </a>
        </div>
      </div>

      {/* Overlay */}
      {isSidebarVisible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};
export default Navbar;
