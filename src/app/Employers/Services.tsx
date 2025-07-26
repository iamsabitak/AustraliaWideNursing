import { MdDiversity2 } from "react-icons/md";
import { FaBuildingCircleCheck } from "react-icons/fa6";
import { TbTopologyRing } from "react-icons/tb";
import { FaPeopleGroup } from "react-icons/fa6";

export const services = [
  {
    id: 1,
    icon: <MdDiversity2 className="text-6xl text-blue-700" />,
    title: "Exceptional Talent Pool",
    description:
      "At Australia Wide Nursing, we have a rigorous recruitment process to ensure that we provide only the most qualified, skilled, and compassionate nurses. Our team is dedicated to matching the right professionals to your specific needs, ensuring a seamless integration into your existing healthcare team.",
  },
  {
    id: 2,
    icon: <FaBuildingCircleCheck className="text-6xl text-blue-700" />,
    title: "Reliability and Flexibility:",
    description:
      "We understand that staffing needs can be unpredictable. Australia Wide Nursing offers flexible staffing solutions that can adapt to your changing requirements, from short-term placements to long-term assignments. Our reliability is built on our commitment to provide the right staff, right when you need them.",
  },
  {
    id: 3,
    icon: <TbTopologyRing className="text-6xl text-blue-700" />,
    title: "Commitment to Quality:",
    description:
      "Quality care is at the heart of what we do. We continuously monitor and evaluate our services to ensure that we meet and exceed industry standards. Your satisfaction and the well-being of your patients are our top priorities.",
  },
];
