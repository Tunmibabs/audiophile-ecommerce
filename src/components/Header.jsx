import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HamburgerIcon() {
  return (
    <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
      <g fill="currentColor" fillRule="evenodd">
        <path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z" />
      </g>
    </svg>
  );
}

function CartIcon() {
  return (
    <svg width="23.33" height="20" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20.314 5.125H4.643L2.679.701A.69.69 0 002.016 0H.69C.309 0 0 .31 0 .691s.309.691.69.691H1.64L4.01 12.13c.104.512.543.868 1.05.868h12.215c.483 0 .9-.32 1.026-.778l2.11-8.23a.69.69 0 00-.024-.559.69.69 0 00-.563-.396zM5.27 11.232l-1.33-7.587h15.22l-1.78 6.943H5.27z"
        fill="currentColor"
        fillRule="nonzero"
      />
      <circle cx="6.4" cy="18.27" r="1.728" fill="currentColor" />
      <circle cx="15.652" cy="18.27" r="1.728" fill="currentColor" />
    </svg>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Headphones", href: "/headphones" },
    { name: "Speakers", href: "/speakers" },
    { name: "Earphones", href: "/earphones" },
  ];

  return (
    <header className="bg-black text-white">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 py-8 flex items-center">
        <button
          type="button"
          className="md:hidden text-white hover:text-primary"
          aria-label="Toggle navigation menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <HamburgerIcon />
        </button>

        <Link
          to="/"
          className="text-h5 font-bold flex-1 text-center md:flex-none md:text-left"
        >
          audiophile
        </Link>

        <nav className="hidden md:flex flex-1 justify-center">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name} className="text-subtitle">
                <Link
                  to={link.href}
                  className="text-subtitle font-bold uppercase tracking-subtitle text-white hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className=" text-white hover:text-primary transition-colors"
          aria-label="View shopping cart"
        >
          <CartIcon />
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden">
          <nav className="px-6 sm:px-10 pb-8">
            <ul className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name} className="text-subtitle">
                  <Link
                    to={link.href}
                    className="text-subtitle font-bold uppercase tracking-subtitle text-white hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
        <hr className="border-t border-white border-opacity-20" />
      </div>
    </header>
  );
}
