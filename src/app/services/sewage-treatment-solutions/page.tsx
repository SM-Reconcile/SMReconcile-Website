"use client";
import clsx from "clsx";
import React, { useState, useEffect } from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { usePathname } from "next/navigation";
import Typewriter from "typewriter-effect";
import Matter from "../matter";

const SewageTreatmentSolutions: React.FC = () => {
  const [data, setData] = useState<{ code: string } | null>(null);
  const [slug, setSlug] = useState<string>("");
  const pathName = usePathname().split("/").pop();

  useEffect(() => {
    if (pathName) {
      setSlug(pathName);
    }
  }, [pathName]);

  useEffect(() => {
    if (!slug) return;

    fetch(`/api/services/${slug}`)
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
  }, [slug]);

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
    <main className={clsx(`fade-in-start`)}>
      <MaxWidthWrapper
        className={clsx(
          `flex flex-col-reverse  md:flex-row md:justify-between mt-10`
        )}
        data-fade="1"
      >
        <article className={clsx(`p-10 md:p-20`)}>
          <Matter code={data.code} />
        </article>
      </MaxWidthWrapper>
    </main>
  );
};

export default SewageTreatmentSolutions;
