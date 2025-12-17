import React from "react";
import CloudinaryImg from "../images/CloudinaryImage";
import { buttonVariants } from "./button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface itempPropsType {
  title: string;
  description: string;
  image: string;
  slug: string;
}
const ServiceCard = (item: itempPropsType) => {
  return (
    <div
      className="group bg-white rounded-2xl shadow-sm border border-zinc-100 p-6 flex flex-col h-full hover:shadow-xl hover:border-green-100 transition-all duration-300 relative overflow-hidden"
      key={item.title}
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-green-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
      
      <div className="mb-6 relative z-10 flex justify-center w-full">
        <div className="w-full h-48 relative overflow-hidden rounded-xl bg-zinc-100 shadow-inner">
             {/* Note: CloudinaryImg might need specific styling adjustments depending on its implementation. 
                 Assuming it renders an img tag. */}
            <CloudinaryImg
            className="w-full h-full transform group-hover:scale-105 transition-transform duration-500"
            publicId={`reconcile/${item.image}`}
            width={800}
            height={600}
            alt={item.title}
            preview={false}
            noStyle={true}
            fill={true}
            />
        </div>
      </div>
      
      <div className="flex-grow relative z-10">
          <h3 className="text-xl font-bold mb-3 text-zinc-900 group-hover:text-green-700 transition-colors">{item.title}</h3>
          <p className="text-zinc-600 text-sm leading-relaxed mb-4">{item.description}</p>
      </div>

      <div className="relative z-10 mt-auto pt-4 border-t border-zinc-100">
        <Link
            href={`/services/${item.slug}`}
            className="inline-flex items-center text-sm font-semibold text-green-600 hover:text-green-800 transition-colors"
        >
            Learn more <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
