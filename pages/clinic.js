import { useState, useEffect } from "react";

export default function ClinicMentorUI() {
  const [mentors, setMentors] = useState([]);
  const [selectedMentor, setSelectedMentor] = useState(null);

  useEffect(() => {
    // Fetch mentors from the API
    async function fetchMentors() {
      try {
        const response = await fetch("/api/getMentors");
        const data = await response.json();
        setMentors(data);
      } catch (error) {
        console.error("Error fetching mentors:", error);
      }
    }

    fetchMentors();
  }, []);

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-6">Welcome to our Herbal Clinic!</h1>

      {/* Mentor Selection */}
      <div className="grid grid-cols-4 gap-6 mb-6">
        {mentors.map((mentor) => (
          <div key={mentor.id} className="flex flex-col items-center">
            <img
              src={mentor.image_url}
              alt={mentor.name}
              className="w-40 h-40 object-cover rounded-md shadow-md"
            />
            <h2 className="mt-2 font-semibold text-lg">{mentor.name}</h2>
            <p className="text-sm text-gray-600">{mentor.talents}</p>
            <button
              onClick={() => setSelectedMentor(mentor)}
              className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
            >
              Select {mentor.name}
            </button>
          </div>
        ))}
      </div>

      {/* Display Selected Mentor */}
      {selectedMentor && (
        <div className="mt-6 text-lg font-semibold text-center">
          You selected <span className="text-green-600">{selectedMentor.name}</span>!
          Get ready to start your case!
        </div>
      )}

      {/* Clinic Waiting Room Image */}
      <div className="mt-6">
        <img
          src="/herbal_clinic_waiting_room.png"
          alt="Clinic Waiting Room"
          className="w-full max-w-4xl rounded-md shadow-lg"
        />
      </div>
    </div>
  );
}
