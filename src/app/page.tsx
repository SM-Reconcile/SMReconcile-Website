"use client";

import Contactus from "@/components/Contactus";
import FAQ from "@/components/FAQ";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Banner from "@/components/ui/Banner";
import ServiceCard from "@/components/ui/ServiceCard";
import { buttonVariants } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { faqs, philosophyData } from "@/constant/data";
import { serviceData } from "@/constant/service.data";
import useLoaded from "@/hooks/useLoaded";
import clsx from "clsx";
import { ArrowRight, Leaf, Recycle, Droplets, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { DefaultSeoProps } from "next-seo/lib/types";
import { NextSeo } from "next-seo";
import ProcessFlow from "@/components/ProcessFlow";
import ComplianceSection from "@/components/ComplianceSection";

const seoConfig: DefaultSeoProps = {
  title: "SM Reconcile - Environmental Solutions",
  description:
    "Bridging the gap between Health and Sanitation. SM Reconcile provides innovative approaches to tackle environmental challenges.",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://smreconcile.nilaysharan.in/",
    site_name: "SM Reconcile",
  },
};

const iconMap = [Leaf, Recycle, Droplets, ShieldCheck];

export default function Home() {
  const isLoaded = useLoaded();
  const bannerWords = [
    "Health",
    "Sanitation",
    "Environment",
    "Resources",
    "Economy",
  ];
  return (
    <>
      <NextSeo {...seoConfig} />

      <main className={clsx(isLoaded && `fade-in-start`, "overflow-hidden")}>
        {/* Hero Section */}
        <div className="relative">
             {/* Background Gradients */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute -top-[40%] -left-[20%] w-[70%] h-[70%] rounded-full bg-green-200/30 blur-3xl opacity-50 animate-blob"></div>
                <div className="absolute top-[10%] -right-[20%] w-[60%] h-[60%] rounded-full bg-blue-200/30 blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
            </div>

            <MaxWidthWrapper
            className={clsx(
                "mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center relative z-10"
            )}
            >
            <div className="inline-flex items-center rounded-full border border-green-200 bg-green-50 px-3 py-1 text-sm text-green-800 mb-6 backdrop-blur-sm">
                <span className="flex h-2 w-2 rounded-full bg-green-600 mr-2 animate-pulse"></span>
                Bridging the Gap Between Health & Sanitation
            </div>
            
            <h1
                className="max-w-5xl text-5xl font-bold md:text-6xl lg:text-7xl tracking-tight text-zinc-900"
                data-fade="1"
            >
                We work on Circular Economy in <br className="hidden md:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500" data-fade="2">
                <Banner bannerWords={bannerWords} />
                </span>
            </h1>
            <p
                className="mt-6 max-w-2xl text-zinc-600 sm:text-lg leading-relaxed"
                data-fade="3"
            >
                SM Reconcile Environment Solutions is engaged in finding implementable and viable options to rising environment concerns. We customize technology packages to manage waste at the location itself.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8" data-fade="4">
                <Link
                className={buttonVariants({
                    size: "lg",
                    className: "hover:shadow-xl transition-all duration-300 rounded-full",
                    variant: "green",
                })}
                href="/services"
                >
                Explore Solutions <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                className={buttonVariants({
                    size: "lg",
                    variant: "outline",
                    className: "hover:bg-zinc-50 rounded-full border-zinc-200 text-zinc-700",
                })}
                href="#contact"
                >
                Contact Us
                </Link>
            </div>
            </MaxWidthWrapper>
        </div>

        {/* Stats Container */}
        <div data-fade="1" className="relative z-20 -mt-8 mb-20">
          <Container />
        </div>

            {/* Philosophy Section */}
        <section className="py-24 bg-gradient-to-b from-white to-green-50/20 relative overflow-hidden">
             {/* Background Pattern */}
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>
             
             <MaxWidthWrapper>
                <div className="text-center mb-16 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-zinc-900 tracking-tight">
                        Our Philosophy
                    </h2>
                    <p className="text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
                        We believe in creating natural abundance and conserving resources for a sustainable future.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-6 gap-6 relative z-10">
                    {/* Resource Abundance - Large Card */}
                    <div className="md:col-span-4 bg-white/70 backdrop-blur-md rounded-3xl p-8 border border-green-100/50 shadow-sm hover:shadow-xl hover:border-green-200 transition-all duration-500 group relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-green-100/30 rounded-full blur-3xl -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
                        <div className="relative z-10">
                            <div className="h-14 w-14 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mb-6 text-green-600 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                                <Droplets size={28} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-zinc-800 group-hover:text-green-800 transition-colors">Resource Abundance</h3>
                            <p className="text-zinc-600 text-lg leading-relaxed">Create natural abundance of resources like water, fertile sand, and clean energy through innovative waste management solutions.</p>
                        </div>
                    </div>

                    {/* Ecological Balance - Standard Card */}
                    <div className="md:col-span-2 bg-gradient-to-br from-green-600 to-emerald-700 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-white relative overflow-hidden">
                        <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-2xl -mr-12 -mb-12"></div>
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <div className="h-14 w-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 text-white">
                                    <Leaf size={28} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Ecological Balance</h3>
                                <p className="text-green-50 leading-relaxed">Reduce unnecessary burden on ecology by managing human waste effectively at the source.</p>
                            </div>
                        </div>
                    </div>

                    {/* Health & Hygiene - Standard Card */}
                    <div className="md:col-span-2 bg-white/70 backdrop-blur-md rounded-3xl p-8 border border-green-100/50 shadow-sm hover:shadow-xl hover:border-green-200 transition-all duration-500 group">
                        <div className="h-14 w-14 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                            <ShieldCheck size={28} />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-zinc-800 group-hover:text-blue-800 transition-colors">Health & Hygiene</h3>
                        <p className="text-zinc-600 leading-relaxed">Conserve pure air, water, and fertile sand without compromising health standards.</p>
                    </div>

                    {/* Unique Products - Wide Card */}
                    <div className="md:col-span-4 bg-gradient-to-r from-zinc-50 to-white rounded-3xl p-8 border border-zinc-200/50 shadow-sm hover:shadow-xl transition-all duration-500 group relative overflow-hidden">
                        <div className="absolute inset-0 bg-grid-zinc-100/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
                        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
                            <div className="h-14 w-14 shrink-0 bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl flex items-center justify-center text-orange-600 group-hover:rotate-12 transition-transform duration-300 shadow-sm">
                                <Recycle size={28} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-3 text-zinc-800 group-hover:text-orange-800 transition-colors">Unique Products</h3>
                                <p className="text-zinc-600 text-lg leading-relaxed">
                                    Products conceptualized are unique, viable, and low cost with minimal maintenance. 
                                    We customize technology packages (including MBBR, MBR, SBR) to meet specific requirements for managing waste at the location itself, ensuring sustainability and efficiency.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
             </MaxWidthWrapper>
        </section>

        {/* Service Data */}
        <section className="py-20 bg-zinc-50/50">
          <MaxWidthWrapper className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-zinc-900">
              Our Technologies
            </h2>
            <p className="text-lg text-zinc-600 mb-12 max-w-2xl mx-auto">
              Customized technology packages meeting specific requirements of managing waste.
            </p>
            <div className="text-left grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {serviceData.map((item) => {
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

        {/* Process Flow */}
        <ProcessFlow />

        {/* Compliance */}
        <ComplianceSection />

        {/* Contact us */}
        <section id="contact" className="py-20 bg-gradient-to-b from-white to-green-50/30">
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

        {/* FAQ */}
        <div className="my-10 md:my-20 md:mx-10 ">
          <FAQ faqs={faqs} />
        </div>
      </main>
    </>
  );
}
