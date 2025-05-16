import { Globe} from 'lucide-react';
import Section from "./section"
import { Linkedin } from 'lucide-react';
import SocialMedia from "./SocialMedia";
import { Github } from 'lucide-react';

const Contact =()=>
{ 
    const socialLinks = [
    {icon: <Linkedin />, title: "Linkedin", url: "https://www.linkedin.com/in/tharun-m-02320b279/"},
    {icon: <Github />, title: "Github", url: "https://github.com/Tharun8309"},
    
  ];
   return <div className="pb-6">
    <Section icon={<Globe />} sectionTitle="Contact & Social Media">
      <p className="text-gray-700 mb-4">
        Email: tharunkumar8309@gmail.com <br />
        Phone: 9902634996
      </p>
      {socialLinks.map(social => <SocialMedia icon={social.icon} title={social.title} key={social.title} url={social.url} />)}
      
    </Section>
  </div>
}
export default Contact;
