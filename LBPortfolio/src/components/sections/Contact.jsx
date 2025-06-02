import { FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa';

export const Contact = () => {
    return (
        <section id="contact" className="min-h-[80vh] flex items-center justify-center py-12">
            <div className="max-w-2xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent text-center">
                    Get in Touch
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <a href="https://facebook.com/luke.bumengeg" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="flex flex-col items-center p-4 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-600/30 hover:shadow-[0_2px_8px_rgba(220,38,38,0.1)] transition-all duration-300">
                        <FaFacebook className="text-3xl text-red-600 mb-2" />
                        <span className="text-gray-300">Facebook</span>
                        <span className="text-sm text-gray-400 mt-1">Luke Bumengeg</span>
                    </a>

                    <a href="https://instagram.com/vxiviviix" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="flex flex-col items-center p-4 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-600/30 hover:shadow-[0_2px_8px_rgba(220,38,38,0.1)] transition-all duration-300">
                        <FaInstagram className="text-3xl text-red-700 mb-2" />
                        <span className="text-gray-300">Instagram</span>
                        <span className="text-sm text-gray-400 mt-1">VXIVIVIIX</span>
                    </a>

                    <a href="mailto:luke,bumengeg@gmail.com" 
                       className="flex flex-col items-center p-4 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-600/30 hover:shadow-[0_2px_8px_rgba(220,38,38,0.1)] transition-all duration-300">
                        <FaEnvelope className="text-3xl text-red-600 mb-2" />
                        <span className="text-gray-300">Email</span>
                        <span className="text-sm text-gray-400 mt-1">luke.bumengeg@gmail.com</span>
                    </a>
                </div>
            </div>
        </section>
    );
};