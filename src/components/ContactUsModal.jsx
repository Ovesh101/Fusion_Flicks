import React, { useState } from 'react';
import emailjs from '@emailjs/browser'
import { X } from 'lucide-react';
import toast from 'react-hot-toast';

const ContactUsModal = ({isOpen , setIsOpen}) => {
 
  const [loading ,  setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const toggleModal = () => setIsOpen(!isOpen);

  // Handling form input change
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
            message:'',
          })
        },(error) => {
          setLoading(false)
  
          console.log(error);
          toast.error("Something went wrong!!");
          
        })

  }

  return (
    <>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-dark-charcoal p-8 rounded-lg w-full max-w-lg">
            {/* Close Button */}
            <div className="flex justify-end">
              <button onClick={toggleModal}>
                <X className="text-light-gray" size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <h2 className="text-3xl text-golden-brown mb-6 text-center">Contact Us</h2>

            {/* Contact Form */}
            <form onSubmit={sendEmail} className="space-y-4">
              <div>
                <label className="block text-light-gray mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-dark-gray text-light-gray border border-golden-brown rounded-md focus:outline-none focus:ring-2 focus:ring-golden-brown"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label className="block text-light-gray mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-dark-gray text-light-gray border border-golden-brown rounded-md focus:outline-none focus:ring-2 focus:ring-golden-brown"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div>
                <label className="block text-light-gray mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-dark-gray text-light-gray border border-golden-brown rounded-md focus:outline-none focus:ring-2 focus:ring-golden-brown"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label className="block text-light-gray mb-1">Requirements</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-dark-gray text-light-gray border border-golden-brown rounded-md focus:outline-none focus:ring-2 focus:ring-golden-brown"
                  rows="4"
                  placeholder="Describe your requirements"
                  required
                />
              </div>

              {/* Send Button */}
              <button
                type="submit"
                className="w-full bg-golden-brown text-dark-gray px-4 py-2 rounded-md hover:bg-opacity-90 transition"
              >
                {loading ? 'Sending...' : 'Send'}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactUsModal;
