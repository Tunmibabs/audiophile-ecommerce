import React from "react";

// --- Icon components (no changes) ---
function FacebookIcon() {
  return (
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.493v-9.294H9.689V11.237h3.129V8.91c0-3.119 1.893-4.818 4.659-4.818 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.606h-3.12V24h6.115c.732 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="24" height="20" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M24 2.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.13 1.194 4.922 4.922 0 00-8.384 4.482A13.94 13.94 0 011.671 1.149a4.928 4.928 0 001.523 6.574 4.903 4.903 0 01-2.229-.616v.06a4.923 4.923 0 003.947 4.827 4.996 4.996 0 01-2.218.085 4.935 4.935 0 004.604 3.417A9.867 9.867 0 010 17.292a13.94 13.94 0 007.548 2.204c9.053 0 13.99-7.496 13.99-13.986 0-.209 0-.42-.015-.626A9.916 9.916 0 0024 2.557z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.012-3.584.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.052.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.98-6.98.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.948-.2-4.354-2.618-6.78-6.98-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </svg>
  );
}

export default function Footer() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Headphones", href: "/headphones" },
    { name: "Speakers", href: "/speakers" },
    { name: "Earphones", href: "/earphones" },
  ];

  return (
    <footer className="bg-black">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
        <div className="w-24 h-1 bg-primary mx-auto sm:mx-0"></div>
        <div
          className="flex flex-col items-center text-center gap-12 mt-12
                        sm:items-start sm:text-left
                        md:grid md:grid-cols-2 md:gap-x-8 md:mt-16"
        >
          <a
            href="/"
            className=" text-white text-h5 font-bold md:row-start-1 md:col-start-1"
          >
            audiophile
          </a>

          {/* Navigation */}
          <nav className="md:row-start-1 md:col-start-2 md:justify-self-end">
            <ul
              className="flex flex-col items-center gap-4 
                           sm:flex-row sm:gap-8"
            >
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-subtitle font-bold uppercase tracking-subtitle text-white hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Description */}
          <p
          style={{fontSize: "15px"}}
            className="text-body leading-body text-gray opacity-50 max-w-[540px] 
                        md:row-start-2 md:col-start-1"
          >
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our mini-facility - we're open 7 days a week.
          </p>

          <div
            className="w-full flex flex-col items-center gap-12 
                          sm:flex-row sm:justify-between sm:items-end
                          md:contents"
          >
            {/* Copyright */}
            <p
              className="text-body leading-body text-gray opacity-50
                            md:row-start-3 md:col-start-1"
            >
              Copyright 2021. All Rights Reserved
            </p>

            {/* Social Icons */}
            <div
              className=" text-white flex justify-center gap-4 
                            md:row-start-2 md:col-start-2 md:justify-self-end md:self-start"
            >
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="hover:text-primary transition-colors"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://twitter.com"
                aria-label="Twitter"
                className="hover:text-primary transition-colors"
              >
                <TwitterIcon />
              </a>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="hover:text-primary transition-colors"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
