"use client"

import useLoaded from "@/hooks/useLoaded";


export default function Home() {
  const isLoaded = useLoaded();

  return <>
  <div>
    <h1>Home</h1>
    <p>Loaded: {isLoaded ? "true" : "false"}</p>
  </div>
  </>;
}
