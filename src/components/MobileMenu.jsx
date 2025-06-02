import { useEffect } from "react"
import { smoothScrollTo } from "./animation";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
    return (
        <>
            {/* Backdrop blur overlay */}
            <div 
                className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-20 transition-opacity duration-300 ${
                    menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                onClick={() => setMenuOpen(false)}
            />
            
            {/* Menu content */}
            <div className={`fixed inset-0 z-30 transition-opacity duration-300 ${
                menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}>
                <div className="flex flex-col items-center justify-center h-full space-y-8">
                    <a 
                        href="#home" 
                        onClick={() => setMenuOpen(false)}
                        className="text-2xl font-medium tracking-tight text-gray-300 hover:text-red-600 transition-colors"
                    >
                        Home
                    </a>
                    <a 
                        href="#about" 
                        onClick={() => setMenuOpen(false)}
                        className="text-2xl font-medium tracking-tight text-gray-300 hover:text-red-600 transition-colors"
                    >
                        About
                    </a>
                    <a 
                        href="#skills-project" 
                        onClick={() => setMenuOpen(false)}
                        className="text-2xl font-medium tracking-tight text-gray-300 hover:text-red-600 transition-colors"
                    >
                        Skills & Projects
                    </a>
                    <a 
                        href="#contact" 
                        onClick={() => setMenuOpen(false)}
                        className="text-2xl font-medium tracking-tight text-gray-300 hover:text-red-600 transition-colors"
                    >
                        Contact
                    </a>
                </div>
            </div>
        </>
    );
};