import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  faqs: FAQItem[];
};

const FAQ = ({ faqs }: FAQProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="w-full flex justify-center mb-2">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-green-600">
          Frequently Asked Questions
        </h1>
      </div>

      <div className="divide-y divide-zinc">
        {faqs.map((faq, index) => (
          <div key={index} className="py-4">
            <div
              className="flex justify-between items-center cursor-pointer transition-all duration-300 ease-in-out"
              onClick={() => toggleFAQ(index)}
            >
              <h2 className="text-xl font-semibold">{faq.question}</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 transform ${
                  activeIndex === index ? "rotate-180" : "rotate-0"
                } transition-transform duration-300 ease-in-out`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={activeIndex === index ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
                />
              </svg>
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                activeIndex === index ? "max-h-40" : "max-h-0"
              }`}
            >
              <p className="mt-4 text-zinc">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
