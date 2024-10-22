// src/components/Category.js
import React from 'react';
import { Play } from 'lucide-react'; // Ensure you import your icon

const Category = ({ cards, onPlayClick }) => {

    const getYouTubeThumbnail = (url) => {
        const videoId = url.split("v=")[1];
        const ampersandPosition = videoId.indexOf("&");
        if (ampersandPosition !== -1) {
          return videoId.substring(0, ampersandPosition);
        }
        return videoId;
      };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {cards.map((project, index) => (
     <div key={index} className="relative rounded-lg shadow-lg transition duration-300">
     {/* YouTube Thumbnail as Card Background */}
     <img
       src={`https://img.youtube.com/vi/${getYouTubeThumbnail(project.videoUrl)}/hqdefault.jpg`}
       alt={project.title}
       className="object-cover w-full h-[235px] rounded-t-lg transform transition duration-300 ease-in-out hover:scale-110"
     />
   
     {/* Play Icon in Top Left */}
     <div
       className="absolute text-light-gray animate-sound-wave transition-all duration-300 ease-in-out rounded-full hover:text-golden-brown bg-golden-brown hover:bg-light-gray p-4 top-4 left-4 cursor-pointer"
       onClick={() => onPlayClick(project.videoUrl)} // Play video on click
     >
       <Play className="h-6 w-6" />
     </div>
   </div>
   
      ))}
    </div>
  );
};




export default Category;
