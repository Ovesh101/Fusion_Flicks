import React from "react";


// Dummy data for reusable content (icons, headings, and paragraphs)
const features = [
  {
    icon: "/svg/team.svg",
    heading: "Expert Team",
    description: "This is the description for feature one.",
  },
  {
    icon: "/svg/team.svg",
    heading: "Proven Track Record",
    description: "This is the description for feature two.",
  },
  {
    icon: "/svg/team.svg",
    heading: "Affordable Prices",
    description: "This is the description for feature three.",
  },
  {
    icon: "/svg/team.svg",
    heading: "Leading-Edge Tools",
    description: "This is the description for feature four.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="grid grid-cols-1  lg:grid-cols-[1fr_2fr] gap-8 px-4 py-10 md:px-[100px] bg-dark-gray text-light-gray">
      {/* Column 1 (Image) */}
      <div className="flex justify-center items-center">
        <img src="/Images/why_choose_us.jpg" alt="Why Choose Us" className="rounded-lg shadow-lg w-[370px]  " /> {/* Replace with your image path */}
      </div>

      {/* Column 2 (Content) */}
      <div className="pt-20" >
        {/* Title */}
        <h2 className="text-golden-brown text-[30px] font-semibold mb-4">Why Choose Us</h2>
        
        {/* Subtitle */}
        <h3 className="text-[50px] font-medium mb-4">We Provide Exceptional Services</h3>

        {/* Paragraph */}
        <p className="text-[18px] mb-4">
          Our team is committed to delivering high-quality solutions tailored to your needs, with an emphasis on innovation and reliability.
        </p>

        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-start">
              {/* Icon and Heading in a Row */}
           

           
              <div className="flex items-center space-y-5  gap-5">
                <img src={features.icon} alt="svg" className="w-6 h-6" />
                <div className="flex flex-col   justify-between " >
                <h4 className="text-[24px] font-[500]">{feature.heading}</h4>
                <p className="text-[16px]    text-light-gray">
                {feature.description}
              </p>
              </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
