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
      <h1 className="text-3xl font-bold mb-6 text-center">Welcome to our Herbal Clinic!</h1>

      {/* Mentor Images (Row Layout) */}
      <div className="flex justify-center space-x-10 mb-4">
        {mentors.map((mentor) => (
          <div key={mentor.id} className="flex flex-col items-center">
            <Image
              src={mentor.image}
              alt={mentor.name}
              width={200}
              height={200}
              className="rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>

      {/* Mentor Selection Buttons (Row Layout) */}
      <div className="flex justify-center space-x-10 mb-6">
        {mentors.map((mentor) => (
          <button
            key={mentor.id}
            onClick={() => setSelectedMentor(mentor)}
            className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Select {mentor.name}
          </button>
        ))}
      </div>

      {/* Mentor Selection Response Text */}
      <div className="mb-6">
        {selectedMentor ? (
          <p className="text-lg font-semibold text-center">
            You selected <span className="font-bold">{selectedMentor.name}</span>! Get ready to start your case!
          </p>
        ) : (
          <p className="text-lg text-gray-600">Please select a mentor to begin.</p>
        )}
      </div>

      {/* Clinic Waiting Room Background */}
      <div className="w-full flex justify-center">
        <Image
          src="/herbal_clinic_waiting_room.png"
          alt="Herbal Clinic Waiting Room"
          width={1024}
          height={500}
          className="object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
