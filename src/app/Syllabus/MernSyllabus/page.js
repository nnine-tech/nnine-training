import MernSyllabus2 from "@/Syllabus/MernSyllabus2";
import Head from "next/head";

import React from "react";

const Page = () => {
  return (
    <>
      <Head>
        <title>MERN Stack Course Syllabus</title>
        <meta property="og:title" content="MERN Stack Course Syllabus" />
        <meta
          property="og:description"
          content="Dive deep into the MERN stack with our comprehensive syllabus covering MongoDB, Express.js, React, and Node.js."
        />
        <meta property="og:image" content="/mern.jpg" />
        <meta property="og:type" content="website" />
      </Head>
      <div>
        <MernSyllabus2 />
        {/* <MERNStackSyllabus/> */}
      </div>
    </>
  );
};

export default Page;
