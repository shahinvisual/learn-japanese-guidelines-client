import React from 'react';

const Choose = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center bg-white min-h-[600px] w-full overflow-hidden">

            {/* Left Side: Text Content */}
            <div className="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col gap-8">
                <div className="space-y-4">
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                        Start Your Journey to <span className="text-[#455845]">Japan</span> with Confidence!
                    </h1>
                    <p className="text-lg text-gray-600">
                        Master the Japanese language and receive end-to-end guidance for Student Visas or Job Placement (SSW/Technical Interns) in Japan. From JLPT N5–N3 training to complete visa documentation—we provide everything in one place. Over 95% of our students feel confident and ready to launch their careers in the Land of the Rising Sun.
                    </p>
                    <h2 className='font-semibold text-2xl text-[#455845]'>Why Choose Learn Japan?</h2>
                </div>

                {/* Feature List (One under one) */}
                <div className="space-y-4">
                    {[
                        "JLPT N5–N3 Online Courses",
                        "Student Visa & SSW Job Guidance",
                        "Step-by-Step Visa Documentation",
                        "Affordable World-Class Instruction",
                        "Structured Roadmap to Japan"
                    ].map((item, index) => (
                        <div key={index} className="flex items-center gap-4 p-5 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                            <div className="bg-[#c4c3bd] p-2 rounded-full flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#455845]" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <span className="font-semibold text-gray-700 text-lg">{item}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Side: Full Width Image */}
            <div className="w-full lg:w-1/2 h-[400px] lg:h-[600px] relative">
                <img
                    src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=1000"
                    alt="Japan Pathway"
                    className="w-full h-full object-cover shadow-2xl"
                />
                {/* Subtle overlay to blend with white background */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent lg:block hidden"></div>
            </div>

        </div>
    );
};

export default Choose;