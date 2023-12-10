"use client";
import Contactus from "@/components/Contactus";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import CloudinaryImg from "@/components/images/CloudinaryImage";
import { commitmentData, missionData } from "@/constant/data";
import useLoaded from "@/hooks/useLoaded";
import clsx from "clsx";
import React from "react";

const Page = () => {
  const isLoaded = useLoaded();

  return (
    <div className={clsx(isLoaded && "fade-in-start")}>
      <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center text-zinc-900">
        <h1
          className="max-w-3xl text-4xl font-bold md:text-4xl lg:text-5xl"
          data-fade="1"
        >
          Our Commitment to <br />
          <span className="text-green-600 underline">Excellence</span>
        </h1>
      </MaxWidthWrapper>
      <div
        className="border rounded-2xl mx-10 md:mx-20 px-10 py-10 md:py-10 text-lg md:text-xl font-medium prose bg-green-600 text-zinc-50 shadow-md hover:shadow-2xl"
        data-fade="3"
      >
        At SM Reconcile Environment Solutions Pvt Ltd, we are dedicated to
        providing innovative and sustainable environmental solutions. Our focus
        is on creating a lasting impact by employing cutting-edge technology to
        address the worlds environmental challenges.
      </div>

      {/* Mission section */}
      <MaxWidthWrapper
        className="mb-12 mt-28 flex flex-col items-start text-zinc-900"
        data-fade="3"
      >
        <h1
          className="max-w-3xl text-4xl font-bold md:text-4xl lg:text-5xl"
          data-fade="4"
        >
          Our <span className="text-green-600 underline">Mission</span>
        </h1>
        <div
          className="w-full mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
          data-fade="4"
        >
          {missionData.map((data) => (
            <div
              className="rounded-lg border-2 bg-white shadow-md transition duration-300 transform hover:scale-105 overflow-hidden"
              key={data.title}
            >
              <div className="w-full flex justify-center items-center">
                <CloudinaryImg
                  publicId={`reconcile/${data.image}`}
                  width="1500"
                  height="920"
                  alt="Photo of machine"
                  className="w-11/12 h-44 mt-2 shadow-lg "
                />
              </div>
              <div className="p-6">
                <h2 className="font-bold text-lg md:text-xl">{data.title}</h2>
                <p className="text-sm md:text-base">{data.description}</p>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>

      {/* commitment section */}
      <MaxWidthWrapper className="mb-12 mt-28 flex flex-col items-start text-zinc-900">
        <h1 className="max-w-3xl text-4xl font-bold md:text-4xl lg:text-5xl">
          Our <span className="text-green-600 underline">Commitment</span>
        </h1>
        <div className="w-full mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {commitmentData.map((data) => (
            <div
              className="rounded-lg border-2 bg-white shadow-md transition duration-300 transform hover:scale-105 overflow-hidden"
              key={data.title}
            >
              <div className="w-full flex justify-center items-center">
                <CloudinaryImg
                  publicId={`reconcile/${data.image}`}
                  width="1500"
                  height="920"
                  alt="Photo of machine"
                  className="w-11/12 h-44 mt-2 shadow-lg "
                />
              </div>
              <div className="p-6">
                <h2 className="font-bold text-lg md:text-xl">{data.title}</h2>
                <p className="text-sm md:text-base">{data.description}</p>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>

      {/* Contact us */}
      <MaxWidthWrapper className="relative md:my-20 my-10 ">
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="md:text-4xl text-3xl font-bold mb-6 text-zinc-600">
                Get in touch
              </h2>
              <p className="text-xl text-zinc-600">
                We are here to help and answer any question you might have. We
                look forward to hearing from you.
              </p>
            </div>
            <Contactus />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Page;
