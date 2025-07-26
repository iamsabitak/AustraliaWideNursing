import JobCards from "@/components/Testimonials";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { FaGraduationCap } from "react-icons/fa6";

import { FaUserDoctor } from "react-icons/fa6";
import { FaHandHoldingMedical } from "react-icons/fa6";
import { FaWheelchair } from "react-icons/fa";

const features = [
  {
    icon: <FaGraduationCap size={32} />,
    title: "Educational Foundation",
    desc: "Must have a Certificate III in Individual Support (Ageing) or an equivalent qualification, ensuring your foundational knowledge meets the high standards of aged care.",
  },
  {
    icon: <FaUserDoctor size={32} />,
    title: "Professional Competence",
    desc: "Demonstrate your ability to assist Registered and Enrolled Nurses by providing essential care, including personal hygiene, mobility assistance, and basic health monitoring.",
  },
  {
    icon: <FaHandHoldingMedical size={32} />,
    title: "Clinical Expertise",
    desc: "Utilise your skills in areas such as infection control, manual handling, and patient communication to provide effective and empathetic care.",
  },
  {
    icon: <FaWheelchair size={32} />,
    title: "Specialised Aged Care Experience",
    desc: "If you have prior experience in aged care, your specialised skills will be instrumental in providing compassionate and tailored care to our senior community.",
  },
];
const JobSeekerAIN = () => {
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
          Assistant in Nursing
        </h3>
      </div>
      <div className="mx-4 my-10 bg-white text-left sm:px-10 md:px-20">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div>
            <h3 className="mb-3 text-3xl font-semibold text-black">
              Australia Wide Nursing: Elevating Standards in Aged Care for
              Assistants in Nursing
            </h3>
            <p className="mb-6 text-gray-700">
              At Australia Wide Nursing, we are committed to enhancing the
              quality of aged care through the placement of highly dedicated
              Assistants in Nursing (AINs). Join us in a career where your
              compassion, skills, and dedication can make a real difference in
              the lives of the elderly.
            </p>
          </div>

          {/* Image */}
          <div>
            <Image
              src="/About/jeshoots-com-l0j0DHVWcIE-unsplash.jpg"
              alt="Healthcare Managers"
              width={500}
              height={350}
              className="h-auto w-full rounded object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto bg-gray-100 px-30 pt-20 pb-20 text-center">
        <h3 className="mb-3 text-center text-3xl font-semibold text-black">
          Qualifications for Assistants in Nursing at Australia Wide Nursing
        </h3>
        <div className="grid grid-cols-1 gap-10 pt-15 pb-15 md:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 text-left text-black shadow-md transition-transform hover:scale-105 ${
                index % 2 === 1 ? "bg-yellow-400" : "bg-white"
              }`}
              // className="rounded-lg bg-white px-7 py-10 text-black shadow-md transition-transform hover:scale-105"
            >
              <div className="mb-5 flex justify-center text-blue-700">
                {feature.icon}
              </div>
              <h3 className="pb-4 text-center text-xl font-semibold">
                {feature.title}
              </h3>
              <p className="text-md text-center font-light">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <JobCards />
      <div className="relative z-10 mx-auto flex max-w-6xl gap-16 space-y-6 pt-9 pb-2 text-center">
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

export default JobSeekerAIN;
