"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="bg-primary relative z-10 pt-16 text-black md:pt-20 lg:pt-16">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-10 md:w-1/2 lg:w-4/12 xl:w-3/12">
              <div className="mb-12 max-w-[360px] lg:mb-16">
                <div className="flex w-50 items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="text-blue">logo</div>

                    {/* Vertical Divider */}
                    <div className="h-[55px] w-px bg-white"></div>

                    {/* Text Section */}
                    <div>
                      <h1 className="text-blue text-[1.6rem] font-bold">
                        AWNA
                      </h1>
                      <p className="text-[0.7rem] font-normal text-white">
                        AUSTRALIA WIDE NURSING AGENCY
                      </p>
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
                <div className="mt-6 flex items-center">
                  <Link
                    href="/"
                    aria-label="facebook-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue mr-6 duration-300"
                  >
                    <svg
                      width="29"
                      height="29"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.1 10.4939V7.42705C12.1 6.23984 13.085 5.27741 14.3 5.27741H16.5V2.05296L13.5135 1.84452C10.9664 1.66676 8.8 3.63781 8.8 6.13287V10.4939H5.5V13.7183H8.8V20.1667H12.1V13.7183H15.4L16.5 10.4939H12.1Z"
                        fill="currentColor"
                      />
                    </svg>
                  </Link>
                  <a
                    href="/"
                    aria-label="Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ttext-blue mr-6 duration-300"
                  >
                    <svg
                      width="33"
                      height="33"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M349.33 69.33H162.67C110.33 69.33 69.33 
      110.33 69.33 162.67v186.66c0 52.34 
      41 93.34 93.34 93.34h186.66c52.34 
      0 93.34-41 93.34-93.34V162.67c0-52.34
      -41-93.34-93.34-93.34zm61.34 
      280c0 33.93-27.41 61.34-61.34 
      61.34H162.67c-33.93 0-61.34-27.41
      -61.34-61.34V162.67c0-33.93 
      27.41-61.34 61.34-61.34h186.66
      c33.93 0 61.34 27.41 
      61.34 61.34zM377.33 
      162.67a28.67 28.67 0 1 1 
      -57.34 0 28.67 28.67 0 0 1 
      57.34 0zM256 165.33A90.67 90.67 
      0 1 0 346.67 256 90.76 90.76 0 
      0 0 256 165.33zm0 
      149.34A58.67 58.67 0 1 1 
      314.67 256 58.67 58.67 0 
      0 1 256 314.67z"
                      />
                    </svg>
                  </a>

                  <a
                    href="/"
                    aria-label="linkedin-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue duration-300"
                  >
                    <svg
                      width="29"
                      height="29"
                      viewBox="0 0 17 16"
                      className="fill-current"
                    >
                      <path d="M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.07 13.1089H11.796V9.55183C11.796 8.7061 11.771 7.58674 10.5964 7.58674C9.39693 7.58674 9.222 8.53198 9.222 9.47721V13.1089H6.94792V5.7709H9.17202V6.79076H9.19701C9.52188 6.19377 10.2466 5.59678 11.3711 5.59678C13.6952 5.59678 14.12 7.08925 14.12 9.12897V13.1089H14.07Z" />
                    </svg>
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
