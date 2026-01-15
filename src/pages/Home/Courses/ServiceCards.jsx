import React from 'react';
import languageJp from "../../../assets/learningJapanese.jpg"
import titpPogramme from "../../../assets/titp.png"
import sswPogramme from "../../../assets/SSW-VISA-Pr.jpg"
import studentVisa from "../../../assets/japan-student-visa.jpg"

const ServiceCards = () => {
  const services = [
    {
      id: 1,
      img: languageJp,
      title: "Japanese Language (N5 & N4)",
      description: "Comprehensive online courses covering JLPT N5 and N4 levels. Master grammar and kanji from home.",
      buttonText: "Find Course Details"
    },
    {
      id: 2,
      img: studentVisa,
      title: "Student Visa Support",
      description: "Full guidance for school applications and document processing for your Japanese Student Visa.",
      buttonText: "Visa Process Details"
    },
    {
      id: 3,
      img: sswPogramme,
      title: "SSW Job Program",
      description: "SSW skills test training and job matching with verified Japanese employers for skilled workers.",
      buttonText: "Explore SSW Jobs"
    },
    {
      id: 4,
      img: titpPogramme,
      title: "TITP Technical Intern",
      description: "Professional documentation and placement support for the Technical Intern Training Program (TITP).",
      buttonText: "Internship Details"
    }
  ];

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Our Specialized Services</h2>
          <p className="text-gray-600 mt-2">Everything you need to study and work in Japan</p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div key={service.id} className="card bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <figure className="px-4 pt-4">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="rounded-xl h-48 w-full object-cover" 
                />
              </figure>
              <div className="card-body items-start text-left">
                <h3 className="card-title text-gray-800 text-lg font-bold">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="card-actions w-full mt-4">
                  <button className="btn bg-[#455845] hover:bg-[#344234] text-white border-none w-full">
                    {service.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;