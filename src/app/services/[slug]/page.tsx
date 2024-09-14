"use client";
import clsx from "clsx";
import React, { useState, useEffect } from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Typewriter from "typewriter-effect";
import useLoaded from "@/hooks/useLoaded";
import Matter from "../matter";
import Contactus from "@/components/Contactus";

// Define the props type for the component
interface PageProps {
  params: {
    slug: string;
  };
}

const Page: React.FC<PageProps> = ({ params }) => {
  const [data, setData] = useState<{ code: string } | null>(null);
  const isLoaded = useLoaded();

  useEffect(() => {
    if (!params.slug) return;

    fetch(`/api/services/${params.slug}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Error: ${res.status} ${res.statusText}`);
        }
        return res.json();
      })
      .then((data) => setData(data))
      .catch((error) => {
        console.error("Error fetching data:", error);
        setData(null);
      });
  }, [params.slug]);

  if (!data) {
    return (
      <h1>
        <Typewriter
          options={{
            strings: ["Loading....."],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
    );
  }

  return (
    <main className={clsx(isLoaded && `fade-in-start`)}>
      <MaxWidthWrapper
        className={clsx(
          `flex flex-col-reverse md:flex-row md:justify-between mt-10`
        )}
        data-fade="1"
      >
        <div className="flex flex-col p-10 md:p-20">
          <article className={clsx(``)}>
            <Matter code={data.code} />
          </article>
          <h1 className="flex w-full justify-center py-5 md:py-10">Contact us</h1>
          <Contactus />
        </div>
      </MaxWidthWrapper>
    </main>
  );
};

export default Page;
