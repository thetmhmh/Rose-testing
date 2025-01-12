import Container from "@/app/container";
import Link from "next/link";
import React from "react";

import {
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaSpotify,
  FaApple,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center mt-auto py-6 sm:py-9">
      <Container>
        <div className="max-w-2xl mx-auto text-center px-4 space-y-6 sm:space-y-8">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl text-headingColor font-heading uppercase"
          >
            Rosé
          </Link>

          {/* Social Icons */}
          <div className="flex flex-wrap justify-center items-center gap-4">
            <Link
              href="https://www.instagram.com/roses_are_rosie/"
              className="text-primary hover:text-primary"
            >
              <FaInstagram className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.youtube.com/channel/UCBo1hnzxV9rz3WVsv__Rn1g"
              className="text-primary hover:text-primary"
            >
              <FaYoutube className="w-5 h-5" />
            </Link>
            <Link
              href="https://open.spotify.com/artist/3eVa5w3URK5duf6eyVDbu9"
              className="text-primary hover:text-primary"
            >
              <FaSpotify className="w-5 h-5" />
            </Link>
            <Link
              href="https://music.apple.com/cn/artist/ros%C3%A9/1406242696?l=en-GB"
              className="text-primary hover:text-primary"
            >
              <FaApple className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.tiktok.com/@roses_are_rosie"
              className="text-primary hover:text-primary"
            >
              <FaTiktok className="w-5 h-5" />
              <span className="sr-only">TikTok</span>
            </Link>
            <Link
              href="https://x.com/numberonehq"
              className="text-primary hover:text-primary"
            >
              <FaXTwitter className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>

          {/* Copyright and Links */}
          <div className="text-sm font-twentieth font-medium text-primary space-y-2 sm:space-x-2">
            <span>&copy; Rosé All Rights Reserved.</span>
            <span className="hidden sm:inline">|</span>
            <Link
              href="/privacy-policy"
              className="hover:text-gray-700 block sm:inline"
            >
              Privacy Policy
            </Link>
            <span className="hidden sm:inline">|</span>
            <Link
              href="/terms-of-use"
              className="hover:text-gray-700 block sm:inline"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
// ,,,,,
export default Footer;
