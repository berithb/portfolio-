import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavItem {
  name: string;
  path: string;
}

const navItems: NavItem[] = [
  { name: 'About', path: '/' },
  { name: 'Work', path: '/work' },
  { name: 'Services', path: '/services' },
  { name: 'Resume', path: '/resume' },
  { name: 'Skills', path: '/skills' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contacts', path: '/contacts' },
];

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-5 right-5 z-50 bg-primary p-3 rounded-lg flex flex-col gap-1.5 w-11 h-11 justify-center items-center"
      >
        <span className="block w-6 h-0.5 bg-dark rounded transition-all"></span>
        <span className="block w-6 h-0.5 bg-dark rounded transition-all"></span>
        <span className="block w-6 h-0.5 bg-dark rounded transition-all"></span>
      </button>

      <nav className={`${isOpen ? 'left-0' : '-left-full'} lg:left-auto fixed lg:relative top-0 w-72 lg:w-auto h-screen lg:h-auto bg-card lg:bg-transparent p-20 lg:p-0 pt-20 lg:pt-0 transition-all z-40 lg:z-auto shadow-xl lg:shadow-none`}>
        <ul className="flex flex-col lg:flex-row lg:flex-wrap gap-5 lg:gap-8 mb-0 lg:mb-16">
          {navItems.map((item) => (
            <li key={item.path} className="border-b lg:border-b-0 border-gray-700 lg:border-0">
              <Link
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block py-4 lg:py-0 text-lg capitalize relative transition-colors ${
                  location.pathname === item.path ? 'text-primary' : 'hover:text-primary'
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <span className="hidden lg:block absolute -bottom-1 left-0 w-full h-0.5 bg-primary"></span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
