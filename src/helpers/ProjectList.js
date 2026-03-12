import Proj1 from "../assets/proj1.png";
import Proj2 from "../assets/proj2.png";
import AzureImg from "../assets/azure.jpg";
import QradarImg from "../assets/qradar.jpg";
import SplunkImg from "../assets/splunk.jpg";
import SoarImg from "../assets/soar.jpg";
import VpnImg from "../assets/openvpn.jpg";
import ScriptsImg from "../assets/scripts.jpg";
import BlogImg from "../assets/blog.jpg";
import GithubImg from "../assets/github.jpg";

export const ProjectList = [
  // --- CYBERSECURITY & SOC OPERATIONS ---
  {
    name: "Azure Sentinel SOC Honeynet",
    image: AzureImg,
    skills: "Microsoft Sentinel (SIEM), KQL, Log Analytics, Live Threat Mapping, NSG Hardening",
    github: "https://github.com/thumbiko", // Example link
  },
  {
    name: "IBM QRadar Security Analytics",
    image: QradarImg,
    skills: "QRadar SIEM, AQL, Correlation Rules, Incident Triaging, Syslog Integration",
    github: "https://github.com/thumbiko",
  },
  {
    name: "Splunk Enterprise Threat Dashboards",
    image: SplunkImg,
    skills: "Splunk Core, SPL (Search Processing Language), SOC Visualizations, IoC Detection",
    github: "https://github.com/thumbiko",
  },
  {
    name: "SOAR & DFIR Automation Pipeline",
    image: SoarImg,
    skills: "Shuffle (SOAR), TheHive, Python, RESTful API, Automated Incident Response",
    github: "https://github.com/thumbiko",
  },
  {
    name: "Hardened AWS OpenVPN Infrastructure",
    image: VpnImg,
    skills: "AWS EC2, Linux Kernel Hardening, SSH Key-Auth, IAM Access Control, Tunnel Encryption",
    github: "https://github.com/thumbiko",
  },
  {
    name: "Offensive Security Automation Toolkit",
    image: ScriptsImg,
    skills: "Python (SecOps), PowerShell Scripting, Log Parsing, Exploit Automation",
    github: "https://github.com/thumbiko",
  },

  // --- SECURE DEVELOPMENT ---
  {
    name: "Secure CMS - Biko Blogs",
    image: BlogImg,
    skills: "React, Node.js, Express, JWT Authentication, XSS/SQLi Mitigation",
    github: "https://github.com/thumbiko",
  },
  {
    name: "Cloud-Native Property Engine",
    image: Proj1,
    skills: "GeoDjango, PostgreSQL, React, GIS Integration, Secure API Architecture",
    github: "https://github.com/thumbiko",
  },
  {
    name: "Full-Stack Service Platform",
    image: Proj2,
    skills: "React, Node.js, MongoDB, Responsive Design, State Management",
    github: "https://github.com/thumbiko",
  },
  
];