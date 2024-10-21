const OurTeam = () => {
    const teamMembers = [
      {
        name: "John Doe",
        title: "CEO",
      image: "/Images/photo.jpg"
      },
      {
        name: "Jane Smith",
        title: "CTO",
        image: "/Images/photo.jpg"
      },
      {
        name: "Emily Johnson",
        title: "CFO",
        image: "/Images/photo.jpg"
      },
      {
        name: "Emily Johnson",
        title: "CFO",
        image: "/Images/photo.jpg"
      },
      {
        name: "Emily Johnson",
        title: "CFO",
        image: "/Images/photo.jpg"
      }
    ];
  
    return (
      <section className="grid grid-cols-1 md:pl-[100px] lg:grid-cols-[1fr,2fr] gap-8 px-6 py-12 bg-dark-charcoal">
        {/* First Section - Title, Heading, and Paragraphs */}
        <div className="space-y-5">
          <h2 className="text-[30px] font-bold text-golden-brown mb-4">Our Team</h2>
          <h3 className="text-[50px] font-semibold text-light-gray mb-6">Meet the people behind our success</h3>
          <p className="text-light-gray text-[16px] mb-4">
            Our team comprises talented and experienced professionals who are dedicated to driving our company forward. Each member brings unique skills and expertise.
          </p>
        </div>
  
        {/* Second Section - Images with Names and Titles (Horizontally Scrollable) */}
        <div className="overflow-x-auto flex scrollbar-hidden space-x-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="relative min-w-[275px]">
              <img
                src={member.image}
                alt={member.name}
                className=" object-contain rounded-lg shadow-md"
              />
              {/* Overlay for Name and Title */}
              <div className="absolute bottom-0 left-5 p-4 text-light-gray">
                <h4 className="text-[20px] text-light-gray font-[500]">{member.name}</h4>
                <p className="text-[16px] text-golden-brown font-[500] ">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default OurTeam;
  