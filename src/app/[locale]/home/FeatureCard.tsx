import React from "react";

interface FeatureCardProps {
  icon: string;
  metric: string;
  title: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  metric,
  title,
}) => {
  return (
    <div className="bg-white rounded-xl p-8 shadow-md flex flex-col items-center text-center">
      <span className="text-[64px] leading-none">{icon}</span>
      <p className="text-3xl font-bold text-[#33FFCE] mt-4">{metric}</p>
      <p className="text-xl font-semibold text-black mt-2">{title}</p>
    </div>
  );
};

export default FeatureCard;
