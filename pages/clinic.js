import { useState } from "react";
import Image from "next/image";

export default function Clinic() {
  const [selectedMentor, setSelectedMentor] = useState(null);

  const mentors = [
    {
      name: "Dr. Evelyn Tan",
      image: "/mentors/evelyn_tan.png", // Update with correct path
    },
    {
      name: "Alex Carter",
      image: "/mentors/alex_carter.png", // Update with correct path
    },
    {
      name: "Dr. Samuel Owens",
      image: "/mentors/samuel_owens.png", // Update with correct path
    },
  ];

  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-gray-100">
      {/* Page Heading */}
      <h1 className="text-2xl font-bold text-center mt-6">
        Welcome to the Clinic, please pick a Mentor to work with
      </h1>

      {/* Mentor Selection Section */}
      <div className="flex flex-wrap justify-center gap-8 my-6">
        {mentors.map((mentor, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image
              src={mentor.image}
              alt={mentor.name}
              width={200}
              height={200}
              className="rounded-lg shadow-md"
            />
            <h2 className="mt-2 text-lg font-semibold">{mentor.name}</h2>
            <button
              onClick={() => setSelectedMentor(mentor.name)}
              className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-800 transition"
            >
              Select {mentor.name}
            </button>
          </div>
        ))}
      </div>

      {/* Clinic Background Image (Displayed at the Bottom) */}
      <div className="relative w-full">
        <Image
          src="/clinic_background.png" // Update path to your clinic waiting room image
          alt="Herbal Clinic Waiting Room"
          layout="responsive"
          width={1024}
          height={576}
          className="object-cover"
        />
      </div>
    </div>
  );
}
