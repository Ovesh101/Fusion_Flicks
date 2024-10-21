import React from "react";

// Dummy project data with image URLs
const projectsData = [
  {
    title: "Cinematic Excellence",
    description: "A project focused on delivering high-quality cinematic experiences.",
    imageUrl: "/Images/documentry.jpg", // Replace with actual image URL
  },
  {
    title: "Tech Innovation",
    description: "Developing cutting-edge technology solutions.",
    imageUrl: "/Images/documentry.jpg", // Replace with actual image URL
  },
  {
    title: "Creative Designs",
    description: "A showcase of beautiful and intuitive design concepts.",
    imageUrl: "/Images/documentry.jpg", // Replace with actual image URL
  },
  {
    title: "AI Integration",
    description: "Implementing AI-based solutions for automation.",
    imageUrl: "/Images/documentry.jpg", // Replace with actual image URL
  },
  {
    title: "Mobile Development",
    description: "Building scalable mobile applications for Android and iOS.",
    imageUrl: "/Images/documentry.jpg", // Replace with actual image URL
  },
  {
    title: "Cloud Solutions",
    description: "Offering cloud-based solutions for businesses.",
    imageUrl: "/Images/documentry.jpg", // Replace with actual image URL
  },
];

const WhatWeOffer = () => {
  return (
    <section className="px-4 md:px-[100px] py-10 bg-dark-charcoal text-light-gray">
      {/* Main Title */}
      <h2 className="text-[30px] text-golden-brown  font-semibold text-center ">
        What We Offer
      </h2>

      {/* Subtitle and Paragraphs */}
      <div className="text-center text-light-gray w-[80%] mx-auto mb-12">
        <h3 className="text-[50px] font-[500] mb-4">Comprehensive Film and Video Production</h3>
        <p className="text-[20px]">
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi quas quo sapiente dolorum ipsum cumque. Commodi nemo mollitia et delectus!
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="relative   transition duration-300"
          >
            {/* Project Image */}
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full  object-contain rounded-t-lg mb-4"
            />

            {/* Project Title */}
            <div className="absolute bottom-10 left-5 " >

          
            <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
            <hr className="border-golden-brown mt-1 border-2 w-[100px]" />
            </div>

            {/* Project Description */}
         
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeOffer;
