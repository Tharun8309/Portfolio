import { Briefcase} from 'lucide-react';
import Section from "../section"
import Project from './Project';
const Projects =()=>
{
  const projectList = [
    {
      title: "Wanderlust - AirBnb Clone",
      desc: "A full-stack web application inspired by Airbnb, built using Node.js, Express, MySQL, and EJS. Features include user authentication, listing creation, bookings, reviews, payments, and admin controls. Designed with MVC architecture and implemented full CRUD operations across all modules.",
      techUsed: ["MongoDB", "Node.js", "Bootstrap", "Express","Ejs"],
    },

    {
      title: "Myntra - Frontend clone",
      desc: "A responsive frontend replica of the Myntra e-commerce website, built using HTML, CSS, and JavaScript. Focuses on UI/UX design, product grid layout, navigation bar, and interactive elements for a seamless shopping experience.",
      techUsed: ["HTML", "CSS", "JavaScript"],
    },
  ];

  return (
    <Section icon={<Briefcase />} sectionTitle="Projects">
      {projectList.map(project => <Project title={project.title} desc={project.desc} techUsed={project.techUsed}/>)}
    </Section>);
}
export default Projects;
