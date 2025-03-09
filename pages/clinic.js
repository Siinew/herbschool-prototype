import { useState, useEffect } from "react";
import Image from "next/image";
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
        console.error("Failed to fetch mentors:", error);
      }
    };

    fetchMentors();
  }, []);

  return (
    <div className="p-5 text-center">
      <h1 className="text-2xl font-bold mb-6">Welcome to our Herbal Clinic!</h1>

      <table className="mx-auto">
        <tbody>
          <tr>
            {mentors.map((mentor) => (
              <td key={mentor.id} className="p-4 text-center">
                <Image
                  src={mentor.image_url}
                  alt={mentor.name}
                  width={200}   // Adjust image size here
                  height={250}  // Adjust image height here
                  className="rounded-lg shadow-md"
                />
              </td>
            ))}
          </tr>
          <tr>
            {mentors.map((mentor) => (
              <td key={mentor.id} className="p-2">
                <button
                  onClick={() => setSelectedMentor(mentor)}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Select {mentor.name}
                </button>
              </td>
            ))}
          </tr>
        </tbody>
      </table>

      {selectedMentor && (
        <div className="mt-6">
          <p>
            You selected <strong>{selectedMentor.name}</strong>! Get ready to start your case!
          </p>
        </div>
      )}

      <div className="mt-8">
        <Image
          src="/herbal_clinic_waiting_room.png"
          alt="Clinic Waiting Room"
          width={800}   // Resize waiting room image if necessary
          height={400}
          className="rounded-lg shadow-lg mx-auto"
        />
      </div>
    </div>
  );
}
