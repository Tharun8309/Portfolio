import { User } from 'lucide-react';
import Section from "./section"
const AboutMe =()=>
{
  return  <div className="mt-6">
    <Section icon={<User />} sectionTitle="About Me" >
      <p>
       I am an engineering student with a strong foundation in  data structures. I specialize in full-stack web development using Node.js, Express, MongoDB, EJS, and React and have built structured, production-ready applications. I also actively engage in competitive programming to sharpen my problem-solving skills and algorithmic thinking. I am currently preparing for software development roles and continuously working to grow both technically and professionally.
      </p>
    </Section>
    </div>;
}
export default AboutMe;
