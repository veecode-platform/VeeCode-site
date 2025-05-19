import React from "react";
import TestimonialCard from "./TestimonialCard";

const Avatar = "/assets/home/Avatar.svg";

export type TestimonialCardProps = {
  id: number;
  quote: string;
  author: string;
  role: string;
};

interface TestimonialsProps {
  cards: TestimonialCardProps[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ cards }) => {
  return (
    <section className="bg-[rgba(210,213,226,0.16)] self-stretch flex min-h-[448px] w-full items-center gap-[40px_120px] justify-center flex-wrap px-[120px] max-md:max-w-full max-md:px-5">
      {cards.map((testimonial) => (
        <TestimonialCard
          key={testimonial.id}
          quote={testimonial.quote}
          avatar={Avatar}
          name={testimonial.author}
          role={testimonial.role}
        />
      ))}
    </section>
  );
};

export default Testimonials;
