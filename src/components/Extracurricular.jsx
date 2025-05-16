import { Award} from 'lucide-react';
import Section from "./section"
import List from "./List"
const Extracurricular =()=>
{ 
  const list=["Cycling","Traveling"];
  return  <div className="mt-6">
    <Section icon={<Award />} sectionTitle="Extracurricular Activities" >
     <List list={list}/> 
    </Section>
    </div>;
}
export default Extracurricular;
