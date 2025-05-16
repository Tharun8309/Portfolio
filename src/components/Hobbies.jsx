import { Heart} from 'lucide-react';
import Section from "./section";
import List from "./List";
const Hobbies=()=>
{ const list=["Cycling","Competitive programming enthusiast"];
  return  <div className="mt-6">
    <Section icon={<Heart />} sectionTitle="Hobbies & Interests" >
    <List list={list}/>
    </Section>
    
    </div>;
}
export default Hobbies;
