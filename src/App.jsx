import Header from './components/header';
import AboutMe from './components/Aboutme';

import Skills from './components/skills';
import Education from './components/Education';
import Hobbies from './components/Hobbies';
import Extracurricular from './components/Extracurricular';
import Contact from './components/Contact';
import Projects from './components/project/Projects';

function App() {
  

  return (
    <>
     <div className="bg-slate-100 px-3 py-8">
      <div className="bg-white max-w-4xl mx-auto rounded-xl shadow-lg">
        <Header />
        <AboutMe/>
        <Projects/>
        <Skills />
        <Education />
        <Hobbies />
        <Contact /> 
        
      </div>
    </div>
    </>
  )
}

export default App
