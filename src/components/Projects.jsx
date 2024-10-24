import React, { useState } from "react";
import { Play, X } from "lucide-react";

import FadeInSection from "./FadeInSection";

// Dummy project data with YouTube video links
const projectsData = [
  {
    title: "Cinematic Excellence",
    description: "A project focused on delivering high-quality ",
    videoUrl: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
  },
  {
    title: "Tech Innovation",
    description: "Developing cutting-edge technology solutions.",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    title: "Creative Designs",
    description: "A showcase of beautiful and intuitive design concepts.",
    videoUrl: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
  },
  {
    title: "AI Integration",
    description: "Implementing AI-based solutions for automation. .",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    title: "Mobile Development",
    description: "Building scalable mobile applications for Android and iOS.",
    videoUrl: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
  },
  {
    title: "Cloud Solutions",
    description: "Offering cloud-based solutions for businesses.",
    videoUrl:
      "https://www.youtube.com/watch?v=hcDNCBo2e-A&list=RDhcDNCBo2e-A&start_radio=1",
  },
];

// Helper function to extract YouTube video ID from URL
const getYouTubeThumbnail = (url) => {
  const videoId = url.split("v=")[1];
  const ampersandPosition = videoId.indexOf("&");
  if (ampersandPosition !== -1) {
    return videoId.substring(0, ampersandPosition);
  }
  return videoId;
};

const Projects = () => {
  const [playingVideo, setPlayingVideo] = useState(null); // State to track which video is playing

  const handlePlayClick = (url) => {
    setPlayingVideo(url); // Set the clicked video URL as active
  };

  return (
    <section className="px-4 md:px-[100px] py-12 bg-dark-charcoal text-light-gray ">
      {/* Main Title */}

      <h2 className="text-[30px] text-golden-brown md:text-5xl font-semibold text-center mb-6">
        Projects
      </h2>

      {/* Subtitle and Paragraphs */}
      <div className="text-center text-light-gray max-w-2xl mx-auto mb-12">
        <h3 className="text-[50px] font-medium mb-4">
          Explore Our Latest Work
        </h3>
        <p className="text-[20px]">
          Take a look at some of our most notable projects below, where
          creativity meets functionality.
        </p>
      </div>

      {/* Cards Section */}
      <FadeInSection delay={150}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="relative   rounded-lg shadow-lg transition duration-300"
            >
              {/* YouTube Thumbnail as Card Background */}
              <img
                src={`https://i.ytimg.com/vi/${getYouTubeThumbnail(
                  project.videoUrl
                )}/hq720.jpg`}
                alt={project.title}
                className="object-contain w-full rounded-t-lg"
              />

              {/* Play Icon in Top Left */}
              <div
                className="absolute animate-sound-wave transition-all duration-300 ease-in-out rounded-full hover:text-golden-brown bg-golden-brown hover:bg-light-gray p-4 top-4 left-4 cursor-pointer"
                onClick={() => handlePlayClick(project.videoUrl)} // Play video on click
              >
                <Play className="h-6 w-6 " />
              </div>

              {/* Title at the Bottom of the Card */}
              <div className="absolute bottom-0 left-0 right-0 p-4 pt-8 bg-transparent transition-all duration-500 ease-in-out hover:bg-dark-gray group flex flex-col justify-end">
                <h3 className="text-lg font-semibold transition-all duration-300 ease-in-out  text-white">
                  {project.title}
                </h3>
                <hr className="border-golden-brown mt-1 transition-all duration-300 ease-in-out  border-2 w-[100px] " />

                {/* Description (hidden by default) */}
                <p
                  className={`mt-2 text-gray-300  overflow-hidden transition-all  duration-300 ease-in-out  max-h-0  group-hover:max-h-[300px]`}
                >
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </FadeInSection>

      {/* Video Player Modal */}
      {playingVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center">
          <div className="relative w-[80vw] h-[80vh]">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${getYouTubeThumbnail(
                playingVideo
              )}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded YouTube Video"
            ></iframe>

            {/* Close Button */}
          </div>
          <button
            className="absolute top-2 right-2  text-golden-brown px-4 py-2 rounded"
            onClick={() => setPlayingVideo(null)}
          >
            <X />
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
