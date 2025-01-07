import { useState } from "react";

const Accordion = ({ questions }) => {
  const [activeIndex, setactiveIndex] = useState();
  const toggleAccordion = (index) => {
    setactiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="mx-auto p-4">
      <div className="max-w-2xl bg-gray-50 border border-gray-200 rounded-md shadow-sm">
        {questions?.map((item, index) => (
          <div
            key={index}
            className={`border-b last:border-none ${
              activeIndex === "index" ? "bg-gray-100" : "bg-gray-50"
            }`}
          >
            <button
              onClick={() => toggleAccordion(index)}
              className={`w-full text-left px-6 py-4 flex justify-between items-center ${
                activeIndex === index
                  ? "text-gray-800 font-medium"
                  : "text-gray-600"
              } hover:bg-gray-200`}
            >
              <span>{item.question}</span>
              <span className="text-lg font-semibold">
                {activeIndex === index ? "-" : "+"}
              </span>
            </button>

            {activeIndex === index && (
              <div className="px-6 py-3 text-gray-700 leading-relaxed">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
