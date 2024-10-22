// src/components/Body.js
import React, { useState } from 'react';
import { cardData } from '../utils/constant';
import Category from './Category';
import { X } from 'lucide-react';

const categories = [
  { label: "Events", value: "events" },
  { label: "Brand Commercials", value: "commercials" },
  { label: "Product Shoot", value: "productShoot" },
  { label: "Weddings", value: "weddings" },
  { label: "Instagram Reels", value: "instagramReels" },
  { label: "Real Estate", value: "realEstate" },

];

const Body = () => {
  const [selectedCategory, setSelectedCategory] = useState("events");
  const [playingVideo, setPlayingVideo] = useState(null); // State to track which video is playing

  const handlePlayClick = (url) => {
    setPlayingVideo(url); // Set the clicked video URL as active
  };
  // Helper function to extract YouTube video ID from URL
  const getYouTubeThumbnail = (url) => {
    const videoId = url.split("v=")[1];
    const ampersandPosition = videoId.indexOf("&");
    if (ampersandPosition !== -1) {
      return videoId.substring(0, ampersandPosition);
    }
    return videoId;
  };

  return (
    <div className="px-[100px] py-10 bg-dark-charcoal">
      <h1 className="text-[40px] text-center font-[500] text-golden-brown mb-6">Categories</h1>
      <div className="flex justify-between flex-wrap items-center gap-8 mb-6">
        {categories.map(category => (
          <button
            key={category.value}
            onClick={() => setSelectedCategory(category.value)}
            className={`text-light-gray text-[20px]  font-[500] py-2 px-4 rounded-md transition duration-200 ${
              selectedCategory === category.value ? "bg-golden-brown" : "bg-dark-charcoal "
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {selectedCategory && (
        <Category
          cards={cardData[selectedCategory]}
          onPlayClick={handlePlayClick} // Pass the play click handler to the Category component
        />
      )}

      {/* Video Player Modal */}
      {playingVideo && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-20">
          <div className="relative  w-[80vw] h-[80vh]">
            <iframe
              src={`https://www.youtube.com/embed/${getYouTubeThumbnail(playingVideo)}`}
              title="YouTube Video"
               width="100%"
                height="100%"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className='object-contain'
            ></iframe>

          </div>
          <button
              onClick={() => setPlayingVideo(null)}
              className="absolute top-2 right-2 px-4 py-2 text-golden-brown "
            >
              <X  />
            </button>
        </div>
      )}
    </div>
  );
};



export default Body;
