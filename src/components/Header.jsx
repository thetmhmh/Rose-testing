"use client";
import Container from "@/app/container";
import Link from "next/link";
import React, { useState } from "react";
import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";

export const Navigation_Page = [
  { name: "Home", path: "/" },
  {name:"Discography",path:"/discography"},
  { name: "Videos", path: "/videos" },
  { name: "Photos", path: "/photos" },
  { name: "Biography", path: "/biography" },
];

const Header = () => {
  const [menuIcon, setMenuIcon] = useState(false);

  const toggleMenu = () => setMenuIcon((prev) => !prev);

  const [hover, setHover] = useState(false);

  return (
    <header className="mx-auto px-4">
      <Container>
        <nav className="relative flex justify-between items-center h-20 ">
          {/* Large Screen Navigation */}
          <ul className="hidden md:flex lg:text-[20px] items-center space-x-6">
            {Navigation_Page.map((item) => (
              <li
                key={item.path}
                className="text-lg font-twentieth text-gray-500 hover:text-primary hover:font-bold hover:text-lg"
              >
                <Link href={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>

          {/* Center Logo */}
          <div className="flex justify-center">
            <Link href="/">
              <span className="lg:text-3xl md:text-2xl sm:text-xl font-heading uppercase text-headingColor">
                Rosé
              </span>
            </Link>
          </div>

          {/* Social Icons for Large Screens */}
          <ul className="hidden md:flex items-end space-x-8">
            <li>
              <Link href="https://www.instagram.com/roses_are_rosie/">
                <FaInstagram className="w-5 h-5" />
              </Link>
            </li>
            <li>
              <Link href="https://www.youtube.com/channel/UCBo1hnzxV9rz3WVsv__Rn1g">
                <FaYoutube className="w-5 h-5" />
              </Link>
            </li>
            <li>
              <Link href="https://www.tiktok.com/@roses_are_rosie">
                <FaTiktok className="w-5 h-5" />
              </Link>
            </li>
            <li>
              <Link href="https://x.com/numberonehq">
                <FaXTwitter className="w-5 h-5" />
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Icon */}
          <div
            onClick={toggleMenu}
            className="flex   z-50 top-0 -translate-y-[20%] pt-2  md:hidden text-2xl cursor-pointer"
          >
            {menuIcon ? <MdOutlineClose /> : <HiOutlineMenu />}
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden fixed top-0 -left-3 w-[900px] h-[95%] bg-white z-40 p-6 transition-transform duration-300 ease-in-out ${
              menuIcon ? "translate-y-0 translate-x-14" : "translate-x-[700px]"
            }`}
          >
            <ul className="pt-[71px] pl-16 flex flex-col gap-7">
              {Navigation_Page.map((item) => (
                <li
                  key={item.path}
                  onClick={toggleMenu}
                  className={` text-gray-500 ${
                    hover ? "text-primary font-bold text-lg" : "text-blue"
                  }`}
                  onTouchStart={() => setHover(!hover)}
                >
                  <Link
                    href={item.path}
                    className="group-hover:text-primary group-hover:font-bold"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Icons for Mobile */}
            <div className="flex space-x-6 mt-10 text-2xl  pl-16">
              <Link href="https://www.instagram.com/roses_are_rosie/">
                <FaInstagram className="w-5 h-5" />
              </Link>
              <Link href="https://www.youtube.com/channel/UCBo1hnzxV9rz3WVsv__Rn1g">
                <FaYoutube className="w-5 h-5" />
              </Link>
              <Link href="https://www.tiktok.com/@roses_are_rosie">
                <FaTiktok className="w-5 h-5" />
              </Link>
              <Link href="https://x.com/numberonehq">
                <FaXTwitter className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
