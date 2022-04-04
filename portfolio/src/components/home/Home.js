import Nav from './Nav';
import Hero from './Hero'
import Projects from './Projects';
import SmallProjects from './SmallProjects';
import Skills from './Skills';
import Contact from './Contact'
import Footer from './Footer';

export default function Home(props){
  return (
    <div>
      <Nav handleClick={props.toggleMode} mode={props.mode}/>
      <Hero />
      <Projects />
      <SmallProjects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}