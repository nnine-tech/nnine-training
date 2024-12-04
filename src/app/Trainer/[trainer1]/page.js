// app/Trainer/[trainer1]/page.js
import TrainersDetails from "@/components/TrainersDetails";
import React from "react";

// This function generates the paths for each dynamic route
export async function generateStaticParams() {
  // Define the trainer IDs that should be pre-rendered (or fetch them from an API)
  const trainers = [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
    { id: "6" },
    {id:"7"},
    // Add more IDs as needed
  ];

  // Map each trainer to a dynamic route
  return trainers.map((trainer) => ({
    trainer1: trainer.id, // This creates paths like /Trainer/1, /Trainer/2, etc.
  }));
}

const Page = async ({ params }) => {
  const { trainer1 } = await params; // Await the params here
  return (
    <div>
      <TrainersDetails trainerId={trainer1} />
    </div>
  );
};

export default Page;
