import { Menu } from "../../types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About Us",
    path: "/about",
    newTab: false,
  },

  {
    id: 3,
    title: " Employers",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Registered Nurses",
        path: "/RegisteredNurses",
        newTab: false,
      },
      {
        id: 32,
        title: "Specialised Nurses",
        path: "/SpecialisedNurses",
        newTab: false,
      },
      {
        id: 33,
        title: "Rural and Remote Nurses",
        path: "/RuralRemoteNurses",
        newTab: false,
      },
      {
        id: 34,
        title: "Enrolled Nurses",
        path: "/EnrolledNurses",
        newTab: false,
      },
      {
        id: 35,
        title: "Assistants in Nursing",
        path: "/AssistantsinNursing",
        newTab: false,
      },
    ],
  },
  {
    id: 4,
    title: "Job Seekers",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: " Registered Nurse",
        path: "/RegisteredNursesJob",
        newTab: false,
      },
      {
        id: 42,
        title: "Enrolled Nurse",
        path: "/JobSeekerEnrolledNurse",
        newTab: false,
      },
      {
        id: 43,
        title: "AIN",
        path: "/JobSeekerAIN",
        newTab: false,
      },
    ],
  },
  {
    id: 5,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  {
    id: 6,
    title: "Contact Us",
    path: "/contact",
    newTab: false,
  },
];
export default menuData;
