"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Fade as Hamburger } from "hamburger-react";
import { usePathname, useRouter } from "next/navigation";
// import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Admin, User } from "@prisma/client";
import HeaderLogo from "@/public/images/Soarx-transparent-logo.png";
import HeaderDropdown from "./HeaderDropdown";
import ButtonAuth from "./ButtonAuth";
import ThemeSwitcher from "./DarkThemes";
import InitiativesDropdown from "./InititiativesDropDown";


const Header = ({ admin }: User) => {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [UpperInitiative, setUpperInitiative] = useState(false);


  useEffect(() => {
    setIsClient(true);
  }, [admin]);

  return (
    <header className="mt-6 z-40">
      <div className="container mx-auto px-4">
        <nav className="navba lg:ml-16 lg:mr-20 rounded-lg dark:border-0 dark:bg-gray-800  flex justify-between items-center">
          <Link href="/">
            <div className="flex items-center">
              <Image
                src={HeaderLogo}
                width={0}
                height={0}
                className="w-24 dark:filter dark:invert dark:hue-rotate-180"
                alt="Header Logo"
              />
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-4">
            <ul className="flex items-center text-textColor dark:text-white font-medium space-x-4">
              <li
                className={
                  pathname === "/" ? "bg-[#9241d40d] rounded-lg" : "rounded-lg"
                }
              >
                <Link
                  className="hover:text-primaryPurple hover:transition-all ease-in-out duration-300 p-2"
                  href="/"
                >
                  Home
                </Link>
              </li>

              <li
                className={
                  pathname.includes("/events")
                    ? "bg-[#9241d40d] rounded-lg"
                    : "rounded-lg"
                }
              >
                <Link className="hover:text-primaryPurple p-2" href="/events" prefetch={true}>
                  Events
                </Link>
              </li>

              <li
                className={
                  pathname.includes("/jobs")
                    ? "bg-[#9241d40d] rounded-lg text-purple-500"
                    : "rounded-lg"
                }
              >
                <Link className="hover:text-primaryPurple p-2" href="/jobs">
                  Jobs
                </Link>
              </li>

              <HeaderDropdown />

              {admin && admin !== Admin.User && (
                <li
                  className={
                    pathname.includes("/admin")
                      ? "bg-[#9241d40d] rounded-lg"
                      : "rounded-lg"
                  }
                >
                  <Link className="hover:text-primaryPurple p-2" href="/admin">
                    Admin
                  </Link>
                </li>
              )}
            </ul>
          </div>

          <div className="flex items-center gap-x-5">
            <ThemeSwitcher />
            <span className="hidden md:flex">
              {/* <Pythonbootcamp /> */}
              <ButtonAuth />
            </span>
            <div className="md:hidden">
              <Hamburger
                toggled={showNavbar}
                toggle={setShowNavbar}
                distance="md"
                size={25}
              />
            </div>
          </div>
        </nav>

        {showNavbar && (
          <div  className="md:hidden ease-in-out delay-200 shadow-2xl bg-white dark:bg-gray-800 rounded-lg p-4 mt-2">
            <ul className="flex flex-col space-y-4 text-2xl text-black dark:text-white  font-medium">
              <li
                className={
                  pathname === "/" ? "bg-[#9241d40d] rounded-lg" : "rounded-lg"
                }
              >
                <Link
                  className="md:hover:text-primaryPurple hover:transition-all ease-in-out duration-300 p-2"
                  href="/"
                >
                  Home
                </Link>
              </li>

              <li
                className={
                  pathname.includes("/events")
                    ? "bg-[#9241d40d] rounded-lg"
                    : "rounded-lg"
                }
              >
                <Link
                  className="md:hover:text-primaryPurple p-2"
                  href="/events"
                  prefetch={true}
                >
                  Events
                </Link>
              </li>

              {/* <li
                className={
                  pathname.includes("/jobs")
                    ? "bg-[#9241d40d] rounded-lg text-purple-500"
                    : "rounded-lg"
                }
              >
                <Link
                  className="md:hover:text-primaryPurple p-2"
                  href="/jobs"
                >
                  Jobs
                </Link>
              </li> */}

              <p>
                <span>
                  <InitiativesDropdown />
                </span>
              </p>

              {admin && admin !== Admin.User && (
                <li
                  className={
                    pathname.includes("/admin")
                      ? "bg-[#9241d40d] rounded-lg"
                      : "rounded-lg"
                  }
                >
                  <Link
                    className="md:hover:text-primaryPurple p-2"
                    href="/admin"
                  >
                    Admin
                  </Link>
                </li>
              )}

              <li>
                {/* <Pythonbootcamp /> */}
                <ButtonAuth />
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
