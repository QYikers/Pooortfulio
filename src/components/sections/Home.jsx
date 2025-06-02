export const Home = () => {
    return (
        <section id="home" className="min-h-[80vh] flex items-center justify-center relative">
            <div className="text-center z-10 px-4">
                <h1 className="text-5xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent leading-[1.1] pb-2">
                    Luke Bumengeg.
                </h1>
               
                <div className="flex justify-center space-x-4">
                    <a href="#skills-project" className="bg-red-600 text-white py-2 px-5 rounded font-medium 
                    transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(220,38,38,0.5)]">View Projects</a>

                    <a href="#contact" className="border border-red-600/50 text-red-600 py-2 px-5 rounded font-medium transition-all duration-200-translate-y-0.5
                    hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(220,38,38,0.2)] hover:bg-red-600/10">Contact Me</a>
                </div>
            </div>
        </section>
    );
};