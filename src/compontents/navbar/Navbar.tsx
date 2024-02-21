import React, { useEffect, useRef, useState } from "react";
import { useSettingsContext } from "../../context/SettingsContext";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import { GoX } from "react-icons/go";
import CustomButton from "../general/CustomButton";
import NavbarLink from "./NavbarLink";

const navlinks = [
  { name: "About", to: "#about" },
  { name: "Skills", to: "#" },
  { name: "Projects", to: "#" },
];

function Navbar() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { setDisableScroll } = useSettingsContext();

  const toggleMobileMenu = () => {
    setDisableScroll(!isMobileMenuOpen);
    setIsMobileMenuOpen((isMobileMenuOpen) => !isMobileMenuOpen);
  };
  useEffect(() => {
    if (isMobileMenuOpen && !isInView) setIsMobileMenuOpen(false);
  }, [isInView, isMobileMenuOpen]);

  return (
    <div
      className={`fixed left-0 top-0 z-20 flex w-screen flex-row items-center justify-center gap-8 bg-background-50 px-5 py-3 text-primary-950 shadow-sm sm:px-24 xl:px-60 text-lg`}
    >
      <NavbarLink
        text="Fijalkowskim"
        to={"#hero"}
        className="text-2xl italic mr-4"
      />
      <div
        className={`hidden flex-row items-center justify-start gap-8 lg:flex w-full`}
      >
        {navlinks.map((n) => (
          <NavbarLink text={n.name} to={n.to} />
        ))}
        <div className="ml-auto space-x-3">
          <CustomButton className="min-w-28 text-base">Contact</CustomButton>
          <CustomButton className="min-w-28 text-base" variant={"inverted"}>
            CV
          </CustomButton>
        </div>
      </div>
      <motion.button
        ref={ref}
        className="ml-auto cursor-pointer text-3xl lg:hidden"
        whileHover={{ scaleY: 1.1 }}
        onClick={toggleMobileMenu}
      >
        <RxHamburgerMenu />
      </motion.button>
      {/* Hamburger menu */}
      <AnimatePresence>
        {isInView && isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute left-0 top-0 z-50 h-screen w-screen overflow-hidden bg-black/40"
          >
            <div
              className="absolute inset-0"
              onClick={(e) => {
                e.stopPropagation();
                toggleMobileMenu();
              }}
            />
            <motion.ul
              initial={{ x: 500 }}
              animate={{ x: 0 }}
              exit={{ x: 500 }}
              transition={{ duration: 0.1 }}
              className="absolute right-0 top-0 flex h-full w-fit flex-col items-end gap-4 bg-primary-50 p-4 px-4 text-right text-2xl shadow-md"
            >
              <motion.button
                className="cursor-pointer text-4xl"
                whileHover={{ scale: 1.1 }}
                onClick={toggleMobileMenu}
              >
                <GoX />
              </motion.button>
              {navlinks.map((n) => (
                <div
                  onClick={() => {
                    toggleMobileMenu();
                  }}
                >
                  <NavbarLink text={n.name} to={n.to} />
                </div>
              ))}
              <CustomButton className="min-w-28 text-base">
                Contact
              </CustomButton>
              <CustomButton className="min-w-28 text-base" variant={"inverted"}>
                CV
              </CustomButton>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
