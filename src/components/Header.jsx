import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Dr Soma");

  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { title: "Dr Soma", href: "/" },
    { title: "Контакты", href: "/contact" },
    { title: "Специализации", href: "#specializations" },
    { title: "Образование", href: "#education" },
    { title: "Как попасть на приём?", href: "#additional-education" },
    { title: "Научные интересы", href: "#research-interests" },
    { title: "Проекты", href: "#projects" },
    { title: "Опыт работы", href: "#work-experience" },
    { title: "Награды", href: "#awards" },
  ];

  const extraNavItems = [
    { title: "Членство в организациях", href: "#memberships" },
    { title: "Публикации", href: "#publications" },
    { title: "About", href: "/about" },
    { title: "Experience", href: "/experience" },
    { title: "Editorial", href: "/editorial" },
    { title: "Награды", href: "/general" },
    { title: "Пожертвования", href: "https://www.eafo.info/ru/donate" },
    { title: "Contact", href: "/contact-3" },
  ];

  // Scroll to section
  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle navigation and scrolling
  // Handle navigation and scrolling
  const handleNavigation = (href, title) => {
    if (href.startsWith("http")) {
      // ✅ Open external links in a new tab
      window.open(href, "_blank", "noopener,noreferrer");
    } else if (href === "/") {
      if (location.pathname !== "/") {
        navigate("/", { replace: true });
        setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else if (href.startsWith("#")) {
      if (location.pathname !== "/") {
        navigate("/", { replace: true });
        setTimeout(() => scrollToSection(href), 100);
      } else {
        scrollToSection(href);
      }
    } else {
      navigate(href);
    }

    setActiveTab(title);
  };

  // Highlight active tab when scrolling
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      if (location.pathname === "/" && scrollPosition <= 200) {
        setActiveTab("Dr Soma"); // Highlight when at the top (only on homepage)
        return;
      }

      for (let item of [...navItems, ...extraNavItems]) {
        if (item.href.startsWith("#")) {
          const section = document.querySelector(item.href);
          if (section) {
            const { top, bottom } = section.getBoundingClientRect();
            if (top <= 150 && bottom >= 150) {
              setActiveTab(item.title);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // Scroll to section if URL has hash
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      setTimeout(() => scrollToSection(location.hash), 100);
    }
  }, [location]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = ""; // Allow scrolling
    }

    return () => {
      document.body.style.overflow = ""; // Cleanup when component unmounts
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="bg-[#f8f8f8] shadow fixed w-full h-20  flex z-50">
      <div className=" mx-auto w-full px-32 py-4 flex items-center justify-between">
        <nav className="hidden md:flex justify-between w-full text-[rgb(15,58,97)] ">
          {navItems.map((item) => (
            <button
              key={item.title}
              className={`transition-all duration-200 cursor-pointer font-[440] font-rubik ${
                activeTab === item.title
                  ? "text-orange-600 [text-shadow:2px_2px_4px_rgba(0,0,0,0.5)] -translate-y-1"
                  : "hover:text-[rgb(255,136,120)]"
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation(item.href, item.title);
              }}
            >
              {item.title}
            </button>
          ))}

          {/* Dropdown for extra items */}
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button
              className={`cursor-pointer transition-all duration-200 
                font-[440] font-rubik
                   hover:text-[rgb(255,136,120)]
              `}
              onClick={() => setActiveTab("Ещё")}
            >
              Ещё
            </button>
            {isDropdownOpen && (
              <div className="absolute left-[50%] translate-x-[-50%] w-60  bg-[#f8f8f8] rounded shadow-lg z-10 space-y-3 p-4 pt-8">
                {extraNavItems.map((item) => (
                  <button
                    key={item.title}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation(item.href, item.title);
                    }}
                    className={`block font-[440] font-rubik  mx-auto cursor-pointer ${
                      activeTab === item.title
                        ? "text-orange-600 [text-shadow:2px_2px_4px_rgba(0,0,0,0.5)] -translate-y-1"
                        : "hover:text-[rgb(255,136,120)]"
                    }`}
                  >
                    {item.title}
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <div
          className="md:hidden text-blue-900 font-bold text-4xl cursor-pointer absolute right-5 top-5"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[90%] bg-[#f8f8f8] shadow-lg overflow-y-scroll border-l  p-6 space-y-3 text-blue-900 font-medium z-50 transition-transform duration-300 ease-in-out
    ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close Button - Same Position as Hamburger */}
        <div
          className="absolute font-bold right-5 top-5 text-4xl cursor-pointer text-red-500"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          ✕
        </div>

        {/* Mobile Navigation Items */}
        <div className="text-[rgb(15,58,97)] mt-10">
          {navItems.map((item) => (
            <button
              key={item.title}
              className={`block text-xl font-[500] font-rubik py-2 mb-4 ${
                activeTab === item.title
                  ? "text-orange-600 [text-shadow:2px_2px_4px_rgba(0,0,0,0.5)]"
                  : "hover:text-red-500"
              }`}
              onClick={() => {
                handleNavigation(item.href, item.title);
                setIsMobileMenuOpen(false);
              }}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Extra items in mobile */}
        <details className="mt-2 text-xl">
          <summary className="font-[500] text-[rgb(15,58,97)] font-rubik cursor-pointer">
            Ещё
          </summary>
          <div className="pl-4  my-3 space-y-3">
            {extraNavItems.map((item) => (
              <button
                key={item.title}
                className={`block font-[500] text-[rgb(15,58,97)] font-rubik hover:underline ${
                  activeTab === item.title
                    ? "text-orange-600 [text-shadow:2px_2px_4px_rgba(0,0,0,0.5)]"
                    : ""
                }`}
                onClick={() => {
                  handleNavigation(item.href, item.title);
                  setIsMobileMenuOpen(false);
                }}
              >
                {item.title}
              </button>
            ))}
          </div>
        </details>
      </div>
    </header>
  );
};

export default Header;
