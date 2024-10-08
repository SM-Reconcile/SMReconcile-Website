"use client";

import Contactus from "@/components/Contactus";
import FAQ from "@/components/FAQ";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Banner from "@/components/ui/Banner";
import ServiceCard from "@/components/ui/ServiceCard";
import { buttonVariants } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { faqs } from "@/constant/data";
import { serviceData } from "@/constant/service.data";
import useLoaded from "@/hooks/useLoaded";
import clsx from "clsx";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { DefaultSeoProps } from "next-seo/lib/types";
import { NextSeo } from "next-seo";

const seoConfig: DefaultSeoProps = {
  title: "SM Reconcile - Environmental Solutions",
  description:
    "Transforming waste into sustainable solutions. SM Reconcile provides innovative approaches to tackle environmental challenges.",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://smreconcile.nilaysharan.in/",
    site_name: "SM Reconcile",
  },
};

export default function Home() {
  const isLoaded = useLoaded();
  const bannerWords = [
    "Solutions",
    "समाधान",
    "حلول",
    "ಪರಿಹಾರಗಳು",
    "решения",
    "Soluções",
    "פתרונות",
  ];
  return (
    <>
      <NextSeo {...seoConfig} />

      <main className={clsx(isLoaded && `fade-in-start`)}>
        <MaxWidthWrapper
          className={clsx(
            "mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center"
          )}
        >
          <h1
            className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl"
            data-fade="1"
          >
            Transforming Waste into
            <span className="text-green-600" data-fade="2">
              <Banner bannerWords={bannerWords} />
            </span>
          </h1>
          <p
            className="mt-5 max-w-prose text-zinc-700 sm:text-lg"
            data-fade="3"
          >
            At SM Reconcile Environment Solutions, we pioneer innovative
            approaches to tackle environmental challenges. Our solutions bridge
            the gap between health and sanitation, creating sustainable outcomes
            for a cleaner future.
          </p>

          <Link
            className={buttonVariants({
              size: "lg",
              className: "mt-5 hover:shadow-xl",
              variant: "green",
            })}
            href="/services"
            target="_blank"
            data-fade="4"
          >
            Get started <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </MaxWidthWrapper>

        {/* value proposition section */}
        <div>
          <div className="relative isolate">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
              <div
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#3C873A] to-[#B4C8AD] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              />
            </div>

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
              <div
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#3C873A] to-[#B4C8AD] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              />
            </div>
          </div>
        </div>
        <div data-fade="1">
          <Container />
        </div>

        {/* Service Data */}
        <section className="py-12">
          <MaxWidthWrapper className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-600">
              Our Services
            </h2>
            <p className="text-lg md:text-xl text-zinc-700 mb-10">
              We provide a wide range of services to our clients.
            </p>
            <div className="md:text-center text-left grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service 1 */}
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

        {/* Contact us */}
        <MaxWidthWrapper className="relative md:my-20 my-10 ">
          <div className="relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h2 className="md:text-4xl text-3xl font-bold mb-6 text-green-600">
                  Get in touch
                </h2>
                <p className="text-xl text-zinc-700">
                  We are here to help and answer any question you might have. We
                  look forward to hearing from you.
                </p>
              </div>
              <Contactus />
            </div>
          </div>
        </MaxWidthWrapper>

        {/* FAQ */}
        <div className="my-10 md:my-20 md:mx-10 ">
          <FAQ faqs={faqs} />
        </div>
      </main>
    </>
  );
}
