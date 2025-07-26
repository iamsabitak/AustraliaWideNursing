import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaUserDoctor, FaBedPulse, FaClipboardCheck } from "react-icons/fa6";

const features = [
  {
    icon: <FaUserDoctor size={32} />,
    title: "Aged Care Nurses",
    desc: "Our aged care nurses are dedicated to providing compassionate and comprehensive care for the elderly, ensuring their well-being and quality of life.",
  },
  {
    icon: <FaClipboardCheck size={32} />,
    title: "Specialised Nurses",
    desc: "We offer nurses with specialised expertise in various hospital settings, equipped to handle a wide range of medical conditions and emergencies.",
  },
];
const RuralRemoteNurses = () => {
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
          Rural and Remote Nurses
        </h3>
      </div>

      <div className="mx-auto bg-gray-100 px-30 pt-20 pb-20 text-center">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <p className="text-lg text-gray-700">
            Australia Wide Nursing is committed to delivering exceptional
            nursing services to the rural and remote regions of Queensland,
            Victoria, and New South Wales. Our roster of highly skilled nurses
            is ready to support healthcare facilities and communities in these
            areas.
          </p>
        </div>

        <h3 className="pt-9 text-center text-2xl font-semibold text-black md:text-4xl">
          Our Nursing Specialties:
        </h3>
        <div className="mt-10 flex justify-center">
          <div className="mt-5 grid justify-center gap-18 md:grid-cols-2 lg:grid-cols-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`rounded-xl p-6 text-left text-black shadow-md transition-transform hover:scale-105 ${
                  index % 2 === 1 ? "bg-yellow-400" : "bg-white"
                }`}
                // className="rounded-lg bg-gray-100 px-7 py-15 text-black shadow-md transition-transform hover:scale-105"
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
            Hire with confidence, knowing that your patients are in capable and
            caring hands with Australia Wide Nursing.
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

export default RuralRemoteNurses;
