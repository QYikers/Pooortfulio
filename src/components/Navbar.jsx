import { useEffect, useState } from "react"

export const Navbar = ({menuOpen, setMenuOpen}) => {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";

        const handleScroll = () => {
            const sections = document.querySelectorAll('section[id]');
            const scrollPosition = window.scrollY + window.innerHeight / 3;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    setActiveSection(sectionId);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [menuOpen]);

    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a 
                        href="#home" 
                        className="font-medium text-lg tracking-tight text-white"
                    >
                        Luke <span className="text-red-600">Bumengeg</span>
                    </a>

                    <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
                        &#9776;
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <a
                            href="#home"
                            className={`text-sm font-medium tracking-tight transition-colors duration-300 ${
                                activeSection === 'home'
                                    ? 'text-red-600'
                                    : 'text-gray-300 hover:text-red-600'
                            }`}
                        >
                            Home
                        </a>
                        <a 
                            href="#about" 
                            className={`text-sm font-medium tracking-tight transition-colors duration-300 ${
                                activeSection === 'about'
                                    ? 'text-red-600'
                                    : 'text-gray-300 hover:text-red-600'
                            }`}
                        >
                            About 
                        </a>
                        <a 
                            href="#skills-project" 
                            className={`text-sm font-medium tracking-tight transition-colors duration-300 ${
                                activeSection === 'skills-project'
                                    ? 'text-red-600'
                                    : 'text-gray-300 hover:text-red-600'
                            }`}
                        >
                            Skills & Projects 
                        </a>
                        <a 
                            href="#contact" 
                            className={`text-sm font-medium tracking-tight transition-colors duration-300 ${
                                activeSection === 'contact'
                                    ? 'text-red-600'
                                    : 'text-gray-300 hover:text-red-600'
                            }`}
                        >
                            Contacts
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};