import JobCards from "@/components/Testimonials";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { qualifications } from "./qualifications";
const RegisteredNursesJob = () => {
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
          Enrolled Nurses
        </h3>
      </div>
      <div className="relative z-10 mx-auto flex max-w-6xl gap-16 space-y-6 px-15 pt-10 text-center">
        <p className="text-blue text-xl font-semibold">
          Australia Wide Nursing: Elevating Standards in Aged Care Nursing for
          Enrolled Nurses
        </p>
        <p className="mb-6 text-gray-700">
          At Australia Wide Nursing, we are committed to enhancing the quality
          of aged care through the placement of highly skilled Enrolled Nurses.
          Join us in a career where your expertise, passion, and dedication can
          make a real difference in the lives of the elderly.
        </p>
      </div>
      <div className="mx-4 my-10 bg-white text-left sm:px-10 md:px-20">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          {/* Left Content */}
          <div>
            <h3 className="mb-3 text-3xl font-semibold text-black">
              Essential Qualifications for Enrolled Nurses at Australia Wide
              Nursing
            </h3>
            
            <div>
              {qualifications.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="mb-6 flex items-start gap-4">
                    <Icon className="text-6xl text-blue-700" />
                    <div>
                      <h4 className="text-xl font-semibold text-blue-800">
                        {item.title}
                      </h4>
                      {Array.isArray(item.desc) ? (
                        <ul className="mt-2 list-inside list-disc text-gray-700">
                          {item.desc.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="mt-2 text-gray-700">{item.desc}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
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
      <JobCards />
      <div className="relative z-10 mx-auto flex max-w-6xl gap-16 space-y-6 pt-7 text-center">
        <p className="text-blue text-xl font-semibold">
          At Australia Wide Nursing, We Believe in Matching Competence With
          Compassion. We Pride Ourselves on Creating Connections That Align With
          Both the Values of Our Nurses and the Needs of the Facilities We
          Support.
        </p>
        <Link href={"/contact"}>
          <button className="w-60 cursor-pointer rounded bg-yellow-400 px-6 py-3 font-semibold text-black hover:bg-yellow-500">
            Apply Here
          </button>
        </Link>
      </div>
    </section>
  );
};

export default RegisteredNursesJob;
