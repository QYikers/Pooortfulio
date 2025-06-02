import { useState, useEffect } from 'react';
import { LoadingScreen } from './components/Loading'
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { SkillsProject } from './components/sections/SkillsProject';
import { Contact } from './components/sections/Contact';
import { initSectionAnimations } from './components/animation';
import "./index.css"

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (isLoaded) {
      const timer = setTimeout(() => {
        initSectionAnimations();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isLoaded]);

  useEffect(() => {
    const handleResize = () => {
      if (isLoaded) {
        initSectionAnimations();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isLoaded]);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={()=> setIsLoaded(true)} />}
      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-[#0a0a0a] text-[#f3f4f6]`}>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Home />
        <About />
        <SkillsProject />
        <Contact />
      </div>
    </>
  );
}

export default App
