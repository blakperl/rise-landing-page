import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import logo from '/logo.svg';
import CloseIcon from '../assets/icons/CloseIcon';
import MenuIcon from '../assets/icons/MenuIcon';
import { navLinks } from '../app-constants';

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 bg-white z-50">
      <div className="flex items-center justify-between py-4 lg-px-0 px-4 container mx-auto">
        {openMenu && <MobileNav close={() => setOpenMenu(false)} />}

        <div className="w-2/4">
          <img src={logo} width={52} height={68} alt="Logo" />
        </div>

        <div className="lg:flex hidden space-x-5 w-[1/4] items-center">
  {navLinks.map((item) => {
    const isActive = location.pathname + location.hash === item.to;
     return (
      <li key={item.name} className="list-none relative ">
        <a
          href={item.to}
          className={`block ${isActive ? 'primary cursor-pointer' : ''}`}
        >
          {item.name}
        </a>
        {isActive && (
          <span className="primary active cursor-pointer">•</span>
        )}
      </li>
    );
  })}
</div>

        <div className="lg:flex space-x-2.5 w-[1/4] hidden">
          <button className="cursor-pointer">Log in</button>
          <button className="btn w-[9rem]">Get Started</button>
        </div>

        <div className="flex items-center lg:hidden">
          {openMenu ? (
            <a onClick={() => setOpenMenu(false)}>
              <CloseIcon />
            </a>
          ) : (
            <a className="lg:hidden" onClick={() => setOpenMenu(true)}>
              <MenuIcon />
            </a>
          )}
        </div>
      </div>
    </nav>
  );
}

function MobileNav() {
  return (
    <div className="fixed top-[3rem] left-0 h-screen w-full flex flex-col bg-white p-6 space-y-10 z-50">
      <div className="flex flex-col space-y-6">
        {navLinks.map((item, index) => (
          <li key={index} className="font-bold font-sans text-xl slide-in list-none">
            <a
              href={item.to}
              className="block"
              onClick={() => close()}
            >
              {item.name}
            </a>
          </li>
        ))}
        
        <div className="flex gap-6">
          <button className="btn w-[7rem] ">Log in</button>
          <button className="btn w-[9rem]">Get Started</button>
        </div>

      </div>
    </div>
  );
}
