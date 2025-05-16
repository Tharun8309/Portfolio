import Pill from "./pill"
import Section from "./section";
import { Code } from 'lucide-react';

const Skills = () => {
  const skillTitles = ["C++","Java", "C","Python","SQL","JavaScript", "React", "Node.js", "MongoDB", "Git",  "Tailwind","Bootstrap",];
  return <Section icon={<Code />} sectionTitle="Skills">
    <div className="flex flex-wrap">
    {skillTitles.map(title => <Pill key={title} title={title} />)}
    </div>
  </Section>
}

export default Skills;
