import { useState } from "react";

function calculateAge(dateStr: string) {
  if (!dateStr) return "";
  const dob = new Date(dateStr);
  const today = new Date();

  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  const dayDiff = today.getDate() - dob.getDate();
  if (years - 1 < 0) return "not born yet";
  else {
    if (dayDiff < 0) {
      months -= 1;
    }
    if (months < 0) {
      years -= 1;
      months += 12;
    }
    return `${years} years ${months} months old`;
  }
}

export default function CardContent() {
  const [birth, setBirth] = useState<string>("");
  const [age, setAge] = useState<string>("");

  return (
    <>
      <div className="mt-8 p-4">
        <p className="text-3xl font-bold text-left mb-4">Enter your birthday</p>
        <div className="mb-4">
          <input
            type="date"
            value={birth}
            onChange={(e) => setBirth(e.target.value)}
            className="w-full border-2 border-gray-300 rounded-md px-4 py-2"
          />
        </div>
        <input
          type="button"
          value="Calculate Age"
          onClick={() => setAge(calculateAge(birth))}
          className="w-full border-2 border-gray-300 rounded-md px-4 py-2 bg-neutral-500 text-cyan-50"
        />
        {age && (
          <p className="mt-4 decoration-dashed text-2xl w-full h-full">
            You are
            <span className="font-bold"> {age} </span>
          </p>
        )}
      </div>
    </>
  );
}
