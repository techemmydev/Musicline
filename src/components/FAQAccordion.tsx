// FAQAccordion.tsx
import React, { useState } from "react";
import { MdKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md";

// Define the structure of an FAQ item using TypeScript
interface FAQItem {
  question: string;
  answer: string;
}

// Sample FAQ data
const faqData: FAQItem[] = [
  {
    question: "Can I use it for my clients?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    question: "Is there a money back guarantee?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    question: "Do I get free updates?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    question: "How can I contact support?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    question: "Is there a trial version?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    question: "Is there a trial version?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
];

const FAQAccordion: React.FC = () => {
  // State to manage multiple open accordion items
  const [activeIndices, setActiveIndices] = useState<number[]>([0, 1]); // Indices 0 and 1 open by default

  const toggleAccordion = (index: number) => {
    // Toggle the index in the activeIndices array
    setActiveIndices(
      (prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index) // Remove index if it exists
          : [...prev, index] // Add index if not present
    );
  };

  return (
    <div className="bg-[#F8F8F8] lg:p-32">
      <div className="max-w-7xl lg:max-w-4xl mx-auto py-12 px-6">
        <h2 className="text-center text-[#B38B37] uppercase font-bold mb-3 font-OpenSans">
          FAQs
        </h2>
        <h3 className="text-center text-4xl lg:text-4xl font-extrabold mb-8 font-serif lg:mb-9">
          Frequently Asked Questions
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="b-4 cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex justify-between items-center lg:justify-between lg:gap-16">
                <h4
                  className={`text-lg font-semibold ${
                    activeIndices.includes(index)
                      ? "text-[#B38B37]"
                      : "text-black font-serif"
                  }`}
                >
                  {item.question}
                </h4>
                <span className="text-black text-xl">
                  {activeIndices.includes(index) ? (
                    <MdKeyboardArrowUp />
                  ) : (
                    <MdOutlineKeyboardArrowDown />
                  )}
                </span>
              </div>
              {activeIndices.includes(index) && (
                <p className="mt-4 text-gray-600 lg:text-left font-PlusJakartaSans">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;
