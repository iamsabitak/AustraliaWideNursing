import Contact from "@/components/Contact";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
};

const ContactPage = () => {
  return (
    <>
      <section id="about" className="pt-[92px] pb-[120px]">
        <div className="bg-opacity-80 relative overflow-hidden bg-black text-white h-100">
          <Image
            src="/file.svg" // ✅ Replace with actual image path
            alt="CTA Background"
            fill
            className="absolute inset-0 z-0 object-cover object-center opacity-20"
          />
          <h3 className="p-20 text-center text-2xl font-bold md:text-5xl">
            Contact Us
          </h3>
        </div>

        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <section className="py-16">
              <div className="pt-20 text-center text-2xl font-light text-gray-800 md:text-3xl dark:text-white">
                Have a question? We are here to help.{" "}
                <div>Send us a message and we’ll be in touch.</div>
              </div>
              <Contact />
              <div className="py-16">
                <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:grid-cols-2">
                  {/* Left: Contact Info */}
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold">Contact us</h2>

                    <div>
                      <p>
                        <span className="font-semibold">Phone:</span> 1300 501
                        036
                      </p>
                      <p>
                        <span className="font-semibold">Email:</span>{" "}
                        swastika@auswidenursing.com.au
                      </p>
                      <p>
                        <span className="font-semibold">Address:</span> Kearneys
                        Spring, QLD 4350
                      </p>
                    </div>

                    {/* Social Icons */}
                    <div className="flex space-x-4 pt-4">
                      <a
                        href="https://www.facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-blue-600 p-3 text-white hover:bg-blue-700"
                      >
                        <FaFacebookF />
                      </a>
                      <a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-3 text-white"
                      >
                        <FaInstagram />
                      </a>
                      <a
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-blue-700 p-3 text-white hover:bg-blue-800"
                      >
                        <FaLinkedinIn />
                      </a>
                    </div>
                  </div>

                  {/* Right: Embedded Google Map */}
                  <div className="h-[350px] w-full">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3478.172268203148!2d151.92419317523877!3d-27.59719782376379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b96562742967437%3A0x9f865f74ad674b73!2sKearney%20St%2C%20Kearneys%20Spring%20QLD%204350%2C%20Australia!5e0!3m2!1sen!2sau!4v1721127380585!5m2!1sen!2sau"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
