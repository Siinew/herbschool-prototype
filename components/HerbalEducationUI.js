import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HerbalEducationUI() {
  const [view, setView] = useState("map");

  return (
    <div className="relative w-full h-screen bg-green-100 flex flex-col items-center overflow-hidden">
      {/* Navigation Buttons */}
      <div className="w-full flex justify-center space-x-4 py-4 bg-gray-800 text-white">
        <button className="px-4 py-2 bg-green-500 rounded hover:bg-green-700" onClick={() => setView("map")}>World Map</button>
        <button className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-700" onClick={() => setView("clinical_herbalism")}>Clinical Herbalism</button>
        <button className="px-4 py-2 bg-yellow-500 rounded hover:bg-yellow-700" onClick={() => setView("austere_medicine")}>Austere Medicine</button>
        <button className="px-4 py-2 bg-purple-500 rounded hover:bg-purple-700" onClick={() => setView("family_herbalism")}>Family Herbalism</button>
        <button className="px-4 py-2 bg-red-500 rounded hover:bg-red-700" onClick={() => setView("community_herbalism")}>Community Herbalism</button>
        <button className="px-4 py-2 bg-orange-500 rounded hover:bg-orange-700" onClick={() => setView("apothecary")}>Apothecary</button>
      </div>

      {view === "map" && (
        <div className="relative w-full h-full flex items-center justify-center">
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ce9b9988 (Changed back to the original, with buttons on top for now)
          <Image
            src="/herbal_world_map.png"
            alt="Herbal Education Map"
            width={1024}
            height={576}
            className="object-contain"
          />
<<<<<<< HEAD
=======
          <div className="relative">
            <Image
              src="/herbal_world_map.svg"
              alt="Herbal Education Map"
              width={1024}
              height={576}
              className="object-contain"
            />

          </div>
>>>>>>> c65fb78a (Update HerbalEducationUI.js)
=======
>>>>>>> ce9b9988 (Changed back to the original, with buttons on top for now)
        </div>
      )}
      
      {view === "clinical_herbalism" && (
        <div className="relative w-full h-full flex flex-col items-center justify-center bg-gray-200 p-10 overflow-hidden">
          <Image
            src="/village_street_clinical_herbalism.png"
            alt="Clinical Herbalism Village"
            width={1024}
            height={576}
            className="object-contain"
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> c1e8a60b (New changes and UI's)
          />        

        <Link href="/clinic">
          <button>Enter the Herbal Clinic</button>
        </Link>

<<<<<<< HEAD
=======
          />
>>>>>>> ce9b9988 (Changed back to the original, with buttons on top for now)
=======
>>>>>>> c1e8a60b (New changes and UI's)
          <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded" onClick={() => setView("case_studies")}>Go to Case Studies</button>
        </div>
      )}

      {view === "case_studies" && (
        <div className="relative w-full h-full flex flex-col items-center justify-center bg-gray-100 p-10">
          <h1 className="text-2xl font-bold mb-4">Case Study Education Module</h1>
          <p className="text-lg">Here, we will present case studies for Clinical Herbalism.</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={() => setView("clinical_herbalism")}>Back to Village</button>
        </div>
      )}
    </div>
  );
}
