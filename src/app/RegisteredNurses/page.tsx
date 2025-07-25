import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaNotesMedical, FaChalkboardTeacher } from "react-icons/fa";
import { FaUserDoctor, FaBedPulse, FaClipboardCheck } from "react-icons/fa6";
import { RiPsychotherapyFill } from "react-icons/ri";

const features = [
  {
    icon: <FaUserDoctor size={32} />,
    title: "Patient Assessment",
    desc: "Conducting thorough health assessments and physical examinations.",
  },
  {
    icon: <FaClipboardCheck size={32} />,
    title: "Care Planning",
    desc: "Developing and implementing individualised care plans.",
  },
  {
    icon: <RiPsychotherapyFill size={32} />,
    title: "Treatment Administration",
    desc: "Administering medications and treatments accurately.",
  },
  {
    icon: <FaChalkboardTeacher size={32} />,
    title: "Patient Education",
    desc: "Educating patients and families on health conditions and self-care.",
  },
  {
    icon: <FaNotesMedical size={32} />,
    title: "Clinical Documentation",
    desc: "Maintaining precise and detailed patient records.",
  },
  {
    icon: <FaBedPulse size={32} />,
    title: "Supervisory Roles",
    desc: "Leading and mentoring nursing teams to ensure high standards of care.",
  },
];

const RegisteredNurses = () => {
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
          Registered Nurses
        </h3>
      </div>

      <div className="mx-auto bg-gray-100 px-30 pt-20 pb-20 text-center">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-semibold text-black md:text-4xl">
            Registered Nurses (RNs) in Aged Care
          </h2>
          <p className="text-lg text-gray-700">
            At Australia Wide Nursing, our Registered Nurses (RNs) are essential
            providers of comprehensive and compassionate care in both aged care
            and hospital settings. Their key roles include:
          </p>
        </div>

        <div className="mt-15 grid grid-cols-1 gap-10 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-lg bg-white px-7 py-10 text-black shadow-md transition-transform hover:scale-105"
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

export default RegisteredNurses;
