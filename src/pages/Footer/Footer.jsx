import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="w-full bg-tertiary text-white py-4 mt-auto">
          <div className="container flex justify-center mx-auto px-4 text-center">
            <p className="text-sm mb-2">
              &copy; {new Date().getFullYear()} João Borges Mendonça, the grandson. All rights reserved.&nbsp;|&nbsp;
            </p>
            <a
              href="https://3d-portfolio-joaobmendonca.vercel.app/#present"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline"
            >
              Portfolio
            </a>
          </div>
        </footer>
      );
};

export default Footer;