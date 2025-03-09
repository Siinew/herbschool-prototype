import Image from "next/image";
import { useState } from "react";

export default function Clinic() {
  const [selectedMentor, setSelectedMentor] = useState(null);

  const mentors = [
    { id: 1, name: "Dr. Evelyn Tan", image: "/mentors/evelyn_tan.png" },
    { id: 2, name: "Alex Carter", image: "/mentors/alex_carter.png" },
    { id: 3, name: "Dr. Samuel Owens", image: "/mentors/samuel_owens.png" },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-6">Welcome to the Clinic, please pick a Mentor to work with</h1>

      {/* Mentor Selection Section */}
      <div className="grid grid-cols-3 gap-8 mb-6">
        {mentors.map((mentor) => (
          <div key={mentor.id} className="flex flex-col items-center">
            <Image
              src={mentor.image}
              alt={mentor.name}
              width={250}
              height={250}
              className="rounded-lg shadow-lg"
            />
            <button
              onClick={() => setSelectedMentor(mentor)}
              className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              Select {mentor.name}
            </button>
          </div>
        ))}
      </div>

      {/* Clinic Waiting Room Background */}
      <div className="relative w-full flex justify-center">
        <Image
          src="/herbal_clinic_waiting_room.png"
          alt="Herbal Clinic Waiting Room"
          width={1024}
          height={500}
          className="object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Display selected mentor information */}
      {selectedMentor && (
        <div className="mt-6 p-4 bg-white rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold">You selected {selectedMentor.name}!</h2>
          <p className="text-lg mt-2">Get ready to start your case study with {selectedMentor.name}.</p>
        </div>
      )}
    </div>
  );
}
