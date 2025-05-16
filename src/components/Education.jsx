import { BookOpen} from 'lucide-react';
import Section from "./section"
import Graduation from './Graduation';
const Education =()=>
{
  return  <div className="mt-6">
    <Section icon={<BookOpen />} sectionTitle="Education" >
      <Graduation title="B.Tech in Information Science and Engineering (8.48 CGPA)" school="University visvesvaraya college of Engineering" year="2022-2026" />
      <Graduation title="12th (97.8%)" school="Sri Maruthi Pu college" year="2022" />
      <Graduation title="10th (97.92%)" school="Thakshashila high school" year="2020" />
    </Section>
    </div>;
}
export default Education;
