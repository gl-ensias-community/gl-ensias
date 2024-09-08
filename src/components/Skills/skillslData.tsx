import { Skill } from "@/types/skill";
import { DiScrum } from "react-icons/di";
import {
  FaBrain,
  FaCloud,
  FaCubes,
  FaDatabase,
  FaDocker,
  FaMobile,
  FaNetworkWired,
} from "react-icons/fa";
import { MdManageAccounts, MdOutlineWebAsset, MdSd } from "react-icons/md";
import { RiDatabaseFill } from "react-icons/ri";
import {
  SiAzuredevops,
  SiSpeedtest,
  SiThealgorithms,
  SiVirtualbox,
} from "react-icons/si";
import { TbApi, TbVersionsFilled } from "react-icons/tb";

const skillsData: Skill[] = [
  {
    id: 1,
    icon: <DiScrum />,
    title: "Agile Methodologies",
    description:
      "Mastery of agile principles and practices, such as Scrum or Kanban, to manage and execute software projects. This skill emphasizes flexibility, collaboration, and continuous improvement in the development process.",
  },
  {
    id: 2,
    icon: <SiThealgorithms />,
    title: "Algorithms and Data Structures",
    description:
      "This skill involves mastering fundamental algorithms (like sorting and searching) and data structures (like arrays, trees, and graphs) to optimize software performance and solve complex computational problems.",
  },
  {
    id: 3,
    icon: <FaBrain />,
    title: "AI and ML",
    description:
      "Expertise in AI/ML technologies, including deep learning, neural networks, and natural language processing, to create intelligent systems capable of autonomous decision-making.",
  },
  {
    id: 4,
    icon: <TbApi />,
    title: "API Development and Integration",
    description:
      "Involves designing and developing APIs to enable communication between different software systems. This skill ensures that applications can interact seamlessly and share data efficiently.",
  },
  {
    id: 5,
    icon: <FaDocker />,
    title: "CI/CD",
    description:
      "Skills in setting up continuous integration and continuous deployment pipelines, ensuring code changes are automatically tested and deployed, improving development workflows and software quality.",
  },
  {
    id: 6,
    icon: <FaCubes />,
    title: "Containerization",
    description:
      "Proficiency in using container technologies like Docker to encapsulate and deploy applications in isolated environments, ensuring consistency across different development and production systems.",
  },
  {
    id: 7,
    icon: <RiDatabaseFill />,
    title: "Big Data Technologies",
    description:
      "Expertise in handling and analyzing large datasets using tools like Hadoop, Spark, and data visualization platforms. This skill is crucial for making data-driven decisions and insights.",
  },
  {
    id: 8,
    icon: <FaNetworkWired />,
    title: "Microservices",
    description:
      "Skills in designing and developing applications using microservices architecture, which allows for modular, scalable, and flexible services that can be independently developed and deployed.",
  },
  {
    id: 9,
    icon: <FaCloud />,
    title: "Cloud Computing",
    description:
      "Involves deploying and managing software on cloud platforms like AWS, Azure, or Google Cloud. Key concepts include virtualization, containerization, and understanding cloud-based services and infrastructure.",
  },
  {
    id: 10,
    icon: <FaDatabase />,
    title: "Database Management",
    description:
      "Database management skills include designing, querying, and optimizing databases using SQL and NoSQL technologies. It also involves understanding data modeling, indexing, and ensuring data integrity and security.",
  },
  {
    id: 11,
    icon: <SiAzuredevops />,
    title: "DevOps Practices",
    description:
      "Involves integrating development and operations through practices like CI/CD, using tools like Jenkins, Docker, and Kubernetes. This skill emphasizes automation and streamlining software deployment processes.",
  },
  {
    id: 12,
    icon: <MdManageAccounts />,
    title: "Project Management",
    description:
      "Expertise in planning, executing, and closing software projects. This involves task management, team collaboration, risk assessment, and using tools like Jira or Trello to ensure project success.",
  },
  {
    id: 13,
    icon: <FaMobile />,
    title: "Mobile App Development",
    description:
      "Involves developing applications for mobile platforms like iOS and Android using frameworks like React Native or Swift. Key aspects include UI/UX design, performance optimization, and cross-platform compatibility.",
  },
  {
    id: 14,
    icon: <MdSd />,
    title: "Systems Design and Architecture",
    description:
      "Skills in designing software systems that are scalable, maintainable, and efficient. This includes using design patterns, microservices, and understanding the principles of system architecture.",
  },
  {
    id: 15,
    icon: <SiSpeedtest />,
    title: "Software Testing and Quality Assurance",
    description:
      "This skill focuses on ensuring that software meets the required standards through various testing methods, including unit, integration, and system testing. Knowledge of automated testing tools is also essential.",
  },
  {
    id: 16,
    icon: <TbVersionsFilled />,
    title: "Version Control Systems",
    description:
      "Proficiency in using tools like Git and GitHub for tracking code changes, collaborating with team members, and managing different versions of a project. This skill ensures code stability and project continuity.",
  },
  {
    id: 17,
    icon: <SiVirtualbox />,
    title: "Virtualization",
    description:
      "Understanding virtualization technologies to create and manage virtual environments. This skill is crucial for optimizing resource utilization and enhancing system scalability.",
  },
  {
    id: 18,
    icon: <MdOutlineWebAsset />,
    title: "Web Development",
    description:
      "This encompasses both front-end (HTML, CSS, JavaScript) and back-end (Node.js, Django) development. Proficiency in these areas enables the creation of responsive, user-friendly websites and web applications.",
  },
];

export default skillsData;
