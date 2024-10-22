import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { useState } from "react";
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast';

const features = [
  {
    icon: "https://example.com/icon1.svg", // Replace with actual icon URL
    heading: "Call Us",
    description: "This is the description for feature 1.",
  },
  {
    icon: "https://example.com/icon2.svg", // Replace with actual icon URL
    heading: "Mail Us",
    description: "This is the description for feature 2.",
  },
  {
    icon: "https://example.com/icon3.svg", // Replace with actual icon URL
    heading: "Visit Us",
    description: "This is the description for feature 3.",
  },
  {
    icon: "https://example.com/icon4.svg", // Replace with actual icon URL
    heading: "Opening Hours",
    description: "This is the description for feature 4.",
  },
];

const ContactUsCompo = () => {
  const [loading ,  setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject:'',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form submission
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
        'service_r252skd',
        'template_4dqcrje',
        {
          from_name: formData.name,
          to_name: "Ovesh",
          from_email: formData.email,
          to_email: "oveshmulla1124@gmail.com",
          subject: formData.subject, 
          Phone:formData.phone,
          message: formData.message,
        },
        'xL4T5LVtTUjV6Depj'
        )
        .then(()=> {
          setLoading(false);
          toast.success("Thank you. I will get back to you as soon as possible.");
  
          setForm({
            name:'',
            email:'',
            subject: '',
            phone:'',
            message:'',
          })
        },(error) => {
          setLoading(false)
  
          console.log(error);
          toast.error("Something went wrong!!");
          
        })

  }
  return (
    <div className="grid grid-cols-2  gap-16 bg-dark-gray py-24 px-[100px] ">
      {/* Left Column */}
      <div className="space-y-7">
        <h2 className="text-golden-brown text-[30px] font-[500] ">
          Get in Touch
        </h2>
        <h3 className="text-light-gray md:text-[50px] font-[500] mt-4">
          Reach Out and Let’s Create Something Great Together
        </h3>
        <p className="text-light-gray mt-2">
          In consequat augue in eros fermentum, non ultricies ligula congue.
          Class fermentum aptent taciti sociosqu ad litora torquent per conubia,
          per inceptos himenaeos. Duis pellentesque tortor sed tortor elementum,
          ut sagittis eros consectetur.
        </p>

        {/* Cards using Map */}
        <div className="grid  grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex  flex-col items-start">
              {/* Icon and Heading in a Row */}
              <div className="flex items-center  gap-5">
                <img src={feature.icon} alt="Icon" className="w-6 h-6" />
                <div className="flex flex-col  justify-between">
                  <h4 className="text-[24px] text-light-gray font-[500]">
                    {feature.heading}
                  </h4>
                  <p className="text-[16px] text-light-gray mt-2">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-10 items-center justify-between ">
          {/* Text */}
          <p className="text-light-gray text-xl">Follow Us</p>

          {/* Horizontal Rule */}
          <hr className="border-t border-golden-brown w-[50%]" />

          {/* Social Media Icons in a Row */}
          <div className="flex items-center space-x-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="w-6 h-6 text-light-gray hover:text-golden-brown transition duration-300" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="w-6 h-6 text-light-gray hover:text-golden-brown transition duration-300" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-6 h-6 text-light-gray hover:text-golden-brown transition duration-300" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube className="w-6 h-6 text-light-gray hover:text-golden-brown transition duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Right Column - Contact Form */}
      <div className="px-10">
        <form onSubmit={sendEmail} className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="block text-[20px] text-light-gray mb-1">
              Name <span className="text-golden-brown">*</span>
            </label>
            <input
              type="text"
              required
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full bg-[#2E2E2E] p-4 text-light-gray  focus:outline-none "
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-[20px] text-light-gray mb-1">
              Email <span className="text-golden-brown">*</span>
            </label>
            <input
              type="email"
              required
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full bg-[#2E2E2E] text-light-gray p-4   focus:outline-none"
            />
          </div>

          {/* Telephone Field */}
          <div>
            <label className="block text-[20px] text-light-gray mb-1">
              Phone Number <span className="text-golden-brown">*</span>
            </label>
            <input
              type="number"
              required
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone Number"
              className="w-full bg-[#2E2E2E] text-light-gray focus:outline-none  p-4 "
            />
            </div>
      

          {/* Subject Field */}
            <div>
            <label className="block text-[20px] text-light-gray mb-1">
              Subject <span className="text-golden-brown">*</span>
            </label>
            <input
              type="text"
              required
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full text-light-gray focus:outline-none bg-[#2E2E2E]  p-4 "
            />
          </div>

          {/* Message/Question Field */}
          <div>
            <label className="block text-[20px] text-light-gray mb-1">
              Message / Questions <span className="text-golden-brown">*</span>
            </label>
            <textarea
              required
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-[#2E2E2E] text-light-gray focus:outline-none   p-4 "
              placeholder="Input Your Message Here"
              rows="4"
            ></textarea>
          </div>
          <div className="flex">
            <button
              type="submit"
              className=" px-12 hover:bg-light-gray hover:text-golden-brown bg-golden-brown text-white py-4 rounded mt-4  transition duration-300"
            >
             {loading ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUsCompo;
