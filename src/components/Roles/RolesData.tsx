import { FaLaptopCode, FaDatabase, FaCloud, FaCogs } from "react-icons/fa";
import { MdOutlineArchitecture } from "react-icons/md";
import { RiBuilding4Line } from "react-icons/ri";
import { Role } from "@/types/role";

 const roles:Role[] = [
    {
      icon: <FaLaptopCode />,
      title: "Multimedia Development Engineer",
      description:
        "Specializes in creating interactive multimedia applications such as websites, video games, and mobile apps.",
    },
    {
      icon: <FaCogs />,
      title: "Enterprise Application Integrator",
      description:
        "Integrates software applications to meet business needs and ensure they work harmoniously.",
    },
    {
      icon: <MdOutlineArchitecture />,
      title: "IS Urbanist & Enterprise Architect",
      description:
        "Designs and implements the high-level structure of Information Systems.",
    },
    {
      icon: <FaCloud />,
      title: "Cloud Solution Architect",
      description:
        "Specializes in designing and implementing scalable cloud-based solutions for businesses.",
    },
    {
      icon: <FaDatabase />,
      title: "Database & Big Data Administrator",
      description:
        "Manages and optimizes large-scale databases and ensures data integrity and security.",
    },
    {
      icon: <RiBuilding4Line />,
      title: "Head of IS Operational Management",
      description:
        "Oversees the operational aspects of an organization’s information systems and ensures smooth functionality.",
    },
  ];


export default roles;