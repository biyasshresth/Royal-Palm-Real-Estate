import { useEffect, useState } from "react";
import type { ChangeEvent } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { HiMenu, HiX, HiSearch } from "react-icons/hi";
import logo from "../assets/logo.svg";

interface HeaderProps {
  isLoggedIn: boolean;
  setIsLoggedIn: (loggedIn: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchOpen, setSearchOpen] = useState<boolean>(false);

  const navItems = isLoggedIn
    ? [
        { label: "Home", path: "/" },
        { label: "Buy", path: "/buy" },
        { label: "Sell", path: "/Sell" },
        { label: "Rent", path: "/Rent" },
        { label: "Contact", path: "/Contact" },
      ]
    : [
        { label: "Home", path: "/" },
        { label: "About Us", path: "/AboutUs" },
      ];

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
      setMenuOpen(false);
      setSearchOpen(false);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Auto-close search input if nothing typed for 5 seconds
  useEffect(() => {
    if (searchOpen && searchQuery.trim() === "") {
      const timer = setTimeout(() => {
        setSearchOpen(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [searchOpen, searchQuery]);

  // search on route change
  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  return (
    <header className="bg-white shadow-md px-6 py-4 w-full">
      <div className="max-w-7xl mx-auto flex flex-row items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src={logo} alt="Logo" className="w-16 h-16 object-contain" />
          <h1 className="text-2xl font-bold text-black font-serif">
            Real Estate Palm
          </h1>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item, index) => (
            <div key={item.path} className="flex items-center space-x-2">
              {index === 0 && (
                <div>
                  {!searchOpen ? (
                    <button
                      type="button"
                      onClick={() => setSearchOpen(true)}
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition"
                      aria-label="Open search"
                    >
                      <HiSearch className="w-5 h-5" />
                    </button>
                  ) : (
                    <div className="flex w-full">
                      <input
                        type="text"
                        placeholder="Search properties..."
                        value={searchQuery}
                        onChange={handleInputChange}
                        className="flex-1 w-3/4 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-3 focus:ring-orange-500"
                        autoFocus
                      />
                      <button
                        type="button"
                        onClick={handleSearch}
                        aria-label="Search"
                        className="bg-orange-600 text-white px-4 py-2 rounded-r-md hover:bg-orange-500 transition"
                      >
                        <HiSearch className="w-5 h-5" />
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* Navigation button */}
              <div
                onClick={() => navigate(item.path)}
                className={`cursor-pointer text-lg font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? "text-orange-600"
                    : "text-gray-700 hover:text-orange-500"
                }`}
              >
                {item.label}
              </div>
            </div>
          ))}

          {!isLoggedIn ? (
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="border border-orange-600 text-orange-600 px-4 py-2 rounded-md font-semibold hover:bg-orange-100 transition"
            >
              Log In
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setIsLoggedIn(false)}
              className="border border-red-600 text-red-600 px-4 py-2 rounded-md font-semibold hover:bg-red-100 transition"
            >
              Logout
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <HiX className="w-8 h-8 text-gray-700" />
            ) : (
              <HiMenu className="w-8 h-8 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4 px-2 pb-4">
          {/* Mobile Search */}
          <div className="flex items-center space-x-2">
            {!searchOpen ? (
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition"
                aria-label="Open search"
              >
                <HiSearch className="w-5 h-5" />
              </button>
            ) : (
              <div className="flex w-full">
                <input
                  type="text"
                  placeholder="Search properties..."
                  value={searchQuery}
                  onChange={handleInputChange}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={handleSearch}
                  aria-label="Search"
                  className="bg-orange-600 text-white px-4 py-2 rounded-r-md hover:bg-orange-500 transition"
                >
                  <HiSearch className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>

          {/* Mobile Navigation */}
          {navItems.map((item) => (
            <div
              key={item.path}
              onClick={() => {
                navigate(item.path);
                setMenuOpen(false);
                setSearchOpen(false);
              }}
              className={`block cursor-pointer text-lg font-medium transition-colors duration-200 ${
                location.pathname === item.path
                  ? "text-orange-600"
                  : "text-gray-700 hover:text-orange-500"
              }`}
            >
              {item.label}
            </div>
          ))}

          {!isLoggedIn ? (
            <button
              type="button"
              onClick={() => {
                navigate("/login");
                setMenuOpen(false);
                setSearchOpen(false);
              }}
              className="w-full border border-orange-600 text-orange-600 px-4 py-2 rounded-md font-semibold hover:bg-orange-100 transition"
            >
              Log In
            </button>
          ) : (
            <button
              type="button"
              onClick={() => {
                setIsLoggedIn(false);
                setMenuOpen(false);
                setSearchOpen(false);
              }}
              className="w-full border border-red-600 text-red-600 px-4 py-2 rounded-md font-semibold hover:bg-red-100 transition"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
