import React from "react";

interface IdealForProps {
  headline: string;
  yesTitle: string;
  yesItems: string[];
  noTitle: string;
  noItems: string[];
}

const IdealFor: React.FC<IdealForProps> = ({
  headline,
  yesTitle,
  yesItems,
  noTitle,
  noItems,
}) => {
  return (
    <section className="bg-white py-24 self-stretch w-full px-[120px] max-md:px-5">
      <h2 className="text-5xl font-bold text-center mb-16 text-gray-900 max-md:text-3xl">
        {headline}
      </h2>
      <div className="grid grid-cols-2 gap-8 max-w-5xl mx-auto max-md:grid-cols-1">
        <div className="bg-green-50 rounded-2xl p-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">{yesTitle}</h3>
          <ul className="space-y-4">
            {yesItems.map((item, index) => (
              <li key={index} className="text-lg text-gray-700">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-red-50 rounded-2xl p-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">{noTitle}</h3>
          <ul className="space-y-4">
            {noItems.map((item, index) => (
              <li key={index} className="text-lg text-gray-700">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default IdealFor;
