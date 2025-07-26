import Image from "next/image";

import React from "react";
import { benefits } from "./Benefits";
import { services } from "./Services";

const areas = [
  {
    id: 1,
    name: "New South Wales (NSW)",
    image: "/Images/healthcare+worker-1920w.webp", // Replace with actual path
    alt: "Sydney, New South Wales",
  },
  {
    id: 2,
    name: "New South Wales (NSW)",
    image: "/Images/healthcare+worker-1920w.webp", // Replace with actual path
    alt: "Sydney, New South Wales",
  },
  {
    id: 3,
    name: "Victoria (VIC)",
    image: "/Images/healthcare+worker-1920w.webp", // Replace with actual path
    alt: "Melbourne, Victoria",
  },
];

const Employers = () => {
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
          Employers
        </h3>
      </div>
      <div className="mx-auto max-w-5xl px-4 py-15 text-center">
        <h2 className="mb-4 text-3xl font-semibold text-black md:text-4xl">
          Why Partner with Australia Wide Nursing?
        </h2>
        <p className="mb-6 text-gray-700">
          Australia Wide Nursing, your trusted partner in nurse staffing
          solutions for aged care and hospital settings across Australia. We
          understand the challenges of maintaining high standards of care while
          managing staffing needs, and we are here to provide the support you
          need to excel.
        </p>
      </div>
      <div className="mx-4 my-10 bg-white text-left sm:px-10 md:px-20">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          {/* Left Content */}
          <div>
            <h3 className="mb-3 text-3xl font-semibold text-black">
              Why Choose us?
            </h3>

            {services.map((item) => (
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
      {/* Areas We Serve Section */}
      <div className="bg-gray-100 py-16">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Areas We Serve
          </h2>
          <p className="mb-12 text-gray-700">
            We provide top-tier staffing solutions across key regions:
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {areas.map((area) => (
              <div
                key={area.id}
                className="relative h-64 overflow-hidden shadow"
              >
                <Image
                  src={area.image}
                  alt={area.alt || area.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-12 sm:px-8 lg:px-16">
        <h2 className="mb-12 text-center text-3xl font-bold text-black sm:text-4xl">
          What Are the Benefits of Working With Us?
        </h2>

        <div className="grid gap-8 px-10 sm:grid-cols-2 lg:grid-cols-2">
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
      <div className="bg-opacity-80 relative h-80 overflow-hidden bg-black p-15 text-white">
        <Image
          src="/Images/healthcare+worker-1920w.webp"
          alt="CTA Background"
          fill
          className="absolute inset-0 z-0 object-cover object-center opacity-20"
        />
        <div className="relative z-10 mx-auto max-w-4xl space-y-6 text-center">
          <h3 className="text-2xl font-semibold md:text-3xl">
            Nursing Roles Tailored for Aged Care and Hospital Staffing
          </h3>
          <p className="text-md">
            At Australia Wide Nursing, we offer a diverse range of nursing roles
            to meet the specific needs of aged care and hospital settings. Our
            tailored staffing solutions ensure that you have access to the right
            professionals to provide exceptional care. At Australia Wide
            Nursing, we're dedicated to pairing your facility with nursing
            professionals who bring skill, sensitivity, and a genuine calling to
            serve the older adult population. Trust us to help you find the
            right nursing talent to enrich the lives of those in your care.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Employers;
