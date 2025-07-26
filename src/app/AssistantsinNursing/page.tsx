import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaNotesMedical, FaChalkboardTeacher } from "react-icons/fa";
import { FaUserDoctor, FaBedPulse, FaClipboardCheck } from "react-icons/fa6";
import { RiPsychotherapyFill } from "react-icons/ri";

const features = [
  {
    icon: <FaUserDoctor size={32} />,
    title: "Personal Care Assistancet",
    desc: "Helping patients with bathing, dressing, and mobility..",
  },
  {
    icon: <FaClipboardCheck size={32} />,
    title: "Feeding Support",
    desc: "Assisting with meal preparation and feeding.",
  },
  {
    icon: <RiPsychotherapyFill size={32} />,
    title: "Emotional Support",
    desc: "Offering companionship and emotional support to enhance patient quality of life.",
  },
  {
    icon: <FaChalkboardTeacher size={32} />,
    title: "Observation and Reporting",
    desc: "Monitoring patient conditions and reporting any changes to the nursing team.",
  },

  {
    icon: <FaBedPulse size={32} />,
    title: "Basic Care Duties",
    desc: "Performing tasks such as bed making, hygiene maintenance, and assisting with toileting.",
  },
];
const AssistantsinNursing = () => {
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
          Assistants in Nursing
        </h3>
      </div>

      <div className="mx-auto bg-gray-100 px-30 pt-20 pb-20 text-center">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-semibold text-black md:text-4xl">
            Assistants in Nursing (AINs) in Aged Care
          </h2>
          <p className="text-lg text-gray-700">
            At Australia Wide Nursing, our Assistants in Nursing (AINs) are
            dedicated to providing hands-on care and support in both aged care
            and hospital settings. Their key roles include:
          </p>
        </div>
        <div className="mt-10 flex justify-center">
          <div className="mt-10 grid justify-center gap-10 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`rounded-xl p-6 text-left text-black shadow-md transition-transform hover:scale-105 ${
                  index % 2 === 1 ? "bg-yellow-400" : "bg-white"
                }`}
                // className="rounded-lg bg-white px-7 py-15 text-black shadow-md transition-transform hover:scale-105"
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
            Our AINs are compassionate, reliable, and essential in ensuring the
            comfort and well-being of your patients.
          </p>
          <Link href={"/contact"}>
            <button className="cursor-pointer rounded bg-yellow-400 px-6 py-3 font-semibold text-black hover:bg-yellow-500">
              Partner With Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AssistantsinNursing;
