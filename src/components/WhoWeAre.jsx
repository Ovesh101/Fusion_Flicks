const WhoWeAre = () => {
  return (
    <section className="bg-dark-gray px-4 md:px-[100px] py-12 text-light-gray">
      <div className="container mx-auto grid grid-cols-[1.5fr_1fr_1fr] gap-8">
        {/* Column 1 */}
        <div className="space-y-4 col-span-1 ">
          <h2 className="text-[30px] text-golden-brown font-[500]">
            Who We Are
          </h2>
          <h3 className="text-[50px] font-[500] w-[500px] ">
            The Heart of Every Production We Made
          </h3>
          <p className="font-[500] w-[500px] ">
            We are dedicated to delivering exceptional results through
            innovation and creativity. Our team is committed to pushing the
            boundaries of what is possible.
          </p>

          {/* Parent div containing two inner divs */}
          <div className="flex justify-between gap-5  pt-8">
            {/* First Inner Div */}
            <div className="flex flex-col ">
              <div className="mb-2">
                {/* Replace with your icon */}
                <img
                  src="/Images/light.png"
                  alt="bulb"
                  className="h-10 w-10 "
                />
              </div>
              <h4 className="font-[500] text-[30px] ">Creativity</h4>
              <p className="mt-2">
                We provide innovative solutions to complex problems.
              </p>
            </div>

            {/* Second Inner Div */}
            <div className="flex flex-col  ">
              <div className="mb-2 ">
                {/* Replace with your icon */}
                <img
                  src="/Images/video.png"
                  alt="filming"
                  className="h-10 w-10 "
                />
              </div>
              <h4 className="font-[500] text-[30px]">Innovative</h4>
              <p className="mt-2">
                Our expert team is here to support you every step of the way.
              </p>
            </div>
          </div>
        </div>

        {/* Column 2: Image */}
        <div className="flex items-center col-span-1 justify-center">
          <img
            src="path/to/your/image.jpg" // Replace with your image path
            alt="Who We Are"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Column 3 */}
        <div className="flex flex-col">
       

          <div className="flex space-y-10 pt-20 flex-col">
            <div className="flex gap-5  items-center ">
              <span className="text-[80px] text-golden-brown  font-bold">25+</span>
              <span className="text-[30px] ">Years of Experience</span>
            </div>
            <div className="flex gap-5  items-center">
              <span className="text-[80px] text-golden-brown font-bold">20+</span>
              <span className="text-[30px] ">Professional Teams</span>
            </div>
            <div className="flex  items-center">
              <span className="text-[80px] text-golden-brown font-bold">13K+</span>
              <span className="text-[30px] ">Project Completed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
