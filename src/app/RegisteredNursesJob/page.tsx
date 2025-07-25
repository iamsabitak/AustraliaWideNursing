import JobCards from "@/components/Testimonials";
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
];

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
          Registered Nurses
        </h3>
      </div>

      <div className="mx-25 my-18 bg-white text-center sm:px-10 md:px-20">
        <div className="grid grid-cols-1 items-center gap-20 md:grid-cols-2">
          <div>
            <h3 className="mb-3 text-3xl font-semibold text-black">
              Australia Wide Nursing: Elevating Standards in Aged Care and
              Hospital Staffing
            </h3>
            <p className="mb-6 text-black">
              At Australia Wide Nursing , we are committed to enhancing the
              quality of aged care through the placement of highly skilled
              Registered Nurses. Join us in a career where your expertise,
              passion, and dedication can make a real difference in the lives of
              the elderly.
            </p>
          </div>
          <div>
            <Image
              src="/Images/healthcare+worker-1920w.webp"
              alt="Healthcare Managers"
              width={500}
              height={350}
              className="h-auto w-full rounded object-cover shadow-lg"
            />
          </div>
        </div>
        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 text-left shadow-md ${
                index % 2 === 1 ? "bg-yellow-400 text-black" : "bg-white"
              }`}
            >
              <div className="mb-4 text-3xl text-blue-700">{feature.icon}</div>
              <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
              <p className="text-base font-light">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <JobCards />
      <div className="relative z-10 mx-auto flex max-w-6xl gap-16 space-y-6 p-15 text-center">
        <p className="text-blue text-xl font-semibold">
          Join Australia Wide Nursing and Be a Part of a Team Where Your Skills
          and Compassion Are Not Just Valued but Celebrated.
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
