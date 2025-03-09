import { useState, useEffect } from "react";
import axios from "axios";

export default function Clinic() {
  const [mentors, setMentors] = useState([]);
  const [selectedMentor, setSelectedMentor] = useState(null);

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const response = await axios.get("/api/getMentors");
        setMentors(response.data);
      } catch (error) {
        console.error("Error fetching mentors:", error);
      }
    };

    fetchMentors();
  }, []);

  const handleSelectMentor = (mentor) => {
    setSelectedMentor(mentor);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-6">
        Welcome to our Herbal Clinic!
      </h1>

      {mentors.length === 0 ? (
        <p>No mentors available at the moment.</p>
      ) : (
        <table className="w-full text-center">
          <tbody>
            <tr>
              {mentors.map((mentor) => (
                <td key={mentor.id}>
                  <img
                    src={`/${mentor.image_url}`}
                    alt={mentor.name}
                    className="w-40 h-40 object-cover rounded shadow-lg mx-auto"
                  />
                </td>
              ))}
            </tr>
            <tr>
              {mentors.map((mentor) => (
                <td key={mentor.id} className="pt-2 text-lg font-semibold">
                  {mentor.name}
                </td>
              ))}
            </tr>
            <tr>
              {mentors.map((mentor) => (
                <td key={mentor.id} className="pb-2 italic text-gray-600">
                  {mentor.talents}
                </td>
              ))}
            </tr>
            <tr>
              {mentors.map((mentor) => (
                <td key={mentor.id}>
                  <button
                    onClick={() => handleSelectMentor(mentor)}
                    className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
                  >
                    Select {mentor.name}
                  </button>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      )}

      {selectedMentor && (
        <div className="text-center mt-6 text-xl font-semibold">
          You selected {selectedMentor.name}! Get ready to start your case!
        </div>
      )}

      <div className="mt-8">
        <img
          src="/herbal_clinic_waiting_room.png"
          alt="Herbal Clinic Waiting Room"
          className="w-full h-auto object-cover rounded shadow-lg"
        />
      </div>
    </div>
  );
}
