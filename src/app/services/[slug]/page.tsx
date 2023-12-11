"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import CloudinaryImg from "@/components/images/CloudinaryImage";
import { buttonVariants } from "@/components/ui/button";
import { fullServiceData } from "@/constant/service.data";
import useLoaded from "@/hooks/useLoaded";
import clsx from "clsx";
import Link from "next/link";

export const Page = ({ params }: { params: { slug: string } }) => {
  const data =
    fullServiceData.find((item) => item.slug === params.slug) ||
    fullServiceData[0];
  const isLoaded = useLoaded();

  return (
    <main className={clsx(isLoaded && `fade-in-start`)}>
      {/* Title Section*/}
      <MaxWidthWrapper
        className={clsx(
          `flex flex-col-reverse  md:flex-row md:justify-between mt-10 md:mt-20`
        )}
        data-fade='1'
      >
        <section className={clsx(`flex flex-col items-center`)} data-fade='2'>
          <h1
            className={clsx(
              `text-2xl md:text-3xl font-bold mt-10 text-zinc-900`
            )}
          >
            {data.title}
          </h1>
          <p className={clsx(`text-md md:text-lg text-zinc-700 mt-6`)}>
            {data.description}
          </p>
          <div
            className={clsx(
              `flex flex-row gap-4 justify-center items-center md:mt-10`
            )}
          >
            <Link
              href={`/`}
              className={buttonVariants({
                className: "mt-5 hover:shadow-xl text-xl ",
                size: "xl",
                variant: "green",
              })}
            >
              Get a Quote
            </Link>
            <Link
              href={`/`}
              className={buttonVariants({
                className: "mt-5 hover:shadow-xl text-xl",
                size: "xl",
                variant: "blue",
              })}
            >
              Contact Us
            </Link>
          </div>
        </section>
        <CloudinaryImg
          className="md:float-right w-full  md:mb-5"
          publicId={`reconcile/${data.image}`}
          width="1500"
          height="920"
          alt={data.title}
        />
      </MaxWidthWrapper>
    </main>
  );
};

export default Page;
