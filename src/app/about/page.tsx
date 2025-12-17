"use client";
import Contactus from "@/components/Contactus";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import CloudinaryImg from "@/components/images/CloudinaryImage";
import { commitmentData, missionData } from "@/constant/data";
import useLoaded from "@/hooks/useLoaded";
import clsx from "clsx";
import React from "react";
import { ArrowRight, Leaf, Recycle, Target, Award } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const Page = () => {
  const isLoaded = useLoaded();

  return (
    <main className={clsx(isLoaded && "fade-in-start", "overflow-hidden")}>
      {/* Hero Section */}
      <div className="relative py-20 lg:py-28 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-[40%] -left-[20%] w-[70%] h-[70%] rounded-full bg-green-200/30 blur-3xl opacity-50 animate-blob"></div>
            <div className="absolute top-[10%] -right-[20%] w-[60%] h-[60%] rounded-full bg-blue-200/30 blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        </div>

        <MaxWidthWrapper className="flex flex-col items-center justify-center text-center relative z-10">
          <div className="inline-flex items-center rounded-full border border-green-200 bg-green-50 px-3 py-1 text-sm text-green-800 mb-6 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-green-600 mr-2 animate-pulse"></span>
            About SM Reconcile
          </div>

          <h1
            className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl tracking-tight text-zinc-900 mb-8"
            data-fade="1"
          >
            Our Commitment to <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
              Excellence
            </span>
          </h1>

          <div 
            className="max-w-3xl mx-auto text-lg md:text-xl text-zinc-600 leading-relaxed bg-white/60 backdrop-blur-md rounded-2xl p-8 border border-white/50 shadow-sm"
            data-fade="2"
          >
            At SM Reconcile Environment Solutions Pvt Ltd, we are dedicated to
            providing innovative and sustainable environmental solutions. Our focus
            is on creating a lasting impact by employing cutting-edge technology to
            address the world&apos;s environmental challenges.
          </div>
        </MaxWidthWrapper>
      </div>

      {/* Mission Section - Alternating Layout */}
      <section className="py-24 bg-zinc-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <MaxWidthWrapper className="relative z-10">
            <div className="text-center mb-20">
                <div className="inline-flex items-center rounded-full border border-green-200 bg-green-50 px-3 py-1 text-sm text-green-800 mb-6">
                    <Target className="w-4 h-4 mr-2" />
                    Our Mission
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
                    Driving Positive Change
                </h2>
                <p className="text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
                    We are on a mission to revolutionize environmental management through sustainable innovation.
                </p>
            </div>

            <div className="space-y-24">
                {missionData.map((data, index) => (
                    <div
                        key={data.title}
                        className={clsx(
                            "flex flex-col gap-8 md:gap-16 items-center",
                            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                        )}
                    >
                        {/* Image Side */}
                        <div className="w-full md:w-1/2 relative group">
                            <div className={clsx(
                                "absolute -inset-4 rounded-[2rem] opacity-70 blur-2xl transition-all duration-500 group-hover:opacity-100",
                                index % 2 === 0 ? "bg-green-100 -rotate-2" : "bg-blue-100 rotate-2"
                            )}></div>
                            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/50 aspect-[4/3]">
                                 <CloudinaryImg
                                    publicId={`reconcile/${data.image}`}
                                    width="800"
                                    height="600"
                                    alt={data.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    preview={false}
                                    noStyle={true}
                                />
                            </div>
                        </div>

                        {/* Text Side */}
                        <div className="w-full md:w-1/2 md:py-8">
                            <div className={clsx(
                                "w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm",
                                index % 2 === 0 ? "bg-green-100 text-green-600" : "bg-blue-100 text-blue-600"
                            )}>
                                {index % 2 === 0 ? <Leaf size={32} /> : <Target size={32} />}
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6 leading-tight">
                                {data.title}
                            </h3>
                            <p className="text-lg text-zinc-600 leading-relaxed mb-8">
                                {data.description}
                            </p>
                            <Link href="/services" className={clsx(
                                buttonVariants({ variant: "outline", size: "lg" }),
                                "rounded-full group"
                            )}>
                                Learn More <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </MaxWidthWrapper>
      </section>

      {/* Commitment Section - Bento Grid Style */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>
        <MaxWidthWrapper className="relative z-10">
            <div className="text-center mb-16">
                 <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm text-blue-800 mb-6">
                    <Award className="w-4 h-4 mr-2" />
                    Core Values
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
                    Our Commitment
                </h2>
                <p className="text-zinc-600 text-lg max-w-2xl mx-auto">
                    We pledge to deliver excellence in every project, ensuring environmental integrity and client satisfaction.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
                {commitmentData.map((data, index) => (
                     <div
                        key={data.title}
                        className={clsx(
                            "relative rounded-[2rem] overflow-hidden group hover:shadow-2xl transition-all duration-500",
                            index === 0 ? "md:col-span-2 md:row-span-2 bg-zinc-900 text-white" : "bg-white border border-zinc-100 md:col-span-1 md:row-span-1"
                        )}
                    >
                        {/* Background Image for first item */}
                        {index === 0 && (
                            <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-30 transition-opacity">
                                <CloudinaryImg
                                    publicId={`reconcile/${data.image}`}
                                    width="1200"
                                    height="800"
                                    alt={data.title}
                                    className="w-full h-full object-cover"
                                    preview={false}
                                    noStyle={true}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent"></div>
                            </div>
                        )}

                        <div className={clsx(
                            "relative z-10 h-full flex flex-col p-8 md:p-10",
                            index === 0 ? "justify-end" : "justify-between"
                        )}>
                            
                            {index !== 0 && (
                                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <Target size={24} />
                                </div>
                            )}

                            <div>
                                <h3 className={clsx(
                                    "font-bold mb-4",
                                    index === 0 ? "text-3xl md:text-4xl" : "text-xl text-zinc-900"
                                )}>
                                    {data.title}
                                </h3>
                                <p className={clsx(
                                    "leading-relaxed",
                                    index === 0 ? "text-zinc-300 text-lg max-w-lg" : "text-zinc-600 text-sm"
                                )}>
                                    {data.description}
                                </p>
                            </div>
                            
                             {/* Decorative arrow for small cards */}
                             {index !== 0 && (
                                <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 text-blue-500">
                                    <ArrowRight size={24} />
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </MaxWidthWrapper>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-b from-white to-green-50/30">
        <MaxWidthWrapper>
            <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-zinc-100 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500"></div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
                    Ready to make a difference?
                </h2>
                <p className="text-xl text-zinc-600 mb-10 max-w-2xl mx-auto">
                    We are here to help and answer any questions you might have. We look forward to hearing from you.
                </p>
                
                <div className="bg-zinc-50 rounded-2xl p-6 md:p-8">
                    <Contactus />
                </div>
            </div>
        </MaxWidthWrapper>
      </section>
    </main>
  );
};

export default Page;

