"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ServiceCard from "@/components/ui/ServiceCard";
import { fullServiceData } from "@/constant/service.data";
import useLoaded from "@/hooks/useLoaded";
import clsx from "clsx";
import React from "react";

const Page = () => {
  const isLoaded = useLoaded();
  return (
    <main className={clsx(isLoaded && `fade-in-start`)}>
      <MaxWidthWrapper
        className={clsx(
          "mb-12 mt-16 sm:mt-16 flex flex-col items-center justify-center text-center"
        )}
      >
        <h1
          className={clsx("text-3xl md:text-4xl font-bold my-2 text-zinc-900")}
          data-fade="1"
        >
          Services
        </h1>
        <p className={clsx("text-xl md:text-2xl text-zinc-800")} data-fade="2">
          We provide a wide array of{" "}
          <span className="text-green-600 font-bold">green</span> services :
        </p>
      </MaxWidthWrapper>

      {/* Service Data */}
      <section className="">
        <MaxWidthWrapper className="text-center">
          <div className="md:text-center text-left grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-8">
            {/* Service 1 */}
            {fullServiceData.map((item) => {
              return (
                <ServiceCard
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  slug={item.slug}
                />
              );
            })}
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Contact us */}

    </main>
  );
};

export default Page;
