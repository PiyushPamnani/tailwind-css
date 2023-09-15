import { headerLogo } from "../assets/images";
import { hamburger, hamburgerLight } from "../assets/icons";
import { navLinks } from "../constants";
import ToogleButton from "./ToogleButton";

const Navbar = ({ toggleTheme, darkMode }) => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <ToogleButton toggleTheme={toggleTheme} darkMode={darkMode} />
        <div className="hidden max-lg:block">
          {darkMode ? (
            <img
              src={hamburgerLight}
              alt="Hamburger-Light"
              width={25}
              height={25}
              onClick={() => setToggleDropdown((prev) => !prev)}
            />
          ) : (
            <img
              src={hamburger}
              alt="Hamburger"
              width={25}
              height={25}
              onClick={() => setToggleDropdown((prev) => !prev)}
            />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
