import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaNotesMedical } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { LuHandHeart } from "react-icons/lu";
import { TbActivityHeartbeat } from "react-icons/tb";
import { IoBandage } from "react-icons/io5";

const features = [
  {
    icon: <FaUserDoctor size={32} />,
    title: "Basic Patient Care",
    desc: "Assisting with daily living activities and personal hygiene.",
  },
  {
    icon: <TbActivityHeartbeat size={32} />,
    title: "Vital Signs Monitoring",
    desc: "Regularly checking and recording patient vital signs.",
  },
  {
    icon: <IoBandage size={32} />,
    title: "Wound Care",
    desc: "Managing wound dressings and minor medical procedures.",
  },
  {
    icon: <LuHandHeart size={32} />,
    title: "Supportive Roles",
    desc: "Collaborating with RNs to implement care plans and ensure patient comfort.",
  },
  {
    icon: <FaNotesMedical size={32} />,
    title: "Clinical Documentation",
    desc: "Accurately documenting patient care and observations..",
  },
];
const EnrolledNurses = () => {
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

      <div className="mx-auto bg-gray-100 px-30 pt-10 pb-20 text-center">
        <h3 className="pt-10 text-center text-2xl font-semibold text-black md:text-4xl">
          Enrolled Nurses (ENs) in Aged Care
        </h3>
        <p className="mx-auto mt-4 max-w-4xl text-center text-2xl font-light text-black">
          At Australia Wide Nursing, our Enrolled Nurses (ENs) provide essential
          support in both aged care and hospital settings. Their key roles
          include:
        </p>

        <div className="mt-10 flex justify-center">
          <div className="mt-10 grid justify-center gap-10 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-lg bg-gray-100 px-7 py-15 text-black shadow-md transition-transform hover:scale-105"
              >
                <div className="mb-5 flex justify-center text-blue-700">
                  {feature.icon}
                </div>
                <h3 className="pb-4 text-xl font-semibold">{feature.title}</h3>
                <p className="text-lg font-light">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-opacity-80 relative h-80 overflow-hidden bg-black p-15 text-white">
        <Image
          src="/Images/healthcare+worker-1920w.webp"
          alt="CTA Background"
          fill
          className="absolute inset-0 z-0 object-cover object-center opacity-20"
        />
        <div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center">
          <p className="text-lg">
            Our RNs bring versatility, experience, and reliability, ensuring
            that your patients receive the best possible care.
          </p>
          <Link href={"/contact"}>
            <button className="cursor-pointer rounded bg-yellow-400 px-6 py-3 font-semibold text-black hover:bg-yellow-500">
              Hire Expert Nurses Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EnrolledNurses;
