"use client";
import Contactus from "@/components/Contactus";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ServiceCard from "@/components/ui/ServiceCard";
import { fullServiceData } from "@/constant/service.data";
import useLoaded from "@/hooks/useLoaded";
import clsx from "clsx";
import React from "react";
import { Droplets, Leaf, Recycle } from "lucide-react";

const Page = () => {
  const isLoaded = useLoaded();
  
  return (
    <main className={clsx(isLoaded && `fade-in-start`, "overflow-hidden")}>
      {/* Hero Section */}
      <div className="relative py-20 lg:py-28 overflow-hidden">
         {/* Background Gradients similar to Home */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-[40%] -left-[20%] w-[70%] h-[70%] rounded-full bg-green-200/30 blur-3xl opacity-50 animate-blob"></div>
            <div className="absolute top-[10%] -right-[20%] w-[60%] h-[60%] rounded-full bg-blue-200/30 blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        </div>

        <MaxWidthWrapper
          className={clsx(
            "flex flex-col items-center justify-center text-center relative z-10"
          )}
        >
          <div className="inline-flex items-center rounded-full border border-green-200 bg-green-50 px-3 py-1 text-sm text-green-800 mb-6 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-green-600 mr-2 animate-pulse"></span>
            Comprehensive Environmental Solutions
          </div>
          
          <h1
            className={clsx("text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-zinc-900 tracking-tight")}
            data-fade="1"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">Services</span>
          </h1>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed" data-fade="2">
            We provide a wide array of green services customized to meet specific requirements for managing waste and conserving resources.
          </p>
        </MaxWidthWrapper>
      </div>

      {/* Service Data Grid */}
      <section className="pb-24 bg-zinc-50/50">
        <MaxWidthWrapper className="text-center">
          <div className="md:text-center text-left grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Philosophy/Stats Snippet (Optional - for design consistency) */}
      <section className="py-24 bg-gradient-to-b from-white to-green-50/20 relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>
           <MaxWidthWrapper className="relative z-10">
                <div className="text-center mb-16 relative z-10">
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-zinc-900 tracking-tight">
                        Our Philosophy
                    </h2>
                    <p className="text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
                        We believe in creating natural abundance and conserving resources for a sustainable future.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {/* Sustainable - Glass Style */}
                    <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 border border-green-100/50 shadow-sm hover:shadow-xl hover:border-green-200 transition-all duration-500 group relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-green-100/30 rounded-full blur-3xl -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                        <div className="relative z-10">
                            <div className="h-14 w-14 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-green-600 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                                <Leaf size={28} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-zinc-800 group-hover:text-green-800 transition-colors">Sustainable</h3>
                            <p className="text-zinc-600 leading-relaxed">Eco-friendly solutions that reduce burden on ecology.</p>
                        </div>
                    </div>

                    {/* Efficient - Gradient Style */}
                    <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-white relative overflow-hidden">
                        <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-2xl -mr-12 -mb-12"></div>
                        <div className="relative z-10">
                            <div className="h-14 w-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 text-white">
                                <Droplets size={28} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Efficient</h3>
                            <p className="text-green-50 leading-relaxed">High-performance technology for optimal water treatment.</p>
                        </div>
                    </div>

                     {/* Circular Economy - Glass Style */}
                    <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 border border-green-100/50 shadow-sm hover:shadow-xl hover:border-green-200 transition-all duration-500 group relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/30 rounded-full blur-3xl -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                        <div className="relative z-10">
                            <div className="h-14 w-14 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-600 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                                <Recycle size={28} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-zinc-800 group-hover:text-blue-800 transition-colors">Circular Economy</h3>
                            <p className="text-zinc-600 leading-relaxed">Promoting resource recovery and reuse.</p>
                        </div>
                    </div>
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
