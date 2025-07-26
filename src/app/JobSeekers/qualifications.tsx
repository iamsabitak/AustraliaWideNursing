import { MdDiversity2 } from "react-icons/md";
import { FaBuildingCircleCheck } from "react-icons/fa6";
import { TbTopologyRing } from "react-icons/tb";
import { FaPeopleGroup } from "react-icons/fa6";

export const qualifications = [
  {
    id: 1,
    icon: <MdDiversity2 className="text-6xl text-blue-700" />,
    title: "Diverse Opportunities",
    description:
      "We offer a variety of placements across aged care facilities and hospitals, allowing you to find the perfect fit for your skills and interests.",
  },
  {
    id: 2,
    icon: <FaBuildingCircleCheck className="text-6xl text-blue-700" />,
    title: "Professional Growth",
    description:
      "Working with Australia Wide Nursing provides continuous learning opportunities and professional development. We support our staff in pursuing further training and specialisation.",
  },
  {
    id: 3,
    icon: <TbTopologyRing className="text-6xl text-blue-700" />,
    title: "Flexibility",
    description:
      "We understand the importance of work-life balance. Our flexible scheduling options allow you to choose shifts and assignments that suit your lifestyle.",
  },
  {
    id: 4,
    icon: <FaPeopleGroup className="text-6xl text-blue-700" />,
    title: "Supportive Environment",
    description:
      "At Australia Wide Nursing, we value our staff and foster a supportive, inclusive work environment. You'll be part of a team that values collaboration and mutual respect.",
  },
];
