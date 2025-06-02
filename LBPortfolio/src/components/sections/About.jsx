import { useState } from 'react';

export const About = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const openModal = (imageSrc) => {
        setSelectedImage(imageSrc);
    };

    const openVideoModal = (videoSrc) => {
        setSelectedVideo(videoSrc);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setSelectedVideo(null);
    };

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-12">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent text-center">
                    About Me 
                </h2>
                <p className="text-gray-300 mb-8 text-justify text-base md:text-lg" id="about-description">
                    An avid gamer who enjoys exploring various gaming genres and titles. 
                    Currently pursuing a Bachelor of Science in Information Technology (BSIT) at STI College, 
                    where I'm in my third year of studies. My passion for gaming has helped me develop problem-solving skills and a keen eye for detail, 
                    which I apply to my programming and development work.
                </p>
                <div className="rounded-xl p-4 md:p-6 border-white/10 border hover:translate-y-1 transition-all">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                        <div 
                            className="relative overflow-hidden rounded-lg cursor-pointer w-full h-[200px] md:h-[300px] bg-gray-900/50 md:col-span-2"
                            onClick={() => openModal("src/assets/picport.png")}
                        >
                            <img 
                                src="src/assets/picport.png" 
                                alt="Portrait 1" 
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div 
                            className="relative overflow-hidden rounded-lg cursor-pointer w-full h-[200px] md:h-[300px] bg-gray-900/50"
                            onClick={() => openModal("src/assets/picoprt2.jpg")}
                        >
                            <img 
                                src="src/assets/picoprt2.jpg" 
                                alt="Portrait 2" 
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div 
                            className="relative overflow-hidden rounded-lg cursor-pointer w-full h-[200px] md:h-[300px] bg-gray-900/50"
                            onClick={() => openVideoModal("src/assets/CFVidnobars.mp4")}
                        >
                            <video 
                                src="src/assets/CFVidnobars.mp4"
                                muted
                                autoPlay
                                loop
                                playsInline
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div 
                            className="relative overflow-hidden rounded-lg cursor-pointer w-full h-[200px] md:h-[300px] bg-gray-900/50 md:col-span-2"
                            onClick={() => openVideoModal("src/assets/LolVid.mp4")}
                        >
                            <video 
                                src="src/assets/LolVid.mp4"
                                muted
                                autoPlay
                                loop
                                playsInline
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {selectedImage && (
                <div 
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-pointer"
                    onClick={closeModal}
                >
                    <div className="relative max-w-6xl w-full max-h-[90vh]">
                        <button 
                            className="absolute -top-12 right-0 text-white text-4xl hover:text-red-600 transition-colors w-10 h-10 flex items-center justify-center"
                            onClick={(e) => {
                                e.stopPropagation();
                                closeModal();
                            }}
                        >
                            ×
                        </button>
                        <img 
                            src={selectedImage} 
                            alt="Full size" 
                            className="w-full h-auto object-contain max-h-[90vh]"
                        />
                    </div>
                </div>
            )}

            {selectedVideo && (
                <div 
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-pointer"
                    onClick={closeModal}
                >
                    <div className="relative max-w-4xl w-full">
                        <button 
                            className="absolute -top-12 right-0 text-white text-4xl hover:text-red-600 transition-colors w-10 h-10 flex items-center justify-center"
                            onClick={(e) => {
                                e.stopPropagation();
                                closeModal();
                            }}
                        >
                            ×
                        </button>
                        <video 
                            src={selectedVideo}
                            controls
                            muted
                            autoPlay
                            className="w-full rounded-lg"
                        />
                    </div>
                </div>
            )}
        </section>
    );
};