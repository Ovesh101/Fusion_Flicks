import Marquee from 'react-fast-marquee';

const clients = [
  { id: 1, logo: "/Images/light.png", alt: "Client Logo 1" },
  { id: 2, logo: "/Images/light.png", alt: "Client Logo 2" },
  { id: 3, logo: "/Images/light.png", alt: "Client Logo 3" },
  { id: 4, logo: "/Images/light.png", alt: "Client Logo 4" },
  { id: 5, logo: "/Images/light.png", alt: "Client Logo 5" },
  { id: 6, logo: "/Images/light.png", alt: "Client Logo 6" },
  { id: 7, logo: "/Images/light.png", alt: "Client Logo 7" },
];

const Clients = () => {
  return (
    <section className="py-10 md:px-[100px] bg-dark-gray">
      <h2 className="text-[40px] text-golden-brown font-[500] text-center mb-8">Our Clients</h2>
      <div className="flex items-center">
        {/* Left Side Text */}
        <div className=" text-[40px] text-white mr-6">
          Work alongside 1500+ innovative partners
        </div>
        {/* Marquee Component */}
        <Marquee speed={100} pauseOnHover>
          {clients.map((client) => (
            <div
              key={client.id}
              className="flex justify-center items-center mx-6"
            >
              <img
                src={client.logo}
                alt={client.alt}
                className=" w-[150px] h-[150px] object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Clients;
