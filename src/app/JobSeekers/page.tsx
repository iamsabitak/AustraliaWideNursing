import JobCards from "@/components/Testimonials";
import Image from "next/image";
import React from "react";
import { benefits } from "./Benefits";
import { qualifications } from "./qualifications";

const JobSeekers = () => {
  return (
    <section id="contact" className="pt-[92px]">
      <div className="bg-opacity-80 relative h-100 overflow-hidden bg-black">
        <Image
          src="/Images/healthcare+worker-1920w.webp"
          alt="CTA Background"
          fill
          className="absolute inset-0 z-0 object-cover object-center opacity-20"
        />
        <h3 className="mt-20 p-20 text-center text-2xl font-bold text-white md:text-5xl">
          Job seekers
        </h3>
      </div>
      <div className="mx-auto max-w-5xl px-4 py-15 text-center">
        <h2 className="mb-4 text-3xl font-semibold text-black md:text-4xl">
          Australia Wide Nursing: Your Trusted Nurse Staffing Agency
        </h2>
      </div>
      <div className="mx-4 my-10 bg-white text-left sm:px-10 md:px-20">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          {/* Left Content */}
          <div>
            <h3 className="mb-3 text-3xl font-semibold text-black">
              Why Choose to Work With Us?
            </h3>

            {qualifications.map((item) => (
              <div key={item.id} className="mb-6 flex items-start gap-4">
                {item.icon}
                <div>
                  <h4 className="text-xl font-semibold text-blue-800">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Image */}
          <div>
            <Image
              src="/About/jeshoots-com-l0j0DHVWcIE-unsplash.jpg"
              alt="Healthcare Managers"
              width={500}
              height={350}
              className="h-160 w-full rounded object-cover shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-12 sm:px-8 lg:px-16">
        <h2 className="mb-12 text-center text-3xl font-bold text-black sm:text-4xl">
          What Are the Benefits of Working With Us?
        </h2>

        <div className="grid gap-8 px-10 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="rounded-md bg-white shadow transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="relative h-60 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-md"
                />
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-lg font-semibold text-blue-800">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <JobCards />
    </section>
  );
};

export default JobSeekers;
