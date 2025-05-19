import React from "react";
import TestimonialCard from "./TestimonialCard";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote:
        "A VeeCode se tornou uma ferramenta essencial na nossa empresa. Aceleramos nossas entregas com uma redução significativa de tempo e mais importante, mantendo a observabilidade entre times.",
      avatar: "https://cdn.builder.io/api/v1/image/assets/25b967a33ef84309975ff5f0a5545581/1dfda147ce98c68bf91368c835f201be0ccd8566?placeholderIfAbsent=true",
      name: "Gabriel",
      role: "Principal Product Designer",
    },
    {
      quote:
        "A VeeCode foi uma grata surpresa! Aceleramos em 90% as entregas de novos ambientes e tudo isso com um altíssimo padrão de segurança e governança, com um ótimo custo-benefício, que foi essencial na escolha da ferramenta.",
      avatar: "https://cdn.builder.io/api/v1/image/assets/25b967a33ef84309975ff5f0a5545581/1dfda147ce98c68bf91368c835f201be0ccd8566?placeholderIfAbsent=true",
      name: "Geraldo",
      role: "Tech Leader",
    },
  ];

  return (
    <section className="bg-[rgba(210,213,226,0.16)] self-stretch flex min-h-[448px] w-full items-center gap-[40px_120px] justify-center flex-wrap px-[120px] max-md:max-w-full max-md:px-5">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={index}
          quote={testimonial.quote}
          avatar={testimonial.avatar}
          name={testimonial.name}
          role={testimonial.role}
        />
      ))}
    </section>
  );
};

export default Testimonials;
