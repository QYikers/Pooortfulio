export const SkillsProject = () => {
    const skills = [
        { name: "Web Development", proficiency: 40 },
        { name: "C#", proficiency: 50 },
        { name: "Java", proficiency: 45 },
        { name: "SQL", proficiency: 35 }
    ];

    return (
        <section id="skills-project" className="min-h-screen flex items-center justify-center py-12">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent text-center">
                            Skills
                        </h2>
                        <div className="rounded-xl p-10 border-white/10 border hover:translate-y-1 transition-all h-full">
                            <div className="space-y-8">
                                {skills.map((skill, index) => (
                                    <div key={index} className="space-y-3">
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-300 text-lg font-bold">{skill.name}</span>
                                            <span className="text-gray-400 text-lg font-bold">{skill.proficiency}%</span>
                                        </div>
                                        <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                                            <div 
                                                className="h-full bg-gradient-to-r from-red-600 to-red-800 rounded-full transition-all duration-500 ease-out"
                                                style={{ width: `${skill.proficiency}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent text-center">
                            Projects
                        </h2>
                        <div className="rounded-xl p-10 border-white/10 border hover:translate-y-1 transition-all h-full">
                            <div className="flex justify-center mb-4">
                                <svg 
                                    className="w-24 h-24 text-red-600" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24" 
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={1.5} 
                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Online Booking System</h3>
                            <p className="text-gray-400 mb-4 text-justify">
                                A full-stack web application that enables users to book appointments and manage reservations online. 
                                Built with ReactJS and Bootstrap, featuring real-time availability updates, 
                                and an intuitive admin dashboard for managing bookings and customer data.
                            </p>
                            <div className="flex justify-between items-center">
                                <a href="https://betcha-booking.netlify.app/" className="text-red-600 hover:text-red-500 transition-colors">View Project</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}; 