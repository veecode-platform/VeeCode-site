"use client";

import React, { useRef, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import clsx from "clsx";
import { BsDash, BsPlus } from "react-icons/bs";

interface IFaq {
  id: number;
  title: string;
  answer: string;
}

interface AccordionItemProps {
  item: IFaq;
  isActive: boolean;
  onToggle: (id: number) => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  item,
  isActive,
  onToggle,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (isActive && contentRef.current) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [isActive]);

  return (
    <li className="mb-4 rounded-md bg-neutral-100 transition-all duration-300 ease-in-out border border-neutral-200">
      <button
        className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
        onClick={() => onToggle(item.id)}
        aria-expanded={isActive}
        aria-controls={`faq-content-${item.id}`}
      >
        <span className="text-lg font-semibold text-black">{item.title}</span>
        <span
          className={clsx(
            "text-2xl text-teal-400 transform transition-transform duration-300",
            isActive && "rotate-180"
          )}
        >
          {isActive ? <BsDash /> : <BsPlus />}
        </span>
      </button>

      <div
        id={`faq-content-${item.id}`}
        ref={contentRef}
        style={{
          maxHeight: height,
        }}
        className="overflow-hidden transition-[max-height] duration-500 ease-in-out px-6"
      >
        <div className="py-4">
          <p className="text-base text-neutral-700">{item.answer}</p>
        </div>
      </div>
    </li>
  );
};

const FaqList: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(null);
  const t = useTranslations("faq.items");

  const handleToggle = (id: number) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  const items: IFaq[] = Array.from({ length: 11 }, (_, i) => ({
    id: i + 1,
    title: t(`ask${i + 1}.title`),
    answer: t(`ask${i + 1}.answer`),
  }));

  return (
    <ul className="w-full">
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          item={item}
          isActive={activeId === item.id}
          onToggle={handleToggle}
        />
      ))}
    </ul>
  );
};

export default FaqList;
