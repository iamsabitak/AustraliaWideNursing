"use client";

import { FaArrowRight } from "react-icons/fa";

type Job = {
  id: number;
  title: string;
  location: string;
  country: string;
  date: string;
  company: string;
  description: string;
};

const jobs: Job[] = [
  {
    id: 1,
    title: "Registered Nurse",
    location: "Queensland",
    country: "Australia",
    date: "17/08/2024",
    company: "Australia Wide Nursing",
    description:
      "is seeking a skilled Registered Nurse to provide compassionate care to residents in aged care...",
  },
  {
    id: 2,
    title: "Personal Care Assistant",
    location: "Queensland",
    country: "Australia",
    date: "14/08/2024",
    company: "Australia Wide Nursing",
    description:
      "is seeking a skilled Personal Care Assistant- PCA to provide compassionate care to residents...",
  },
];

const JobCards = () => {
  return (
    <section
      className="relative z-10 bg-cover bg-center bg-no-repeat py-16 md:py-20 lg:py-16"
      style={{ backgroundImage: "url('/Images/aged+care+nursing-1920w.webp')" }}
    >
      <div className="container">
        <h1 className="mx-auto text-center text-5xl font-extrabold text-white">
          Latest jobs
        </h1>
        <div className="mt-10 flex justify-center">
          <div className="mt-10 grid justify-center gap-18 md:grid-cols-2 lg:grid-cols-2">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="h-110 w-105 cursor-pointer justify-center rounded-2xl bg-white p-10 text-black transition duration-300 hover:bg-gray-100"
              >
                <p className="mb-2 text-sm text-gray-500">{job.location}</p>
                <p className="mb-3 text-sm dark:text-gray-100">{job.country}</p>

                <h3 className="text-primary mb-4 text-xl font-bold">
                  {job.title}
                </h3>

                <p className="mb-5 text-sm">{job.date}</p>

                <p className="mb-6 text-base leading-relaxed">
                  <strong>{job.company}</strong> {job.description}
                </p>

                <div className="text-primary hover:text-primary/80 mt-15 flex cursor-pointer items-center justify-center font-semibold hover:cursor-pointer">
                  Learn more <FaArrowRight className="ml-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobCards;
