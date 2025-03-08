import { useState, useEffect } from "react";
import Image from "next/image";

// Placeholder API call to fetch AI mentor data
async function fetchMentorData() {
  const response = await fetch("/api/getMentor"); // This API endpoint should retrieve mentor data from PostgreSQL
  return response.json();
}

export default function Clinic() {
  const [mentor, setMentor] = useState(null);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    async function getMentor() {
      const data = await fetchMentorData();
      setMentor(data);
    }
    getMentor();
  }, []);

  if (!mentor) return <p>Loading Mentor...</p>;

  return (
    <div className="relative w-full h-screen flex flex-col items-center bg-gray-200">
      {/* Clinic Waiting Room Background */}
      <div className="relative w-full h-3/4">
        <Image
          src="/herbal_clinic_waiting_room.png"
          alt="Clinic Waiting Room"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Mentor Introduction Box */}
      {showIntro && (
        <div className="absolute bottom-10 left-10 bg-white shadow-lg rounded-lg p-6 flex items-center w-2/3">
          <Image
            src={`/mentors/${mentor.image}`} // Mentor portrait from database
            alt={mentor.name}
            width={150}
            height={150}
            className="rounded-full"
          />
          <div className="ml-4">
            <h2 className="text-xl font-bold">{mentor.name}</h2>
            <p className="italic text-gray-600">{mentor.personality}</p>
            <p className="mt-2">{mentor.introduction}</p>
            <button
              onClick={() => setShowIntro(false)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              Start Case
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
