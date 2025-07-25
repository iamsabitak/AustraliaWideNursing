import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStarOfLife } from "react-icons/fa";

const expertise = [
  "Dementia and Alzheimer’s Care",
  "Behavioural and Psychological Symptoms of Dementia (BPSD) Management",
  "Palliative and End-of-Life Care",
  "Medication Management",
  "Wound Management",
  "Mobility Assistance and Fall Prevention",
  "Nutrition and Hydration Support",
  "Continence Care",
  "Chronic Disease Management (e.g., diabetes, heart disease, arthritis)",
  "Restorative and Rehabilitative Care",
  "Social and Emotional Support",
  "Activities of Daily Living (ADL) Assistance",
  "Pain Management in Elderly Patients",
];

const SpecialisedNurses = () => {
  return (
    <section id="contact" className="pt-[92px]">
      <div className="bg-opacity-80 relative h-100 overflow-hidden bg-black">
        <Image
          src="/Images/healthcare+worker-1920w.webp"
          alt="/SpecialisedNurses"
          width={500}
          height={350}
          className="h-auto w-full rounded object-cover shadow-lg"
        />
        <h3 className="mt-20 p-20 text-center text-2xl font-bold text-white md:text-5xl">
          Specialised Nurses
        </h3>
      </div>
      <section className="bg-gray-100 pt-24 pb-20">
        {/* Top Section */}
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-semibold text-black md:text-4xl">
            Specialised Nurses with Areas of Expertise in Hospital Setting
          </h2>
          <p className="text-lg text-gray-700">
            At Australia Wide Nursing, our specialised nurses are equipped with
            advanced training and expertise to handle the complexities of aged
            care and hospital care.
          </p>
        </div>

        {/* Main Grid */}
        <div className="mx-25 my-18 grid grid-cols-1 items-center gap-20 md:grid-cols-2">
          <div>
            <h3 className="mb-6 text-2xl font-bold">Areas of Expertise</h3>
            <div className="grid grid-cols-1 gap-x-10 gap-y-4 text-left md:grid-cols-2">
              {expertise.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <FaStarOfLife className="mt-1 text-yellow-400" size={18} />
                  <p className="text-gray-800">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <Image
              src="/Images/24-1920w.webp"
              alt="Nurse assisting elderly patient"
              width={600}
              height={400}
              className="rounded-lg object-cover shadow-lg"
            />
          </div>
        </div>
      </section>
      <div className="bg-opacity-80 relative h-80 overflow-hidden bg-black p-15 text-white">
        <Image
          src="/Images/healthcare+worker-1920w.webp"
          alt="CTA Background"
          fill
          className="absolute inset-0 z-0 object-cover object-center opacity-20"
        />
        <div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center">
          <p className="text-lg">
            Our nurses are trained to provide compassionate, person-centred care
            that respects the dignity and individual needs of each resident in
            aged care facilities. They are adept at working within
            multidisciplinary teams to ensure comprehensive and holistic care
            for older adults.
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

export default SpecialisedNurses;
