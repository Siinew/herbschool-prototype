import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function CaseSelection() {
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function fetchCases() {
      try {
        const res = await fetch("/api/getCases");
        const data = await res.json();
        setCases(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching cases:", error);
        setLoading(false);
      }
    }
    fetchCases();
  }, []);

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center bg-gray-100 p-10">
      <h1 className="text-2xl font-bold mb-4">Select a Patient Case</h1>

      {loading ? (
        <p>Loading cases...</p>
      ) : cases.length > 0 ? (
        <ul className="bg-white p-6 rounded-lg shadow-lg w-3/4 max-w-lg">
          {cases.map((c) => (
            <li
              key={c.id}
              className="p-4 border-b hover:bg-gray-200 cursor-pointer"
              onClick={() => router.push(`/case/${c.id}`)}
            >
              <h2 className="text-lg font-semibold">{c.case_title}</h2>
              <p className="text-gray-600">{c.short_description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No cases available.</p>
      )}
    </div>
  );
}
