import { Tool } from "@/types/tool";
import {
  SiAkamai,
  SiAmazonwebservices,
  SiAndroid,
  SiAngular,
  SiApache,
  SiApachecassandra,
  SiApachemaven,
  SiApachespark,
  SiAzuredevops,
  SiBitbucket,
  SiBootstrap,
  SiC,
  SiComposer,
  SiCplusplus,
  SiCsharp,
  SiDart,
  SiDjango,
  SiDocker,
  SiExpo,
  SiExpress,
  SiFastapi,
  SiFlask,
  SiFlutter,
  SiGatsby,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGitlab,
  SiGo,
  SiGooglecloud,
  SiGradle,
  SiHaskell,
  SiIbmcloud,
  SiIonic,
  SiJavascript,
  SiJenkins,
  SiJira,
  SiJquery,
  SiKeras,
  SiKotlin,
  SiKubernetes,
  SiLaravel,
  SiLinux,
  SiMariadb,
  SiMicrosoftsqlserver,
  SiMlflow,
  SiMongodb,
  SiMysql,
  SiNeo4J,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiNotion,
  SiNpm,
  SiNumpy,
  SiOcaml,
  SiOpenai,
  SiOpencv,
  SiOracle,
  SiPandas,
  SiPhp,
  SiPostgresql,
  SiPypi,
  SiPython,
  SiPytorch,
  SiRasa,
  SiReact,
  SiRedis,
  SiRuby,
  SiRubyonrails,
  SiRust,
  SiScikitlearn,
  SiScrapy,
  SiShell,
  SiSlack,
  SiSpacy,
  SiSpringboot,
  SiSwift,
  SiSymfony,
  SiTailwindcss,
  SiTensorflow,
  SiTrello,
  SiTypescript,
  SiUml,
  SiVite,
  SiVuedotjs,
  SiWindows,
  SiYarn,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const toolsData: Tool[] = [
  // DevOps
  {
    id: 1,
    icon: <SiGithubactions />,
    name: "GitHub Actions",
    category: "DevOps",
  },
  {
    id: 1,
    icon: <SiGitlab />,
    name: "GitLab",
    category: "DevOps",
  },
  {
    id: 1,
    icon: <SiDocker />,
    name: "Docker",
    category: "DevOps",
  },
  {
    id: 1,
    icon: <SiKubernetes />,
    name: "Kubernetes",
    category: "DevOps",
  },
  {
    id: 1,
    icon: <SiJenkins />,
    name: "Jenkins",
    category: "DevOps",
  },

  // Programming Languages
  {
    id: 1,
    icon: <SiC />,
    name: "C",
    category: "Programming Languages",
  },
  {
    id: 1,
    icon: <SiCplusplus />,
    name: "C++",
    category: "Programming Languages",
  },
  {
    id: 1,
    icon: <SiCsharp />,
    name: "C#",
    category: "Programming Languages",
  },
  {
    id: 1,
    icon: <SiJavascript />,
    name: "JavaScript",
    category: "Programming Languages",
  },
  {
    id: 1,
    icon: <SiTypescript />,
    name: "TypeScript",
    category: "Programming Languages",
  },
  {
    id: 1,
    icon: <SiPython />,
    name: "Python",
    category: "Programming Languages",
  },
  {
    id: 1,
    icon: <SiPhp />,
    name: "PHP",
    category: "Programming Languages",
  },
  {
    id: 1,
    icon: <FaJava />,
    name: "Java",
    category: "Programming Languages",
  },
  {
    id: 1,
    icon: <SiRuby />,
    name: "Ruby",
    category: "Programming Languages",
  },
  {
    id: 1,
    icon: <SiGo />,
    name: "Go",
    category: "Programming Languages",
  },
  {
    id: 1,
    icon: <SiRust />,
    name: "Rust",
    category: "Programming Languages",
  },
  {
    id: 1,
    icon: <SiShell />,
    name: "Shell",
    category: "Programming Languages",
  },
  {
    id: 1,
    icon: <SiDart />,
    name: "Dart",
    category: "Programming Languages",
  },
  {
    id: 1,
    icon: <SiSwift />,
    name: "Swift",
    category: "Programming Languages",
  },
  {
    id: 1,
    icon: <SiKotlin />,
    name: "Kotlin",
    category: "Programming Languages",
  },
  {
    id: 1,
    icon: <SiHaskell />,
    name: "Haskell",
    category: "Programming Languages",
  },
  {
    id: 1,
    icon: <SiOcaml />,
    name: "OCaml",
    category: "Programming Languages",
  },

  // Web Development
  {
    id: 1,
    icon: <SiReact />,
    name: "React",
    category: "Web Development",
  },
  {
    id: 1,
    icon: <SiVite />,
    name: "Vite",
    category: "Web Development",
  },
  {
    id: 1,
    icon: <SiNextdotjs />,
    name: "Next.js",
    category: "Web Development",
  },
  {
    id: 1,
    icon: <SiAngular />,
    name: "Angular",
    category: "Web Development",
  },
  {
    id: 1,
    icon: <SiVuedotjs />,
    name: "Vue.js",
    category: "Web Development",
  },
  {
    id: 1,
    icon: <SiBootstrap />,
    name: "Bootstrap",
    category: "Web Development",
  },
  {
    id: 1,
    icon: <SiTailwindcss />,
    name: "Tailwind CSS",
    category: "Web Development",
  },
  {
    id: 1,
    icon: <SiNodedotjs />,
    name: "Node.js",
    category: "Web Development",
  },
  {
    id: 1,
    icon: <SiExpress />,
    name: "Express",
    category: "Web Development",
  },
  {
    id: 1,
    icon: <SiJquery />,
    name: "jQuery",
    category: "Web Development",
  },
  {
    id: 1,
    icon: <SiFlask />,
    name: "Flask",
    category: "Web Development",
  },
  {
    id: 1,
    icon: <SiDjango />,
    name: "Django",
    category: "Web Development",
  },
  {
    id: 1,
    icon: <SiLaravel />,
    name: "Laravel",
    category: "Web Development",
  },
  {
    id: 1,
    icon: <SiSymfony />,
    name: "Symfony",
    category: "Web Development",
  },
  {
    id: 1,
    icon: <SiRubyonrails />,
    name: "Ruby on Rails",
    category: "Web Development",
  },
  {
    id: 1,
    icon: <SiSpringboot />,
    name: "Spring Boot",
    category: "Web Development",
  },
  {
    id: 1,
    icon: <SiFastapi />,
    name: "FastAPI",
    category: "Web Development",
  },
  {
    id: 1,
    icon: <SiGatsby />,
    name: "Gatsby",
    category: "Web Development",
  },

  // Mobile Development
  {
    id: 1,
    icon: <SiReact />,
    name: "React Native",
    category: "Mobile Development",
  },
  {
    id: 1,
    icon: <SiExpo />,
    name: "Expo",
    category: "Mobile Development",
  },
  {
    id: 1,
    icon: <SiFlutter />,
    name: "Flutter",
    category: "Mobile Development",
  },
  {
    id: 1,
    icon: <SiIonic />,
    name: "Ionic",
    category: "Mobile Development",
  },
  {
    id: 1,
    icon: <SiAndroid />,
    name: "Android SDK",
    category: "Mobile Development",
  },

  // Cloud Providers
  {
    id: 1,
    icon: <SiAmazonwebservices />,
    name: "AWS",
    category: "Cloud Providers",
  },
  {
    id: 1,
    icon: <SiGooglecloud />,
    name: "Google Cloud",
    category: "Cloud Providers",
  },
  {
    id: 1,
    icon: <SiAzuredevops />,
    name: "Azure",
    category: "Cloud Providers",
  },
  {
    id: 1,
    icon: <SiOracle />,
    name: "Oracle Cloud",
    category: "Cloud Providers",
  },
  {
    id: 1,
    icon: <SiIbmcloud />,
    name: "IBM Cloud",
    category: "Cloud Providers",
  },
  {
    id: 1,
    icon: <SiAkamai />,
    name: "Akamai",
    category: "Cloud Providers",
  },

  // Databases
  {
    id: 1,
    icon: <SiPostgresql />,
    name: "PostgreSQL",
    category: "Databases",
  },
  {
    id: 1,
    icon: <SiMysql />,
    name: "MySQL",
    category: "Databases",
  },
  {
    id: 1,
    icon: <SiMicrosoftsqlserver />,
    name: "Microsoft SQL Server",
    category: "Databases",
  },
  {
    id: 1,
    icon: <SiMariadb />,
    name: "MariaDB",
    category: "Databases",
  },
  {
    id: 1,
    icon: <SiOracle />,
    name: "Oracle Database",
    category: "Databases",
  },
  {
    id: 1,
    icon: <SiMongodb />,
    name: "MongoDB",
    category: "Databases",
  },
  {
    id: 1,
    icon: <SiNeo4J />,
    name: "Neo4j",
    category: "Databases",
  },
  {
    id: 1,
    icon: <SiRedis />,
    name: "Redis",
    category: "Databases",
  },
  {
    id: 1,
    icon: <SiApachecassandra />,
    name: "Cassandra",
    category: "Databases",
  },

  // Project Management
  {
    id: 1,
    icon: <SiJira />,
    name: "Jira",
    category: "Project Management",
  },
  {
    id: 1,
    icon: <SiGit />,
    name: "Git",
    category: "Project Management",
  },
  {
    id: 1,
    icon: <SiGithub />,
    name: "GitHub",
    category: "Project Management",
  },
  {
    id: 1,
    icon: <SiGitlab />,
    name: "GitLab",
    category: "Project Management",
  },
  {
    id: 1,
    icon: <SiTrello />,
    name: "Trello",
    category: "Project Management",
  },
  {
    id: 1,
    icon: <SiBitbucket />,
    name: "Bitbucket",
    category: "Project Management",
  },
  {
    id: 1,
    icon: <SiSlack />,
    name: "Slack",
    category: "Project Management",
  },
  {
    id: 1,
    icon: <SiNotion />,
    name: "Notion",
    category: "Project Management",
  },
  {
    id: 1,
    icon: <SiUml />,
    name: "PlantUML",
    category: "Project Management",
  },
  
  // System Administration
  {
    id: 1,
    icon: <SiLinux />,
    name: "GNU/Linux",
    category: "System Administration",
  },
  {
    id: 1,
    icon: <SiWindows />,
    name: "Windows Server",
    category: "System Administration",
  },
  {
    id: 1,
    icon: <SiNginx />,
    name: "Nginx",
    category: "System Administration",
  },
  {
    id: 1,
    icon: <SiApache />,
    name: "Apache",
    category: "System Administration",
  },

  // Build and Dependency Management
  {
    id: 1,
    icon: <SiApachemaven />,
    name: "Maven",
    category: "Build and Dependency Management",
  },
  {
    id: 1,
    icon: <SiGradle />,
    name: "Gradle",
    category: "Build and Dependency Management",
  },
  {
    id: 1,
    icon: <SiNpm />,
    name: "npm",
    category: "Build and Dependency Management",
  },
  {
    id: 1,
    icon: <SiYarn />,
    name: "Yarn",
    category: "Build and Dependency Management",
  },
  {
    id: 1,
    icon: <SiPypi />,
    name: "Pip",
    category: "Build and Dependency Management",
  },
  {
    id: 1,
    icon: <SiComposer />,
    name: "Composer",
    category: "Build and Dependency Management",
  },
  
  // AI & Machine Learning
  {
    id: 1,
    icon: <SiTensorflow />,
    name: "TensorFlow",
    category: "AI & Machine Learning",
  },
  {
    id: 1,
    icon: <SiKeras />,
    name: "Keras",
    category: "AI & Machine Learning",
  },
  {
    id: 1,
    icon: <SiPytorch />,
    name: "PyTorch",
    category: "AI & Machine Learning",
  },
  {
    id: 1,
    icon: <SiScikitlearn />,
    name: "Scikit-learn",
    category: "AI & Machine Learning",
  },
  {
    id: 1,
    icon: <SiPandas />,
    name: "Pandas",
    category: "AI & Machine Learning",
  },
  {
    id: 1,
    icon: <SiNumpy />,
    name: "Numpy",
    category: "AI & Machine Learning",
  },
  {
    id: 1,
    icon: <SiSpacy />,
    name: "Spacy",
    category: "AI & Machine Learning",
  },
  {
    id: 1,
    icon: <SiScrapy />,
    name: "Scrapy",
    category: "AI & Machine Learning",
  },
  {
    id: 1,
    icon: <SiOpencv />,
    name: "OpenCV",
    category: "AI & Machine Learning",
  },
  {
    id: 1,
    icon: <SiApachespark />,
    name: "Apache Spark",
    category: "AI & Machine Learning",
  },
  {
    id: 1,
    icon: <SiRasa />,
    name: "Rasa",
    category: "AI & Machine Learning",
  },
  {
    id: 1,
    icon: <SiOpenai />,
    name: "OpenAI",
    category: "AI & Machine Learning",
  },
  {
    id: 1,
    icon: <SiMlflow />,
    name: "MLflow",
    category: "AI & Machine Learning",
  }
];

export default toolsData;
