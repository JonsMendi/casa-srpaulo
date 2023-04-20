import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import { AiOutlineHome, AiOutlineCheck, AiOutlineGlobal } from 'react-icons/ai';


const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  const [bgColor, setBgColor] = useState('bg-transparent');

  useEffect(() => {
    const handleScroll = () => {
      const secondSection = document.getElementById('about');
      const secondSectionOffsetTop = secondSection.offsetTop;

      if (window.pageYOffset >= secondSectionOffsetTop) {
        setBgColor('backdrop-filter backdrop-blur-[7px]');
      } else {
        setBgColor('bg-transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  return (
    <nav className={`fixed w-full top-0 p-2 flex justify-between items-center transition-all duration-300 ease-in-out z-10 ${bgColor}`}>
      <div>
        {/* <a href="/" className="text-white font-bold text-xl">
          {t('navbar.logo')}
        </a> */}
      </div>
      <div className="flex items-center space-x-4">
        <Link to="home" smooth={true} duration={500}>
          <button className="px-2 flex items-center font-bold">
            <AiOutlineHome className="mr-1" />
            {t('navbar.top')}
          </button>
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          <button className="px-2 flex items-center font-bold">
            <AiOutlineCheck className="mr-1" />
            {t('navbar.book')}
          </button>
        </Link>
        <button
          className="px-2 flex items-center font-bold"
          onClick={() => changeLanguage(language === 'en' ? 'pt' : 'en')}
        >
          <AiOutlineGlobal className="mr-1" />
          {language === 'en' ? t('navbar.switch_to_pt') : t('navbar.switch_to_en')}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
