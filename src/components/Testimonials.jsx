import React from 'react';
import {  MessageSquareQuoteIcon } from 'lucide-react'; // Importing Message Circle icon from Lucide React

const testimonials = [
  {
    id: 1,
    message: "This product has changed my life! Highly recommend it.",
    title: "John Doe",
  },
  {
    id: 2,
    message: "Amazing experience, great customer service! Amazing experience, great customer service! Amazing experience, great customer service!",
    title: "Jane Smith",
  },
  {
    id: 3,
    message: "I love this! It works exactly as described.",
    title: "Emily Johnson",
  },
];

const Testimonials = () => {
  return (
    <section className="py-10 bg-dark-charcoal">
      <h2 className="text-[40px] text-golden-brown  text-center mb-8">Testimonials</h2>
     
      <div className="container px-4 py-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-dark-gray text-light-gray py-8 px-8 rounded-lg shadow-md flex flex-col"
          >
            <div className="flex justify-end mb-4"> {/* Adjusted to shift icon to the right */}
              <MessageSquareQuoteIcon className="text-golden-brown" size={40} />
            </div>
            <p className="mb-4">{testimonial.message}</p>
            <hr className="border-golden-brown mb-2 w-full" />
            <h1 className="font-semibold text-[24px]">{testimonial.title}</h1>
            <div className="font-[500] text-[16px]">{testimonial.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
