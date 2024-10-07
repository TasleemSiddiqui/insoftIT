"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Elements/button"; // Fixed import path
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/Elements/dropdown-menu"; // Fixed import path
import {
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/Elements/sheet"; // Fixed import path

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle menu
  const pathname = usePathname();
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`z-40 w-full bg-white transition-all duration-300 ease-in-out`}
    >
      {/* Social media bar */}
      <div className="items-start justify-end w-full bg-primary hidden lg:flex px-8">
        <div className="flex items-center justify-start gap-5 py-2 text-xl text  text-accent-foreground">
          <Link href="/">
            <FaFacebookF />
          </Link>
          <Link href="/">
            <FaInstagram />
          </Link>
          <Link href="/">
            <FaLinkedin />
          </Link>
          <Link href="/">
            <FaTwitter />
          </Link>
        </div>
      </div>

      {/* Navbar section */}
      <div
        className={`${
          isFixed
            ? "fixed top-0 left-0 w-full z-50 shadow-lg bg-white"
            : "relative"
        } flex items-center justify-between w-full px-4 py-2 shadow-lg`}
      >
        {/* Logo */}
        <div className="w-auto py-1 px-4">
          <Link href="/">
            <Image
              loading="lazy"
              src="/assets/logo.png"
              alt="logo"
              width={82}
              height={72}
            />
          </Link>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="lg:hidden z-50">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button>
                <Image
                  src="/assets/hamburger.svg"
                  width={24}
                  height={24}
                  loading="lazy"
                  alt="Menu"
                />
              </button>
            </SheetTrigger>
            <SheetContent side="top">
              <SheetHeader>
                <SheetTitle className={"flex justify-center items-center"}>
                  {" "}
                  <Link href="/">
                    <Image
                      loading="lazy"
                      src="/assets/logo.png"
                      alt="logo"
                      width={50}
                      height={50}
                    />
                  </Link>
                </SheetTitle>
              </SheetHeader>

              {/* Mobile Menu Content */}
              <nav className="block px-3 text-muted-foreground space-y-4">
                <div className="block mb-3">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    <Button>Contact us</Button>
                  </Link>
                </div>
                <ul>
                  <li className="relative">
                    <Link
                      className={`flex py-2 text-[16px] font-bold hover:text-primary ${
                        pathname === "/" ? "text-primary" : ""
                      }`}
                      href="/"
                      onClick={() => setIsOpen(false)}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={`${
                    pathname.startsWith("/service") ? "text-primary" : ""
                  } hover:text-primary`}
                >
                  Services
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Link href="/service/it-services"  onClick={() => setIsOpen(false)} >IT Services</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/service/institute-services"  onClick={() => setIsOpen(false)}>
                      Institute Services
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/service/co-working-space"  onClick={() => setIsOpen(false)}>
                      Co-Working Space
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
                  <li className="relative">
                    <Link
                      className={`flex py-2 text-[16px] font-bold hover:text-primary ${
                        pathname === "/about" ? "text-primary" : ""
                      }`}
                      href="/about"
                      onClick={() => setIsOpen(false)}
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="relative">
                    <Link
                      className={`flex py-2 text-[16px] font-bold hover:text-primary ${
                        pathname === "/contact" ? "text-primary" : ""
                      }`}
                      href="/contact"
                      onClick={() => setIsOpen(false)}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>

                {/* Social Media Links */}
                <div className="block lg:hidden mt-6">
                  <div>
                    <p className="text-[14px] font-bold text-dark">
                      Follow us on
                    </p>
                    <div className="flex items-center justify-start gap-2 py-5">
                      <Link href="/">
                        <Image
                          alt="social-icon"
                          loading="lazy"
                          width={40}
                          height={40}
                          src="/assets/instagram.png"
                        />
                      </Link>
                      <Link href="/">
                        <Image
                          alt="social-icon"
                          loading="lazy"
                          width={40}
                          height={40}
                          src="/assets/instagram.png"
                        />
                      </Link>
                      <Link href="/">
                        <Image
                          alt="social-icon"
                          loading="lazy"
                          width={40}
                          height={40}
                          src="/assets/linkedin.png"
                        />
                      </Link>
                      <Link href="/">
                        <Image
                          alt="social-icon"
                          loading="lazy"
                          width={40}
                          height={40}
                          src="/assets/twitter.png"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Links for large screens */}
        <nav className="hidden lg:flex flex-1 justify-center">
          <ul className="text-muted-foreground flex items-center gap-12 text-[#637381] font-semibold">
            <li>
              <Link
                className={`${
                  pathname === "/" ? "text-primary" : ""
                } hover:text-primary`}
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={`${
                    pathname.startsWith("/service") ? "text-primary" : ""
                  } hover:text-primary`}
                >
                  Services
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Link href="/service/it-services">IT Services</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/service/institute-services">
                      Institute Services
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/service/co-working-space">
                      Co-Working Space
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li>
              <Link
                className={`${
                  pathname === "/about" ? "text-primary" : ""
                } hover:text-primary`}
                href="/about"
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                className={`${
                  pathname === "/contact" ? "text-primary" : ""
                } hover:text-primary`}
                href="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Contact Us button for large screens */}
        <div className="hidden lg:block py-1 px-4">
          <Link href="/contact">
            <Button>Contact us</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
