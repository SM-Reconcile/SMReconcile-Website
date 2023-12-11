import React from "react";
import CloudinaryImg from "../images/CloudinaryImage";
import { buttonVariants } from "./button";
import Link from "next/link";

interface itempPropsType {
  title: string;
  description: string;
  image: string;
  slug: string;
}
const ServiceCard = (item: itempPropsType) => {
  return (
    <div
      className="bg-white rounded-lg shadow-md p-6 transform hover:shadow-xl transition duration-500 ease-in-out"
      key={item.title}
    >
      <div>
        <CloudinaryImg
          className="float-right ml-6 w-40 md:w-72 md:mb-5"
          publicId={`reconcile/${item.image}`}
          width="1500"
          height="920"
          alt="Photo of me"
          preview={false}
        />
      </div>
      <h3 className="text-xl font-semibold mb-4 text-zinc-900">{item.title}</h3>
      <p className="text-zinc-600">{item.description}</p>

      <Link
        href={`/services/${item.slug}`}
        className={buttonVariants({
          className: "mt-5 hover:shadow-xl",
          size: "sm",
          variant: "green",
        })}
      >
        Learn more
      </Link>
    </div>
  );
};

export default ServiceCard;
