"use client";

import { FC } from "react";
import {
  FaUserMd,
  FaClipboardCheck,
  FaCheckCircle,
  FaUserFriends,
  FaHeartbeat,
  FaSyncAlt,
} from "react-icons/fa";

const features = [
  {
    icon: <FaUserMd size={32} />,
    title: "Highly qualified professionals",
  },
  {
    icon: <FaCheckCircle size={32} />,
    title: "Ready to contribute from day one",
  },
  {
    icon: <FaClipboardCheck size={32} />,
    title: "Thoroughly vetted candidates",
  },
  {
    icon: <FaHeartbeat size={32} />,
    title: "Expertise in various healthcare specialties",
  },
  {
    icon: <FaUserFriends size={32} />,
    title: "Reliable and dependable team members",
  },
  {
    icon: <FaSyncAlt size={32} />,
    title: "Seamless integration into your existing healthcare team",
  },
];

const FeatureGrid: FC = () => {
  return (
    <section className="py-16 md:py-20 lg:py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mx-auto mb-4 max-w-4xl text-center text-3xl font-medium">
          Our commitment to quality & reliability ensures that you receive
          top-notch professionals for your Healthcare Team. Here's what you can
          expect
        </h2>

        <div className="mt-15 grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="h-44 rounded-lg bg-white p-6 text-black shadow-md transition-transform hover:scale-105"
            >
              <div className="mb-4 flex justify-center text-blue-700">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
