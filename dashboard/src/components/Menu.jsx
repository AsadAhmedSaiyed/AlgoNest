import { useState } from "react";
import { Link } from "react-router-dom";
import UserMenu from "./UserMenu";

// MUI Icons
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Menu = ({ id }) => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
    setMobileMenuOpen(false);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuItems = [
    { name: "Dashboard", path: `/dashboard/${id}/`, index: 0 },
    { name: "Orders", path: `/dashboard/${id}/orders`, index: 1 },
    { name: "Holdings", path: `/dashboard/${id}/holdings`, index: 2 },
    { name: "Funds", path: `/dashboard/${id}/funds`, index: 4 },
  ];

  return (
    <nav className="w-full px-6 py-4 shadow-md bg-gray-100 text-black relative z-50">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold mx-4">AlgoNest</div>

        <div className="lg:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <CloseIcon fontSize="large" />
            ) : (
              <MenuIcon fontSize="large" />
            )}
          </button>
        </div>

        <ul className="hidden lg:flex items-center gap-8 text-lg font-medium">
          {menuItems.map((item) => (
            <li key={item.index}>
              <Link to={item.path} onClick={() => handleMenuClick(item.index)}>
                <p
                  className={`px-3 py-1 rounded transition ${
                    selectedMenu === item.index
                      ? "bg-gray-300 text-black font-semibold"
                      : "hover:bg-gray-300"
                  }`}
                >
                  {item.name}
                </p>
              </Link>
            </li>
          ))}
          <li className="relative">
            <div onClick={handleProfileClick} className="cursor-pointer">
              <UserMenu />
            </div>
          </li>
        </ul>
      </div>

      {mobileMenuOpen && (
        <ul className="lg:hidden mt-4 flex flex-col gap-2 text-base">
          {menuItems.map((item) => (
            <li key={item.index}>
              <Link to={item.path} onClick={() => handleMenuClick(item.index)}>
                <p
                  className={`px-3 py-2 rounded-lg transition ${
                    selectedMenu === item.index
                      ? "bg-gray-300 text-black font-semibold"
                      : "hover:bg-gray-300"
                  }`}
                >
                  {item.name}
                </p>
              </Link>
            </li>
          ))}

          <li>
            <div className="mt-2">
              <UserMenu />
            </div>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Menu;
