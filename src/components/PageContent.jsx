import { Scroll } from '@react-three/drei'
import Home from './sections/Home'
import About from './sections/About'
import Projects from './sections/Projects'
import Certificate from './sections/Certificate'
import Contact from './sections/Contact'

export default function PageContent({ explode }) {
  return (
    <Scroll html style={{ width: '100vw', color: 'white' }}>
      <Home explode={explode} />
      <About />
      <Projects />
      <Certificate />
      <Contact /> 
    </Scroll>
  )
}