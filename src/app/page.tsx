"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Banner from "@/components/ui/Banner";
import { buttonVariants } from "@/components/ui/button";
import useLoaded from "@/hooks/useLoaded";
import clsx from "clsx";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

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
        <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg" data-fade="3">
          At SM Reconcile Environment Solutions, we pioneer innovative
          approaches to tackle environmental challenges. Our solutions bridge
          the gap between health and sanitation, creating sustainable outcomes
          for a cleaner future.
        </p>

        <Link
          className={buttonVariants({
            size: "lg",
            className: "mt-5 bg-green-600 hover:bg-green-700 hover:shadow-xl",
            variant: "default",
          })}
          href="/dashboard"
          target="_blank"
          data-fade="4"
        >
          Get started <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </MaxWidthWrapper>
    </main>
  );
}
