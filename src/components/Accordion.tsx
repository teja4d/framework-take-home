import React, { useState, ReactNode } from "react";
import { TfiPlus  } from "react-icons/tfi";
import { HiMinus } from "react-icons/hi2";

interface AccordionItem {
  title: string;
  content: ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={index} className="mb-2">
          <div
            className="flex justify-between py-4 border-b border-gray-300 cursor-pointer"
            onClick={() => toggleAccordion(index)}
          >
            <div className="mr-4 text-gray-700 font-light">{`${(index + 1)
              .toString()
              .padStart(2, "0")}`}</div>

            <div className="flex justify-between w-11/12">
              <div className="text-start">{item.title}</div>
              <div>
                {activeIndex === index ? (
                  <HiMinus className="text-xl lg:text-2xl text-gray-700 font-light" />
                ) : (
                  <TfiPlus className="text-xl lg:text-2xl text-gray-700 font-light" color="#8B9698" />
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            {activeIndex === index && (
              <div className="text-start p-10 w-full lg:w-11/12 font-light text-gray-700">
                {item.content}
              </div>
            )}
           
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
