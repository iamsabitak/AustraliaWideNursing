"use client";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-primary/100 relative text-black lg:pt-6">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-10 md:w-1/2 lg:w-4/12 xl:w-3/12">
              <div className="mb-12 max-w-[360px] lg:mb-16">
                <div className="flex w-50 items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-60 max-w-full px-4 xl:mr-12">
                      <Link href="/" className={`header-logo block`}>
                        <Image
                          src="/logo/sredgvdsw--281-29-338w-removebg-preview.png"
                          alt="logo"
                          width={200}
                          height={30}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-11 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-3/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-7 text-xl font-bold text-black">
                  Quick Links
                </h2>
                <ul>
                  <li>
                    <Link
                      href="/"
                      className="hover:text-blue mb-4 inline-block text-base font-light text-black duration-300"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="hover:text-blue mb-4 inline-block text-base font-light text-black duration-300"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="hover:text-blue mb-4 inline-block text-base font-light text-black duration-300"
                    >
                      Employers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="hover:text-blue mb-4 inline-block text-base font-light text-black duration-300"
                    >
                      Job Seekers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="hover:text-blue mb-4 inline-block text-base font-light text-black duration-300"
                    >
                      Blogs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="hover:text-blue mb-4 inline-block text-base font-light text-black duration-300"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-11 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-3/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-7 text-xl font-bold text-black">Contact</h2>
                <h3 className="hover:text-blue mb-4 inline-block cursor-pointer text-base font-bold text-black duration-300">
                  Phone: <span className="font-light">1300 501 036</span>
                </h3>
                <h3 className="hover:text-blue mb-4 inline-block cursor-pointer text-base font-bold text-black duration-300">
                  Email:{" "}
                  <span className="font-light">
                    {" "}
                    swastika@auswidenursing.com.au
                  </span>
                </h3>
                <div className="flex space-x-4 pt-4">
                  <a
                    href="https://www.facebook.com/australiawidenursing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-blue-600 p-3 text-white hover:bg-blue-700"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="https://www.instagram.com/auswidenursing/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-3 text-white"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/australia-wide-nursing-agency/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-blue-700 p-3 text-white hover:bg-blue-800"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full px-11 md:w-1/2 lg:w-4/12 xl:w-3/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-7 text-xl font-bold">Address</h2>
                <p className="mb-6 text-base"> Kearneys Spring, QLD 4350</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-blue px-20 py-7">
          <p className="text-center text-base font-light text-white">
            © 2024 All Rights Reserved Australia Nursing Agency | Privacy
            Policy | Powered with 💛 by Sabita
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
