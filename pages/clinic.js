import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Clinic() {
  const [mentor, setMentor] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function fetchMentor() {
      try {
        const res = await fetch("/api/getMentor");
        const data = await res.json();
        setMentor(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching mentor:", error);
        setLoading(false);
      }
    }
    fetchMentor();
  }, []);

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center bg-gray-100 p-10">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Herbal Clinic</h1>

      {loading ? (
        <p>Loading AI Mentor...</p>
      ) : mentor ? (
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
          <Image
            src={mentor.image_url}
            alt={mentor.name}
            width={150}
            height={150}
            className="rounded-full mb-4"
          />
          <h2 className="text-xl font-semibold">{mentor.name}</h2>
          <p className="text-gray-700 italic">{mentor.introduction}</p>
          <button
            onClick={() => router.push("/case-selection")}
            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Continue to Case Selection
          </button>
        </div>
      ) : (
        <p>Error loading mentor data.</p>
      )}
    </div>
  );
}
