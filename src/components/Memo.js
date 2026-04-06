import { useState, useMemo } from "react";

// Artificial heavy calculation to demonstrate useMemo
const expensiveCalculation = (n) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    // block thread for a while
  }
  return n * 2;
};

const Memo = () => {
  const [isDark, setIsDark] = useState(false);
  const [num, setNum] = useState(0);

  // useMemo will ONLY re-run this expensive function when 'num' changes.
  // If you toggle the Dark Mode (which changes isDark), this will NOT re-run!
  const calculationResult = useMemo(() => expensiveCalculation(num), [num]);

  return (
    <div
      className={`${isDark ? "bg-gray-900 text-white" : "bg-white text-black"} max-w-4xl mx-auto border border-gray-500 mt-10 p-5`}
    >
      <button
        onClick={() => setIsDark(!isDark)}
        className="bg-blue-500 m-2 px-4 py-2 rounded-md text-white"
      >
        Toggle Dark Mode
      </button>
      <h1 className="font-bold text-xl my-4">Use Memo Concept</h1>

      <div className="flex flex-col gap-2 w-1/2">
        <input
          className="border border-black p-2 text-black bg-gray-200"
          type="number"
          value={num}
          onChange={(e) => setNum(parseInt(e.target.value) || 0)}
        />
        <p className="font-bold">Calculated Result: {calculationResult}</p>
      </div>

      <p className="mt-4 text-sm text-gray-500">
        Notice how changing the number has a delay (due to the expensive
        calculation), but toggling dark mode is instant because the calculation
        is memoized!
      </p>
    </div>
  );
};

export default Memo;
