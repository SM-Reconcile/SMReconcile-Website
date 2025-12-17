import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

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
    <div className="py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-900">
            Frequently Asked Questions
          </h2>
          <p className="text-zinc-600">
            Common questions about sewage treatment and our solutions.
          </p>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div 
                key={index} 
                className="border-b border-zinc-200 last:border-none"
              >
                <button
                  className="w-full flex justify-between items-center py-6 text-left cursor-pointer focus:outline-none group"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                >
                  <span className={cn(
                    "text-lg font-medium pr-8 transition-colors group-hover:text-green-700",
                    isOpen ? "text-green-700 font-semibold" : "text-zinc-800"
                  )}>
                    {faq.question}
                  </span>
                  <span className={cn(
                    "flex-shrink-0 transition-all duration-300 transform",
                    isOpen ? "rotate-180 text-green-600" : "text-zinc-400 group-hover:text-green-600"
                  )}>
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>
                
                <div
                  className={cn(
                    "grid transition-all duration-300 ease-in-out",
                    isOpen ? "grid-rows-[1fr] opacity-100 mb-6" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="text-zinc-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
